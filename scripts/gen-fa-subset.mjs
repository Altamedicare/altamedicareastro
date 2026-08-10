// Generates the self-hosted Font Awesome 6.5.1 solid subset from the upstream
// CDN sources, replacing the render-blocking cdnjs stylesheet.
//
// Outputs:
//   public/fonts/fa-solid-subset.woff2   subset font (solid only)
//   public/fa-subset.css                 @font-face + only the icon rules we use
//   scripts/fa-subset-manifest.json      codepoints + class names, read by check-fa-icons.mjs
//
// Requires Python with fontTools + brotli:  python -m pip install fonttools brotli
// Run with: npm run fa:subset
//
// The icon list is NOT hand-maintained — it comes from scanning the source, so
// this and the build guard can never disagree about what is required.

import { writeFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { collectIcons } from './fa-usage.mjs';

const FA_VERSION = '6.5.1';
const CSS_URL = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${FA_VERSION}/css/all.min.css`;
const FONT_URL = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${FA_VERSION}/webfonts/fa-solid-900.woff2`;
// Integrity of the stylesheet this subset replaces. Verified at generation time so
// a silently-changed upstream can never be baked into the subset.
const CSS_SRI_SHA512 =
  'DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==';

const PY = process.env.PYTHON || 'python';

async function download(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

/**
 * Map every `.fa-name` class in the upstream CSS to its codepoint.
 * Rules are comma-grouped for aliases (`.fa-home:before,.fa-house:before{...}`),
 * so each selector in the list is mapped individually — that is what keeps
 * alias class names working after subsetting.
 */
function parseIconMap(css) {
  const map = new Map();
  const blockRe = /([^{}]+)\{\s*content:\s*"\\([0-9a-f]+)"\s*\}/gi;
  let block;
  while ((block = blockRe.exec(css))) {
    // Normalised to 4+ hex digits: the CSS writes "\24" for $ and "\f015" for
    // the PUA icons, and those must compare equal to the font's codepoints.
    const cp = block[2].toLowerCase().padStart(4, '0');
    const nameRe = /\.fa-([a-z0-9-]+):+before/gi;
    let name;
    while ((name = nameRe.exec(block[1]))) map.set(`fa-${name[1].toLowerCase()}`, cp);
  }
  return map;
}

const sri = (buf) =>
  execFileSync('openssl', ['dgst', '-sha512', '-binary'], { input: buf, maxBuffer: 1 << 28 })
    .toString('base64');

console.log(`Font Awesome ${FA_VERSION} solid subset\n`);

const [cssBuf, fontBuf] = await Promise.all([download(CSS_URL), download(FONT_URL)]);

const gotSri = sri(cssBuf);
if (gotSri !== CSS_SRI_SHA512) {
  throw new Error(
    `Upstream CSS integrity mismatch.\n  expected sha512-${CSS_SRI_SHA512}\n  got      sha512-${gotSri}`
  );
}
console.log(`  upstream CSS SRI  : verified (${cssBuf.length} bytes)`);
console.log(`  upstream WOFF2    : ${fontBuf.length} bytes`);

const iconMap = parseIconMap(cssBuf.toString('utf8'));
const { icons, totalRefs, files } = collectIcons();

const resolved = [];
const unresolved = [];
for (const name of icons) (iconMap.has(name) ? resolved : unresolved).push(name);

if (unresolved.length) {
  throw new Error(
    `These fa- classes are used in the source but are not Font Awesome ${FA_VERSION} icons:\n` +
      unresolved.map((u) => `  ${u}`).join('\n') +
      `\nFix the markup, or add the class to the modifier ignore list in scripts/fa-usage.mjs.`
  );
}

// Codepoints, deduped: aliases collapse onto the same glyph.
const codepoints = [...new Set(resolved.map((n) => iconMap.get(n)))].sort();

// A name can only resolve to a solid glyph if the solid font actually contains it.
// Regular/brands-only icons would otherwise subset away to nothing and render blank.
const tmp = join(tmpdir(), `fa-subset-${process.pid}`);
mkdirSync(tmp, { recursive: true });
const srcFont = join(tmp, 'fa-solid-900.woff2');
writeFileSync(srcFont, fontBuf);

const cmapOut = execFileSync(PY, [
  '-c',
  [
    'import sys',
    'from fontTools.ttLib import TTFont',
    'f = TTFont(sys.argv[1])',
    'print(",".join("%04x" % c for c in sorted(f.getBestCmap())))',
  ].join('\n'),
  srcFont,
]).toString().trim();
const cmap = new Set(cmapOut.split(',').filter(Boolean));

const missingGlyphs = resolved.filter((n) => !cmap.has(iconMap.get(n)));
if (missingGlyphs.length) {
  throw new Error(
    `These icons are not present in the SOLID font (wrong family?):\n` +
      missingGlyphs.map((n) => `  ${n} (U+${iconMap.get(n).toUpperCase()})`).join('\n')
  );
}

console.log(`  files scanned     : ${files}`);
console.log(`  icon classes used : ${resolved.length}`);
console.log(`  total usages      : ${totalRefs}`);
console.log(`  unique glyphs     : ${codepoints.length}`);

// --- subset the font -------------------------------------------------------
mkdirSync('public/fonts', { recursive: true });
const OUT_FONT = 'public/fonts/fa-solid-subset.woff2';

execFileSync(
  PY,
  [
    '-m', 'fontTools.subset', srcFont,
    `--unicodes=${codepoints.map((c) => `U+${c.toUpperCase()}`).join(',')}`,
    '--flavor=woff2',
    '--layout-features=',        // FA icons need no shaping features
    '--no-hinting',
    '--desubroutinize',
    '--drop-tables+=DSIG',
    '--name-IDs=',               // strip the name table; nothing reads it here
    `--output-file=${OUT_FONT}`,
  ],
  { stdio: ['ignore', 'inherit', 'inherit'] }
);

const subsetBytes = statSync(OUT_FONT).size;

// Verify the subset really carries every glyph we asked for.
const subsetCmap = new Set(
  execFileSync(PY, [
    '-c',
    [
      'import sys',
      'from fontTools.ttLib import TTFont',
      'f = TTFont(sys.argv[1])',
      'print(",".join("%04x" % c for c in sorted(f.getBestCmap())))',
    ].join('\n'),
    OUT_FONT,
  ]).toString().trim().split(',').filter(Boolean)
);
const dropped = codepoints.filter((c) => !subsetCmap.has(c));
if (dropped.length) throw new Error(`Subset dropped glyphs: ${dropped.join(', ')}`);

// --- emit the CSS ----------------------------------------------------------
// Only .fa-solid (+ the .fas alias) is defined. Regular and brands are
// deliberately absent: the site uses neither, and declaring their families
// would re-introduce font requests we just removed.
const rules = resolved
  .slice()
  .sort()
  .map((n) => `.${n}:before{content:"\\${iconMap.get(n)}"}`)
  .join('\n');

const css = `/*!
 * Font Awesome Free ${FA_VERSION} solid subset - self-hosted.
 * Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT - https://fontawesome.com/license/free
 * Copyright 2023 Fonticons, Inc.
 *
 * GENERATED FILE - do not edit by hand. Run \`npm run fa:subset\` instead.
 * Contains ${resolved.length} icon classes / ${codepoints.length} glyphs actually used by this site.
 * Adding a new fa-solid icon to the markup requires regenerating this file;
 * \`npm run fa:check\` fails the build if you forget.
 */
@font-face{
  font-family:"Font Awesome 6 Free";
  font-style:normal;
  font-weight:900;
  font-display:block;
  src:url("/fonts/fa-solid-subset.woff2") format("woff2");
}
.fa,.fa-solid,.fas{
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  display:var(--fa-display,inline-block);
  font-style:normal;
  font-variant:normal;
  line-height:1;
  text-rendering:auto;
  font-family:"Font Awesome 6 Free";
  font-weight:900;
}
.fa-fw{text-align:center;width:1.25em}
.fa-1x{font-size:1em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}
.fa-2x{font-size:2em}.fa-3x{font-size:3em}
.fa-spin{animation-name:fa-spin;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear}
@keyframes fa-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.fa-spin{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1}}
${rules}
`;

writeFileSync('public/fa-subset.css', css);

writeFileSync(
  'scripts/fa-subset-manifest.json',
  JSON.stringify(
    {
      faVersion: FA_VERSION,
      family: 'solid',
      source: { css: CSS_URL, font: FONT_URL, cssSriSha512: CSS_SRI_SHA512 },
      upstreamCssBytes: cssBuf.length,
      upstreamFontBytes: fontBuf.length,
      subsetFontBytes: subsetBytes,
      subsetCssBytes: Buffer.byteLength(css),
      iconCount: resolved.length,
      glyphCount: codepoints.length,
      totalUsages: totalRefs,
      icons: Object.fromEntries(resolved.slice().sort().map((n) => [n, `U+${iconMap.get(n).toUpperCase()}`])),
    },
    null,
    2
  ) + '\n'
);

const cssBytes = Buffer.byteLength(css);
console.log(`\n  wrote ${OUT_FONT}   ${subsetBytes} bytes (was ${fontBuf.length})`);
console.log(`  wrote public/fa-subset.css        ${cssBytes} bytes (was ${cssBuf.length})`);
console.log(`  wrote scripts/fa-subset-manifest.json`);
console.log(
  `\n  total: ${fontBuf.length + cssBuf.length} -> ${subsetBytes + cssBytes} bytes ` +
    `(${(100 - ((subsetBytes + cssBytes) / (fontBuf.length + cssBuf.length)) * 100).toFixed(1)}% smaller)`
);

// Build guard: fails if the markup uses a Font Awesome icon the self-hosted
// subset does not contain.
//
// Without this, adding `fa-solid fa-anchor` to a page renders an invisible box
// in production and nothing anywhere reports it — the exact failure mode that
// makes font subsetting risky. Run by `npm run build` before astro builds.
//
// Fix a failure by adding the icon and regenerating:  npm run fa:subset

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { collectIcons } from './fa-usage.mjs';

/** The static calculator/tool pages carry their own <link> to Font Awesome. */
const FILES_WITH_FA_LINK = readdirSync('public')
  .filter((f) => f.endsWith('.html'))
  .map((f) => join('public', f));

const MANIFEST = 'scripts/fa-subset-manifest.json';
const CSS = 'public/fa-subset.css';
const FONT = 'public/fonts/fa-solid-subset.woff2';

let failed = false;
const fail = (msg) => {
  console.error(`\n  FA subset check FAILED\n\n${msg}\n`);
  failed = true;
};

for (const f of [MANIFEST, CSS, FONT]) {
  if (!existsSync(f)) fail(`  Missing ${f}\n  Run: npm run fa:subset`);
}
if (failed) process.exit(1);

const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
const subsetted = new Set(Object.keys(manifest.icons));
const css = readFileSync(CSS, 'utf8');

const { icons, usage, totalRefs } = collectIcons();

const missing = icons.filter((i) => !subsetted.has(i));
if (missing.length) {
  fail(
    `  ${missing.length} icon(s) used in the source but NOT in the subset:\n` +
      missing
        .map((i) => `    ${i}  (${usage.get(i).count}x)  ${[...usage.get(i).files].slice(0, 3).join(', ')}`)
        .join('\n') +
      `\n\n  These would render as blank boxes in production.\n  Run: npm run fa:subset`
  );
}

// The manifest describes the CSS; if they drift, the manifest is lying and the
// guard above is checking nothing.
const cssMissing = [...subsetted].filter((i) => !css.includes(`.${i}:before{`));
if (cssMissing.length) {
  fail(
    `  ${cssMissing.length} icon(s) in the manifest have no rule in ${CSS}:\n` +
      cssMissing.map((i) => `    ${i}`).join('\n') +
      `\n\n  The manifest and stylesheet are out of sync. Run: npm run fa:subset`
  );
}

// Nothing should reintroduce the CDN we just removed. Both HTML comments and
// JS line comments are stripped first: MainLayout deliberately keeps a
// commented-out copy of the original tag (with its SRI hash) as the rollback
// record, and that must not trip the guard.
const cdnRefs = [];
for (const file of ['src/layouts/MainLayout.astro', ...FILES_WITH_FA_LINK]) {
  if (!existsSync(file)) continue;
  const live = readFileSync(file, 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^\s*\/\/.*$/gm, '');
  if (/<link[^>]*cdnjs\.cloudflare\.com[^>]*font-awesome/i.test(live)) cdnRefs.push(file);
}
if (cdnRefs.length) fail(`  Font Awesome CDN stylesheet is back in:\n${cdnRefs.map((f) => `    ${f}`).join('\n')}`);

if (failed) process.exit(1);

const unused = [...subsetted].filter((i) => !icons.includes(i));
console.log(
  `  FA subset OK - ${icons.length} icons / ${totalRefs} usages covered by ` +
    `${manifest.glyphCount} glyphs (${manifest.subsetFontBytes} B)` +
    (unused.length ? `; ${unused.length} subsetted but unused: ${unused.join(', ')}` : '')
);

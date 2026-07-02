// scripts/i18n-diff.mjs — the 3-diff extraction-verification harness.
//   npm run i18n-diff -- <before.html> <after.html>
//
// Proves a content extraction preserved the master page (playbook §7 "glyph
// bar"). Byte-for-byte identity is NOT the bar — data-driven rendering
// normalizes entities/whitespace and scoped-style hashes shift. The bar is:
//   1. TAG STRUCTURE identical (data-astro-cid-* scope hashes stripped)
//   2. VISIBLE TEXT identical (tags/scripts/styles stripped, entities
//      decoded, all whitespace removed)
//   3. ZERO ENTITY LEAKS in the after file (&amp;#x2019; rendered as text)
// Exits non-zero on any failure, printing the first divergence.

import { readFileSync } from 'node:fs';

const [before, after] = process.argv.slice(2);
if (!before || !after) {
  console.error('Usage: node scripts/i18n-diff.mjs <before.html> <after.html>');
  process.exit(1);
}
const beforeHtml = readFileSync(before, 'utf8');
const afterHtml = readFileSync(after, 'utf8');

// ── helpers ──────────────────────────────────────────────────────────────────
const NAMED_ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”',
  mdash: '—', ndash: '–', hellip: '…', middot: '·',
  rsaquo: '›', lsaquo: '‹', raquo: '»', laquo: '«',
  copy: '©', reg: '®', trade: '™', bull: '•',
  times: '×', dagger: '†', sect: '§', deg: '°',
};

function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-zA-Z]+);/g, (m, name) => NAMED_ENTITIES[name] ?? m);
}

/** Visible text: strip script/style bodies, comments, tags; decode entities
 *  (twice, to flatten &amp;rsquo; the same on both sides); drop whitespace. */
function visibleText(html) {
  return decodeEntities(decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<[^>]+>/g, ''),
  )).replace(/[\s ]+/g, '');
}

/** Tag sequence with Astro scope hashes stripped. Entities inside tags are
 *  decoded before comparison: an attribute authored as placeholder="&ldquo;…"
 *  and re-rendered from a JSON string holding the real “ glyph is the same
 *  DOM — the glyph bar (§7), applied to attributes. */
function tagSequence(html) {
  return (html.replace(/<!--[\s\S]*?-->/g, '').match(/<[^>]*>/g) ?? []).map((t) =>
    decodeEntities(
      t.replace(/\s+data-astro-cid-\w+(="[^"]*")?/g, '').replace(/\s+/g, ' ').trim(),
    ),
  );
}

function firstDivergence(a, b, label) {
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      console.error(`  first ${label} divergence at index ${i}:`);
      console.error(`    before: ${JSON.stringify(a.slice(Math.max(0, i - 2), i + 3))}`);
      console.error(`    after:  ${JSON.stringify(b.slice(Math.max(0, i - 2), i + 3))}`);
      return;
    }
  }
  console.error(`  lengths differ (${a.length} vs ${b.length}); common prefix identical.`);
  console.error(`    tail of longer side: ${JSON.stringify((a.length > b.length ? a : b).slice(n, n + 3))}`);
}

// ── the three diffs ──────────────────────────────────────────────────────────
let failed = false;

const tagsBefore = tagSequence(beforeHtml);
const tagsAfter = tagSequence(afterHtml);
if (tagsBefore.join('\n') === tagsAfter.join('\n')) {
  console.log(`✓ tag structure identical (${tagsAfter.length} tags, scope hashes stripped)`);
} else {
  failed = true;
  console.error('✗ TAG STRUCTURE differs:');
  firstDivergence(tagsBefore, tagsAfter, 'tag');
}

const textBefore = visibleText(beforeHtml);
const textAfter = visibleText(afterHtml);
if (textBefore === textAfter) {
  console.log(`✓ visible text identical (${textAfter.length} glyphs, whitespace-insensitive, entities decoded)`);
} else {
  failed = true;
  console.error('✗ VISIBLE TEXT differs:');
  firstDivergence([...textBefore], [...textAfter], 'glyph');
}

const leaks = afterHtml.match(/&amp;#x?[0-9a-fA-F]+;|&amp;[a-zA-Z]+;/g) ?? [];
if (leaks.length === 0) {
  console.log('✓ zero entity leaks');
} else {
  failed = true;
  console.error(`✗ ENTITY LEAKS (${leaks.length}): ${[...new Set(leaks)].join(' ')}`);
}

process.exit(failed ? 1 : 0);

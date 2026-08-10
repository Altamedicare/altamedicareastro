// Single source of truth for "which Font Awesome icons does this site use".
//
// Both the subset generator (gen-fa-subset.mjs) and the build guard
// (check-fa-icons.mjs) import this, so they can never disagree about the
// required glyph set.
//
// Why a whole-token scan rather than parsing class attributes: most icons on
// this site are NOT literals in the markup. They come from data —
// `icon: 'fa-pills'` in src/consts.ts, src/data/faqs.ts and the calculator
// pages' inline JS, rendered through `class={`fa-solid ${cat.icon}`}` or string
// concatenation. A class-attribute parser sees `fa-solid` and misses the icon
// name entirely, which is exactly how a subset ends up missing a glyph that
// only renders on one dynamic branch. Scanning every `fa-*` token catches the
// literal and the data-driven cases with one rule.
//
// The trade-off is false positives, which the generator turns into a hard
// error rather than silently subsetting away. If a genuine non-icon `fa-*`
// token ever appears, add it to IGNORE below.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOTS = ['src', 'public'];
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'pagefind', '.astro']);
const EXTS = new Set(['.astro', '.html', '.md', '.mdx', '.ts', '.js', '.mjs', '.json', '.jsx', '.tsx']);

/** Font Awesome utility/modifier classes — real classes, but not icons. */
const MODIFIERS = new Set([
  'fa-solid', 'fa-regular', 'fa-brands', 'fa-classic', 'fa-sharp', 'fa-duotone', 'fa-light', 'fa-thin',
  'fa-fw', 'fa-xs', 'fa-sm', 'fa-lg', 'fa-xl', 'fa-2xl',
  'fa-1x', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x', 'fa-6x', 'fa-7x', 'fa-8x', 'fa-9x', 'fa-10x',
  'fa-spin', 'fa-spin-pulse', 'fa-spin-reverse', 'fa-pulse', 'fa-border',
  'fa-pull-left', 'fa-pull-right',
  'fa-rotate-90', 'fa-rotate-180', 'fa-rotate-270', 'fa-rotate-by',
  'fa-flip', 'fa-flip-horizontal', 'fa-flip-vertical', 'fa-flip-both',
  'fa-stack', 'fa-stack-1x', 'fa-stack-2x', 'fa-inverse',
  'fa-beat', 'fa-beat-fade', 'fa-fade', 'fa-shake', 'fa-bounce',
  'fa-ul', 'fa-li', 'fa-layers', 'fa-layers-text', 'fa-layers-counter', 'fa-swap-opacity',
  'fa-icon', 'fa-subset',
]);

/** Non-icon `fa-*` tokens that legitimately appear in the source. */
const IGNORE = new Set([
  'fa-solid-subset', // our own font filename
]);

function walk(dir, out) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (EXTS.has(extname(p))) out.push(p);
  }
}

export function collectIcons() {
  const files = [];
  for (const root of ROOTS) walk(root, files);

  /** @type {Map<string, {count: number, files: Set<string>}>} */
  const usage = new Map();
  for (const file of files) {
    const src = readFileSync(file, 'utf8');
    for (const m of src.matchAll(/\bfa-[a-z0-9]+(?:-[a-z0-9]+)*\b/g)) {
      const name = m[0];
      if (MODIFIERS.has(name) || IGNORE.has(name)) continue;
      if (!usage.has(name)) usage.set(name, { count: 0, files: new Set() });
      const rec = usage.get(name);
      rec.count++;
      rec.files.add(file);
    }
  }

  const icons = [...usage.keys()].sort();
  return {
    icons,
    usage,
    files: files.length,
    totalRefs: [...usage.values()].reduce((a, b) => a + b.count, 0),
  };
}

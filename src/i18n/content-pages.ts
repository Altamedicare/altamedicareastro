// src/i18n/content-pages.ts — data-only registry of EXTRACTED pages.
//
// Convention: content key === URL slug (about ↔ /about.html), so this is a
// flat list, not a mapping. A page appears here once its copy has been
// extracted to src/i18n/content/en/{key}.json and 3-diff verified
// (npm run i18n-diff — see scripts/i18n-diff.mjs).
//
// The dynamic [locale] route's getStaticPaths filters on THIS list — never on
// its component map. getStaticPaths runs in an isolated prerender chunk that
// cannot see .astro component imports (playbook §6.4 gotcha).
export const CONTENT_PAGES = [
  'about',
  'contact',
  'turning-65',
] as const;

export type ContentKey = (typeof CONTENT_PAGES)[number];

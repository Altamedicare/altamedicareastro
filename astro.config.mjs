import { defineConfig } from 'astro/config';

// SEO infrastructure upgrade — NOT a redesign.
// build.format: 'file' preserves the existing *.html URLs exactly (URL parity → no 301s needed).
// Sitemap is GENERATED at src/pages/sitemap.xml.ts (the @astrojs/sitemap integration is
// incompatible with format:'file' in this Astro version, so we emit it ourselves).
// 301s live in public/_redirects.
//
// i18n: no Astro i18n config block is used — localized routes are emitted by
// src/pages/[locale]/[...path].astro from committed translations only
// (existence-aware; see src/i18n/content.ts and I18N-PORT-LOG.md).
export default defineConfig({
  site: 'https://altamedicare.com',
  build: { format: 'file' },
});

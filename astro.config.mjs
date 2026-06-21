import { defineConfig } from 'astro/config';

// SEO infrastructure upgrade — NOT a redesign.
// build.format: 'file' preserves the existing *.html URLs exactly (URL parity → no 301s needed).
// Sitemap is hand-maintained at public/sitemap.xml (the @astrojs/sitemap integration is
// incompatible with format:'file' in this Astro version). 301s live in public/_redirects.
export default defineConfig({
  site: 'https://altamedicare.com',
  build: { format: 'file' },
});

import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// DEV ONLY. Internal links are extensionless ("/medicare-eligibility-calculator")
// because Cloudflare Pages serves public/foo.html at /foo. `astro dev` doesn't,
// so the static calculators in public/ 404'd locally while working in
// production. This rewrites an extensionless request to its public .html file
// when one exists — mirroring Cloudflare. configureServer never runs in
// `astro build`, so the built site is unaffected.
const publicDir = fileURLToPath(new URL('./public/', import.meta.url));
const cloudflareStyleHtml = {
  name: 'dev-extensionless-public-html',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const [path, query = ''] = (req.url ?? '').split('?');
      if (/^\/[A-Za-z0-9_-]+$/.test(path) && existsSync(`${publicDir}${path.slice(1)}.html`)) {
        req.url = `${path}.html${query ? `?${query}` : ''}`;
      }
      next();
    });
  },
};

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
  vite: { plugins: [cloudflareStyleHtml] },
});

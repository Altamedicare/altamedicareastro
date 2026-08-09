// src/i18n/urls.ts — the one place that decides what a PUBLIC AltaMedicare URL
// looks like.
//
// WHY THIS EXISTS
// Cloudflare Pages serves a build's `foo.html` at `/foo` and 308-redirects
// `/foo.html` → `/foo`. That normalization happens after the build and cannot be
// switched off, so `build.format:'file'` preserves .html on DISK but not in
// PRODUCTION. Before this module the site advertised .html everywhere — 197 of
// 198 sitemap URLs redirected, and every page's canonical pointed at a URL that
// redirected away from the page declaring it.
//
// The fix is signal-only: the built files are unchanged, we simply stop
// advertising URLs the platform redirects. Everything that emits a public URL —
// canonical, og:url, hreflang, sitemap <loc>, breadcrumb schema, internal links
// — routes through toPageUrl(), so the .html form survives in authored copy and
// in route slugs but never reaches the HTML.

/** Public form of a site path: strips the `.html` the platform would redirect
 *  away, and collapses an index page to the bare root. Query strings and hashes
 *  are preserved. Non-page paths (assets, external, protocol URLs) pass through
 *  untouched — they are never .html, and callers hand them over unchanged. */
export function toPageUrl(path: string): string {
  if (!path) return path;
  // Protocol-relative and absolute URLs: normalize only the pathname portion.
  const m = path.match(/^([a-z]+:)?\/\/[^/]+/i);
  if (m) return m[0] + toPageUrl(path.slice(m[0].length) || '/');

  const i = path.search(/[?#]/);
  const base = i === -1 ? path : path.slice(0, i);
  const rest = i === -1 ? '' : path.slice(i);

  if (!base.endsWith('.html')) return path;
  const stripped = base.slice(0, -'.html'.length);
  // "/index" and "/" both mean the site root; "/es/index" would mean "/es".
  const collapsed = stripped === '/index' || stripped === 'index' || stripped === ''
    ? '/'
    : stripped.replace(/\/index$/, '');
  return collapsed + rest;
}

// src/i18n/content.ts — the heart of the i18n system.
//
// Ported from vernalmedicareastro (see I18N-PORT-LOG.md). One authoritative
// source per human-facing string: page body copy lives in
// src/i18n/content/{locale}/{page}.json. This module reads ONLY committed
// files (import.meta.glob — no API, no fs at request time), so builds stay
// deterministic and offline-capable.
//
// EXISTENCE-AWARENESS lives here and nowhere else: routes, hreflang tags, the
// language switcher, and internal links all derive from getAvailableLocales /
// getLocalizedContent, so nothing can ever emit a link to a page that doesn't
// exist. Missing translations fall back to the English master — never to a 404.
//
// URL POLICY (this repo): build.format:'file' + .html URLs. Master pages sit
// at /{slug}.html; localized pages at /{locale}/{slug}.html. Nested slugs
// (faq/enrollment, utah/davis-county/part-d) are supported as of P2.1 —
// localizeHref rewrites any .html path, and localePageHref emits
// /{locale}/{nested/slug}.html when that translation exists, else the
// absolutized English URL.

import { DEFAULT_LOCALE, LOCALES } from './locales';
import { CONTENT_PAGES } from './content-pages';

export const SITE_ORIGIN = 'https://altamedicare.com';

const files = import.meta.glob('./content/*/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, unknown>;

const load = (locale: string, page: string): unknown =>
  files[`./content/${locale}/${page}.json`];

/** Load a page's copy in a locale; falls back to the English master. For
 *  non-default locales the content's embedded hrefs are rewritten to stay
 *  in-locale where a translation exists, and absolutized to the English page
 *  where it doesn't (relative hrefs would otherwise break under /es/). */
export function getPageContent<T>(page: string, locale: string = DEFAULT_LOCALE): T {
  const master = load(DEFAULT_LOCALE, page);
  if (!master) throw new Error(`Missing master content file: src/i18n/content/${DEFAULT_LOCALE}/${page}.json`);
  if (locale === DEFAULT_LOCALE) return master as T;
  return deepLocalizeHrefs(load(locale, page) ?? master, locale) as T;
}

/** Locales that actually have a committed file for this page. */
export function getAvailableLocales(page: string): string[] {
  return Object.keys(files)
    .map((k) => k.match(/^\.\/content\/([^/]+)\/([^/]+)\.json$/))
    .filter((m): m is RegExpMatchArray => !!m && m[2] === page)
    .map((m) => m[1]);
}

/** Every committed non-default (locale, page) pair for a REGISTERED page —
 *  drives the [locale]/[...path] route's getStaticPaths. Data only. */
export function getLocalizedContent(): { locale: string; page: string }[] {
  const registered = new Set<string>(CONTENT_PAGES);
  return Object.keys(files)
    .map((k) => k.match(/^\.\/content\/([^/]+)\/([^/]+)\.json$/))
    .filter((m): m is RegExpMatchArray => !!m && m[1] !== DEFAULT_LOCALE && registered.has(m[2]))
    .map((m) => ({ locale: m[1], page: m[2] }));
}

/** A page's URL in a locale: localized if that translation exists, else the
 *  English master. Never returns a path that can 404. */
export function localePageHref(slug: string, locale: string): string {
  const localized =
    locale !== DEFAULT_LOCALE && getAvailableLocales(slug).includes(locale);
  if (!localized) return slug === 'index' ? '/' : `/${slug}.html`;
  return slug === 'index' ? `/${locale}.html` : `/${locale}/${slug}.html`;
}

/** Rewrite one href for a locale. Page links ("/x.html", "x.html", "/") go
 *  through localePageHref; external, mailto:, tel:, hash, and asset paths pass
 *  through untouched. Multi-segment paths (utah/…, faq/…, blog/…) also pass
 *  through — see the URL POLICY note above. */
export function localizeHref(href: string, locale: string): string {
  if (locale === DEFAULT_LOCALE) return href;
  if (/^(https?:)?\/\//i.test(href) || /^(mailto:|tel:|#)/i.test(href)) return href;
  const i = href.search(/[?#]/);
  const path = i === -1 ? href : href.slice(0, i);
  const rest = i === -1 ? '' : href.slice(i);
  // Page links are .html paths (or the root) — including NESTED slugs
  // (faq/enrollment.html, utah/davis-county/part-d.html) as of P2.1, the
  // prerequisite for localizing the FAQ and location clusters. Assets keep
  // passing through (they never end in .html); untranslated nested pages
  // (blog/…, medicare-news/…) resolve through localePageHref to their
  // absolutized English URL — existence-aware, nothing can 404.
  const isPage = path === '/' || /^\/?[A-Za-z0-9_-]+(\/[A-Za-z0-9_-]+)*\.html$/.test(path);
  if (!isPage) return href;
  const slug = path === '/' ? 'index' : path.replace(/^\/+/, '').replace(/\.html$/, '');
  return localePageHref(slug, locale) + rest;
}

/** Rewrite every href="…" inside an extracted HTML string (set:html copy). */
export function localizeHtml(html: string, locale: string): string {
  if (locale === DEFAULT_LOCALE || !html.includes('href="')) return html;
  return html.replace(/href="([^"]*)"/g, (_m, h: string) => `href="${localizeHref(h, locale)}"`);
}

function deepLocalizeHrefs(v: unknown, locale: string): unknown {
  if (typeof v === 'string') return localizeHtml(v, locale);
  if (Array.isArray(v)) return v.map((x) => deepLocalizeHrefs(x, locale));
  if (v && typeof v === 'object')
    return Object.fromEntries(
      Object.entries(v).map(([k, x]) => [k, deepLocalizeHrefs(x, locale)]),
    );
  return v;
}

/** Existence-aware hreflang alternates (absolute URLs, incl. self + x-default).
 *  Empty when the page has fewer than 2 locales — untranslated pages emit
 *  nothing and are byte-identical to their pre-i18n output. */
export function hreflangAlternates(slug: string): { code: string; href: string }[] {
  const avail = getAvailableLocales(slug);
  if (avail.length < 2) return [];
  const abs = (locale: string) =>
    SITE_ORIGIN +
    (locale === DEFAULT_LOCALE
      ? slug === 'index' ? '/' : `/${slug}.html`
      : slug === 'index' ? `/${locale}.html` : `/${locale}/${slug}.html`);
  // Widen explicitly: LOCALES is `as const`, so mapped `code` narrows to the
  // locale union and rejects 'x-default' (playbook §10 broadened-union gotcha).
  const out: { code: string; href: string }[] = LOCALES.filter((l) =>
    avail.includes(l.code),
  ).map((l) => ({ code: l.hreflang, href: abs(l.code) }));
  out.push({ code: 'x-default', href: abs(DEFAULT_LOCALE) });
  return out;
}

/** Replace {name} placeholders (phone, figures, computed counts…) in extracted copy. */
export function interp(s: string, vars: Record<string, string | number>): string {
  let out = s;
  for (const [k, v] of Object.entries(vars)) out = out.replaceAll(`{${k}}`, String(v));
  return out;
}

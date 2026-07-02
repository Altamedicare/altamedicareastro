// src/i18n/locales.ts — locale registry + pure URL helpers.
//
// Ported from vernalmedicareastro (v2 of the multilingual framework — see
// I18N-PORT-LOG.md for the change classification). Master language is English
// at the root (/page.html); other locales are prefixed (/es/page.html). This
// file is data + pure functions only — safe to import from anywhere, including
// getStaticPaths' isolated prerender chunk.

export interface LocaleMeta {
  /** URL prefix + content directory name. */
  code: string;
  /** Native name, shown in the language switcher. */
  name: string;
  /** og:locale value. */
  ogLocale: string;
  /** hreflang attribute value. */
  hreflang: string;
}

export const LOCALES = [
  { code: 'en', name: 'English', ogLocale: 'en_US', hreflang: 'en' },
  { code: 'es', name: 'Español', ogLocale: 'es_US', hreflang: 'es' },
] as const satisfies readonly LocaleMeta[];

export const DEFAULT_LOCALE = 'en';
export type Locale = (typeof LOCALES)[number]['code'];

export function getLocaleMeta(code: string): LocaleMeta {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

/** First path segment → locale ("/es/x.html" → 'es'; "/x.html" → 'en').
 *  Strips a trailing .html so the locale home at /es.html also parses. */
export function getLangFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0]?.replace(/\.html$/, '');
  const hit = LOCALES.find((l) => l.code === seg && l.code !== DEFAULT_LOCALE);
  return (hit?.code ?? DEFAULT_LOCALE) as Locale;
}

/** Content key for the current URL: locale prefix + .html stripped; "" → "index".
 *  ("/es/turning-65.html" → "turning-65", "/" → "index"). */
export function pageSlugFromUrl(url: URL): string {
  const segs = url.pathname.split('/').filter(Boolean);
  const first = segs[0]?.replace(/\.html$/, '');
  if (first && LOCALES.some((l) => l.code === first && l.code !== DEFAULT_LOCALE)) segs.shift();
  const rest = segs.join('/').replace(/\.html$/, '');
  return rest === '' ? 'index' : rest;
}

// ── UI-chrome dictionary (shared layout strings — NOT page body copy) ────────
// Page copy lives in src/i18n/content/{locale}/{page}.json; strings that the
// shared layouts render (headings, labels, aria, CTA defaults, …) live here,
// flat, with master fallback. Partial dictionaries per locale are fine.
//
// INVARIANT: every `en` value must be byte-identical to the component literal
// it replaces — English output must not change. Entries are added during the
// chrome-localization milestone (Phase 1), each verified against the literal
// it replaces. Do NOT bulk-copy entries from another site's dictionary.
export const strings = {
  en: {
    'switcher.label': 'Language',
  },
  es: {
    'switcher.label': 'Idioma',
  },
} as const;

export type StringKey = keyof typeof strings.en;

/** Chrome-string translator with master fallback and {var} interpolation. */
export function t(
  key: StringKey,
  locale: string = DEFAULT_LOCALE,
  vars?: Record<string, string | number>,
): string {
  const dict = (strings as unknown as Record<string, Record<string, string>>)[locale];
  let s = dict?.[key] ?? strings.en[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
  return s;
}

// ── Data-driven label translations ───────────────────────────────────────────
// Some chrome text is DATA, not a component literal: nav labels, the tool
// registry titles in consts.ts, category titles. Their authoritative source
// stays the data module (English); translations live here, keyed by the exact
// English string, with fallback to English. (Miss = English shown — never an
// error, matching the master-fallback rule.) Populated during Phase 1 chrome
// localization; empty until then.
const LABELS: Record<string, Record<string, string>> = {
  es: {},
};

/** Translate a data-driven label (nav item, tool title, category name) for a
 *  locale; returns the English label unchanged when no translation exists. */
export function localizeLabel(label: string, locale: string): string {
  if (locale === DEFAULT_LOCALE) return label;
  return LABELS[locale]?.[label] ?? label;
}

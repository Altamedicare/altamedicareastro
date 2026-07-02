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
    // Header (MainLayout.astro)
    'logo.alt': 'AltaMedicare logo',
    'nav.aria': 'Main navigation',
    'nav.home': 'Home',
    'nav.basics': 'Medicare Basics',
    'nav.plans': 'Plans',
    'nav.ma': 'Medicare Advantage',
    'nav.supplement': 'Medicare Supplement',
    'nav.pdp': 'Prescription Drug Plans',
    'nav.dual': 'Dual Eligible / Medicaid',
    'nav.dvh': 'Dental, Vision, Hearing',
    'nav.tools': 'Tools',
    'nav.calcEligibility': 'Medicare Eligibility Calculator',
    'nav.calcIrmaa': 'IRMAA Calculator',
    'nav.calcPenalty': 'Late Enrollment Penalty Calculator',
    'nav.calcDrugCost': 'Drug Cost Calculator',
    'nav.allTools': 'All Medicare Tools &rarr;', // rendered via set:html
    'nav.drugSavings': 'Drug Savings',
    'nav.turning65': 'Turning 65',
    'nav.news': 'Medicare News',
    'nav.about': 'About Bret',
    'nav.contact': 'Contact',
    'header.searchAria': 'Search the site',
    'header.callAria': 'Call AltaMedicare',
    'header.menuAria': 'Toggle menu',
    // Footer
    'footer.blurb': 'Trusted local Medicare education and guidance for Utah families. Based in Orem, serving the entire state.',
    'footer.plansHeading': 'Plans',
    'footer.resourcesHeading': 'Resources',
    'footer.contactHeading': 'Contact',
    'footer.blog': 'Medicare Blog',
    'footer.faq': 'Medicare FAQ',
    'footer.utah': 'Medicare in Utah',
    'footer.tools': 'Medicare Tools',
    'footer.schedule': 'Schedule a Call',
    'footer.hours': 'Mon–Fri: 9am–6pm MT',
    'footer.rights': 'AltaMedicare. All rights reserved. · Bret Swope, Licensed Insurance Agent',
    // Ask Bret chat
    'chat.bubbleAria': 'Ask Bret a question',
    'chat.bubble': 'Ask Bret',
    'chat.closeAria': 'Close chat',
    'chat.heading': 'Have a Medicare question?',
    'chat.sub': 'Bret personally responds — usually within a few hours.',
    'chat.pick': "Pick the option that's easiest for you:",
    'chat.call': 'Call {phone}',
    'chat.email': 'Email Bret',
    'chat.noBots': 'No automated bots — just a real Utah Medicare agent.',
    // Search modal shell (runtime search-UI strings inside the inline script
    // remain English for now — documented boundary, see I18N-PORT-LOG.md)
    'search.modalAria': 'Search AltaMedicare',
  },
  es: {
    'switcher.label': 'Idioma',
    'logo.alt': 'Logotipo de AltaMedicare',
    'nav.aria': 'Navegación principal',
    'nav.home': 'Inicio',
    'nav.basics': 'Conceptos básicos de Medicare',
    'nav.plans': 'Planes',
    'nav.ma': 'Medicare Advantage',
    'nav.supplement': 'Seguro Suplementario de Medicare',
    'nav.pdp': 'Planes de medicamentos recetados',
    'nav.dual': 'Doble elegibilidad / Medicaid',
    'nav.dvh': 'Dental, visión y audición',
    'nav.tools': 'Herramientas',
    'nav.calcEligibility': 'Calculadora de elegibilidad para Medicare',
    'nav.calcIrmaa': 'Calculadora de IRMAA',
    'nav.calcPenalty': 'Calculadora de multas por inscripción tardía',
    'nav.calcDrugCost': 'Calculadora de costos de medicamentos',
    'nav.allTools': 'Todas las herramientas de Medicare &rarr;',
    'nav.drugSavings': 'Ahorros en medicamentos',
    'nav.turning65': 'Cumplir 65 años',
    'nav.news': 'Noticias de Medicare',
    'nav.about': 'Acerca de Bret',
    'nav.contact': 'Contacto',
    'header.searchAria': 'Buscar en el sitio',
    'header.callAria': 'Llamar a AltaMedicare',
    'header.menuAria': 'Abrir o cerrar el menú',
    'footer.blurb': 'Educación y orientación local de confianza sobre Medicare para las familias de Utah. Con sede en Orem, sirviendo a todo el estado.',
    'footer.plansHeading': 'Planes',
    'footer.resourcesHeading': 'Recursos',
    'footer.contactHeading': 'Contacto',
    'footer.blog': 'Blog de Medicare',
    'footer.faq': 'Preguntas frecuentes de Medicare',
    'footer.utah': 'Medicare en Utah',
    'footer.tools': 'Herramientas de Medicare',
    'footer.schedule': 'Agendar una llamada',
    'footer.hours': 'Lun–Vie: 9am–6pm MT',
    'footer.rights': 'AltaMedicare. Todos los derechos reservados. · Bret Swope, agente de seguros con licencia',
    'chat.bubbleAria': 'Hágale una pregunta a Bret',
    'chat.bubble': 'Pregúntele a Bret',
    'chat.closeAria': 'Cerrar el chat',
    'chat.heading': '¿Tiene una pregunta sobre Medicare?',
    'chat.sub': 'Bret responde personalmente — normalmente en unas pocas horas.',
    'chat.pick': 'Elija la opción que le resulte más fácil:',
    'chat.call': 'Llame al {phone}',
    'chat.email': 'Envíele un correo a Bret',
    'chat.noBots': 'Sin robots automatizados — solo un verdadero agente de Medicare en Utah.',
    'search.modalAria': 'Buscar en AltaMedicare',
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

// src/i18n/ai-summary.ts — the entity summary ("AI Summary Block") per locale.
//
// NEVER machine-translated. Structure follows compliance.ts: a locale-keyed
// object of fixed, fact-bearing sentences with English fallback. This is NOT
// page body copy (that lives in src/i18n/content/{locale}/*.json) and NOT a
// chrome label (locales.ts `strings`) — it is one entity statement reused
// verbatim across every page, so it gets its own module.
//
// EVERY CLAUSE MIRRORS AN EXISTING AUTHORITATIVE SOURCE. Do not add a claim
// here that is not already asserted somewhere below — the visible text and the
// InsuranceAgency schema must corroborate each other, never diverge:
//   name / '@type' InsuranceAgency / founder / address Alpine, UT
//                                  → layouts/MainLayout.astro (localBusiness)
//   "Independent…", "comparing Medicare Advantage, Medigap (Medicare
//   Supplement), and Part D", "Call or text", "based in Alpine"
//                                  → pages/llms.txt.ts (lines 44, 111-112)
//   "Educational, no-pressure Medicare help"
//                                  → i18n/content/{locale}/about.json page.description
//   "Founder · Licensed Medicare Agent" / "Based in Alpine, Utah"
//                                  → i18n/content/{locale}/about.json card
//   "Serving the entire state of Utah"
//                                  → i18n/content/{locale}/contact.json officeNote
//   "No-Cost Consultations"        → i18n/content/{locale}/index.json trustBar
//   phone                          → consts.ts PHONE_DISPLAY / PHONE_TEL
//
// Spanish is assembled from committed ES strings (never translated from the
// English above) and follows SPANISH-STYLE.md: formal `usted`, first person
// plural for the practice, and glossary.json pins honored — AltaMedicare,
// Bret Swope, Medicare Advantage and Medigap verbatim; Medicare Supplement →
// "Seguro Suplementario de Medicare"; Part D → "Parte D".
//
// ES USES ONLY VOCABULARY THAT ALREADY EXISTS IN THE COMMITTED SPANISH CORPUS.
// An earlier draft opened with "una agencia independiente de Medicare"; neither
// "agencia" nor "independiente" appears anywhere in src/i18n/content/es or
// src/i18n/shared/*/es.json, so both were removed rather than granted an
// exception. If a reviewer later pins them in glossary.json, the opener can be
// revisited — until then, do not reintroduce them here.
//
// The five served counties are deliberately absent from `body`: county detail
// belongs to `placeBody`, where {placeName} states it precisely. Business hours
// are deliberately absent too — they already live in locales.ts 'footer.hours'
// and contact.json phoneHoursHtml, and a third copy would be a drift vector.

import { DEFAULT_LOCALE } from './locales';

export interface AiSummaryCopy {
  /** Default entity summary. Interpolates {phone} and {phoneTel}. */
  body: string;
  /** Location pages. Also interpolates {placeName}. Leads with the place and
   *  drops the state from the Alpine reference, so "Utah" never doubles up. */
  placeBody: string;
  /** Homepage. Shorter: the hero (h1 + subhead + trustBar) already states much
   *  of this, so the block stays two sentences to avoid a wall of repetition. */
  compactBody: string;
}

const AI_SUMMARY = {
  en: {
    body:
      'AltaMedicare is an independent Medicare agency in Alpine, Utah, founded by Bret Swope, a licensed Medicare agent. ' +
      'We provide educational, no-pressure help comparing Medicare Advantage, Medigap (Medicare Supplement), and Part D at no cost, serving the entire state of Utah. ' +
      'Call or text <a href="{phoneTel}">{phone}</a>.',
    placeBody:
      'Medicare help in {placeName} from AltaMedicare — an independent agency founded by Bret Swope, a licensed Medicare agent based in Alpine. ' +
      'We compare Medicare Advantage, Medigap (Medicare Supplement), and Part D at no cost, with no pressure. ' +
      'Call or text <a href="{phoneTel}">{phone}</a>.',
    compactBody:
      'AltaMedicare is an independent Medicare agency in Alpine, Utah, founded by Bret Swope, a licensed Medicare agent, serving the entire state. ' +
      'We help you compare Medicare Advantage, Medigap (Medicare Supplement), and Part D at no cost — call or text <a href="{phoneTel}">{phone}</a>.',
  },
  es: {
    body:
      'AltaMedicare, fundada por Bret Swope, agente de Medicare con licencia, ofrece ayuda educativa con Medicare, sin presión y sin costo, desde Alpine y para todo Utah. ' +
      'Comparamos Medicare Advantage, Medigap (Seguro Suplementario de Medicare) y la Parte D. ' +
      'Llame o envíe un mensaje de texto al <a href="{phoneTel}">{phone}</a>.',
    placeBody:
      'Ayuda con Medicare en {placeName} de parte de AltaMedicare, fundada por Bret Swope, agente de Medicare con licencia, desde Alpine. ' +
      'Comparamos Medicare Advantage, Medigap (Seguro Suplementario de Medicare) y la Parte D sin costo y sin presión. ' +
      'Llame o envíe un mensaje de texto al <a href="{phoneTel}">{phone}</a>.',
    compactBody:
      'AltaMedicare, fundada por Bret Swope, agente de Medicare con licencia, ofrece ayuda educativa con Medicare, sin presión y sin costo, desde Alpine y para todo Utah. ' +
      'Comparamos Medicare Advantage, Medigap (Seguro Suplementario de Medicare) y la Parte D — llame o envíe un mensaje de texto al <a href="{phoneTel}">{phone}</a>.',
  },
} as const satisfies Record<string, AiSummaryCopy>;

/** Locale-aware entity summary with English-master fallback. */
export function aiSummary(locale: string): AiSummaryCopy {
  const loc =
    locale !== DEFAULT_LOCALE
      ? AI_SUMMARY[locale as keyof typeof AI_SUMMARY]
      : undefined;
  return loc ?? AI_SUMMARY[DEFAULT_LOCALE];
}

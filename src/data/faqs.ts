// FAQ system — TYPED ACCESSOR over the shared i18n module (ADR-002, P2.3).
// The strings live in src/i18n/shared/faqs/{locale}.json (field mask in
// src/i18n/shared/masks.json); this module keeps the interfaces and call-site
// API the pages have always used — pages never learn that JSON exists.
// The per-category src/data/faq/*.ts files are retired; edit the ENGLISH
// entries in src/i18n/shared/faqs/en.json and re-run npm run translate.

import type { Faq } from './faqTypes';
import { getSharedModule } from '../i18n/shared';

export interface FaqCategory {
  /** URL slug → /faq/<key>.html */
  key: string;
  title: string;
  blurb: string;
  icon: string;
  faqs: Faq[];
}

/** Template strings for the FAQ hub + category pages (translated with the
 *  module so the whole FAQ system ships as one unit). */
export interface FaqShell {
  catTitle: string;
  catDescription: string;
  faqCrumb: string;
  searchPlaceholder: string;
  filterAria: string;
  countSingular: string;
  countPlural: string;
  emptyHtml: string;
  compareLabel: string;
  talkLabel: string;
  backHtml: string;
  hubTitle: string;
  hubDescription: string;
  hubH1: string;
  hubLedeHtml: string;
  hubEyebrow: string;
  hubH2: string;
  hubIntro: string;
  questionSingular: string;
  questionPlural: string;
  ctaH2: string;
  ctaTextHtml: string;
  ctaAskLabel: string;
  ctaCallLabel: string;
}

interface FaqData {
  shell: FaqShell;
  categories: FaqCategory[];
}

/** The whole FAQ system in a locale (master fallback — never 404s). */
export const getFaqData = (locale?: string): FaqData =>
  getSharedModule<FaqData>('faqs', locale);

/** Locale-aware category list. Order drives the hub cards. */
export const getFaqCategories = (locale?: string): FaqCategory[] =>
  getFaqData(locale).categories;

export const getCategory = (key: string, locale?: string): FaqCategory | undefined =>
  getFaqCategories(locale).find((c) => c.key === key);

// ── English-default views (sitemap, llms.txt, legacy call sites) ────────────
export const FAQ_CATEGORIES: FaqCategory[] = getFaqCategories();

export const TOTAL_FAQS = FAQ_CATEGORIES.reduce((n, c) => n + c.faqs.length, 0);

import type { Faq } from './faqTypes';
import { faqs as enrollment } from './faq/enrollment';
import { faqs as costs } from './faq/costs';
import { faqs as prescriptionDrugs } from './faq/prescription-drugs';
import { faqs as medicareAdvantage } from './faq/medicare-advantage';
import { faqs as medigap } from './faq/medigap';
import { faqs as dualEligible } from './faq/dual-eligible';
import { faqs as turning65 } from './faq/turning-65';
import { faqs as general } from './faq/general';

export interface FaqCategory {
  /** URL slug → /faq/<key>.html */
  key: string;
  title: string;
  blurb: string;
  icon: string;
  faqs: Faq[];
}

// Order drives the hub cards. Each category's questions live in its own data
// file; the page rendering AND the FAQPage schema both read from `faqs` here.
export const FAQ_CATEGORIES: FaqCategory[] = [
  { key: 'enrollment',          title: 'Enrollment',          icon: 'fa-calendar-check',      blurb: 'Sign-up windows, deadlines, and penalties.',          faqs: enrollment },
  { key: 'costs',               title: 'Costs & Premiums',    icon: 'fa-sack-dollar',         blurb: 'Premiums, deductibles, IRMAA, and savings help.',     faqs: costs },
  { key: 'prescription-drugs',  title: 'Prescription Drugs',  icon: 'fa-pills',               blurb: 'Part D, coverage rules, and what your drugs cost.',   faqs: prescriptionDrugs },
  { key: 'medicare-advantage',  title: 'Medicare Advantage',  icon: 'fa-hospital',            blurb: 'How Advantage (Part C) plans work and who they fit.', faqs: medicareAdvantage },
  { key: 'medigap',             title: 'Medigap',             icon: 'fa-shield-halved',       blurb: 'Medicare Supplement plans, compared.',                faqs: medigap },
  { key: 'dual-eligible',       title: 'Dual Eligible',       icon: 'fa-hand-holding-heart',  blurb: 'Medicare + Medicaid, savings programs, D-SNPs.',      faqs: dualEligible },
  { key: 'turning-65',          title: 'Turning 65',          icon: 'fa-cake-candles',        blurb: 'What to do as you age into Medicare.',                faqs: turning65 },
  { key: 'general',             title: 'General Medicare',    icon: 'fa-circle-question',      blurb: 'The basics: parts, eligibility, and coverage.',       faqs: general },
];

export const getCategory = (key: string): FaqCategory | undefined =>
  FAQ_CATEGORIES.find((c) => c.key === key);

export const TOTAL_FAQS = FAQ_CATEGORIES.reduce((n, c) => n + c.faqs.length, 0);

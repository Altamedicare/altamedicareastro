// County-level Medicare Advantage data (Phase 6).
//
// WHY THIS FILE EXISTS
// Medicare Advantage is the ONE location topic whose product genuinely varies by
// county — MA organizations are approved county by county, unlike standalone
// Part D (approved for a whole state) and Medigap (federal benefits, state-
// regulated pricing), both of which consolidated to /utah/* in Phase 5. This is
// the single place that data lives; LocationCountyMA.astro renders it and the
// five county pages differ ONLY through what is below.
//
// ── PROVENANCE ──────────────────────────────────────────────────────────────
//   Source      CMS Medicare Advantage/Part D Contract and Enrollment Data
//               - MA Contract Service Area by State/County  (brand availability)
//               - Monthly Enrollment by Contract/Plan/State/County (CPSC) joined
//                 to the MA Plan Directory for marketing names (enrollment share)
//   Data period July 2026
//   Scope       INDIVIDUAL-MARKET Medicare Advantage only. Employer/union-only
//               (EGHP), Cost plans and PACE are excluded — they are not options
//               a member of the public can shop.
//
// ── DELIBERATE EDITORIAL RULES (do not "fix" these) ─────────────────────────
//  1. BRAND-LEVEL, NOT CONTRACT-LEVEL. Several carriers hold more than one CMS
//     contract in Utah, so raw contract counts overstate the consumer-facing
//     difference (Washington County is 9 contracts vs Salt Lake's 15, but only
//     7 brands vs 9). Contract IDs are intentionally NOT stored here and raw
//     contract counts must never reach the page.
//  2. NO YEAR-OVER-YEAR CHURN CLAIMS. Contract consolidation looks identical to
//     a carrier exiting. Diffing the 2025 and 2026 files at contract level
//     falsely shows Select Health leaving all five counties; in fact H1994 is
//     present in both years and a second contract (H2246) merged into it. Never
//     publish "carrier X left".
//  3. NO PROVIDER OR NETWORK DATA. Whether a hospital or physician participates
//     is plan-specific, changes mid-year, and is not established by any source
//     used here. Availability of a brand says nothing about who is in network.
//  4. NO PLAN-LEVEL (PBP) DATA. The CMS Landscape/PBP file was not obtained, so
//     per-plan counts, premiums, benefits and star ratings are out of scope.
//  5. ENROLLMENT SHARE IS DESCRIPTIVE, NOT EVALUATIVE. It reports what people
//     already chose under the methodology below — never "most popular", "best",
//     or "recommended".
//
// ── ANNUAL UPDATE (one place, ~30 minutes) ──────────────────────────────────
//   1. Download the current MA Contract Service Area by State/County ZIP and the
//      current CPSC enrollment ZIP + MA Plan Directory from CMS.
//   2. Filter to State == 'UT', drop EGHP == '*', drop Cost and PACE org types.
//   3. Map Contract ID -> "Organization Marketing Name" via the Plan Directory,
//      then collapse to unique brands and their plan types.
//   4. For enrollment share, count CPSC enrollment per county but ONLY for
//      contracts whose service area actually includes that county — unfiltered
//      CPSC counts include out-of-area members and badly overstate the market.
//   5. Replace MA_DATA_PERIOD and the five entries below. Re-read the county
//      angle strings in src/i18n/shared/location/en.json — they describe the
//      data and may no longer be true. Then `npm run translate -- --check`.

import type { Place } from './places';

/** Human-readable CMS data period shown in the source line, per locale. It is
 *  prose (a month name), so it cannot be a bare constant — update BOTH strings
 *  together at the annual refresh. Falls back to English for any locale not
 *  listed, which is the same rule the rest of the i18n layer uses. */
export const MA_DATA_PERIOD: Record<string, string> = {
  en: 'July 2026',
  es: 'julio de 2026',
};

/** The data period in `lang`, falling back to English. */
export const maPeriod = (lang: string): string => MA_DATA_PERIOD[lang] ?? MA_DATA_PERIOD.en;

/** Authoritative CMS dataset the availability table is derived from. */
export const MA_SOURCE_URL =
  'https://www.cms.gov/data-research/statistics-trends-and-reports/medicare-advantagepart-d-contract-and-enrollment-data/ma-contract-service-area-state/county';

/** Plan types a brand offers in a county. Brands absent from a county are
 *  simply omitted — there is no "not offered" row to misread. */
export type PlanTypes = 'HMO' | 'PPO' | 'HMO/PPO';

export interface BrandAvailability {
  /** CMS "Organization Marketing Name" — the name a shopper actually sees. */
  brand: string;
  planTypes: PlanTypes;
}

export interface EnrollmentShare {
  brand: string;
  /** Percent of county MA enrollment in county-serving contracts. Descriptive
   *  only — see rule 5 above. */
  share: number;
}

export interface CountyMedicareAdvantage {
  /** Alphabetical by brand — a neutral order that implies no ranking. */
  brands: BrandAvailability[];
  /** Leading brands by share, descending. */
  enrollment: EnrollmentShare[];
}

/** Keyed by Place.slug. A place with no entry renders no county MA section —
 *  which is why /utah/medicare-advantage (a state) shows none. */
export const COUNTY_MA: Record<string, CountyMedicareAdvantage> = {
  'utah/salt-lake-county': {
    brands: [
      { brand: 'Aetna Medicare', planTypes: 'HMO/PPO' },
      { brand: 'American Health Advantage of Utah', planTypes: 'HMO' },
      { brand: 'Devoted Health', planTypes: 'PPO' },
      { brand: 'HealthSpring', planTypes: 'HMO/PPO' },
      { brand: 'Humana', planTypes: 'HMO/PPO' },
      { brand: 'Molina Healthcare of Utah & Idaho', planTypes: 'HMO' },
      { brand: 'Regence BlueCross BlueShield of Utah', planTypes: 'PPO' },
      { brand: 'Select Health', planTypes: 'HMO' },
      { brand: 'UnitedHealthcare', planTypes: 'HMO/PPO' },
    ],
    enrollment: [
      { brand: 'UnitedHealthcare', share: 45.1 },
      { brand: 'Humana', share: 24.5 },
      { brand: 'Select Health', share: 18.5 },
    ],
  },
  'utah/utah-county': {
    brands: [
      { brand: 'Aetna Medicare', planTypes: 'HMO/PPO' },
      { brand: 'American Health Advantage of Utah', planTypes: 'HMO' },
      { brand: 'HealthSpring', planTypes: 'PPO' },
      { brand: 'Humana', planTypes: 'HMO/PPO' },
      { brand: 'Molina Healthcare of Utah & Idaho', planTypes: 'HMO' },
      { brand: 'Regence BlueCross BlueShield of Utah', planTypes: 'PPO' },
      { brand: 'Select Health', planTypes: 'HMO' },
      { brand: 'UnitedHealthcare', planTypes: 'HMO/PPO' },
    ],
    enrollment: [
      { brand: 'UnitedHealthcare', share: 39.7 },
      { brand: 'Select Health', share: 28.4 },
      { brand: 'Humana', share: 24.2 },
    ],
  },
  'utah/davis-county': {
    brands: [
      { brand: 'Aetna Medicare', planTypes: 'HMO/PPO' },
      { brand: 'American Health Advantage of Utah', planTypes: 'HMO' },
      { brand: 'Devoted Health', planTypes: 'PPO' },
      { brand: 'HealthSpring', planTypes: 'HMO/PPO' },
      { brand: 'Humana', planTypes: 'HMO/PPO' },
      { brand: 'Molina Healthcare of Utah & Idaho', planTypes: 'HMO' },
      { brand: 'Regence BlueCross BlueShield of Utah', planTypes: 'PPO' },
      { brand: 'Select Health', planTypes: 'HMO' },
      { brand: 'UnitedHealthcare', planTypes: 'HMO/PPO' },
    ],
    enrollment: [
      { brand: 'UnitedHealthcare', share: 46.9 },
      { brand: 'Humana', share: 26.6 },
      { brand: 'Select Health', share: 16.9 },
    ],
  },
  'utah/weber-county': {
    brands: [
      { brand: 'Aetna Medicare', planTypes: 'HMO' },
      { brand: 'American Health Advantage of Utah', planTypes: 'HMO' },
      { brand: 'HealthSpring', planTypes: 'HMO/PPO' },
      { brand: 'Humana', planTypes: 'HMO/PPO' },
      { brand: 'Molina Healthcare of Utah & Idaho', planTypes: 'HMO' },
      { brand: 'Regence BlueCross BlueShield of Utah', planTypes: 'PPO' },
      { brand: 'Select Health', planTypes: 'HMO' },
      { brand: 'UnitedHealthcare', planTypes: 'HMO/PPO' },
    ],
    enrollment: [
      { brand: 'UnitedHealthcare', share: 46.1 },
      { brand: 'Humana', share: 28.8 },
      { brand: 'Select Health', share: 19.2 },
    ],
  },
  'utah/washington-county': {
    brands: [
      { brand: 'Aetna Medicare', planTypes: 'HMO' },
      { brand: 'American Health Advantage of Utah', planTypes: 'HMO' },
      { brand: 'Humana', planTypes: 'PPO' },
      { brand: 'Molina Healthcare of Utah & Idaho', planTypes: 'HMO' },
      { brand: 'Regence BlueCross BlueShield of Utah', planTypes: 'PPO' },
      { brand: 'Select Health', planTypes: 'HMO' },
      { brand: 'UnitedHealthcare', planTypes: 'HMO/PPO' },
    ],
    enrollment: [
      { brand: 'UnitedHealthcare', share: 36.9 },
      { brand: 'Humana', share: 30.4 },
      { brand: 'Select Health', share: 28.9 },
    ],
  },
};

/** County MA data for a place, or undefined for states / unlisted counties. */
export const getCountyMa = (place: Place): CountyMedicareAdvantage | undefined =>
  COUNTY_MA[place.slug];

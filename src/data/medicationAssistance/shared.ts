// ---------------------------------------------------------------------------
// src/data/medicationAssistance/shared.ts — facts that are genuinely shared
// across medication records, each still carried with its own dated source.
//
// Only cross-cutting organisational facts live here (how TotalAssist or
// HealthWell applications work, the OIG copay-coupon rule, CMS negotiation
// fact sheets). Whether a given fund COVERS a given drug, and whether it is
// OPEN, is researched per medication and lives in that medication's record —
// never inferred from a sibling drug (spec §11).
//
// Records import from this file; this file must not import the registry.
// ---------------------------------------------------------------------------

import type { SourceRef, Alternative, ChecklistItem } from '../../types/MedicationAssistance';

/** Batch 1 research date. Bump per record when re-verified. */
export const CHECKED = '2026-08-26';

const src = (title: string, url: string, publisher: string, supports?: string): SourceRef => ({
  title,
  url,
  publisher,
  checked: CHECKED,
  ...(supports ? { supports } : {}),
});

/** Cross-cutting official sources (all read 2026-08-26). */
export const SRC = {
  totalAssistFunds: src('TotalAssist fund list and status', 'https://totalassist.org/funds/', 'Patient Advocate Foundation', 'fund status'),
  totalAssistApply: src('How to apply — TotalAssist', 'https://totalassist.org/apply-patients/', 'Patient Advocate Foundation', 'application requirements'),
  totalAssistNotify: src('Get notified when a fund opens — TotalAssist', 'https://totalassist.org/notify/', 'Patient Advocate Foundation', 'fund notifications'),
  totalAssistEligibility: src('TotalAssist eligibility requirements', 'https://totalassist.org/help/help-articles/eligibility-requirements/', 'Patient Advocate Foundation', 'Medicare eligibility, 500% FPL'),
  totalAssistLaunch: src('Patient Advocate Foundation launches TotalAssist (July 1, 2026)', 'https://totalassist.org/news/patient-advocate-foundation-launches-totalassist-assistance-program/', 'Patient Advocate Foundation', 'launch, PAN merger'),
  totalAssistMedIndex: src('TotalAssist approved medication index', 'https://totalassist.org/medication-index/', 'Patient Advocate Foundation', 'medication listing'),
  healthWellEligibility: src('HealthWell Foundation eligibility', 'https://www.healthwellfoundation.org/eligibility/', 'HealthWell Foundation', 'Medicare eligibility, income limits'),
  healthWellFunds: src('HealthWell disease funds (status list)', 'https://www.healthwellfoundation.org/disease-funds/', 'HealthWell Foundation', 'fund status; closed funds may reopen'),
  healthWellT2D: src('HealthWell Type 2 Diabetes fund', 'https://www.healthwellfoundation.org/fund/type-2-diabetes/', 'HealthWell Foundation', 'fund status, award, income limit, medication list'),
  healthWellCHF: src('HealthWell Chronic Heart Failure – Medicare Access fund', 'https://www.healthwellfoundation.org/fund/chronic-heart-failure-medicare-access/', 'HealthWell Foundation', 'fund status, award, income limit'),
  goodDaysDiseases: src('Good Days — diseases covered', 'https://mygooddays.org/patients/diseases-covered/', 'Good Days', 'fund list'),
  cmsNegotiatedPrices: src('Medicare Drug Price Negotiation Program — selected drugs and negotiated prices', 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices', 'CMS', 'negotiated prices and effective dates'),
  cmsMfp2026: src('Negotiated prices for initial price applicability year 2026 (fact sheet)', 'https://www.cms.gov/files/document/fact-sheet-negotiated-prices-initial-price-applicability-year-2026.pdf', 'CMS', '2026 Maximum Fair Prices'),
  cmsMfp2027: src('Negotiated prices for initial price applicability year 2027 (fact sheet)', 'https://www.cms.gov/files/document/fact-sheet-negotiated-prices-ipay-2027.pdf', 'CMS', '2027 Maximum Fair Prices'),
  medicare2026Guide: src('Your Medicare in 2026: what you need to know', 'https://www.medicare.gov/publications/12229-your-medicare-in-2026-what-you-need-to-know.pdf', 'Medicare.gov', '2026 Part D cap; negotiated prices in effect'),
  medicareDrugCosts: src('Help with drug costs (Extra Help)', 'https://www.medicare.gov/basics/costs/help/drug-costs', 'Medicare.gov', 'Extra Help 2026 limits and copays'),
  medicarePaymentPlan: src('Medicare Prescription Payment Plan', 'https://www.medicare.gov/prescription-payment-plan', 'Medicare.gov', 'spreading Part D costs over the year'),
  medicareGlp1Bridge: src('Medicare GLP-1 Bridge: GLP-1 drugs for $50 a month (fact sheet)', 'https://www.medicare.gov/publications/12234-medicare-glp-1-bridge-glp-1-drugs-for-50-a-month.pdf', 'Medicare.gov', 'Bridge drugs and eligibility'),
  cmsGlp1Bridge: src('Medicare GLP-1 Bridge', 'https://www.cms.gov/medicare/coverage/prescription-drug-coverage/medicare-glp-1-bridge', 'CMS', 'Bridge dates, $50 copay, LIS treatment'),
  medicareWeightLossDrugs: src('Weight-loss drugs — Medicare coverage', 'https://www.medicare.gov/coverage/weight-loss-drugs', 'Medicare.gov', 'Part D covers GLP-1s for type 2 diabetes; Bridge exclusions'),
  oigCoupons: src('Special Advisory Bulletin: Pharmaceutical Manufacturer Copayment Coupons', 'https://oig.hhs.gov/documents/special-advisory-bulletins/878/SAB_Copayment_Coupons.pdf', 'HHS Office of Inspector General', 'why copay cards exclude Medicare'),
  ssaExtraHelp: src('Apply for Medicare Part D Extra Help program', 'https://www.ssa.gov/medicare/part-d-extra-help', 'Social Security Administration', 'application route'),
};

/** Eligibility bullets every TotalAssist government-insured fund shares. */
export const TOTALASSIST_ELIGIBILITY = [
  'Government-insured coverage (Medicare, Medicaid or TRICARE) that covers your qualifying expenses',
  'Household income at or below 500% of the federal poverty level, adjusted for your regional cost-of-living index',
  'Confirmed diagnosis matching the fund, and in treatment (or starting within 60 days, or treated in the past 6 months)',
  'Legal U.S. resident receiving treatment in the U.S. or a U.S. territory',
];

/** What TotalAssist's online application asks for (totalassist.org/apply-patients). */
export const TOTALASSIST_REQUIREMENTS = [
  'Contact information and Social Security number (or alien number)',
  'Annual household income (for pre-screening; proof of income due within 30 days of approval)',
  'Health insurance carrier, plan type, policy ID and group number; Medicare supplement or secondary insurance if you have one',
  'Copay or coinsurance amounts',
  "Your provider's name and contact information, diagnosis (exact date if within 6 months), prescribed medications and treatment plan",
];

export const TOTALASSIST_HOW_TO_APPLY =
  'You (the patient) apply online — it takes about 15 minutes and you learn immediately whether you are approved — or call 866-512-3861, Monday–Friday 8:30am–5:30pm ET. Patient Advocate Foundation verifies your diagnosis and treatment plan directly with your provider and verifies income automatically; you have 30 days after approval to provide proof of income.';

export const TOTALASSIST_PHONE = '866-512-3861';
export const HEALTHWELL_PHONE = '(800) 675-8416';

/** HealthWell application facts (healthwellfoundation.org/eligibility and fund pages). */
export const HEALTHWELL_REQUIREMENTS = [
  'Some form of health insurance (Medicare qualifies) that covers part of the cost of the drug — discount cards do not count',
  'Social Security number (used to prevent duplicate applications)',
  "Diagnosis verified by a physician's, nurse practitioner's or physician assistant's signature",
  'Treatment in the United States',
];

export const HEALTHWELL_HOW_TO_APPLY =
  'When a fund is open, apply online or by phone; your provider verifies the diagnosis by signature. When a fund is closed, sign up for that fund\'s real-time alerts — HealthWell says replenished funds reopen "as quickly as possible."';

/** Checklist items common to Part D beneficiaries applying anywhere. */
export const CHECKLIST_MEDICARE: ChecklistItem[] = [
  { item: 'Medicare card and your Part D or Medicare Advantage drug-plan card', note: 'plan name, member ID and group number' },
  { item: 'Prescription details', note: 'medication name, strength and dose; prescriber name, office phone and address' },
  { item: 'Diagnosis and date of diagnosis', note: 'TotalAssist needs the exact date if diagnosed within the past 6 months' },
  { item: 'Household size and annual household income', note: 'and proof — tax return, Social Security or pension statements, or pay stubs' },
];

/** The universal Step 7 alternatives (spec §10), with the medication name filled in. */
export function standardAlternatives(brand: string): Alternative[] {
  return [
    {
      text: `Sign up for TotalAssist fund notifications so you hear the moment a ${brand} fund reopens — there is no waitlist or queue, so speed matters.`,
      href: 'https://totalassist.org/notify/',
      label: 'TotalAssist notifications',
    },
    {
      text: 'Sign up for HealthWell fund alerts for the same reason; HealthWell says closed funds reopen as funding is replenished.',
      href: 'https://www.healthwellfoundation.org/disease-funds/',
      label: 'HealthWell disease funds',
    },
    {
      text: 'Check Medicare Extra Help — it does not depend on a fund balance and lowers the cost of every covered drug, not just this one.',
      href: '/blog/extra-help-explained.html',
      label: 'Medicare Extra Help explained',
    },
    {
      text: "Ask your doctor's office — many practices have staff who handle assistance applications routinely and can request a formulary exception or a lower-cost alternative.",
    },
    {
      text: 'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments (it does not lower the total).',
      href: 'https://www.medicare.gov/prescription-payment-plan',
      label: 'Medicare.gov',
    },
    {
      text: `Compare Part D and Medicare Advantage drug plans during the fall enrollment period — the tier and cost-sharing for ${brand} differ from plan to plan.`,
      href: '/prescription-drug-plans.html',
      label: 'Compare Part D plan options',
    },
  ];
}

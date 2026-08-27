// ---------------------------------------------------------------------------
// Toujeo (insulin glargine 300 units/mL) — Sanofi. Independently researched
// 2026-08-26. Batch 8 — a NEW slug. D10 is resolved: one ordinary record per
// insulin brand.
//
// Toujeo shares Sanofi's assistance layer with Lantus, and this record does not
// pretend otherwise. What it adds is genuinely Toujeo-specific:
//
//  • CONCENTRATION. Toujeo is insulin glargine at 300 units/mL — three times the
//    concentration of Lantus at 100 units/mL. The same number of units occupies a
//    third of the volume, so a pen lasts longer at the same dose. That changes the
//    arithmetic of any per-pack price, including the $35 offers, and it is the one
//    thing a reader comparing the two Sanofi glargines actually needs.
//  • THE ONLY PUBLISHED DISCOUNT DEPTH IN THIS BATCH. The federal TrumpRx site
//    lists Toujeo at $35.00 against a stated former price of $428.57 — a 92%
//    reduction, and the only place in this expansion where a government site
//    publishes both the before and after figures for a medication.
//  • AN UNBRANDED EQUIVALENT AT THE SAME STRENGTH. DailyMed labels an
//    "INSULIN GLARGINE U-300" alongside Toujeo and Toujeo Max, and Sanofi Patient
//    Connection lists that unbranded U-300 as a separate covered product.
//
// The Valyou TrOOP trade-off applies here exactly as it does to Lantus and is
// restated rather than cross-referenced, because a reader landing on this page
// should not have to visit another to learn it.
//
// Built LINK-DARK under D8: no does-medicare-cover-* link appears in this record.
// ---------------------------------------------------------------------------

import type { MedicationAssistanceRecord } from '../../types/MedicationAssistance';
import {
  CHECKED,
  SRC,
  TOTALASSIST_ELIGIBILITY,
  TOTALASSIST_REQUIREMENTS,
  TOTALASSIST_HOW_TO_APPLY,
  TOTALASSIST_PHONE,
  HEALTHWELL_PHONE,
  HEALTHWELL_REQUIREMENTS,
  HEALTHWELL_HOW_TO_APPLY,
  CHECKLIST_MEDICARE,
  standardAlternatives,
} from './shared';

const label = {
  title: 'Toujeo prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c9561d96-124d-48ca-982f-0aa1575bff36',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'TOUJEO (insulin glargine) injection, solution and TOUJEO MAX (insulin glargine) injection, solution, 300 units/mL; sanofi-aventis U.S. LLC',
};
const dailymedGlargine = {
  title: 'DailyMed label index — insulin glargine',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=insulin+glargine',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '20 labelled insulin glargine products across 9 distinct labelers, including TOUJEO, TOUJEO MAX and an unbranded "INSULIN GLARGINE U-300" at the same 300 units/mL strength, plus the 100 units/mL products LANTUS, BASAGLAR, SEMGLEE, REZVOGLAR and LANGLARA',
};
const sanofiMeds = {
  title: 'Sanofi Patient Connection — medications available',
  url: 'https://www.sanofipatientconnection.com/medications-available',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports:
    'the complete medication list, which includes "Toujeo® (insulin glargine)" and, listed separately, "Insulin Glargine U-300 (insulin glargine) injection 300 Units/mL" with SoloStar product variations noted',
};
const sanofiEligibility = {
  title: 'Sanofi Patient Connection — patient assistance eligibility',
  url: 'https://www.sanofipatientconnection.com/patient-assistance-connection',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports:
    'the published eligibility criteria verbatim — "You must be a resident of the U.S. or U.S. Territories"; "For commercially insured patients, you must have no insurance coverage or access to the prescribed product"; "You must have an annual household income of ≤400% of the current Federal Poverty Level". NOTE: no Medicare rule appears anywhere on the program\'s published eligibility pages. Phone 1-888-847-4877',
};
const sanofiFinancial = {
  title: 'Sanofi Patient Connection — financial eligibility table',
  url: 'https://www.sanofipatientconnection.com/financial-eligibility',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports:
    'the 2026 income table for the 48 contiguous states and DC at 400% FPL — 1 person $63,840; 2 $86,560; 3 $109,280; 4 $132,000; 5 $154,720; 6 $177,440; 7 $200,160; 8 $222,880, adding $5,680 per additional person; separate higher tables for Alaska and Hawaii',
};
const sanofiSavings = {
  title: 'Sanofi insulin savings — eligibility restrictions and offer terms',
  url: 'https://www.toujeo.com/coverage-and-savings',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports:
    'the Toujeo coverage and savings page carrying both Sanofi insulin offers. The full terms for both, read on the companion Sanofi savings page, are: Co-pay Savings Program — "no more than $35 for a 30-day supply, valid up to 10 packs per fill", "not valid for prescriptions covered by or submitted for reimbursement, in whole or in part, under Medicare, Medicaid, VA, DOD, TRICARE, similar federal or state programs", phone (866) 255-8661; Insulins Valyou Savings Program — "only valid for those who are uninsured or those who are insured by a prescription plan but are not using such insurance and will be paying the full retail price for the medication", "$35 per 30-day supply", "you must fill all your Sanofi Insulin prescriptions at the same time, together each month", and the TrOOP clause "You may not seek to have your out-of-pocket costs or the full retail price of the Sanofi Insulin count toward your deductible, true-out-of-pocket (TrOOP), maximum out-of-pocket (MOOP), or any other out-of-pocket caps associated with any insurance coverage", phone (833) 813-0190',
};
const sanofiSavingsTerms = {
  title: 'Insulins Valyou Savings Program and Co-pay Savings Program — full offer terms',
  url: 'https://www.lantus.com/sign-up-for-savings',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports:
    'the verbatim eligibility restrictions and offer terms for both Sanofi insulin programs, which cover the Sanofi insulin portfolio including Toujeo rather than a single brand',
};
const trumpRx = {
  title: 'TrumpRx — Toujeo listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: 'Toujeo (Sanofi) listed as "starting at $35.00, was $428.57, 92% off" — the only medication in this batch for which the site publishes both the former and current price',
};
const totalAssistT2d = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Toujeo Solostar" and "Toujeo Max Solostar" both on the approved-medication list; $1,500 guaranteed / $2,000 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistT2dHe = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) health equity fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including Toujeo; $1,500 guaranteed / $2,000 maximum award; requires a home zip code in a designated social-vulnerability county',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'the complete fund list — "Type 2 Diabetes" CLOSED; there is no Type 1 Diabetes fund and no insulin-specific fund of any kind',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no diabetes or insulin program of any kind',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Toujeo, Lantus or insulin glargine row for initial price applicability year 2026, 2027 or 2028',
};

export const TOUJEO: MedicationAssistanceRecord = {
  slug: 'toujeo',
  brandName: 'Toujeo',
  genericName: 'insulin glargine 300 units/mL',
  manufacturer: 'Sanofi',
  conditions: ['diabetes'],
  drugClass: ['insulin'],
  description:
    'Toujeo is Sanofi\'s concentrated long-acting insulin — the same molecule as Lantus, insulin glargine, but at 300 units per millilitre instead of 100. A given dose therefore takes up a third of the volume, which is why a Toujeo pen holds more units than a Lantus pen of the same size. If you are comparing prices between the two, that concentration difference is the thing that makes a straight per-pen comparison misleading.',
  usedFor: [
    'Improving blood sugar control in adults with type 1 or type 2 diabetes',
    'Improving blood sugar control in children aged 6 years and older with diabetes — confirm the age range that applies to your prescription with your prescriber',
  ],
  whyCostly:
    'Insulin is a lifelong daily expense, so small monthly differences compound over years. For Toujeo specifically, two published figures set the boundaries. The federal TrumpRx site lists Toujeo at $35.00 against a former price of $428.57 — a 92% reduction, and the clearest illustration on this site of how far insulin list prices have moved. And an unbranded insulin glargine at the same 300 units/mL strength is now labelled on DailyMed, which gives you something to compare Toujeo against at equal concentration rather than against a 100 units/mL product.',
  medicareContext:
    'Toujeo is covered under Medicare Part D or a Medicare Advantage drug plan. Under federal law a covered insulin costs no more than $35 for a month\'s supply under a Medicare drug plan, with no deductible applied — a rule that applies to insulins generally rather than to Toujeo specifically; our <a href="/blog/medicare-35-dollar-insulin-cap.html">insulin cost guide</a> covers how it works across products. What is specific to Toujeo: it is not a Medicare-negotiated drug (CMS\'s selected-drug file has no Toujeo, Lantus or glargine row for 2026, 2027 or 2028), and because it is a concentrated product your plan may treat it differently from 100 units/mL glargine on its formulary — so check the tier for the exact product you are prescribed, not for "insulin glargine" generally. Part D out-of-pocket costs are capped at $2,100 in 2026.',
  quickAnswer: {
    verdict:
      'Yes — Sanofi Patient Connection covers Toujeo for people at or below 400% of the federal poverty level, though it publishes no Medicare rule. Sanofi also sells Toujeo for $35 cash outside insurance, and the federal TrumpRx site shows that price against a former $428.57. The catch is the same one that applies to all Sanofi insulins: cash spending does not count toward your Part D out-of-pocket cap. Both diabetes charitable funds were closed.',
    points: [
      'Sanofi Patient Connection: Toujeo is on its medication list, as is a separate unbranded Insulin Glargine U-300. Income at or below 400% FPL — $63,840 for one person in 2026. NO Medicare rule is published, so call and ask.',
      'Insulins Valyou Savings Program: $35 per 30-day supply for people uninsured or not using their insurance. TrumpRx lists Toujeo at $35.00, "was $428.57, 92% off".',
      'The trade-off: Sanofi states you "may not seek to have your out-of-pocket costs... count toward your deductible, true-out-of-pocket (TrOOP), maximum out-of-pocket (MOOP), or any other out-of-pocket caps." Paying cash makes no progress toward the $2,100 Part D cap.',
      'Sanofi Insulins Co-pay Savings Program: commercial insurance only — excluded under Medicare, Medicaid, VA, DOD and TRICARE.',
      'Concentration matters: Toujeo is 300 units/mL, Lantus is 100 units/mL. Compare cost per unit, not cost per pen.',
      'Charitable grants: TotalAssist lists Toujeo Solostar and Toujeo Max Solostar on its Type 2 diabetes funds — both closed ($1,500 guaranteed / $2,000 maximum). HealthWell\'s Type 2 Diabetes fund was closed. Good Days has no diabetes fund.',
    ],
  },
  programs: [
    {
      id: 'sanofi-patient-connection',
      kind: 'manufacturer-pap',
      name: 'Sanofi Patient Connection',
      operator: 'Sanofi',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. Toujeo is named on the program\'s published medications-available list, and the unbranded Insulin Glargine U-300 is listed separately — so both the brand and its unbranded equivalent are covered.',
      medicare: 'unknown',
      medicareNote:
        'Sanofi Patient Connection publishes three eligibility criteria — US residency, annual household income at or below 400% of the federal poverty level, and, for commercially insured patients, having "no insurance coverage or access to the prescribed product" — and none of them mentions Medicare. The program describes itself as serving uninsured or functionally uninsured patients. That wording could include a Medicare beneficiary whose plan does not cover Toujeo, but Sanofi does not say so, and this page will not assume it. Call 1-888-847-4877 and ask two things: whether Medicare Part D enrollees may apply, and whether being prescribed Toujeo when your plan prefers a different glargine counts as lacking "access to the prescribed product".',
      summary:
        'Sanofi\'s patient assistance program covers Toujeo and publishes a clear income test but no Medicare rule. The second question above is worth asking precisely because Toujeo is a concentrated product that some formularies treat differently from ordinary glargine.',
      covers: 'Sanofi medications, including Toujeo and the unbranded Insulin Glargine U-300, for approved patients meeting the income and insurance criteria.',
      eligibility: [
        'Resident of the U.S. or U.S. Territories',
        'Annual household income at or below 400% of the current federal poverty level',
        '2026 income limits, 48 contiguous states and DC: $63,840 for one person, $86,560 for two, $109,280 for three, $132,000 for four, $154,720 for five, $177,440 for six, adding $5,680 per additional person',
        'Separate, higher income tables apply in Alaska and Hawaii',
        'For commercially insured patients: no insurance coverage or access to the prescribed product',
        'Medicare rule: NOT STATED on the program\'s published eligibility pages',
      ],
      requirements: [
        'Proof of annual household income',
        'Your insurance details',
        'A prescription for Toujeo and your prescriber\'s information — Sanofi\'s applications are state-specific',
      ],
      howToApply:
        'Download the application for your state from sanofipatientconnection.com, or call 1-888-847-4877 (Monday–Friday, 9am–8pm ET).',
      applyUrl: 'https://www.sanofipatientconnection.com/patient-assistance-connection',
      applyLabel: 'Sanofi Patient Connection',
      phone: '1-888-847-4877',
      sources: [sanofiMeds, sanofiEligibility, sanofiFinancial],
    },
    {
      id: 'valyou',
      kind: 'manufacturer-direct',
      name: 'Insulins Valyou Savings Program (cash price)',
      operator: 'Sanofi',
      status: 'open',
      statusNote:
        'Active on August 26, 2026 at $35 per 30-day supply, with the condition that all your Sanofi insulin prescriptions be filled at the same time each month. The federal TrumpRx site lists Toujeo at the same $35.00, describing it as 92% off a former price of $428.57.',
      medicare: 'conditional',
      medicareNote:
        'The offer is "only valid for those who are uninsured or those who are insured by a prescription plan but are not using such insurance and will be paying the full retail price for the medication", so a Medicare beneficiary can use it by paying cash outside Part D. The cost of doing so is stated in Sanofi\'s own terms: "You may not submit claims for reimbursement to any third-party payor, including any government healthcare plan (e.g., Medicare, Medicaid, DOD, VA, TRICARE)... You may not seek to have your out-of-pocket costs or the full retail price of the Sanofi Insulin count toward your deductible, true-out-of-pocket (TrOOP), maximum out-of-pocket (MOOP), or any other out-of-pocket caps associated with any insurance coverage." Since a Medicare drug plan already caps a covered insulin at $35 a month AND counts that spending toward your $2,100 annual cap, the cash route usually costs the same per month while buying you less. It makes sense mainly when your plan does not cover Toujeo at all.',
      summary:
        'A $35 cash price, matched on the federal TrumpRx site. Genuinely useful if your plan does not cover Toujeo; usually a step backwards if it does, because your plan\'s own insulin cost-sharing is capped at the same figure and counts toward your cap.',
      covers: 'Toujeo, and other Sanofi insulins filled at the same time, at $35 per 30-day supply. Not insurance.',
      eligibility: [
        'Uninsured, OR insured by a prescription plan but not using that insurance and paying the full retail price',
        'All Sanofi insulin prescriptions must be filled at the same time, together each month, to get the $35 rate',
        'You may not submit the cost to any third-party payor, including Medicare',
        'You may not count the spending toward your deductible, TrOOP, MOOP or any other out-of-pocket cap',
      ],
      howToApply:
        'Enrol through the Sanofi savings pages or call (833) 813-0190, Monday–Friday 9am–7pm ET. Compare against what your own plan charges for Toujeo first.',
      applyUrl: 'https://www.toujeo.com/coverage-and-savings',
      applyLabel: 'Toujeo coverage and savings',
      phone: '(833) 813-0190',
      sources: [sanofiSavings, sanofiSavingsTerms, trumpRx],
    },
    {
      id: 'sanofi-copay',
      kind: 'manufacturer-savings',
      name: 'Sanofi Insulins Co-pay Savings Program',
      operator: 'Sanofi',
      status: 'open',
      statusNote:
        'Active for commercially insured patients on August 26, 2026: no more than $35 for a 30-day supply, valid up to 10 packs per fill.',
      medicare: 'excluded',
      medicareNote:
        'Sanofi\'s terms: "This offer is not valid for prescriptions covered by or submitted for reimbursement, in whole or in part, under Medicare, Medicaid, VA, DOD, TRICARE, similar federal or state programs, including any state pharmaceutical programs." Do not confuse this with the Valyou program above — both quote $35, but only Valyou is open to someone with Medicare, and only by paying cash.',
      summary:
        'A commercial copay card. Listed so the difference between Sanofi\'s two $35 offers is unmistakable before you telephone either.',
      covers: 'Part of the commercial copay for Sanofi insulins. Not applicable to Medicare cost-sharing.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in Medicare, Medicaid or another government prescription program',
      ],
      howToApply:
        'Commercially insured patients enrol through the Sanofi savings pages or call (866) 255-8661. Medicare beneficiaries should use their plan\'s insulin cost-sharing, the Valyou cash route, or Sanofi Patient Connection.',
      applyUrl: 'https://www.toujeo.com/coverage-and-savings',
      applyLabel: 'Toujeo coverage and savings',
      phone: '(866) 255-8661',
      sources: [sanofiSavings, sanofiSavingsTerms, SRC.oigCoupons],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Type 2 diabetes funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Type 2 diabetes (T2DM) · Type 2 diabetes health equity',
      status: 'closed',
      statusNote:
        'Both funds were closed to new applicants on August 26, 2026, each with a $1,500 guaranteed and $2,000 maximum award.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. If you buy Toujeo with cash through the Valyou program you are not using your insurance for it, which may affect what the fund can pay toward.',
      summary:
        'Both "Toujeo Solostar" and "Toujeo Max Solostar" are named on the Type 2 diabetes approved-medication list, alongside Lantus and the other glargine products — so switching between glargine strengths would not cost you fund eligibility. Both funds were closed when we checked, and both are type 2 funds only.',
      covers:
        'When open: $1,500 guaranteed award and up to $2,000 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed type 2 diabetes diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
        'The health-equity fund additionally requires a home zip code in a designated social-vulnerability county',
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' +
        TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistT2d, totalAssistT2dHe, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Type 2 Diabetes fund',
      operator: 'HealthWell Foundation',
      fund: 'Type 2 Diabetes',
      status: 'closed',
      statusNote:
        'Closed on August 26, 2026. HealthWell runs no Type 1 Diabetes fund and no insulin-specific fund.',
      medicare: 'eligible',
      medicareNote: 'HealthWell accepts Medicare beneficiaries for the diseases it covers. Its Type 2 Diabetes fund was closed when we checked.',
      summary:
        'One applicable fund, closed. As with the other insulins on this site, there is no fund on any of the three foundations for someone taking Toujeo for type 1 diabetes.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for type 2 diabetes.',
      eligibility: ['A confirmed type 2 diabetes diagnosis, verified by your prescriber', ...HEALTHWELL_REQUIREMENTS],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds and alerts',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellFunds, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days\' published disease list on August 26, 2026 contained 57 programs and none of them was diabetes.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Toujeo.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'TotalAssist lists Toujeo Solostar and Toujeo Max Solostar on its Type 2 diabetes fund and the health-equity version, each paying $1,500 guaranteed up to $2,000, and both were closed on August 26, 2026. HealthWell\'s Type 2 Diabetes fund was closed too, and Good Days runs no diabetes fund. Every one of these is a type 2 fund, so a reader taking Toujeo for type 1 diabetes has no charitable route at all on these three foundations. Set an alert if type 2 applies to you, but for most Medicare beneficiaries the larger levers are your plan\'s $35 insulin cost-sharing, Sanofi Patient Connection if your income qualifies, and a comparison against the unbranded insulin glargine U-300 that is now on the market at the same strength.',
  extraHelpNote:
    'Extra Help is worth having, but its effect on Toujeo specifically is limited: under a Medicare drug plan a covered insulin is already capped at $35 a month with no deductible, so the subsidy has less room to work here than on your other medications. Apply for it because of everything else you take. Whether Extra Help affects a Sanofi Patient Connection application is one of the questions Sanofi does not answer publicly — add it to the list when you call.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Toujeo on Medicare in August 2026, start with your own plan rather than with the manufacturer:',
      bullets: [
        'Check what your plan charges for Toujeo specifically — not for "insulin glargine". Concentrated products are sometimes on a different tier from the 100 units/mL versions.',
        'A covered insulin under a Medicare drug plan is capped at $35 a month with no deductible, and that spending counts toward your out-of-pocket cap.',
        'If your plan does NOT cover Toujeo, the $35 Valyou cash route becomes genuinely useful rather than a lateral move.',
        'Limited income → call Sanofi Patient Connection on 1-888-847-4877. Income limit is $63,840 for one person.',
        'Ask about the unbranded insulin glargine U-300, which is labelled at the same strength as Toujeo.',
        'Type 2 diabetes → set alerts on the TotalAssist and HealthWell diabetes funds (all closed when checked).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The manufacturer routes were open; the charitable funds were closed.',
      bullets: [
        'Sanofi Patient Connection: open, with state-specific applications on its site.',
        'Insulins Valyou Savings Program: open at $35 per 30-day supply.',
        'TotalAssist: the Type 2 diabetes fund pages show "Open" or "Closed" and current award amounts.',
        'HealthWell: the disease-funds list shows the Type 2 Diabetes fund and its status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Income rules are published; the Medicare rule is not:',
      bullets: [
        'Sanofi Patient Connection: US residency and income at or below 400% FPL — $63,840 for one person in the 48 states and DC. No published Medicare rule.',
        'Insulins Valyou: uninsured, or insured but not using that insurance and paying full retail. All Sanofi insulins filled together each month.',
        'Sanofi Co-pay Savings: commercial insurance only, Medicare explicitly excluded.',
        'TotalAssist (when open): government insurance covering Toujeo; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed type 2 diabetes diagnosis.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified type 2 diabetes diagnosis, and treatment in the United States.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Get the concentration and the dose right, because they drive every comparison you will make:',
      bullets: [
        'Your Toujeo product and daily dose in units — Toujeo SoloStar or Toujeo Max SoloStar, at 300 units/mL.',
        'What your plan charges you for that exact product, from your Explanation of Benefits or your plan\'s formulary.',
        'A list of your other prescriptions and expected annual costs, to judge whether stepping outside Part D would cost you cap progress.',
        'Medicare card and drug-plan card, with policy ID and group number.',
        'Household size, annual household income and proof; and your diabetes type, since the funds are type 2 only.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Sanofi Patient Connection: download your state\'s application, or call 1-888-847-4877 to have one sent.',
        'Insulins Valyou: enrol through the Sanofi savings pages or call (833) 813-0190. No income test.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Sanofi Patient Connection: the program reviews income and insurance documentation; ask about the current timeframe when you call.',
        'Insulins Valyou: no determination — it is a price, not an application.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Toujeo\'s concentration is the angle most people miss:',
      bullets: [
        'Ask your prescriber and plan about the unbranded insulin glargine U-300, which is labelled at the same 300 units/mL strength as Toujeo.',
        'If you are comparing Toujeo against Lantus or another 100 units/mL glargine, compare cost per unit rather than cost per pen — Toujeo pens hold three times the concentration.',
        'Check your plan\'s tier for the exact Toujeo product before assuming a switch would save money; a formulary exception may be simpler than a change of insulin.',
        'Apply for Extra Help even if you assume you earn too much — it helps most with your non-insulin medications.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your exact Toujeo product and daily dose in units', note: 'Toujeo SoloStar or Toujeo Max SoloStar, at 300 units/mL — the concentration changes every price comparison' },
    { item: 'What your plan charges for that specific product', note: 'concentrated insulins are sometimes tiered differently from 100 units/mL glargine' },
    { item: 'Your diabetes type', note: 'the TotalAssist and HealthWell funds cover type 2 only' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber and plan about the unbranded insulin glargine U-300 now labelled on DailyMed — it is the same strength as Toujeo, and Sanofi Patient Connection lists it as a covered product in its own right.',
    },
    {
      text: 'Before paying cash, check what your Medicare drug plan charges. A covered insulin is capped at $35 a month under a Medicare drug plan, and that spending counts toward your out-of-pocket cap while cash spending does not.',
      href: '/blog/medicare-35-dollar-insulin-cap.html',
      label: 'Insulin costs on Medicare',
    },
    ...standardAlternatives('Toujeo'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Toujeo?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans cover Toujeo, and under federal law a covered insulin costs no more than $35 for a month\'s supply with no deductible applied. Check your plan\'s tier for the exact Toujeo product rather than for insulin glargine generally, because concentrated insulins are sometimes placed differently. Our <a href="/blog/medicare-35-dollar-insulin-cap.html">insulin cost guide</a> covers how the cap works across products.',
    },
    {
      question: 'What is the difference between Toujeo and Lantus?',
      answer:
        'They are the same medicine at different concentrations. Both are insulin glargine, but Lantus is 100 units per millilitre and Toujeo is 300 units per millilitre. The practical consequence is that a Toujeo pen delivers three times as many units for the same volume of liquid, so comparing the price of one pen against the other is misleading — compare cost per unit instead. For assistance purposes they are treated identically: the same Sanofi programs, the same income limits, and both appear on the same charitable fund lists.',
    },
    {
      question: 'TrumpRx shows Toujeo at $35, down from $428.57. Is that a good deal on Medicare?',
      answer:
        'It is a real price, but on Medicare it is often a lateral move rather than a saving. A covered insulin under a Medicare drug plan is already capped at $35 a month with no deductible applied — the same figure — and that spending counts toward your $2,100 annual out-of-pocket cap. Sanofi\'s cash terms say you "may not seek to have your out-of-pocket costs... count toward your deductible, true-out-of-pocket (TrOOP), maximum out-of-pocket (MOOP), or any other out-of-pocket caps." So the cash route matters mainly if your plan does not cover Toujeo at all.',
    },
    {
      question: 'Is there a Toujeo patient assistance program for people on Medicare?',
      answer:
        'Sanofi Patient Connection covers Toujeo and has a clear income test — household income at or below 400% of the federal poverty level, which is $63,840 for one person in the 48 states and DC in 2026. But it publishes no Medicare rule: none of its eligibility criteria mentions Medicare at all. Call 1-888-847-4877 and ask whether Medicare Part D enrollees may apply, and whether being prescribed Toujeo when your plan prefers a different glargine counts as lacking "access to the prescribed product".',
    },
    {
      question: 'Is there a generic version of Toujeo?',
      answer:
        'There is an unbranded equivalent at the same strength. DailyMed labels an "Insulin Glargine U-300" alongside Toujeo and Toujeo Max, and Sanofi Patient Connection lists that unbranded U-300 as a covered product in its own right. There are also several 100 units/mL glargine products — Basaglar, Semglee, Rezvoglar and Langlara — but those are a different concentration, so switching to one is a dosing conversation with your prescriber rather than a straight substitution.',
    },
    {
      question: 'Is Toujeo part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Toujeo, Lantus or insulin glargine row for initial price applicability year 2026, 2027 or 2028. The only insulin CMS has selected is Novo Nordisk\'s insulin aspart, sold as NovoLog and Fiasp — a different product from a different manufacturer, and its negotiated price has nothing to do with Toujeo. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['lantus', 'tresiba', 'novolog', 'lyumjev'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/medicare-35-dollar-insulin-cap.html', label: 'The $35 Insulin Cap with Medicare', blurb: 'The $35 cap and which insulin products are covered' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Toujeo' },
  ],
  sources: [
    label,
    dailymedGlargine,
    sanofiMeds,
    sanofiEligibility,
    sanofiFinancial,
    sanofiSavings,
    sanofiSavingsTerms,
    trumpRx,
    totalAssistT2d,
    totalAssistT2dHe,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsMfpFile,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify the TrumpRx listing first — it is the
  // only place in this batch publishing a before-and-after price, and such
  // figures move.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Toujeo Assistance',
    status: 'coming-soon',
    description:
      'Why 300 units/mL changes every price comparison, when Sanofi\'s $35 cash price beats your Part D plan and when it does not, and what the unbranded insulin glargine U-300 offers.',
  },
  description_meta:
    'How to lower the cost of Toujeo (insulin glargine 300 units/mL) on Medicare: Sanofi Patient Connection income limits, why the $35 cash price rarely beats Part D, the unbranded U-300 alternative, and diabetes fund status — verified August 2026.',
};

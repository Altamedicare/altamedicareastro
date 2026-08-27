// ---------------------------------------------------------------------------
// Zepbound (tirzepatide) — Eli Lilly and Company. Independently researched
// 2026-08-26. Every program below was read on the official source cited with
// it. Batch 5 (spec §24 Phase 4 list) — a NEW slug.
//
// LINK-DARK (D8): /does-medicare-cover-zepbound.html is a CONTROL page in the
// EXP-003 observation cohort. Nothing in this record may link to it, and
// nothing in data/drugCoverage.ts was touched to link back. Coverage context
// points at the /blog/category/drug-coverage.html hub instead, exactly as the
// Trelegy record (the other control) does.
//
// What is different about this medication: for weight management it is
// excluded from Part D by statute, but the Zepbound KwikPen is one of three
// drugs in the Medicare GLP-1 Bridge — a live, $50-a-month CMS demonstration
// that Part D enrollees can use from July 1, 2026 to December 31, 2027. That
// route, not a charity or a manufacturer foundation, is the page's centre of
// gravity. GLP-1 record: HIGHER MAINTENANCE RISK (spec §5C).
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
  CHECKLIST_MEDICARE,
  standardAlternatives,
} from './shared';

const label = {
  title: 'Zepbound prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses; GIP and GLP-1 receptor agonist; single-dose pens, vials and KwikPen on one label (rev. 4/2026)',
};
const lillyCaresMeds = {
  title: 'Lilly Cares — available medications',
  url: 'https://www.lillycares.com/available-medications',
  publisher: 'Lilly Cares Foundation',
  checked: CHECKED,
  supports: 'Zepbound not on the covered list; phone',
};
const zepboundSavings = {
  title: 'Zepbound — savings by insurance type',
  url: 'https://zepbound.lilly.com/savings',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'commercial card offers; self-pay shown under the Medicare selection; "Governmental beneficiaries excluded" on the commercial card',
};
const savingsTerms = {
  title: 'Zepbound Savings Card — terms and conditions',
  url: 'https://zepbound.lilly.com/savings/terms-and-conditions',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'commercial-insurance requirement; Medicare exclusion verbatim; maximums; expiry 12/31/2026; phone',
};
const fullTerms = {
  title: 'Zepbound — full terms and conditions (Savings Card, KwikPen Self-Pay Savings Card, Self Pay Journey Program)',
  url: 'https://www.lilly.com/lillydirect/medicines/zepbound/zepbound-tirzepatide-full-terms-conditions',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'self-pay prices; no-reimbursement / TrOOP language; 45-day refill rule; no government-program exclusion on the self-pay card',
};
const lillyDirect = {
  title: 'LillyDirect — Zepbound self-pay',
  url: 'https://www.lilly.com/lillydirect/zepbound',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'self-pay prices by dose; vials self-pay only; Medicare GLP-1 Bridge pointer; customer-care phone',
};
const kwikpenSelfPayRelease = {
  title: 'Media statement: Zepbound KwikPen now available with a self-pay savings card at retail pharmacies (March 16, 2026)',
  url: 'https://investor.lilly.com/news-releases/news-release-details/media-statement-zepbound-tirzepatide-kwikpen-now-available-self',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'card "available to all patients, including those without insurance coverage"; KwikPen only',
};
const lillyMedicare = {
  title: 'LillyDirect — Medicare GLP-1 Bridge for Zepbound KwikPen',
  url: 'https://www.lilly.com/lillydirect/medicare',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'how to fill under the Bridge; BIN/PCN; pharmacy initiates prior authorization; KwikPen prescription required',
};
const zepboundMedicare = {
  title: 'Zepbound — Medicare patients',
  url: 'https://zepbound.lilly.com/medicare',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'OSA prescriptions not eligible for the Bridge; program dates',
};
const lillyBridgeRelease = {
  title: 'What Medicare Part D patients need to know about accessing Foundayo and Zepbound KwikPen (June 25, 2026)',
  url: 'https://investor.lilly.com/news-releases/news-release-details/what-medicare-part-d-patients-need-know-about-accessing-foundayo',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: '$50 a month; July 1, 2026 – December 31, 2027; ineligible plan types',
};
const cmsBridgeProviders = {
  title: 'Medicare GLP-1 Bridge — information for providers',
  url: 'https://www.cms.gov/medicare/coverage/prescription-drug-coverage/medicare-glp-1-bridge/information-providers',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'clinical criteria; KwikPen-only NDCs; T2D / OSA / MASH excluded; no plan opt-in; central processor',
};
const cmsBalance = {
  title: 'CMS BALANCE Model',
  url: 'https://www.cms.gov/priorities/innovation/innovation-models/balance',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'Zepbound KwikPen listed; model not launching in Medicare in 2027; Bridge extended through 2027',
};
const cmsMfp2028List = {
  title: 'Selected drug list for initial price applicability year 2028',
  url: 'https://www.cms.gov/files/document/factsheet-medicare-negotiation-selected-drug-list-ipay-2028.pdf',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'tirzepatide not selected for negotiation',
};
const partDManual = {
  title: 'Medicare Prescription Drug Benefit Manual, Chapter 6 — drugs excluded from Part D',
  url: 'https://www.cms.gov/medicare/prescription-drug-coverage/prescriptiondrugcovcontra/downloads/part-d-benefits-manual-chapter-6.pdf',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'agents used for weight loss excluded from Part D coverage',
};
const trumpRx = {
  title: 'TrumpRx — Zepbound vial and KwikPen',
  url: 'https://trumprx.gov/p/zepbound',
  publisher: 'TrumpRx.gov',
  checked: CHECKED,
  supports: '$299 a month listing with a $1,087 original price; orders handled through LillyDirect',
};
const totalAssistObesity = {
  title: 'TotalAssist — Obesity fund',
  url: 'https://totalassist.org/funds/obesity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; Zepbound and Zepbound KwikPen listed; award; any insurance; 300% FPL',
};
const totalAssistMash = {
  title: 'TotalAssist — Metabolic dysfunction-associated steatohepatitis (MASH) fund',
  url: 'https://totalassist.org/funds/metabolic-dysfunction-associated-steatohepatitis-mash/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'open; lists Zepbound (not a labelled use)',
};
const healthWellSearch = {
  title: 'HealthWell Foundation — disease funds',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'no obesity, weight-management or sleep-apnea fund; Zepbound on no fund list',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no obesity or sleep-apnea program',
};

export const ZEPBOUND: MedicationAssistanceRecord = {
  slug: 'zepbound',
  brandName: 'Zepbound',
  genericName: 'tirzepatide',
  manufacturer: 'Eli Lilly and Company',
  // Axis 1: obesity / overweight is what the patient has. The second
  // indication (obstructive sleep apnea) is limited to adults with obesity and
  // is not asthma, COPD or lung disease, so `respiratory` would be wrong and
  // would match the wrong charitable funds. `weight` was added for this batch
  // (data/conditions.ts).
  conditions: ['weight'],
  // "ZEPBOUND is a glucose-dependent insulinotropic polypeptide (GIP) receptor
  // and glucagon-like peptide-1 (GLP-1) receptor agonist" (label Highlights,
  // rev. 4/2026) — classed under 'glp-1', the vocabulary's single key for
  // GLP-1 receptor agonists including the dual agonist.
  drugClass: ['glp-1'],
  description:
    'Zepbound is the weight-management brand of tirzepatide — the same molecule Lilly sells for type 2 diabetes as Mounjaro. Because Medicare Part D excludes drugs used for weight loss, the usual coverage route is closed; what replaces it in 2026–2027 is the Medicare GLP-1 Bridge, which covers the Zepbound KwikPen for $50 a month.',
  usedFor: [
    'Reducing excess body weight and maintaining weight reduction long term in adults with obesity, or adults with overweight and at least one weight-related condition, together with a reduced-calorie diet and increased physical activity',
    'Treating moderate to severe obstructive sleep apnea (OSA) in adults with obesity',
  ],
  whyCostly:
    'Lilly publishes no dollar list price for Zepbound; the federal TrumpRx site shows an original price of $1,087 a month against its $299 discount listing. Because Part D excludes agents used for weight loss, a Part D plan will not pay for Zepbound prescribed for weight management at all — so without the Bridge or a cash price you face the full amount, and nothing you spend on it counts toward the $2,100 Part D cap. Lilly Cares does not cover Zepbound and the savings card excludes Medicare.',
  medicareContext:
    'Two Medicare rules pull in opposite directions. Part D excludes "agents when used for anorexia, weight loss, or weight gain," so Zepbound for weight management is not a Part D benefit; for obstructive sleep apnea with obesity, CMS says the indication "is eligible for Part D coverage," which means a plan may cover it, usually with prior authorization. Separately, the Medicare GLP-1 Bridge — a CMS demonstration running July 1, 2026 to December 31, 2027 — covers the Zepbound KwikPen (not the single-dose pen or vials) for $50 a month for Part D enrollees who meet its BMI-based criteria and do not have type 2 diabetes, OSA or MASH. Tirzepatide has not been selected for Medicare price negotiation for 2026, 2027 or 2028, and CMS says its BALANCE Model is not launching in Medicare in 2027.',
  quickAnswer: {
    verdict:
      'For a Medicare beneficiary prescribed Zepbound for weight management, the one open door in 2026 is the Medicare GLP-1 Bridge: $50 a month for the Zepbound KwikPen, if you meet its criteria. The manufacturer routes are closed to Medicare (Lilly Cares does not list Zepbound; the savings card excludes Medicare), the charity funds that list Zepbound were closed, and Lilly\'s $299–$449 self-pay price is the fallback. If Zepbound is prescribed for sleep apnea, the Bridge does not apply and your Part D plan is the route to ask about.',
    points: [
      'Medicare GLP-1 Bridge: Zepbound KwikPen for $50 a month, July 1, 2026 – December 31, 2027, for Part D enrollees with BMI 35+, or BMI 30+ / 27+ with listed conditions; the pharmacy starts the approval, no plan opt-in is needed, and the $50 cannot be lowered by Extra Help or counted toward your cap.',
      'Manufacturer patient assistance: Zepbound is not on the Lilly Cares available-medications list (nor is Mounjaro).',
      'Zepbound Savings Card: commercial insurance only — anyone enrolled in "Medicare, Medicare Part D, Medicare Advantage, Medigap" is excluded by name.',
      'Self-pay: $299 (2.5 mg), $399 (5 mg) and $449 (7.5–15 mg, when refilled within 45 days) a month for the KwikPen or single-dose vials, through LillyDirect or the retail KwikPen Self-Pay Savings Card; the self-pay terms carry no government-insurance exclusion but require that you seek no reimbursement and count nothing toward TrOOP.',
      'Charitable grants: TotalAssist\'s Obesity fund lists Zepbound but was closed; HealthWell and Good Days have no obesity or sleep-apnea fund.',
    ],
  },
  programs: [
    {
      id: 'glp1-bridge',
      kind: 'government',
      name: 'Medicare GLP-1 Bridge ($50 a month, CMS demonstration)',
      operator: 'Centers for Medicare & Medicaid Services',
      status: 'open',
      statusNote:
        'Live since July 1, 2026 and extended through December 31, 2027 (checked August 26, 2026). Covers the Zepbound KwikPen only — CMS: "The single-dose Zepbound pen and Zepbound vials are NOT covered." Pen needles are not covered either.',
      medicare: 'eligible',
      medicareNote:
        'For Medicare Part D enrollees (stand-alone plans, Medicare Advantage drug plans, Special Needs Plans and employer group plans; not PFFS, cost, PACE or fallback plans). Medicare.gov: "You aren\'t eligible if you: Already get GLP-1 drugs covered through your Medicare Part D plan. Have type 2 diabetes, moderate-to-severe sleep apnea, or fatty liver disease (but your Part D plan might cover your GLP-1s)." Dual-eligible beneficiaries in an eligible plan can use it. CMS: "no part of the $50 copay counts towards the beneficiary\'s TrOOP costs, and there is no low-income subsidy (LIS) provided for LIS beneficiaries."',
      summary:
        'A CMS demonstration that stands in for Part D coverage of weight-management GLP-1s until the end of 2027. Your cost is $50 for a one-month supply "no matter your income level"; the Part D deductible does not apply, and the payment does not count toward your deductible, out-of-pocket limit or Medicare Prescription Payment Plan. Approval, once granted, lasts through December 31, 2027 including refills and dose changes, as long as you stay on the same drug. CMS notes there is no appeals process under the Bridge.',
      covers: 'The Zepbound KwikPen (all six strengths) at a flat $50 per one-month supply. Not the single-dose pen, not vials, not pen needles.',
      eligibility: [
        'Enrolled in an eligible Medicare Part D plan and 18 or older',
        'At the start of GLP-1 therapy: BMI 35 or higher; or BMI 30 or higher with diastolic heart failure, uncontrolled high blood pressure, or chronic kidney disease stage 3a or higher; or BMI 27 or higher with prediabetes, a previous heart attack or stroke, or symptomatic peripheral artery disease',
        'Not already getting a GLP-1 through your Part D plan, and not prescribed it for type 2 diabetes, obstructive sleep apnea or MASH (those uses are Part D\'s, not the Bridge\'s)',
        'Your prescriber certifies the medicine is part of a lifestyle program focused on diet and exercise',
      ],
      requirements: [
        'A prescription written specifically for the Zepbound KwikPen (Lilly: "Make sure your prescription is written specifically for the Zepbound KwikPen")',
        'Your Medicare number (the pharmacy may ask for it to confirm eligibility)',
        'A prior-authorization form your doctor submits after the pharmacy confirms eligibility — Lilly advises prescribers not to submit it proactively; the pharmacy initiates it',
      ],
      howToApply:
        'There is no application. Your doctor sends a KwikPen prescription to the pharmacy; the pharmacy checks your Medicare eligibility with CMS\'s central processor and starts the prior authorization, your doctor completes the form, Medicare mails you a letter, and you pick up the medicine for $50. Lilly\'s pharmacy script: "I am starting the Medicare GLP-1 Bridge program. Please bill my prescription using the BIN and PCN … as primary insurance. My cost should be $50. Please do not bill Medicare Part D." Questions: 1-800-MEDICARE (1-800-633-4227).',
      applyUrl: 'https://www.medicare.gov/coverage/weight-loss-drugs',
      applyLabel: 'Medicare.gov — GLP-1 drugs for $50 a month',
      phone: '1-800-633-4227',
      sources: [SRC.medicareWeightLossDrugs, SRC.medicareGlp1Bridge, SRC.cmsGlp1Bridge, cmsBridgeProviders, lillyMedicare, zepboundMedicare, lillyBridgeRelease],
    },
    {
      id: 'lillycares',
      kind: 'manufacturer-pap',
      name: 'Lilly Cares Foundation Patient Assistance Program',
      operator: 'Lilly Cares Foundation',
      status: 'not-found',
      statusNote: 'Zepbound is not on the Lilly Cares available-medications list (checked August 26, 2026); neither is Mounjaro. Lilly Cares publishes no explicit exclusion statement — only the list, which omits tirzepatide.',
      medicare: 'unknown',
      medicareNote: 'Not applicable — the foundation does not cover Zepbound, so its Medicare Part D rules do not reach it.',
      summary:
        'Lilly\'s patient assistance foundation provides its listed medicines free to eligible patients. Zepbound is not listed. Lilly points people whose medication is not listed to the Medicine Assistance Tool.',
      eligibility: ['Not applicable to Zepbound — the program\'s listed medicines only'],
      howToApply: 'Not applicable to Zepbound. Questions: 1-800-545-6962, Monday–Friday 8am–6pm ET.',
      applyUrl: 'https://www.lillycares.com/available-medications',
      applyLabel: 'Lilly Cares medication list',
      phone: '1-800-545-6962',
      sources: [lillyCaresMeds],
    },
    {
      id: 'zepbound-savings-card',
      kind: 'manufacturer-savings',
      name: 'Zepbound Savings Card (single-dose pen and KwikPen)',
      operator: 'Eli Lilly and Company',
      status: 'open',
      statusNote: 'Active for commercially insured patients; "Card expires and savings end on 12/31/2026." Not valid for single-dose vials.',
      medicare: 'excluded',
      medicareNote:
        'Lilly\'s terms require that "You are not enrolled in any state, federal, or government funded healthcare program, including, without limitation, Medicaid, Medicare, Medicare Part D, Medicare Advantage, Medigap, DoD, VA, TRICARE/CHAMPUS, or any state prescription drug assistance program." Anyone who later gains government coverage must stop using the card.',
      summary:
        'A commercial copay offer: as little as $25 per fill for commercially insured patients whose plan covers the single-dose pen (maximum $1,300 savings a year), or $499 a month for the pen and $299–$449 for the KwikPen when a commercial plan does not cover Zepbound.',
      eligibility: ['Commercial prescription insurance', 'Not enrolled in any government-funded healthcare program', 'A prescription for an approved use consistent with the label'],
      howToApply: 'Commercially insured patients activate the card at zepbound.lilly.com/savings. Not applicable to Medicare beneficiaries. Questions: 1-866-923-1953.',
      applyUrl: 'https://zepbound.lilly.com/savings/terms-and-conditions',
      applyLabel: 'Zepbound Savings Card terms',
      phone: '1-866-923-1953',
      sources: [savingsTerms, zepboundSavings, SRC.oigCoupons],
    },
    {
      id: 'lillydirect',
      kind: 'manufacturer-direct',
      name: 'LillyDirect self-pay and the KwikPen Self-Pay Savings Card',
      operator: 'Eli Lilly and Company',
      status: 'open',
      statusNote:
        'Self-pay prices on August 26, 2026: $299 a month for 2.5 mg, $399 for 5 mg, and $449 for 7.5–15 mg when you refill within 45 days (otherwise $499 for 7.5 mg and $699 for 10–15 mg). The same prices apply to single-dose vials (LillyDirect only) and the KwikPen (LillyDirect, or any retail pharmacy with the Self-Pay Savings Card). The single-dose pen has no self-pay price.',
      medicare: 'conditional',
      medicareNote:
        'The self-pay terms contain no Medicare or government-program exclusion — unlike the commercial card — and Lilly\'s savings page shows the self-pay option under its "Medicare" selection. But no sentence says outright that Medicare enrollees may buy. What the terms do require: you "will not seek or accept reimbursement … from any third-party payer, including private insurance or state or federal healthcare programs, nor apply those costs toward any deductible or true out-of-pocket requirements." Treat it as a cash purchase outside your plan and confirm with LillyDirect Customer Care first.',
      summary:
        'Lilly\'s direct-to-patient channel, plus a retail cash card for the KwikPen launched March 16, 2026 that Lilly says "is available to all patients, including those without insurance coverage." For a Part D enrollee who does not qualify for the Bridge — for example because Zepbound is prescribed for sleep apnea and the plan will not cover it — this is the price to compare. Cash purchases do not count toward the $2,100 Part D cap.',
      covers: 'A cash price of $299–$449 a month (regular price $299–$699) for the Zepbound KwikPen or single-dose vials; the federal TrumpRx site lists the same $299 starting price and routes orders to LillyDirect.',
      eligibility: ['A valid on-label Zepbound prescription written for the KwikPen or vials', 'Willing to pay cash outside your insurance, with no reimbursement claim and nothing counted toward a deductible or TrOOP', 'U.S. or Puerto Rico resident, 18 or older'],
      howToApply: 'Your prescriber sends the prescription to LillyDirect (vials or KwikPen; delivery is free) or to a retail pharmacy where you present the KwikPen Self-Pay Savings Card from zepbound.lilly.com/savings. LillyDirect Customer Care: 1-844-559-3471, Monday–Friday 9am–7pm ET.',
      applyUrl: 'https://www.lilly.com/lillydirect/zepbound',
      applyLabel: 'LillyDirect — Zepbound',
      phone: '1-844-559-3471',
      sources: [lillyDirect, fullTerms, kwikpenSelfPayRelease, zepboundSavings, trumpRx],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Obesity fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Obesity',
      status: 'closed',
      statusNote:
        'Closed to new applicants on August 26, 2026. Zepbound and Zepbound KwikPen (tirzepatide) are on the fund\'s approved-medication list. Zepbound is also listed under the closed Type 2 diabetes, Type 2 diabetes health equity and Stroke funds and the OPEN MASH fund — none of which matches a weight-management or sleep-apnea prescription. There is no sleep-apnea fund.',
      medicare: 'eligible',
      medicareNote:
        'Unusually, the Obesity fund accepts any health insurance, not only government coverage — but it requires insurance "that covers your qualifying expenses." Part D does not cover Zepbound for weight loss, and whether a grant can reimburse the Bridge\'s $50 copay, which sits outside Part D, is not addressed anywhere on totalassist.org. Ask TotalAssist directly before counting on it.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (launched July 1, 2026, combining PAF Co-Pay Relief and the PAN Foundation) lists Zepbound under its Obesity fund. A listing is not an open fund. Sign up to be notified the moment it reopens — there is no waitlist or queue.',
      covers: 'When open: $1,000 guaranteed award, $2,000 maximum, for eligible out-of-pocket costs; household income at or below 300% of the federal poverty level, adjusted for regional cost of living.',
      eligibility: [
        'Confirmed obesity diagnosis (ICD-10 E66 codes), in treatment or starting within 60 days',
        'Health insurance (any) that covers your qualifying expenses',
        'Household income at or below 300% of the federal poverty level, adjusted for your regional cost-of-living index — lower than the 500% used by TotalAssist\'s government-insured funds',
        ...TOTALASSIST_ELIGIBILITY.slice(3),
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: 'Sign up for fund notifications at totalassist.org/notify. When the fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistObesity, totalAssistMash, SRC.totalAssistMedIndex, SRC.totalAssistFunds, SRC.totalAssistNotify, SRC.totalAssistApply],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation',
      operator: 'HealthWell Foundation',
      status: 'not-found',
      statusNote: 'HealthWell runs no obesity, weight-management or sleep-apnea fund, and Zepbound appears on no fund\'s treatment list — its Type 2 Diabetes fund lists Mounjaro and tirzepatide but not Zepbound, and its open MASH fund lists Wegovy but not Zepbound (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching fund.',
      summary: 'An honest negative: we checked the full disease-fund list and the site search, and there is no HealthWell route for Zepbound.',
      eligibility: [],
      howToApply: 'Not applicable. HealthWell: (800) 675-8416.',
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellSearch, SRC.healthWellFunds],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no obesity, weight-management, sleep-apnea or diabetes program among its open, seeking-funding or closed funds (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Zepbound\'s diagnoses.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'One charity lists Zepbound for its labelled use — TotalAssist\'s Obesity fund — and it was closed to new applicants on August 26, 2026 (when open: $1,000 guaranteed, $2,000 maximum, any insurance, income at or below 300% FPL). HealthWell has no obesity or sleep-apnea fund and Good Days has none either. The only open TotalAssist fund naming Zepbound is the MASH liver-disease fund, which does not fit a weight-management prescription. For most Medicare beneficiaries the Bridge, not a charity, is the realistic route.',
  extraHelpNote:
    'Extra Help does not touch the Bridge: CMS says the $50 copay "can\'t be lowered by programs like Extra Help." It still matters — it lowers every covered drug in your Part D plan, and if Zepbound is covered by your plan for sleep apnea, Extra Help would apply to that copay in the normal way.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'The route depends on why Zepbound was prescribed and on your BMI history, so start there:',
      bullets: [
        'Prescribed for weight management, on a Part D plan, BMI 35+ (or 30+ / 27+ with the listed conditions) at the start of therapy, and no type 2 diabetes, sleep apnea or MASH diagnosis → Medicare GLP-1 Bridge, $50 a month for the KwikPen.',
        'Prescribed for obstructive sleep apnea with obesity → ask your Part D plan; CMS says that use "is eligible for Part D coverage," usually with prior authorization. The Bridge does not apply.',
        'Not eligible for the Bridge and not covered by your plan → LillyDirect or KwikPen Self-Pay Savings Card, $299–$449 a month, outside your insurance.',
        'Obesity diagnosis → sign up for TotalAssist Obesity fund alerts; it was closed when checked.',
        'Limited income and resources → Medicare Extra Help for your other covered drugs (it cannot lower the Bridge copay).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The Bridge is open through December 31, 2027 and needs no fund balance. The charity picture is different:',
      bullets: [
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for the Obesity fund.',
        'HealthWell and Good Days: no obesity fund exists to open — check the disease-fund lists in case one is created.',
        'Lilly Cares: check the available-medications list; if Zepbound is ever added, this page will change.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'For the routes that were open:',
      bullets: [
        'Bridge: 18 or older; eligible Part D plan type; BMI 35+, or BMI 30+ with diastolic heart failure, uncontrolled hypertension or CKD stage 3a+, or BMI 27+ with prediabetes, prior heart attack or stroke, or symptomatic peripheral artery disease — measured when GLP-1 therapy started; no type 2 diabetes, OSA or MASH diagnosis; not already getting a GLP-1 through Part D.',
        'Self-pay: a valid KwikPen or vial prescription; agreement to seek no reimbursement and count nothing toward a deductible or TrOOP.',
        'TotalAssist Obesity fund (when open): insurance covering the expense; income at or below 300% FPL, cost-of-living adjusted; obesity diagnosis in treatment.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready — the Bridge moves through the pharmacy quickly once eligibility is confirmed, and TotalAssist applications are decided instantly when a fund is open.',
      bullets: [
        'Medicare card and your Part D / Medicare Advantage drug-plan card; the pharmacy may ask for your Medicare number to check Bridge eligibility.',
        'Your BMI and the date GLP-1 therapy began, plus documentation of any qualifying condition (heart failure, blood pressure readings on two medicines, kidney function, prediabetes, prior heart attack or stroke, PAD).',
        'A prescription written for the Zepbound KwikPen specifically if you are using the Bridge or the retail self-pay card.',
        'Household size and annual household income, with proof, for TotalAssist.',
        'Social Security number (TotalAssist asks for it).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Bridge: there is no patient application. Your doctor sends the KwikPen prescription; the pharmacy confirms eligibility and starts the prior authorization; your doctor completes the form; Medicare sends you a letter.',
        'LillyDirect: your prescriber sends the prescription to LillyDirect; you pay online. Retail: present the KwikPen Self-Pay Savings Card with the prescription.',
        'TotalAssist (when open): you apply online in about 15 minutes; Patient Advocate Foundation verifies your diagnosis with your provider and verifies income automatically.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Bridge: once approved, pick up the KwikPen and pay $50; refills and dose changes need no new approval through December 31, 2027 as long as you stay on Zepbound. CMS says there is no appeals process if you are found ineligible.',
        'TotalAssist: an instant decision when you submit; proof of income due within 30 days.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays to covered drugs.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "not eligible":',
      bullets: [
        'Sign up for TotalAssist fund alerts — there is no waitlist, so being notified first matters.',
        'If you were prescribed Zepbound for sleep apnea, ask your prescriber to request coverage from your Part D plan with the OSA diagnosis, and a formulary exception if it is not on the list.',
        'Ask your prescriber whether a covered alternative is appropriate — Mounjaro (the same molecule) is covered by Part D for type 2 diabetes if you have that diagnosis, and Wegovy has its own Bridge listing and self-pay prices.',
        'Compare the self-pay price against what you would otherwise pay; remember cash purchases do not count toward the $2,100 cap.',
        'Compare Part D plans in the fall — plan rules on GLP-1s for OSA differ.',
        'Call AltaMedicare — we\'ll check every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'BMI at the start of GLP-1 therapy and documentation of any qualifying condition', note: 'Medicare GLP-1 Bridge prior authorization (your doctor submits it)' },
    { item: 'Copay or coinsurance amount for Zepbound', note: 'TotalAssist asks for it' },
    { item: 'Social Security number', note: 'TotalAssist' },
    { item: 'Bank, retirement and pension statements', note: 'Extra Help application (resources)' },
  ],
  ifUnavailable: [
    {
      text: 'If you also have type 2 diabetes, Zepbound\'s sister brand Mounjaro is the version Part D covers — see what assistance exists for it.',
      href: '/mounjaro-assistance-program.html',
      label: 'Mounjaro assistance',
    },
    {
      text: 'Wegovy is the other injectable in the Medicare GLP-1 Bridge and has its own self-pay prices — compare the two with your prescriber.',
      href: '/wegovy-assistance-program.html',
      label: 'Wegovy assistance',
    },
    ...standardAlternatives('Zepbound'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Zepbound?',
      answer:
        'For weight management, Part D does not — federal law excludes "agents when used for anorexia, weight loss, or weight gain" from Part D. What exists instead, from July 1, 2026 to December 31, 2027, is the Medicare GLP-1 Bridge: a CMS program that supplies the Zepbound KwikPen for $50 a month to Part D enrollees who meet its criteria. For obstructive sleep apnea with obesity, CMS says the indication is eligible for Part D coverage, so your plan may cover it with prior authorization. See our <a href="/blog/category/drug-coverage.html">drug coverage guides</a> for how Part D formularies work.',
    },
    {
      question: 'How do I get Zepbound for $50 a month on Medicare?',
      answer:
        'Through the Medicare GLP-1 Bridge. You need an eligible Part D plan, a prescription written specifically for the Zepbound KwikPen, and to have met the BMI criteria when you started GLP-1 therapy: BMI 35 or higher; BMI 30 or higher with diastolic heart failure, uncontrolled high blood pressure or chronic kidney disease stage 3a+; or BMI 27 or higher with prediabetes, a prior heart attack or stroke, or symptomatic peripheral artery disease. People with type 2 diabetes, sleep apnea or fatty liver disease are not eligible. There is no form for you to fill in — the pharmacy checks eligibility and starts the prior authorization, your doctor completes it, and Medicare mails you a letter. Call 1-800-MEDICARE with questions.',
    },
    {
      question: 'Does Extra Help lower the $50 Bridge copay?',
      answer:
        'No. Medicare.gov says the Bridge copayment "Can\'t be lowered by programs like Extra Help," and CMS says there is no low-income subsidy on it. It also does not count toward your Part D deductible or the $2,100 out-of-pocket cap, and it cannot be spread out with the Medicare Prescription Payment Plan. <a href="/blog/extra-help-explained.html">Extra Help</a> is still worth having for every other covered drug.',
    },
    {
      question: 'Is there a Zepbound patient assistance program?',
      answer:
        'Not from the manufacturer. Zepbound is not on the Lilly Cares Foundation\'s available-medications list (checked August 26, 2026), and neither is Mounjaro. The only charity fund that lists Zepbound for obesity — TotalAssist\'s Obesity fund — was closed to new applicants.',
    },
    {
      question: 'Can I use the Zepbound savings card with Medicare?',
      answer:
        'No. Lilly\'s terms require that you are not enrolled in any government-funded healthcare program, naming Medicare, Medicare Part D, Medicare Advantage and Medigap. The separate KwikPen Self-Pay Savings Card is different: it is a cash card with no government-insurance exclusion, but you must agree not to seek reimbursement and not to count the cost toward any deductible or true out-of-pocket amount.',
    },
    {
      question: 'What does Zepbound cost self-pay, and can I buy it that way on Medicare?',
      answer:
        'Lilly\'s self-pay prices on August 26, 2026 were $299 a month for 2.5 mg, $399 for 5 mg and $449 for 7.5 mg through 15 mg when refilled within 45 days (otherwise $499 and $699). Vials are sold only through LillyDirect; the KwikPen is available through LillyDirect or at retail pharmacies with the Self-Pay Savings Card. The self-pay terms do not exclude Medicare enrollees and Lilly shows the option under its Medicare selection, but no sentence says so outright — confirm with LillyDirect Customer Care at 1-844-559-3471. A cash purchase never counts toward your Part D cap.',
    },
    {
      question: 'Is there a charitable grant for Zepbound right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist\'s Obesity fund lists Zepbound (when open: $1,000 guaranteed, $2,000 maximum, income at or below 300% FPL, any insurance) but was closed. HealthWell has no obesity or sleep-apnea fund and Good Days has none. TotalAssist\'s open MASH fund names Zepbound, but that fund is for a liver-disease diagnosis. Sign up for notifications at totalassist.org/notify.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications with no waitlist or queue. While you wait: check whether you qualify for the Bridge, ask your prescriber about coverage under an OSA diagnosis if that applies, compare the self-pay price, and compare Part D plans in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['mounjaro', 'wegovy', 'ozempic', 'trulicity'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans and their GLP-1 rules' },
  ],
  sources: [
    label,
    lillyCaresMeds,
    zepboundSavings,
    savingsTerms,
    fullTerms,
    lillyDirect,
    kwikpenSelfPayRelease,
    lillyMedicare,
    zepboundMedicare,
    lillyBridgeRelease,
    SRC.medicareWeightLossDrugs,
    SRC.medicareGlp1Bridge,
    SRC.cmsGlp1Bridge,
    cmsBridgeProviders,
    cmsBalance,
    cmsMfp2028List,
    partDManual,
    trumpRx,
    SRC.medicareDrugCosts,
    totalAssistObesity,
    totalAssistMash,
    SRC.totalAssistFunds,
    SRC.totalAssistNotify,
    healthWellSearch,
    goodDays,
    SRC.oigCoupons,
  ],
  // Per-record verification date — a literal, never the shared CHECKED
  // constant: re-verifying one medication must move one date.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Get Zepbound Assistance on Medicare',
    status: 'coming-soon',
    description: 'A short walkthrough of the Medicare GLP-1 Bridge for the Zepbound KwikPen, the Part D rules for sleep apnea, the self-pay option, and what to do when the obesity fund reopens.',
  },
  description_meta:
    'How to get help paying for Zepbound (tirzepatide) on Medicare: the $50-a-month Medicare GLP-1 Bridge for the KwikPen and who qualifies, why Lilly Cares and the savings card do not apply, self-pay prices, and charity fund status — verified August 2026.',
};

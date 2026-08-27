// ---------------------------------------------------------------------------
// Spiriva (tiotropium bromide) — Boehringer Ingelheim. Independently researched
// 2026-08-26. Batch 6 (spec §24 Phase 4 list) — a NEW slug.
//
// RESEARCH LIMIT, STATED UP FRONT because it shapes two program cards below:
// every Boehringer Ingelheim host that serves patient-facing pages refused
// automated access on 2026-08-26 — boehringer-ingelheim.com,
// patient.boehringer-ingelheim.com and pro.boehringer-ingelheim.com all
// returned an Incapsula block page, and spiriva.com redirects into the blocked
// host. Only docs.boehringer-ingelheim.com, which serves prescribing
// information and savings-card terms as PDFs, could be read — and the savings
// card terms it serves carry a program expiration of 12/31/2024, so they are
// not current terms. The BI programs below are therefore `verify`, with exactly
// what could and could not be confirmed written into each status note. The
// project rule is that an inaccessible official source produces `verify`, never
// a borrowed fact from a sibling drug or another manufacturer.
//
// Separate legacy finding, recorded for the deferred data-hygiene task rather
// than acted on here: bicares.org — the URL the legacy PROGRAMS entry still
// points at — is a non-existent domain (NXDOMAIN on both 8.8.8.8 and 1.1.1.1).
// BI's program now lives under boehringer-ingelheim.com, the applyUrl below.
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

const labelHandihaler = {
  title: 'Spiriva HandiHaler prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=820839ef-e53d-47e8-a3b9-d911ff92e6a9',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"SPIRIVA HANDIHALER is an anticholinergic indicated for the long-term, once-daily, maintenance treatment of bronchospasm associated with chronic obstructive pulmonary disease (COPD), and for reducing COPD exacerbations"; 18 mcg inhalation powder capsule (rev. 12/2024)',
};
const labelRespimat = {
  title: 'Spiriva Respimat prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7b656b14-fcaa-2741-f6f0-e0be48971c02',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'COPD maintenance and "long-term, once-daily, maintenance treatment of asthma in patients 6 years of age and older"; not indicated for relief of acute bronchospasm; 1.25 mcg and 2.5 mcg strengths (rev. 1/2025)',
};
const dailymedGeneric = {
  title: 'DailyMed label search — tiotropium',
  url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=tiotropium',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'a generic "TIOTROPIUM BROMIDE capsule" is labelled alongside Spiriva HandiHaler; the Respimat inhalation spray appears only as the Boehringer Ingelheim product',
};
const biPortal = {
  title: 'Boehringer Cares Patient Assistance Portal',
  url: 'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
  publisher: 'Boehringer Ingelheim',
  checked: CHECKED,
  supports:
    'the current official location of the Boehringer Cares Patient Assistance Program. NOTE: this page returned an Incapsula block page to every automated request on the checked date, so its terms could not be read here',
};
const phrmaPpa = {
  title: 'Boehringer Ingelheim Cares Foundation, Inc. — therapies offered',
  url: 'https://www.helpingpatients.org/company/boehringer_ingelheim_pharmaceuticals_inc',
  publisher: 'Partnership for Prescription Assistance (PhRMA)',
  checked: CHECKED,
  supports:
    'program information supplied by the foundation itself, listing Spiriva HandiHaler and Spiriva Respimat among the therapies offered, and describing free medicines for patients meeting program criteria',
};
const rxAssistBi = {
  title: 'RxAssist — BI Cares Patient Assistance Program',
  url: 'https://www.rxassist.org/search/prog-details?program_Id=14',
  publisher: 'RxAssist (Rhode Island Hospital / Brown University)',
  checked: CHECKED,
  supports:
    'entry last updated 04/27/2026: "Patients with Medicare Part D may be eligible, contact program for details"; income limit "Not Published"; phone 1-800-556-8317; fax 1-866-851-2827',
};
const spirivaCardTerms = {
  title: 'SPIRIVA RESPIMAT Savings Card Terms and Conditions',
  url: 'https://docs.boehringer-ingelheim.com/SPIRIVA%20RESPIMAT%20Savings%20Card%20Terms%20and%20Conditions.pdf',
  publisher: 'Boehringer Ingelheim Pharmaceuticals',
  checked: CHECKED,
  supports:
    'the government-insurance exclusion — "Offer not valid for patients without commercial coverage or patients whose prescriptions for SPIRIVA RESPIMAT are eligible to be reimbursed, in whole or in part, by any governmental program such as Medicaid, Medicare, Medigap, the Retiree Drug Subsidy Program, VA, DOD, TRICARE"; NOTE: this copy states "Benefits not to exceed Program expiration on 12/31/2024", so its dollar terms are not current',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Spiriva Handihaler (Tiotropium Bromide)" and "Spiriva Respimat (Tiotropium Bromide)" on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL',
};
const totalAssistAsthma = {
  title: 'TotalAssist — Asthma fund',
  url: 'https://totalassist.org/funds/asthma/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; both Spiriva devices on the approved-medication list; $1,200 guaranteed / $3,500 maximum award',
};
const totalAssistCopdHe = {
  title: 'TotalAssist — COPD health equity fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; Spiriva listed; $1,200 guaranteed / $3,500 maximum award',
};
const healthWellCopdMa = {
  title: 'HealthWell Chronic Obstructive Pulmonary Disease – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/chronic-obstructive-pulmonary-disease-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'Closed to new patients; Spiriva Handihaler, Spiriva Respimat and tiotropium bromide on the covered list; $3,250 maximum award; forecast average grant $1,500; 500% FPL; Medicare-only fund',
};
const healthWellAsthma = {
  title: 'HealthWell Asthma fund',
  url: 'https://www.healthwellfoundation.org/fund/asthma/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'Closed to new patients; both Spiriva devices and tiotropium bromide on the covered list; $4,500 maximum award; 500% FPL',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no asthma, COPD or general lung fund on the disease list',
};
const cmsSelectedDrugFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file (May 26, 2026) — no Spiriva or tiotropium row for initial price applicability year 2026, 2027 or 2028',
};
const trumpRx = {
  title: 'TrumpRx — browse all medicines',
  url: 'https://trumprx.gov/browse',
  publisher: 'TrumpRx.gov',
  checked: CHECKED,
  supports:
    'brand Spiriva is not among the listed medicines; a generic tiotropium bromide inhalation powder does appear, at prices the site sets by location',
};

export const SPIRIVA: MedicationAssistanceRecord = {
  slug: 'spiriva',
  brandName: 'Spiriva',
  genericName: 'tiotropium bromide',
  manufacturer: 'Boehringer Ingelheim',
  conditions: ['respiratory'],
  // Both labels call tiotropium "an anticholinergic" — one long-acting
  // bronchodilator, no steroid. Not 'ics-laba' (Symbicort) and not
  // 'triple-inhaler' (Breztri, Trelegy).
  drugClass: ['lama'],
  description:
    'Spiriva is a once-daily maintenance inhaler containing tiotropium, a long-acting anticholinergic that keeps the airway muscle relaxed. It comes in two devices with different approved uses: the HandiHaler, a capsule you load into an inhaler, for COPD; and the Respimat, a soft-mist inhaler, for COPD and for asthma in people 6 and older. Neither is a rescue inhaler.',
  usedFor: [
    'Long-term, once-daily maintenance treatment of bronchospasm associated with COPD, and reducing COPD exacerbations (HandiHaler and Respimat)',
    'Long-term, once-daily maintenance treatment of asthma in patients 6 years of age and older (Respimat only)',
    'Not indicated for the relief of acute bronchospasm — a rescue inhaler is still needed',
  ],
  whyCostly:
    'Spiriva is a brand inhaler that Part D plans typically place on a brand tier, where a deductible or a non-preferred tier can make the first fills of the year expensive. Which device you are prescribed matters to cost: a generic tiotropium bromide capsule is labelled with FDA and can substitute for the HandiHaler, while the Respimat soft-mist inhaler appears on DailyMed only as the Boehringer Ingelheim product. The manufacturer savings card is for commercial insurance and excludes Medicare, so a Part D beneficiary pays the plan\'s cost-sharing until the annual out-of-pocket cap is reached.',
  medicareContext:
    'Spiriva is covered under Medicare Part D or a Medicare Advantage drug plan as a maintenance inhaler — commonly a brand tier, sometimes with prior authorization or step therapy. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file contains no Spiriva or tiotropium row for 2026, 2027 or 2028. Part D out-of-pocket costs are capped at $2,100 in 2026; Extra Help lowers cost-sharing for people with limited income and resources; the Medicare Prescription Payment Plan spreads what you owe across the year without lowering it. If you use the HandiHaler, ask your plan what the generic tiotropium capsule costs — that is often the largest single saving available.',
  quickAnswer: {
    verdict:
      'Probably — but the manufacturer\'s own terms could not be confirmed, so treat the Boehringer Ingelheim routes as "call and check" rather than as settled. Boehringer Ingelheim runs a patient assistance program that its own foundation lists Spiriva HandiHaler and Spiriva Respimat under, and a directory updated in April 2026 says Medicare Part D patients may be eligible. Every COPD and asthma charity fund we checked was closed. The generic capsule and Medicare Extra Help are the routes with no fund balance attached.',
    points: [
      'Boehringer Cares Patient Assistance Program: the foundation\'s own therapy list includes Spiriva HandiHaler and Spiriva Respimat, and it supplies medicines free to patients who meet its criteria. Its published income limit is "Not Published" and Boehringer Ingelheim\'s website refused every automated request on August 26, 2026 — call 1-800-556-8317 to confirm the current terms.',
      'Spiriva Respimat savings card: Boehringer Ingelheim\'s own terms exclude prescriptions "eligible to be reimbursed, in whole or in part, by any governmental program such as Medicaid, Medicare, Medigap… VA, DOD, TRICARE." The only copy we could read had expired, so the dollar terms are not stated here.',
      'Charitable grants: TotalAssist\'s COPD and Asthma funds and HealthWell\'s COPD – Medicare Access and Asthma funds all list both Spiriva devices — and all were closed to new applicants. Good Days has no lung fund.',
      'Generic: a tiotropium bromide capsule is labelled with FDA and substitutes for the HandiHaler. No generic Respimat spray is labelled.',
      'Medicare: not a negotiated-price drug for 2026, 2027 or 2028; Part D costs capped at $2,100 in 2026; Extra Help can cut a covered brand copay to about $12.65.',
    ],
  },
  programs: [
    {
      id: 'bi-cares',
      kind: 'manufacturer-pap',
      name: 'Boehringer Cares Patient Assistance Program',
      operator: 'Boehringer Ingelheim Cares Foundation',
      status: 'verify',
      statusNote:
        'Listed, but current terms could not be confirmed on August 26, 2026. Boehringer Ingelheim\'s own program pages returned an automated block to every request, so the income limit, the Medicare rules and the current medicine list were not read at the source. What we could confirm: the foundation\'s own program description, published through PhRMA\'s Partnership for Prescription Assistance, lists Spiriva HandiHaler and Spiriva Respimat among the therapies offered; and an independent program directory updated April 27, 2026 records the phone, the fax and a Medicare Part D note. Call before you assume either way.',
      medicare: 'unknown',
      medicareNote:
        'Boehringer Ingelheim\'s official statement of its Medicare rules could not be read on the checked date, so we are not stating one. The RxAssist directory entry (updated April 27, 2026) reports "Patients with Medicare Part D may be eligible, contact program for details" and lists the program income limit as "Not Published". Programs of this type commonly ask Medicare applicants for proof that Extra Help was applied for or denied — commonly, but we did not confirm it for this program, and you should ask on the call.',
      summary:
        'The Boehringer Ingelheim Cares Foundation supplies Boehringer Ingelheim medicines free of charge to U.S. patients who meet its criteria, with no charge to apply, to refill, to call, or to have the medicine shipped. Spiriva is on the foundation\'s therapy list.',
      covers: 'Boehringer Ingelheim medicines at no cost to approved patients, shipped free.',
      eligibility: [
        'U.S. patient prescribed a Boehringer Ingelheim medicine on the program list — Spiriva HandiHaler and Spiriva Respimat are both listed',
        'Household income within the program\'s limit — the limit is not published, so it must be confirmed with the program',
        'Insurance status rules for Medicare Part D beneficiaries were not confirmed at the source; ask when you call',
      ],
      requirements: [
        'Financial documentation — a federal tax return or another form the program accepts',
        'Prescription information and your prescriber\'s licence details (NPI)',
        'Your insurance details, including your Medicare and Part D plan information',
      ],
      howToApply:
        'Call the program on 1-800-556-8317, Monday–Friday 8:30am–6:00pm ET, and ask it to send the current application and income guidelines — that is the reliable route while the website is the part we could not read. Applications are completed by you together with your prescriber and returned to the foundation. There is no fee to apply.',
      applyUrl:
        'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
      applyLabel: 'Boehringer Cares patient assistance portal',
      phone: '1-800-556-8317',
      sources: [biPortal, phrmaPpa, rxAssistBi],
    },
    {
      id: 'spiriva-savings-card',
      kind: 'manufacturer-savings',
      name: 'Spiriva savings card',
      operator: 'Boehringer Ingelheim',
      status: 'verify',
      statusNote:
        'Boehringer Ingelheim publishes savings-card terms for Spiriva Respimat and Spiriva HandiHaler, but the only copy reachable on August 26, 2026 states "Benefits not to exceed Program expiration on 12/31/2024" — an expired document. The current terms live on pages that refused automated access, so no dollar amount, monthly maximum or number of uses is published here. What is stable across every version is the government-insurance exclusion below.',
      medicare: 'excluded',
      medicareNote:
        'Boehringer Ingelheim\'s terms: the offer is "not valid for patients without commercial coverage or patients whose prescriptions for SPIRIVA RESPIMAT are eligible to be reimbursed, in whole or in part, by any governmental program such as Medicaid, Medicare, Medigap, the Retiree Drug Subsidy Program, VA, DOD, TRICARE, or any state patient or pharmaceutical assistance program." If you have Medicare Part D, this card is not a route for you — federal anti-kickback rules are why.',
      summary:
        'A commercial copay card for people with private or employer prescription insurance that covers Spiriva. It is not insurance, is not accepted at VA pharmacies, and cannot be combined with another coupon or discount card.',
      covers: 'Part of the commercial copay for Spiriva. Nothing toward Medicare cost-sharing.',
      eligibility: [
        'Commercial prescription insurance that covers Spiriva and does not reimburse the entire cost',
        'Not covered by Medicare, Medicaid, Medigap, TRICARE, VA, DoD or a state pharmaceutical assistance program',
        'Current dollar terms unconfirmed — ask Boehringer Ingelheim before you rely on a figure',
      ],
      howToApply:
        'Commercially insured patients enrol through the Spiriva product website. Medicare beneficiaries should go to the Boehringer Cares program, the charitable funds and Extra Help instead.',
      applyUrl: 'https://docs.boehringer-ingelheim.com/SPIRIVA%20RESPIMAT%20Savings%20Card%20Terms%20and%20Conditions.pdf',
      applyLabel: 'Spiriva Respimat savings card terms (Boehringer Ingelheim)',
      sources: [spirivaCardTerms, SRC.oigCoupons],
    },
    {
      id: 'bi-direct',
      kind: 'manufacturer-direct',
      name: 'Manufacturer cash price — none found for brand Spiriva',
      operator: 'Boehringer Ingelheim',
      status: 'not-found',
      statusNote:
        'We found no Boehringer Ingelheim self-pay or direct-purchase price for Spiriva on August 26, 2026, and brand Spiriva is not among the medicines listed on TrumpRx. A generic tiotropium bromide inhalation powder is listed there, at prices the site sets by location — so no fixed figure is quoted here.',
      medicare: 'unknown',
      medicareNote: 'Not applicable — there is no manufacturer cash-pay programme for Spiriva to have a Medicare rule.',
      summary:
        'An honest negative for the brand, with a real alternative behind it: for the HandiHaler, the labelled generic tiotropium capsule is the cash-price comparison worth making at the pharmacy counter.',
      eligibility: [],
      howToApply:
        'Not applicable. Ask a pharmacist what the generic tiotropium capsule costs with and without your plan, and compare that against your Spiriva copay.',
      applyUrl: 'https://trumprx.gov/browse',
      applyLabel: 'TrumpRx medicine list',
      sources: [trumpRx, dailymedGeneric],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — COPD and Asthma funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Chronic obstructive pulmonary disease (COPD) · Asthma (and their health-equity variants)',
      status: 'closed',
      statusNote:
        'The COPD fund, the COPD health equity fund and the Asthma funds were all closed to new applicants on August 26, 2026. The health-equity variants additionally require a home zip code in a designated social-vulnerability county.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open.',
      summary:
        'Both devices are named on the approved-medication lists — "Spiriva Handihaler (Tiotropium Bromide)" and "Spiriva Respimat (Tiotropium Bromide)" — as is generic tiotropium bromide. A listing is not an open fund; each was closed when we checked.',
      covers:
        'When open: $1,200 guaranteed award and up to $3,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed COPD or asthma diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistCopd, totalAssistAsthma, totalAssistCopdHe, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — COPD – Medicare Access and Asthma funds',
      operator: 'HealthWell Foundation',
      fund: 'Chronic Obstructive Pulmonary Disease – Medicare Access · Asthma',
      status: 'closed',
      statusNote:
        'Both funds were "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Spiriva HandiHaler, Spiriva Respimat and tiotropium bromide are on both covered-medication lists.',
      medicare: 'eligible',
      medicareNote:
        'The COPD fund is a Medicare Access fund — Medicare patients only, and premium assistance through it requires Medicare Part B. The Asthma fund accepts any insurance that pays part of the cost, Medicare included.',
      summary:
        'HealthWell lists both Spiriva devices under its COPD – Medicare Access fund and its Asthma fund. HealthWell says replenished funds reopen "as quickly as possible" and offers email or text alerts for each fund.',
      covers:
        'When open: up to $3,250 per grant on the COPD – Medicare Access fund (forecast average about $1,500) or up to $4,500 on the Asthma fund, for prescription copays or a Medicare Part B premium. Household income up to 500% of the federal poverty level on HealthWell\'s own table.',
      eligibility: [
        'Insurance that pays part of the cost of Spiriva — Medicare qualifies; discount cards do not count as insurance',
        'Household income up to 500% of the federal poverty level, adjusted for household size and cost of living',
        'COPD or asthma diagnosis verified by a physician, nurse practitioner or physician assistant',
        'Treatment in the United States',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellCopdMa, healthWellAsthma, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote:
        'Good Days\' published disease list on August 26, 2026 contained no asthma, COPD or general lung fund. Its nearest respiratory entry, Pulmonary Arterial Hypertension, was closed and is a different diagnosis.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Spiriva.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund and whether it is open.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'No open charitable fund covered Spiriva on August 26, 2026. TotalAssist lists both devices on its COPD and Asthma funds and their health-equity variants; HealthWell lists them on its COPD – Medicare Access and Asthma funds. Every one of those was closed to new applicants. Good Days has no lung fund at all. Being listed is not the same as being open, so set alerts on each fund — TotalAssist has no waitlist or queue, which makes the alert the thing that gets you in. Meanwhile the routes that do not depend on a fund balance are the Boehringer Cares program (call to confirm its terms), Medicare Extra Help, and, for the HandiHaler, the labelled generic capsule.',
  extraHelpNote:
    'Ask the Boehringer Cares program how it treats Extra Help before you apply to both. Some manufacturer programs require Medicare applicants to apply for Extra Help first and show the outcome; we could not confirm whether this one does, because Boehringer Ingelheim\'s pages were unreadable on the day we checked. Applying for Extra Help is free and its limits are higher than most people expect, so it is rarely the wrong first move.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Spiriva on Medicare in August 2026 the order is: the generic (if you use the HandiHaler), then Boehringer Cares, then Extra Help, with fund alerts running in the background.',
      bullets: [
        'HandiHaler user → ask your plan and pharmacy what generic tiotropium bromide capsules cost. No application, no waiting.',
        'On Medicare with limited income → call Boehringer Cares on 1-800-556-8317 and ask for the current application and income guidelines.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'COPD or asthma diagnosis → set alerts on the TotalAssist and HealthWell funds (all closed when checked).',
        'Commercial insurance instead of Medicare → the Spiriva savings card, which Medicare enrollees cannot use.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Two different kinds of uncertainty apply here, and they are worth keeping apart. The charity funds were verifiably closed. The Boehringer Ingelheim programs are unverified — not closed, not confirmed open.',
      bullets: [
        'Boehringer Cares: the phone line is the reliable check while the website blocks automated access. Ask whether Spiriva is still on the list and what the income limit is.',
        'TotalAssist: the COPD and Asthma fund pages show "Open" or "Closed" and the current award amounts.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program applies its own rules and its own income table. Do not carry a figure from one program to another — they are built on different poverty-guideline tables.',
      bullets: [
        'Boehringer Cares: prescribed a listed Boehringer Ingelheim medicine; household income within a limit the program does not publish; Medicare Part D patients may be eligible according to an April 2026 directory entry, but confirm this by phone.',
        'TotalAssist (when open): government insurance covering Spiriva; income at or below 500% FPL adjusted for your regional cost-of-living index; a COPD or asthma diagnosis in treatment.',
        'HealthWell (when open): insurance that pays part of the cost — Medicare qualifies; income up to 500% FPL on HealthWell\'s table; diagnosis verified by your provider.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready before you call or start an application:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Which device you are prescribed — HandiHaler or Respimat — and the strength. It changes both the generic question and which fund matches.',
        'Your COPD or asthma diagnosis and its date; TotalAssist needs the exact date if it was within the past 6 months.',
        'Household size and income, with proof: a federal tax return is what Boehringer Cares is reported to ask for.',
        'Your prescriber\'s name, office address, phone and NPI — the manufacturer application needs the prescriber\'s licence details.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Boehringer Cares: you and your prescriber complete the application together and return it to the foundation. Request the current form by phone.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861; Patient Advocate Foundation verifies the diagnosis with your provider.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Boehringer Cares: ask about the decision timeline when you call — we could not confirm it from an official source, so we are not publishing a number.',
        'TotalAssist (when open): an immediate online decision; proof of income is due within 30 days of approval.',
        'HealthWell (when open): approval creates a 12-month grant cycle with a pharmacy card.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'A closed fund is a timing problem, and an unverified program is a phone call — neither is the end of the list:',
      bullets: [
        'If you use the HandiHaler, ask your prescriber about generic tiotropium capsules; the generic is on the same charity fund lists as the brand.',
        'Sign up for TotalAssist and HealthWell alerts so you hear when a COPD or asthma fund reopens.',
        'Apply for Extra Help even if you assume you earn too much — the limits are higher than most people expect and applying is free.',
        'Ask your doctor about a formulary exception, or whether another maintenance inhaler on your plan\'s preferred tier suits you.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Which Spiriva device you use — HandiHaler or Respimat', note: 'the HandiHaler has a labelled generic; the Respimat does not' },
    { item: 'A federal tax return or other income documentation', note: 'reported as the financial documentation Boehringer Cares asks for' },
    { item: "Your prescriber's NPI", note: 'the manufacturer application asks for the prescriber licence details' },
  ],
  ifUnavailable: [
    {
      text: 'If you use the Spiriva HandiHaler, ask your prescriber and pharmacy about generic tiotropium bromide capsules — a labelled equivalent that needs no application and no open fund.',
    },
    ...standardAlternatives('Spiriva'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Spiriva?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Spiriva as a maintenance inhaler, usually on a brand tier and sometimes with prior authorization or step therapy. Part D out-of-pocket costs are capped at $2,100 in 2026. If you use the HandiHaler, ask what your plan charges for generic tiotropium capsules. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Spiriva patient assistance program for people on Medicare?',
      answer:
        'Boehringer Ingelheim runs one — the Boehringer Cares Patient Assistance Program, which supplies its medicines free to patients who meet its criteria — and the foundation\'s own therapy list includes Spiriva HandiHaler and Spiriva Respimat. We could not confirm its current income limit or its Medicare rules, because every Boehringer Ingelheim patient page refused automated access on August 26, 2026. An independent directory updated in April 2026 records that Medicare Part D patients may be eligible and that the income limit is not published. Call 1-800-556-8317 and ask them directly rather than relying on a second-hand figure.',
    },
    {
      question: 'Can I use the Spiriva savings card with Medicare?',
      answer:
        'No. Boehringer Ingelheim\'s terms state the offer is not valid for prescriptions "eligible to be reimbursed, in whole or in part, by any governmental program such as Medicaid, Medicare, Medigap, the Retiree Drug Subsidy Program, VA, DOD, TRICARE." That is the standard manufacturer copay-card exclusion, driven by federal anti-kickback rules.',
    },
    {
      question: 'Is there a charitable grant for Spiriva right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists both Spiriva devices on its COPD and Asthma funds and their health-equity variants, and HealthWell lists them on its COPD – Medicare Access and Asthma funds — all closed to new applicants. Good Days has no lung fund. Sign up for alerts; TotalAssist has no waitlist, so the notification is what gets you in.',
    },
    {
      question: 'Is there a generic for Spiriva?',
      answer:
        'For the HandiHaler, yes — DailyMed carries a generic tiotropium bromide capsule alongside Spiriva HandiHaler, and both TotalAssist and HealthWell list generic tiotropium on the same funds as the brand. For the Respimat soft-mist inhaler, no generic spray is labelled. If cost is the problem and you use the Respimat, that difference is worth raising with your prescriber.',
    },
    {
      question: 'Is Spiriva part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price data file has no Spiriva or tiotropium row for initial price applicability year 2026, 2027 or 2028. Your cost is set by your plan\'s tier and cost-sharing.',
    },
    {
      question: 'Why does this page say "check current availability" for the manufacturer programs?',
      answer:
        'Because we could not read Boehringer Ingelheim\'s own pages. Every patient-facing Boehringer Ingelheim address refused automated access on August 26, 2026, and the only savings-card terms we could reach had expired at the end of 2024. Rather than repeat a figure from another manufacturer or an out-of-date document, we recorded what we confirmed, said what we could not, and pointed you at the phone number. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a> for the routes that were verifiable.',
    },
  ],
  relatedMedications: ['symbicort', 'breztri', 'trelegy'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Spiriva' },
  ],
  sources: [
    labelHandihaler,
    labelRespimat,
    dailymedGeneric,
    biPortal,
    phrmaPpa,
    rxAssistBi,
    spirivaCardTerms,
    totalAssistCopd,
    totalAssistAsthma,
    totalAssistCopdHe,
    SRC.totalAssistNotify,
    healthWellCopdMa,
    healthWellAsthma,
    SRC.healthWellFunds,
    goodDays,
    cmsSelectedDrugFile,
    trumpRx,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup). A literal, never the shared
  // CHECKED constant. This record in particular should be re-verified as soon
  // as Boehringer Ingelheim's pages become readable — two of its programs are
  // `verify` only because of that access failure.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Spiriva Assistance',
    status: 'coming-soon',
    description:
      'What to ask Boehringer Cares on the phone, why the savings card excludes Medicare, and how the HandiHaler generic changes the arithmetic.',
  },
  description_meta:
    'How to lower the cost of Spiriva (tiotropium) on Medicare: the Boehringer Cares patient assistance program, why the savings card excludes Medicare, the HandiHaler generic, COPD and asthma fund status, and Extra Help — verified August 2026.',
};

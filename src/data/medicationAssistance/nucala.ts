// ---------------------------------------------------------------------------
// Nucala (mepolizumab) — GSK. Independently researched 2026-08-26. Batch 8 — a
// NEW slug.
//
// Nucala is the medication that proved GSK does NOT run one Medicare rule across
// its portfolio, and that finding is what this page is built around.
//
// GSK's patient assistance screener assigns every eligible product a CATEGORY,
// and the category decides which Medicare page you are routed to. Nucala is
// "specialty"; the Ellipta inhalers are "general". The two routes differ in ways
// that change who qualifies:
//
//                              Nucala (specialty)        Ellipta inhalers (general)
//   $600 prescription spend    NOT required              REQUIRED
//   Income limit, 1 person     $63,840                   $47,880
//   Extra Help enrollees       EXCLUDED                  not excluded
//   Territories               US, PR and USVI            US and PR
//   Program phone              1-844-225-5894            1-866-728-4368
//
// A Medicare beneficiary on Extra Help can get Anoro through GSK and cannot get
// Nucala. A beneficiary who has spent nothing on prescriptions this year can get
// Nucala and cannot get Anoro. That is a genuine, per-medication rule and it is
// the single most useful thing on this page.
//
// Nucala is also the only respiratory medication in this batch with a GSK COPAY
// program (the Ellipta inhalers have coupons instead) — commercial-only, as all
// copay programs are.
//
// Research gap carried honestly: GSK's screener routes specialty products with
// Medicare to /product-medicare/, which returns HTTP 404. The working page is the
// product-specific slug /nucala-medicare/, which is what is cited here. Recorded
// because a reader following the screener will hit that dead end too.
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
  title: 'Nucala prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fefb887c-e4ac-431e-8893-e9d1a5a63fea',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'NUCALA (mepolizumab) for injection, powder, for solution and NUCALA (mepolizumab) injection, solution; GlaxoSmithKline LLC',
};
const dailymedMepo = {
  title: 'DailyMed label index — mepolizumab',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=mepolizumab',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'a single labelled mepolizumab product — GSK\'s NUCALA. No generic and no biosimilar is labelled',
};
const gskPafProducts = {
  title: 'GSK Patient Assistance Program — prescription medicine (list of eligible products)',
  url: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports:
    'the "List of eligible products" accordion naming NUCALA among 20 GSK medicines; and the screener product array assigning NUCALA the category "specialty" while the Ellipta inhalers are "general". NOTE: the screener\'s generic specialty route /product-medicare/ returned HTTP 404 on the checked date; the working page is the product-specific slug cited below',
};
const gskPafNucalaMedicare = {
  title: 'Medicare eligibility and enrollment for NUCALA',
  url: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/nucala-medicare/',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports:
    'the Nucala Medicare route: live in the US, Puerto Rico or US Virgin Islands; "Have a Medicare prescription drug plan, but cannot afford your medicine"; cannot be enrolled in Medicare Extra Help; no Medicaid, VA, DOD or TRICARE; NO prescription-spending requirement; maximum annual gross income $63,840 for one person, $86,560 for two, $109,280 for three, $132,000 for four, adding $22,720 per additional person; both patient and provider must sign; mail to GSK Patient Assistance Program, 2250 Perimeter Drive STE 300, Morrisville NC 27560; phone 1-844-225-5894',
};
const gskPafGeneralMedicare = {
  title: 'GSK Patient Assistance Program — Medicare eligibility (general medicines)',
  url: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/medicare/',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports:
    'the DIFFERENT Medicare route applied to GSK\'s "general" medicines — "Have paid a total of $600 for prescriptions in the current calendar year" and a maximum annual gross income of $47,880 for one person. Cited here to evidence that GSK\'s Medicare rules differ per medication',
};
const gskCopay = {
  title: 'GSK copay assistance — participating products',
  url: 'https://gskforyou.com/programs/copay-assistance/',
  publisher: 'GSK',
  checked: CHECKED,
  supports:
    'the complete copay-program list — Benlysta, Blenrep, Exdensur, Jemperli, NUCALA, Ojjaara and Zejula; eligibility requires that "You\'re not eligible for, or enrolled in, a government-funded program"; the Nucala enrolment link nucalacopayprogram.com/patient-overview',
};
const nucalaCopay = {
  title: 'NUCALA Copay Program enrollment',
  url: 'https://nucalacopayprogram.com/patient-overview',
  publisher: 'GSK',
  checked: CHECKED,
  supports: 'the commercial copay program for Nucala and its enrolment route',
};
const gskDirect = {
  title: 'GSK Direct to You — cash-pay product list and prices',
  url: 'https://gskforyou.com/programs/direct-to-you/',
  publisher: 'GSK (dispensed by Alto Pharmacy)',
  checked: CHECKED,
  supports:
    'the products offered — Advair Diskus, Advair HFA, Anoro Ellipta, Arnuity Ellipta, Incruse Ellipta, Malarone, Relenza and Ventolin HFA. Nucala is not offered',
};
const totalAssistAsthma = {
  title: 'TotalAssist — Asthma fund',
  url: 'https://totalassist.org/funds/asthma/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Nucala (Mepolizumab)" on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Nucala (Mepolizumab)" also on the COPD approved-medication list; $1,200 guaranteed / $3,500 maximum award',
};
const totalAssistHealthEquity = {
  title: 'TotalAssist — Asthma health equity and COPD health equity funds',
  url: 'https://totalassist.org/funds/asthma-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'both health-equity funds Closed, each $1,200 guaranteed / $3,500 maximum, each listing Nucala; the health-equity funds additionally require a home zip code in a designated social-vulnerability county',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — "Asthma" and "Chronic Obstructive Pulmonary Disease - Medicare Access" both CLOSED; no eosinophilic asthma, EGPA or hypereosinophilic syndrome fund of any kind',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no asthma, COPD or eosinophilic disease program',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Nucala or mepolizumab row for initial price applicability year 2026, 2027 or 2028',
};

export const NUCALA: MedicationAssistanceRecord = {
  slug: 'nucala',
  brandName: 'Nucala',
  genericName: 'mepolizumab',
  manufacturer: 'GSK (GlaxoSmithKline)',
  // `respiratory`. Nucala is listed on both the asthma and COPD charitable
  // funds, and the single condition key matches it correctly to both. No
  // additional key is warranted: an eosinophil-specific key would create a
  // browse view holding one medication and would not change which funds match.
  conditions: ['respiratory'],
  // 'biologic' — an injected monoclonal antibody targeting one part of the
  // immune system, which is exactly what the existing key describes. Nucala is
  // not an inhaler and must not carry any of the inhaler classes.
  drugClass: ['biologic'],
  description:
    'Nucala is an injected biologic — a monoclonal antibody given every four weeks — used as an add-on treatment when inhalers alone are not controlling severe eosinophilic asthma and certain related conditions. Because it is a biologic rather than an inhaler, it sits on a Part D specialty tier and follows GSK\'s specialty assistance rules, which are materially different from the rules for GSK\'s inhalers.',
  usedFor: [
    'Add-on maintenance treatment of severe asthma with an eosinophilic phenotype',
    'Add-on maintenance treatment of chronic obstructive pulmonary disease (COPD) in patients with an eosinophilic phenotype',
    'Other eosinophil-driven conditions for which GSK holds approval — confirm the exact indication on your own prescription with your prescriber',
  ],
  whyCostly:
    'Nucala is a brand-only biologic with no generic and no biosimilar — DailyMed labels exactly one mepolizumab product. Part D plans place it on a specialty tier, where you usually pay a percentage of the price rather than a flat copay, and almost always behind prior authorization. Coinsurance on a specialty-tier biologic tends to reach the annual out-of-pocket cap in the first months of the year rather than spreading evenly across it.',
  medicareContext:
    'Nucala is covered under Medicare Part D or a Medicare Advantage drug plan when you inject it yourself at home, generally on a specialty tier with prior authorization. If it is administered in a clinic, the billing route can differ, so ask your prescriber\'s office which benefit your doses will run through before you plan around a copay figure. Nucala is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Nucala or mepolizumab row for 2026, 2027 or 2028. Part D out-of-pocket costs are capped at $2,100 in 2026, and the Medicare Prescription Payment Plan can spread what you owe across the year — which for a specialty-tier biologic is often the difference between an affordable January and an impossible one.',
  quickAnswer: {
    verdict:
      'Yes — and Nucala\'s GSK rules are genuinely different from the rules for GSK\'s inhalers, which is the thing to get right before applying. There is no prescription-spending threshold and the income limit is higher, but anyone enrolled in Medicare Extra Help is excluded. Every applicable charitable fund was closed.',
    points: [
      'GSK Patient Assistance Program (Nucala route): no $600 spending threshold, income up to $63,840 for one person — but you CANNOT be enrolled in Medicare Extra Help, and no Medicaid, VA, DOD or TRICARE. Phone 1-844-225-5894.',
      'This differs from GSK\'s inhalers on purpose. Anoro, Breo and Incruse require $600 already spent and cap income at $47,880, but do not exclude Extra Help enrollees.',
      'NUCALA Copay Program: commercial insurance only — GSK requires that "You\'re not eligible for, or enrolled in, a government-funded program".',
      'No generic and no biosimilar: DailyMed labels exactly one mepolizumab product.',
      'Charitable grants: TotalAssist lists Nucala on its Asthma and COPD funds and the health-equity version of each — all four closed, $1,200 guaranteed / $3,500 maximum. HealthWell\'s Asthma and COPD funds were closed too. Good Days has no applicable fund.',
      'Not a Medicare-negotiated drug for 2026, 2027 or 2028.',
    ],
  },
  programs: [
    {
      id: 'gsk-paf-nucala',
      kind: 'manufacturer-pap',
      name: 'GSK Patient Assistance Program — Nucala',
      operator: 'GSK Patient Access Programs Foundation (an independent 501(c)(3) charitable foundation)',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. Nucala appears on the program\'s published "List of eligible products" and has its own Medicare eligibility page, separate from the one GSK applies to its inhalers.',
      medicare: 'conditional',
      medicareNote:
        'Medicare beneficiaries may apply, and the terms are more generous than GSK\'s inhaler route in two ways and stricter in one. More generous: there is NO requirement to have spent $600 on prescriptions this calendar year, and the income ceiling is $63,840 for one person rather than $47,880. Stricter, and this is the disqualifier people hit: you cannot be enrolled in Medicare Extra Help, and you cannot have Medicaid, VA, DOD or TRICARE coverage. If you already have Extra Help, this program is closed to you — but Extra Help itself is usually the better deal for a specialty-tier drug, so that is not necessarily bad news.',
      summary:
        'A genuine free-medicine program for Nucala, run by GSK\'s independent charitable foundation, with a Medicare pathway written specifically for this medication rather than borrowed from GSK\'s inhalers.',
      covers: 'Nucala at no cost to approved patients, supplied through the program.',
      eligibility: [
        'Live in the United States, Puerto Rico or the US Virgin Islands',
        'Have a Medicare prescription drug plan, but cannot afford your medicine',
        'NOT enrolled in Medicare Extra Help (the Part D Low-Income Subsidy)',
        'No coverage through Medicaid, the VA, the Department of Defense or TRICARE',
        'Maximum annual gross income (48 states and DC): $63,840 for one person, $86,560 for two, $109,280 for three, $132,000 for four, adding $22,720 for each additional person',
        'Higher limits apply in Alaska ($79,800 for one person) and Hawaii ($73,440); Puerto Rico limits are lower ($48,000)',
        'No prescription-spending threshold — unlike GSK\'s route for its inhalers',
      ],
      requirements: [
        'Proof of household income',
        'Your Medicare prescription drug plan details',
        'Confirmation that you are not enrolled in Extra Help, Medicaid, VA, DOD or TRICARE coverage',
        'Your prescriber\'s signature — both patient and provider must sign and date the enrollment form',
      ],
      howToApply:
        'Complete and print the enrollment form (available in English and Spanish) from the Nucala Medicare eligibility page. Both you and your provider must sign and date it. Return it to GSK Patient Assistance Program, 2250 Perimeter Drive, STE 300, Morrisville, NC 27560. Call 1-844-225-5894 with questions.',
      applyUrl: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/nucala-medicare/',
      applyLabel: 'Nucala Medicare eligibility and enrollment',
      phone: '1-844-225-5894',
      sources: [gskPafNucalaMedicare, gskPafProducts, gskPafGeneralMedicare],
    },
    {
      id: 'nucala-copay',
      kind: 'manufacturer-savings',
      name: 'NUCALA Copay Program',
      operator: 'GSK',
      status: 'open',
      statusNote:
        'Active for commercially insured patients on August 26, 2026. Nucala is one of only seven GSK medicines with a copay program — the Ellipta inhalers have dollars-off coupons instead.',
      medicare: 'excluded',
      medicareNote:
        'GSK\'s condition is that "You\'re not eligible for, or enrolled in, a government-funded program", which excludes Medicare Part B, Medicare Part D, Medicare Advantage and Medicaid. This is the standard federal anti-kickback position on manufacturer copay support. GSK directs people with Medicare to the patient assistance foundation instead, which for Nucala is the correct route.',
      summary:
        'A commercial copay offer for people with private or employer insurance. Recorded here mainly so Medicare readers can rule it out quickly and move to the assistance program, and so anyone moving from commercial insurance onto Medicare knows the support changes at that moment.',
      covers: 'Part of the commercial copay or coinsurance for Nucala. Not applicable to Medicare cost-sharing.',
      eligibility: [
        'Commercial (private or employer-sponsored) insurance that covers Nucala',
        'Not eligible for or enrolled in a government-funded program, including Medicare and Medicaid',
      ],
      howToApply:
        'Commercially insured patients enrol through the Nucala copay program site. Medicare beneficiaries should apply to the GSK Patient Assistance Program above instead.',
      applyUrl: 'https://nucalacopayprogram.com/patient-overview',
      applyLabel: 'NUCALA Copay Program',
      sources: [gskCopay, nucalaCopay, SRC.oigCoupons],
    },
    {
      id: 'gsk-direct',
      kind: 'manufacturer-direct',
      name: 'GSK Direct to You — Nucala not offered',
      operator: 'GSK (dispensed by Alto Pharmacy)',
      status: 'not-found',
      statusNote:
        'On August 26, 2026 GSK Direct to You offered Advair Diskus, Advair HFA, Anoro Ellipta, Arnuity Ellipta, Incruse Ellipta, Malarone, Relenza and Ventolin HFA at published cash prices. Nucala was not on the list, and no published cash price for it exists.',
      medicare: 'unknown',
      medicareNote: 'Not applicable — Nucala is not part of the program, so it states no Medicare rule.',
      summary:
        'An honest negative. GSK does publish cash prices for several of its inhalers, but not for its biologics — so unlike Anoro or Incruse, there is no cash benchmark to hold your Part D coinsurance up against here.',
      eligibility: [],
      howToApply: 'Not applicable. If GSK adds Nucala it would appear on the Direct to You product list cited here.',
      applyUrl: 'https://gskforyou.com/programs/direct-to-you/',
      applyLabel: 'GSK Direct to You',
      sources: [gskDirect],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Asthma and COPD funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Asthma · Chronic obstructive pulmonary disease (COPD) · and the health-equity version of each',
      status: 'closed',
      statusNote:
        'All four applicable funds were closed to new applicants on August 26, 2026, each with a $1,200 guaranteed and $3,500 maximum award. TotalAssist has no waitlist, so the notification sign-up is what gets you in.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open, and unlike GSK\'s program these funds do not exclude Extra Help enrollees.',
      summary:
        '"Nucala (Mepolizumab)" is named on both the Asthma and the COPD approved-medication lists, reflecting its eosinophilic indications in each. Four funds to watch, all closed when we checked. Note the award ceiling: $3,500 is meaningful against an inhaler copay and considerably less so against specialty-tier coinsurance on a biologic.',
      covers:
        'When open: $1,200 guaranteed award and up to $3,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed asthma or COPD diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
        'The health-equity funds additionally require a home zip code in a designated social-vulnerability county',
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' +
        TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistAsthma, totalAssistCopd, totalAssistHealthEquity, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Asthma and COPD funds',
      operator: 'HealthWell Foundation',
      fund: 'Asthma · Chronic Obstructive Pulmonary Disease – Medicare Access',
      status: 'closed',
      statusNote:
        'Both applicable funds were closed on August 26, 2026. HealthWell runs no eosinophilic asthma, EGPA or hypereosinophilic syndrome fund of any kind, so there is no narrower fund to fall back on.',
      medicare: 'eligible',
      medicareNote:
        'HealthWell accepts Medicare beneficiaries, and its COPD fund is a "Medicare Access" fund built specifically for people with Medicare. It does not exclude Extra Help enrollees, which makes it a useful complement to the GSK program rather than a duplicate of it.',
      summary:
        'HealthWell runs funds covering both of Nucala\'s main indications and both were closed. Its real-time alerts are the practical move, particularly for a specialty-tier drug where a grant matters more than usual.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for the covered diagnosis.',
      eligibility: ['A confirmed asthma or COPD diagnosis, verified by your prescriber', ...HEALTHWELL_REQUIREMENTS],
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
      statusNote:
        'Good Days\' published disease list on August 26, 2026 contained 57 programs and none was asthma, COPD or any eosinophilic condition.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Nucala.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'Nucala appears on four TotalAssist funds — Asthma, COPD and the health-equity version of each — and all four were closed on August 26, 2026, each paying $1,200 guaranteed up to $3,500. HealthWell\'s Asthma and COPD – Medicare Access funds were closed as well, and Good Days runs no applicable fund. Two things are worth saying plainly about this picture. First, there is no narrower eosinophilic fund to fall back on: no foundation on this list runs one. Second, the award sizes are calibrated to inhaler costs rather than biologic costs — $3,500 against specialty-tier coinsurance is help, not a solution. So set alerts on TotalAssist and HealthWell, but treat the GSK patient assistance program, Extra Help and the Medicare Prescription Payment Plan as the load-bearing routes for this medication.',
  extraHelpNote:
    'Nucala is the one medication in this batch where Extra Help and the manufacturer program are mutually exclusive, so the choice is real. GSK\'s Nucala route excludes anyone enrolled in Extra Help; GSK\'s route for its inhalers does not. If you qualify for Extra Help, it is usually the stronger option for a specialty-tier biologic: it lowers cost-sharing on every covered drug you take rather than one, it does not close when funding runs out, and with full Extra Help a covered brand-name drug costs about $12.65 in 2026. Apply for Extra Help first and treat the GSK program as the route for people who do not qualify for it — that is the sequence GSK\'s own rules imply.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Nucala on Medicare in August 2026, the first question is whether you have Extra Help — because it decides which door is open to you:',
      bullets: [
        'You have Extra Help → GSK\'s Nucala program is closed to you. Your routes are Extra Help itself, the charitable funds, and the Medicare Prescription Payment Plan.',
        'You do NOT have Extra Help and income is at or below $63,840 for one person → apply to the GSK Patient Assistance Program for Nucala.',
        'You have not applied for Extra Help → apply. It is usually the stronger option for a specialty-tier biologic.',
        'Asthma or COPD diagnosis → set alerts on the four TotalAssist funds and the two HealthWell funds (all closed when checked).',
        'Commercial insurance instead of Medicare → the NUCALA Copay Program, which Medicare enrollees cannot use.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The manufacturer program was open; every charitable fund was closed.',
      bullets: [
        'GSK Patient Assistance: use the Nucala-specific Medicare page cited here. Be aware that GSK\'s own screener routes specialty products to a page that returned a 404 error when we checked — the product-specific page is the one that works.',
        'TotalAssist: the Asthma and COPD fund pages show "Open" or "Closed" and the current award amounts.',
        'HealthWell: the disease-funds list shows the Asthma and COPD – Medicare Access funds and their status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Read Nucala\'s rules rather than the rules for GSK\'s inhalers — they are genuinely different:',
      bullets: [
        'GSK Patient Assistance (Nucala): a Medicare drug plan; income at or below $63,840 for one person or $86,560 for two in the 48 states and DC; NOT enrolled in Extra Help; no Medicaid, VA, DOD or TRICARE. No prescription-spending threshold.',
        'For contrast, GSK\'s inhalers require $600 already spent this calendar year and cap income at $47,880 for one person — but do not exclude Extra Help.',
        'TotalAssist (when open): government insurance covering Nucala; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed asthma or COPD diagnosis in treatment.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified diagnosis, and treatment in the United States.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'A specialty biologic application asks for more than an inhaler application does:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Confirmation of whether you are enrolled in Extra Help — this decides GSK eligibility outright.',
        'Household size and annual gross income, plus proof.',
        'Your diagnosis and its date, and whether Nucala was prescribed for asthma or for COPD — the charitable funds are separate.',
        'Your prescriber\'s name, office address, phone and signature.',
        'Whether your doses are self-injected at home or given in a clinic, since that can change which Medicare benefit pays.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'GSK Patient Assistance: both you and your provider must sign and date the enrollment form. Print it from the Nucala Medicare page, or call 1-844-225-5894 to have one sent.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'GSK Patient Assistance: mail the signed form to GSK Patient Assistance Program, 2250 Perimeter Drive, STE 300, Morrisville, NC 27560. The foundation reviews income and insurance documentation.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'HealthWell (when open): a decision once your provider returns the diagnosis verification.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'For a specialty-tier biologic with no generic, the Medicare-side tools matter more than usual:',
      bullets: [
        'Enrol in the Medicare Prescription Payment Plan. It does not lower the total, but it stops a specialty-tier bill landing all at once in January.',
        'Apply for Extra Help even if you assume you earn too much — the limits are higher than most people expect, and for this drug it outperforms the manufacturer program.',
        'Ask your prescriber\'s office to check whether your doses could be given in a setting billed differently, and what that would do to your share.',
        'Ask about a formulary exception or a tier exception if your plan\'s coinsurance is the problem.',
        'Do not wait for a generic — DailyMed labels exactly one mepolizumab product, and no biosimilar exists.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'Confirmation of whether you are enrolled in Medicare Extra Help',
      note: 'GSK\'s Nucala program excludes Extra Help enrollees — this single fact decides eligibility',
    },
    { item: 'Whether Nucala was prescribed for asthma or for COPD', note: 'the TotalAssist and HealthWell funds are separate for each' },
    { item: 'Whether you inject at home or receive doses in a clinic', note: 'this can change which Medicare benefit pays' },
  ],
  ifUnavailable: [
    {
      text: 'Enrol in the Medicare Prescription Payment Plan. For a specialty-tier biologic this is often the single most useful step — it spreads what you owe across the year instead of front-loading it.',
      href: 'https://www.medicare.gov/prescription-payment-plan',
      label: 'Medicare.gov',
    },
    {
      text: 'There is no generic or biosimilar to switch to — DailyMed labels exactly one mepolizumab product — so a formulary or tier exception through your plan is the alternative worth asking your prescriber about.',
    },
    ...standardAlternatives('Nucala'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Nucala?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Nucala when you inject it yourself at home, usually on a specialty tier with prior authorization. If your doses are given in a clinic instead, the billing route can differ, so ask your prescriber\'s office which benefit applies to you. Part D out-of-pocket costs are capped at $2,100 in 2026, and the <a href="https://www.medicare.gov/prescription-payment-plan">Medicare Prescription Payment Plan</a> can spread that across the year.',
    },
    {
      question: 'Why are GSK\'s rules for Nucala different from its rules for Anoro or Breo?',
      answer:
        'Because GSK sorts its medicines into categories and writes a separate Medicare rule for each. Nucala is a "specialty" product: no prescription-spending threshold, an income limit of $63,840 for one person — but anyone enrolled in Medicare Extra Help is excluded, along with Medicaid, VA, DOD and TRICARE. The Ellipta inhalers are "general" products: you must have paid $600 for prescriptions this calendar year and income is capped at $47,880 for one person, but Extra Help is not a disqualifier. Same foundation, genuinely different rules — so read the page for your own medicine.',
    },
    {
      question: 'I have Extra Help. Can I get Nucala through GSK?',
      answer:
        'No. GSK\'s Nucala patient assistance route requires that you are not enrolled in Medicare Extra Help. That sounds like bad news but usually is not: Extra Help lowers cost-sharing on every covered drug you take rather than one, it cannot close when funding runs out, and with full Extra Help a covered brand-name drug costs about $12.65 in 2026 — which for a specialty-tier biologic is a better outcome than most manufacturer programs deliver. Keep the Extra Help and use <a href="/blog/extra-help-explained.html">that route</a> instead.',
    },
    {
      question: 'Is there a generic or biosimilar for Nucala?',
      answer:
        'No. DailyMed lists exactly one labelled mepolizumab product — GSK\'s Nucala. There is no generic and no biosimilar, so there is no lower-tier version to ask your prescriber about. That is part of why the specialty-tier coinsurance on this medication is difficult, and why the Medicare Prescription Payment Plan and Extra Help carry so much of the weight here.',
    },
    {
      question: 'Is there a charitable grant for Nucala right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Nucala on its Asthma fund, its COPD fund and the health-equity version of each — all four closed, each paying $1,200 guaranteed up to $3,500. HealthWell\'s Asthma and COPD – Medicare Access funds were closed too, and Good Days has no applicable fund. No foundation on this list runs a fund specific to eosinophilic disease. Set alerts, but note that a $3,500 ceiling goes further against an inhaler copay than against specialty-tier coinsurance.',
    },
    {
      question: 'Is Nucala part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Nucala or mepolizumab row for initial price applicability year 2026, 2027 or 2028. Two other GSK respiratory products are on those lists — Breo Ellipta and Trelegy Ellipta for 2027, and Anoro Ellipta for 2028 — but Nucala is not among them. Your cost is set by your plan\'s specialty-tier coinsurance. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['tezspire', 'xolair', 'dupixent', 'breo'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Nucala' },
  ],
  sources: [
    label,
    dailymedMepo,
    gskPafProducts,
    gskPafNucalaMedicare,
    gskPafGeneralMedicare,
    gskCopay,
    nucalaCopay,
    gskDirect,
    totalAssistAsthma,
    totalAssistCopd,
    totalAssistHealthEquity,
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
  // Per-record verification date. Re-verify the Nucala-specific Medicare page
  // first — the Extra Help exclusion and the absence of a spending threshold are
  // what make this record different from the GSK inhaler records, and both live
  // on a page GSK maintains separately from the general one.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Nucala Assistance',
    status: 'coming-soon',
    description:
      'Why GSK\'s Nucala rules differ from its inhaler rules, why Extra Help and the GSK program cannot be combined here, and how to handle specialty-tier coinsurance on a biologic with no biosimilar.',
  },
  description_meta:
    'How to lower the cost of Nucala (mepolizumab) on Medicare: the GSK patient assistance route with no spending threshold but an Extra Help exclusion, why its rules differ from GSK\'s inhalers, asthma and COPD fund status, and specialty-tier options — verified August 2026.',
};

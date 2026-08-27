// ---------------------------------------------------------------------------
// Breo Ellipta (fluticasone furoate / vilanterol) — GSK. Independently
// researched 2026-08-26. Batch 8 — a NEW slug.
//
// This record exists because Batch 7's decision to drop Breo Ellipta was made on
// an incomplete picture, and the research that settles it is decisive rather
// than marginal. Batch 7 dropped Breo on criterion 5 (material differentiation),
// reasoning that it was "the same GSK program with no published medicine list,
// the same closed COPD and asthma funds" as Trelegy. Two of those three premises
// turned out to be wrong:
//
//  1. GSK DOES publish a covered-medicine list. gskpaf.org carries a "List of
//     eligible products" accordion naming 20 medicines, and its screener embeds
//     a per-product CATEGORY that decides which Medicare page a patient is routed
//     to. Breo is a "general" product, which puts it behind a $600-a-year
//     prescription-spending threshold that Nucala — a "specialty" product from the
//     same foundation — does not have. That is a per-medication rule the project
//     previously recorded as unavailable.
//  2. Breo Ellipta is a MEDICARE-NEGOTIATED DRUG. CMS selected it for initial
//     price applicability year 2027 and set a maximum fair price of $67.00 per
//     30-day equivalent supply, effective January 1, 2027. Trelegy is also on the
//     IPAY 2027 list, but the two carry different negotiated prices, and a
//     negotiated price is exactly the kind of Medicare-specific fact criterion 6
//     is for.
//
// Third finding, smaller but useful: an authorized generic exists. DailyMed
// labels "FLUTICASONE FUROATE AND VILANTEROL POWDER" from Prasco Laboratories
// alongside GSK's brand — which is not true of Trelegy.
//
// Honest negatives carried here: Breo is NOT on GSK's copay-assistance list (that
// list is Benlysta, Blenrep, Exdensur, Jemperli, Nucala, Ojjaara, Zejula), and it
// is NOT offered through GSK Direct to You, which does supply Anoro and Incruse
// at published cash prices. Both are recorded as findings rather than omissions.
//
// Built LINK-DARK under D8: this record contains no does-medicare-cover-* link.
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
  title: 'Breo Ellipta prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=96428df1-ea05-431a-98d3-1ec2c4b63878',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'BREO ELLIPTA (fluticasone furoate and vilanterol inhalation powder), for oral inhalation use; maintenance treatment of COPD and maintenance treatment of asthma in patients aged 5 years and older; not for relief of acute bronchospasm; 50/25, 100/25 and 200/25 mcg per actuation; GlaxoSmithKline LLC (rev. 11/7/2024)',
};
const dailymedFfVi = {
  title: 'DailyMed label index — fluticasone furoate and vilanterol',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=fluticasone+furoate+and+vilanterol',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'three labelled products across two labelers — GSK\'s BREO ELLIPTA, GSK\'s TRELEGY ELLIPTA, and an authorized generic "FLUTICASONE FUROATE AND VILANTEROL POWDER" from Prasco Laboratories',
};
const gskPafProducts = {
  title: 'GSK Patient Assistance Program — prescription medicine (list of eligible products)',
  url: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports:
    'the "List of eligible products" accordion naming 20 medicines including ANORO ELLIPTA, BREO ELLIPTA, INCRUSE ELLIPTA, NUCALA and TRELEGY ELLIPTA; and the screener product array assigning BREO ELLIPTA the category "general"',
};
const gskPafMedicare = {
  title: 'GSK Patient Assistance Program — Medicare eligibility and enrollment',
  url: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/medicare/',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports:
    'the Medicare route for "general" category medicines: a Medicare prescription drug plan; residence in the US or Puerto Rico; "Have paid a total of $600 for prescriptions in the current calendar year"; and the maximum annual gross income table — $47,880 for one person and $64,920 for two in the 48 states and DC',
};
const gskCopay = {
  title: 'GSK copay assistance — participating products',
  url: 'https://gskforyou.com/programs/copay-assistance/',
  publisher: 'GSK',
  checked: CHECKED,
  supports:
    'the complete copay-program list — Benlysta, Blenrep, Exdensur, Jemperli, Nucala, Ojjaara and Zejula. Breo Ellipta is not on it. Eligibility requires that "You\'re not eligible for, or enrolled in, a government-funded program"',
};
const gskCoupons = {
  title: 'GSK coupons and free trial offers',
  url: 'https://gskforyou.com/programs/gsk-coupons-free-trials/',
  publisher: 'GSK',
  checked: CHECKED,
  supports:
    'Breo Ellipta listed among the medicines with a dollars-off coupon; "May not be used by government beneficiaries, including but not limited to those enrolled in Medicare or Medicaid"; "We are not currently offering any free trial offers"; no coupon dollar value is published',
};
const gskDirect = {
  title: 'GSK Direct to You — cash-pay product list and prices',
  url: 'https://gskforyou.com/programs/direct-to-you/',
  publisher: 'GSK (dispensed by Alto Pharmacy)',
  checked: CHECKED,
  supports:
    'the products offered and their prices — Advair Diskus, Advair HFA, Anoro Ellipta $222.94, Arnuity Ellipta, Incruse Ellipta $134.20, Malarone, Relenza and Ventolin HFA, plus a processing and shipping fee of up to $25. Breo Ellipta is not offered. "This Offer is not available to patients who wish to use insurance"',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Breo Ellipta (Fluticasone/Vilanterol)" on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistAsthma = {
  title: 'TotalAssist — Asthma fund',
  url: 'https://totalassist.org/funds/asthma/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Breo Ellipta (Fluticasone/Vilanterol)" on the approved-medication list; $1,200 guaranteed / $3,500 maximum award',
};
const totalAssistHealthEquity = {
  title: 'TotalAssist — COPD health equity and Asthma health equity funds',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'both health-equity funds Closed, each $1,200 guaranteed / $3,500 maximum, each listing Breo Ellipta; the health-equity funds additionally require a home zip code in a designated social-vulnerability county',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — "Asthma" and "Chronic Obstructive Pulmonary Disease - Medicare Access" both CLOSED; the only open respiratory fund is Bronchiectasis, a different diagnosis',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no asthma or COPD program of any kind',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the selected-drug file dated May 26, 2026: BREO ELLIPTA (fluticasone; vilanterol), NDC-9s 00173-0859, 00173-0882, 00173-0916, 66993-0135 and 66993-0136, single MFP per 30-day equivalent supply $67.00, MFP effective date 01/01/2027, IPAY 2027, "Added for IPAY 2027 announcement"',
};
const cmsMfpExplanation = {
  title: 'MFP explanation for Breo Ellipta (initial price applicability year 2027)',
  url: 'https://www.cms.gov/files/zip/file-mfp-explanation-breo-ellipta.zip',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'CMS\'s published explanation of how the Breo Ellipta maximum fair price was reached',
};

export const BREO: MedicationAssistanceRecord = {
  slug: 'breo',
  brandName: 'Breo Ellipta',
  genericName: 'fluticasone furoate / vilanterol',
  manufacturer: 'GSK (GlaxoSmithKline)',
  // `respiratory` only. The label carries both COPD and asthma maintenance
  // indications, and TotalAssist lists Breo on both its COPD and its Asthma
  // funds — so one condition key produces correct fund matching in both
  // directions. No second key is needed or justified.
  conditions: ['respiratory'],
  // ICS + LABA, confirmed against the label: fluticasone furoate is the inhaled
  // corticosteroid, vilanterol the long-acting beta2-agonist. Two ingredients,
  // so it must NOT carry 'triple-inhaler' (reserved for ICS/LAMA/LABA) — the
  // same distinction the Symbicort record drew.
  drugClass: ['ics-laba'],
  description:
    'Breo Ellipta is a once-daily maintenance inhaler that combines an inhaled steroid with a long-acting bronchodilator. It is one of the few inhalers licensed for both COPD and asthma, and from January 1, 2027 it is also one of the small number of medications for which Medicare has negotiated a price directly with the manufacturer.',
  usedFor: [
    'Maintenance treatment of chronic obstructive pulmonary disease (COPD), to improve airflow and reduce flare-ups',
    'Maintenance treatment of asthma in patients aged 5 years and older',
  ],
  whyCostly:
    'Breo Ellipta is a once-daily brand inhaler that most Part D plans place on a brand tier, often behind step therapy that asks you to try a cheaper inhaler first. Two things pull the other way, and both are specific to this medication. Medicare negotiated its price: CMS set a maximum fair price of $67.00 for a 30-day equivalent supply, effective January 1, 2027. And an authorized generic now exists — DailyMed labels fluticasone furoate and vilanterol inhalation powder from Prasco Laboratories alongside GSK\'s brand, which is not true of every inhaler on this site.',
  medicareContext:
    'Breo Ellipta is an inhaler you use yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan. It is one of the 15 drugs CMS selected for the second cycle of Medicare drug price negotiation: the maximum fair price is $67.00 per 30-day equivalent supply and it takes effect on January 1, 2027 for people whose Part D plans cover it. A negotiated price is not a cash price — it changes what plans and enrollees pay, not what a pharmacy charges someone paying out of pocket. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year.',
  quickAnswer: {
    verdict:
      'Yes — GSK runs a patient assistance program that covers Breo Ellipta and has a genuine Medicare pathway, but that pathway has a condition most people do not expect: you must already have paid $600 for prescriptions this calendar year. Both charitable funds that list Breo were closed. And from January 1, 2027 Medicare\'s own negotiated price of $67.00 per 30-day supply applies.',
    points: [
      'GSK Patient Assistance Program: Breo Ellipta is on the published list of eligible products. The Medicare route requires a Medicare drug plan, income at or below $47,880 for one person, and $600 already spent on prescriptions this calendar year.',
      'Medicare negotiated price: $67.00 per 30-day equivalent supply, effective January 1, 2027 (CMS selected-drug file, IPAY 2027).',
      'Authorized generic: Prasco Laboratories labels fluticasone furoate and vilanterol inhalation powder. Ask your prescriber and plan whether it is on your formulary at a lower tier.',
      'No GSK copay program: Breo is not on GSK\'s copay-assistance list, and its dollars-off coupon cannot be used by anyone with Medicare. GSK Direct to You does not offer Breo either.',
      'Charitable grants: TotalAssist\'s COPD and Asthma funds both list Breo Ellipta and both were closed, each with a $1,200 guaranteed and $3,500 maximum award. HealthWell\'s Asthma and COPD funds were closed too, and Good Days has no respiratory fund at all.',
    ],
  },
  programs: [
    {
      id: 'gsk-paf',
      kind: 'manufacturer-pap',
      name: 'GSK Patient Assistance Program',
      operator: 'GSK Patient Access Programs Foundation (an independent 501(c)(3) charitable foundation)',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. Breo Ellipta appears on the program\'s published "List of eligible products", which names 20 GSK medicines.',
      medicare: 'conditional',
      medicareNote:
        'Medicare beneficiaries may apply, but through a separate route with an extra condition. For the "general" category of GSK medicines — which is where Breo Ellipta sits — you must have a Medicare prescription drug plan AND "have paid a total of $600 for prescriptions in the current calendar year". That spending threshold is the single most important thing to know before applying, and it is why an application in January is usually premature and one later in the year often is not. Note that GSK applies a different rule to its specialty medicines: Nucala, from the same foundation, has no $600 requirement but excludes anyone enrolled in Extra Help. Do not carry one rule across to the other.',
      summary:
        'The GSK Patient Access Programs Foundation supplies certain GSK medicines at no cost to people who meet its income and insurance rules. Breo Ellipta is one of them. This is a genuine free-medicine program, not a discount card.',
      covers: 'Breo Ellipta at no cost to approved patients, supplied through the program.',
      eligibility: [
        'Live in the United States or Puerto Rico',
        'Have a Medicare prescription drug plan and meet the program\'s other requirements',
        'Have paid a total of $600 for prescriptions in the current calendar year',
        'Maximum annual gross income (48 states and DC): $47,880 for one person, $64,920 for two, $81,960 for three, $99,000 for four, adding $17,040 for each additional person',
        'Higher income limits apply in Alaska ($59,850 for one person) and Hawaii ($55,080); Puerto Rico limits are lower ($28,800)',
        'Not eligible for Puerto Rico\'s Government Health Plan Mi Salud, or have applied and been denied',
      ],
      requirements: [
        'Proof of income for your household',
        'Your Medicare prescription drug plan details',
        'Records of what you have paid for prescriptions this calendar year, for the $600 threshold',
        'Your prescriber\'s details — GSK\'s enrollment forms are signed by both patient and provider',
      ],
      howToApply:
        'Start at the GSK Patient Assistance Program page and follow the Medicare route for prescription medicines. The enrollment form is completed and signed by both you and your prescriber. Call 1-866-728-4368 with questions; that line also handles refills once you are enrolled.',
      applyUrl: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/medicare/',
      applyLabel: 'GSK Patient Assistance — Medicare eligibility',
      phone: '1-866-728-4368',
      sources: [gskPafProducts, gskPafMedicare],
    },
    {
      id: 'gsk-copay',
      kind: 'manufacturer-savings',
      name: 'GSK copay assistance — Breo Ellipta not covered',
      operator: 'GSK',
      status: 'not-found',
      statusNote:
        'GSK runs copay programs for seven medicines on August 26, 2026 — Benlysta, Blenrep, Exdensur, Jemperli, Nucala, Ojjaara and Zejula. Breo Ellipta is not among them.',
      medicare: 'excluded',
      medicareNote:
        'Academic for Breo, since no copay program exists for it, but worth stating plainly because the two facts are easy to confuse: GSK\'s copay programs require that "You\'re not eligible for, or enrolled in, a government-funded program", so they exclude Medicare across the board. GSK directs people with Medicare to the patient assistance foundation instead — which for Breo is the correct route.',
      summary:
        'An honest negative. Breo Ellipta has a dollars-off coupon rather than a copay program, and a coupon is not usable with Medicare. The GSK route that does work for a Medicare beneficiary is the patient assistance program above.',
      eligibility: [],
      howToApply:
        'Not applicable. If GSK adds Breo Ellipta to its copay programs it would appear on the copay-assistance page cited here.',
      applyUrl: 'https://gskforyou.com/programs/copay-assistance/',
      applyLabel: 'GSK copay assistance',
      sources: [gskCopay, SRC.oigCoupons],
    },
    {
      id: 'gsk-coupon',
      kind: 'manufacturer-savings',
      name: 'Breo Ellipta dollars-off coupon',
      operator: 'GSK',
      status: 'limited',
      statusNote:
        'Listed on GSK\'s coupons page on August 26, 2026 alongside Advair, Anoro, Arnuity, Incruse, Serevent, Trelegy and Ventolin. GSK publishes no dollar value for it — the amount is shown only through the site\'s coupon finder — so no figure is reproduced here. GSK also states it is "not currently offering any free trial offers".',
      medicare: 'excluded',
      medicareNote:
        'GSK\'s terms are explicit: the coupon "may not be used by government beneficiaries, including but not limited to those enrolled in Medicare or Medicaid." This is the standard federal anti-kickback position on manufacturer coupons and it applies regardless of the coupon\'s value.',
      summary:
        'A commercial discount for people with private or employer prescription insurance. If you have Medicare this is not your route, and knowing that saves a trip to the pharmacy counter.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in Medicare, Medicaid or another government prescription program',
      ],
      howToApply:
        'Commercially insured patients can use the coupon finder on GSK\'s coupons page. Medicare beneficiaries should apply to the GSK Patient Assistance Program instead.',
      applyUrl: 'https://gskforyou.com/programs/gsk-coupons-free-trials/',
      applyLabel: 'GSK coupons and offers',
      sources: [gskCoupons, SRC.oigCoupons],
    },
    {
      id: 'gsk-direct',
      kind: 'manufacturer-direct',
      name: 'GSK Direct to You — Breo Ellipta not offered',
      operator: 'GSK (dispensed by Alto Pharmacy)',
      status: 'not-found',
      statusNote:
        'On August 26, 2026 GSK Direct to You offered Advair Diskus, Advair HFA, Anoro Ellipta, Arnuity Ellipta, Incruse Ellipta, Malarone, Relenza and Ventolin HFA at published cash prices. Breo Ellipta was not on the list.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable — Breo is not part of the program, so it states no Medicare rule. For the inhalers GSK does offer this way, the terms say "This Offer is not available to patients who wish to use insurance," which makes it a cash alternative rather than a Part D benefit.',
      summary:
        'An honest negative worth checking, because GSK does sell two of its other COPD inhalers direct at published prices — Anoro Ellipta at $222.94 and Incruse Ellipta at $134.20, plus a processing and shipping fee of up to $25. There is no equivalent cash price for Breo.',
      eligibility: [],
      howToApply:
        'Not applicable. If GSK adds Breo Ellipta it would appear on the Direct to You product list cited here.',
      applyUrl: 'https://gskforyou.com/programs/direct-to-you/',
      applyLabel: 'GSK Direct to You',
      phone: '(800) 874-5881',
      sources: [gskDirect],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — COPD and Asthma funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Chronic obstructive pulmonary disease (COPD) · Asthma · and the health-equity version of each',
      status: 'closed',
      statusNote:
        'All four applicable funds were closed to new applicants on August 26, 2026, each with a $1,200 guaranteed and $3,500 maximum award. TotalAssist has no waitlist, so the notification sign-up is what gets you in when one reopens.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open.',
      summary:
        'Breo Ellipta is unusual in being named on both the COPD and the Asthma approved-medication lists, which reflects its dual indication. That means two funds to watch rather than one — but on the checked date both were closed, as were their health-equity counterparts.',
      covers:
        'When open: $1,200 guaranteed award and up to $3,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed COPD or asthma diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
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
      sources: [totalAssistCopd, totalAssistAsthma, totalAssistHealthEquity, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Asthma and COPD funds',
      operator: 'HealthWell Foundation',
      fund: 'Asthma · Chronic Obstructive Pulmonary Disease – Medicare Access',
      status: 'closed',
      statusNote:
        'Both respiratory funds were closed on August 26, 2026. The only open lung fund on HealthWell\'s published list was Bronchiectasis, which is a different diagnosis and would not apply to a Breo prescription written for COPD or asthma.',
      medicare: 'eligible',
      medicareNote:
        'HealthWell accepts Medicare beneficiaries, and its COPD fund is a "Medicare Access" fund — designed specifically for people with Medicare. That makes it worth an alert even though it was closed when we checked.',
      summary:
        'HealthWell runs funds for both of Breo\'s indications and both were closed. HealthWell says replenished funds reopen as quickly as possible and offers real-time alerts, which is the practical move here.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for the covered diagnosis.',
      eligibility: [
        'A confirmed asthma or COPD diagnosis, verified by your prescriber',
        ...HEALTHWELL_REQUIREMENTS,
      ],
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
        'Good Days\' published disease list on August 26, 2026 contained 57 programs and none of them was asthma or COPD.',
      medicare: 'unknown',
      medicareNote:
        'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that would apply to Breo Ellipta.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'Breo Ellipta is named on more charitable funds than most inhalers on this site, because its label covers both COPD and asthma and the foundations run separate funds for each. TotalAssist lists it on its COPD fund, its Asthma fund and the health-equity version of both — four funds, all closed on August 26, 2026, each paying a $1,200 guaranteed award up to $3,500. HealthWell runs an Asthma fund and a COPD – Medicare Access fund and both were closed as well. Good Days has no respiratory fund at all. Set alerts on TotalAssist and HealthWell, because with six closed funds between them the odds that one reopens are better than average — but do not build your year around it. The routes that do not depend on a fund balance are GSK\'s patient assistance program, the authorized generic, Extra Help, and Medicare\'s negotiated price from January 2027.',
  extraHelpNote:
    'Extra Help interacts with the GSK program in a way worth understanding before you apply to either. GSK\'s Medicare route for Breo does not exclude Extra Help enrollees — the $600 prescription-spending threshold is what governs — so unlike some manufacturer programs there is no penalty for holding both. Apply for Extra Help on its own merits: it lowers the cost of every covered drug you take, not just this one, and with full Extra Help a covered brand-name drug costs about $12.65 in 2026.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Breo Ellipta on Medicare in August 2026 there is a real manufacturer route, which is not true of every inhaler on this site. The order that saves the most time:',
      bullets: [
        'Limited income and you have already spent $600 on prescriptions this year → the GSK Patient Assistance Program.',
        'Limited income and resources → Medicare Extra Help through Social Security, which is worth applying for regardless.',
        'Ask your prescriber and plan about the Prasco authorized generic of fluticasone furoate and vilanterol.',
        'COPD or asthma diagnosis → set alerts on the TotalAssist and HealthWell funds (all closed when checked).',
        'Commercial insurance instead of Medicare → the GSK coupon, which Medicare enrollees cannot use.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'One manufacturer program to check and six charitable funds whose status changes without notice.',
      bullets: [
        'GSK Patient Assistance: the eligible-products list and the Medicare eligibility page are the authoritative sources, and both are cited on this page.',
        'TotalAssist: the COPD and Asthma fund pages each show "Open" or "Closed" and the current award amounts.',
        'HealthWell: the disease-funds list shows the Asthma and COPD – Medicare Access funds and their status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The GSK threshold is the one people trip over, so check it first:',
      bullets: [
        'GSK Patient Assistance: a Medicare drug plan; income at or below $47,880 for one person or $64,920 for two in the 48 states and DC; and $600 already paid for prescriptions this calendar year.',
        'TotalAssist (when open): government insurance covering Breo; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed COPD or asthma diagnosis in treatment.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified diagnosis, and treatment in the United States.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Breo\'s application needs one document most others do not — proof of what you have already spent:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your prescription spending so far this calendar year, for GSK\'s $600 threshold. Your plan\'s Explanation of Benefits statements or your pharmacy\'s year-to-date printout are the usual proof.',
        'Household size and annual gross income, plus proof.',
        'Your Breo Ellipta strength (50/25, 100/25 or 200/25 mcg) and whether it was prescribed for COPD or asthma — the funds are separate, and the answer decides which one you apply to.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'GSK Patient Assistance: both you and your prescriber sign the enrollment form. Call 1-866-728-4368 if you need a form mailed.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861; Patient Advocate Foundation verifies the diagnosis with your provider.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Authorized generic: nothing to apply for — it is a prescribing and formulary question.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'GSK Patient Assistance: the foundation reviews income and insurance documentation; approved medicine is supplied through the program rather than your pharmacy.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'HealthWell (when open): a decision once your provider returns the diagnosis verification.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Breo has more fallbacks than most inhalers, and one of them arrives on a fixed date:',
      bullets: [
        'Ask about the authorized generic — Prasco labels fluticasone furoate and vilanterol inhalation powder, and a generic tier usually costs less than a brand tier.',
        'Mark January 1, 2027: Medicare\'s negotiated maximum fair price of $67.00 per 30-day equivalent supply takes effect for Part D plans.',
        'If the $600 threshold is what is blocking you, note that it is a calendar-year test — it resets, and it is easier to meet later in the year than in January.',
        'Ask your prescriber whether a different maintenance inhaler suits you. This is a clinical decision, not a cost one, so it needs their judgement.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'Proof of prescription spending this calendar year',
      note: 'GSK\'s Medicare route for Breo requires $600 already paid — plan Explanation of Benefits statements or a pharmacy year-to-date printout',
    },
    { item: 'Your Breo Ellipta strength — 50/25, 100/25 or 200/25 mcg', note: 'and whether it was prescribed for COPD or asthma' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber and plan about the authorized generic: DailyMed labels fluticasone furoate and vilanterol inhalation powder from Prasco Laboratories alongside GSK\'s brand.',
    },
    {
      text: 'Medicare\'s negotiated maximum fair price for Breo Ellipta — $67.00 per 30-day equivalent supply — takes effect January 1, 2027 for Part D plans.',
      href: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
      label: 'CMS negotiated prices',
    },
    ...standardAlternatives('Breo Ellipta'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Breo Ellipta?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Breo Ellipta, usually on a brand tier and sometimes behind step therapy. Part D out-of-pocket costs are capped at $2,100 in 2026. From January 1, 2027 a Medicare-negotiated maximum fair price of $67.00 per 30-day equivalent supply applies to Part D plans. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Breo Ellipta patient assistance program for people on Medicare?',
      answer:
        'Yes. Breo Ellipta is on the GSK Patient Assistance Program\'s published list of eligible products, and the program has a Medicare route. The condition people miss is the spending threshold: for GSK\'s "general" category of medicines, which includes Breo, you must have "paid a total of $600 for prescriptions in the current calendar year". You also need a Medicare drug plan and income at or below $47,880 for one person in the 48 states and DC. Both you and your prescriber sign the form.',
    },
    {
      question: 'Why does Nucala have different GSK rules from Breo Ellipta?',
      answer:
        'Because GSK sorts its medicines into categories and applies different Medicare rules to each. Breo Ellipta is a "general" product, which carries the $600 prescription-spending threshold and a $47,880 income limit for one person. Nucala is a "specialty" product: it has no spending threshold and a higher income limit of $63,840, but it excludes anyone enrolled in Medicare Extra Help. Same foundation, same application line, genuinely different rules — so check the rule for your own medicine rather than the one a friend was told.',
    },
    {
      question: 'Is Breo Ellipta part of Medicare drug price negotiation?',
      answer:
        'Yes. Breo Ellipta is one of the 15 drugs CMS selected for the second cycle of negotiation. CMS\'s selected-drug file gives it a single maximum fair price of $67.00 per 30-day equivalent supply, effective January 1, 2027. That price applies to Part D plans and the people enrolled in them — it is not a pharmacy cash price, and it does not change what you pay before 2027. CMS also publishes an explanation of how the price was reached.',
    },
    {
      question: 'Is there a generic for Breo Ellipta?',
      answer:
        'There is an authorized generic. DailyMed lists three labelled fluticasone furoate and vilanterol products across two labelers: GSK\'s Breo Ellipta, GSK\'s Trelegy Ellipta (which adds a third ingredient), and "Fluticasone Furoate and Vilanterol Powder" from Prasco Laboratories. Whether it saves you money depends on your plan\'s formulary, so ask your prescriber and your plan directly.',
    },
    {
      question: 'Is there a charitable grant for Breo Ellipta right now?',
      answer:
        'Not when we checked on August 26, 2026. Because Breo is licensed for both COPD and asthma it appears on more fund lists than most inhalers — TotalAssist\'s COPD fund, Asthma fund and the health-equity version of each, all closed at $1,200 guaranteed and $3,500 maximum, and HealthWell\'s Asthma and COPD – Medicare Access funds, also closed. Good Days has no respiratory fund. Six closed funds is worth setting alerts on, but plan around the GSK program and the generic rather than waiting. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['trelegy', 'anoro', 'incruse', 'symbicort'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Breo Ellipta' },
  ],
  sources: [
    label,
    dailymedFfVi,
    gskPafProducts,
    gskPafMedicare,
    gskCopay,
    gskCoupons,
    gskDirect,
    totalAssistCopd,
    totalAssistAsthma,
    totalAssistHealthEquity,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsMfpFile,
    cmsMfpExplanation,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify the GSK eligible-products list and
  // the $600 threshold first — both are per-medication rules that changed the
  // shape of this page, and both live on pages GSK revises without notice.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Breo Ellipta Assistance',
    status: 'coming-soon',
    description:
      'The GSK $600 prescription-spending threshold, why Nucala\'s rules differ, the Prasco authorized generic, and what Medicare\'s $67.00 negotiated price changes in 2027.',
  },
  description_meta:
    'How to lower the cost of Breo Ellipta (fluticasone furoate/vilanterol) on Medicare: the GSK patient assistance $600 threshold, the Prasco authorized generic, COPD and asthma fund status, and the $67.00 Medicare negotiated price from 2027 — verified August 2026.',
};

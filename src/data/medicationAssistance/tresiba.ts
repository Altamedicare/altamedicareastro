// ---------------------------------------------------------------------------
// Tresiba (insulin degludec) — Novo Nordisk. Independently researched 2026-08-26.
// Batch 8 — a NEW slug. D10 is resolved: one ordinary record per insulin brand.
//
// Tresiba shares Novo Nordisk's assistance layer with NovoLog, and the record
// says so plainly rather than restaging it as new. What is Tresiba-specific:
//
//  • TWO CONCENTRATIONS ON THE PROGRAM. Novo Nordisk's PAP product list names
//    Tresiba U-100 (10 mL vial and FlexTouch) AND Tresiba U-200 FlexTouch. A
//    U-200 pen holds twice the insulin per millilitre, which matters for anyone
//    on a large daily dose and changes how far a 120-day PAP supply goes.
//  • AN UNBRANDED VERSION FROM NOVO NORDISK ITSELF. DailyMed labels an unbranded
//    "INSULIN DEGLUDEC" from Novo Nordisk Pharma alongside Tresiba — seven
//    labelled degludec products across three labelers.
//  • NOT A NEGOTIATED DRUG. Tresiba is NOT on any CMS selected-drug list. This is
//    worth stating because its stablemate NovoLog IS, and readers reasonably
//    assume a manufacturer's insulins were negotiated together. They were not.
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
  title: 'Tresiba prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=456c5e87-3dfd-46fa-8ac0-c6128d4c97c6',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'TRESIBA (insulin degludec) injection, solution, 100 units/mL and 200 units/mL; Novo Nordisk',
};
const dailymedDegludec = {
  title: 'DailyMed label index — insulin degludec',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=insulin+degludec',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'seven labelled insulin degludec products across three distinct labelers — Novo Nordisk\'s TRESIBA and XULTOPHY 100/3.6, plus an unbranded "INSULIN DEGLUDEC" from Novo Nordisk Pharma, Inc.',
};
const novoPapList = {
  title: 'Novo Nordisk Patient Assistance Program — available products (form NNIPAP_11_01012026)',
  url: 'https://www.novocare.com/content/dam/novonordisk/novocare/forms/PAP_Product_List.pdf',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports:
    'the program\'s own product list naming "Tresiba® U-100 10 mL vial", "Tresiba® U-100 FlexTouch® (5 pens x 3 mL/pen)" and "Tresiba® U-200 FlexTouch® (3 pens x 3 mL/pen)", alongside NovoLog, NovoLog Mix 70/30, Fiasp, Novolin, Ozempic and Xultophy. Victoza does not appear on the list',
};
const novoPapEligibility = {
  title: 'Novo Nordisk Patient Assistance Program — eligibility',
  url: 'https://www.novocare.com/diabetes/help-with-costs/pap.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports:
    'the 2026 eligibility criteria verbatim — "Be a US citizen or legal resident"; "Have Medicare or no insurance (Note: If you have private or commercial insurance, you are not eligible for the PAP)"; "Not be enrolled in or qualify for any other federal, state, or government program such as Medicaid, Medicare Low-Income Subsidy (LIS, or Extra Help Program), or Veterans Affairs (VA) Benefits"; "If you are eligible for Medicaid or Medicare LIS, you must submit a copy of your denial". For Medicare patients on Novo Nordisk insulins: "Total household income must be at or below 400% of the federal poverty level" and "Medicare beneficiaries with a total household income below 150% of the federal poverty level must provide proof of denial for Part D Extra Help to qualify". Also "we no longer require that Medicare Part D patients spend $1000 out of pocket to be eligible". Apply at diabetespap.novocare.com; phone 1-866-310-7549',
};
const novoPapForm = {
  title: 'Novo Nordisk Patient Assistance Program application',
  url: 'https://www.novocare.com/content/dam/novonordisk/novocare/forms/PAP_Application_EN.pdf',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports:
    'the application terms — medication "at no charge to applicants who qualify"; "shipped to a licensed health care professional for dispensing, up to a 120-day supply"; "There is no registration charge or monthly fee"; the form asks whether the patient has Medicare Part D or Medicare Advantage prescription coverage',
};
const trumpRx = {
  title: 'TrumpRx — Tresiba listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: 'Tresiba (Novo Nordisk) listed at a cash price of $35.00',
};
const totalAssistT2d = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Tresiba", "Tresiba Flextouch U-100" and "Tresiba Flextouch U-200" on the approved-medication list, alongside the unbranded "Insulin Degludec" and the pen presentations; $1,500 guaranteed / $2,000 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistT2dHe = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) health equity fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including Tresiba; $1,500 guaranteed / $2,000 maximum award; requires a home zip code in a designated social-vulnerability county',
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
    'the full selected-drug file dated May 26, 2026 — no Tresiba or insulin degludec row for initial price applicability year 2026, 2027 or 2028. The only insulin on any list is Novo Nordisk\'s insulin aspart (NovoLog/Fiasp) for IPAY 2026, a different product',
};

export const TRESIBA: MedicationAssistanceRecord = {
  slug: 'tresiba',
  brandName: 'Tresiba',
  genericName: 'insulin degludec',
  manufacturer: 'Novo Nordisk',
  conditions: ['diabetes'],
  drugClass: ['insulin'],
  description:
    'Tresiba is an ultra-long-acting background insulin taken once a day. It comes in two concentrations — 100 units/mL and 200 units/mL — and both are on Novo Nordisk\'s patient assistance program, which matters more than it sounds: a U-200 pen carries twice the insulin in the same volume, so for someone on a large daily dose the same 120-day program supply goes considerably further.',
  usedFor: [
    'Improving blood sugar control in adults and children with type 1 or type 2 diabetes — confirm the age range that applies to your prescription with your prescriber',
  ],
  whyCostly:
    'Background insulin is a daily lifelong expense. For Tresiba specifically, the useful levers are Novo Nordisk\'s patient assistance program, which covers both concentrations; an unbranded insulin degludec that Novo Nordisk itself now labels alongside the brand; and the $35 cash price listed on the federal TrumpRx site. What Tresiba does not have — despite a common assumption — is a Medicare-negotiated price.',
  medicareContext:
    'Tresiba is covered under Medicare Part D or a Medicare Advantage drug plan, and under federal law a covered insulin costs no more than $35 for a month\'s supply with no deductible applied; our <a href="/blog/medicare-35-dollar-insulin-cap.html">insulin cost guide</a> covers how that works across products. One thing worth correcting up front: Tresiba is NOT a Medicare-negotiated drug. CMS\'s selected-drug and Maximum Fair Price file has no Tresiba or insulin degludec row for 2026, 2027 or 2028. Its stablemate NovoLog is on the 2026 list, and people reasonably assume a manufacturer\'s insulins were negotiated as a group — they were not, and NovoLog\'s $119.00 negotiated price says nothing about Tresiba. Part D out-of-pocket costs are capped at $2,100 in 2026, and check your plan\'s tier for the exact concentration you are prescribed, since U-100 and U-200 are separate products on a formulary.',
  quickAnswer: {
    verdict:
      'Yes — Novo Nordisk\'s patient assistance program covers both Tresiba concentrations, and it is one of the few manufacturer programs that requires you to have Medicare rather than excluding you for it. The significant catch is that you cannot also be enrolled in Extra Help. Both diabetes charitable funds were closed.',
    points: [
      'Novo Nordisk Patient Assistance Program: Tresiba U-100 vial, U-100 FlexTouch and U-200 FlexTouch are all on the product list. "Have Medicare or no insurance (Note: If you have private or commercial insurance, you are not eligible for the PAP)."',
      'For Medicare patients on Novo Nordisk insulins: household income at or below 400% of the federal poverty level. Below 150% FPL you must provide proof of denial for Part D Extra Help.',
      'You cannot hold Extra Help and this program together — Novo Nordisk requires that you not be enrolled in or qualify for it, and asks for your denial letter if you are eligible.',
      'Approved patients receive up to a 120-day supply, shipped to a licensed healthcare professional for dispensing. The program is free — no registration charge, no monthly fee.',
      'Tresiba is NOT a Medicare-negotiated drug, even though NovoLog is. Do not assume the negotiated insulin price applies here.',
      'Charitable grants: TotalAssist lists Tresiba, Tresiba FlexTouch U-100 and U-200 on its Type 2 diabetes funds — both closed ($1,500 guaranteed / $2,000 maximum). HealthWell\'s Type 2 Diabetes fund was closed. Good Days has no diabetes fund.',
    ],
  },
  programs: [
    {
      id: 'novo-pap',
      kind: 'manufacturer-pap',
      name: 'Novo Nordisk Patient Assistance Program',
      operator: 'Novo Nordisk',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. The program\'s own product list (form NNIPAP_11_01012026) names Tresiba U-100 10 mL vial, Tresiba U-100 FlexTouch and Tresiba U-200 FlexTouch. Novo Nordisk warns that "Some medicines will no longer be a part of the Patient Assistance Program for 2026", so re-read the list rather than assuming it is unchanged.',
      medicare: 'conditional',
      medicareNote:
        'Novo Nordisk builds this program the opposite way round from most manufacturers: "Have Medicare or no insurance (Note: If you have private or commercial insurance, you are not eligible for the PAP)." Having Medicare qualifies you. The condition that disqualifies people instead is other government help — you must "not be enrolled in or qualify for any other federal, state, or government program such as Medicaid, Medicare Low-Income Subsidy (LIS, or Extra Help Program), or Veterans Affairs (VA) Benefits", and if you are eligible for Medicaid or Extra Help you must submit a copy of your denial. Medicare beneficiaries below 150% of the federal poverty level must specifically provide proof that Part D Extra Help denied them. For Medicare patients on Novo Nordisk insulins the income ceiling is 400% of the federal poverty level; Novo Nordisk publishes no dollar table of its own and points applicants to the NeedyMeds poverty guidelines. One helpful change: Novo Nordisk states it "no longer require[s] that Medicare Part D patients spend $1000 out of pocket to be eligible for the program".',
      summary:
        'A free-medicine program designed around Medicare beneficiaries, covering both Tresiba concentrations. Approved patients receive up to a 120-day supply, shipped to a licensed healthcare professional for dispensing rather than to a pharmacy, running through the end of the calendar year.',
      covers: 'Tresiba U-100 vials and FlexTouch pens and Tresiba U-200 FlexTouch pens, at no charge to approved applicants.',
      eligibility: [
        'US citizen or legal resident',
        'Have Medicare or no insurance — private or commercial insurance disqualifies you',
        'Household income at or below 400% of the federal poverty level for Medicare patients on Novo Nordisk insulins',
        'Not enrolled in or qualifying for Medicaid, Medicare Low-Income Subsidy (Extra Help) or VA benefits',
        'If eligible for Medicaid or Medicare LIS, you must submit a copy of your denial',
        'Medicare beneficiaries below 150% of the federal poverty level must provide proof of denial for Part D Extra Help',
        'Novo Nordisk publishes no dollar income table, directing applicants to the NeedyMeds federal poverty level guidelines',
      ],
      requirements: [
        'Proof of household income for everyone in your household',
        'Your Medicare Part D or Medicare Advantage prescription coverage details',
        'A copy of your Medicaid or Extra Help denial letter, if you are eligible for either',
        'Your prescriber\'s details — you complete Section 1 and your healthcare provider completes Section 2',
      ],
      howToApply:
        'Apply at diabetespap.novocare.com, or call 1-866-310-7549. You complete the patient section and your prescriber completes theirs. State which Tresiba concentration you are prescribed, since U-100 and U-200 are listed as separate products.',
      applyUrl: 'https://diabetespap.novocare.com/',
      applyLabel: 'Novo Nordisk Patient Assistance Program',
      phone: '1-866-310-7549',
      sources: [novoPapList, novoPapEligibility, novoPapForm],
    },
    {
      id: 'trumprx',
      kind: 'manufacturer-direct',
      name: 'Cash price via TrumpRx',
      operator: 'U.S. federal government listing of manufacturer cash prices',
      status: 'open',
      statusNote: 'Tresiba listed at $35.00 on August 26, 2026.',
      medicare: 'conditional',
      medicareNote:
        'Anyone can buy at a cash price, including a Medicare beneficiary — but buying outside your drug plan means the spending does not count toward your Part D deductible or your $2,100 annual out-of-pocket cap. A covered insulin under a Medicare drug plan is already capped at $35 a month, the same figure, and that spending does count. So the cash route rarely helps if your plan covers Tresiba; it matters if your plan does not, or while a prior authorisation is being sorted out.',
      summary:
        'A published federal cash price, useful mainly as a benchmark and a stopgap. Compare it against your plan\'s insulin cost-sharing before switching.',
      covers: 'Tresiba at the listed cash price, outside insurance.',
      eligibility: ['Paying cash rather than using prescription insurance for that fill'],
      howToApply: 'Check the current listing and follow the purchase route it gives. Compare against your plan first.',
      applyUrl: 'https://trumprx.gov/browse',
      applyLabel: 'TrumpRx',
      sources: [trumpRx],
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
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Importantly, they do NOT exclude Extra Help enrollees, unlike the Novo Nordisk program. So if Extra Help has closed the manufacturer door to you, these funds remain open in principle.',
      summary:
        'Tresiba, Tresiba FlexTouch U-100 and Tresiba FlexTouch U-200 are all named on the Type 2 diabetes approved-medication list, along with the unbranded insulin degludec — so neither a concentration change nor a switch to the unbranded product would cost you fund eligibility. Both funds were closed, and both are type 2 funds only.',
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
      statusNote: 'Closed on August 26, 2026. HealthWell runs no Type 1 Diabetes fund and no insulin-specific fund.',
      medicare: 'eligible',
      medicareNote: 'HealthWell accepts Medicare beneficiaries for the diseases it covers. Its Type 2 Diabetes fund was closed when we checked.',
      summary:
        'One applicable fund, closed. Tresiba is used in type 1 as well as type 2 diabetes, and none of the three foundations on this page runs a type 1 fund — a real gap rather than an oversight in our checking.',
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
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Tresiba.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'TotalAssist lists Tresiba in all three of its presentations — the U-100 product, the U-100 FlexTouch and the U-200 FlexTouch — on its Type 2 diabetes fund and the health-equity version, each paying $1,500 guaranteed up to $2,000, and both were closed on August 26, 2026. The unbranded insulin degludec is on the same list, so switching to it would not affect eligibility. HealthWell\'s Type 2 Diabetes fund was closed too, and Good Days runs no diabetes fund. All of these are type 2 funds, and Tresiba is widely used in type 1 diabetes, so a substantial share of readers have no charitable route here at all. One useful asymmetry: these funds do not exclude Extra Help enrollees while Novo Nordisk\'s program does — so if Extra Help has ruled you out of the manufacturer program, the funds are still worth an alert.',
  extraHelpNote:
    'Tresiba presents the same either/or as NovoLog: Novo Nordisk requires that you not be enrolled in or qualify for Medicare Extra Help, and below 150% of the federal poverty level you must produce an Extra Help denial letter to apply. You cannot hold both. For most people Extra Help is the better of the two, because it reduces cost-sharing on every covered drug you take rather than one, and it does not have to be re-approved by a manufacturer each year. Apply for Extra Help first; if you are denied, keep the letter, because it is exactly what Novo Nordisk asks for.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Tresiba on Medicare in August 2026, settle the Extra Help question first — it decides which route is available:',
      bullets: [
        'Apply for Medicare Extra Help first. If you get it, use it; the Novo Nordisk program is then closed to you.',
        'If Extra Help denies you, keep the letter — Novo Nordisk requires it.',
        'Income at or below 400% of the federal poverty level and no commercial insurance → apply to the Novo Nordisk Patient Assistance Program.',
        'Check your plan\'s cost-sharing for your exact concentration. A covered insulin is capped at $35 a month, and U-100 and U-200 are separate formulary entries.',
        'Ask your prescriber and plan about the unbranded insulin degludec, which Novo Nordisk labels itself.',
        'Type 2 diabetes → set alerts on the TotalAssist and HealthWell diabetes funds (all closed when checked).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The manufacturer program was open; the charitable funds were closed.',
      bullets: [
        'Novo Nordisk PAP: open, with the product list published as a PDF that names both Tresiba concentrations.',
        'TotalAssist: the Type 2 diabetes fund pages show "Open" or "Closed" and current award amounts.',
        'HealthWell: the disease-funds list shows the Type 2 Diabetes fund and its status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Novo Nordisk\'s insurance rule is the reverse of what most people expect:',
      bullets: [
        'Novo Nordisk PAP: you must have Medicare or no insurance. Private or commercial insurance disqualifies you.',
        'Income at or below 400% of the federal poverty level for Medicare patients on Novo Nordisk insulins.',
        'You must not be enrolled in or qualify for Medicaid, Extra Help or VA benefits, and must supply a denial letter if you are eligible for Medicaid or Extra Help.',
        'Below 150% of the federal poverty level, proof of denial for Part D Extra Help is specifically required.',
        'TotalAssist (when open): government insurance covering Tresiba; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed type 2 diabetes diagnosis.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified type 2 diabetes diagnosis, and treatment in the United States.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Get the concentration right — it appears on every form and affects your supply:',
      bullets: [
        'Your Tresiba concentration and presentation — U-100 vial, U-100 FlexTouch or U-200 FlexTouch — and your daily dose in units.',
        'Your Extra Help denial letter, if you have one.',
        'Proof of household income for everyone in the household.',
        'Medicare card and your Part D or Medicare Advantage drug-plan card.',
        'Your diabetes type, since the charitable funds are type 2 only.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Novo Nordisk PAP: you complete Section 1; your healthcare provider completes Section 2. Apply at diabetespap.novocare.com or call 1-866-310-7549. There is no registration charge and no monthly fee.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'Unbranded switch: nothing to apply for — a prescribing and formulary question.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Novo Nordisk PAP: approved patients receive up to a 120-day supply, shipped to a licensed healthcare professional rather than your pharmacy, through the end of the calendar year.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'The concentration question is the one most often overlooked:',
      bullets: [
        'Ask your prescriber whether the U-200 concentration suits you if you are on a large daily dose — fewer pens for the same number of units can change what you pay, and both concentrations are on the assistance program and the charitable funds.',
        'Ask about the unbranded insulin degludec that Novo Nordisk labels alongside Tresiba.',
        'Confirm your plan\'s insulin cost-sharing: a covered insulin is capped at $35 a month, and that spending counts toward your out-of-pocket cap while a cash purchase does not.',
        'Do not assume a Medicare negotiated price applies — Tresiba is not on any CMS selected-drug list, even though NovoLog is.',
        'Apply for Extra Help even if you assume you earn too much; for most people it beats the manufacturer program.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your Tresiba concentration and presentation', note: 'U-100 vial, U-100 FlexTouch or U-200 FlexTouch — they are separate products on the assistance list and on formularies' },
    {
      item: 'Your Medicare Extra Help denial letter, if you have one',
      note: 'Novo Nordisk requires it if you are eligible for Extra Help or Medicaid, and mandatorily below 150% of the federal poverty level',
    },
    { item: 'Your diabetes type', note: 'the TotalAssist and HealthWell funds cover type 2 only' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber and plan about the unbranded insulin degludec — Novo Nordisk labels it alongside Tresiba, and TotalAssist lists it on the same fund.',
    },
    {
      text: 'Confirm your plan\'s insulin cost-sharing before paying cash. A covered insulin is capped at $35 a month under a Medicare drug plan, and that spending counts toward your out-of-pocket cap.',
      href: '/blog/medicare-35-dollar-insulin-cap.html',
      label: 'Insulin costs on Medicare',
    },
    ...standardAlternatives('Tresiba'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Tresiba?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans cover Tresiba, and under federal law a covered insulin costs no more than $35 for a month\'s supply with no deductible applied. Check your plan\'s tier for the exact concentration you are prescribed, because U-100 and U-200 are separate formulary entries. Our <a href="/blog/medicare-35-dollar-insulin-cap.html">insulin cost guide</a> explains how the cap works across products.',
    },
    {
      question: 'Is Tresiba part of Medicare drug price negotiation?',
      answer:
        'No, and this is worth checking rather than assuming. CMS\'s selected-drug and Maximum Fair Price file has no Tresiba or insulin degludec row for initial price applicability year 2026, 2027 or 2028. Novo Nordisk\'s other insulin, NovoLog, IS on the 2026 list with a negotiated price of $119.00 per 30-day equivalent supply — but that price applies to insulin aspart products only and says nothing about Tresiba. Manufacturers\' insulins were not negotiated as a group.',
    },
    {
      question: 'Is there a Tresiba patient assistance program for people on Medicare?',
      answer:
        'Yes, and it is built for Medicare rather than around it. Novo Nordisk\'s rule is "Have Medicare or no insurance (Note: If you have private or commercial insurance, you are not eligible for the PAP)". All three Tresiba presentations — U-100 vial, U-100 FlexTouch and U-200 FlexTouch — are on the program\'s product list. For Medicare patients on Novo Nordisk insulins, household income must be at or below 400% of the federal poverty level. Approved patients get up to a 120-day supply shipped to a licensed healthcare professional.',
    },
    {
      question: 'Can I have both Extra Help and the Novo Nordisk program?',
      answer:
        'No. Novo Nordisk requires that you "not be enrolled in or qualify for any other federal, state, or government program such as Medicaid, Medicare Low-Income Subsidy (LIS, or Extra Help Program), or Veterans Affairs (VA) Benefits", and beneficiaries below 150% of the federal poverty level must provide proof that Extra Help denied them. For most people <a href="/blog/extra-help-explained.html">Extra Help</a> is the better option, because it applies to every covered drug you take. Apply for it first; if denied, keep the letter, because Novo Nordisk asks for exactly that.',
    },
    {
      question: 'What is the difference between Tresiba U-100 and U-200?',
      answer:
        'Concentration. U-200 contains 200 units of insulin degludec per millilitre against U-100\'s 100 units, so the same dose takes half the volume and a U-200 pen holds twice as many units as a U-100 pen of the same size. For anyone on a large daily dose that means fewer pens per month, which can change what you pay and how far a 120-day patient assistance supply stretches. Both concentrations are on Novo Nordisk\'s assistance program and on the TotalAssist fund list. Whether U-200 suits you is a prescribing decision.',
    },
    {
      question: 'Is there a generic version of Tresiba?',
      answer:
        'There is an unbranded version from Novo Nordisk itself. DailyMed lists seven labelled insulin degludec products across three labelers: Tresiba, Xultophy 100/3.6 (a combination product) and an unbranded "Insulin Degludec" from Novo Nordisk Pharma. TotalAssist lists the unbranded product on the same Type 2 diabetes fund as Tresiba, so switching would not cost you fund eligibility. Whether it lowers your copay depends on your plan\'s formulary. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['novolog', 'lantus', 'toujeo', 'lyumjev'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/medicare-35-dollar-insulin-cap.html', label: 'The $35 Insulin Cap with Medicare', blurb: 'The $35 cap and which insulin products are covered' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Tresiba' },
  ],
  sources: [
    label,
    dailymedDegludec,
    novoPapList,
    novoPapEligibility,
    novoPapForm,
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
  // Per-record verification date. Re-verify the Novo Nordisk PAP product list
  // first — Novo Nordisk warns that some medicines left the program for 2026, and
  // both Tresiba concentrations being on it is the load-bearing fact here.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Tresiba Assistance',
    status: 'coming-soon',
    description:
      'Why Novo Nordisk requires Medicare rather than excluding it, why you must choose between Extra Help and the program, what U-200 changes, and why Tresiba is not a negotiated drug when NovoLog is.',
  },
  description_meta:
    'How to lower the cost of Tresiba (insulin degludec) on Medicare: the Novo Nordisk program that requires Medicare but excludes Extra Help, both U-100 and U-200 covered, the unbranded degludec, and why Tresiba is not a negotiated drug — verified August 2026.',
};

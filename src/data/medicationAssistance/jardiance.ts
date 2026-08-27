// ---------------------------------------------------------------------------
// Jardiance (empagliflozin) — Boehringer Ingelheim. Researched 2026-08-26.
//
// VERIFICATION NOTE: boehringer-ingelheim.com and patient.boehringer-ingelheim.com
// blocked every automated read on 2026-08-26 (Imperva bot interstitial, HTTP
// 403). The BI Cares facts below come from Boehringer's OWN documents — the
// 2026 eligibility/income guidelines (PC-US-148739, 1/2026) and the program
// application (PC-US-145555, 09/2025) — read from copies hosted by RxAssist,
// plus CMS/HealthWell/TotalAssist pages read live. Whether BI Cares is
// accepting applications TODAY could not be confirmed on BI's site, so the
// program is marked "verify" and the page tells readers to call first.
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

const biEligibility = {
  title: 'Boehringer Cares Patient Assistance Program — 2026 eligibility and income guidelines (BI document PC-US-148739, 1/2026; copy hosted by RxAssist)',
  url: 'https://s3.amazonaws.com/rxassistorg/docs/Boehringer-FPL.pdf',
  publisher: 'Boehringer Ingelheim Cares Foundation (via RxAssist)',
  checked: CHECKED,
  supports: 'Medicare Part D eligibility; Jardiance in Group 2 at 250% FPL; 2026 income limits; documentation; enrollment length',
};
const biApplication = {
  title: 'Boehringer Cares Patient Assistance Program application form (BI document PC-US-145555, 09/2025; copy hosted by RxAssist)',
  url: 'https://s3.amazonaws.com/rxassistorg/docs/boehringer-frm.pdf',
  publisher: 'Boehringer Ingelheim Cares Foundation (via RxAssist)',
  checked: CHECKED,
  supports: 'Jardiance listed; Medicare/Extra Help rule; free to apply; patient + prescriber sections; fax/mail; phone',
};
const biPortal = {
  title: 'Boehringer Cares Patient Assistance Program portal',
  url: 'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
  publisher: 'Boehringer Ingelheim',
  checked: CHECKED,
  supports: 'official portal (blocked automated verification on the checked date)',
};
const jardianceSavings = {
  title: 'Jardiance Savings Card',
  url: 'https://patient.boehringer-ingelheim.com/us/products/jardiance/savings',
  publisher: 'Boehringer Ingelheim',
  checked: CHECKED,
  supports: 'offer; government-insurance screening question (read from an August 11, 2026 archived copy)',
};
const label = {
  title: 'Jardiance prescribing information (revised 1/2026)',
  url: 'https://content.boehringer-ingelheim.com/DAM/7d9c411c-ec33-4f82-886f-af1e011f35bb/jardiance-us-pi.pdf',
  publisher: 'Boehringer Ingelheim',
  checked: CHECKED,
  supports: 'approved uses; distributor',
};
const dailyMed = {
  title: 'Jardiance label (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=faf3dd6a-9cd0-39c2-0d2e-232cb3f67565',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'labeler',
};

export const JARDIANCE: MedicationAssistanceRecord = {
  slug: 'jardiance',
  brandName: 'Jardiance',
  genericName: 'empagliflozin',
  manufacturer: 'Boehringer Ingelheim',
  conditions: ['diabetes', 'heart', 'kidney'],
  // empagliflozin — SGLT2 inhibitor (Jardiance US prescribing information).
  drugClass: ['sglt2'],
  description:
    'Jardiance is a once-daily SGLT2 inhibitor tablet prescribed for type 2 diabetes, heart failure and chronic kidney disease — the same class as Farxiga, but made by a different company with its own, different assistance program.',
  usedFor: [
    'Heart failure — to lower the risk of cardiovascular death and hospitalization',
    'Chronic kidney disease at risk of progression — to lower the risk of kidney-function decline, kidney failure, cardiovascular death and hospitalization',
    'Type 2 diabetes with established cardiovascular disease — to lower the risk of cardiovascular death',
    'Type 2 diabetes — to improve blood sugar control alongside diet and exercise (adults and children 10+)',
  ],
  whyCostly:
    'Jardiance is a brand-name drug with no generic at the pharmacy counter, usually placed on a higher brand tier of Part D formularies, so copays or coinsurance recur every month until you reach the annual out-of-pocket cap ($2,100 in 2026). Unlike Farxiga, its manufacturer still runs a patient assistance program that accepts Medicare Part D enrollees.',
  medicareContext:
    'Jardiance is generally covered under Medicare Part D (or a Medicare Advantage drug plan) for its approved uses, often with prior authorization or step therapy. It is one of the first ten drugs with a Medicare-negotiated Maximum Fair Price: $197.00 for a 30-day supply in 2026 (versus a $573 list price in 2023, per CMS). That price applies to what plans pay; your copay still depends on your plan\'s tier and cost-sharing.',
  quickAnswer: {
    verdict:
      'Yes, possibly. Boehringer Ingelheim\'s patient assistance program (Boehringer Cares) lists Jardiance and accepts Medicare Part D enrollees who do not qualify for Extra Help, with 2026 income limits of $39,900 for one person or $54,100 for two. The charity funds that list Jardiance were closed to new applicants when we checked, except one zip-code-limited TotalAssist heart-failure fund. Extra Help remains open year-round.',
    points: [
      'Manufacturer patient assistance: Boehringer Cares lists Jardiance (income at or below 250% of the federal poverty level; Medicare Part D enrollees eligible if not eligible for Extra Help). BI\'s website blocked our automated check on August 26, 2026 — call 1-800-556-8317 to confirm it is accepting applications.',
      'Jardiance Savings Card: BI screens out prescriptions paid by Medicare, Medicaid, Medigap, VA, DoD or TRICARE — do not count on it with Part D.',
      'Charitable grants: Jardiance is on TotalAssist and HealthWell fund lists, but the diabetes, heart-failure and kidney funds were closed — except TotalAssist\'s zip-code-limited heart-failure health-equity fund.',
      'Medicare: negotiated Part D price of $197 (30-day) in 2026; Extra Help can cut a covered brand copay to about $12.65 if you qualify.',
    ],
  },
  programs: [
    {
      id: 'bicares',
      kind: 'manufacturer-pap',
      name: 'Boehringer Cares Patient Assistance Program',
      operator: 'Boehringer Ingelheim Cares Foundation',
      status: 'verify',
      statusNote:
        'Jardiance is listed in BI\'s 2026 eligibility guidelines (dated January 2026) and on the program application. BI\'s website blocked our automated verification on August 26, 2026, so we could not confirm the program is accepting applications today — call 1-800-556-8317 (Monday–Friday, 8:30 am–6:00 pm ET) before you apply.',
      medicare: 'conditional',
      medicareNote:
        'BI\'s rules: you may apply if you are uninsured, or if you have Medicare but cannot afford your medication and you do not qualify for Medicare\'s Extra Help (Low-Income Subsidy). BI may ask for proof of an Extra Help denial. Medicare Part D enrollments approved between October 15 and December 31 run through the end of the following year (up to 15 months).',
      summary:
        'Boehringer Ingelheim\'s foundation provides Jardiance free of charge to eligible patients — one of the manufacturer programs that still accepts Medicare Part D enrollees. Applying is free.',
      covers: 'Jardiance at no cost for approved patients for the enrollment period (12 months, or through the following December 31 for late-year Medicare approvals).',
      eligibility: [
        'U.S. resident treated as an outpatient by a U.S.-licensed provider',
        'Uninsured, or your insurance does not cover Jardiance, or you have Medicare Part D but cannot afford it and do not qualify for Extra Help',
        'Household income at or below 250% of the federal poverty level (Group 2 medicines): $39,900 for one person, $54,100 for two, $68,300 for three, $82,500 for four in 2026 (48 states; higher in Alaska and Hawaii)',
        'No access to other coverage or funding for the medication; not in an employer "alternate funding" program that requires applying to manufacturer programs',
      ],
      requirements: [
        'Patient sections: product, patient information, household size and total annual income, insurance information (Medicare Part D checkbox), whether you have an Extra Help denial letter (attach it if so), signed patient attestation',
        'Prescriber sections: prescriber information and signed attestation, plus a prescription (on the form, faxed separately, or sent electronically to the program pharmacy)',
        'BI may request proof of income — federal tax return, W-2, 1099, pension or Social Security statement, pay stubs — and proof of Extra Help denial',
      ],
      howToApply:
        'You complete the patient sections and sign; your prescriber completes and signs the prescriber sections and supplies the prescription. Fax the application to 1-866-851-2827 or mail it to Boehringer Cares Patient Assistance Program, PO Box 99055, Jeffersontown, KY 40296. There is no charge to apply.',
      applyUrl: 'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
      applyLabel: 'Boehringer Cares program portal',
      phone: '1-800-556-8317',
      sources: [biEligibility, biApplication, biPortal],
    },
    {
      id: 'jardiance-savings-card',
      kind: 'manufacturer-savings',
      name: 'Jardiance Savings Card',
      operator: 'Boehringer Ingelheim',
      status: 'open',
      statusNote: 'Active for eligible commercially insured patients ("as little as $0 for a 30- to 90-day prescription if eligible"), per an August 11, 2026 archived copy of BI\'s page.',
      medicare: 'excluded',
      medicareNote:
        'BI\'s eligibility screener asks whether your prescriptions are paid in part or in full by Medicare, Medicaid, Medigap, VA, DoD or TRICARE. We could not read the full terms (BI\'s site blocked automated checking), but manufacturer copay cards generally exclude government insurance under federal anti-kickback rules. Confirm with CareConnect4Me at 1-866-279-8990 before relying on it.',
      summary: 'A commercial copay offer with monthly savings limits, for commercially insured patients.',
      eligibility: ['Commercial prescription insurance', 'Prescriptions not paid by any state or federal program'],
      howToApply: 'Commercially insured patients activate the card on the Jardiance website. Not intended for Medicare beneficiaries.',
      applyUrl: 'https://patient.boehringer-ingelheim.com/us/products/jardiance/savings',
      applyLabel: 'Jardiance savings card',
      phone: '1-866-279-8990',
      sources: [jardianceSavings, SRC.oigCoupons],
    },
    {
      id: 'totalassist-hf-he',
      kind: 'charitable',
      name: 'TotalAssist — Heart failure (HF) health equity fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Heart failure (HF) health equity',
      status: 'open',
      statusNote: 'Open and accepting applications on August 26, 2026 — the only fund covering Jardiance that was open when we checked.',
      medicare: 'eligible',
      medicareNote: 'Requires government insurance (Medicare, Medicaid or TRICARE) that covers your Jardiance costs.',
      summary:
        'A health-equity fund: you must have heart failure and a home address in a zip code the fund serves (designated social-vulnerability counties). Jardiance is on its approved-medication list. Eligibility is determined in part by zip code, so check yours before assuming.',
      covers: '$1,000 guaranteed award, up to $2,500 maximum, for eligible out-of-pocket costs. One grant per condition.',
      eligibility: ['Diagnosed with heart failure', 'Home address in a zip code served by a Health Equity Fund', ...TOTALASSIST_ELIGIBILITY],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/funds/heart-failure-hf-health-equity/',
      applyLabel: 'Check eligibility and apply — TotalAssist',
      phone: TOTALASSIST_PHONE,
      sources: [
        { title: 'TotalAssist — Heart failure (HF) health equity fund', url: 'https://totalassist.org/funds/heart-failure-hf-health-equity/', publisher: 'Patient Advocate Foundation', checked: CHECKED, supports: 'open status, award, zip-code rule, Jardiance listed' },
        SRC.totalAssistApply,
      ],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Type 2 diabetes, heart failure, chronic kidney disease funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Type 2 diabetes (T2DM) · Heart failure (HF) · Chronic kidney disease (CKD) · Cardiomyopathy',
      status: 'closed',
      statusNote: 'All four funds were closed to new applicants on August 26, 2026, even though Jardiance is on each fund\'s approved-medication list.',
      medicare: 'eligible',
      medicareNote: 'These funds require government insurance (Medicare, Medicaid or TRICARE).',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (launched July 1, 2026, combining PAF Co-Pay Relief and the PAN Foundation) lists Jardiance under several disease funds. A listing is not an open fund: each of these was closed when we checked. Sign up to be notified the moment one reopens — there is no waitlist or queue.',
      covers: 'When open: Type 2 diabetes $1,500 guaranteed / $2,000 maximum; heart failure $1,000 / $2,500; chronic kidney disease $2,400 / $4,800.',
      eligibility: TOTALASSIST_ELIGIBILITY,
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: 'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [
        SRC.totalAssistFunds,
        { title: 'TotalAssist — Type 2 diabetes (T2DM) fund', url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/', publisher: 'Patient Advocate Foundation', checked: CHECKED, supports: 'closed; Jardiance listed' },
        { title: 'TotalAssist — Heart failure (HF) fund', url: 'https://totalassist.org/funds/heart-failure-hf/', publisher: 'Patient Advocate Foundation', checked: CHECKED, supports: 'closed; Jardiance listed' },
        { title: 'TotalAssist — Chronic kidney disease (CKD) fund', url: 'https://totalassist.org/funds/chronic-kidney-disease-ckd/', publisher: 'Patient Advocate Foundation', checked: CHECKED, supports: 'closed; Jardiance listed' },
        SRC.totalAssistNotify,
      ],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Type 2 Diabetes and heart-failure funds',
      operator: 'HealthWell Foundation',
      fund: 'Type 2 Diabetes · Chronic Heart Failure – Medicare Access · Cardiomyopathy – Medicare Access',
      status: 'closed',
      statusNote: 'All three funds were "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. HealthWell has no chronic kidney disease fund.',
      medicare: 'eligible',
      medicareNote: 'HealthWell requires insurance that covers part of the drug; Medicare qualifies. The two Medicare Access funds are for Medicare patients only.',
      summary:
        'HealthWell lists Jardiance (and empagliflozin) on its Type 2 Diabetes fund and both heart-failure-related Medicare Access funds. HealthWell states that closed funds reopen as funding is replenished, and offers real-time alerts for each fund.',
      covers: 'When open: Type 2 Diabetes up to $1,000 (pharmacy card; income up to 300% FPL); Chronic Heart Failure – Medicare Access up to $2,500 and Cardiomyopathy – Medicare Access up to $7,500 (income up to 500% FPL).',
      eligibility: [
        'Insurance (including Medicare) that covers part of the cost of Jardiance',
        'Type 2 Diabetes fund: household income up to 300% of the federal poverty level; heart-failure Medicare Access funds: up to 500% FPL (adjusted for household size and cost of living)',
        'Diagnosis matching the fund, verified by your provider',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/type-2-diabetes/',
      applyLabel: 'HealthWell Type 2 Diabetes fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [SRC.healthWellT2D, SRC.healthWellCHF, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays-ckd',
      kind: 'charitable',
      name: 'Good Days — Chronic Kidney Disease program',
      operator: 'Good Days',
      fund: 'Chronic Kidney Disease',
      status: 'closed',
      statusNote: 'Program status "seeking funds" — not open to new enrollments on August 26, 2026. Good Days lists no diabetes or heart-failure program, and Jardiance is not mentioned.',
      medicare: 'unknown',
      medicareNote: 'Good Days generally requires insurance covering at least half the cost of treatment and income at or below 500% FPL; confirm the CKD program\'s rules with Good Days if it opens.',
      summary: 'Good Days lists a chronic kidney disease program but is currently seeking funding for it.',
      eligibility: [],
      howToApply: 'Check the Good Days CKD page for a status change, or sign up for its notifications.',
      applyUrl: 'https://mygooddays.org/diseases-covered/chronic-kidney-disease/',
      applyLabel: 'Good Days — Chronic Kidney Disease',
      sources: [
        { title: 'Good Days — Chronic Kidney Disease', url: 'https://mygooddays.org/diseases-covered/chronic-kidney-disease/', publisher: 'Good Days', checked: CHECKED, supports: 'status: seeking funds' },
        { title: 'Good Days — how to qualify', url: 'https://mygooddays.org/patients/how-to-apply/qualify/', publisher: 'Good Days', checked: CHECKED, supports: 'general eligibility' },
      ],
    },
  ],
  charitableSummary:
    'Jardiance appears in the TotalAssist medication index and on HealthWell\'s Type 2 Diabetes and heart-failure fund lists, but on August 26, 2026 every one of those funds was closed to new applicants except TotalAssist\'s heart-failure health-equity fund, which is limited to certain zip codes. Being listed is not the same as being open — sign up for fund alerts so you hear when one reopens.',
  extraHelpNote:
    'Extra Help and Boehringer Cares interact: BI\'s program is for Medicare patients who do not qualify for Extra Help, and may ask for a denial letter. Apply for Extra Help first — if you are approved, your copays drop for every drug; if you are denied, the letter becomes part of your BI application.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'Jardiance still has a manufacturer route for Medicare patients, so start there. Work through these in order — they are not mutually exclusive.',
      bullets: [
        'Medicare Part D, income at or below 250% of the federal poverty level, and not eligible for Extra Help → Boehringer Cares Patient Assistance Program (call 1-800-556-8317 first to confirm it is accepting applications).',
        'Limited income and resources → apply for Medicare Extra Help first; a denial letter supports the BI application.',
        'Heart failure and a home zip code served by a health-equity fund → TotalAssist heart-failure health-equity fund (open when checked).',
        'Type 2 diabetes or kidney disease → sign up for TotalAssist and HealthWell alerts; those funds were closed when checked.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Jardiance is listed by Boehringer Cares, TotalAssist and HealthWell, but a listing does not mean funding is available today. On the day we checked, the TotalAssist heart-failure health-equity fund was open, the other charity funds were closed, and BI\'s website blocked our automated check of the manufacturer program.',
      bullets: [
        'Boehringer Cares: call 1-800-556-8317 (Monday–Friday, 8:30 am–6:00 pm ET) and ask whether Jardiance applications are being accepted and which application version to use.',
        'TotalAssist: the fund list at totalassist.org/funds shows "Open" or "Closed" for every fund.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program sets its own rules. For Jardiance in 2026:',
      bullets: [
        'Boehringer Cares: U.S. resident; Medicare Part D but cannot afford the drug and not eligible for Extra Help (or uninsured); household income at or below $39,900 for one person, $54,100 for two, $68,300 for three, $82,500 for four (48 states); no other source of coverage or funding for Jardiance.',
        'TotalAssist heart-failure health-equity fund: government insurance covering Jardiance; income at or below 500% of the federal poverty level, cost-of-living adjusted; a heart-failure diagnosis in treatment; a home zip code the fund serves.',
        'HealthWell Type 2 Diabetes fund (when it reopens): insurance covering part of the drug and household income up to 300% FPL; the Medicare Access heart-failure funds allow up to 500% FPL.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'The Boehringer Cares application is a paper form with patient and prescriber sections, so collect these first:',
      bullets: [
        'Household size and total annual household income before taxes; proof of income if BI requests it (tax return, W-2, 1099, pension or Social Security statement, pay stubs).',
        'Medicare card and Part D / Medicare Advantage drug-plan details (the form has a Medicare Part D checkbox).',
        'Your Extra Help (Low-Income Subsidy) denial letter, if you have one — attach it.',
        'Your prescriber\'s name, NPI, office phone and fax — the prescriber signs the attestation and supplies the prescription.',
        'For TotalAssist: diagnosis and date, copay amounts, plan ID and group number, Social Security number.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Boehringer Cares: you complete sections 1–5 (product, patient, income, insurance, attestation) and sign; your prescriber completes sections 6–8 and signs; the prescription goes on the form, by separate fax, or electronically to the program pharmacy. Fax to 1-866-851-2827 or mail to PO Box 99055, Jeffersontown, KY 40296.',
        'TotalAssist: you apply online in about 15 minutes (or call 866-512-3861); Patient Advocate Foundation verifies your diagnosis with your provider and verifies income automatically.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect after you submit:',
      bullets: [
        'Boehringer Cares: BI reviews eligibility and may request documents; missing information delays a decision. Approved Medicare enrollments run 12 months, or through the following December 31 if approved between October 15 and December 31. BI did not publish a review time in the documents we could read.',
        'TotalAssist: an instant decision when you submit; proof of income due within 30 days.',
        'HealthWell: a decision after your provider verifies the diagnosis; assistance is issued as a pharmacy card.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'Sign up for TotalAssist and HealthWell fund alerts — there is no waitlist, so being notified first matters.',
        'If BI declined you for income, re-check the household definition (spouse and children under 19 living with you) and ask whether a re-application is possible after a change in circumstances.',
        'Apply for Extra Help even if you think you earn too much — the limits are higher than many people expect.',
        'Ask your doctor about a formulary exception, a lower tier on your plan, or whether a different SGLT2 inhibitor is appropriate.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Extra Help (Low-Income Subsidy) denial letter', note: 'Boehringer Cares asks whether you have one — attach it' },
    { item: 'Prescriber NPI, office phone and fax', note: 'Boehringer Cares prescriber sections' },
    { item: 'Copay or coinsurance amounts and Social Security number', note: 'TotalAssist and HealthWell' },
    { item: 'Your home zip code', note: 'decides eligibility for the TotalAssist heart-failure health-equity fund' },
  ],
  ifUnavailable: [
    {
      text: 'If Boehringer Cares is not accepting applications when you call, ask when it will be and whether you can submit anyway — and check the alternatives below in the meantime.',
      href: 'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
      label: 'Boehringer Cares portal',
    },
    ...standardAlternatives('Jardiance'),
  ],
  faqs: [
    {
      question: 'Can Medicare help pay for Jardiance?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans generally cover Jardiance for its approved uses, and since January 1, 2026 Medicare pays a negotiated Maximum Fair Price of $197 for a 30-day supply. Your own copay depends on your plan\'s tier and cost-sharing, and Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Jardiance patient assistance program for people on Medicare?',
      answer:
        'Yes. The Boehringer Cares Patient Assistance Program lists Jardiance and accepts people who have Medicare but cannot afford the medication and do not qualify for Extra Help, with household income at or below 250% of the federal poverty level ($39,900 for one person or $54,100 for two in 2026). Applying is free; call 1-800-556-8317. BI\'s website blocked our automated check on August 26, 2026, so confirm by phone that applications are being accepted.',
    },
    {
      question: 'Can I use the Jardiance savings card with Medicare?',
      answer:
        'You should not count on it. BI\'s savings-card screener asks whether your prescriptions are paid by Medicare, Medicaid, Medigap, VA, DoD or TRICARE, and manufacturer copay cards generally exclude government insurance under federal anti-kickback rules. Ask CareConnect4Me (1-866-279-8990) if you want the full terms; the patient assistance program above is the route built for Medicare patients.',
    },
    {
      question: 'Is there a charitable grant for Jardiance right now?',
      answer:
        'When we checked on August 26, 2026, Jardiance was listed by TotalAssist (type 2 diabetes, heart failure, CKD and cardiomyopathy funds) and HealthWell (Type 2 Diabetes and two heart-failure Medicare Access funds), but every one of those funds was closed to new applicants except TotalAssist\'s heart-failure health-equity fund, which is limited to certain zip codes. Sign up for fund notifications so you hear when one reopens.',
    },
    {
      question: 'Should I apply for Extra Help before Boehringer Cares?',
      answer:
        'Yes. Boehringer Cares is for Medicare patients who do not qualify for Extra Help, and BI may ask for proof of an Extra Help denial. If Social Security approves you for Extra Help, your copays fall on every covered drug; if it denies you, the letter supports your BI application. Either outcome moves you forward.',
    },
    {
      question: 'How is Jardiance assistance different from Farxiga assistance?',
      answer:
        'They are the same class of drug but different companies with different programs. AstraZeneca stopped accepting new Farxiga patients into AZ&Me on May 1, 2026, and generic dapagliflozin is now available; Boehringer Cares still lists Jardiance and there is no generic empagliflozin at the pharmacy counter. Never assume one manufacturer\'s program applies to another company\'s drug — see our <a href="/farxiga-assistance-program.html">Farxiga assistance guide</a> for its own routes.',
    },
    {
      question: 'Can my doctor\'s office apply for me?',
      answer:
        'The Boehringer Cares application has prescriber sections your doctor must complete and sign, and the prescription comes from the office — so your doctor\'s office is part of the process either way, and many practices have staff who handle these forms routinely. For TotalAssist and HealthWell you apply and the foundation verifies the diagnosis with your provider. AltaMedicare can walk through the forms with you, free.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications with no waitlist or queue, and HealthWell says closed funds reopen as funding is replenished. While you wait, the routes that do not depend on a fund balance are Boehringer Cares (for Medicare patients not eligible for Extra Help), Extra Help itself, and a formulary exception through your doctor. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['farxiga', 'ozempic', 'mounjaro', 'entresto'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/does-medicare-cover-jardiance.html', label: 'Does Medicare Cover Jardiance?', blurb: 'Coverage, tiers and prior authorization' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Jardiance' },
  ],
  sources: [
    label,
    dailyMed,
    biEligibility,
    biApplication,
    biPortal,
    jardianceSavings,
    SRC.cmsMfp2026,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.totalAssistFunds,
    SRC.totalAssistApply,
    SRC.totalAssistNotify,
    SRC.healthWellT2D,
    SRC.healthWellCHF,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup, 2026-08-26). Deliberately a
  // literal, not the shared CHECKED constant: re-verifying one medication
  // must move one date, not all sixteen. Bump this when you re-read this
  // record's sources; `checked` on each source records the research window.
  lastVerified: '2026-08-26',
  datePublished: '2026-06-30',
  video: {
    title: 'How to Apply for Jardiance Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of the Boehringer Cares application, the Extra Help step, and what to do if a fund is closed.',
  },
  description_meta:
    'How to find financial assistance for Jardiance (empagliflozin) on Medicare: the Boehringer Cares patient assistance program and its 2026 income limits, savings-card rules, TotalAssist and HealthWell fund status, and Medicare Extra Help — verified August 2026.',
};

// ---------------------------------------------------------------------------
// Eliquis (apixaban) — Bristol Myers Squibb / Pfizer. Researched 2026-08-26.
// Every program below was read on the official source cited with it.
// ---------------------------------------------------------------------------

import type { MedicationAssistanceRecord } from '../../types/MedicationAssistance';
import {
  CHECKED,
  SRC,
  TOTALASSIST_ELIGIBILITY,
  TOTALASSIST_REQUIREMENTS,
  TOTALASSIST_HOW_TO_APPLY,
  TOTALASSIST_PHONE,
  CHECKLIST_MEDICARE,
  standardAlternatives,
} from './shared';

const bmspaf = {
  title: 'Bristol Myers Squibb Patient Assistance Foundation (BMSPAF)',
  url: 'https://www.bmspaf.org/',
  publisher: 'Bristol Myers Squibb Patient Assistance Foundation',
  checked: CHECKED,
  supports: 'Eliquis covered; Medicare 3% rule; income limits; documents; review time; phone',
};
const bmsHelp = {
  title: 'Help paying for your medicine',
  url: 'https://www.bms.com/medicines/help-paying-for-your-medicine.html',
  publisher: 'Bristol Myers Squibb',
  checked: CHECKED,
  supports: 'BMSPAF pointer and phone',
};
const eliquisGov = {
  title: 'Eliquis — information for government-insured patients',
  url: 'https://www.eliquis.bmscustomerconnect.com/government-insured-patients',
  publisher: 'Bristol Myers Squibb / Pfizer',
  checked: CHECKED,
  supports: 'free trial for government-insured patients; Extra Help pointer',
};
const eliquisTerms = {
  title: 'Eliquis Co-pay Card and Free 30-Day Trial — terms and conditions',
  url: 'https://www.eliquis.bmscustomerconnect.com/content/dam/commercial/us/eliquisbmscustomerconnect/en/pdf/Eliquis_Terms_and_Conditions.pdf',
  publisher: 'Bristol Myers Squibb / Pfizer',
  checked: CHECKED,
  supports: 'copay-card Medicare exclusion; trial terms',
};
const eliquisDtp = {
  title: 'Eliquis Direct-to-Patient program',
  url: 'https://www.eliquis.bmscustomerconnect.com/assets/commercial/us/eliquisbmscustomerconnect/en/pdf/dtp_eliquis.pdf',
  publisher: 'Bristol Myers Squibb / Pfizer',
  checked: CHECKED,
  supports: '$345 per 30-day supply; Medicare Part D not eligible',
};
const eliquisPrice = {
  title: 'Eliquis pricing information',
  url: 'https://www.eliquis.bmscustomerconnect.com/price',
  publisher: 'Bristol Myers Squibb / Pfizer',
  checked: CHECKED,
  supports: 'list price; manufacturer statement on Medicare out-of-pocket',
};
const label = {
  title: 'Eliquis prescribing information',
  url: 'https://packageinserts.bms.com/pi/pi_eliquis.pdf',
  publisher: 'Bristol Myers Squibb',
  checked: CHECKED,
  supports: 'approved uses',
};
const totalAssistStroke = {
  title: 'TotalAssist — Stroke fund',
  url: 'https://totalassist.org/funds/stroke/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; Eliquis listed; stroke diagnosis codes only',
};
const totalAssistIdentified = {
  title: 'TotalAssist — identified-need funds (atrial fibrillation, DVT, PE)',
  url: 'https://totalassist.org/identified-need-funds/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'AFib/DVT/PE funds await donations; not open',
};

export const ELIQUIS: MedicationAssistanceRecord = {
  slug: 'eliquis',
  brandName: 'Eliquis',
  genericName: 'apixaban',
  manufacturer: 'Bristol Myers Squibb (marketed with Pfizer)',
  conditions: ['blood-clots', 'heart'],
  // apixaban — factor Xa inhibitor, i.e. an anticoagulant (Eliquis US PI).
  drugClass: ['anticoagulant'],
  description:
    'Eliquis is a twice-daily oral anticoagulant (a factor Xa inhibitor) used to prevent strokes in people with non-valvular atrial fibrillation and to treat or prevent blood clots. It is one of the most commonly prescribed brand-name drugs among Medicare beneficiaries.',
  usedFor: [
    'Reducing the risk of stroke and systemic embolism in adults with non-valvular atrial fibrillation',
    'Preventing deep vein thrombosis (DVT) after hip or knee replacement surgery',
    'Treating DVT and pulmonary embolism (PE), and reducing the risk of them recurring',
    'Treating venous thromboembolism in children after initial anticoagulant treatment',
  ],
  whyCostly:
    'Eliquis is a brand-name drug with no generic at the pharmacy counter in the United States, usually placed on a preferred or non-preferred brand tier with a copay or coinsurance every month. Bristol Myers Squibb lists the price of a 30-day supply at $346 and says Medicare patients pay on average about $51 a month — but that is an average, and people who have not reached their deductible or the $2,100 Part D cap can pay far more.',
  medicareContext:
    'Eliquis is generally covered under Medicare Part D and Medicare Advantage drug plans. It is one of the first ten drugs with a Medicare-negotiated Maximum Fair Price: $231.00 for a 30-day supply in 2026 (versus a $521 list price in 2023, per CMS). Bristol Myers Squibb notes the negotiated price is what Medicare pays and does not by itself set what you pay — your plan\'s tier and cost-sharing still decide your copay.',
  quickAnswer: {
    verdict:
      'Yes, there are real routes — but not a charitable grant right now. Bristol Myers Squibb\'s patient assistance foundation accepts Medicare patients who have already spent at least 3% of their yearly income on prescriptions, the free 30-day trial is open to Medicare patients, and Extra Help can lower the copay. Every charity fund we checked for atrial fibrillation, blood clots or stroke was closed or did not exist.',
    points: [
      'BMS Patient Assistance Foundation: free Eliquis for eligible patients — Medicare enrollees qualify only after spending 3% of yearly household income out of pocket on prescriptions this calendar year (income limit $47,880 single / $64,920 for two).',
      'Eliquis Co-pay Card: excludes Medicare Part D. The Free 30-Day Trial Offer is open to government-insured patients (first-time users, once per lifetime).',
      'Direct-to-Patient $345 cash price: Medicare Part D and Medicare Advantage drug-plan members are not eligible.',
      'Charitable grants: TotalAssist lists Eliquis only under its Stroke fund (closed); its AFib, DVT and PE funds are still awaiting donations. HealthWell and Good Days have no fund for these diagnoses.',
      'Medicare: negotiated Part D price of $231 (30-day) in 2026; Extra Help can cut a covered brand copay to about $12.65 if you qualify.',
    ],
  },
  programs: [
    {
      id: 'bmspaf',
      kind: 'manufacturer-pap',
      name: 'Bristol Myers Squibb Patient Assistance Foundation (BMSPAF)',
      operator: 'Bristol Myers Squibb Patient Assistance Foundation',
      status: 'open',
      statusNote: 'Accepting applications — no closure notice on bmspaf.org on August 26, 2026. Reviews typically take about 3 business days (longer in January–February). No application fee.',
      medicare: 'conditional',
      medicareNote:
        'Medicare enrollees may qualify if they have spent at least 3% of their yearly household income on out-of-pocket prescription costs in the same calendar year they apply (your pharmacy or Part D plan can print your year-to-date total). Applicants 65 and over, and anyone with income under 150% of the federal poverty level, must include a denial letter from Extra Help (LIS).',
      summary:
        'The foundation provides Eliquis free of charge to eligible patients who are uninsured for it or who have Medicare and meet the 3% spending rule. Eliquis has its own, higher income limit within the program.',
      covers: 'Eliquis at no cost for approved patients, shipped per the program\'s terms.',
      eligibility: [
        'No insurance coverage for Eliquis, OR Medicare plus at least 3% of yearly household income already spent out of pocket on prescriptions this calendar year',
        'Annual household income at or below $47,880 for one person or $64,920 for two (higher limits for larger households)',
        'Not eligible for Medicaid — Medicaid-eligible applicants must submit proof of denial',
        'Age 65+ or income under 150% FPL: proof of Extra Help (LIS) denial required',
      ],
      requirements: [
        'Proof of household income: federal tax return, or 1099s, Social Security statements, pension statements, or two consecutive pay stubs',
        'Medicare applicants: documentation of year-to-date out-of-pocket prescription spending',
        'Extra Help (LIS) denial letter if 65+ or under 150% FPL; Medicaid denial if applicable',
        'Signed patient agreement and consent; prescriber certification signed by your doctor; the Eliquis prescription attached',
      ],
      howToApply:
        'Download the application from bmspaf.org, complete and sign the patient section, ask your doctor to complete, sign and date the prescriber section, and send it to BMSPAF. Decisions are faxed to your doctor and mailed to you.',
      applyUrl: 'https://www.bmspaf.org/',
      applyLabel: 'BMSPAF application',
      phone: '1-800-736-0003',
      sources: [bmspaf, bmsHelp],
    },
    {
      id: 'eliquis-copay-card',
      kind: 'manufacturer-savings',
      name: 'Eliquis Co-pay Card',
      operator: 'Bristol Myers Squibb / Pfizer',
      status: 'open',
      statusNote: 'Active for commercially insured patients; activation and first use required by December 31, 2026.',
      medicare: 'excluded',
      medicareNote:
        'The terms exclude anyone with prescription coverage through a state or federal program, including Medicare Part D, Medicaid, Medigap, TRICARE, VA and DoD — and say patients who move from a commercial plan to one of these programs lose eligibility.',
      summary: 'A commercial copay offer: as little as $10 for a 30-day supply (or $10 for a first 90-day supply, then $30), up to $2,000 a year, for up to 24 months.',
      eligibility: ['Commercial prescription insurance', 'Not enrolled in any state or federal healthcare program'],
      howToApply: 'Commercially insured patients activate the card online or by calling Eliquis 360 Support. Not applicable to Medicare beneficiaries.',
      applyUrl: 'https://www.eliquis.bmscustomerconnect.com/printcardpage',
      applyLabel: 'Eliquis co-pay card terms',
      phone: '1-855-354-7847',
      sources: [eliquisTerms, SRC.oigCoupons],
    },
    {
      id: 'eliquis-free-trial',
      kind: 'manufacturer-savings',
      name: 'Eliquis Free 30-Day Trial Offer',
      operator: 'Bristol Myers Squibb / Pfizer (Eliquis 360 Support)',
      status: 'open',
      statusNote: 'Available through December 31, 2026 (activation and first use), one use per patient per lifetime.',
      medicare: 'eligible',
      medicareNote:
        'Unlike the co-pay card, the manufacturer states that government-insured patients — including Medicare — are eligible for the Free Trial Offer Card. The free supply cannot be counted toward your Part D out-of-pocket threshold.',
      summary: 'A free 30-day supply (up to 74 tablets) for people starting Eliquis for the first time. It is a one-time bridge, not ongoing assistance.',
      eligibility: [
        'Never filled a prescription for Eliquis before',
        'A valid 30-day Eliquis prescription, with more than 35 days of treatment planned',
        'One use per patient per lifetime',
      ],
      howToApply: 'Request the Free Trial Offer Card through Eliquis 360 Support (online or by phone) and present it with your prescription at the pharmacy.',
      applyUrl: 'https://www.eliquis.bmscustomerconnect.com/government-insured-patients',
      applyLabel: 'Eliquis — government-insured patients',
      phone: '1-855-354-7847',
      sources: [eliquisGov, eliquisTerms],
    },
    {
      id: 'eliquis-dtp',
      kind: 'manufacturer-direct',
      name: 'Eliquis Direct-to-Patient program',
      operator: 'Bristol Myers Squibb / Pfizer',
      status: 'open',
      statusNote: 'Active on August 26, 2026 at $345 per 30-day supply (60 tablets) with free home delivery.',
      medicare: 'excluded',
      medicareNote: 'The program states that patients participating in Medicare Part D or a Medicare Advantage prescription drug plan are not eligible. Payments do not count toward any deductible or out-of-pocket maximum.',
      summary: 'A manufacturer cash-price channel launched in 2025 for people paying out of pocket. Not an option for Part D enrollees.',
      covers: '$345 per 30-day supply of 60 tablets (other quantities priced on the program sheet).',
      eligibility: ['Not enrolled in Medicare Part D or a Medicare Advantage drug plan', 'Eligibility and terms set by the manufacturer'],
      howToApply: 'Enroll through the Eliquis Direct-to-Patient program page; not applicable to Medicare Part D members.',
      applyUrl: 'https://www.eliquis.bmscustomerconnect.com/assets/commercial/us/eliquisbmscustomerconnect/en/pdf/dtp_eliquis.pdf',
      applyLabel: 'Direct-to-Patient program details (PDF)',
      sources: [eliquisDtp],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Stroke fund (and identified-need AFib / DVT / PE funds)',
      operator: 'Patient Advocate Foundation',
      fund: 'Stroke (closed) · Atrial fibrillation, DVT, PE (awaiting donations)',
      status: 'closed',
      statusNote:
        'The Stroke fund was closed to new applicants on August 26, 2026. Atrial fibrillation, deep venous thrombosis and pulmonary embolism appear only as "identified need" funds — awaiting initial donations before they become TotalAssist funds.',
      medicare: 'eligible',
      medicareNote: 'The Stroke fund requires government insurance (Medicare, Medicaid or TRICARE) and a stroke diagnosis in treatment; atrial fibrillation alone does not qualify for it.',
      summary:
        'Eliquis is on TotalAssist\'s approved-medication list for the Stroke fund only. Being listed is not the same as being open, and there is currently no funded TotalAssist program for AFib or blood clots. Sign up for notifications so you hear if any of these opens.',
      covers: 'Stroke fund, when open: $1,000 guaranteed award, $1,500 maximum.',
      eligibility: ['Confirmed stroke diagnosis in treatment (the fund uses stroke diagnosis codes, not AFib)', ...TOTALASSIST_ELIGIBILITY],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: 'Sign up for fund notifications at totalassist.org/notify. If the Stroke fund opens and you have a stroke diagnosis: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistStroke, totalAssistIdentified, SRC.totalAssistFunds, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation',
      operator: 'HealthWell Foundation',
      status: 'not-found',
      statusNote: 'No HealthWell fund exists for atrial fibrillation, DVT/PE, stroke or anticoagulation (checked August 26, 2026). The Chronic Heart Failure – Medicare Access fund is closed and does not list Eliquis.',
      medicare: 'eligible',
      medicareNote: 'HealthWell accepts Medicare beneficiaries for the funds it does run — none of them cover Eliquis\'s diagnoses.',
      summary: 'We searched HealthWell\'s full disease-fund list for Eliquis\'s conditions and found no matching fund. HealthWell adds and reopens funds as funding allows, so this can change.',
      eligibility: [],
      howToApply: 'Check the HealthWell Disease Funds page periodically for a new atrial-fibrillation or blood-clot fund.',
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds',
      phone: '(800) 675-8416',
      sources: [SRC.healthWellFunds, SRC.healthWellCHF],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no program for atrial fibrillation, blood clots, stroke or cardiovascular disease (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Eliquis\'s diagnoses.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://www.mygooddays.org/for-patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [{ title: 'Good Days — diseases covered', url: 'https://www.mygooddays.org/for-patients/diseases-covered/', publisher: 'Good Days', checked: CHECKED, supports: 'no AFib/VTE/stroke program' }],
    },
  ],
  charitableSummary:
    'We could not identify a currently open charitable fund covering Eliquis. TotalAssist lists Eliquis only under its Stroke fund, which was closed on August 26, 2026; its atrial fibrillation, DVT and PE funds exist only as "identified need" funds still awaiting donations. HealthWell and Good Days have no fund for AFib, blood clots or stroke. Other options remain: the BMS Patient Assistance Foundation, the free 30-day trial, and Medicare Extra Help.',
  extraHelpNote:
    'For Eliquis, Extra Help is the route with the widest door: BMSPAF requires Medicare patients to spend 3% of their income first, and the charity funds are closed — but Extra Help has no such gate and lowers every covered drug\'s copay.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Eliquis in August 2026 the realistic order is manufacturer foundation → free trial (if you are new to Eliquis) → Extra Help, because no charity fund for AFib or blood clots is open.',
      bullets: [
        'On Medicare and already spending heavily on prescriptions this year → BMS Patient Assistance Foundation (free Eliquis if you meet the 3% rule and the income limit).',
        'Starting Eliquis for the first time → Eliquis Free 30-Day Trial Offer (open to Medicare patients, once per lifetime).',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'Stroke diagnosis → sign up for TotalAssist Stroke-fund notifications (closed when checked).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Eliquis appears in TotalAssist\'s medication index, but only under the Stroke fund, and that fund was closed when we checked. BMSPAF and the free trial were open. Funding can change without notice.',
      bullets: [
        'BMSPAF: bmspaf.org shows the current application and eligibility; call 1-800-736-0003 if in doubt.',
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for the Stroke fund; AFib, DVT and PE are identified-need funds, not open funds.',
        'HealthWell: no fund for these diagnoses at all.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The BMSPAF rules are specific for Medicare patients — read them before you gather paperwork:',
      bullets: [
        'BMSPAF: Medicare enrollees must have spent at least 3% of yearly household income on out-of-pocket prescriptions in the same calendar year; income at or below $47,880 (one person) or $64,920 (two people); not Medicaid-eligible; and if you are 65+ or under 150% FPL you need an Extra Help denial letter.',
        'Free 30-Day Trial: first-time Eliquis user with a 30-day prescription and more than 35 days of treatment planned; government-insured patients are eligible.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
        'Direct-to-Patient $345 price: Medicare Part D and Medicare Advantage drug-plan members are not eligible.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'BMSPAF is a paper application with attachments, so collect these first:',
      bullets: [
        'Proof of household income: federal tax return, or 1099s, Social Security or pension statements, or two consecutive pay stubs.',
        'Year-to-date out-of-pocket prescription spending — ask your pharmacy or Part D plan for a printout.',
        'Extra Help (LIS) denial letter if you are 65+ or under 150% FPL; Medicaid denial letter if you might be Medicaid-eligible.',
        'Medicare card and Part D / Medicare Advantage drug-plan card.',
        'Your Eliquis prescription and your prescriber\'s name, phone and fax — the doctor signs the prescriber certification.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'BMSPAF: you fill in and sign the patient section; your doctor completes, signs and dates the prescriber section and attaches the prescription; then it goes to BMSPAF by mail or fax.',
        'Free 30-Day Trial: you request the offer card through Eliquis 360 Support (1-855-354-7847) and present it at the pharmacy with your prescription.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'BMSPAF typically reviews applications within about 3 business days (longer in January and February); the decision is faxed to your doctor and mailed to you.',
        'Free trial: the card is used at the pharmacy — no waiting period.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'Sign up for TotalAssist notifications so you hear if an AFib, DVT/PE or Stroke fund opens — there is no waitlist or queue.',
        'If BMSPAF denied you for the 3% rule, keep your receipts: once your out-of-pocket prescription spending crosses 3% of income later in the year, you can apply.',
        'Apply for Extra Help even if you think you earn too much — the limits are higher than many people expect.',
        'Ask your doctor\'s office about a formulary exception or a lower tier on your plan, and compare Part D plans in the fall.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Year-to-date out-of-pocket prescription spending', note: 'BMSPAF, for the 3% rule — your pharmacy or plan can print it' },
    { item: 'Extra Help (LIS) denial letter', note: 'BMSPAF, if you are 65+ or under 150% FPL' },
    { item: 'Medicaid denial letter', note: 'BMSPAF, if you might be Medicaid-eligible' },
    { item: 'Signed prescriber certification', note: 'BMSPAF — your doctor completes and signs it' },
  ],
  ifUnavailable: [
    {
      text: 'If you were denied by BMSPAF under the 3% rule, track your prescription receipts and re-apply once your out-of-pocket spending crosses 3% of yearly household income in the same calendar year.',
      href: 'https://www.bmspaf.org/',
      label: 'BMSPAF',
    },
    ...standardAlternatives('Eliquis'),
  ],
  faqs: [
    {
      question: 'Can Medicare help pay for Eliquis?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans generally cover Eliquis, and since January 1, 2026 Medicare pays a negotiated Maximum Fair Price of $231 for a 30-day supply. Your copay depends on your plan\'s tier and cost-sharing, and Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there an Eliquis patient assistance program for people on Medicare?',
      answer:
        'Yes. The Bristol Myers Squibb Patient Assistance Foundation provides Eliquis free to eligible patients, and Medicare enrollees can qualify — but only after spending at least 3% of their yearly household income on out-of-pocket prescription costs in the same calendar year, with income at or below $47,880 (one person) or $64,920 (two). Applicants 65 and over must include an Extra Help denial letter. Call 1-800-736-0003 or visit bmspaf.org.',
    },
    {
      question: 'Can I use the Eliquis co-pay card with Medicare?',
      answer:
        'No. The co-pay card\'s terms exclude anyone with prescription coverage through Medicare Part D, Medicaid, Medigap, TRICARE, VA or DoD. The Free 30-Day Trial Offer is different: the manufacturer states government-insured patients are eligible, one time per lifetime, when starting Eliquis for the first time.',
    },
    {
      question: 'Is there a charitable grant for Eliquis right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Eliquis only under its Stroke fund, which was closed; its atrial fibrillation, DVT and PE funds are "identified need" funds still waiting for donations. HealthWell has no fund for these diagnoses, and neither does Good Days. Sign up for TotalAssist notifications and check back — funds open when money arrives.',
    },
    {
      question: 'What is the $345 Eliquis price?',
      answer:
        'It is the manufacturer\'s Direct-to-Patient cash price for a 30-day supply (60 tablets) with free home delivery. The program states that patients in Medicare Part D or a Medicare Advantage drug plan are not eligible, and that payments do not count toward any deductible or out-of-pocket maximum. For most Medicare beneficiaries the plan\'s negotiated price and copay will be the better route.',
    },
    {
      question: 'Is there a generic for Eliquis?',
      answer:
        'Not at U.S. pharmacies as of our August 2026 check — Eliquis remains a brand-only medication here, which is part of why it was selected for Medicare price negotiation. Ask your pharmacist if this changes; we will update this page when it does.',
    },
    {
      question: 'Can my doctor\'s office apply for me?',
      answer:
        'The BMSPAF application has a prescriber section your doctor must complete, sign and date, and the decision is faxed to the office — so the practice is part of the process either way. Many offices have staff who handle these applications routinely. AltaMedicare can also walk through the forms with you, free.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications when a fund opens, with no waitlist or queue. While you wait, the routes that do not depend on a fund balance are the BMS foundation (3% rule), Extra Help, a formulary exception through your doctor, and a Part D plan comparison in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['xarelto', 'entresto', 'farxiga', 'jardiance'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/does-medicare-cover-eliquis.html', label: 'Does Medicare Cover Eliquis?', blurb: 'Coverage, tiers and prior authorization' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Eliquis' },
  ],
  sources: [
    label,
    bmspaf,
    bmsHelp,
    eliquisGov,
    eliquisTerms,
    eliquisDtp,
    eliquisPrice,
    SRC.cmsMfp2026,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    totalAssistStroke,
    totalAssistIdentified,
    SRC.totalAssistNotify,
    SRC.healthWellFunds,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup, 2026-08-26). Deliberately a
  // literal, not the shared CHECKED constant: re-verifying one medication
  // must move one date, not all sixteen. Bump this when you re-read this
  // record's sources; `checked` on each source records the research window.
  lastVerified: '2026-08-26',
  datePublished: '2026-06-30',
  video: {
    title: 'How to Apply for Eliquis Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of the BMS foundation application, the 3% rule for Medicare patients, and what to do if you are denied.',
  },
  description_meta:
    'How to find financial assistance for Eliquis (apixaban) on Medicare: the BMS Patient Assistance Foundation and its 3% rule, the free 30-day trial, charitable fund status, and Medicare Extra Help — verified August 2026.',
};

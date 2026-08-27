// ---------------------------------------------------------------------------
// Skyrizi (risankizumab-rzaa) — AbbVie. Independently researched 2026-08-26.
// Every program below was read on the official source cited with it. Batch 3
// (spec §24 #14) — a NEW page.
//
// Skyrizi shares myAbbVie Assist with Rinvoq — and, until July 1, 2026, with
// Humira. The Humira record documents that closure. Here the finding is the
// opposite one, and it was checked separately rather than inherited: AbbVie's
// available-programs page lists SKYRIZI among the medicines still in the
// program, and the Skyrizi patient application was revised in June 2026.
//
// RESEARCH NOTE (access): www.abbvie.com serves a Cloudflare block page; the
// apex host abbvie.com serves the same pages, and AbbVie's application PDFs
// are readable under abbvie.com/content/dam/.
//
// The Medicare rule here is a trap worth stating plainly: myAbbVie Assist
// accepts Medicare, but a Part D enrollee who takes free medicine gets no
// true-out-of-pocket credit for it, and AbbVie notifies the drug plan.
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
  title: 'Skyrizi prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7148c8eb-b39e-e20a-6494-a6df82392858',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'interleukin-23 antagonist; four approved indications; dosing schedule',
};
const abbviePrograms = {
  title: 'AbbVie Patient Assistance — available programs (SKYRIZI listed)',
  url: 'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: 'SKYRIZI among the myAbbVie Assist medicines; Medicare accepted by the program',
};
const abbvieSkyriziApp = {
  title: 'myAbbVie Assist SKYRIZI patient application (PDF, S-APP1-26F-2, June 2026)',
  url: 'https://www.abbvie.com/content/dam/abbvie-com2/pdfs/pap/skyrizi-patient-assistance-application.pdf',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: '150% FPL / Extra Help denial rule; Part D terms of participation; program phone; Bridge Program is commercial-only',
};
const abbvieOnlineOverview = {
  title: 'AbbVie Patient Access Support — application overview',
  url: 'https://www.abbvie.com/patients/patient-support/patient-assistance/online-application-overview.html',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: 'how income is assessed; accepted income documents; program phone and hours',
};
const skyriziCost = {
  title: 'Ways to Save on SKYRIZI — SKYRIZI Complete',
  url: 'https://www.skyrizi.com/skyrizi-complete/save-on-skyrizi-costs',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: 'savings card terms and government-insurance exclusion; Extra Help pointer for Medicare patients',
};
const totalAssistPso = {
  title: 'TotalAssist — Psoriasis fund',
  url: 'https://totalassist.org/funds/psoriasis/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $2,500 award; Skyrizi listed',
};
const totalAssistIbd = {
  title: 'TotalAssist — Inflammatory bowel disease (IBD) fund',
  url: 'https://totalassist.org/funds/inflammatory-bowel-disease-ibd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $10,400 award; Skyrizi listed',
};
const totalAssistUc = {
  title: 'TotalAssist — Ulcerative colitis (UC) fund',
  url: 'https://totalassist.org/funds/ulcerative-colitis-uc/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $3,000 award; Skyrizi listed',
};
const healthWellAutoimmune = {
  title: 'HealthWell Foundation — AutoImmune – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/autoimmune-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $2,800 maximum; 500% FPL; Skyrizi Pen, Pfs and On-body Injector listed',
};
const healthWellIbd = {
  title: 'HealthWell Foundation — Inflammatory Bowel Disease – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/inflammatory-bowel-disease-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $2,100 maximum; 500% FPL; Skyrizi and risankizumab-rzaa listed',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no psoriasis, psoriatic arthritis, Crohn\'s disease or ulcerative colitis program',
};

export const SKYRIZI: MedicationAssistanceRecord = {
  slug: 'skyrizi',
  brandName: 'Skyrizi',
  genericName: 'risankizumab-rzaa',
  manufacturer: 'AbbVie',
  conditions: ['autoimmune'],
  // "SKYRIZI is an interleukin-23 antagonist" (label) — a biologic.
  drugClass: ['biologic'],
  description:
    'Skyrizi is an injected interleukin-23 antagonist used for moderate-to-severe plaque psoriasis, active psoriatic arthritis, and moderately to severely active Crohn\'s disease and ulcerative colitis. Maintenance doses are given every eight or twelve weeks depending on the condition, which changes how the cost lands across a Medicare year.',
  usedFor: [
    'Moderate-to-severe plaque psoriasis in adults and children 6 and older who are candidates for systemic therapy or phototherapy',
    'Active psoriatic arthritis in adults and children 6 and older',
    'Moderately to severely active Crohn\'s disease in adults',
    'Moderately to severely active ulcerative colitis in adults',
  ],
  whyCostly:
    'Skyrizi is a brand-only biologic with no generic or biosimilar, and Part D plans place it on a specialty tier where you pay a percentage of a high price rather than a flat copay. Because doses are spaced weeks apart, a single fill can be large enough to carry you a long way toward the annual out-of-pocket cap in one go — which is exactly when the Medicare Prescription Payment Plan is worth knowing about.',
  medicareContext:
    'Skyrizi is generally covered under Medicare Part D and Medicare Advantage drug plans, usually on a specialty tier and often with prior authorization or step therapy. When it is given as an infusion for Crohn\'s disease induction, that part may fall under Part B instead — ask your prescriber which benefit each stage of your treatment runs through, because the assistance rules differ. Part D out-of-pocket costs are capped at $2,100 in 2026 and can be spread across the year with the Medicare Prescription Payment Plan. Skyrizi is not on the Medicare-negotiated drug lists for 2026 or 2027.',
  quickAnswer: {
    verdict:
      'Yes, and the manufacturer route is open. AbbVie\'s myAbbVie Assist program lists Skyrizi among its available medicines and accepts people with Medicare — with one condition that catches Part D enrollees, and one consequence worth understanding before you enrol. The savings card excludes Medicare, and every autoimmune and bowel-disease charity fund we checked was closed to new applicants.',
    points: [
      'myAbbVie Assist: Skyrizi is on AbbVie\'s current available-medicines list, and the Skyrizi patient application was revised in June 2026. AbbVie describes the program as being for people who are "uninsured, receiving coverage through Medicare, or your health insurance isn\'t enough to cover the cost."',
      'The Medicare condition: if you have Medicare and household income below 150% of the federal poverty level, AbbVie will not enrol you unless you have applied for Extra Help and been denied — and you must send the denial letter with your application. Above 150% FPL, no denial letter is needed.',
      'The consequence to weigh: AbbVie\'s terms say a Part D enrollee must not buy Skyrizi through their Medicare plan while enrolled, gets no true-out-of-pocket (TrOOP) credit for the free medicine, and that myAbbVie Assist will tell your drug plan you are receiving it outside the Part D benefit. Free medicine does not move you toward the $2,100 cap.',
      'SKYRIZI Complete Savings Card: commercially insured patients only. AbbVie\'s terms exclude Medicare including Part D, Medicare Advantage, Medigap, Medicaid, TRICARE, DoD and VA.',
      'AbbVie\'s Bridge Program is not a Medicare route either — it is limited to commercially insured patients aged 63 or younger who have a coverage denial on file.',
      'Charitable grants: TotalAssist lists Skyrizi under its psoriasis, psoriatic arthritis, ulcerative colitis and IBD funds, and HealthWell lists it on the AutoImmune and Inflammatory Bowel Disease Medicare Access funds. All were closed to new applicants when we checked.',
    ],
  },
  programs: [
    {
      id: 'myabbvie-assist',
      kind: 'manufacturer-pap',
      name: 'myAbbVie Assist (AbbVie Patient Access Support)',
      operator: 'AbbVie',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. SKYRIZI appears on AbbVie\'s available-programs list of myAbbVie Assist medicines, and the Skyrizi-specific application is dated June 2026. (Checked separately from Humira, which AbbVie removed from the same program on July 1, 2026.)',
      medicare: 'conditional',
      medicareNote:
        'Medicare beneficiaries may apply — AbbVie\'s own description names Medicare — but one rule and one consequence apply. The rule: "Patients with Medicare and income below 150% FPL will not be eligible for myAbbVie Assist unless you have applied and been denied for that Program," meaning Extra Help; include the denial letter. Above 150% FPL no denial letter is needed. The consequence: while enrolled you must not purchase Skyrizi under your Medicare plan, you may not seek TrOOP credit for what the program provides, and AbbVie will inform your Part D plan that you are receiving the medicine outside the Part D benefit.',
      summary:
        'AbbVie\'s patient assistance program provides free medicine to qualifying patients who are uninsured, on Medicare, or underinsured. Income is assessed electronically under the Fair Credit Reporting Act; if the program cannot verify it that way, it asks for documents. Patients whose commercial plan requires them to apply here as a condition of coverage — an alternate funding program — are not eligible.',
      covers: 'Skyrizi at no cost to approved patients for a calendar-year term.',
      eligibility: [
        'Uninsured, covered by Medicare, or with insurance that is not enough to cover the cost of the medicine',
        'A prescription for Skyrizi from your healthcare provider',
        'Medicare beneficiaries with household income below 150% of the federal poverty level: proof that you applied for Extra Help and were denied',
        'Household income within the program\'s limits. AbbVie does not publish a percentage-of-poverty-level figure on these pages — it assesses income electronically and asks for documents if it cannot — so ask the program where your household stands rather than assuming a threshold from another manufacturer.',
        'Not enrolled through an alternate funding program required by a commercial plan',
      ],
      requirements: [
        'Completed patient sections of the Skyrizi application, with signature and date, plus a separate signed HIPAA authorization',
        'Your healthcare provider completes and signs the provider page',
        'Copies of the front and back of all insurance cards',
        'Consent for an electronic income check under the Fair Credit Reporting Act; if income cannot be determined that way, your most recent federal tax return, or pay stubs for at least two pay periods, a Social Security or disability statement, a W-2 or a 1099-R',
        'Medicare beneficiaries below 150% FPL: the Extra Help denial letter',
      ],
      howToApply:
        'Apply online through AbbVie Patient Access Support, or print the Skyrizi application, complete your sections, have your prescriber complete theirs, and fax or mail it — you and your provider may send your parts separately. Call 1-800-222-6885, Monday–Friday 7:00am–7:00pm Central, for help at any point. There is no fee.',
      applyUrl: 'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html',
      applyLabel: 'myAbbVie Assist — available programs and applications',
      phone: '1-800-222-6885',
      sources: [abbviePrograms, abbvieSkyriziApp, abbvieOnlineOverview],
    },
    {
      id: 'savings-card',
      kind: 'manufacturer-savings',
      name: 'SKYRIZI Complete Savings Card',
      operator: 'AbbVie',
      status: 'limited',
      statusNote: 'Running for commercially insured patients on August 26, 2026, and closed to anyone with government drug coverage.',
      medicare: 'excluded',
      medicareNote:
        'AbbVie\'s terms say the co-pay assistance program "is not available to patients receiving prescription reimbursement under any federal, state, or government-funded insurance programs (for example, Medicare [including Part D], Medicare Advantage, Medigap, Medicaid, TRICARE, Department of Defense, or Veterans Affairs programs)." Skyrizi.com directs Medicare patients to Extra Help instead.',
      summary:
        'A commercial copay card, listed here so you can see why it does not apply to you. If you have Medicare, the AbbVie route that does apply is myAbbVie Assist, described above.',
      eligibility: [
        'Commercial insurance coverage for Skyrizi',
        'Not receiving prescription reimbursement under Medicare, Medicare Advantage, Medigap, Medicaid, TRICARE, DoD or VA programs',
      ],
      howToApply: 'Not applicable if you have Medicare. Commercially insured patients request a card through SKYRIZI Complete.',
      applyUrl: 'https://www.skyrizi.com/skyrizi-complete/save-on-skyrizi-costs',
      applyLabel: 'SKYRIZI Complete — ways to save',
      sources: [skyriziCost, SRC.oigCoupons],
    },
    {
      id: 'abbvie-bridge',
      kind: 'manufacturer-direct',
      name: 'AbbVie Bridge Program — not a Medicare route',
      operator: 'AbbVie',
      status: 'not-found',
      statusNote:
        'Running, but structurally closed to Medicare beneficiaries. Recorded because patients hear "AbbVie will supply the drug free while you appeal" and reasonably assume it applies to them.',
      medicare: 'excluded',
      medicareNote:
        'AbbVie\'s terms limit the Bridge Program to patients aged 63 or younger with commercial insurance coverage, and state that it "is not available to patients whose medications are reimbursed in whole or in part by Medicare, Medicaid, TRICARE or any other federal or state program."',
      summary:
        'A commercial-insurance bridge: for patients whose plan has denied coverage after a prior authorization, AbbVie supplies the medicine free for up to two years while appeals continue, with an appeal required every 180 days. Neither the age limit nor the insurance limit can be waived for a Medicare beneficiary.',
      eligibility: [],
      howToApply: 'Not applicable if you have Medicare. If your Part D plan has denied Skyrizi, the equivalent step is a formulary exception and the Medicare appeals process — ask your prescriber\'s office to start it.',
      applyUrl: 'https://www.abbvie.com/content/dam/abbvie-com2/pdfs/pap/skyrizi-patient-assistance-application.pdf',
      applyLabel: 'AbbVie program terms (PDF)',
      sources: [abbvieSkyriziApp],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — autoimmune and bowel-disease funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Psoriasis · Psoriatic arthritis · Ulcerative colitis · Inflammatory bowel disease',
      status: 'closed',
      statusNote:
        'Every TotalAssist fund matching a Skyrizi indication was closed to new applicants on August 26, 2026 — psoriasis, psoriatic arthritis, ulcerative colitis and inflammatory bowel disease. Skyrizi is on each of those funds\' approved-medication lists.',
      medicare: 'eligible',
      medicareNote: 'When open, these funds require government insurance (Medicare, Medicaid or TRICARE) that covers your Skyrizi costs.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (which absorbed the PAN Foundation\'s funds on July 1, 2026) lists Skyrizi under four funds covering its indications. A listing is not an open fund. Sign up to be notified the moment one reopens; TotalAssist has no waitlist or queue.',
      covers:
        'When open, the guaranteed award differs by fund: inflammatory bowel disease $10,400; psoriatic arthritis $3,500; ulcerative colitis $3,000; psoriasis $2,500. One grant per condition.',
      eligibility: TOTALASSIST_ELIGIBILITY,
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [SRC.totalAssistFunds, totalAssistPso, totalAssistIbd, totalAssistUc, SRC.totalAssistMedIndex, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — AutoImmune and IBD Medicare Access funds',
      operator: 'HealthWell Foundation',
      fund: 'AutoImmune – Medicare Access · Inflammatory Bowel Disease – Medicare Access',
      status: 'closed',
      statusNote:
        'Both funds were "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. The AutoImmune fund lists Skyrizi Pen, Skyrizi Pfs and the Skyrizi On-body Injector; the IBD fund lists Skyrizi and risankizumab-rzaa.',
      medicare: 'eligible',
      medicareNote: 'Both are Medicare Access funds — for Medicare patients only. HealthWell requires insurance that pays part of the cost of the drug; a discount card does not count.',
      summary:
        'HealthWell lists Skyrizi on its AutoImmune and Inflammatory Bowel Disease Medicare Access funds. HealthWell states that closed funds reopen as funding is replenished, and offers real-time alerts for each fund.',
      covers: 'When open: AutoImmune – Medicare Access up to $2,800; Inflammatory Bowel Disease – Medicare Access up to $2,100. Both pay as a pharmacy card, with household income up to 500% of the federal poverty level.',
      eligibility: [
        'Medicare coverage that pays part of the cost of Skyrizi',
        'Household income up to 500% of the federal poverty level, adjusted for household size and cost of living',
        'A qualifying autoimmune or inflammatory bowel disease diagnosis, verified by your provider',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/autoimmune-medicare-access/',
      applyLabel: 'HealthWell AutoImmune fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellAutoimmune, healthWellIbd, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no psoriasis, psoriatic arthritis, Crohn\'s disease or ulcerative colitis program (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Skyrizi\'s indications.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'Six charitable funds list Skyrizi — four at TotalAssist (psoriasis, psoriatic arthritis, ulcerative colitis and inflammatory bowel disease) and two at HealthWell (AutoImmune and Inflammatory Bowel Disease Medicare Access) — and on August 26, 2026 every one was closed to new applicants. Good Days has no matching fund. Being listed is not the same as being open, so sign up for alerts at both foundations. For Skyrizi the difference from most records on this site is that the manufacturer route did not depend on any of that: myAbbVie Assist was open and accepts Medicare beneficiaries, subject to the Extra Help rule described above.',
  extraHelpNote:
    'For Skyrizi, Extra Help is not just an alternative to myAbbVie Assist — it is a gate in front of it. If your household income is below 150% of the federal poverty level, AbbVie requires you to apply for Extra Help first and will only consider you after a denial, with the denial letter attached. So the sequence is: apply for Extra Help, and if you are approved you have the stronger benefit anyway, because it lowers the cost of every covered drug rather than one.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Skyrizi on Medicare there is a live manufacturer route, so the order is straightforward:',
      bullets: [
        'Household income below 150% of the poverty level → apply for Medicare Extra Help first. AbbVie requires it, and if you are approved you hold the better benefit.',
        'On Medicare, denied Extra Help or income above 150% FPL → myAbbVie Assist for free Skyrizi, weighing the TrOOP consequence described on the card below.',
        'Psoriasis, psoriatic arthritis, ulcerative colitis or Crohn\'s disease → sign up for TotalAssist and HealthWell alerts; every fund was closed when we checked.',
        'Commercial insurance rather than Medicare → the SKYRIZI Complete Savings Card, or the Bridge Program if your plan has denied coverage. Medicare rules out both.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Skyrizi appears in TotalAssist\'s medication index and on both HealthWell fund pages, and it is on AbbVie\'s available-medicines list. Only the last of those was actually open when we checked. Verify each before you spend time on paperwork:',
      bullets: [
        'AbbVie: the available-programs page lists the medicines currently in myAbbVie Assist. AbbVie removes medicines from that list — it did so for Humira on July 1, 2026 — so check that Skyrizi is still on it.',
        'TotalAssist: the fund list at totalassist.org/funds shows "Open" or "Closed" for every fund.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program sets its own rules. For Skyrizi on August 26, 2026, these are the ones that decide your application:',
      bullets: [
        'myAbbVie Assist: uninsured, on Medicare, or underinsured; a Skyrizi prescription; and, if you are on Medicare with income below 150% FPL, an Extra Help denial letter. AbbVie assesses income electronically rather than publishing a threshold.',
        'TotalAssist (when open): government insurance covering Skyrizi; income at or below 500% FPL adjusted for local cost of living; a matching diagnosis in treatment.',
        'HealthWell (when open): Medicare that pays part of the cost; income up to 500% FPL; a provider-verified diagnosis.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'The AbbVie application asks for more paperwork than most. Have these ready:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card — AbbVie wants copies of the front and back of all insurance cards.',
        'Your most recent federal tax return, or pay stubs for at least two pay periods, a Social Security or disability statement, a W-2 or a 1099-R, in case the electronic income check cannot verify your income.',
        'If your income is below 150% FPL: your Extra Help denial letter from Social Security.',
        'Your Skyrizi prescription details and your prescriber\'s name, office phone and fax — they complete their own page.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'myAbbVie Assist: you complete the patient sections, sign the terms of participation and sign the HIPAA authorization separately; your prescriber completes and signs the provider page. Apply online, or fax or mail the form — you and your provider may send your parts separately.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone; Patient Advocate Foundation verifies your diagnosis with your provider.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'myAbbVie Assist: AbbVie begins assessing eligibility once both the patient and provider pages are in. Call 1-800-222-6885, Monday–Friday 7am–7pm Central, to check where an application stands. Approved enrollment runs for a calendar-year term.',
        'Extra Help: Social Security notifies you by mail. If you are denied, keep the letter — it is the document AbbVie needs.',
        'TotalAssist (when open): you learn immediately whether you are approved; proof of income is due within 30 days.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'Sign up for TotalAssist and HealthWell alerts so you hear when an autoimmune or IBD fund reopens — there is no waitlist or queue.',
        'If myAbbVie Assist turned you down because you qualify for Extra Help, that is the route it was pointing you to — and it is worth more, because it lowers every covered drug.',
        'If your Part D plan has denied Skyrizi, ask your prescriber\'s office to request a formulary exception; the Medicare appeals process is the Part D equivalent of AbbVie\'s commercial Bridge Program.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments — particularly useful when doses are weeks apart and each fill is large.',
        'Compare Part D and Medicare Advantage drug plans in the fall; specialty tiers and prior-authorization rules differ sharply from plan to plan.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Copies of the front and back of all insurance cards', note: 'myAbbVie Assist' },
    { item: 'Extra Help denial letter from Social Security', note: 'myAbbVie Assist — required if you have Medicare and income below 150% FPL' },
    { item: 'Federal tax return, pay stubs, Social Security statement, W-2 or 1099-R', note: 'myAbbVie Assist — only if the electronic income check cannot verify your income' },
  ],
  ifUnavailable: [
    {
      text: 'If AbbVie asked for an Extra Help denial letter, start there — apply through Social Security, and keep whatever letter comes back either way.',
      href: 'https://www.ssa.gov/medicare/part-d-extra-help',
      label: 'Apply for Extra Help at SSA.gov',
    },
    ...standardAlternatives('Skyrizi'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Skyrizi?',
      answer:
        'Generally yes. Medicare Part D and Medicare Advantage drug plans cover Skyrizi, usually on a specialty tier and often with prior authorization or step therapy. If your treatment includes an infusion — the induction stage for Crohn\'s disease — that portion may be billed under Part B instead, so ask your prescriber which benefit each stage runs through. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Skyrizi patient assistance program for people on Medicare?',
      answer:
        'Yes. AbbVie\'s myAbbVie Assist program lists Skyrizi among its available medicines, and AbbVie describes the program as being for people who are "uninsured, receiving coverage through Medicare, or your health insurance isn\'t enough to cover the cost of my medicine." One rule applies specifically to Medicare: if your household income is below 150% of the federal poverty level, you are not eligible unless you have applied for Extra Help and been denied, and you must include the denial letter. Apply through AbbVie Patient Access Support or call 1-800-222-6885, Monday–Friday 7am–7pm Central.',
    },
    {
      question: 'If AbbVie gives me Skyrizi free, does that count toward my Part D out-of-pocket cap?',
      answer:
        'No, and this is worth understanding before you enrol. AbbVie\'s terms of participation require that you not purchase Skyrizi under your Medicare plan while enrolled, that you not submit claims or seek true out-of-pocket (TrOOP) credit for the medicine provided, and they state that myAbbVie Assist will inform your Medicare drug plan that you are receiving the medication at no cost outside the Part D benefit. Free medicine is genuinely free — it simply does not move you toward the $2,100 cap for your other drugs.',
    },
    {
      question: 'Can I use the SKYRIZI Complete Savings Card with Medicare?',
      answer:
        'No. AbbVie\'s terms state the copay assistance program is not available to patients receiving prescription reimbursement under any federal, state or government-funded insurance program, and name Medicare including Part D, Medicare Advantage, Medigap, Medicaid, TRICARE, DoD and VA. Skyrizi.com points Medicare patients toward Extra Help instead. Federal anti-kickback rules are the reason — see the key terms lower on this page.',
    },
    {
      question: 'AbbVie stopped covering Humira. Does that affect Skyrizi?',
      answer:
        'No. AbbVie removed HUMIRA from myAbbVie Assist for new patients effective July 1, 2026, but the program itself continues and Skyrizi is still on AbbVie\'s available-medicines list — its patient application was revised in June 2026. AbbVie even names Skyrizi as one of the treatments that may be available through myAbbVie Assist for patients affected by the Humira change. Because AbbVie has shown it will remove a medicine from the list, check that Skyrizi is still on it before you apply.',
    },
    {
      question: 'Is there a charitable grant for Skyrizi right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Skyrizi under its psoriasis, psoriatic arthritis, ulcerative colitis and inflammatory bowel disease funds, and HealthWell lists it on the AutoImmune and Inflammatory Bowel Disease Medicare Access funds. All six were closed to new applicants. Good Days has no matching fund. Sign up for alerts at both foundations and check back; funds reopen when money arrives.',
    },
    {
      question: 'Is there a generic or biosimilar for Skyrizi?',
      answer:
        'No. Risankizumab-rzaa is a brand-only biologic with no generic and no biosimilar marketed in the United States. If cost is the problem, the routes on this page — myAbbVie Assist, Extra Help, a formulary exception, and a plan comparison in the fall — are where the movement is. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['rinvoq', 'humira', 'enbrel', 'dupixent'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: 'The program AbbVie asks you to apply to first' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Skyrizi' },
  ],
  sources: [
    label,
    abbviePrograms,
    abbvieSkyriziApp,
    abbvieOnlineOverview,
    skyriziCost,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.totalAssistFunds,
    totalAssistPso,
    totalAssistIbd,
    totalAssistUc,
    SRC.totalAssistMedIndex,
    SRC.totalAssistNotify,
    healthWellAutoimmune,
    healthWellIbd,
    SRC.healthWellFunds,
    goodDays,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup, 2026-08-26). Deliberately a
  // literal, not the shared CHECKED constant: re-verifying one medication
  // must move one date, not all sixteen. Bump this when you re-read this
  // record's sources; `checked` on each source records the research window.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Skyrizi Assistance',
    status: 'coming-soon',
    description: 'A walkthrough of the myAbbVie Assist application, the Extra Help denial letter Medicare patients below 150% FPL need first, and what enrolling costs you in Part D out-of-pocket credit.',
  },
  description_meta:
    'How to find financial assistance for Skyrizi (risankizumab-rzaa) on Medicare: the myAbbVie Assist program and its Extra Help rule, why free medicine earns no Part D out-of-pocket credit, why the savings card excludes Medicare, autoimmune fund status, and Extra Help — verified August 2026.',
};

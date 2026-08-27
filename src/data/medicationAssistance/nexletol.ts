// ---------------------------------------------------------------------------
// Nexletol (bempedoic acid) — Esperion Therapeutics. Independently researched
// 2026-08-26. Every program below was read on the official source cited with
// it. Batch 6 (spec §24 Phase 4 list, the closing four) — a NEW slug.
//
// The shape of this medication's assistance picture, in one line: the only
// manufacturer help Esperion publishes is a commercial co-pay card that
// excludes Medicare by name, and the one route that is actually OPEN to a
// Medicare beneficiary today is TotalAssist's Hypercholesterolemia fund.
//
// Research gap carried honestly: nexletol.com renders its co-pay and NEXSTEP
// pages client-side, so the patient-facing copy could not be read directly.
// The co-pay terms below come from Esperion's own HCP site, which publishes the
// full Terms & Conditions as static text, and from the card administrator's
// enrollment page. No manufacturer patient assistance program (free drug) is
// named anywhere on those pages — recorded as an honest negative, not omitted.
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
  title: 'Nexletol prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=88d06d89-a3da-40b4-b273-8f4f7d56c4c9',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'approved uses; "an adenosine triphosphate-citrate lyase (ACL) inhibitor"; 180 mg film-coated tablet; Esperion Therapeutics, Inc. (rev. 1/2026)',
};
const dailymedBempedoic = {
  title: 'DailyMed label search — bempedoic acid',
  url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=bempedoic',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'only NEXLETOL and NEXLIZET are labelled — no generic bempedoic acid product',
};
const esperionAccess = {
  title: 'NEXLIZET & NEXLETOL access and savings (Terms & Conditions)',
  url: 'https://www.nexlizethcp.com/access-savings/',
  publisher: 'Esperion Therapeutics',
  checked: CHECKED,
  supports:
    'Co-Pay Card eligibility and full terms; "not enrolled in any state-, federal-, or government-funded healthcare program, including but not limited to Medicare, Medicaid, Medigap, TRICARE…"; "as little as $10 per fill"; one-year enrollment; NEXSTEP Navigator; program phone',
};
const copayEnrollment = {
  title: 'NEXLIZET & NEXLETOL Co-Pay Card enrollment',
  url: 'https://www.activatethecard.com/7883/welcome',
  publisher: 'Esperion Therapeutics (co-pay card program)',
  checked: CHECKED,
  supports:
    'enrollment certification that the patient is not enrolled in government-provided insurance "including, but not limited to, Medicare (including Part D), Medicare Advantage, Medicaid, Medigap, TRICARE… or Veterans Affairs"',
};
const nexstepSupport = {
  title: 'NEXLETOL — co-pay and patient support',
  url: 'https://www.nexletol.com/co-pay-and-support',
  publisher: 'Esperion Therapeutics',
  checked: CHECKED,
  supports:
    'the patient support routes Esperion publishes: NEXSTEP Patient Support and the Co-Pay Card; Esperion Medical Information 1-833-377-7633',
};
const totalAssistHyperchol = {
  title: 'TotalAssist — Hypercholesterolemia fund',
  url: 'https://totalassist.org/funds/hypercholesterolemia/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Open; "Nexletol (Bempedoic Acid)" and "Nexlizet (Bempedoic Acid/Ezetimibe)" on the approved-medication list; $1,900 guaranteed / $3,800 maximum award; government insurance; 500% FPL adjusted for cost of living',
};
const totalAssistCadHe = {
  title: 'TotalAssist — Coronary artery disease (CAD) health equity fund',
  url: 'https://totalassist.org/funds/coronary-artery-disease-cad-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; Nexletol listed; $1,000 guaranteed / $1,500 maximum award',
};
const healthWellHyperchol = {
  title: 'HealthWell Hypercholesterolemia – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/hypercholesterolemia-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'Closed to new patients; Nexletol, Nexlizet and bempedoic acid on the covered list; $2,500 maximum award; forecast average grant $1,230; 500% FPL; Medicare-only fund',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no hypercholesterolemia, cholesterol or cardiovascular program on the fund list',
};
const cmsSelectedDrugFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file (May 26, 2026) — Nexletol and bempedoic acid appear in no row for initial price applicability year 2026, 2027 or 2028',
};
const trumpRx = {
  title: 'TrumpRx — browse all medicines',
  url: 'https://trumprx.gov/browse',
  publisher: 'TrumpRx.gov',
  checked: CHECKED,
  supports: 'Nexletol not listed',
};

export const NEXLETOL: MedicationAssistanceRecord = {
  slug: 'nexletol',
  brandName: 'Nexletol',
  genericName: 'bempedoic acid',
  manufacturer: 'Esperion Therapeutics',
  // Both keys are earned by the label: it carries a standalone cardiovascular
  // risk-reduction indication as well as the LDL-lowering one, the same pattern
  // that gave Praluent `cholesterol` + `heart` in Batch 5. (Leqvio has only
  // `cholesterol` because its cardiovascular sentence is context, not an
  // indication — the distinction is deliberate.)
  conditions: ['cholesterol', 'heart'],
  // Label Highlights (rev. 1/2026): "NEXLETOL is an adenosine triphosphate-citrate
  // lyase (ACL) inhibitor". Not a statin and not a PCSK9 medicine — a new class
  // key was added for it in this batch rather than stretching an existing one.
  drugClass: ['acl-inhibitor'],
  description:
    'Nexletol is a once-daily cholesterol tablet for people who cannot take a statin, or cannot take enough of one. It blocks an enzyme called ATP-citrate lyase one step above the enzyme statins block, and because it is switched on in the liver rather than in muscle it is used by many people who could not tolerate statins.',
  usedFor: [
    'Reducing the risk of major adverse cardiovascular events — cardiovascular death, heart attack, stroke or coronary revascularization — in adults at increased risk who are unable to take recommended statin therapy',
    'Lowering LDL cholesterol, with diet and exercise, in adults with hypercholesterolemia, including heterozygous familial hypercholesterolemia (HeFH)',
    'Used with other LDL-lowering therapies, or alone when they are not possible',
  ],
  whyCostly:
    'Nexletol is a brand-only tablet: DailyMed lists no generic bempedoic acid, only Esperion\'s Nexletol and the combination Nexlizet. Statins and ezetimibe are inexpensive generics, so Part D plans usually put Nexletol on a brand tier, often behind step therapy that asks you to try a statin first — which is the very thing a Nexletol candidate could not tolerate. Esperion\'s only published discount is a commercial co-pay card that excludes Medicare by name, so a Part D beneficiary pays the plan\'s brand cost-sharing until the annual out-of-pocket cap is reached.',
  medicareContext:
    'Nexletol is a self-administered tablet, so Medicare covers it under Part D or a Medicare Advantage drug plan rather than Part B — expect a brand tier, and check for prior authorization or step therapy on your plan\'s formulary. It has not been selected for Medicare price negotiation: neither Nexletol nor bempedoic acid appears anywhere in CMS\'s selected-drug and Maximum Fair Price file for 2026, 2027 or 2028. What does apply is the Part D out-of-pocket cap ($2,100 in 2026), Medicare Extra Help if your income and resources are limited, and the Medicare Prescription Payment Plan if you want to spread the cost across the year.',
  quickAnswer: {
    verdict:
      'Yes — but not from the manufacturer. Esperion publishes a co-pay card that excludes Medicare by name and no patient assistance program that gives Nexletol away, so for a Medicare beneficiary the open route is a charitable grant: TotalAssist\'s Hypercholesterolemia fund was accepting applications on August 26, 2026 and lists Nexletol, with a $1,900 guaranteed award. HealthWell\'s matching Medicare fund lists Nexletol too but was closed.',
    points: [
      'TotalAssist Hypercholesterolemia fund: OPEN on August 26, 2026, $1,900 guaranteed and $3,800 maximum, for people with Medicare, Medicaid or TRICARE and income at or below 500% of the federal poverty level adjusted for local cost of living. Nexletol is on its approved-medication list.',
      'NEXLIZET & NEXLETOL Co-Pay Card: commercial insurance only. Esperion\'s terms exclude "Medicare (including Part D), Medicare Advantage, Medicaid, Medigap, TRICARE" and VA — and say you may not use it even if you ask to be processed as a commercial patient.',
      'No manufacturer patient assistance program: nothing on Esperion\'s published support pages provides free Nexletol on an income test. Recorded as a negative finding, not an omission.',
      'HealthWell Hypercholesterolemia – Medicare Access fund: lists Nexletol, $2,500 maximum, but closed to new patients when we checked. Sign up for its alerts.',
      'Medicare: not a negotiated-price drug for 2026, 2027 or 2028; Part D costs capped at $2,100 in 2026; Extra Help can cut a covered brand copay to about $12.65 if you qualify.',
    ],
  },
  programs: [
    {
      id: 'totalassist-hyperchol',
      kind: 'charitable',
      name: 'TotalAssist — Hypercholesterolemia fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Hypercholesterolemia (Nexletol is also listed on the closed Coronary artery disease health equity fund)',
      status: 'open',
      statusNote:
        'Open and accepting applications on August 26, 2026, with an instant approval decision online. Fund balances change without notice — check the fund page before you count on it.',
      medicare: 'eligible',
      medicareNote:
        'This fund requires government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are exactly who it is for.',
      summary:
        'A copay and cost-sharing grant for people with a hypercholesterolemia diagnosis. "Nexletol (Bempedoic Acid)" is named on the fund\'s approved-medication list, alongside Nexlizet and the statins, ezetimibe and PCSK9 medicines.',
      covers:
        '$1,900 guaranteed award and up to $3,800 maximum, usable for medication copays, coinsurance and deductibles, health-insurance premiums and other qualifying expenses. One grant per condition — you cannot also take the CAD health equity grant for the same diagnosis.',
      eligibility: [
        'Confirmed hypercholesterolemia diagnosis, in treatment, starting treatment within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/funds/hypercholesterolemia/',
      applyLabel: 'TotalAssist Hypercholesterolemia fund',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistHyperchol, totalAssistCadHe, SRC.totalAssistEligibility, SRC.totalAssistApply, SRC.totalAssistFunds],
    },
    {
      id: 'nexletol-copay',
      kind: 'manufacturer-savings',
      name: 'NEXLIZET & NEXLETOL Co-Pay Card',
      operator: 'Esperion Therapeutics',
      status: 'open',
      statusNote:
        'Active for commercially insured patients on August 26, 2026. Enrollment lasts one year and must be renewed each year; Esperion determines final eligibility.',
      medicare: 'excluded',
      medicareNote:
        'Esperion\'s terms: a patient may be eligible only if they are "not enrolled in any state-, federal-, or government-funded healthcare program, including but not limited to Medicare, Medicaid, Medigap, TRICARE of the Department of Defense, or the Department of Veterans Affairs (VA) healthcare program." The terms add that a patient enrolled in such a program "may not use the… Co-Pay Card program even if they elect to be processed as a commercial or discount insurance plan patient," and that anyone who joins one mid-enrolment must report it and loses eligibility.',
      summary:
        'A commercial copay offer: eligible patients with commercial prescription coverage for Nexletol "may pay as little as $10 per fill." It is not insurance, cannot be combined with another coupon or discount card, and is not accepted at VA pharmacies.',
      covers: 'Part of the commercial copay for Nexletol — not applicable to Medicare cost-sharing.',
      eligibility: [
        'Age 18 or older and a U.S. resident',
        'Commercial prescription drug insurance that covers Nexletol and does not reimburse the entire cost',
        'Not enrolled in Medicare (including Part D), Medicare Advantage, Medicaid, Medigap, TRICARE or VA healthcare',
        'Re-enrolment required every year',
      ],
      howToApply:
        'Commercially insured patients enrol at NexCopay.com or by calling 855-699-8814 (8am–8pm ET, Monday–Friday). Not a route for Medicare beneficiaries — if you have Part D, go to the charitable funds and Extra Help instead.',
      applyUrl: 'https://www.nexlizethcp.com/access-savings/',
      applyLabel: 'Co-Pay Card terms and conditions',
      phone: '855-699-8814',
      sources: [esperionAccess, copayEnrollment, SRC.oigCoupons],
    },
    {
      id: 'esperion-pap',
      kind: 'manufacturer-pap',
      name: 'Esperion patient assistance program — none found',
      operator: 'Esperion Therapeutics',
      status: 'not-found',
      statusNote:
        'On August 26, 2026 the patient support Esperion publishes for Nexletol is the NEXSTEP program — a Co-Pay Card for commercially insured patients and a NEXSTEP Navigator access service reached through an Esperion representative. No income-based program supplying Nexletol free of charge appears on those pages.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable — we found no manufacturer patient assistance program for Nexletol to state a Medicare rule. If Esperion adds one, it would appear on the NEXSTEP support pages cited here.',
      summary:
        'An honest negative. Many brand medicines have a manufacturer program that gives the drug away to people under an income limit; for Nexletol we could not find one. That is why the charitable funds and Extra Help carry the weight on this page.',
      eligibility: [],
      howToApply:
        'Nothing to apply to today. Esperion\'s Medical Information line is 1-833-377-7633 (Monday–Friday, 9am–7pm ET) if you want to ask directly whether a patient assistance program has been added since this page was verified.',
      applyUrl: 'https://www.nexletol.com/patient-support-program-and-resources',
      applyLabel: 'NEXSTEP Patient Support',
      phone: '1-833-377-7633',
      sources: [nexstepSupport, esperionAccess],
    },
    {
      id: 'esperion-direct',
      kind: 'manufacturer-direct',
      name: 'Manufacturer cash price — none found',
      operator: 'Esperion Therapeutics',
      status: 'not-found',
      statusNote:
        'We found no direct-to-patient or self-pay price for Nexletol on August 26, 2026, and Nexletol is not among the medicines listed on TrumpRx.',
      medicare: 'unknown',
      medicareNote: 'Not applicable — there is no cash-pay programme to have a Medicare rule.',
      summary:
        'Some manufacturers now sell direct at a fixed cash price. For Nexletol we did not find one, so comparing your plan\'s brand cost-sharing against a pharmacy discount price is the only cash comparison available.',
      eligibility: [],
      howToApply: 'Not applicable. If Esperion adds a self-pay option it would be announced on the Nexletol support pages.',
      applyUrl: 'https://trumprx.gov/browse',
      applyLabel: 'TrumpRx medicine list',
      sources: [trumpRx, nexstepSupport],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Hypercholesterolemia – Medicare Access fund',
      operator: 'HealthWell Foundation',
      fund: 'Hypercholesterolemia – Medicare Access',
      status: 'closed',
      statusNote:
        'The fund was "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Nexletol, Nexlizet and bempedoic acid are all on its covered-medication list.',
      medicare: 'eligible',
      medicareNote:
        'A Medicare Access fund — for Medicare patients only. Premium assistance through the fund requires Medicare Part B; HealthWell refers patients without Medicare to manufacturer programs.',
      summary:
        'HealthWell covers Nexletol under its Medicare-only hypercholesterolemia fund. HealthWell says replenished funds reopen "as quickly as possible" and offers email or text alerts for each fund.',
      covers:
        'When open: up to $2,500 per grant for prescription copays, or a Medicare Part B premium; HealthWell forecasts an average grant of about $1,230 for this fund. Household income up to 500% of the federal poverty level, adjusted for household size and cost of living.',
      eligibility: [
        'Medicare coverage that pays part of the cost of Nexletol',
        'Household income up to 500% of the federal poverty level (HealthWell\'s own table — do not carry another program\'s dollar figures across)',
        'Hypercholesterolemia diagnosis verified by a physician, nurse practitioner or physician assistant',
        'Treatment in the United States',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/hypercholesterolemia-medicare-access/',
      applyLabel: 'HealthWell fund page (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellHyperchol, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote:
        'Good Days\' published disease list on August 26, 2026 contained no hypercholesterolemia, cholesterol or general cardiovascular program. Its only cardiopulmonary fund is Pulmonary Arterial Hypertension, which was closed.',
      medicare: 'unknown',
      medicareNote:
        'Good Days does accept Medicare beneficiaries for the diseases it covers — but it covers no diagnosis that would apply to Nexletol, so no Medicare rule is engaged.',
      summary:
        'An honest negative, checked so you do not spend an afternoon on a third foundation. Good Days is worth re-checking only if it adds a cardiovascular fund.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows each fund and whether it is open.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'One fund was open. TotalAssist\'s Hypercholesterolemia fund was accepting applications on August 26, 2026, lists Nexletol on its approved-medication list, and pays a $1,900 guaranteed award (up to $3,800) toward copays, coinsurance, deductibles and premiums for people with Medicare, Medicaid or TRICARE and income at or below 500% of the federal poverty level adjusted for local cost of living. HealthWell\'s Hypercholesterolemia – Medicare Access fund also lists Nexletol but was closed to new patients, as was TotalAssist\'s Coronary artery disease health equity fund. Good Days has no cholesterol fund at all. Because Esperion publishes no patient assistance program, these funds and Medicare Extra Help are the routes that matter here — apply to the open one first, and set alerts on the closed ones.',
  extraHelpNote:
    'Extra Help and a charitable grant are not mutually exclusive here — Esperion has no patient assistance program whose rules would be tripped by qualifying for Extra Help, unlike AstraZeneca\'s AZ&Me. If your income and resources are limited, apply for Extra Help as well as to TotalAssist: Extra Help lowers the copay on every covered drug, not just Nexletol.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Nexletol on Medicare in August 2026 the order is: TotalAssist first, because it is open and it is the only route paying money toward your Part D cost-sharing today.',
      bullets: [
        'Medicare (or Medicaid/TRICARE) plus a hypercholesterolemia diagnosis and income at or below 500% FPL → TotalAssist Hypercholesterolemia fund, open when we checked.',
        'Limited income and resources → Medicare Extra Help through Social Security, in addition to the grant.',
        'Commercial insurance instead of Medicare → the NEXLIZET & NEXLETOL Co-Pay Card, which Medicare enrollees cannot use.',
        'Nothing to check at the manufacturer: Esperion publishes no patient assistance program for Nexletol.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Fund status is the most perishable fact on this page. TotalAssist was open and HealthWell was closed on August 26, 2026, and either can change without notice.',
      bullets: [
        'TotalAssist: the Hypercholesterolemia fund page shows "Open" or "Closed" and the current award amounts.',
        'HealthWell: the Disease Funds page shows each fund\'s status; sign up for alerts on the Hypercholesterolemia – Medicare Access fund.',
        'There is no manufacturer program to check for Nexletol — if Esperion adds one it will appear on the NEXSTEP support pages.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program applies its own rules and its own income table. These are the ones that decide a Nexletol application:',
      bullets: [
        'TotalAssist: government insurance that covers Nexletol; income at or below 500% of the federal poverty level adjusted for your regional cost-of-living index; confirmed hypercholesterolemia in treatment (or beginning within 60 days, or treated in the past 6 months); legal U.S. resident treated in the U.S.',
        'HealthWell (when open): Medicare; income up to 500% FPL on HealthWell\'s own table; diagnosis verified by your provider\'s signature.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
        'Co-Pay Card: commercial insurance only — being on Medicare disqualifies you outright.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'The TotalAssist application takes about 15 minutes if you have these to hand:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your hypercholesterolemia diagnosis and its date — TotalAssist needs the exact date if you were diagnosed within the past 6 months.',
        'Your prescriber\'s name and contact details, and your Nexletol prescription details.',
        'Household size and annual household income, plus proof (tax return, Social Security or pension statements) — TotalAssist gives you 30 days after approval to supply it.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'TotalAssist: you (the patient) apply online in about 15 minutes, or by phone on 866-512-3861, Monday–Friday 8:30am–5:30pm ET. Patient Advocate Foundation verifies the diagnosis with your provider.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'TotalAssist: you learn immediately online whether you are approved, and can use the grant right away; proof of income is due within 30 days.',
        'HealthWell (when open): approval creates a 12-month grant cycle with a pharmacy card.',
        'Extra Help: Social Security notifies you by mail, and your Part D plan then applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'A closed fund is a timing problem, not a final answer:',
      bullets: [
        'Sign up for TotalAssist and HealthWell alerts — there is no waitlist or queue, so the notification is what gets you in.',
        'Apply for Extra Help even if you think you earn too much; its limits are higher than most people expect and it is free to apply.',
        'Ask your prescriber about a formulary exception, or whether ezetimibe or another lipid-lowering option on your plan\'s preferred tier is reasonable for you — several are inexpensive generics.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments (it does not lower the total).',
        'Compare Part D plans in the fall — Nexletol\'s tier and any step-therapy rule differ from plan to plan.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Date of your hypercholesterolemia diagnosis', note: 'TotalAssist needs the exact date if it was within the past 6 months' },
    { item: 'Statin history — which statins you tried and what happened', note: 'not required by the funds, but plans often ask for it before approving Nexletol' },
  ],
  ifUnavailable: [
    {
      text: 'If the TotalAssist fund has closed since this page was verified, set a notification for it and apply for Extra Help in the meantime — Extra Help does not depend on a fund balance.',
      href: 'https://totalassist.org/notify/',
      label: 'TotalAssist notifications',
    },
    ...standardAlternatives('Nexletol'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Nexletol?',
      answer:
        'Nexletol is a tablet you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan — typically on a brand tier, and often with prior authorization or step therapy asking you to try a statin first. Out-of-pocket Part D costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay down to about $12.65.',
    },
    {
      question: 'Is there a Nexletol patient assistance program for people on Medicare?',
      answer:
        'We could not find one. On August 26, 2026 the only manufacturer support Esperion published for Nexletol was the NEXSTEP program — a co-pay card for commercially insured patients and a Navigator access service — with no income-based program supplying the medication free. That is why the route for a Medicare beneficiary is a charitable grant: TotalAssist\'s Hypercholesterolemia fund was open and lists Nexletol.',
    },
    {
      question: 'Can I use the Nexletol co-pay card with Medicare?',
      answer:
        'No. Esperion\'s terms limit the card to patients "not enrolled in any state-, federal-, or government-funded healthcare program, including but not limited to Medicare, Medicaid, Medigap, TRICARE… or the Department of Veterans Affairs," and add that you may not use it even if you ask to be processed as a commercial or discount-plan patient. Federal anti-kickback rules are why nearly every manufacturer copay card works this way.',
    },
    {
      question: 'Is there a charitable grant for Nexletol right now?',
      answer:
        'Yes, as of August 26, 2026. TotalAssist\'s Hypercholesterolemia fund was open, lists "Nexletol (Bempedoic Acid)" on its approved-medication list, and pays a $1,900 guaranteed award up to a $3,800 maximum for people with government insurance and income at or below 500% of the federal poverty level adjusted for local cost of living. HealthWell\'s Hypercholesterolemia – Medicare Access fund lists Nexletol too but was closed to new patients. Fund balances change without notice — check before you rely on it.',
    },
    {
      question: 'Is there a generic for Nexletol?',
      answer:
        'Not on August 26, 2026. A DailyMed search for bempedoic acid returns only Esperion\'s Nexletol and the combination product Nexlizet — no generic labeller. If cost is the obstacle, ask your prescriber whether ezetimibe or another lipid-lowering medicine on your plan\'s preferred tier would work alongside or instead of Nexletol.',
    },
    {
      question: 'Is Nexletol part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price data file contains no row for Nexletol or bempedoic acid for initial price applicability year 2026, 2027 or 2028. Your Nexletol cost is set by your plan\'s tier and cost-sharing, not by a negotiated price.',
    },
    {
      question: 'What happens if the fund closes before I apply?',
      answer:
        'TotalAssist offers text, email or automated-call notifications when a fund opens, and there is no waitlist or queue — the alert is what gets you in. HealthWell offers alerts on each fund page. While you wait, the routes that do not depend on a fund balance are Extra Help, a formulary exception through your doctor, the Medicare Prescription Payment Plan, and a Part D plan comparison in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['repatha', 'praluent', 'leqvio'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Nexletol' },
  ],
  sources: [
    label,
    dailymedBempedoic,
    esperionAccess,
    copayEnrollment,
    nexstepSupport,
    totalAssistHyperchol,
    totalAssistCadHe,
    SRC.totalAssistEligibility,
    SRC.totalAssistNotify,
    healthWellHyperchol,
    SRC.healthWellFunds,
    goodDays,
    cmsSelectedDrugFile,
    trumpRx,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup). A literal, never the shared
  // CHECKED constant: re-verifying one medication must move one date. It
  // legitimately equals CHECKED here because the research ran on that day.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Nexletol Assistance',
    status: 'coming-soon',
    description:
      'A short walkthrough of the TotalAssist Hypercholesterolemia application, why the Esperion co-pay card is closed to Medicare, and what to do while the HealthWell fund is closed.',
  },
  description_meta:
    'How to find financial assistance for Nexletol (bempedoic acid) on Medicare: the open TotalAssist hypercholesterolemia grant, why the Esperion co-pay card excludes Medicare, HealthWell fund status and Extra Help — verified August 2026.',
};

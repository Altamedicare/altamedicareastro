// ---------------------------------------------------------------------------
// Nexlizet (bempedoic acid and ezetimibe) — Esperion Therapeutics.
// Independently researched 2026-08-26. Batch 8 — a NEW slug.
//
// Nexlizet shares Esperion's entire manufacturer layer with Nexletol — the co-pay
// card is literally called the "NEXLIZET & NEXLETOL Co-Pay Card" — and this record
// does not pretend to a difference that does not exist. It earns its page on two
// facts that are specific to the combination product:
//
//  1. HALF OF NEXLIZET IS A CHEAP GENERIC. Nexlizet is bempedoic acid plus
//     ezetimibe in one tablet. Bempedoic acid is brand-only; ezetimibe has been
//     generic for years and appears on TotalAssist's hypercholesterolemia fund in
//     its own right. So a Medicare beneficiary facing brand-tier cost-sharing on
//     Nexlizet has an option a Nexletol patient does not: ask whether taking
//     Nexletol and generic ezetimibe as two tablets costs less than the
//     combination. That is a real, actionable arithmetic question, and it is the
//     single most useful thing on this page.
//  2. AN OPEN FUND. TotalAssist's Hypercholesterolemia fund was ACCEPTING
//     APPLICATIONS on the checked date, at $1,900 guaranteed and $3,800 maximum,
//     and it lists "Nexlizet (Bempedoic Acid/Ezetimibe)" by name. Open funds are
//     rare in this batch — most records here document closures — so this one is
//     the lead rather than a footnote.
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
  title: 'Nexlizet prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3fa2108c-0300-47b8-9d34-f762af7c93c6',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'NEXLIZET (bempedoic acid and ezetimibe) tablet, film coated; Esperion Therapeutics, Inc.',
};
const dailymedBempedoic = {
  title: 'DailyMed label index — bempedoic acid and ezetimibe',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=bempedoic+acid+and+ezetimibe',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'a single labelled bempedoic acid / ezetimibe combination product — Esperion\'s NEXLIZET. No generic combination is labelled, and no generic bempedoic acid exists in any form',
};
const esperionAccess = {
  title: 'NEXLIZET & NEXLETOL access and savings (Terms & Conditions)',
  url: 'https://www.nexlizethcp.com/access-savings/',
  publisher: 'Esperion Therapeutics',
  checked: CHECKED,
  supports:
    'the Co-Pay Card eligibility and full terms — a patient may be eligible only if "not enrolled in any state-, federal-, or government-funded healthcare program, including but not limited to Medicare, Medicaid, Medigap, TRICARE of the Department of Defense, or the Department of Veterans Affairs (VA) healthcare program"; "as little as $10 per fill"; one-year enrolment requiring annual renewal; the NEXSTEP Navigator access service; and the program phone numbers',
};
const copayEnrollment = {
  title: 'NEXLIZET & NEXLETOL Co-Pay Card enrollment',
  url: 'https://www.activatethecard.com/7883/welcome',
  publisher: 'Esperion Therapeutics (co-pay card program)',
  checked: CHECKED,
  supports: 'the enrolment route for the single co-pay card covering both Nexlizet and Nexletol',
};
const totalAssistHyperchol = {
  title: 'TotalAssist — Hypercholesterolemia fund',
  url: 'https://totalassist.org/funds/hypercholesterolemia/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'OPEN and accepting applications; "Nexlizet (Bempedoic Acid/Ezetimibe)" on the approved-medication list, alongside "Nexletol (Bempedoic Acid)", plain "Ezetimibe", Leqvio, Praluent, the Repatha products and a long list of statins; $1,900 guaranteed / $3,800 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const healthWellHyperchol = {
  title: 'HealthWell Hypercholesterolemia – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/hypercholesterolemia-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'Closed to new patients; Nexletol, Nexlizet and bempedoic acid on the covered list; $2,500 maximum award; 500% FPL; a Medicare-only fund',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'the complete fund list — "Hypercholesterolemia - Medicare Access" CLOSED',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no hypercholesterolemia, cholesterol or cardiovascular program',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Nexlizet, Nexletol or bempedoic acid row for initial price applicability year 2026, 2027 or 2028',
};

export const NEXLIZET: MedicationAssistanceRecord = {
  slug: 'nexlizet',
  brandName: 'Nexlizet',
  genericName: 'bempedoic acid / ezetimibe',
  manufacturer: 'Esperion Therapeutics',
  // `cholesterol` and `heart`, matching the Nexletol record. TotalAssist lists
  // Nexlizet on the Hypercholesterolemia fund, which the `cholesterol` key
  // matches, and bempedoic acid products carry cardiovascular risk-reduction
  // language that the `heart` key covers.
  conditions: ['cholesterol', 'heart'],
  // 'acl-inhibitor' — the same class key the Nexletol record carries, since
  // bempedoic acid is the active half that defines the class. Ezetimibe is a
  // cholesterol-absorption inhibitor rather than a second class needing a key:
  // adding one would create a vocabulary entry used by a single record and would
  // not change a single fund match.
  drugClass: ['acl-inhibitor'],
  description:
    'Nexlizet is a single tablet combining two cholesterol medicines: bempedoic acid, which blocks an enzyme the liver uses to make cholesterol a step above where statins act, and ezetimibe, which reduces how much cholesterol your gut absorbs. That two-in-one construction is exactly what makes its cost question different from Nexletol\'s, because one of the two ingredients has been generic for years.',
  usedFor: [
    'Lowering LDL cholesterol, alongside diet, in adults with hypercholesterolemia — including heterozygous familial hypercholesterolemia — used with other LDL-lowering therapies or alone when they are not possible',
  ],
  whyCostly:
    'Nexlizet is a brand-only tablet with no generic combination — DailyMed labels only Esperion\'s product — and Part D plans generally place it on a brand tier, often behind step therapy asking you to try a statin first, which is frequently the very thing a Nexlizet candidate could not tolerate. What makes its cost picture unusual is the composition: half of Nexlizet is ezetimibe, an inexpensive generic available on its own. So the brand-tier price you are being charged covers one ingredient that has no alternative and one that does.',
  medicareContext:
    'Nexlizet is a tablet you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, usually on a brand tier with step therapy. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Nexlizet, Nexletol or bempedoic acid row for 2026, 2027 or 2028. Esperion publishes no patient assistance program that gives Nexlizet away on an income test, and its co-pay card excludes Medicare by name — so for a Part D beneficiary the manufacturer offers no route at all. That makes the charitable and Medicare-side options the whole picture, and fortunately one of them was open when we checked. Part D out-of-pocket costs are capped at $2,100 in 2026, and Extra Help lowers cost-sharing for people with limited income and resources.',
  quickAnswer: {
    verdict:
      'Yes — and unusually for this batch, through a fund that was actually open. TotalAssist\'s Hypercholesterolemia fund was accepting applications on August 26, 2026, lists Nexlizet by name, and pays a $1,900 guaranteed award up to $3,800. Esperion itself offers a Medicare beneficiary nothing: its co-pay card excludes Medicare and it publishes no patient assistance program.',
    points: [
      'TotalAssist Hypercholesterolemia fund: OPEN on August 26, 2026. $1,900 guaranteed, $3,800 maximum, for people with Medicare, Medicaid or TRICARE and income at or below 500% of the federal poverty level adjusted for local cost of living. Nexlizet is on its approved-medication list.',
      'NEXLIZET & NEXLETOL Co-Pay Card: one card covering both products, commercial insurance only. Esperion\'s terms exclude "Medicare, Medicaid, Medigap, TRICARE... or the Department of Veterans Affairs (VA) healthcare program".',
      'No manufacturer patient assistance program: nothing on Esperion\'s published support pages gives Nexlizet away on an income test. Recorded as a negative finding, not an omission.',
      'The arithmetic worth running: half of Nexlizet is ezetimibe, a cheap generic. Ask your prescriber and plan whether Nexletol plus separate generic ezetimibe costs less than the combination tablet.',
      'HealthWell Hypercholesterolemia – Medicare Access fund: lists Nexlizet, $2,500 maximum, but was closed to new patients. Sign up for its alerts.',
      'Not a Medicare-negotiated drug for 2026, 2027 or 2028; Part D costs capped at $2,100 in 2026; Extra Help can cut a covered brand copay to about $12.65.',
    ],
  },
  programs: [
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Hypercholesterolemia fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Hypercholesterolemia',
      status: 'open',
      statusNote:
        'ACCEPTING APPLICATIONS on August 26, 2026, with a $1,900 guaranteed award and a $3,800 maximum. This is one of very few open funds encountered anywhere in this expansion, so it is the first thing to act on rather than the last.',
      medicare: 'eligible',
      medicareNote:
        'This fund requires government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are not merely permitted here; government insurance is a condition of eligibility. Given that Esperion\'s own co-pay card excludes Medicare, this fund is the route that exists precisely for the readers the manufacturer turns away.',
      summary:
        '"Nexlizet (Bempedoic Acid/Ezetimibe)" is named on the approved-medication list, alongside Nexletol, plain ezetimibe, Leqvio, Praluent, the Repatha products and a long list of statins. Because it was open, an application can produce a decision immediately rather than a wait for a fund to reopen.',
      covers:
        '$1,900 guaranteed award and up to $3,800 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed hypercholesterolemia diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/funds/hypercholesterolemia/',
      applyLabel: 'Apply to the TotalAssist Hypercholesterolemia fund',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistHyperchol, SRC.totalAssistEligibility, SRC.totalAssistApply],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Hypercholesterolemia – Medicare Access fund',
      operator: 'HealthWell Foundation',
      fund: 'Hypercholesterolemia – Medicare Access',
      status: 'closed',
      statusNote:
        'Closed to new patients on August 26, 2026, with a $2,500 maximum award when open. Nexletol, Nexlizet and bempedoic acid are all on its covered list.',
      medicare: 'eligible',
      medicareNote:
        'This is a Medicare-only fund — built specifically for Medicare beneficiaries, with a 500% federal poverty level income test. It was closed when we checked, but its alerts are worth setting because a second cholesterol fund reopening would give you a choice of two.',
      summary:
        'A Medicare-specific cholesterol fund that covers Nexlizet, closed when we checked. Worth an alert alongside the open TotalAssist fund, since the two have different award structures and you may prefer one.',
      covers: 'When open: up to $2,500 for copays, coinsurance, deductibles and health-insurance premiums for hypercholesterolemia.',
      eligibility: [
        'A confirmed hypercholesterolemia diagnosis, verified by your prescriber',
        'Medicare coverage — this is a Medicare Access fund',
        'Income at or below 500% of the federal poverty level',
        ...HEALTHWELL_REQUIREMENTS,
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/hypercholesterolemia-medicare-access/',
      applyLabel: 'HealthWell Hypercholesterolemia fund and alerts',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellHyperchol, healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'nexlizet-copay',
      kind: 'manufacturer-savings',
      name: 'NEXLIZET & NEXLETOL Co-Pay Card',
      operator: 'Esperion Therapeutics',
      status: 'open',
      statusNote:
        'Active for commercially insured patients on August 26, 2026. One card covers both Nexlizet and Nexletol. Enrolment lasts one year and must be renewed annually; Esperion determines final eligibility.',
      medicare: 'excluded',
      medicareNote:
        'Esperion\'s terms are among the strictest in this registry. A patient may be eligible only if "not enrolled in any state-, federal-, or government-funded healthcare program, including but not limited to Medicare, Medicaid, Medigap, TRICARE of the Department of Defense, or the Department of Veterans Affairs (VA) healthcare program." The terms add that a patient enrolled in such a program may not use the card "even if they elect to be processed as a commercial or discount insurance plan patient", and that anyone who joins one mid-enrolment must report it and loses eligibility. There is no workaround.',
      summary:
        'A commercial copay offer at "as little as $10 per fill", covering both Esperion products on a single card. Firmly closed to Medicare, which is why the open TotalAssist fund above carries the weight on this page.',
      covers: 'Part of the commercial copay for Nexlizet or Nexletol. Not applicable to Medicare cost-sharing.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance covering Nexlizet',
        'Not enrolled in any state, federal or government-funded healthcare program, including Medicare, Medicaid, Medigap, TRICARE or VA',
        'Enrolment lasts one year and must be renewed',
      ],
      howToApply:
        'Commercially insured patients enrol through the co-pay card program. Medicare beneficiaries should apply to the TotalAssist Hypercholesterolemia fund instead — it was open when we checked.',
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
        'On August 26, 2026 the patient support Esperion publishes for Nexlizet is the NEXSTEP program — a Co-Pay Card for commercially insured patients and a NEXSTEP Navigator access service reached through an Esperion representative. No income-based program supplying Nexlizet free of charge appears on those pages.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable — we found no manufacturer patient assistance program for Nexlizet to state a Medicare rule. If Esperion adds one, it would appear on the NEXSTEP support pages cited here.',
      summary:
        'An honest negative. Many brand medicines have a manufacturer program that gives the drug away under an income limit; for Nexlizet we could not find one. That absence is precisely why the open TotalAssist fund matters so much here, and why the two-tablet arithmetic below is worth running.',
      eligibility: [],
      howToApply: 'Not applicable. If Esperion adds a patient assistance program it would appear on the access and savings pages cited here.',
      applyUrl: 'https://www.nexlizethcp.com/access-savings/',
      applyLabel: 'Esperion access and savings',
      phone: '1-833-377-7633',
      sources: [esperionAccess],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days\' published disease list on August 26, 2026 contained 57 programs and none of them was hypercholesterolemia or any cholesterol condition.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Nexlizet.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'This is one of the better charitable pictures in the whole expansion, and it is worth acting on rather than filing away. TotalAssist\'s Hypercholesterolemia fund was OPEN on August 26, 2026 — accepting applications, with a $1,900 guaranteed award and a $3,800 maximum — and "Nexlizet (Bempedoic Acid/Ezetimibe)" is named on its approved-medication list. It requires government insurance, which means Medicare beneficiaries are exactly who it is for. HealthWell\'s Hypercholesterolemia – Medicare Access fund also covers Nexlizet, at up to $2,500, but was closed to new patients; set its alerts as a second option. Good Days has no cholesterol fund. Because Esperion offers a Medicare beneficiary nothing — its co-pay card excludes Medicare and it publishes no patient assistance program — the open fund is not a supplement to the manufacturer route here. It is the route.',
  extraHelpNote:
    'Extra Help carries full weight for Nexlizet because there is no manufacturer program to weigh it against. There is no conflict to manage and nothing to choose between: if your income and resources are limited, apply. With full Extra Help a covered brand-name drug costs about $12.65 in 2026. Extra Help and the TotalAssist fund can also be held together — the fund requires government insurance rather than excluding subsidy holders — so pursue both.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Nexlizet on Medicare in August 2026 there is an open fund, which changes the usual order entirely:',
      bullets: [
        'Apply to the TotalAssist Hypercholesterolemia fund now. It was open, it lists Nexlizet, and it gives an immediate decision.',
        'Limited income and resources → Medicare Extra Help through Social Security, which you can hold alongside the fund.',
        'Run the two-tablet arithmetic: ask your prescriber and plan whether Nexletol plus separate generic ezetimibe costs less than the Nexlizet combination.',
        'Set alerts on the HealthWell Hypercholesterolemia – Medicare Access fund as a second option.',
        'Do not spend time on Esperion — its co-pay card excludes Medicare and it publishes no patient assistance program.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'One fund was open and one was closed — an unusual position in this batch, and worth confirming before you apply.',
      bullets: [
        'TotalAssist Hypercholesterolemia: OPEN when we checked. Fund pages show "Open" or "Closed" and current award amounts, and status can change quickly.',
        'HealthWell Hypercholesterolemia – Medicare Access: closed to new patients. Sign up for real-time alerts.',
        'Esperion: no patient assistance program to check. The NEXSTEP pages are the place a new one would appear.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The open fund\'s rules are the ones that matter most here:',
      bullets: [
        'TotalAssist: government insurance (Medicare, Medicaid or TRICARE) covering Nexlizet; income at or below 500% of the federal poverty level adjusted for your regional cost-of-living index; a confirmed hypercholesterolemia diagnosis in treatment, starting within 60 days, or treated in the past 6 months.',
        'HealthWell (when open): Medicare coverage, income at or below 500% of the federal poverty level, and a prescriber-verified diagnosis.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
        'Esperion Co-Pay Card: commercial insurance only, with Medicare, Medicaid, Medigap, TRICARE and VA all excluded — and no processing workaround permitted.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'TotalAssist gives an immediate online decision, so having these to hand lets you finish in one sitting:',
      bullets: [
        'Contact information and Social Security number.',
        'Annual household income for pre-screening — proof is due within 30 days of approval, not upfront.',
        'Health insurance carrier, plan type, policy ID and group number, plus any Medicare supplement or secondary insurance.',
        'Your copay or coinsurance amount for Nexlizet.',
        'Your provider\'s name and contact details, your hypercholesterolemia diagnosis and its date, and your prescribed medications.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'TotalAssist: you apply online in about 15 minutes and learn immediately whether you are approved, or call 866-512-3861, Monday–Friday 8:30am–5:30pm ET. Patient Advocate Foundation verifies your diagnosis with your provider.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'Two-tablet switch: nothing to apply for — a prescribing and formulary question.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'TotalAssist: an immediate online decision, with proof of income due within 30 days of approval.',
        'HealthWell (when open): a decision once your provider returns the diagnosis verification.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'The composition of this tablet gives you an option most brand medicines do not:',
      bullets: [
        'Ask whether Nexletol plus separate generic ezetimibe would cost less than Nexlizet. Half of Nexlizet is a long-established generic, and taking the two ingredients separately is sometimes cheaper on a formulary — this is a prescribing conversation, but a legitimate one.',
        'Ask your prescriber\'s office about a formulary exception if step therapy is the barrier — many Nexlizet candidates are prescribed it precisely because they could not tolerate a statin.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Do not wait for a generic — no generic bempedoic acid exists in any form, so the combination is not going generic soon.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your copay or coinsurance amount for Nexlizet', note: 'TotalAssist asks for it on the application, and you need it for the two-tablet comparison too' },
    {
      item: 'What your plan charges for Nexletol and for generic ezetimibe separately',
      note: 'the comparison that decides whether the combination tablet is worth its brand tier',
    },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber and plan whether Nexletol plus separate generic ezetimibe costs less than the Nexlizet combination tablet. Half of Nexlizet has been generic for years, and the two-tablet route is sometimes cheaper on a formulary.',
    },
    {
      text: 'Apply to the TotalAssist Hypercholesterolemia fund — it was accepting applications when we checked, gives an immediate decision, and requires government insurance rather than excluding it.',
      href: 'https://totalassist.org/funds/hypercholesterolemia/',
      label: 'TotalAssist Hypercholesterolemia fund',
    },
    ...standardAlternatives('Nexlizet'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Nexlizet?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Nexlizet, usually on a brand tier and often behind step therapy that asks you to try a statin first. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Nexlizet patient assistance program for people on Medicare?',
      answer:
        'Not from Esperion. Its published support for Nexlizet is the NEXSTEP program — a co-pay card for commercially insured patients and a Navigator access service — and no income-based program that supplies Nexlizet free of charge appears on those pages. The co-pay card excludes Medicare explicitly. For a Medicare beneficiary the route that does exist is charitable: TotalAssist\'s Hypercholesterolemia fund was open when we checked, lists Nexlizet, and pays $1,900 guaranteed up to $3,800.',
    },
    {
      question: 'Would taking Nexletol and ezetimibe separately be cheaper than Nexlizet?',
      answer:
        'It is worth asking, and the question only arises because of how Nexlizet is made. Nexlizet combines bempedoic acid — which is brand-only, with no generic in any form — and ezetimibe, which has been generic for years and appears on the TotalAssist fund list in its own right. Some Part D formularies price the brand combination higher than a brand tablet plus a generic tablet taken separately, and some do not. Ask your prescriber whether splitting them is clinically appropriate for you, and ask your plan what each option would cost. It is a genuine arithmetic question rather than a certainty either way.',
    },
    {
      question: 'Can I use the Nexlizet co-pay card with Medicare?',
      answer:
        'No, and Esperion\'s terms leave no room. A patient may be eligible only if "not enrolled in any state-, federal-, or government-funded healthcare program, including but not limited to Medicare, Medicaid, Medigap, TRICARE of the Department of Defense, or the Department of Veterans Affairs (VA) healthcare program." The terms go further than most: a patient enrolled in such a program may not use the card "even if they elect to be processed as a commercial or discount insurance plan patient", and anyone who joins one mid-enrolment must report it and loses eligibility.',
    },
    {
      question: 'Is there a charitable grant for Nexlizet right now?',
      answer:
        'Yes — this is one of the few medications in this batch where the answer is a straightforward yes. TotalAssist\'s Hypercholesterolemia fund was accepting applications on August 26, 2026, lists "Nexlizet (Bempedoic Acid/Ezetimibe)" on its approved-medication list, and pays a $1,900 guaranteed award up to $3,800. It requires government insurance — Medicare, Medicaid or TRICARE — so Medicare beneficiaries are exactly who it is designed for. HealthWell\'s Hypercholesterolemia – Medicare Access fund also covers Nexlizet, at up to $2,500, but was closed to new patients.',
    },
    {
      question: 'Is Nexlizet part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Nexlizet, Nexletol or bempedoic acid row for initial price applicability year 2026, 2027 or 2028. Your cost is set by your plan\'s tier and cost-sharing, and by whether a charitable grant or Extra Help is covering part of it. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['nexletol', 'leqvio', 'praluent', 'repatha'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Nexlizet' },
  ],
  sources: [
    label,
    dailymedBempedoic,
    esperionAccess,
    copayEnrollment,
    totalAssistHyperchol,
    SRC.totalAssistEligibility,
    SRC.totalAssistApply,
    healthWellHyperchol,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsMfpFile,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify the TotalAssist Hypercholesterolemia
  // fund status FIRST and most often — an open fund is the most perishable and
  // most valuable fact on this page, and this record leads with it.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Nexlizet Assistance',
    status: 'coming-soon',
    description:
      'How to apply to the open TotalAssist Hypercholesterolemia fund, why Esperion offers Medicare beneficiaries nothing, and how to run the Nexletol-plus-generic-ezetimibe comparison with your plan.',
  },
  description_meta:
    'How to lower the cost of Nexlizet (bempedoic acid/ezetimibe) on Medicare: the OPEN TotalAssist Hypercholesterolemia fund paying $1,900 guaranteed, why Esperion\'s co-pay card excludes Medicare, and whether two separate tablets cost less — verified August 2026.',
};

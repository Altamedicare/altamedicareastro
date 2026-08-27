// ---------------------------------------------------------------------------
// Vascepa (icosapent ethyl) — Amarin Pharma. Independently researched
// 2026-08-26. Batch 8 — a NEW slug, and the last of the 22.
//
// Vascepa is the only medication in this expansion that appears on TWO
// TotalAssist funds with materially different awards where ONE OF THEM IS OPEN:
//
//   Hypercholesterolemia   OPEN     $1,900 guaranteed / $3,800 maximum
//   Hypertriglyceridemia   Closed   $3,300 guaranteed / $6,600 maximum
//
// The closed fund pays nearly twice as much, and Vascepa's own label carries both
// a cardiovascular-risk indication (in people with elevated triglycerides) and a
// severe-hypertriglyceridemia indication. So which fund a reader should apply to
// — and which they should set an alert on — genuinely depends on their diagnosis
// and on whether they can wait. That is a real, actionable decision, and it is
// the spine of this page.
//
// Second finding: icosapent ethyl is thoroughly generic — 31 labelled products
// across 21 labelers — and the federal TrumpRx site prices the generic at $14.00
// while carrying no brand listing at all. Amarin offers a Medicare beneficiary
// nothing: its savings program excludes Medicare by name and it publishes no
// income-tested patient assistance program.
//
// TAXONOMY: introduces `omega-3`. The label describes Vascepa as "a
// lipid-regulating agent" containing "icosapent ethyl, an omega-3 fatty acid
// ethyl ester". Neither 'acl-inhibitor' nor 'pcsk9' can carry it, and its primary
// target is triglycerides rather than LDL.
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
  title: 'Vascepa prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9c1a2828-1583-4414-ab22-a60480e8e508',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"VASCEPA, a lipid-regulating agent, is supplied as either a 0.5 gram or a 1 gram" capsule containing "icosapent ethyl, an omega-3 fatty acid ethyl ester"; two indications — reducing the risk of myocardial infarction, stroke, coronary revascularisation and unstable angina requiring hospitalisation in adults on maximally tolerated statin therapy with triglycerides at or above 150 mg/dL and either established cardiovascular disease or diabetes with two or more additional risk factors; and reducing triglycerides in adults with severe (at or above 500 mg/dL) hypertriglyceridemia; Amarin Pharma Inc. (rev. 3/23/2026)',
};
const dailymedIcosapent = {
  title: 'DailyMed label index — icosapent ethyl',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=icosapent+ethyl',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '31 labelled icosapent ethyl products across 21 distinct labelers — Amarin\'s VASCEPA plus generic icosapent ethyl capsules from Amneal, Apotex, Aurobindo, Camber, Dr. Reddy\'s, American Health Packaging and others',
};
const vascepaSite = {
  title: 'VASCEPA patient site — savings and support',
  url: 'https://www.vascepa.com/',
  publisher: 'Amarin Pharma',
  checked: CHECKED,
  supports:
    'the Vascepa Savings Card described as "as little as $9 for 90 days" for eligible patients; an "exclusive discount…through GoodRx" for uninsured patients paying out of pocket; and NO income-tested patient assistance program anywhere on the site. Phone 1-855-VASCEPA (1-855-827-2372)',
};
const vascepaCopayTerms = {
  title: 'VASCEPA Savings Program — terms and conditions',
  url: 'https://vascepa.copaysavingsprogram.com/',
  publisher: 'Amarin Pharma',
  checked: CHECKED,
  supports:
    'the savings program terms verbatim — "You will pay the first $9 after your insurer\'s payment (if any) has been applied", "up to a maximum savings of $2250 annually", and the exclusion "Patients enrolled in Medicare, Medicaid, TRICARE, or similar federal or state prescription drug insurance programs are not eligible for this offer." Phone 1-855-497-8462',
};
const trumpRx = {
  title: 'TrumpRx — icosapent ethyl listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: 'generic "Icosapent Ethyl" listed at a cash price of $14.00. Brand Vascepa is not listed on the site',
};
const totalAssistHyperchol = {
  title: 'TotalAssist — Hypercholesterolemia fund',
  url: 'https://totalassist.org/funds/hypercholesterolemia/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'OPEN and accepting applications; "Vascepa (Icosapent Ethyl)" AND the generic "Icosapent Ethyl" both on the approved-medication list; $1,900 guaranteed / $3,800 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistHtg = {
  title: 'TotalAssist — Hypertriglyceridemia (HTG) fund',
  url: 'https://totalassist.org/funds/hypertriglyceridemia-htg/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Vascepa (Icosapent ethyl)" on the approved-medication list alongside the fibrates, Lovaza, Tryngolza and Redemplo; $3,300 guaranteed / $6,600 maximum award — nearly double the hypercholesterolemia fund, for the same medication',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — "Hypercholesterolemia - Medicare Access" CLOSED, and there is NO hypertriglyceridemia fund of any kind',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no hypercholesterolemia, hypertriglyceridemia or cardiovascular program',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Vascepa or icosapent ethyl row for initial price applicability year 2026, 2027 or 2028',
};

export const VASCEPA: MedicationAssistanceRecord = {
  slug: 'vascepa',
  brandName: 'Vascepa',
  genericName: 'icosapent ethyl',
  manufacturer: 'Amarin Pharma',
  // `cholesterol` and `heart`. The `cholesterol` key matches the
  // Hypercholesterolemia fund, which is the OPEN one and which lists Vascepa by
  // name; `heart` reflects the label's cardiovascular risk-reduction indication.
  // The site has no triglyceride-specific condition key and does not need one —
  // the HTG fund is carried explicitly as a program entry below, and adding a key
  // would create a browse view holding a single medication.
  conditions: ['cholesterol', 'heart'],
  // The registry's first `omega-3`. The label calls Vascepa "a lipid-regulating
  // agent" containing "icosapent ethyl, an omega-3 fatty acid ethyl ester".
  // Distinct from 'acl-inhibitor' (Nexletol/Nexlizet) and 'pcsk9' (the injectable
  // LDL medicines): Vascepa's primary target is triglycerides.
  drugClass: ['omega-3'],
  description:
    'Vascepa is a purified omega-3 capsule — icosapent ethyl — taken alongside a statin to reduce cardiovascular risk in people with raised triglycerides, and separately to lower very high triglyceride levels. It is not the same thing as an over-the-counter fish-oil supplement, and for assistance purposes the important thing is which of its two indications you were prescribed it for, because the two lead to charitable funds paying very different amounts.',
  usedFor: [
    'Reducing the risk of heart attack, stroke, coronary revascularisation and unstable angina requiring hospitalisation in adults on maximally tolerated statin therapy who have triglycerides at or above 150 mg/dL and either established cardiovascular disease or diabetes with two or more additional cardiovascular risk factors',
    'Reducing triglyceride levels in adults with severe hypertriglyceridemia — triglycerides at or above 500 mg/dL',
  ],
  whyCostly:
    'Brand Vascepa sits on a brand tier and is taken four capsules a day, so quantities are large. But the cost picture has changed substantially: icosapent ethyl is now thoroughly generic, with 31 labelled products from 21 different labelers on DailyMed, and the federal TrumpRx site prices generic icosapent ethyl at $14.00 while carrying no listing for the brand. Amarin, meanwhile, offers a Medicare beneficiary nothing — its savings program excludes Medicare by name and it publishes no income-tested assistance program.',
  medicareContext:
    'Vascepa is a capsule you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, with brand Vascepa on a brand tier and generic icosapent ethyl typically on a much lower generic tier. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Vascepa or icosapent ethyl row for 2026, 2027 or 2028 — unsurprising for a medicine that already has generic competition. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year. One practical Medicare note: because Vascepa\'s cardiovascular indication requires you to be on maximally tolerated statin therapy, a plan reviewing a prior authorisation may want evidence of that, so have your statin history to hand.',
  quickAnswer: {
    verdict:
      'Yes — and Vascepa is the rare case with a charitable fund that was actually open. TotalAssist\'s Hypercholesterolemia fund was accepting applications, lists Vascepa by name, and pays $1,900 guaranteed up to $3,800. Its Hypertriglyceridemia fund pays nearly double but was closed. Amarin itself offers a Medicare beneficiary nothing, and generic icosapent ethyl costs $14.00 on the federal cash-price site.',
    points: [
      'TotalAssist Hypercholesterolemia fund: OPEN on August 26, 2026. $1,900 guaranteed, $3,800 maximum. Lists both "Vascepa (Icosapent Ethyl)" and the generic. Requires Medicare, Medicaid or TRICARE and income at or below 500% of the federal poverty level adjusted for local cost of living.',
      'TotalAssist Hypertriglyceridemia fund: CLOSED, but pays $3,300 guaranteed and $6,600 maximum — nearly double. If your diagnosis is severe hypertriglyceridemia, set an alert on this one as well as applying to the open fund.',
      'Generic icosapent ethyl: 31 labelled products across 21 labelers, and $14.00 cash on the federal TrumpRx site.',
      'VASCEPA Savings Program: "You will pay the first $9 after your insurer\'s payment (if any) has been applied", up to $2,250 a year — but "Patients enrolled in Medicare, Medicaid, TRICARE, or similar federal or state prescription drug insurance programs are not eligible for this offer."',
      'No manufacturer patient assistance program: nothing on Amarin\'s published pages supplies Vascepa free on an income test. Amarin offers uninsured patients a GoodRx discount instead.',
      'HealthWell: its Hypercholesterolemia – Medicare Access fund was closed, and it runs NO hypertriglyceridemia fund at all. Good Days has nothing applicable.',
    ],
  },
  programs: [
    {
      id: 'totalassist-hyperchol',
      kind: 'charitable',
      name: 'TotalAssist — Hypercholesterolemia fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Hypercholesterolemia',
      status: 'open',
      statusNote:
        'ACCEPTING APPLICATIONS on August 26, 2026, with a $1,900 guaranteed award and a $3,800 maximum. One of very few open funds encountered anywhere in this expansion.',
      medicare: 'eligible',
      medicareNote:
        'This fund requires government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are not merely permitted; government insurance is a condition of eligibility. Given that Amarin\'s own savings program excludes Medicare by name, this fund exists precisely for the readers the manufacturer turns away.',
      summary:
        'Both "Vascepa (Icosapent Ethyl)" and the plain generic "Icosapent Ethyl" are named on the approved-medication list, so switching to the generic would not cost you eligibility. Because it was open, an application can produce a decision immediately rather than a wait.',
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
      id: 'totalassist-htg',
      kind: 'charitable',
      name: 'TotalAssist — Hypertriglyceridemia (HTG) fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Hypertriglyceridemia (HTG)',
      status: 'closed',
      statusNote:
        'Closed to new applicants on August 26, 2026 — but with a $3,300 guaranteed and $6,600 maximum award, nearly double the hypercholesterolemia fund for the same medication. TotalAssist has no waitlist, so the notification sign-up is what gets you in when it reopens.',
      medicare: 'eligible',
      medicareNote:
        'Like the hypercholesterolemia fund, this one requires government-insured coverage — Medicare, Medicaid or TRICARE. Medicare beneficiaries are eligible when it is open.',
      summary:
        'The fund worth watching. "Vascepa (Icosapent ethyl)" is named on its approved-medication list alongside the fibrates, Lovaza, Tryngolza and Redemplo. If your diagnosis is severe hypertriglyceridemia rather than high cholesterol, this is the fund built for you and it pays materially more — so apply to the open hypercholesterolemia fund now if you qualify for it, and set an alert on this one at the same time.',
      covers:
        'When open: $3,300 guaranteed award and up to $6,600 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed hypertriglyceridemia diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When it opens: ' +
        TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when the HTG fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistHtg, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'generic-icosapent',
      kind: 'manufacturer-direct',
      name: 'Generic icosapent ethyl (including the TrumpRx cash price)',
      operator: 'Multiple manufacturers; cash price listed by the federal TrumpRx site',
      status: 'open',
      statusNote:
        'Widely available on August 26, 2026: DailyMed lists 31 labelled icosapent ethyl products across 21 distinct labelers. The federal TrumpRx site prices generic icosapent ethyl at $14.00 and carries no listing for brand Vascepa.',
      medicare: 'eligible',
      medicareNote:
        'A generic is not an assistance program and has no Medicare rule to satisfy — it is the same medicine at a generic tier. For a Medicare beneficiary this is usually a larger saving than any program here, and when filled through your plan it counts toward your $2,100 out-of-pocket cap, which a cash purchase does not. TotalAssist lists the generic on the same funds as the brand, so a switch costs nothing in fund eligibility.',
      summary:
        'Alongside the open fund, the other thing to act on. Twenty-one labelers make generic icosapent ethyl, there is nothing to apply for, and the federal cash price is $14.00. Ask your prescriber and plan about it.',
      covers: 'The same medicine at a generic tier, or at a published cash price of $14.00 outside insurance.',
      eligibility: [
        'A prescription written for or substitutable to generic icosapent ethyl',
        'No income test, no application and no waiting',
      ],
      howToApply:
        'Ask your prescriber to write for generic icosapent ethyl, or ask your pharmacy whether it can substitute where state law allows. Ask your plan which labeler\'s product sits on its preferred tier.',
      applyUrl: 'https://trumprx.gov/browse',
      applyLabel: 'TrumpRx icosapent ethyl listing',
      sources: [dailymedIcosapent, trumpRx],
    },
    {
      id: 'vascepa-savings',
      kind: 'manufacturer-savings',
      name: 'VASCEPA Savings Program',
      operator: 'Amarin Pharma',
      status: 'open',
      statusNote:
        'Active for commercially insured patients on August 26, 2026: "You will pay the first $9 after your insurer\'s payment (if any) has been applied", up to a maximum saving of $2,250 annually.',
      medicare: 'excluded',
      medicareNote:
        'Amarin\'s terms are explicit and unusually broad in one respect — they exclude by enrolment rather than by how the claim is processed: "Patients enrolled in Medicare, Medicaid, TRICARE, or similar federal or state prescription drug insurance programs are not eligible for this offer." Being enrolled in Medicare is itself the disqualifier, so there is no route through it.',
      summary:
        'A commercial copay offer. Listed so Medicare readers can rule it out immediately and move to the open TotalAssist fund, and so anyone approaching 65 knows that a $9 Vascepa copay ends when Medicare begins.',
      covers: 'Part of the commercial copay for Vascepa, up to $2,250 a year. Not applicable to Medicare cost-sharing.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in Medicare, Medicaid, TRICARE or a similar federal or state prescription drug program',
        'Maximum saving of $2,250 annually',
      ],
      howToApply:
        'Commercially insured patients enrol through the Vascepa savings program site or call 1-855-497-8462. Medicare beneficiaries should apply to the TotalAssist Hypercholesterolemia fund — it was open when we checked — and ask about the generic.',
      applyUrl: 'https://vascepa.copaysavingsprogram.com/',
      applyLabel: 'VASCEPA Savings Program terms',
      phone: '1-855-497-8462',
      sources: [vascepaCopayTerms, vascepaSite, SRC.oigCoupons],
    },
    {
      id: 'amarin-pap',
      kind: 'manufacturer-pap',
      name: 'Amarin patient assistance program — none found',
      operator: 'Amarin Pharma',
      status: 'not-found',
      statusNote:
        'On August 26, 2026 the patient support Amarin publishes for Vascepa is the Savings Card for commercially insured patients and, for uninsured patients paying out of pocket, "an exclusive discount…through GoodRx". No income-based program supplying Vascepa free of charge appears on Amarin\'s pages.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable — we found no Amarin patient assistance program to state a Medicare rule. Note what Amarin offers uninsured patients instead: a discount-card arrangement. A discount card is not insurance and, per HealthWell\'s own eligibility rules, does not count as the insurance those foundations require — so it does not help a Medicare reader and would not substitute for coverage in a charitable application either.',
      summary:
        'An honest negative. Many brand medicines have a manufacturer program that gives the drug away under an income limit; for Vascepa there is none. Combined with the Medicare exclusion on the savings card, that means Amarin offers a Medicare beneficiary nothing at all — which is why the open fund and the generic carry this page.',
      eligibility: [],
      howToApply: 'Not applicable. If Amarin adds a patient assistance program it would appear on the Vascepa support pages cited here. General enquiries: 1-855-VASCEPA (1-855-827-2372).',
      applyUrl: 'https://www.vascepa.com/',
      applyLabel: 'Vascepa savings and support',
      phone: '1-855-827-2372',
      sources: [vascepaSite],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Hypercholesterolemia fund closed, no HTG fund',
      operator: 'HealthWell Foundation',
      fund: 'Hypercholesterolemia – Medicare Access',
      status: 'closed',
      statusNote:
        'The Hypercholesterolemia – Medicare Access fund was closed on August 26, 2026, and HealthWell runs NO hypertriglyceridemia fund of any kind — so one of Vascepa\'s two indications has no HealthWell route at all.',
      medicare: 'eligible',
      medicareNote:
        'The hypercholesterolemia fund is a Medicare Access fund, built specifically for people with Medicare, which makes it worth an alert even while closed.',
      summary:
        'One of Vascepa\'s two diagnoses has a HealthWell fund and it was closed; the other has none. Set the alert on the hypercholesterolemia fund, but note that TotalAssist is the foundation with the fund that covers severe hypertriglyceridemia.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for hypercholesterolemia.',
      eligibility: ['A confirmed hypercholesterolemia diagnosis, verified by your prescriber', ...HEALTHWELL_REQUIREMENTS],
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
        'Good Days\' published disease list on August 26, 2026 contained 57 programs and none was hypercholesterolemia, hypertriglyceridemia or any cardiovascular condition.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Vascepa.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'Vascepa has the most interesting charitable picture in this expansion, and it repays a couple of minutes\' thought. TotalAssist covers it on two funds because its label carries two indications. The Hypercholesterolemia fund was OPEN on August 26, 2026, paying $1,900 guaranteed up to $3,800. The Hypertriglyceridemia fund was closed but pays $3,300 guaranteed up to $6,600 — nearly double, for the same medication. Both list Vascepa and the generic icosapent ethyl by name. So the sensible move for most readers is to apply to the open fund now if your diagnosis fits it, and simultaneously set an alert on the HTG fund, which is the larger prize if severe hypertriglyceridemia is your diagnosis. Note that TotalAssist gives one grant per condition, so this is about which fund matches your diagnosis rather than collecting both. HealthWell\'s hypercholesterolemia fund was closed and it runs no HTG fund at all; Good Days has nothing. Since Amarin offers a Medicare beneficiary no manufacturer route whatsoever, these funds plus the generic are the whole picture.',
  extraHelpNote:
    'Extra Help carries full weight here because there is no manufacturer program to weigh it against. There is no conflict to manage and nothing to choose between: if your income and resources are limited, apply. With full Extra Help a covered brand-name drug costs about $12.65 in 2026, and a generic costs less still — which for icosapent ethyl, already priced at $14.00 as a generic on the federal cash-price site, is a small saving stacked onto a small one. Extra Help and the TotalAssist funds can be held together, since the funds require government insurance rather than excluding subsidy holders.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Vascepa on Medicare in August 2026 there is an open fund and a cheap generic, which is an unusually good position:',
      bullets: [
        'Apply to the TotalAssist Hypercholesterolemia fund now if your diagnosis fits — it was open, it lists Vascepa, and it gives an immediate decision.',
        'Set an alert on the TotalAssist Hypertriglyceridemia fund at the same time. It was closed, but it pays nearly double, and it is the fund built for severe hypertriglyceridemia.',
        'Ask your prescriber and plan about generic icosapent ethyl — 31 labelled products from 21 labelers, and $14.00 cash on the federal TrumpRx site.',
        'Limited income and resources → Medicare Extra Help through Social Security, which you can hold alongside a fund grant.',
        'Set alerts on the HealthWell Hypercholesterolemia – Medicare Access fund as a further option.',
        'Do not spend time on Amarin — its savings program excludes anyone enrolled in Medicare, and it publishes no patient assistance program.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'One fund was open and two were closed — worth confirming before you apply, since status changes quickly.',
      bullets: [
        'TotalAssist Hypercholesterolemia: OPEN when we checked. The fund page shows current status and award amounts.',
        'TotalAssist Hypertriglyceridemia: closed, at $3,300 guaranteed / $6,600 maximum when open.',
        'HealthWell Hypercholesterolemia – Medicare Access: closed. HealthWell runs no HTG fund at all.',
        'Amarin: no patient assistance program to check. The Vascepa support pages are where a new one would appear.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The two TotalAssist funds share eligibility rules but differ on diagnosis and award:',
      bullets: [
        'TotalAssist (both funds): government insurance (Medicare, Medicaid or TRICARE) covering Vascepa; income at or below 500% of the federal poverty level adjusted for your regional cost-of-living index; a confirmed diagnosis matching the fund, in treatment, starting within 60 days, or treated in the past 6 months.',
        'Which fund fits: hypercholesterolemia for the open one, hypertriglyceridemia for the closed higher-paying one. TotalAssist gives one grant per condition.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified hypercholesterolemia diagnosis, and treatment in the United States. Note that a discount card does not count as insurance for this purpose.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
        'VASCEPA Savings Program: commercial insurance only; anyone enrolled in Medicare, Medicaid or TRICARE is excluded.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'One number decides which fund you should be applying to:',
      bullets: [
        'Your most recent triglyceride result, and whether your diagnosis is recorded as hypercholesterolemia or severe hypertriglyceridemia. The label\'s two indications use 150 mg/dL and 500 mg/dL as thresholds, and the funds follow the diagnosis.',
        'Your statin history — Vascepa\'s cardiovascular indication requires maximally tolerated statin therapy, and a plan reviewing a prior authorisation may ask.',
        'Contact information and Social Security number, for the TotalAssist application.',
        'Health insurance carrier, plan type, policy ID and group number, plus any Medicare supplement or secondary insurance.',
        'Your copay or coinsurance amount for Vascepa, and your provider\'s name and contact details.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'TotalAssist: you apply online in about 15 minutes and learn immediately whether you are approved, or call 866-512-3861, Monday–Friday 8:30am–5:30pm ET. Patient Advocate Foundation verifies your diagnosis with your provider.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'Generic switch: nothing to apply for — a prescribing and formulary question.',
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
      body: 'With a generic this cheap, the fallback is unusually comfortable:',
      bullets: [
        'Ask specifically about generic icosapent ethyl. It is the same medicine at a generic tier, it is on both TotalAssist fund lists alongside the brand, and the federal cash price is $14.00.',
        'If you were prescribed Vascepa for severe hypertriglyceridemia, keep the HTG fund alert running — at $3,300 guaranteed and $6,600 maximum it is the largest charitable award in this entire expansion.',
        'Ask your prescriber\'s office about a formulary exception if prior authorisation is the barrier; have your statin history and triglyceride results ready.',
        'Do not substitute an over-the-counter fish-oil supplement for prescription icosapent ethyl on cost grounds — they are not the same product, and that is a decision for your prescriber.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'Your most recent triglyceride result and your recorded diagnosis',
      note: 'this decides which TotalAssist fund fits — hypercholesterolemia (open, $1,900/$3,800) or hypertriglyceridemia (closed, $3,300/$6,600)',
    },
    { item: 'Your statin history', note: 'Vascepa\'s cardiovascular indication requires maximally tolerated statin therapy, and plans may ask on prior authorisation' },
    { item: 'Your Vascepa capsule strength — 0.5 gram or 1 gram', note: 'and how many capsules a day you take' },
  ],
  ifUnavailable: [
    {
      text: 'Apply to the TotalAssist Hypercholesterolemia fund — it was accepting applications when we checked, lists Vascepa and its generic, and gives an immediate decision.',
      href: 'https://totalassist.org/funds/hypercholesterolemia/',
      label: 'TotalAssist Hypercholesterolemia fund',
    },
    {
      text: 'Ask your prescriber and plan about generic icosapent ethyl, which DailyMed lists under 31 separate labels from 21 labelers and the federal TrumpRx site prices at $14.00.',
      href: 'https://trumprx.gov/browse',
      label: 'TrumpRx',
    },
    ...standardAlternatives('Vascepa'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Vascepa?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover it, with brand Vascepa on a brand tier and generic icosapent ethyl typically on a much lower generic tier. Prior authorisation is common, and because the cardiovascular indication requires maximally tolerated statin therapy, a plan may ask for your statin history. Part D out-of-pocket costs are capped at $2,100 in 2026, and <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Which charity fund should I apply to for Vascepa?',
      answer:
        'It depends on your diagnosis, and the difference is substantial. TotalAssist covers Vascepa on two funds because its label has two indications. The Hypercholesterolemia fund was OPEN when we checked on August 26, 2026, paying $1,900 guaranteed up to $3,800. The Hypertriglyceridemia fund was closed but pays $3,300 guaranteed up to $6,600 — nearly double. If your recorded diagnosis is severe hypertriglyceridemia, that is the fund built for you and the one to set an alert on; if it is hypercholesterolemia, apply to the open fund now. TotalAssist gives one grant per condition, so this is about matching your diagnosis rather than collecting both.',
    },
    {
      question: 'Is there a Vascepa patient assistance program for people on Medicare?',
      answer:
        'No. Amarin\'s published support for Vascepa is a savings card for commercially insured patients and, for uninsured patients, a GoodRx discount arrangement — and no income-based program that supplies Vascepa free of charge. The savings card excludes Medicare outright: "Patients enrolled in Medicare, Medicaid, TRICARE, or similar federal or state prescription drug insurance programs are not eligible for this offer." So Amarin offers a Medicare beneficiary nothing, which is why the open TotalAssist fund and the generic carry this page.',
    },
    {
      question: 'Is there a generic for Vascepa?',
      answer:
        'Yes, and it is thoroughly established. DailyMed lists 31 labelled icosapent ethyl products across 21 distinct labelers, including Amneal, Apotex, Aurobindo, Camber and Dr. Reddy\'s. The federal TrumpRx site prices generic icosapent ethyl at $14.00 and carries no listing for brand Vascepa. Both TotalAssist funds list the generic alongside the brand, so switching would not cost you fund eligibility.',
    },
    {
      question: 'Is Vascepa the same as fish oil from the pharmacy shelf?',
      answer:
        'No, and it is worth being clear about, because the price difference makes the substitution tempting. Vascepa is a prescription medicine — the label describes it as "a lipid-regulating agent" containing "icosapent ethyl, an omega-3 fatty acid ethyl ester" — approved with specific indications and specific triglyceride thresholds behind them. Over-the-counter fish-oil supplements are not equivalent products and are not regulated the same way. If cost is the problem, generic icosapent ethyl at $14.00 is the substitution to ask your prescriber about, not a supplement.',
    },
    {
      question: 'Is Vascepa part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Vascepa or icosapent ethyl row for initial price applicability year 2026, 2027 or 2028 — unsurprising for a medicine that already has generic competition, since the program selects drugs without it. Your cost is set by your plan\'s tier and cost-sharing, and above all by whether you are dispensed the brand or the generic. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['nexletol', 'nexlizet', 'repatha', 'leqvio'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Vascepa' },
  ],
  sources: [
    label,
    dailymedIcosapent,
    vascepaSite,
    vascepaCopayTerms,
    trumpRx,
    totalAssistHyperchol,
    totalAssistHtg,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    SRC.totalAssistApply,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsMfpFile,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify BOTH TotalAssist funds first and most
  // often: one was open and one pays nearly double, and this page's central
  // advice depends on which of those two states each fund is in.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Vascepa Assistance',
    status: 'coming-soon',
    description:
      'Why two charity funds cover Vascepa at very different amounts, how your triglyceride diagnosis decides which one, and what generic icosapent ethyl at $14.00 changes.',
  },
  description_meta:
    'How to lower the cost of Vascepa (icosapent ethyl) on Medicare: the OPEN TotalAssist Hypercholesterolemia fund, the closed HTG fund paying nearly double, generic icosapent ethyl at $14.00, and why Amarin\'s savings card excludes Medicare — verified August 2026.',
};

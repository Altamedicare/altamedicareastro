// ---------------------------------------------------------------------------
// Januvia (sitagliptin) — Merck. Independently researched 2026-08-26. Every
// program below was read on the official source cited with it. Batch 7 — a NEW
// slug, selected for information value rather than for demand.
//
// The finding that makes this page worth having: the Merck Patient Assistance
// Program is the first manufacturer program in this registry that names MEDICARE
// AS DISQUALIFYING COVERAGE. AZ&Me accepts Medicare beneficiaries who are not
// eligible for Extra Help; Lilly Cares has a Medicare group; Pfizer's program
// explicitly serves people "who are uninsured or have government-issued
// insurance". Merck's does not: its first eligibility condition is that you "do
// not have insurance or other coverage for your prescription medicine", and it
// lists Medicare among the examples. There is a documented hardship exception,
// and that exception is the whole Medicare story here — so it is quoted rather
// than paraphrased away.
//
// Second thing worth knowing: Januvia already HAS a Medicare-negotiated price.
// $113.00 for a 30-day equivalent supply took effect 2026-01-01, and the
// inflation-adjusted figure of $116.06 applies from 2027-01-01. Most records in
// this registry describe a negotiated price that has not started yet.
//
// Research gap carried honestly: januvia.com now serves the prescribing
// information PDF rather than a consumer site, and no Merck-owned savings-card
// page could be found. Third-party directories report a $5 card; that is not an
// official source, so the savings card is `verify` and no dollar figure is
// published here.
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
  title: 'Januvia prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f85a48d0-0407-4c50-b0fa-7673a160bf01',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"JANUVIA is a dipeptidyl peptidase-4 (DPP-4) inhibitor indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus"; limitations of use — not for type 1 diabetes, not studied in patients with a history of pancreatitis; 25 mg, 50 mg and 100 mg tablets; Merck Sharp & Dohme LLC (rev. 7/2023)',
};
const dailymedSitagliptin = {
  title: 'DailyMed label search — sitagliptin',
  url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=sitagliptin',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'generic sitagliptin tablets are labelled alongside Merck\'s JANUVIA, as are the combination products JANUMET, JANUMET XR and generic sitagliptin-metformin, and the separate brands Zituvio and Brynovin',
};
const merckHelps = {
  title: 'Merck Patient Assistance Program — JANUVIA',
  url: 'https://www.merckhelps.com/JANUVIA',
  publisher: 'Merck',
  checked: CHECKED,
  supports:
    'JANUVIA is a participating product; the three eligibility conditions including "You do not have insurance or other coverage for your prescription medicine… examples… Medicaid, Medicare, state pharmacy assistance programs"; the financial-and-medical-hardship exception; income limits $63,840 / $86,560 / $132,000; 800-727-5400, 8 AM–8 PM ET; enrolment valid up to 12 months, up to 3 Merck medicines per form, 90-day supply with up to 3 refills; mailing address',
};
const merckHelpsHome = {
  title: 'Merck Patient Assistance Program — participating products',
  url: 'https://www.merckhelps.com/',
  publisher: 'Merck',
  checked: CHECKED,
  supports:
    'the participating-product list, which includes JANUVIA, JANUMET and JANUMET XR; "Medicines or adult vaccines distributed through the Merck Patient Assistance Programs are free of charge to all eligible patients"',
};
const januviaPi = {
  title: 'Januvia — manufacturer site (serves the prescribing information)',
  url: 'https://www.januvia.com/',
  publisher: 'Merck',
  checked: CHECKED,
  supports:
    'on the checked date this address returned the prescribing-information PDF rather than a consumer savings site; no Merck-owned Januvia savings-card page could be located',
};
const totalAssistT2dm = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Januvia (Sitagliptin Phosphate)" on the approved-medication list along with generic Sitagliptin, Janumet, Janumet XR, Zituvio and Zituvimet; $1,500 guaranteed / $2,000 maximum award; government insurance; 500% FPL',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no type 2 diabetes program on the fund list',
};
const cmsSelectedDrugFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the selected-drug file dated May 26, 2026: JANUVIA, initial price applicability year 2026, single MFP per 30-day equivalent supply $113.00 effective 01/01/2026 and $116.06 effective 01/01/2027 (inflation adjustment); JANUMET / JANUMET XR $80.00 from 01/01/2027 under IPAY 2027',
};

export const JANUVIA: MedicationAssistanceRecord = {
  slug: 'januvia',
  brandName: 'Januvia',
  genericName: 'sitagliptin',
  manufacturer: 'Merck',
  conditions: ['diabetes'],
  // Label Highlights: "JANUVIA is a dipeptidyl peptidase-4 (DPP-4) inhibitor".
  // The diabetes browse view has advertised DPP-4s in its blurb since the
  // taxonomy was built; this is the first record that actually carries one.
  drugClass: ['dpp-4'],
  description:
    'Januvia is a once-daily tablet for type 2 diabetes. It blocks an enzyme called DPP-4 so the body\'s own blood-sugar-lowering hormones keep working longer after a meal. It is not insulin and it is not a GLP-1 injection — it is an oral medicine taken with diet and exercise.',
  usedFor: [
    'As an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus',
    'Not for patients with type 1 diabetes',
    'Not studied in patients with a history of pancreatitis',
  ],
  whyCostly:
    'Januvia is a long-established brand that Part D plans have generally placed on a brand tier, so a deductible or a non-preferred tier can make early-year fills expensive. Two things now pull the other way, and both are specific to this medication. Generic sitagliptin is labelled with FDA and sits on the same charitable-fund lists as the brand. And Medicare has negotiated Januvia\'s price: $113.00 for a 30-day equivalent supply took effect on January 1, 2026, with $116.06 applying from January 1, 2027. What you pay is still your plan\'s cost-sharing, but it is cost-sharing calculated against a negotiated price rather than a list price.',
  medicareContext:
    'Januvia is a tablet you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan. It is one of the first ten drugs CMS negotiated: the maximum fair price is $113.00 per 30-day equivalent supply from January 1, 2026, adjusted to $116.06 from January 1, 2027, and the combination products Janumet and Janumet XR were negotiated separately at $80.00 from January 1, 2027. Part D out-of-pocket costs are capped at $2,100 in 2026, and Extra Help lowers cost-sharing for people with limited income and resources. The manufacturer route is the one to read carefully here: Merck\'s assistance program is built for people without insurance, and having Medicare is listed as coverage that disqualifies you unless a hardship exception is granted.',
  quickAnswer: {
    verdict:
      'Partly — and the manufacturer program works differently from the ones on our other diabetes pages. Merck gives Januvia away free, but its eligibility rules are written for people with no insurance and name Medicare as disqualifying coverage. A Medicare beneficiary\'s route in is Merck\'s documented financial-and-medical-hardship exception. Meanwhile Medicare has already negotiated Januvia\'s price, generic sitagliptin exists, and both diabetes charity funds were closed.',
    points: [
      'Merck Patient Assistance Program: provides Januvia free, but you must "not have insurance or other coverage for your prescription medicine" — Merck lists Medicare among the disqualifying examples. Income limits $63,840 (individual), $86,560 (couple), $132,000 (family of four).',
      'The exception that matters on Medicare: Merck states that people who do not meet the insurance criteria "may still qualify… if they attest that they have special circumstances of financial and medical hardship, and their income meets the program criteria."',
      'Medicare negotiated price: $113.00 per 30-day equivalent supply from January 1, 2026; $116.06 from January 1, 2027. This is already in effect, unlike most negotiated prices described on this site.',
      'Generic sitagliptin is labelled with FDA and appears on the same charitable-fund lists as the brand — usually the largest saving with no application attached.',
      'Charitable grants: TotalAssist\'s Type 2 diabetes fund and HealthWell\'s Type 2 Diabetes fund both list Januvia and both were closed to new applicants. Good Days has no diabetes fund.',
    ],
  },
  programs: [
    {
      id: 'merck-pap',
      kind: 'manufacturer-pap',
      name: 'Merck Patient Assistance Program',
      operator: 'Merck (Merck Patient Assistance Program, Inc.)',
      status: 'open',
      statusNote:
        'Accepting applications for JANUVIA on August 26, 2026. A single application may cover up to 12 months and up to three Merck medicines; each prescription may not exceed a 90-day supply with a maximum of three refills, and you may reapply as many times as needed.',
      medicare: 'conditional',
      medicareNote:
        'Read this one carefully, because it is the opposite of the rule on our AstraZeneca and Pfizer pages. Merck\'s second eligibility condition is: "You do not have insurance or other coverage for your prescription medicine. Some examples of other insurance coverage include private insurance, HMOs, Medicaid, Medicare, state pharmacy assistance programs, veterans assistance, or any other social service agency support." Having Medicare therefore counts against you. Merck does publish a way through: "Individuals who don\'t meet the insurance criteria may still qualify for this program if they attest that they have special circumstances of financial and medical hardship, and their income meets the program criteria." If you have Part D and cannot afford Januvia, that hardship exception is what you are applying under — say so on the call.',
      summary:
        'Merck\'s program provides participating Merck medicines free of charge to eligible patients, described by Merck as "primarily the uninsured who, without our assistance, could not afford needed Merck medicines". JANUVIA is a participating product.',
      covers: 'Januvia at no cost to approved patients, shipped to your home address unless your prescriber requests otherwise.',
      eligibility: [
        'A U.S. resident (including U.S. territories; citizenship is not required) with a prescription for Januvia from a U.S.-licensed health care provider',
        'No insurance or other coverage for the prescription — Merck names Medicare as an example of disqualifying coverage; see the hardship exception in the Medicare note',
        'Household income of $63,840 or less for an individual, $86,560 or less for a couple, or $132,000 or less for a family of four. These are Merck\'s own figures — another program quoting a similar percentage of the poverty level may publish different dollars',
        'Alaska and Hawaii limits differ — call 1-800-727-5400 for those',
        'You may not be enrolled in, or encouraged by an insurer or employer to use, an alternative funding program that requires a Merck assistance application as a condition of coverage',
      ],
      requirements: [
        'The Merck enrolment form, signed by BOTH you and your prescriber',
        'Your prescriber writes the prescription in Section 4 of the enrolment form itself — no separate prescription form is needed',
        'Household size and income information',
        'If you have Medicare: be ready to describe the financial and medical hardship you are attesting to',
      ],
      howToApply:
        'Call 1-800-727-5400 (Monday–Friday, 8 AM–8 PM ET) for a program brochure and enrolment form, or download the form from merckhelps.com. Complete every field, have your prescriber sign it and write the prescription in Section 4, then mail it to Merck Patient Assistance Program, PO Box 1206, Wilkes Barre, PA 18703-1206. Incomplete forms are returned. There is no fee.',
      applyUrl: 'https://www.merckhelps.com/JANUVIA',
      applyLabel: 'Merck Patient Assistance Program — Januvia',
      phone: '1-800-727-5400',
      sources: [merckHelps, merckHelpsHome],
    },
    {
      id: 'januvia-savings',
      kind: 'manufacturer-savings',
      name: 'Januvia savings card',
      operator: 'Merck',
      status: 'verify',
      statusNote:
        'Could not be confirmed at the source on August 26, 2026. januvia.com now returns the prescribing-information PDF rather than a consumer site, and no Merck-owned savings-card page could be located. Third-party directories report a card for commercially insured patients; because that is not an official source, no dollar amount, maximum or expiry is published here.',
      medicare: 'excluded',
      medicareNote:
        'Manufacturer copay cards are closed to Medicare across the board — federal anti-kickback rules prevent them being used with Part D, Medicare Advantage drug coverage, Medicaid, TRICARE or VA benefits. That general rule is why this card is recorded as excluded even though its specific terms could not be read; if you have Medicare, this is not your route regardless of what the current terms say.',
      summary:
        'A commercial copay offer for people with private or employer prescription insurance, reported by third-party directories but not verifiable on a Merck-owned page on the checked date.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in Medicare, Medicaid or another government prescription program',
        'Current terms unconfirmed — ask Merck before relying on a figure',
      ],
      howToApply:
        'Commercially insured patients should ask their pharmacist or prescriber for the current Merck offer, or call Merck. Medicare beneficiaries should go to the Merck Patient Assistance Program hardship route, the generic, and Extra Help instead.',
      applyUrl: 'https://www.merckhelps.com/',
      applyLabel: 'Merck patient assistance',
      sources: [januviaPi, SRC.oigCoupons],
    },
    {
      id: 'merck-direct',
      kind: 'manufacturer-direct',
      name: 'Manufacturer cash price — none found',
      operator: 'Merck',
      status: 'not-found',
      statusNote:
        'We found no Merck self-pay or direct-purchase price for Januvia on August 26, 2026.',
      medicare: 'unknown',
      medicareNote: 'Not applicable — there is no cash-pay programme for Januvia to have a Medicare rule.',
      summary:
        'An honest negative with a real alternative behind it: generic sitagliptin is labelled with FDA, so the cash comparison worth making at the pharmacy counter is brand versus generic, not brand versus a manufacturer price.',
      eligibility: [],
      howToApply: 'Not applicable. Ask a pharmacist what generic sitagliptin costs with and without your plan, and compare that against your Januvia copay.',
      applyUrl: 'https://www.merckhelps.com/',
      applyLabel: 'Merck patient assistance',
      sources: [dailymedSitagliptin, merckHelpsHome],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Type 2 diabetes (T2DM) fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Type 2 diabetes (T2DM)',
      status: 'closed',
      statusNote:
        'Closed to new applicants on August 26, 2026. "Januvia (Sitagliptin Phosphate)" is on its approved-medication list, along with generic sitagliptin and the Janumet combinations.',
      medicare: 'eligible',
      medicareNote:
        'The fund requires government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when it is open.',
      summary:
        'A listing is not an open fund. Januvia is covered by this fund on paper, but it was closed when we checked. TotalAssist has no waitlist or queue, so the notification sign-up is what gets you in when it reopens.',
      covers:
        'When open: $1,500 guaranteed award and up to $2,000 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed type 2 diabetes diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When the fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistT2dm, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Type 2 Diabetes fund',
      operator: 'HealthWell Foundation',
      fund: 'Type 2 Diabetes',
      status: 'closed',
      statusNote:
        'Listed as closed on HealthWell\'s disease-funds page on August 26, 2026. HealthWell says replenished funds reopen "as quickly as possible" and offers email or text alerts for each fund.',
      medicare: 'eligible',
      medicareNote:
        'HealthWell accepts Medicare as qualifying insurance. Premium assistance through the fund requires Medicare Part B; the copay assistance applies to the prescription itself.',
      summary:
        'HealthWell runs a Type 2 Diabetes fund covering oral diabetes medicines. It was closed to new patients when we checked — set an alert rather than assuming it is unavailable for good.',
      covers:
        'When open: prescription copay assistance for type 2 diabetes medicines, with household income up to 500% of the federal poverty level on HealthWell\'s own table.',
      eligibility: [
        'Insurance that pays part of the cost of Januvia — Medicare qualifies; discount cards do not count as insurance',
        'Household income up to 500% of the federal poverty level, adjusted for household size and cost of living',
        'A type 2 diabetes diagnosis verified by a physician, nurse practitioner or physician assistant',
        'Treatment in the United States',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [SRC.healthWellT2D, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote:
        'Good Days\' published disease list on August 26, 2026 contained no type 2 diabetes program.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Januvia.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund and whether it is open.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'No open charitable fund covered Januvia on August 26, 2026. TotalAssist\'s Type 2 diabetes fund lists it — along with generic sitagliptin and the Janumet combinations — and was closed; HealthWell\'s Type 2 Diabetes fund was closed as well; Good Days has no diabetes fund at all. That makes the routes with no fund balance attached the important ones here, and Januvia has more of them than most medications on this site: generic sitagliptin, Medicare\'s negotiated price of $113.00 per 30-day equivalent supply, Extra Help, and Merck\'s hardship exception. Set alerts on both funds so you hear if they reopen.',
  extraHelpNote:
    'Extra Help and the Merck program pull in different directions here, so it is worth being clear. Merck\'s program is designed for people with no coverage at all; Extra Help is designed for people who have Part D and limited income. If you have Part D, apply for Extra Help — it lowers the copay on every covered drug, not just Januvia, and with full Extra Help a covered brand-name drug costs about $12.65 in 2026. Merck\'s hardship exception is worth pursuing in parallel, not instead.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Januvia on Medicare in August 2026 the order runs: the generic and the negotiated price first, because they need no application; then Extra Help; then Merck\'s hardship route.',
      bullets: [
        'Ask your plan and pharmacy what generic sitagliptin costs — no application, no waiting, and it is on the same fund lists as the brand.',
        'Check what your plan charges for Januvia now that the negotiated price of $113.00 per 30-day equivalent supply is in effect.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'No coverage at all, or Medicare plus genuine financial and medical hardship → the Merck Patient Assistance Program, applying under the hardship exception.',
        'Commercial insurance instead of Medicare → ask about the Merck savings card, which Medicare enrollees cannot use.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Merck\'s program was open; both diabetes charity funds were closed. Any of these can change without notice.',
      bullets: [
        'Merck: merckhelps.com lists the participating products — confirm JANUVIA is still among them before you apply.',
        'TotalAssist: the Type 2 diabetes fund page shows "Open" or "Closed" and the current award amounts.',
        'HealthWell: the Disease Funds page shows the Type 2 Diabetes fund\'s status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program applies its own rules and its own income table. Merck\'s figures below belong to Merck alone — do not carry them to another manufacturer\'s application.',
      bullets: [
        'Merck: no insurance or other coverage (Medicare is named as disqualifying), OR attested financial and medical hardship; income at or below $63,840 (individual), $86,560 (couple) or $132,000 (family of four); different limits in Alaska and Hawaii.',
        'TotalAssist (when open): government insurance covering Januvia; income at or below 500% FPL adjusted for your regional cost-of-living index; a type 2 diabetes diagnosis in treatment.',
        'HealthWell (when open): insurance that pays part of the cost — Medicare qualifies; income up to 500% FPL on HealthWell\'s table; diagnosis verified by your provider.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'The Merck enrolment form is a paper process, so collect these before you start:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Household size and annual household income, with proof.',
        'Your prescriber\'s name, office address and phone — they must sign the form and write the prescription inside it.',
        'If you are applying under the hardship exception, a clear account of the financial and medical circumstances you are attesting to.',
        'Your Januvia strength (25 mg, 50 mg or 100 mg).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Merck: you complete the form and your prescriber signs it — BOTH signatures are required — and your prescriber writes the prescription in Section 4 rather than on a separate pad. One form can cover up to three Merck medicines.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861; Patient Advocate Foundation verifies the diagnosis with your provider.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Merck: mail the completed form to Merck Patient Assistance Program, PO Box 1206, Wilkes Barre, PA 18703-1206. Incomplete or incorrectly completed forms are returned, which costs weeks — check every field before sending.',
        'If approved, a single Merck enrolment can last up to 12 months, with each prescription limited to a 90-day supply and up to three refills. You may reapply as many times as needed.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision; proof of income due within 30 days.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Januvia has more no-application routes than most medications on this site — use them:',
      bullets: [
        'Ask your prescriber about generic sitagliptin. It is FDA-labelled and sits on the same charitable-fund lists as the brand.',
        'Check your plan\'s current cost-sharing against the negotiated price — $113.00 per 30-day equivalent supply in 2026, $116.06 from 2027.',
        'Apply for Extra Help even if you assume you earn too much; its limits are higher than most people expect and applying is free.',
        'Sign up for TotalAssist and HealthWell alerts so you hear when a diabetes fund reopens.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Merck enrolment form signed by BOTH you and your prescriber', note: 'the prescription is written inside the form, in Section 4' },
    { item: 'A written account of financial and medical hardship', note: 'only if you have Medicare and are applying under Merck\'s exception' },
  ],
  ifUnavailable: [
    {
      text: 'Because Merck\'s program is written for people without coverage, the first thing to check on Medicare is not an application at all — ask what your plan charges for generic sitagliptin, and what it charges for Januvia at its negotiated price.',
    },
    ...standardAlternatives('Januvia'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Januvia?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans cover Januvia, and it is one of the drugs whose price Medicare has negotiated. The maximum fair price is $113.00 for a 30-day equivalent supply from January 1, 2026, rising to $116.06 from January 1, 2027. You still pay your plan\'s cost-sharing, but it is calculated against that price. Part D out-of-pocket costs are capped at $2,100 in 2026, and <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Januvia patient assistance program for people on Medicare?',
      answer:
        'Merck runs one, but its rules are unusual and worth reading closely. The Merck Patient Assistance Program provides Januvia free — and its eligibility requires that you "do not have insurance or other coverage for your prescription medicine", with Medicare listed among the examples of disqualifying coverage. Merck does publish an exception: people who do not meet the insurance criteria "may still qualify… if they attest that they have special circumstances of financial and medical hardship, and their income meets the program criteria." If you have Part D, that exception is your route. Call 1-800-727-5400.',
    },
    {
      question: 'What are the Merck income limits?',
      answer:
        'Merck publishes $63,840 or less for an individual, $86,560 or less for a couple, and $132,000 or less for a family of four, with different limits in Alaska and Hawaii (call 1-800-727-5400 for those). These figures belong to Merck\'s own table. Other manufacturers publish different dollar limits even when they describe eligibility in similar terms, because each builds its table from a poverty-guideline year of its own choosing — never carry one program\'s numbers to another\'s application.',
    },
    {
      question: 'Is there a charitable grant for Januvia right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist\'s Type 2 diabetes fund lists Januvia and generic sitagliptin but was closed to new applicants, and HealthWell\'s Type 2 Diabetes fund was closed too. Good Days has no diabetes fund. Sign up for alerts on both; TotalAssist has no waitlist, so the notification is what gets you in.',
    },
    {
      question: 'Is there a generic for Januvia?',
      answer:
        'Yes. Generic sitagliptin tablets are labelled with FDA alongside Merck\'s Januvia, and TotalAssist lists generic sitagliptin on the same fund as the brand. There are also separately branded sitagliptin products (Zituvio, Brynovin) and generic sitagliptin-metformin combinations. Ask your prescriber and your plan what the generic costs on your formulary — for many people that is the largest saving available, and it needs no application.',
    },
    {
      question: 'Can I use a Januvia savings card with Medicare?',
      answer:
        'No. Manufacturer copay cards cannot be used with Part D, Medicare Advantage drug coverage, Medicaid, TRICARE or VA benefits — federal anti-kickback rules are why. We could not verify the current Januvia card at all: januvia.com now serves the prescribing-information PDF rather than a consumer site, and no Merck-owned savings page could be found, so no terms or dollar figures are published here.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or automated-call notifications when a fund opens, with no waitlist or queue; HealthWell offers alerts on each fund page. While you wait, the routes that do not depend on a fund balance are the generic, the negotiated price, Extra Help, Merck\'s hardship exception, and the Medicare Prescription Payment Plan. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['farxiga', 'jardiance', 'trulicity'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Januvia' },
  ],
  sources: [
    label,
    dailymedSitagliptin,
    merckHelps,
    merckHelpsHome,
    januviaPi,
    totalAssistT2dm,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    SRC.healthWellT2D,
    SRC.healthWellFunds,
    goodDays,
    cmsSelectedDrugFile,
    SRC.cmsMfp2026,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup). A literal, never the shared
  // CHECKED constant. Re-verify the Merck insurance rule first — it is the
  // claim on this page a reader is most likely to be surprised by.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Januvia Assistance',
    status: 'coming-soon',
    description:
      'Why Merck\'s program is written for the uninsured, how the hardship exception works on Medicare, and what the negotiated price changes.',
  },
  description_meta:
    'How to lower the cost of Januvia (sitagliptin) on Medicare: Merck\'s assistance program and its hardship exception, the $113.00 negotiated price, generic sitagliptin, diabetes fund status and Extra Help — verified August 2026.',
};

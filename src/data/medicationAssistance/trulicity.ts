// ---------------------------------------------------------------------------
// Trulicity (dulaglutide) — Eli Lilly and Company. Independently researched
// 2026-08-26. Every program below was read on the official source cited with
// it. Batch 3 (spec §24 #11) — a NEW page.
//
// RESEARCH NOTE (access): lilly.com and lillycares.com serve a Cloudflare JS
// challenge on the `www` host. The apex hosts (lillycares.com,
// trulicity.com → trulicity.lilly.com) serve the same pages without it, so
// every Lilly fact here was read on the official page, not on a summary.
//
// The Lilly Cares finding is drug-specific in both directions: Trulicity is
// named in Group 1, and Lilly Cares separately flags restricted products
// ("Reyvow availability is limited to currently enrolled and re-enrolling
// patients") — Trulicity carries no such flag, and the page carries a banner
// saying new Trulicity applications are being accepted again. Contrast the
// Mounjaro record, where the same list omits the drug entirely.
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
  title: 'Trulicity prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=463050bd-2b1c-40f5-b3c3-0a04bb433309',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'GLP-1 receptor agonist; approved uses; weekly dosing',
};
const lillyCaresMeds = {
  title: 'Lilly Cares — available medications (Trulicity listed; "new applications … once again being accepted")',
  url: 'https://lillycares.com/available-medications',
  publisher: 'Lilly Cares Foundation',
  checked: CHECKED,
  supports: 'Trulicity listed and accepting new applications; phone, fax and address',
};
const lillyCaresApply = {
  title: 'Lilly Cares — how to apply (Group 1 medications, 2026 income table)',
  url: 'https://lillycares.com/how-to-apply',
  publisher: 'Lilly Cares Foundation',
  checked: CHECKED,
  supports: 'Group 1 = Medicare Part D accepted at or below 300% FPL; 2026 FPL income table; Medicaid/LIS/VA exclusion',
};
const lillyCaresAppPdf = {
  title: 'Lilly Cares Foundation Patient Assistance Program application (PDF)',
  url: 'https://www.lillycares.com/assets/pdf/lilly_cares_application.pdf',
  publisher: 'Lilly Cares Foundation',
  checked: CHECKED,
  supports: 'Trulicity in the Group 1 medication table; application requirements',
};
const trulicitySavings = {
  title: 'Trulicity Savings Card — terms and conditions',
  url: 'https://trulicity.lilly.com/savings-resources',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'commercial-only; Medicare/Medicaid/TRICARE/DoD/VA exclusion; $25 offer, maximums, expiry; phone',
};
const lillyDirect = {
  title: 'Trulicity self-pay through LillyDirect',
  url: 'https://www.lilly.com/lillydirect/trulicity',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'self-pay price starting at $389/month',
};
const lillyDirectTerms = {
  title: 'LillyDirect Trulicity purchase terms',
  url: 'https://www.lilly.com/lillydirect/medicines/trulicity/trulicity-purchase-terms',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'Part D enrollees may buy at self-pay price; no reimbursement, no TrOOP credit',
};
const totalAssistT2d = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $2,000 award; government-insured coverage required',
};
const healthWellT2dTrulicity = {
  title: 'HealthWell Foundation — Type 2 Diabetes fund (Trulicity on the covered-treatments list)',
  url: 'https://www.healthwellfoundation.org/fund/type-2-diabetes/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $1,000 maximum award; Trulicity and dulaglutide listed',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no type 2 diabetes program',
};

export const TRULICITY: MedicationAssistanceRecord = {
  slug: 'trulicity',
  brandName: 'Trulicity',
  genericName: 'dulaglutide',
  manufacturer: 'Eli Lilly and Company',
  conditions: ['diabetes', 'heart'],
  // "TRULICITY® is a glucagon-like peptide-1 (GLP-1) receptor agonist" (label).
  drugClass: ['glp-1'],
  description:
    'Trulicity is a once-weekly injection that helps lower blood sugar in adults and children aged 10 and older with type 2 diabetes, and lowers the risk of major cardiovascular events in adults with type 2 diabetes who already have heart disease or several risk factors for it.',
  usedFor: [
    'Improving blood-sugar control, with diet and exercise, in adults and children aged 10 and older with type 2 diabetes',
    'Reducing the risk of major adverse cardiovascular events in adults with type 2 diabetes who have established cardiovascular disease or multiple cardiovascular risk factors',
  ],
  whyCostly:
    'Trulicity is a brand-only injectable with no generic, so Part D plans place it on a brand or specialty tier where you pay a percentage of the price rather than a flat copay. GLP-1 medicines are also a common target for prior authorization and step therapy, which can delay a fill or push you toward a different medicine first.',
  medicareContext:
    'Medicare Part D and Medicare Advantage drug plans generally cover Trulicity when it is prescribed for type 2 diabetes — Part D covers GLP-1 medicines for diabetes, not for weight loss alone. Part D out-of-pocket costs are capped at $2,100 in 2026, and the Medicare Prescription Payment Plan lets you spread that across monthly payments. Trulicity is not on the Medicare-negotiated drug lists for 2026 or 2027, so your cost is set entirely by your plan\'s tier and cost-sharing. One thing to know before you go looking: the Medicare GLP-1 Bridge does not apply to you if your plan already covers Trulicity.',
  quickAnswer: {
    verdict:
      'Yes — and this is one of the clearer cases on Medicare. Lilly Cares provides Trulicity free to people with Medicare Part D whose household income is at or below 300% of the federal poverty level, and it is currently accepting new Trulicity applications. The savings card excludes Medicare. Both type 2 diabetes charity funds we checked were closed to new applicants, and the Medicare GLP-1 Bridge does not cover Trulicity.',
    points: [
      'Lilly Cares Foundation: Trulicity is a Group 1 medication — "for patients who have no insurance or have Medicare Part D and have a household annual adjusted gross income at or below 300% Federal Poverty Level." Lilly Cares posted that new Trulicity applications are being accepted again and no longer need a medical exception request.',
      'You cannot use Lilly Cares if you are enrolled in Medicaid, full Extra Help (the Part D Low-Income Subsidy) or VA benefits — those are treated as alternatives to the program, not additions to it.',
      'Trulicity Savings Card: commercially insured patients only. Lilly\'s terms exclude Medicare, Medicare Part D, Medicare Advantage, Medigap, Medicaid, TRICARE, DoD and VA.',
      'Charitable grants: TotalAssist\'s Type 2 diabetes fund and its health-equity twin, and HealthWell\'s Type 2 Diabetes fund, all list Trulicity and all were closed to new applicants when we checked. Good Days has no diabetes fund.',
      'Medicare GLP-1 Bridge: not a route for Trulicity. The Bridge names dulaglutide in its definition of a GLP-1 drug, and you are not eligible if you can get a GLP-1 through your Medicare drug plan or if you have type 2 diabetes.',
      'LillyDirect self-pay starts at $389 a month. Part D enrollees may buy at that price, but Lilly\'s terms say none of it counts toward your Part D out-of-pocket total.',
    ],
  },
  programs: [
    {
      id: 'lillycares',
      kind: 'manufacturer-pap',
      name: 'Lilly Cares Foundation Patient Assistance Program',
      operator: 'Lilly Cares Foundation',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. The Lilly Cares medication page carries a notice: "New applications for Trulicity are once again being accepted, and no longer require a medical exception request." Where a product IS restricted, Lilly Cares says so on the same page — Reyvow is marked "limited to currently enrolled and re-enrolling patients." Trulicity carries no such restriction.',
      medicare: 'conditional',
      medicareNote:
        'Medicare Part D enrollees may apply. Trulicity is a Group 1 medication, and Lilly Cares defines Group 1 as "for patients who have no insurance or have Medicare Part D and have a household annual adjusted gross income ≤ 300% Federal Poverty Level." The condition that catches people out: you must NOT be enrolled in Medicaid, full Low-Income Subsidy (Extra Help) or Veterans benefits. If you qualify for full Extra Help, that is your route instead of Lilly Cares.',
      summary:
        'A charitable foundation funded by Eli Lilly that supplies prescribed Lilly medicines free to patients in financial need. Trulicity is on the current available-medications list and in the Group 1 income tier.',
      covers: 'Trulicity at no cost to approved patients for the enrollment term.',
      eligibility: [
        'Permanent resident of the United States, including Puerto Rico and the U.S. Virgin Islands',
        'A prescription from your healthcare provider for Trulicity',
        'No insurance, or Medicare Part D coverage (the Group 1 insurance rule)',
        'Household annual adjusted gross income at or below 300% of the federal poverty level. On the Lilly Cares Group 1 table — which the program states is built on the 2026 Federal Poverty Guidelines — that is $47,880 for one person, $64,920 for two, $81,960 for three, $99,000 for four, $116,040 for five and $133,080 for six. Alaska and Hawaii limits differ; call the program.',
        'Not enrolled in Medicaid, full Low-Income Subsidy (Extra Help) or Veterans (VA) benefits',
        'Your insurance plan or a third party must not require you to apply to Lilly Cares as a condition of coverage (what Lilly calls an alternate funding program)',
      ],
      requirements: [
        'Completed patient section of the Lilly Cares application, signed and dated',
        'Your healthcare provider completes and signs the prescriber section',
        'Proof of household income, and copies of your insurance cards',
      ],
      howToApply:
        'Apply online at lillycares.com, or download the application PDF, complete the patient section, have your prescriber complete theirs, and fax or mail it. Lilly Cares recommends the electronic application to reduce paperwork and delays. There is never a fee.',
      applyUrl: 'https://lillycares.com/how-to-apply',
      applyLabel: 'Apply to Lilly Cares',
      phone: '1-800-545-6962',
      sources: [lillyCaresMeds, lillyCaresApply, lillyCaresAppPdf],
    },
    {
      id: 'savings-card',
      kind: 'manufacturer-savings',
      name: 'Trulicity Savings Card',
      operator: 'Eli Lilly and Company',
      status: 'limited',
      statusNote:
        'Running, but not for you if you have Medicare. The card expires and savings end on December 31, 2026 under the terms posted on August 26, 2026.',
      medicare: 'excluded',
      medicareNote:
        'Lilly\'s card eligibility says you must not be "enrolled in any state, federal, or government funded healthcare program, including, without limitation, Medicaid, Medicare, Medicare Part D, Medicare Advantage, Medigap, DoD, VA, TRICARE/CHAMPUS, or any state prescription drug assistance program." If you start receiving drug coverage under any of those, Lilly asks you to call and stop participation.',
      summary:
        'A commercial copay card. Eligible patients with commercial drug insurance covering Trulicity may pay as little as $25 for a one-, two- or three-month fill. It is listed here so you can see why it does not apply to you, not because it might.',
      covers:
        'Up to $150 per one-month fill, $300 per two-month fill or $450 per three-month fill, with a separate annual maximum of $1,950 and up to 13 fills per calendar year.',
      eligibility: [
        'Enrolled in a commercial drug insurance plan with coverage for Trulicity',
        'Not enrolled in any state, federal or government-funded healthcare program — Medicare and Medicare Part D are named explicitly',
        'A prescription for an approved use consistent with the FDA-approved labeling',
      ],
      howToApply: 'Not applicable if you have Medicare. Commercially insured patients enrol through the Trulicity savings page.',
      applyUrl: 'https://trulicity.lilly.com/savings-resources',
      applyLabel: 'Trulicity Savings Card terms',
      phone: '1-866-923-1953',
      sources: [trulicitySavings, SRC.oigCoupons],
    },
    {
      id: 'lillydirect',
      kind: 'manufacturer-direct',
      name: 'LillyDirect self-pay pricing',
      operator: 'Eli Lilly and Company',
      status: 'open',
      statusNote: 'Available on August 26, 2026 — a cash price, not insurance and not assistance.',
      medicare: 'conditional',
      medicareNote:
        'You may buy Trulicity at the self-pay price while enrolled in Medicare, but the purchase terms require that you not seek reimbursement from any plan and, if you have Part D, that you not count any part of what you pay toward your Medicare Part D true out-of-pocket (TrOOP) total. In plain terms: paying cash here does not move you toward the $2,100 Part D cap.',
      summary:
        'Lilly sells Trulicity directly to self-pay patients through LillyDirect, starting at $389 a month for the 0.75 mg/0.5 mL starting dose. A prescription is still required; your prescriber sends it to the LillyDirect pharmacy partner.',
      covers: 'A cash price for the medication only. Taxes and fees may apply.',
      eligibility: [
        'A valid Trulicity prescription',
        'Willingness to pay cash and forgo insurance reimbursement for that fill',
      ],
      howToApply:
        'Ask your prescriber to send the prescription to the LillyDirect pharmacy partner listed on the LillyDirect Trulicity page. The pharmacy contacts you to confirm details and complete checkout.',
      applyUrl: 'https://www.lilly.com/lillydirect/trulicity',
      applyLabel: 'LillyDirect — Trulicity self-pay',
      sources: [lillyDirect, lillyDirectTerms],
    },
    {
      id: 'glp1-bridge',
      kind: 'government',
      name: 'Medicare GLP-1 Bridge ($50 a month, CMS demonstration)',
      operator: 'Centers for Medicare & Medicaid Services',
      status: 'not-found',
      statusNote:
        'Running July 1, 2026 – December 31, 2027, but it is not a route for Trulicity. Recorded here because it is the first thing people ask about after hearing "GLP-1" and "$50" in the same sentence.',
      medicare: 'excluded',
      medicareNote:
        'Two separate rules shut this door. Medicare\'s own guidance says you are not eligible if you can receive a GLP-1 drug through your Medicare drug plan — and it defines GLP-1 drugs as products containing semaglutide, tirzepatide, orforglipron, dulaglutide or liraglutide, which includes Trulicity. It also says you are not eligible if you have type 2 diabetes, because your drug plan should already cover a GLP-1 for you.',
      summary:
        'A short-term CMS demonstration giving eligible Part D beneficiaries certain GLP-1 drugs for a $50 copay, for weight management. Trulicity is not one of the covered drugs, and people taking a GLP-1 through their Part D plan are told to keep getting it that way.',
      eligibility: [],
      howToApply: 'Not applicable to Trulicity. If you want to check the Bridge for another reason, start at Medicare.gov or call 1-800-MEDICARE.',
      applyUrl: 'https://www.medicare.gov/publications/12234-medicare-glp-1-bridge-glp-1-drugs-for-50-a-month.pdf',
      applyLabel: 'Medicare GLP-1 Bridge fact sheet',
      sources: [SRC.medicareGlp1Bridge, SRC.cmsGlp1Bridge, SRC.medicareWeightLossDrugs],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Type 2 diabetes funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Type 2 diabetes (T2DM) · Type 2 diabetes (T2DM) health equity',
      status: 'closed',
      statusNote:
        'Both the Type 2 diabetes fund and its health-equity twin were closed to new applicants on August 26, 2026, even though Trulicity is on each fund\'s approved-medication list.',
      medicare: 'eligible',
      medicareNote: 'When open, these funds require government insurance (Medicare, Medicaid or TRICARE) that covers your Trulicity costs.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (which absorbed the PAN Foundation\'s funds on July 1, 2026) lists Trulicity under its Type 2 diabetes funds. A listing is not an open fund — both were closed when we checked. Sign up to be notified the moment one reopens; TotalAssist has no waitlist or queue.',
      covers: 'When open: $2,000 guaranteed award for eligible out-of-pocket costs, one grant per condition.',
      eligibility: TOTALASSIST_ELIGIBILITY,
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [SRC.totalAssistFunds, totalAssistT2d, SRC.totalAssistMedIndex, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Type 2 Diabetes fund',
      operator: 'HealthWell Foundation',
      fund: 'Type 2 Diabetes',
      status: 'closed',
      statusNote:
        'The fund was "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Trulicity and dulaglutide are both on its covered-treatments list.',
      medicare: 'eligible',
      medicareNote: 'When open, HealthWell requires insurance that pays part of the cost of the drug — Medicare Part D qualifies. A discount card does not count as insurance.',
      summary:
        'HealthWell lists Trulicity on its Type 2 Diabetes fund. HealthWell states that closed funds reopen as funding is replenished, and offers real-time alerts for each fund.',
      covers: 'When open: up to $1,000 as a pharmacy card. Household income up to 500% of the federal poverty level.',
      eligibility: [
        'Insurance that covers part of the cost of Trulicity (Medicare qualifies)',
        'Household income up to 500% of the federal poverty level, adjusted for household size and cost of living',
        'A type 2 diabetes diagnosis verified by your provider',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/type-2-diabetes/',
      applyLabel: 'HealthWell Type 2 Diabetes fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellT2dTrulicity, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no type 2 diabetes program among the diseases it covers (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Trulicity\'s diagnosis.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'Three diabetes funds list Trulicity, and on August 26, 2026 every one of them was closed to new applicants: TotalAssist\'s Type 2 diabetes fund, its health-equity twin, and HealthWell\'s Type 2 Diabetes fund. Good Days has no diabetes fund at all. Being listed is not the same as being open — sign up for fund alerts so you hear when one reopens. The good news for Trulicity is that the route that does not depend on a fund balance, Lilly Cares, was open and accepting Medicare Part D patients when we checked.',
  extraHelpNote:
    'For Trulicity, Extra Help and Lilly Cares are alternatives, not a pair: Lilly Cares excludes anyone enrolled in full Extra Help. Check Extra Help first — it lowers the copay on every covered drug, not only Trulicity. If your income and resources are above the Extra Help limits but your household income is still at or below 300% of the poverty level, Lilly Cares is the route.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Trulicity on Medicare the order matters, because the two strongest routes exclude each other. Work down this list:',
      bullets: [
        'Limited income and resources → apply for Medicare Extra Help through Social Security first. It is free, it lasts, and it lowers every covered drug.',
        'On Medicare Part D, not on Medicaid or full Extra Help or VA benefits, household income at or below 300% of the poverty level → Lilly Cares (free Trulicity).',
        'Type 2 diabetes and government insurance → sign up for TotalAssist and HealthWell alerts; both diabetes funds were closed when we checked.',
        'Paying cash by choice → LillyDirect self-pay from $389 a month, knowing it does not count toward your Part D cap.',
        'Commercial insurance rather than Medicare → the Trulicity Savings Card, which Medicare rules out.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Trulicity appears in TotalAssist\'s medication index and on HealthWell\'s Type 2 Diabetes fund page, but a listing does not mean funding is available. On the day we checked, neither charity fund was open and Lilly Cares was. Status changes without notice.',
      bullets: [
        'Lilly Cares: the available-medications page at lillycares.com carries any restriction notice for a specific product — check it before you apply.',
        'TotalAssist: the fund list at totalassist.org/funds shows "Open" or "Closed" for every fund.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program sets its own rules. For Trulicity on August 26, 2026, these are the ones that decide your application:',
      bullets: [
        'Lilly Cares: Medicare Part D (or no insurance); household adjusted gross income at or below $47,880 for one person or $64,920 for two on the program\'s 2026 table; and not enrolled in Medicaid, full Extra Help or VA benefits.',
        'TotalAssist (when open): government insurance covering Trulicity; income at or below 500% FPL adjusted for local cost of living; a type 2 diabetes diagnosis in treatment.',
        'HealthWell (when open): insurance that pays part of the cost; income up to 500% FPL; a provider-verified diagnosis.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Lilly Cares recommends the electronic application to reduce paperwork and delays. Have these ready before you start:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card.',
        'Household size and household adjusted gross income, plus proof — your most recent federal tax return is the usual document.',
        'Your Trulicity prescription details and your prescriber\'s name, office address, phone and fax.',
        'If you have applied for Extra Help, the result — Lilly Cares needs to know you are not enrolled in the full subsidy.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Lilly Cares: you complete the patient section; your prescriber completes and signs the prescriber section. Apply online at lillycares.com, or fax the form to 1-844-431-6650, or mail it to PO Box 501847, San Diego, CA 92150.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone; Patient Advocate Foundation verifies your diagnosis with your provider.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Lilly Cares: the foundation notifies you and your prescriber of the decision. Call 1-800-545-6962, Monday–Friday 8am–6pm ET, to check on an application or a shipment.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
        'TotalAssist (when open): you learn immediately whether you are approved; proof of income is due within 30 days.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'Sign up for TotalAssist and HealthWell alerts so you hear when a diabetes fund reopens — there is no waitlist or queue.',
        'If Lilly Cares turned you down because you are enrolled in full Extra Help, that is not a dead end — Extra Help is the stronger benefit, because it lowers the cost of every covered drug.',
        'If Lilly Cares turned you down on income, apply for Extra Help anyway; its limits surprise people.',
        'Ask your doctor whether another diabetes medicine on your plan\'s preferred tier would work for you, or about a formulary exception if Trulicity is the one you need.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Most recent federal tax return', note: 'Lilly Cares — proof of household adjusted gross income' },
    { item: 'Prescriber name, office address, phone and fax', note: 'Lilly Cares — your prescriber signs their own section' },
  ],
  ifUnavailable: [
    {
      text: 'If Lilly Cares declined you because you are enrolled in full Extra Help, you already hold the better benefit — confirm your Part D plan is applying the subsidised copays.',
      href: '/blog/extra-help-explained.html',
      label: 'Extra Help explained (Utah)',
    },
    ...standardAlternatives('Trulicity'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Trulicity?',
      answer:
        'Generally yes, when it is prescribed for type 2 diabetes. Medicare Part D and Medicare Advantage drug plans cover GLP-1 medicines such as Trulicity for diabetes — not for weight loss alone — often on a brand or specialty tier and sometimes with prior authorization or step therapy. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Trulicity patient assistance program for people on Medicare?',
      answer:
        'Yes. The Lilly Cares Foundation lists Trulicity as a Group 1 medication, which it defines as "for patients who have no insurance or have Medicare Part D and have a household annual adjusted gross income ≤ 300% Federal Poverty Level." On the program\'s 2026 table that is $47,880 for one person or $64,920 for two. You are not eligible if you are enrolled in Medicaid, full Extra Help or VA benefits. Apply at lillycares.com or call 1-800-545-6962.',
    },
    {
      question: 'I heard Lilly Cares stopped taking Trulicity applications. Is that still true?',
      answer:
        'Not as of August 26, 2026. The Lilly Cares available-medications page carries a notice saying "New applications for Trulicity are once again being accepted, and no longer require a medical exception request." Lilly Cares flags restricted products on that same page — Reyvow, for example, is marked as limited to currently enrolled and re-enrolling patients — and Trulicity carries no such restriction. Check the page before you apply, because these notices change.',
    },
    {
      question: 'Can I use the Trulicity Savings Card with Medicare?',
      answer:
        'No. Lilly\'s card terms require that you not be enrolled in any state, federal or government-funded healthcare program, and name Medicare, Medicare Part D, Medicare Advantage, Medigap, Medicaid, DoD, VA and TRICARE. If you begin receiving drug coverage under any of those, Lilly asks you to call 1-866-923-1953 to stop participation. Federal rules are the reason — see the key terms lower on this page.',
    },
    {
      question: 'Does the Medicare GLP-1 Bridge cover Trulicity for $50 a month?',
      answer:
        'No. The Bridge is a CMS demonstration running July 1, 2026 through December 31, 2027 for weight management, and Trulicity is not one of its covered drugs. Two of its rules exclude you anyway: you are not eligible if you can receive a GLP-1 drug through your Medicare drug plan — and Medicare\'s definition of a GLP-1 drug names dulaglutide, the active ingredient in Trulicity — and you are not eligible if you have type 2 diabetes, because your plan should already cover a GLP-1 for you.',
    },
    {
      question: 'Is there a charitable grant for Trulicity right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Trulicity under its Type 2 diabetes fund and the health-equity version of that fund, and HealthWell lists it on its Type 2 Diabetes fund — all three were closed to new applicants. Good Days has no diabetes fund. Sign up for TotalAssist and HealthWell alerts and check back; funds reopen when money arrives.',
    },
    {
      question: 'Is there a generic for Trulicity?',
      answer:
        'No. Dulaglutide is a brand-only injectable with no generic or biosimilar on the U.S. market. If cost is the problem, ask your doctor whether a different diabetes medicine on your plan\'s preferred tier would work for you, and see <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['ozempic', 'mounjaro', 'jardiance', 'farxiga'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Trulicity' },
  ],
  sources: [
    label,
    lillyCaresMeds,
    lillyCaresApply,
    lillyCaresAppPdf,
    trulicitySavings,
    lillyDirect,
    lillyDirectTerms,
    SRC.medicareGlp1Bridge,
    SRC.cmsGlp1Bridge,
    SRC.medicareWeightLossDrugs,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    totalAssistT2d,
    SRC.totalAssistMedIndex,
    SRC.totalAssistNotify,
    healthWellT2dTrulicity,
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
    title: 'How to Apply for Trulicity Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of the Lilly Cares application, the Extra Help rule that decides whether you use it, and why the GLP-1 Bridge is not a Trulicity route.',
  },
  description_meta:
    'How to find financial assistance for Trulicity (dulaglutide) on Medicare: the Lilly Cares Group 1 program and its 300% FPL limit, why the savings card excludes Medicare, why the GLP-1 Bridge does not apply, diabetes fund status, and Extra Help — verified August 2026.',
};

// ---------------------------------------------------------------------------
// Praluent (alirocumab) — Regeneron Pharmaceuticals. Independently researched
// 2026-08-26. Every program below was read on the official source cited with
// it. Batch 5 (spec §24 Phase 4 list) — a NEW slug.
//
// Three things the research settled that the legacy data had wrong or vague:
//   • Regeneron, not Sanofi, markets Praluent in the U.S. and runs its
//     assistance program. Sanofi Patient Connection's own medications list
//     (22 medicines) does not include Praluent.
//   • Regeneron's only published patient-assistance form is a RE-ENROLLMENT
//     form that requires prior enrollment; no new-patient form exists on any
//     reachable Regeneron page, and the form has no Medicare pathway.
//   • The cash route is TrumpRx.gov ($225 a month against a $537.21 list
//     price), with terms that let a Medicare enrollee buy outside Part D.
// The MyPRALUENT copay card's dollar terms live behind a login and could not
// be read; only its government-payer exclusion is documented, so the card is
// recorded as 'verify' with no dollar figure — never a borrowed one.
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
  title: 'Praluent prescribing information (DailyMed, Regeneron label)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bcfbac2-e8ac-4569-8edc-bcde3b1fd172',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses; PCSK9 inhibitor (human monoclonal antibody); 75 mg/mL and 150 mg/mL single-dose pens; "Manufactured by: Regeneron" (rev. 10/2025)',
};
const purpleBook = {
  title: 'FDA Purple Book — alirocumab (BLA 125559)',
  url: 'https://purplebooksearch.fda.gov/index.cfm?event=search&searchText=alirocumab',
  publisher: 'U.S. Food and Drug Administration',
  checked: CHECKED,
  supports: 'no licensed biosimilar',
};
const papForm = {
  title: 'MyPRALUENT Patient Assistance Program — re-enrollment form (PDF, 03/2025)',
  url: 'https://www.praluent.com/resource/1742227906000/Praluent_pdfs/PAPEnrollmentForm.pdf',
  publisher: 'Regeneron Pharmaceuticals',
  checked: CHECKED,
  supports: 'prior-enrollment requirement; "uninsured or insured with no pharmacy coverage"; 300% FPL dollar table; documents; fax, mail, phone',
};
const copayReimbursement = {
  title: 'MyPRALUENT Copay Card Program — reimbursement request form (PDF)',
  url: 'https://www.praluent.com/resource/1710324688000/Praluent_pdfs/copay-reimbursement-form.pdf',
  publisher: 'Regeneron Pharmaceuticals',
  checked: CHECKED,
  supports: 'program name; certification that the prescription was not paid by Medicare, Medicaid or any federal or state program',
};
const praluentCost = {
  title: 'Praluent — starting and paying for Praluent (login-gated on the day checked)',
  url: 'https://www.praluent.com/starting-and-paying-for-praluent-rx/',
  publisher: 'Regeneron Pharmaceuticals',
  checked: CHECKED,
  supports: 'copay-card terms could NOT be read — HTTP 401 login redirect',
};
const sanofiList = {
  title: 'Sanofi Patient Connection — medications available',
  url: 'https://www.sanofipatientconnection.com/medications-available',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports: 'Praluent absent from the 22-medication list',
};
const trumpRx = {
  title: 'TrumpRx — Praluent',
  url: 'https://trumprx.gov/p/praluent',
  publisher: 'TrumpRx.gov',
  checked: CHECKED,
  supports: '$225.00 self-pay price against a $537.21 original price; Medicare buy-outside-plan terms verbatim',
};
const regeneronMfn = {
  title: 'Regeneron announces agreement with U.S. government to help lower drug costs (April 23, 2026)',
  url: 'https://investor.regeneron.com/news-releases/news-release-details/regeneron-announces-agreement-us-government-help-lower-drug',
  publisher: 'Regeneron Pharmaceuticals',
  checked: CHECKED,
  supports: 'Praluent available for direct purchase through TrumpRx.gov at the most-favored-nation price',
};
const whiteHouseMfn = {
  title: 'Fact sheet: deal with Regeneron to bring most-favored-nation pricing to American patients (April 23, 2026)',
  url: 'https://www.whitehouse.gov/fact-sheets/2026/04/fact-sheet-president-donald-j-trump-announces-deal-with-regeneron-to-bring-most-favored-nation-pricing-to-american-patients/',
  publisher: 'The White House',
  checked: CHECKED,
  supports: 'Praluent "from $537 to $225" through TrumpRx',
};
const medicarePartBvsD = {
  title: 'Prescription drugs (outpatient) — Medicare Part B vs Part D',
  url: 'https://www.medicare.gov/coverage/prescription-drugs-outpatient',
  publisher: 'Medicare.gov',
  checked: CHECKED,
  supports: 'self-administered drugs fall under Part D',
};
const cmsMfp2028List = {
  title: 'Selected drug list for initial price applicability year 2028',
  url: 'https://www.cms.gov/files/document/factsheet-medicare-negotiation-selected-drug-list-ipay-2028.pdf',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'alirocumab not selected for negotiation',
};
const totalAssistHyperchol = {
  title: 'TotalAssist — Hypercholesterolemia fund',
  url: 'https://totalassist.org/funds/hypercholesterolemia/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'open; Praluent Pen listed; $1,900 guaranteed / $3,800 maximum; government insurance; 500% FPL',
};
const totalAssistCadHe = {
  title: 'TotalAssist — Coronary artery disease (CAD) health equity fund',
  url: 'https://totalassist.org/funds/coronary-artery-disease-cad-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; Praluent listed',
};
const healthWellHyperchol = {
  title: 'HealthWell Hypercholesterolemia – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/hypercholesterolemia-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; Alirocumab and Praluent Pen listed; $2,500 maximum; 500% FPL; Medicare-only fund',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no hypercholesterolemia or cardiovascular program',
};

export const PRALUENT: MedicationAssistanceRecord = {
  slug: 'praluent',
  brandName: 'Praluent',
  genericName: 'alirocumab',
  manufacturer: 'Regeneron Pharmaceuticals',
  conditions: ['cholesterol', 'heart'],
  // "a proprotein convertase subtilisin kexin type 9 (PCSK9) inhibitor";
  // "Alirocumab is a human monoclonal antibody (IgG1 isotype) that targets
  // PCSK9" (label Highlights and §11, rev. 10/2025).
  drugClass: ['pcsk9'],
  description:
    'Praluent is an injectable PCSK9 inhibitor — a monoclonal antibody given every two or four weeks by pre-filled pen — that lowers LDL cholesterol and reduces the risk of heart attack and stroke in adults at increased cardiovascular risk. Regeneron now markets it in the United States and runs its assistance programs.',
  usedFor: [
    'Reducing the risk of major adverse cardiovascular events (coronary heart disease death, heart attack, stroke or unstable angina requiring hospitalization) in adults at increased risk for these events',
    'Lowering LDL cholesterol, with diet and exercise, in adults with hypercholesterolemia, in adults and children 8 and older with heterozygous familial hypercholesterolemia, and in adults with homozygous familial hypercholesterolemia',
  ],
  whyCostly:
    'The federal TrumpRx site shows an original price of $537.21 for two Praluent pens (a month\'s supply at every-two-weeks dosing). Part D plans usually place PCSK9 inhibitors on a specialty tier with prior authorization requiring a statin trial, so the coinsurance can be substantial until the $2,100 annual cap. Regeneron\'s only published patient-assistance form is for re-enrollment, and the copay card excludes Medicare.',
  medicareContext:
    'Praluent is a self-injected pen, so under Medicare\'s general rule it is a Part D drug, not Part B — no CMS page names Praluent specifically. Alirocumab has not been selected for Medicare price negotiation for 2026, 2027 or 2028 (no PCSK9 inhibitor has). Part D out-of-pocket costs are capped at $2,100 in 2026. Since April 2026 Regeneron also sells Praluent for $225 a month through TrumpRx.gov; a Medicare enrollee may buy at that price, but only outside their plan — the money does not count toward the Part D deductible or cap.',
  quickAnswer: {
    verdict:
      'Yes, with a clear order of priority. TotalAssist\'s Hypercholesterolemia fund was open on August 26, 2026 and lists Praluent, for people with government insurance and income at or below 500% of the poverty level. The $225-a-month TrumpRx price is open to Medicare enrollees who pay cash outside their plan. Regeneron\'s MyPRALUENT patient assistance program is documented only for re-enrollment and requires having no pharmacy coverage, so it is not a realistic route for someone on Part D. The copay card excludes Medicare, HealthWell\'s cholesterol fund was closed, and Good Days has no cholesterol fund.',
    points: [
      'TotalAssist Hypercholesterolemia fund: open on August 26, 2026 — $1,900 guaranteed award, up to $3,800, government insurance required (Medicare counts), income at or below 500% FPL. Praluent Pen is on its list.',
      'TrumpRx cash price: $225.00 for two pens (58% off $537.21). Medicare enrollees may use it, but must not seek reimbursement or count the cost toward their Part D deductible or out-of-pocket limit.',
      'MyPRALUENT Patient Assistance Program: Regeneron\'s only published form is a re-enrollment form that requires prior enrollment and being "uninsured or insured with no pharmacy coverage," with household income at or below $47,880 (one person) or $64,920 (two). It contains no Medicare pathway.',
      'MyPRALUENT Copay Card: commercial insurance only — Regeneron\'s reimbursement form certifies the prescription "was not paid in whole or in part by Medicare, Medicaid, or any federal or state programs." Its dollar terms are behind a login and are not published here.',
      'Medicare: not a negotiated-price drug through 2028; Part D costs capped at $2,100 in 2026; Extra Help can cut a covered brand copay to about $12.65 if you qualify.',
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
        'Open and accepting applications on August 26, 2026. "Praluent Pen (Alirocumab)" is on the approved-medication list. TotalAssist\'s other cardiovascular funds that list Praluent — coronary artery disease health equity, peripheral vascular and artery disease, stroke — were closed.',
      medicare: 'eligible',
      medicareNote: 'Requires "government-insured coverage that covers your qualifying expenses" — Medicare, Medicaid or TRICARE. This is a fund built for Medicare patients, not one that excludes them.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (which absorbed the PAN Foundation\'s funds on July 1, 2026) runs an open hypercholesterolemia fund that lists Praluent. Apply while it is open — funds close when the money is committed, and there is no waitlist.',
      covers: '$1,900 guaranteed award, up to $3,800 maximum, for eligible out-of-pocket costs. One grant per condition.',
      eligibility: [
        'Confirmed hypercholesterolemia diagnosis, in treatment (or starting within 60 days, or treated in the past 6 months)',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/funds/hypercholesterolemia/',
      applyLabel: 'Check eligibility and apply — TotalAssist',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistHyperchol, totalAssistCadHe, SRC.totalAssistMedIndex, SRC.totalAssistFunds, SRC.totalAssistApply],
    },
    {
      id: 'trumprx',
      kind: 'manufacturer-direct',
      name: 'TrumpRx cash price (Regeneron most-favored-nation price)',
      operator: 'Regeneron Pharmaceuticals, through TrumpRx.gov',
      status: 'open',
      statusNote:
        'Live on August 26, 2026: $225.00 for two 75 mg/mL or 150 mg/mL pens, shown against an original price of $537.21 (58% off). Regeneron announced Praluent\'s availability on TrumpRx on April 23, 2026; the coupon is presented at a retail pharmacy that dispenses Praluent.',
      medicare: 'conditional',
      medicareNote:
        'TrumpRx\'s terms: the offer "is for self-pay patients only," and if you have "Medicare, Medicare Part D, a Medicare Advantage Prescription Plan" or any other government program you agree to (1) not ask your insurance to pay you back, (2) not "attempt to count the cost of this medicine toward your insurance deductible or out-of-pocket limit," and (3) tell your insurer, if asked, that you bought the medicine outside its plan.',
      summary:
        'A manufacturer-funded cash price on a federal platform — the Praluent equivalent of Amgen\'s cash channel for Repatha. For a Part D enrollee it is worth it only if $225 a month beats your plan\'s coinsurance, remembering that the purchase does not move you toward the $2,100 cap. Medicare.gov notes that TrumpRx is not creditable coverage.',
      covers: 'A cash price of $225.00 per month\'s supply (two pens) rather than a grant.',
      eligibility: ['A valid Praluent prescription', 'U.S. resident paying cash outside any insurance, under the three conditions above if you have Medicare'],
      howToApply: 'Open trumprx.gov/p/praluent, accept the terms to reveal the coupon (BIN, PCN and group numbers), and present it with your prescription at a participating pharmacy.',
      applyUrl: 'https://trumprx.gov/p/praluent',
      applyLabel: 'TrumpRx — Praluent',
      sources: [trumpRx, regeneronMfn, whiteHouseMfn],
    },
    {
      id: 'mypraluent-pap',
      kind: 'manufacturer-pap',
      name: 'MyPRALUENT Patient Assistance Program',
      operator: 'Regeneron Pharmaceuticals',
      status: 'limited',
      statusNote:
        'The only enrollment document Regeneron publishes (checked August 26, 2026) is titled "Re-enrollment Form" and its eligibility checklist requires "I have been previously enrolled in MyPRALUENT PAP." No new-patient form was found on any reachable Regeneron page. Third-party sites say the program stopped taking new patients in January 2024; that date is not confirmed on a Regeneron source. Call 1-844-772-5836 to ask whether new enrollment is open.',
      medicare: 'unknown',
      medicareNote:
        'The form never states a Medicare rule. What it requires is that you are "uninsured or insured with no pharmacy coverage," and it asks you to inform the program immediately "If I decide to enroll in a Medicare Part D plan." A person with Part D coverage does not meet "no pharmacy coverage" as written — but that is our reading of the form, not a sentence in it. There is no spending-threshold or Extra Help-denial pathway; a "$500 Medicare out-of-pocket" route repeated by third-party sites is not on the form.',
      summary:
        'Regeneron\'s program provides Praluent at no cost to qualifying patients for up to 12 months at a time. As documented, it serves people who were previously enrolled, have no pharmacy coverage and meet the income limit.',
      covers: 'Praluent at no cost for approved patients; eligibility continues up to 12 months, then re-application.',
      eligibility: [
        'Previously enrolled in MyPRALUENT PAP (per the only published form)',
        'Uninsured, or insured with no pharmacy coverage',
        'Household income no more than 300% of the federal poverty level as the form tabulates it: $47,880 (one person), $64,920 (two), $81,860 (three), $99,000 (four), plus $17,040 per additional person — the form names no poverty-guideline year',
        'Resident of the 50 states, D.C. or Puerto Rico; Alaska, Hawaii and Puerto Rico residents should call to verify income criteria',
        'Taking Praluent for an FDA-approved use',
      ],
      requirements: [
        'Patient sections: information, household income and health insurance status (all coverage must be reported, including Medicare and Medicaid)',
        'Prescriber section with NPI, diagnosis codes and signature',
        'Signed authorization and certification; Social Security number for a soft credit check used to estimate income; proof of income may be requested',
      ],
      howToApply: 'Re-enroll online at praluent.com, or fax the completed form to 1-844-855-7278 or mail it to PO Box 592188, Orlando, FL 32859-2188. Questions: 1-844-PRALUENT (1-844-772-5836), option 1.',
      applyUrl: 'https://www.praluent.com/resource/1742227906000/Praluent_pdfs/PAPEnrollmentForm.pdf',
      applyLabel: 'MyPRALUENT PAP re-enrollment form (PDF)',
      phone: '1-844-772-5836',
      sources: [papForm, sanofiList],
    },
    {
      id: 'mypraluent-copay-card',
      kind: 'manufacturer-savings',
      name: 'MyPRALUENT Copay Card',
      operator: 'Regeneron Pharmaceuticals',
      status: 'verify',
      statusNote:
        'The program exists — Regeneron publishes a reimbursement form for it — but its terms page on praluent.com returned a login screen on August 26, 2026, so the per-month amount, annual maximum and expiry could not be read. We do not print figures from third-party sites, which contradict each other.',
      medicare: 'excluded',
      medicareNote:
        'Regeneron\'s reimbursement form requires the patient to certify: "My prescription for PRALUENT was not paid in whole or in part by Medicare, Medicaid, or any federal or state programs." Federal anti-kickback rules are the reason manufacturer copay cards exclude government insurance.',
      summary: 'A commercial copay program for people with private insurance. Not for Medicare beneficiaries.',
      eligibility: ['Commercial prescription insurance', 'Prescription not paid in whole or in part by Medicare, Medicaid or any federal or state program'],
      howToApply: 'Commercially insured patients enrol through praluent.com. Not applicable to Medicare beneficiaries. Questions: 1-844-772-5836.',
      applyUrl: 'https://www.praluent.com/starting-and-paying-for-praluent-rx/',
      applyLabel: 'Praluent — paying for Praluent',
      phone: '1-844-772-5836',
      sources: [copayReimbursement, praluentCost, SRC.oigCoupons],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Hypercholesterolemia – Medicare Access fund',
      operator: 'HealthWell Foundation',
      fund: 'Hypercholesterolemia – Medicare Access',
      status: 'closed',
      statusNote: 'The fund was "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Alirocumab and Praluent Pen are on its treatments-covered list. HealthWell\'s Cardiomyopathy and Chronic Heart Failure Medicare Access funds do not list Praluent.',
      medicare: 'eligible',
      medicareNote: 'This is a Medicare Access fund — for Medicare patients only. Premium assistance through the fund requires Medicare Part B.',
      summary:
        'HealthWell lists Praluent on its Hypercholesterolemia – Medicare Access fund. HealthWell states that closed funds reopen as funding is replenished and offers real-time alerts for each fund.',
      covers: 'When open: up to $2,500 per grant as a pharmacy card (HealthWell forecasts an average grant of about $1,230); household income up to 500% of the federal poverty level.',
      eligibility: [
        'Medicare coverage that pays part of the cost of Praluent',
        'Household income up to 500% of the federal poverty level (adjusted for household size and cost of living)',
        'Hypercholesterolemia diagnosis, verified by your provider',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/hypercholesterolemia-medicare-access/',
      applyLabel: 'HealthWell Hypercholesterolemia fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellHyperchol, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no hypercholesterolemia, lipid, coronary, stroke or other cardiovascular program among its 49 funds, and a site search for alirocumab returns nothing (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Praluent\'s diagnoses.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'One charitable fund covering Praluent was open on August 26, 2026: TotalAssist\'s Hypercholesterolemia fund ($1,900 guaranteed, up to $3,800, government insurance required, income at or below 500% FPL). HealthWell\'s Hypercholesterolemia – Medicare Access fund lists Praluent but was closed, TotalAssist\'s other cardiovascular funds that list Praluent were closed, and Good Days has no cholesterol fund. Apply to the open fund promptly — TotalAssist has no waitlist — and sign up for alerts on the closed one.',
  extraHelpNote:
    'Extra Help works inside your Part D plan, which the TrumpRx price does not: a cash purchase never counts toward your cap. If you qualify for Extra Help, a covered brand copay drops to about $12.65 a month — far below $225 — so check it before buying outside your plan.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Praluent in August 2026 there is an open charity fund and a cash price, so the realistic order is charity fund → Extra Help check → cash price, with the manufacturer program last because it is documented only for re-enrollment.',
      bullets: [
        'On Medicare with a hypercholesterolemia diagnosis → TotalAssist Hypercholesterolemia fund (open when checked; income at or below 500% FPL).',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'Paying high coinsurance and willing to buy outside your plan → TrumpRx cash price ($225 a month; does not count toward your Part D cap).',
        'Previously enrolled in MyPRALUENT PAP, no pharmacy coverage, income within the table → re-enroll; otherwise call 1-844-772-5836 to ask whether new enrollment is open.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Fund status changes without notice:',
      bullets: [
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for the Hypercholesterolemia fund — open on August 26, 2026.',
        'HealthWell: the Disease Funds page shows the Hypercholesterolemia – Medicare Access fund status; closed when checked, and closed funds reopen as money is replenished.',
        'MyPRALUENT PAP: the published form is re-enrollment only; confirm by phone.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'For the routes that were open:',
      bullets: [
        'TotalAssist: government insurance covering Praluent; income at or below 500% FPL, cost-of-living adjusted; hypercholesterolemia in treatment.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026; automatic if you have Medicaid, SSI or a Medicare Savings Program.',
        'TrumpRx: a valid prescription and agreement to the self-pay conditions (no reimbursement, nothing counted toward your deductible or cap).',
        'MyPRALUENT PAP (re-enrollment): previously enrolled; uninsured or no pharmacy coverage; income no more than $47,880 for one person or $64,920 for two, as the form tabulates it.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready so you can apply the day you decide to — TotalAssist applications are decided instantly.',
      bullets: [
        'Medicare card and your Part D / Medicare Advantage drug-plan card (carrier, plan type, policy ID, group number).',
        'Your Praluent prescription: strength (75 mg or 150 mg) and dosing schedule, plus your prescriber\'s name, phone and address.',
        'Hypercholesterolemia diagnosis (and cardiovascular history) with the date of diagnosis if within the past 6 months.',
        'Household size and annual household income, with proof (tax return, Social Security or pension statements, pay stubs).',
        'Your copay or coinsurance amount for Praluent.',
        'Social Security number (TotalAssist and HealthWell ask for it; Regeneron uses it for a soft credit check).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'TotalAssist: you apply online in about 15 minutes or by phone; Patient Advocate Foundation verifies your diagnosis with your provider and verifies income automatically.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
        'TrumpRx: no application — accept the terms online, take the coupon to the pharmacy.',
        'MyPRALUENT PAP: you complete the patient sections and sign; your prescriber completes the facility and prescribing section; submit online, by fax or by mail.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'TotalAssist: an instant decision when you submit; proof of income due within 30 days.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
        'MyPRALUENT PAP: Regeneron estimates income electronically and may request proof; approval covers up to 12 months.',
        'HealthWell: a decision after your provider verifies the diagnosis; assistance is issued as a pharmacy card.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed":',
      bullets: [
        'Sign up for HealthWell fund alerts and TotalAssist notifications — there is no waitlist, so being notified first matters.',
        'Ask your doctor whether Repatha is appropriate — it has an open manufacturer foundation and its own cash channel — or whether a formulary exception or tier reduction is possible.',
        'Apply for Extra Help even if you think you earn too much — the limits are higher than many people expect.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Compare Part D plans in the fall — PCSK9 inhibitor tiers and prior-authorization rules differ between plans.',
        'Call AltaMedicare — we\'ll check every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Copay or coinsurance amount for Praluent', note: 'TotalAssist asks for it' },
    { item: 'Social Security number', note: 'TotalAssist, HealthWell and the MyPRALUENT PAP' },
    { item: 'Bank, retirement and pension statements', note: 'Extra Help application (resources)' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your doctor whether Repatha, the other injectable PCSK9 inhibitor, is appropriate — Amgen\'s foundation was accepting applications and Amgen runs its own cash-price channel.',
      href: '/repatha-assistance-program.html',
      label: 'Repatha assistance',
    },
    ...standardAlternatives('Praluent'),
  ],
  faqs: [
    {
      question: 'Can Medicare help pay for Praluent?',
      answer:
        'Praluent is a self-injected pen, so it falls under Medicare Part D rather than Part B. Most Part D and Medicare Advantage drug plans cover it on a specialty tier with prior authorization, and Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65. See our <a href="/blog/category/drug-coverage.html">drug coverage guides</a> for how formularies work.',
    },
    {
      question: 'Is there a Praluent patient assistance program?',
      answer:
        'Regeneron runs the MyPRALUENT Patient Assistance Program, but the only form it publishes (checked August 26, 2026) is a re-enrollment form that requires prior enrollment, no pharmacy coverage and household income no more than $47,880 for one person or $64,920 for two. Sanofi Patient Connection does not cover Praluent — it is not on that program\'s medications list. Call 1-844-772-5836 to ask whether new enrollment is open.',
    },
    {
      question: 'Can I use the MyPRALUENT copay card with Medicare?',
      answer:
        'No. Regeneron\'s reimbursement form requires you to certify that your prescription "was not paid in whole or in part by Medicare, Medicaid, or any federal or state programs." Federal anti-kickback rules are the reason manufacturer copay cards exclude government insurance.',
    },
    {
      question: 'What is the $225 TrumpRx price, and can I use it with Medicare?',
      answer:
        'Since April 2026 Regeneron sells Praluent through TrumpRx.gov for $225.00 a month (two pens), against an original price of $537.21. You may use it if you have Medicare, but the terms require that you not ask your plan to reimburse you, not count the cost toward your deductible or out-of-pocket limit, and tell your insurer you bought outside the plan if asked. It makes sense only when $225 is less than your plan coinsurance and you are far from the $2,100 cap.',
    },
    {
      question: 'Is there a charitable grant for Praluent right now?',
      answer:
        'Yes — when we checked on August 26, 2026, TotalAssist\'s Hypercholesterolemia fund was open: $1,900 guaranteed, up to $3,800, for people with Medicare, Medicaid or TRICARE and income at or below 500% of the federal poverty level. Praluent Pen is on its list. HealthWell\'s cholesterol fund lists Praluent but was closed, and Good Days has no cholesterol program.',
    },
    {
      question: 'Is Praluent a Medicare negotiated-price drug?',
      answer:
        'No. Alirocumab was not selected for the Medicare Drug Price Negotiation Program for 2026, 2027 or 2028 — no PCSK9 inhibitor was. Your cost depends on your plan\'s tier and cost-sharing, up to the $2,100 cap.',
    },
    {
      question: 'Can my doctor\'s office apply for me?',
      answer:
        'For TotalAssist and HealthWell you (the patient) apply, and the foundation verifies the diagnosis with your provider. For the MyPRALUENT program your prescriber completes the prescribing section of the form. Your doctor\'s office also handles the prior authorization Part D plans usually require for a PCSK9 inhibitor. AltaMedicare can help you work through the options, free.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications with no waitlist or queue, and HealthWell says closed funds reopen as funding is replenished. While you wait: apply for Extra Help, compare the TrumpRx price against your plan cost, ask your doctor about Repatha or a formulary exception, and compare Part D plans in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['repatha', 'leqvio', 'eliquis', 'entresto'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Praluent' },
  ],
  sources: [
    label,
    purpleBook,
    papForm,
    copayReimbursement,
    praluentCost,
    sanofiList,
    trumpRx,
    regeneronMfn,
    whiteHouseMfn,
    medicarePartBvsD,
    SRC.cmsMfp2026,
    SRC.cmsMfp2027,
    cmsMfp2028List,
    SRC.medicareDrugCosts,
    totalAssistHyperchol,
    totalAssistCadHe,
    SRC.totalAssistFunds,
    SRC.totalAssistNotify,
    healthWellHyperchol,
    goodDays,
    SRC.oigCoupons,
  ],
  // Per-record verification date — a literal, never the shared CHECKED
  // constant: re-verifying one medication must move one date.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Praluent Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of the open TotalAssist cholesterol fund, the TrumpRx cash price and its Medicare conditions, Extra Help, and what Regeneron\'s program does and does not cover.',
  },
  description_meta:
    'How to find financial assistance for Praluent (alirocumab) on Medicare: the open TotalAssist cholesterol fund, the $225 TrumpRx cash price and its Medicare rules, why Regeneron\'s PAP is re-enrollment only, and Medicare Extra Help — verified August 2026.',
};

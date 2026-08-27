// ---------------------------------------------------------------------------
// Leqvio (inclisiran) — Novartis. Independently researched 2026-08-26. Every
// program below was read on the official source cited with it. Batch 5 (spec
// §24 Phase 4 list) — a NEW slug.
//
// Leqvio is different from every other medication in the registry in one way
// that changes the whole page: it is injected by a healthcare professional
// twice a year, so Medicare pays for it under PART B (the medical benefit),
// not Part D. That means Extra Help does not apply, the 20% Part B coinsurance
// is what Medigap or a Medicare Savings Program covers, and the Part D cap is
// irrelevant. Novartis's own patient FAQ says so in plain words and is quoted.
//
// Research gaps carried honestly: the LEQVIO Co-pay Program's terms page
// (start.leqvio.com) refused every connection, so only the exclusion and
// "as little as $0" language on leqvio.com is recorded; NPAF's income table
// lives inside a JavaScript wizard and is not reproduced. The research agent
// for this medication was cut off by a session limit; the sources below were
// read directly instead, on the same day.
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
  title: 'Leqvio prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6fc0afca-4513-4c35-b594-6544aee29a44',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses; "small interfering RNA (siRNA) directed to PCSK9 mRNA"; 284 mg/1.5 mL prefilled syringe administered by a healthcare professional; dosing at 0, 3 and every 6 months (rev. 8/2026)',
};
const npafList = {
  title: 'Novartis Patient Assistance Foundation — medications list',
  url: 'https://pap.novartis.com/medications-list/',
  publisher: 'Novartis Patient Assistance Foundation',
  checked: CHECKED,
  supports: 'LEQVIO (inclisiran) on the supported-medications list',
};
const npafHome = {
  title: 'Novartis Patient Assistance Foundation (NPAF)',
  url: 'https://pap.novartis.com/',
  publisher: 'Novartis Patient Assistance Foundation',
  checked: CHECKED,
  supports: 'uninsured or government insurance; income guidelines; Extra Help denial "as deemed necessary"; 4-week decision; patient portal from July 27, 2026; phone',
};
const leqvioSavings = {
  title: 'Leqvio — savings and insurance information',
  url: 'https://www.leqvio.com/savings-and-support/savings',
  publisher: 'Novartis',
  checked: CHECKED,
  supports: 'Medicare Part B coverage and 20% coinsurance; Co-pay Program "as little as $0"; "Offer not valid under Medicare…"; list price $3,587.73 per dose; Service Center phone',
};
const leqvioFaq = {
  title: 'Leqvio — frequently asked questions',
  url: 'https://www.leqvio.com/resources-and-faqs/faqs',
  publisher: 'Novartis',
  checked: CHECKED,
  supports: '"covered under traditional Medicare, also called Part B"; Medicare Advantage varies; NPAF referral through the Service Center',
};
const leqvioCare = {
  title: 'Leqvio Care Program',
  url: 'https://www.leqvio.com/savings-and-support/leqvio-care-program',
  publisher: 'Novartis',
  checked: CHECKED,
  supports: 'NPAF eligibility summary; support program; no patient assistance beyond NPAF',
};
const leqvioHcpCoverage = {
  title: 'Leqvio HCP — affordability and coverage',
  url: 'https://www.leqviohcp.com/affordability-and-coverage',
  publisher: 'Novartis',
  checked: CHECKED,
  supports: 'covered primarily under the medical benefit; Novartis states no prior authorization for Medicare patients (data on file)',
};
const medicarePartBvsD = {
  title: 'Prescription drugs (outpatient) — Medicare Part B vs Part D',
  url: 'https://www.medicare.gov/coverage/prescription-drugs-outpatient',
  publisher: 'Medicare.gov',
  checked: CHECKED,
  supports: 'Part B covers drugs you would not typically give yourself, such as those given in a doctor\'s office',
};
const cmsMfp2028List = {
  title: 'Selected drug list for initial price applicability year 2028',
  url: 'https://www.cms.gov/files/document/factsheet-medicare-negotiation-selected-drug-list-ipay-2028.pdf',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'inclisiran not selected — 2028 is the first year Part B drugs were eligible for selection',
};
const totalAssistHyperchol = {
  title: 'TotalAssist — Hypercholesterolemia fund',
  url: 'https://totalassist.org/funds/hypercholesterolemia/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'open; Leqvio (inclisiran sodium) listed; $1,900 guaranteed / $3,800 maximum; government insurance; 500% FPL',
};
const totalAssistCadHe = {
  title: 'TotalAssist — Coronary artery disease (CAD) health equity fund',
  url: 'https://totalassist.org/funds/coronary-artery-disease-cad-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; Leqvio listed',
};
const healthWellHyperchol = {
  title: 'HealthWell Hypercholesterolemia – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/hypercholesterolemia-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; Leqvio and inclisiran listed; $2,500 maximum; 500% FPL; Medicare-only fund; Part B premium assistance',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no hypercholesterolemia or cardiovascular program',
};
const trumpRx = {
  title: 'TrumpRx — browse all medicines',
  url: 'https://trumprx.gov/browse',
  publisher: 'TrumpRx.gov',
  checked: CHECKED,
  supports: 'Leqvio not listed',
};

export const LEQVIO: MedicationAssistanceRecord = {
  slug: 'leqvio',
  brandName: 'Leqvio',
  genericName: 'inclisiran',
  manufacturer: 'Novartis',
  // The label lists LDL-lowering indications only. Its cardiovascular-outcomes
  // sentence is context, not an indication, so `heart` is deliberately absent.
  conditions: ['cholesterol'],
  // Label Highlights (rev. 8/2026): "LEQVIO is a small interfering RNA (siRNA)
  // directed to proprotein convertase subtilisin kexin type 9 (PCSK9) mRNA".
  // It is not a monoclonal antibody, but it is a PCSK9-directed LDL-lowering
  // injectable, which is what the 'pcsk9' key means; the class blurb was
  // widened in this batch to say so rather than adding a one-drug key.
  drugClass: ['pcsk9'],
  description:
    'Leqvio is a twice-yearly cholesterol injection given in a doctor\'s office — an siRNA that switches off the liver\'s production of PCSK9 so the liver clears more LDL cholesterol. Because a healthcare professional administers it, Medicare pays for it under Part B, not Part D, which changes every rule about what help applies.',
  usedFor: [
    'Lowering LDL cholesterol, with diet and exercise, in adults with hypercholesterolemia',
    'Lowering LDL cholesterol in adults and children 12 and older with heterozygous familial hypercholesterolemia (HeFH)',
    'Lowering LDL cholesterol in children 12 and older with homozygous familial hypercholesterolemia (HoFH)',
  ],
  whyCostly:
    'Novartis states a list price of $3,587.73 per dose for uninsured patients — three doses in the first year, then two a year. Under Medicare Part B you owe 20% coinsurance on the Medicare-approved amount after the Part B deductible unless a Medigap policy, a Medicare Savings Program or Medicaid picks it up, and Medicare Advantage plans set their own cost-sharing. The Part D $2,100 cap and Extra Help do not apply to a Part B drug, and the manufacturer copay program excludes Medicare.',
  medicareContext:
    'Novartis\'s patient FAQ: "LEQVIO is a medication that is administered by a doctor or other health care provider, so it is covered under traditional Medicare, also called Part B." With traditional Medicare and no supplement, "you would be responsible for a 20% coinsurance payment"; with a Medigap or retiree supplement Novartis says you "may pay as little as $0"; on Medicare Advantage "your out-of-pocket costs will vary." Novartis also says no prior authorization is required for Medicare patients (its own data on file). Because it is a Part B drug, the Part D out-of-pocket cap and Extra Help are not involved — the relevant help is a Medigap policy, a Medicare Savings Program or Medicaid, and charitable funds that pay Part B cost-sharing. Inclisiran has not been selected for Medicare price negotiation for 2026, 2027 or 2028, the first year Part B drugs were eligible.',
  quickAnswer: {
    verdict:
      'Yes — but start with your Medicare coverage itself, because Leqvio is a Part B drug. If you have traditional Medicare with a Medigap policy, or a Medicare Savings Program or Medicaid, your 20% coinsurance is largely or fully covered already. If you are exposed to the coinsurance, TotalAssist\'s Hypercholesterolemia fund was open on August 26, 2026 and lists Leqvio, and the Novartis Patient Assistance Foundation lists Leqvio and accepts patients with government insurance who meet its income guidelines. The LEQVIO Co-pay Program excludes Medicare, HealthWell\'s cholesterol fund was closed, and Good Days has no cholesterol fund.',
    points: [
      'Medicare Part B: Novartis says Leqvio "is covered under traditional Medicare, also called Part B," with no prior authorization for Medicare patients; you owe 20% coinsurance unless Medigap, a Medicare Savings Program, Medicaid or your Medicare Advantage plan\'s rules change that.',
      'Novartis Patient Assistance Foundation: Leqvio is on the supported-medications list; NPAF serves patients who "are uninsured or have government insurance" and meet income guidelines, and may ask for an Extra Help denial letter. Income limits are not published as a table — check eligibility at pap.novartis.com or call 1-800-277-2254.',
      'TotalAssist Hypercholesterolemia fund: open on August 26, 2026 — $1,900 guaranteed award, up to $3,800, government insurance required (Medicare counts), income at or below 500% FPL. Leqvio is on its list.',
      'LEQVIO Co-pay Program: commercial insurance only — "Offer not valid under Medicare, Medicaid, TRICARE, VA, DoD, or any other federal or state program."',
      'Extra Help and the $2,100 Part D cap do not apply to Leqvio, because it is not a Part D drug; not a negotiated-price drug through 2028.',
    ],
  },
  programs: [
    {
      id: 'medicare-part-b',
      kind: 'government',
      name: 'Medicare Part B coverage (traditional Medicare or Medicare Advantage)',
      operator: 'Centers for Medicare & Medicaid Services / your Medicare Advantage plan',
      status: 'open',
      statusNote: 'Covered under the Part B medical benefit because a healthcare professional administers it (Novartis, checked August 26, 2026). Novartis: "For all Medicare patients, no prior authorization is required" — its own coverage data, not a CMS statement.',
      medicare: 'eligible',
      medicareNote:
        'Novartis: "If you have traditional Medicare and do not have a supplemental plan (Medigap or retiree plan), you would be responsible for a 20% coinsurance payment. If you have a Medicare Advantage plan, your out-of-pocket costs will vary, depending upon your plan." Medicare.gov\'s general rule: Part B "covers drugs you wouldn\'t typically give to yourself, like those you get at a doctor\'s office."',
      summary:
        'Not an assistance program — the coverage itself, listed first because for Leqvio it decides everything else. A Medigap policy pays the Part B coinsurance in full on most plan types; a Medicare Savings Program (QMB) or Medicaid pays it for people with limited income; Medicare Advantage plans set their own copay or coinsurance for Part B drugs, with a yearly out-of-pocket maximum.',
      covers: 'Medicare pays 80% of the Medicare-approved amount after the Part B deductible; the remaining 20% is where Medigap, a Medicare Savings Program, Medicaid or a charity fund comes in.',
      eligibility: ['Medicare Part B, with the drug administered in a doctor\'s office or outpatient setting', 'A Leqvio prescription for an approved use'],
      howToApply: 'No application — your doctor\'s office bills Medicare Part B (or your Medicare Advantage plan). Your doctor can have the LEQVIO Service Center verify your benefits first: 1-833-LEQVIO2 (1-833-537-8462), Monday–Friday 8am–8pm ET.',
      applyUrl: 'https://www.leqvio.com/resources-and-faqs/faqs',
      applyLabel: 'Leqvio FAQs — "Is LEQVIO covered by Medicare?"',
      phone: '1-833-537-8462',
      sources: [leqvioFaq, leqvioSavings, leqvioHcpCoverage, medicarePartBvsD],
    },
    {
      id: 'npaf',
      kind: 'manufacturer-pap',
      name: 'Novartis Patient Assistance Foundation (NPAF)',
      operator: 'Novartis Patient Assistance Foundation, Inc.',
      status: 'open',
      statusNote:
        'LEQVIO (inclisiran) is on NPAF\'s supported-medications list (checked August 26, 2026). NPAF introduced a patient enrollment portal for applications made on or after July 27, 2026, and says you receive a decision letter "within 4 weeks."',
      medicare: 'conditional',
      medicareNote:
        'NPAF provides medications "to eligible patients who cannot afford the cost of their Novartis medication, are uninsured or have government insurance, and meet income guidelines and other eligibility criteria." Applicants "must submit all required documentation, including proof of income and evidence of Extra Help denial as deemed necessary." NPAF publishes no income table on its site — the figures sit inside its eligibility checker, and Alaska and Hawaii have different limits — so we do not print one.',
      summary:
        'Novartis\'s independent charitable foundation supplies Leqvio free to eligible patients treated as outpatients by a U.S. provider. It will not enrol patients whose insurance uses an "alternate funding program" that conditions coverage on applying to NPAF, and only the patient, a legal guardian or a caregiver may apply — not a health plan or pharmacy.',
      covers: 'Leqvio at no cost for approved patients; refills are requested through the patient portal.',
      eligibility: [
        'Reside in the United States or a U.S. territory',
        'Treated by a licensed U.S. healthcare provider on an outpatient basis',
        'Uninsured, or insured through a government program such as Medicare',
        'Meet NPAF\'s income guidelines (not published as a table; Alaska and Hawaii differ) — use the eligibility checker at pap.novartis.com',
        'Not covered by an alternate funding program that adjusts coverage based on an NPAF application',
      ],
      requirements: [
        'Patient section and healthcare-provider section of the application',
        'Proof of income',
        'Evidence of an Extra Help denial "as deemed necessary"',
      ],
      howToApply: 'Check eligibility at pap.novartis.com; if you may qualify, you and your provider each complete your section of the application (online through the patient portal for applications from July 27, 2026). Incomplete applications get a letter with next steps; the decision arrives by letter within about 4 weeks. Questions: 1-800-277-2254. The LEQVIO Service Center (1-833-537-8462) can also refer you to NPAF.',
      applyUrl: 'https://pap.novartis.com/',
      applyLabel: 'NPAF — check eligibility and apply',
      phone: '1-800-277-2254',
      sources: [npafList, npafHome, leqvioCare, leqvioFaq],
    },
    {
      id: 'leqvio-copay',
      kind: 'manufacturer-savings',
      name: 'LEQVIO Co-pay Program',
      operator: 'Novartis',
      status: 'open',
      statusNote: 'Active for commercially insured patients on August 26, 2026 — "you may pay as little as $0." Novartis says per-treatment maximums and an annual benefit cap apply; the full terms page (start.leqvio.com) could not be reached, so the amounts are not published here.',
      medicare: 'excluded',
      medicareNote: 'Novartis: "Offer not valid under Medicare, Medicaid, TRICARE, VA, DoD, or any other federal or state program." Federal anti-kickback rules are the reason manufacturer copay programs exclude government insurance.',
      summary: 'A commercial copay program that may include a co-pay card, a payment card and a rebate, for people with private insurance. Not for Medicare.',
      eligibility: ['Private (commercial) insurance', 'Not enrolled in Medicare, Medicaid, TRICARE, VA, DoD or any other federal or state program'],
      howToApply: 'Commercially insured patients enrol at start.leqvio.com, through their provider\'s office, or by calling the LEQVIO Service Center at 1-833-537-8462. Not applicable to Medicare beneficiaries.',
      applyUrl: 'https://www.leqvio.com/savings-and-support/savings',
      applyLabel: 'LEQVIO savings and insurance information',
      phone: '1-833-537-8462',
      sources: [leqvioSavings, SRC.oigCoupons],
    },
    {
      id: 'totalassist-hyperchol',
      kind: 'charitable',
      name: 'TotalAssist — Hypercholesterolemia fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Hypercholesterolemia',
      status: 'open',
      statusNote:
        'Open and accepting applications on August 26, 2026. "Leqvio (Inclisiran Sodium)" is on the approved-medication list. TotalAssist\'s other cardiovascular funds that list Leqvio — coronary artery disease health equity and stroke — were closed.',
      medicare: 'eligible',
      medicareNote: 'Requires "government-insured coverage that covers your qualifying expenses" — Medicare, Medicaid or TRICARE. Whether Part B coinsurance on an office-administered drug is a qualifying expense is not spelled out on the fund page; ask when you apply.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (which absorbed the PAN Foundation\'s funds on July 1, 2026) runs an open hypercholesterolemia fund that lists Leqvio. Apply while it is open — funds close when the money is committed, and there is no waitlist.',
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
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Hypercholesterolemia – Medicare Access fund',
      operator: 'HealthWell Foundation',
      fund: 'Hypercholesterolemia – Medicare Access',
      status: 'closed',
      statusNote: 'The fund was "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Leqvio and inclisiran are on its treatments-covered list.',
      medicare: 'eligible',
      medicareNote: 'This is a Medicare Access fund — for Medicare patients only. It can also pay Medicare Part B premiums, which is the part of Medicare that covers Leqvio.',
      summary:
        'HealthWell lists Leqvio on its Hypercholesterolemia – Medicare Access fund. HealthWell states that closed funds reopen as funding is replenished and offers real-time alerts for each fund.',
      covers: 'When open: up to $2,500 per grant as a pharmacy card, or Medicare Part B premium assistance; household income up to 500% of the federal poverty level.',
      eligibility: [
        'Medicare coverage that pays part of the cost of Leqvio',
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
      statusNote: 'Good Days lists no hypercholesterolemia, lipid, coronary, stroke or other cardiovascular program among its 49 funds (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Leqvio\'s diagnoses. Nor is Leqvio sold at a cash price on TrumpRx.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays, trumpRx],
    },
  ],
  charitableSummary:
    'One charitable fund covering Leqvio was open on August 26, 2026: TotalAssist\'s Hypercholesterolemia fund ($1,900 guaranteed, up to $3,800, government insurance required, income at or below 500% FPL). HealthWell\'s Hypercholesterolemia – Medicare Access fund lists Leqvio but was closed, TotalAssist\'s other cardiovascular funds that list Leqvio were closed, and Good Days has no cholesterol fund. Because Leqvio is billed under Part B, confirm with the fund that office-administered cost-sharing qualifies before you count on a grant.',
  extraHelpNote:
    'Extra Help is a Part D program, and Leqvio is a Part B drug — so Extra Help does not reduce what you pay for Leqvio itself. The Part B equivalents are a Medicare Savings Program (which pays the Part B premium and, for QMB, the coinsurance) and Medicaid. If your income is limited, apply for a Medicare Savings Program first; Extra Help still lowers your other Part D drugs.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'Because Leqvio is a Part B drug, the order is different from a pharmacy drug: coverage first, then income-based help with the Part B coinsurance, then charity and the manufacturer foundation.',
      bullets: [
        'Traditional Medicare with a Medigap policy → your coinsurance is normally covered; no application needed. Medicare Advantage → ask the plan what it charges for Part B drugs.',
        'Limited income and resources → a Medicare Savings Program (QMB pays Part B coinsurance) or Medicaid, through Utah\'s Medicaid office.',
        'On Medicare, hypercholesterolemia diagnosis, exposed to the 20% coinsurance → TotalAssist Hypercholesterolemia fund (open when checked; income at or below 500% FPL).',
        'Cannot afford the drug, uninsured or on Medicare, within NPAF income guidelines → Novartis Patient Assistance Foundation.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Fund status changes without notice:',
      bullets: [
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for the Hypercholesterolemia fund — open on August 26, 2026.',
        'HealthWell: the Disease Funds page shows the Hypercholesterolemia – Medicare Access fund status; closed when checked, and closed funds reopen as money is replenished.',
        'NPAF: Leqvio was on the supported list; NPAF reserves the right to modify or discontinue the program at any time.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'For the routes that were open:',
      bullets: [
        'Medicare Savings Programs: income and resource limits set by Medicaid; QMB is the level that pays Part B coinsurance.',
        'TotalAssist: government insurance covering the expense; income at or below 500% FPL, cost-of-living adjusted; hypercholesterolemia in treatment.',
        'NPAF: U.S. resident treated as an outpatient by a licensed U.S. provider; uninsured or government-insured; within NPAF income guidelines (use the eligibility checker); not in an alternate funding program.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready so you can apply the day you decide to — TotalAssist applications are decided instantly.',
      bullets: [
        'Medicare card and any Medigap, Medicare Advantage or Medicaid card.',
        'Your Leqvio prescription and the office that administers it (name, phone, address); your Explanation of Benefits showing the Part B coinsurance if you have had a dose.',
        'Hypercholesterolemia diagnosis with the date of diagnosis if within the past 6 months.',
        'Household size and annual household income, with proof (tax return, Social Security or pension statements, pay stubs).',
        'For NPAF: an Extra Help denial letter if NPAF asks for one.',
        'Social Security number (TotalAssist and HealthWell ask for it).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Medicare Savings Program: you apply through Utah Medicaid; AltaMedicare can help you with the form, free.',
        'TotalAssist: you apply online in about 15 minutes or by phone; Patient Advocate Foundation verifies your diagnosis with your provider and verifies income automatically.',
        'NPAF: you complete the patient section (through the patient portal for applications from July 27, 2026) and your provider completes the provider section; only the patient, a guardian or a caregiver may submit it.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'TotalAssist: an instant decision when you submit; proof of income due within 30 days.',
        'NPAF: a letter with the outcome within about 4 weeks; if the application is incomplete, a letter (and a text if you opted in) with next steps.',
        'HealthWell: a decision after your provider verifies the diagnosis; assistance is issued as a pharmacy card.',
        'Medicare Savings Program: Medicaid notifies you; once approved, Medicare stops billing the Part B premium and QMB covers cost-sharing.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed":',
      bullets: [
        'Sign up for HealthWell fund alerts and TotalAssist notifications — there is no waitlist, so being notified first matters.',
        'Ask your doctor whether Repatha or Praluent is appropriate — both are Part D pen injections with different assistance routes, including a $225 TrumpRx cash price for Praluent and Amgen\'s foundation for Repatha.',
        'If you are on Medicare Advantage, check the plan\'s Part B drug cost-sharing and yearly maximum, and compare plans in the fall.',
        'If you are on traditional Medicare without a supplement, ask about Medigap eligibility — outside your initial enrollment window it may require medical underwriting in Utah.',
        'Call AltaMedicare — we\'ll check every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Medigap, Medicare Advantage or Medicaid card', note: 'determines your Part B coinsurance before any assistance' },
    { item: 'Part B Explanation of Benefits for a Leqvio dose', note: 'shows the coinsurance a charity fund would cover' },
    { item: 'Social Security number', note: 'TotalAssist and HealthWell' },
    { item: 'Extra Help denial letter', note: 'NPAF, "as deemed necessary"' },
  ],
  ifUnavailable: [
    {
      text: 'A Medigap policy pays the Part B coinsurance on Leqvio in full on most plan types — worth understanding before you look for a grant.',
      href: '/medicare-supplement.html',
      label: 'Medigap in Utah',
    },
    {
      text: 'A Medicare Savings Program is the Part B equivalent of Extra Help: QMB pays your Part B premium and coinsurance if your income and resources are limited.',
      href: '/blog/medicare-savings-programs.html',
      label: 'Medicare Savings Programs in Utah',
    },
    {
      text: 'Ask your doctor whether Repatha, a self-injected PCSK9 inhibitor covered under Part D, is appropriate — it has its own foundation and cash-price routes.',
      href: '/repatha-assistance-program.html',
      label: 'Repatha assistance',
    },
    ...standardAlternatives('Leqvio').filter((a) => !/Extra Help|Prescription Payment Plan|Part D and Medicare Advantage drug plans/.test(a.text)),
  ],
  faqs: [
    {
      question: 'Is Leqvio covered by Medicare Part B or Part D?',
      answer:
        'Part B. Novartis: "LEQVIO is a medication that is administered by a doctor or other health care provider, so it is covered under traditional Medicare, also called Part B." That means your doctor\'s office bills Medicare, you owe 20% coinsurance after the Part B deductible unless a <a href="/medicare-supplement.html">Medigap policy</a>, a Medicare Savings Program or Medicaid covers it, and Medicare Advantage plans apply their own Part B drug cost-sharing. The Part D $2,100 cap does not apply. See <a href="/medicare-basics.html">Medicare Basics</a> for how the parts differ.',
    },
    {
      question: 'Does Extra Help lower the cost of Leqvio?',
      answer:
        'No — Extra Help is a Part D program and Leqvio is a Part B drug. The Part B equivalent is a <a href="/blog/medicare-savings-programs.html">Medicare Savings Program</a>: the QMB level pays your Part B premium and cost-sharing, including the coinsurance on office-administered drugs like Leqvio, if your income and resources are within the limits. Extra Help is still worth applying for because it lowers your Part D drugs.',
    },
    {
      question: 'Is there a Leqvio patient assistance program?',
      answer:
        'Yes. Leqvio is on the Novartis Patient Assistance Foundation\'s supported-medications list (checked August 26, 2026). NPAF provides Novartis medicines free to eligible patients who "are uninsured or have government insurance" and meet its income guidelines; it may ask for an Extra Help denial letter and proof of income. NPAF does not publish an income table on its site — check eligibility at pap.novartis.com or call 1-800-277-2254.',
    },
    {
      question: 'Can I use the LEQVIO Co-pay Program with Medicare?',
      answer:
        'No. Novartis\'s terms: "Offer not valid under Medicare, Medicaid, TRICARE, VA, DoD, or any other federal or state program." The program is for people with private (commercial) insurance, who may pay as little as $0.',
    },
    {
      question: 'Is there a charitable grant for Leqvio right now?',
      answer:
        'Yes — when we checked on August 26, 2026, TotalAssist\'s Hypercholesterolemia fund was open: $1,900 guaranteed, up to $3,800, for people with Medicare, Medicaid or TRICARE and income at or below 500% of the federal poverty level, and Leqvio is on its list. Confirm with TotalAssist that Part B coinsurance on an office-administered drug qualifies. HealthWell\'s cholesterol fund lists Leqvio but was closed, and Good Days has no cholesterol program.',
    },
    {
      question: 'How much does Leqvio cost without insurance?',
      answer:
        'Novartis states "The LEQVIO list price for uninsured patients is $3,587.73 per dose." Dosing is one injection, another at three months, then every six months — three doses in the first year and two a year after that. Leqvio is not sold at a cash price on TrumpRx.',
    },
    {
      question: 'Is Leqvio a Medicare negotiated-price drug?',
      answer:
        'No. Inclisiran was not selected for the Medicare Drug Price Negotiation Program for 2026, 2027 or 2028 — 2028 was the first year Part B drugs could be selected, and no PCSK9-directed medicine was chosen.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications with no waitlist or queue, and HealthWell says closed funds reopen as funding is replenished. While you wait: check whether you qualify for a Medicare Savings Program, ask your doctor\'s office to have the LEQVIO Service Center verify your benefits, and ask about NPAF. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['repatha', 'praluent', 'entresto', 'eliquis'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/medicare-supplement.html', label: 'Medigap (Medicare Supplement) in Utah', blurb: 'The policies that pay Part B coinsurance' },
    { href: '/blog/medicare-savings-programs.html', label: 'Medicare Savings Programs in Utah', blurb: 'QMB, SLMB and QI — help with Part B costs' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
  ],
  sources: [
    label,
    npafList,
    npafHome,
    leqvioSavings,
    leqvioFaq,
    leqvioCare,
    leqvioHcpCoverage,
    medicarePartBvsD,
    SRC.cmsMfp2027,
    cmsMfp2028List,
    totalAssistHyperchol,
    totalAssistCadHe,
    SRC.totalAssistFunds,
    SRC.totalAssistNotify,
    healthWellHyperchol,
    goodDays,
    trumpRx,
    SRC.oigCoupons,
  ],
  // Per-record verification date — a literal, never the shared CHECKED
  // constant: re-verifying one medication must move one date.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Leqvio Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of why Leqvio is a Part B drug, what Medigap and Medicare Savings Programs do for the coinsurance, the open TotalAssist fund, and the Novartis foundation.',
  },
  description_meta:
    'How to find financial assistance for Leqvio (inclisiran) on Medicare: why it is a Part B drug and what that means for your costs, the Novartis Patient Assistance Foundation, the open TotalAssist cholesterol fund, and Medicare Savings Programs — verified August 2026.',
};

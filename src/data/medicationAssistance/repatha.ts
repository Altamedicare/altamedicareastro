// ---------------------------------------------------------------------------
// Repatha (evolocumab) — Amgen. Independently researched 2026-08-26. Every
// program below was read on the official source cited with it. Batch 2
// (spec §24 #8) — migrates the legacy generic page in place.
//
// Two facts here are carried with an explicit caveat rather than dropped:
// the AmgenNow $239/month price (stated in Amgen's October 2025 press release;
// amgennow.com itself prints no price) and the HealthWell $2,500 award cap
// (rendered client-side on the fund page; read via the page, not raw HTML).
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
  title: 'Repatha prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd61e902-166d-4aa6-9f3c-a18c1008d07e',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses; PCSK9 inhibitor; dosage forms (label rev. 07/2026)',
};
const purpleBook = {
  title: 'FDA Purple Book — August 2026 data file (evolocumab, BLA 125522)',
  url: 'https://www.accessdata.fda.gov/drugsatfda_docs/PurpleBook/2026/purplebook-search-August-data-download.csv',
  publisher: 'U.S. Food and Drug Administration',
  checked: CHECKED,
  supports: 'no licensed biosimilar; reference-product exclusivity to September 2028',
};
const asnfEligibility = {
  title: 'Amgen Safety Net Foundation — eligibility',
  url: 'https://www.amgensafetynetfoundation.com/eligibility.html',
  publisher: 'Amgen Safety Net Foundation',
  checked: CHECKED,
  supports: 'residency; income tables; Medicare pathway "for certain products"',
};
const asnfBrochure = {
  title: 'Amgen Safety Net Foundation — program brochure (PDF)',
  url: 'https://www.amgensafetynetfoundation.com/assets/pdf/Amgen-SNF-Brochure-Web-Version.pdf',
  publisher: 'Amgen Safety Net Foundation',
  checked: CHECKED,
  supports: 'Repatha on the product grid; Medicare Part D pathway conditions; phone, fax, address',
};
const asnfRepathaApp = {
  title: 'Amgen Safety Net Foundation — Repatha application (PDF, July 2026)',
  url: 'https://www.amgensafetynetfoundation.com/assets/pdf/AMGEN-SNF-Application-Prescription-Repatha-EN.pdf',
  publisher: 'Amgen Safety Net Foundation',
  checked: CHECKED,
  supports: 'Repatha income limits; documents; Part D certification; alternate-funding exclusion; Transition Pharmacy',
};
const repathaCost = {
  title: 'Paying for Repatha',
  url: 'https://www.repatha.com/repatha-cost',
  publisher: 'Amgen',
  checked: CHECKED,
  supports: 'co-pay card amounts; government-program exclusion; Medicare Part D cost statistics; AmgenNow pointer; phone',
};
const repathaCopayTerms = {
  title: 'Repatha Co-pay Card — terms and conditions',
  url: 'https://www.repatha.com/copaytcs',
  publisher: 'Amgen',
  checked: CHECKED,
  supports: 'Medicare/Medicaid exclusion; commercial-only; no income requirement; caps unpublished',
};
const amgenNowRelease = {
  title: 'Amgen makes Repatha available through AmgenNow, a direct-to-patient program (press release, October 6, 2025)',
  url: 'https://www.amgen.com/newsroom/press-releases/2025/10/amgen-makes-repatha-available-through-amgennow-a-directtopatient-program-in-the-us',
  publisher: 'Amgen',
  checked: CHECKED,
  supports: '$239 per month; open to Medicare and Medicaid patients; no step therapy or prior authorization',
};
const amgenNow = {
  title: 'AmgenNow — patient discount coupon program',
  url: 'https://www.amgennow.com/',
  publisher: 'Amgen',
  checked: CHECKED,
  supports: 'four conditions for government-insured patients; GoodRx coupon; no price printed',
};
const totalAssistHyperchol = {
  title: 'TotalAssist — Hypercholesterolemia fund',
  url: 'https://totalassist.org/funds/hypercholesterolemia/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'open; $1,900 guaranteed / $3,800 maximum; government insurance; 500% FPL; Repatha listed',
};
const totalAssistCadHe = {
  title: 'TotalAssist — Coronary artery disease (CAD) health equity fund',
  url: 'https://totalassist.org/funds/coronary-artery-disease-cad-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; zip-code rule; Repatha listed',
};
const healthWellHyperchol = {
  title: 'HealthWell Foundation — Hypercholesterolemia – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/hypercholesterolemia-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; Medicare only; 500% FPL; Repatha listed; award cap as shown on the page',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no cholesterol or cardiovascular program',
};

export const REPATHA: MedicationAssistanceRecord = {
  slug: 'repatha',
  brandName: 'Repatha',
  genericName: 'evolocumab',
  manufacturer: 'Amgen',
  conditions: ['cholesterol', 'heart'],
  // evolocumab — PCSK9 inhibitor monoclonal antibody (Repatha US PI).
  drugClass: ['pcsk9'],
  description:
    'Repatha is an injectable PCSK9 inhibitor — a monoclonal antibody given every two weeks or once a month — that lowers LDL ("bad") cholesterol and reduces the risk of heart attack and stroke in people at increased cardiovascular risk, usually when statins alone are not enough.',
  usedFor: [
    'Reducing the risk of heart attack, stroke, unstable angina requiring hospitalization and coronary revascularization in adults at increased risk of cardiovascular events',
    'Lowering LDL cholesterol, with diet and exercise, in adults with hypercholesterolemia',
    'Lowering LDL cholesterol in adults and children 10 and older with heterozygous or homozygous familial hypercholesterolemia',
  ],
  whyCostly:
    'Repatha is a brand-only biologic with no biosimilar — FDA\'s Purple Book lists no competing product and shows exclusivity running to September 2028. Part D plans place it on a brand or specialty tier, usually with coinsurance rather than a flat copay and often behind prior authorization requiring a documented statin trial. Amgen reports that about 84% of Medicare prescriptions for Repatha cost $50 or less a month in 2025 — but the remaining share, typically people early in the year or on a high coinsurance tier, can pay far more until the $2,100 Part D cap.',
  medicareContext:
    'Repatha is generally covered under Medicare Part D and Medicare Advantage drug plans for its approved uses, commonly with prior authorization or step therapy after statins. It is not one of the drugs with a Medicare-negotiated price in 2026 or 2027, so your cost is set entirely by your plan\'s tier and cost-sharing, capped at $2,100 out of pocket in 2026. Amgen states that Part D enrollees who qualify for Extra Help can expect to pay $12.65 or less a month.',
  quickAnswer: {
    verdict:
      'Yes — and Repatha has more open doors than most drugs we have checked. TotalAssist\'s Hypercholesterolemia fund was open and lists Repatha; Amgen\'s cash-pay AmgenNow price is open to Medicare patients (with strings attached); and the Amgen Safety Net Foundation provides Repatha free to eligible uninsured patients, with a Medicare Part D pathway that Amgen describes for "certain products" — confirm by phone whether Repatha is one. The Repatha Co-pay Card excludes Medicare. HealthWell\'s cholesterol fund was closed.',
    points: [
      'TotalAssist Hypercholesterolemia fund: open on August 26, 2026 — $1,900 guaranteed award, up to $3,800, for people with government insurance (Medicare counts) and income at or below 500% of the poverty level. Repatha is on its list.',
      'Amgen Safety Net Foundation: free Repatha for eligible patients with household income at or below $47,880 (one person) or $64,920 (two); Amgen\'s Medicare Part D pathway requires that you are not eligible for Extra Help and have no other support — call 1-800-932-3060 to confirm it applies to Repatha.',
      'AmgenNow cash price: Amgen announced $239 a month in October 2025, open to Medicare and Medicaid patients who agree not to use their insurance for any Amgen medicine that calendar year and not to count the cost toward their Part D cap.',
      'Repatha Co-pay Card: commercial insurance only — "not valid for patients whose Repatha prescription is paid for in whole or in part by Medicare, Medicaid, or any other federal or state healthcare program."',
      'Medicare: not a negotiated-price drug; Part D costs capped at $2,100 in 2026; Amgen says Extra Help enrollees pay $12.65 or less a month.',
    ],
  },
  programs: [
    {
      id: 'asnf',
      kind: 'manufacturer-pap',
      name: 'Amgen Safety Net Foundation',
      operator: 'Amgen Safety Net Foundation',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026 — Repatha is on the foundation\'s product grid and has its own application (dated July 2026). Applications are processed first come, first served; enrollment lasts up to 12 months. No closure notice found.',
      medicare: 'conditional',
      medicareNote:
        'Amgen\'s brochure describes a pathway for "certain Medicare Part D patients with product coverage who cannot afford their out of pocket costs," who must demonstrate inability to afford the medicine, not be eligible for Medicaid or Extra Help, satisfy their plan\'s prior-authorization requirements first, and have no other financial support including independent copay foundations. Whether Repatha is one of those "certain products" is not stated on the site; the Repatha application carries Part D language (you may not use Part D benefits for foundation medicine, and it does not count toward your Part D cap), which suggests it is — confirm at 1-800-932-3060 before applying.',
      summary:
        'Amgen\'s charitable foundation provides Repatha at no cost to eligible patients who have no coverage for it, and — for certain products — to Medicare Part D patients with an affordability gap. Prescriptions are sent electronically to the foundation\'s pharmacy.',
      covers: 'Repatha at no cost for approved patients, for an enrollment period of up to 12 months.',
      eligibility: [
        'Lived in the U.S. or its territories for six months or longer',
        'Household income at or below $47,880 for one person or $64,920 for two (add $17,040 per additional person; about 25% higher in Alaska and 15% higher in Hawaii)',
        'No insurance coverage for Repatha — or, for the Medicare Part D pathway, an affordability gap plus: not eligible for Medicaid or Extra Help, plan prior-authorization requirements already met, and no other financial support (including copay foundations)',
        'Not on a health plan or employer program that requires you to apply to manufacturer assistance (an "alternate funding program")',
      ],
      requirements: [
        'Completed patient application with signed patient authorization, consent option and patient certification',
        'Your prescriber completes the prescription section; the prescription is sent electronically to Transition Pharmacy',
        'Proof of income if requested',
        'Part D applicants: agreement not to use Part D benefits for foundation medicine during enrollment',
      ],
      howToApply:
        'Download the Repatha application, complete and sign the patient sections, have your prescriber complete the prescription section, and fax it to 1-833-959-1409 or mail it to PO Box 15980, Phoenix, AZ 85060. Call 1-800-932-3060 (Monday–Friday, 8am–8pm ET) first to confirm the Medicare Part D pathway applies to Repatha. The foundation charges no fee.',
      applyUrl: 'https://www.amgensafetynetfoundation.com/assets/pdf/AMGEN-SNF-Application-Prescription-Repatha-EN.pdf',
      applyLabel: 'ASNF Repatha application (PDF)',
      phone: '1-800-932-3060',
      sources: [asnfEligibility, asnfBrochure, asnfRepathaApp],
    },
    {
      id: 'repatha-copay-card',
      kind: 'manufacturer-savings',
      name: 'Repatha Co-pay Card',
      operator: 'Amgen',
      status: 'open',
      statusNote: 'Active for commercially insured patients on August 26, 2026; benefits reset annually and Amgen says the offer "is subject to change or discontinuation without notice."',
      medicare: 'excluded',
      medicareNote:
        'Amgen\'s terms: "This offer is not valid for patients whose Repatha prescription is paid for in whole or in part by Medicare, Medicaid, or any other federal or state healthcare program. It is not valid for cash-paying patients or where prohibited by law." The cost page also names Medicare Advantage, Medicare Part D, the Retiree Drug Subsidy, Medigap and VA.',
      summary:
        'A commercial copay offer: eligible commercially insured patients may pay as little as $25 for a one-month supply or $50 for a three-month supply (the terms state as little as $5 a month), with Amgen paying the rest up to unpublished monthly, annual and program maximums. There is no income requirement.',
      eligibility: ['Commercial or private prescription insurance, including Marketplace plans', 'Not enrolled in Medicare, Medicaid or any other federal or state healthcare program'],
      howToApply: 'Commercially insured patients activate the card at repatha.com or by calling 1-844-737-2842. Not applicable to Medicare beneficiaries.',
      applyUrl: 'https://www.repatha.com/copaytcs',
      applyLabel: 'Repatha Co-pay Card terms',
      phone: '1-844-737-2842',
      sources: [repathaCopayTerms, repathaCost, SRC.oigCoupons],
    },
    {
      id: 'amgennow',
      kind: 'manufacturer-direct',
      name: 'AmgenNow — cash-pay Repatha (via GoodRx)',
      operator: 'Amgen (coupon processed by GoodRx)',
      status: 'open',
      statusNote:
        'Active on August 26, 2026. Amgen announced a $239 monthly price on October 6, 2025; amgennow.com itself does not print a price — it routes you to a GoodRx coupon — so confirm the current price at the pharmacy before relying on it.',
      medicare: 'conditional',
      medicareNote:
        'AmgenNow is "available to all patients regardless of their insurance status, including those who participate in government programs such as Medicare and Medicaid." Part D and Medicare Advantage drug-plan members must agree to four conditions: not seek reimbursement from their plan; not count the cost toward their deductible or true out-of-pocket (TrOOP); notify their plan that the medicine was bought outside it; and buy all their Amgen medicines for the calendar year through the coupon rather than their government insurance.',
      summary:
        'Amgen\'s direct-to-patient cash channel. For a Part D enrollee it is only worth it if $239 a month beats your plan\'s coinsurance — and remember that cash purchases do not move you toward the $2,100 Part D cap. Patients using it are not subject to their plan\'s step therapy or prior authorization.',
      covers: 'A cash price of about $239 per month (Amgen press release, October 2025) rather than a grant.',
      eligibility: ['A valid Repatha prescription', 'Agreement not to use commercial or government insurance for the purchase (and, for government-insured patients, the four conditions above)'],
      howToApply: 'Get the AmgenNow coupon through amgennow.com (GoodRx) and present it with your prescription at a participating pharmacy.',
      applyUrl: 'https://www.amgennow.com/',
      applyLabel: 'AmgenNow',
      sources: [amgenNowRelease, amgenNow, repathaCost],
    },
    {
      id: 'totalassist-hyperchol',
      kind: 'charitable',
      name: 'TotalAssist — Hypercholesterolemia fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Hypercholesterolemia',
      status: 'open',
      statusNote: 'Open and accepting applications on August 26, 2026. Repatha (SureClick, syringe and Pushtronex) is on the approved-medication list. TotalAssist\'s other funds that list Repatha — coronary artery disease health equity, peripheral artery disease, stroke — were closed.',
      medicare: 'eligible',
      medicareNote: 'Requires government insurance (Medicare, Medicaid or TRICARE) that covers your Repatha costs.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (which absorbed the PAN Foundation\'s funds on July 1, 2026) runs an open hypercholesterolemia fund that lists Repatha. Apply while it is open — funds close when the money is committed, and there is no waitlist.',
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
      statusNote: 'The fund was "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Repatha (autoinjector and prefilled syringe) and evolocumab are on its covered-medication list.',
      medicare: 'eligible',
      medicareNote: 'This is a Medicare Access fund — for Medicare patients only. Premium assistance through the fund requires Medicare Part B.',
      summary:
        'HealthWell lists Repatha on its Hypercholesterolemia – Medicare Access fund. HealthWell states that closed funds reopen as funding is replenished and offers real-time alerts for each fund.',
      covers: 'When open: up to $2,500 per grant as shown on the fund page (HealthWell forecasts an average grant of about $1,230); household income up to 500% of the federal poverty level.',
      eligibility: [
        'Medicare coverage that pays part of the cost of Repatha',
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
      statusNote: 'Good Days lists no hypercholesterolemia, familial hypercholesterolemia, lipid or cardiovascular program (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Repatha\'s diagnoses.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'One charitable fund covering Repatha was open on August 26, 2026: TotalAssist\'s Hypercholesterolemia fund ($1,900 guaranteed, up to $3,800, government insurance required). HealthWell\'s Hypercholesterolemia – Medicare Access fund lists Repatha but was closed, TotalAssist\'s other cardiovascular funds that list Repatha were closed, and Good Days has no lipid fund. Apply to an open fund promptly — TotalAssist has no waitlist — and sign up for alerts on the closed ones.',
  extraHelpNote:
    'Extra Help interacts with the other routes: Amgen\'s foundation pathway for Part D patients requires that you are not eligible for Extra Help, so check Extra Help first. If you qualify, Amgen says you can expect to pay $12.65 or less a month for Repatha — and every other covered drug gets cheaper too.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Repatha in August 2026 there is an open charity fund, so the realistic order is charity fund → Extra Help check → manufacturer foundation → cash price. They are not mutually exclusive, except that the Amgen foundation excludes people with other support.',
      bullets: [
        'On Medicare with a hypercholesterolemia diagnosis → TotalAssist Hypercholesterolemia fund (open when checked; income at or below 500% FPL).',
        'Limited income and resources → Medicare Extra Help through Social Security ($12.65 or less a month, per Amgen).',
        'Not eligible for Extra Help, income at or below $47,880 (one person) or $64,920 (two), no other support → Amgen Safety Net Foundation (confirm the Part D pathway covers Repatha).',
        'Paying high coinsurance and willing to buy outside your plan → AmgenNow cash price (about $239 a month; does not count toward your Part D cap).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Repatha is listed by TotalAssist and HealthWell, but a listing does not mean funding is available. On the day we checked, TotalAssist\'s Hypercholesterolemia fund was open and HealthWell\'s was closed. Status changes without notice.',
      bullets: [
        'TotalAssist: the fund list at totalassist.org/funds shows "Open" or "Closed" for every fund; apply the day you see "Open".',
        'HealthWell: the Disease Funds page shows each fund\'s status; sign up for alerts on the closed Hypercholesterolemia fund.',
        'Amgen Safety Net Foundation: no closure notice; applications are handled first come, first served.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program sets its own rules. For Repatha on August 26, 2026, these are the ones that decide your application:',
      bullets: [
        'TotalAssist Hypercholesterolemia fund: government insurance (Medicare, Medicaid or TRICARE) covering Repatha; household income at or below 500% of the federal poverty level, adjusted for local cost of living; a hypercholesterolemia diagnosis in treatment.',
        'Amgen Safety Net Foundation: household income at or below $47,880 (one) or $64,920 (two); Medicare Part D patients must not be eligible for Extra Help or Medicaid, must have met their plan\'s prior-authorization rules, and must have no other support including copay foundations — so a TotalAssist grant and ASNF cannot be combined.',
        'AmgenNow: any insurance status, but government-insured patients must agree not to use their plan for any Amgen medicine that calendar year and not to count the cost toward their Part D cap.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready before you start — the TotalAssist application is designed to be finished in one sitting of about 15 minutes.',
      bullets: [
        'Medicare card and your Part D / Medicare Advantage drug-plan card (carrier, plan type, policy ID, group number); Medigap or secondary insurance if you have it.',
        'Your Repatha prescription: strength and dosing schedule, plus your prescriber\'s name, phone and address.',
        'Diagnosis (hypercholesterolemia) and the date of diagnosis if within the past 6 months.',
        'Household size and annual household income; proof of income is due within 30 days of a TotalAssist approval, and ASNF may ask for it.',
        'Your coinsurance amounts for Repatha.',
        'Social Security number (TotalAssist and HealthWell both ask for it).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'TotalAssist: you apply online 24/7 or by phone at 866-512-3861; PAF verifies your diagnosis and treatment plan with your provider and checks income automatically.',
        'Amgen Safety Net Foundation: you complete and sign the patient sections of the Repatha application; your prescriber completes the prescription section and sends the prescription electronically to Transition Pharmacy; the packet goes to ASNF by fax or mail.',
        'AmgenNow: no application — you get the coupon online and present it at the pharmacy.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'TotalAssist: you learn immediately whether you are approved; proof of income is due within 30 days; grants are for one year.',
        'Amgen Safety Net Foundation: first come, first served; ASNF does not publish a review time; enrollment lasts up to 12 months.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'If TotalAssist\'s fund has closed since we checked, sign up for its notifications — there is no waitlist or queue — and for HealthWell\'s alerts on the Hypercholesterolemia fund.',
        'If Amgen\'s foundation declined you because you qualify for Extra Help, apply for Extra Help — that is the route Amgen is pointing you to.',
        'Compare your plan\'s coinsurance against AmgenNow\'s cash price for the rest of the year, remembering that cash purchases do not count toward the $2,100 cap.',
        'Ask your doctor about an appeal or formulary exception if Repatha was denied for step therapy, and compare Part D plans in the fall — Repatha\'s tier differs from plan to plan.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Coinsurance amounts for Repatha', note: 'TotalAssist' },
    { item: 'Signed patient authorization, consent and certification', note: 'Amgen Safety Net Foundation application' },
    { item: 'Record of your plan\'s prior-authorization decision', note: 'ASNF Part D pathway — plan requirements must be met first' },
  ],
  ifUnavailable: [
    {
      text: 'If you were denied by Amgen\'s foundation because you have other support, the TotalAssist Hypercholesterolemia fund and Extra Help are the routes that accept people with Medicare without that restriction.',
      href: 'https://totalassist.org/funds/hypercholesterolemia/',
      label: 'TotalAssist Hypercholesterolemia fund',
    },
    ...standardAlternatives('Repatha'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Repatha?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans generally cover Repatha for high cholesterol and cardiovascular risk, usually with prior authorization requiring a documented statin trial or intolerance. It is not a negotiated-price drug, so your cost is your plan\'s tier and coinsurance, capped at $2,100 out of pocket in 2026. Amgen reports about 84% of Medicare prescriptions for Repatha cost $50 or less a month. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower that to $12.65 or less.',
    },
    {
      question: 'Is there a Repatha patient assistance program for people on Medicare?',
      answer:
        'Amgen Safety Net Foundation provides Repatha free to eligible patients with household income at or below $47,880 (one person) or $64,920 (two). Its Medicare Part D pathway — for patients who cannot afford their out-of-pocket costs, are not eligible for Extra Help or Medicaid, have met their plan\'s prior-authorization rules and have no other support — is described for "certain products"; Amgen\'s site does not say whether Repatha is one, so call 1-800-932-3060 to confirm before applying.',
    },
    {
      question: 'Can I use the Repatha Co-pay Card (RepathaReady) with Medicare?',
      answer:
        'No. Amgen\'s terms state the Repatha Co-pay Card "is not valid for patients whose Repatha prescription is paid for in whole or in part by Medicare, Medicaid, or any other federal or state healthcare program," and its cost page lists Medicare Advantage, Medicare Part D, Medigap and VA among the excluded programs. The Medicare routes are TotalAssist, the Amgen foundation, AmgenNow and Extra Help.',
    },
    {
      question: 'Is there a charitable grant for Repatha right now?',
      answer:
        'Yes. On August 26, 2026 TotalAssist\'s Hypercholesterolemia fund was open — $1,900 guaranteed, up to $3,800 — for people with government insurance (Medicare counts), income at or below 500% of the federal poverty level and a hypercholesterolemia diagnosis. Repatha is on its list. HealthWell\'s Hypercholesterolemia – Medicare Access fund also lists Repatha but was closed. Funds close without notice, so apply promptly.',
    },
    {
      question: 'What is the $239 Repatha price?',
      answer:
        'It is the AmgenNow cash price Amgen announced in October 2025 — "nearly 60% lower" than list price — available through a GoodRx coupon to anyone, including Medicare patients. Part D enrollees who use it must agree not to bill their plan, not to count the cost toward their Part D cap, to tell their plan, and to buy all their Amgen medicines that year outside their government insurance. amgennow.com does not print the price, so confirm it at the pharmacy.',
    },
    {
      question: 'Is there a generic or biosimilar for Repatha?',
      answer:
        'No. FDA\'s Purple Book (August 2026 data) lists no licensed biosimilar of evolocumab, and shows Repatha\'s reference-product exclusivity running to September 2028. Repatha remains brand-only in the U.S.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications when a fund opens, with no waitlist or queue; HealthWell offers alerts for each fund. While you wait, the routes that do not depend on a fund balance are Extra Help, the Amgen foundation (if you qualify), AmgenNow\'s cash price, an appeal or formulary exception through your doctor, and a Part D plan comparison in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['entresto', 'eliquis', 'xarelto'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/does-medicare-cover-repatha.html', label: 'Does Medicare Cover Repatha?', blurb: 'Coverage, tiers and prior authorization' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Repatha' },
  ],
  sources: [
    label,
    purpleBook,
    asnfEligibility,
    asnfBrochure,
    asnfRepathaApp,
    repathaCost,
    repathaCopayTerms,
    amgenNowRelease,
    amgenNow,
    SRC.cmsMfp2026,
    SRC.cmsMfp2027,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    totalAssistHyperchol,
    totalAssistCadHe,
    SRC.totalAssistMedIndex,
    SRC.totalAssistApply,
    healthWellHyperchol,
    SRC.healthWellFunds,
    goodDays,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup, 2026-08-26). Deliberately a
  // literal, not the shared CHECKED constant: re-verifying one medication
  // must move one date, not all sixteen. Bump this when you re-read this
  // record's sources; `checked` on each source records the research window.
  lastVerified: '2026-08-26',
  datePublished: '2026-06-30',
  video: {
    title: 'How to Apply for Repatha Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of the open TotalAssist hypercholesterolemia fund, the Amgen Safety Net Foundation application, and how the AmgenNow cash price interacts with Medicare Part D.',
  },
  description_meta:
    'How to find financial assistance for Repatha (evolocumab) on Medicare: the open TotalAssist hypercholesterolemia fund, Amgen Safety Net Foundation, the $239 AmgenNow cash price and its Part D conditions, why the co-pay card excludes Medicare, and Extra Help — verified August 2026.',
};

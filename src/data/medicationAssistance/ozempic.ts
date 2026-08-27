// ---------------------------------------------------------------------------
// Ozempic (semaglutide) — Novo Nordisk. Researched 2026-08-26.
// GLP-1 record: HIGHER MAINTENANCE RISK (spec §5C) — Medicare GLP-1 policy is
// changing through 2027, and Novo's PAP rules for Medicare changed for 2026.
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

const novoPap = {
  title: 'Novo Nordisk Patient Assistance Program (NovoCare)',
  url: 'https://www.novocare.com/diabetes/help-with-costs/pap.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Ozempic Medicare exclusion for 2026; 200% FPL uninsured rule; documents; processing time; phone',
};
const novoPapList = {
  title: 'Novo Nordisk PAP product list (PDF)',
  url: 'https://www.novocare.com/content/dam/novonordisk/novocare/forms/PAP_Product_List.pdf',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Ozempic on the product list',
};
const ozempicSavings = {
  title: 'Ozempic savings offer',
  url: 'https://www.novocare.com/diabetes/products/ozempic/savings-offer.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'government beneficiaries excluded; offer terms',
};
const novoPharmacy = {
  title: 'NovoCare Pharmacy — Ozempic self-pay pricing',
  url: 'https://www.novocare.com/pharmacy/ozempic.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'self-pay prices; government-insured may self-pay',
};
const novoPharmacyTerms = {
  title: 'NovoCare Pharmacy — Ozempic eligibility and terms',
  url: 'https://www.novocare.com/eligibility/ozempic-pharmacy.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Medicare attestation; FDA-approved indication required; phone',
};
const ozempicSite = {
  title: 'Ozempic (semaglutide) — official site',
  url: 'https://www.ozempic.com/',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'approved uses',
};
const cmsSecondCycle = {
  title: 'Manufacturer participation, second cycle of Medicare drug price negotiation',
  url: 'https://www.cms.gov/newsroom/fact-sheets/cms-announces-manufacturer-participation-second-cycle-medicare-drug-price-negotiation',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'semaglutide selected for 2027',
};

export const OZEMPIC: MedicationAssistanceRecord = {
  slug: 'ozempic',
  brandName: 'Ozempic',
  genericName: 'semaglutide',
  manufacturer: 'Novo Nordisk',
  conditions: ['diabetes', 'heart', 'kidney'],
  // semaglutide — GLP-1 receptor agonist (Ozempic US prescribing information).
  drugClass: ['glp-1'],
  description:
    'Ozempic is a once-weekly injectable GLP-1 receptor agonist for type 2 diabetes. The same molecule is sold as Wegovy for weight management and as Rybelsus tablets; Medicare treats those uses differently, and Ozempic itself is covered by Part D for diabetes.',
  usedFor: [
    'Improving blood sugar in adults with type 2 diabetes, along with diet and exercise',
    'Reducing the risk of major cardiovascular events in adults with type 2 diabetes and known heart disease',
    'Reducing the risk of kidney disease worsening, kidney failure and cardiovascular death in adults with type 2 diabetes and chronic kidney disease',
  ],
  whyCostly:
    'Ozempic is a high-list-price brand injectable that Part D plans usually place on a high tier with prior authorization confirming type 2 diabetes, so copays or coinsurance can be substantial until the $2,100 annual cap. In 2026 Novo Nordisk also stopped supplying Ozempic to Medicare enrollees through its patient assistance program, closing the route many beneficiaries relied on.',
  medicareContext:
    'Medicare Part D covers GLP-1 medicines such as Ozempic when prescribed for type 2 diabetes, not for weight loss alone. Semaglutide (Ozempic, Rybelsus and Wegovy) was selected in the second cycle of the Medicare Drug Price Negotiation Program: CMS published a negotiated price of $274 for a 30-day supply (versus a $959 list price in 2024) that takes effect January 1, 2027. Until then, your cost depends on your plan\'s tier and cost-sharing. The Medicare GLP-1 Bridge ($50 a month) does not include Ozempic and excludes people with type 2 diabetes.',
  quickAnswer: {
    verdict:
      'For most people on Medicare, not through the usual routes in 2026: Novo Nordisk\'s patient assistance program no longer provides Ozempic to Medicare beneficiaries with drug coverage, the savings offer excludes government insurance, and the type 2 diabetes charity funds were closed to new applicants when we checked. What remains: Novo\'s self-pay pricing through NovoCare Pharmacy (open to Medicare enrollees paying cash), Medicare Extra Help, a negotiated Part D price arriving in 2027, and fund notifications for when a diabetes fund reopens.',
    points: [
      'Novo Nordisk Patient Assistance Program: "Medicare beneficiaries with prescription drug coverage will no longer be eligible to receive Ozempic" through the PAP in 2026; uninsured patients at or below 200% of the federal poverty level still can.',
      'Ozempic Savings Offer: government beneficiaries, including Medicare, are excluded.',
      'NovoCare Pharmacy self-pay: $199 a month for the first two fills (0.25 mg / 0.5 mg, new patients, through December 31, 2026), then $349 a month for 0.25–1 mg or $499 for 2 mg; Medicare enrollees may self-pay outside their plan.',
      'Charitable grants: Ozempic is on the TotalAssist and HealthWell type 2 diabetes fund lists, but both funds were closed to new applicants.',
      'Medicare: a negotiated Part D price of $274 (30-day) starts January 1, 2027; Extra Help can cut a covered brand copay to about $12.65 now if you qualify.',
    ],
  },
  programs: [
    {
      id: 'novo-pap',
      kind: 'manufacturer-pap',
      name: 'Novo Nordisk Patient Assistance Program',
      operator: 'Novo Nordisk (NovoCare)',
      status: 'limited',
      statusNote:
        'Open for 2026 to uninsured patients at or below 200% of the federal poverty level. Medicare beneficiaries with prescription drug coverage are no longer eligible to receive Ozempic through the program (checked August 26, 2026). Complete applications are processed within 2 business days.',
      medicare: 'excluded',
      medicareNote:
        'Novo Nordisk states: "Medicare beneficiaries with prescription drug coverage will no longer be eligible to receive Ozempic through the Patient Assistance Program." Medicare Part D enrollees may apply for next year\'s enrollment after October 15, 2026, but Novo has not said whether Ozempic will be available to them in 2027. For other Novo Nordisk products the PAP still accepts Medicare Part D patients (income at or below 400% FPL, not enrolled in Extra Help, with an Extra Help denial letter).',
      summary:
        'Novo Nordisk\'s PAP ships eligible medicines free to the patient\'s home. Ozempic remains on the product list, but for 2026 only uninsured, low-income patients qualify for it.',
      covers: 'Ozempic at no cost for approved uninsured patients; shipped to your home within about 5 business days of approval.',
      eligibility: [
        'Ozempic: uninsured, with total household income at or below 200% of the federal poverty level',
        'Ozempic: Medicare beneficiaries with prescription drug coverage are not eligible in 2026',
        'U.S. resident; not enrolled in or eligible for Medicaid, Extra Help (LIS) or VA benefits; no private or commercial insurance',
      ],
      requirements: [
        'Two-part application: the patient portion (online), then the prescriber portion',
        'Uninsured patients: a copy of your state Medicaid denial letter',
        'Medicare patients (other Novo products): a copy of your Extra Help (LIS) denial letter',
        'Proof of income (last 3 pay stubs, W-2, 1099) if you did not file taxes or had a life event affecting income; otherwise income is verified electronically',
      ],
      howToApply: 'The patient submits the patient portion online at NovoCare, then the prescriber completes the provider portion. Call 1-866-310-7549 (Monday–Friday, 8am–8pm ET) with questions.',
      applyUrl: 'https://www.novocare.com/diabetes/help-with-costs/pap.html',
      applyLabel: 'Novo Nordisk PAP — eligibility and application',
      phone: '1-866-310-7549',
      sources: [novoPap, novoPapList],
    },
    {
      id: 'ozempic-savings-offer',
      kind: 'manufacturer-savings',
      name: 'Ozempic Savings Offer',
      operator: 'Novo Nordisk',
      status: 'open',
      statusNote: 'Active for commercially insured patients; "pricing to be updated after December 31, 2026."',
      medicare: 'excluded',
      medicareNote:
        'Novo\'s terms say "Government beneficiaries excluded" and count anyone enrolled in Medicare, Medigap, Medicaid, VA, DoD or TRICARE as government-insured — even if they also have a commercial plan. Government-insured patients who try the offer are instead routed to the self-pay price.',
      summary: 'A commercial copay offer: pay as little as $25 a month, with a maximum savings of $100 a month.',
      eligibility: ['Commercial prescription insurance', 'Not enrolled in any government, state or federally funded medical or prescription benefit program'],
      howToApply: 'Commercially insured patients activate the offer on novocare.com. Not applicable to Medicare beneficiaries.',
      applyUrl: 'https://www.novocare.com/diabetes/products/ozempic/savings-offer.html',
      applyLabel: 'Ozempic savings offer terms',
      sources: [ozempicSavings, SRC.oigCoupons],
    },
    {
      id: 'novocare-pharmacy',
      kind: 'manufacturer-direct',
      name: 'NovoCare Pharmacy — Ozempic self-pay',
      operator: 'Novo Nordisk (dispensed by NovoCare Pharmacy)',
      status: 'open',
      statusNote: 'On August 26, 2026: $199 a month for the first two fills of 0.25 mg or 0.5 mg for new patients (through December 31, 2026), then $349 a month for 0.25 mg, 0.5 mg or 1 mg and $499 a month for 2 mg.',
      medicare: 'eligible',
      medicareNote:
        'Novo states government-insured patients may use this program if they self-pay and process outside their insurance. You agree not to ask your plan to reimburse you and not to count the cost toward your Part D deductible or out-of-pocket limit.',
      summary:
        'Novo Nordisk\'s direct-to-patient cash channel. It replaces insurance rather than working with it, so compare the price against your Part D copay — especially once you are near the $2,100 cap. Ozempic must be prescribed for an FDA-approved use.',
      covers: 'Cash prices per month as listed above; Ozempic tablets are priced separately ($149–$299 a month by strength).',
      eligibility: ['A valid Ozempic prescription for an FDA-approved indication', 'Uninsured, or insured (commercial or government) and choosing to self-pay'],
      howToApply: 'Your prescriber sends the prescription to NovoCare Pharmacy; you pay online and the medicine is delivered. Questions: 1-888-809-3942.',
      applyUrl: 'https://www.novocare.com/pharmacy/ozempic.html',
      applyLabel: 'NovoCare Pharmacy — Ozempic',
      phone: '1-888-809-3942',
      sources: [novoPharmacy, novoPharmacyTerms],
    },
    {
      id: 'glp1-bridge',
      kind: 'government',
      name: 'Medicare GLP-1 Bridge ($50 a month, CMS demonstration)',
      operator: 'Centers for Medicare & Medicaid Services',
      status: 'not-found',
      statusNote: 'Running July 1, 2026 – December 31, 2027 — but Ozempic is not an eligible drug. The Bridge covers Foundayo, Wegovy and the Zepbound KwikPen for weight management only.',
      medicare: 'excluded',
      medicareNote: 'Part D enrollees with type 2 diabetes are excluded from the Bridge — Medicare\'s guidance says their drug plan should already cover a GLP-1 for diabetes.',
      summary: 'Included because people ask about it: the $50-a-month Medicare GLP-1 program does not apply to Ozempic. If you take Ozempic for type 2 diabetes, your route is regular Part D coverage.',
      eligibility: ['Not applicable to Ozempic'],
      howToApply: 'Not applicable to Ozempic.',
      applyUrl: 'https://www.medicare.gov/coverage/weight-loss-drugs',
      applyLabel: 'Medicare.gov — GLP-1 coverage',
      sources: [SRC.medicareWeightLossDrugs, SRC.medicareGlp1Bridge, SRC.cmsGlp1Bridge],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Type 2 diabetes (T2DM) fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Type 2 diabetes (T2DM) · Type 2 diabetes health equity',
      status: 'closed',
      statusNote: 'Both type 2 diabetes funds were closed to new applicants on August 26, 2026. Ozempic (semaglutide) is on the approved-medication list.',
      medicare: 'eligible',
      medicareNote: 'These funds require government insurance (Medicare, Medicaid or TRICARE).',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (launched July 1, 2026, combining PAF Co-Pay Relief and the PAN Foundation) lists Ozempic under its type 2 diabetes funds. A listing is not an open fund. Sign up to be notified the moment it reopens — there is no waitlist or queue.',
      covers: 'When open: $1,500 guaranteed award, $2,000 maximum, for eligible out-of-pocket costs.',
      eligibility: ['Confirmed type 2 diabetes diagnosis', ...TOTALASSIST_ELIGIBILITY],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: 'Sign up for fund notifications at totalassist.org/notify. When the fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [
        { title: 'TotalAssist — Type 2 diabetes (T2DM) fund', url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/', publisher: 'Patient Advocate Foundation', checked: CHECKED, supports: 'closed; Ozempic listed' },
        SRC.totalAssistFunds,
        SRC.totalAssistNotify,
        SRC.totalAssistApply,
      ],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Type 2 Diabetes fund',
      operator: 'HealthWell Foundation',
      fund: 'Type 2 Diabetes',
      status: 'closed',
      statusNote: '"Temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Ozempic and semaglutide are on the fund\'s medication list.',
      medicare: 'eligible',
      medicareNote: 'HealthWell requires insurance that covers part of the drug; Medicare qualifies.',
      summary: 'HealthWell\'s Type 2 Diabetes fund lists Ozempic. HealthWell states that closed funds reopen as funding is replenished and offers real-time alerts for the fund.',
      covers: 'When open: up to $1,000 as a pharmacy card; household income up to 300% of the federal poverty level.',
      eligibility: [
        'Insurance (including Medicare) that covers part of the cost of Ozempic',
        'Household income up to 300% of the federal poverty level (adjusted for household size and cost of living)',
        'Type 2 diabetes diagnosis verified by your provider',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/type-2-diabetes/',
      applyLabel: 'HealthWell Type 2 Diabetes fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [SRC.healthWellT2D, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no diabetes program (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program for type 2 diabetes.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'Ozempic is on the type 2 diabetes fund lists at both TotalAssist and HealthWell, but on August 26, 2026 both funds were closed to new applicants, and Good Days has no diabetes program. No currently open charitable fund covering Ozempic was found. Sign up for fund alerts — and remember that Extra Help does not depend on a fund balance.',
  extraHelpNote:
    'With Novo Nordisk\'s PAP closed to Medicare beneficiaries for Ozempic and the diabetes funds closed, Extra Help is the route that stays open year-round — and it works inside your Part D plan, unlike the self-pay price.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Ozempic on Medicare in 2026 the manufacturer\'s patient assistance program is closed to you and no charity fund is open, so the realistic order is: confirm your Part D coverage, check Extra Help, then weigh Novo\'s self-pay price.',
      bullets: [
        'Confirm your Part D plan covers Ozempic for type 2 diabetes and whether prior authorization is needed.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'High copay and not near the $2,100 cap → compare NovoCare Pharmacy\'s self-pay price ($199 for the first two fills, then $349–$499) against your plan cost.',
        'Uninsured, not Medicare, income at or below 200% FPL → Novo Nordisk PAP.',
        'Type 2 diabetes → sign up for TotalAssist and HealthWell diabetes-fund alerts; both were closed when checked.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Ozempic is on the Novo PAP product list and on the TotalAssist and HealthWell fund lists — but for Medicare beneficiaries the PAP is closed for Ozempic in 2026, and both diabetes funds were closed when we checked. Being listed is not the same as being open.',
      bullets: [
        'Novo Nordisk PAP: the eligibility page states the current Medicare rule; Part D patients may apply for next year after October 15, 2026.',
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for the Type 2 diabetes (T2DM) fund.',
        'HealthWell: the Disease Funds page shows the Type 2 Diabetes fund status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'For the routes that were open:',
      bullets: [
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026; automatic if you have Medicaid, SSI or a Medicare Savings Program.',
        'NovoCare Pharmacy self-pay: a valid Ozempic prescription for an FDA-approved use; Medicare enrollees may self-pay but must not seek reimbursement or count the cost toward their plan.',
        'TotalAssist (when open): government insurance covering Ozempic; income at or below 500% FPL, cost-of-living adjusted; type 2 diabetes in treatment.',
        'HealthWell (when open): insurance covering part of the drug; income up to 300% FPL; provider-verified diagnosis.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready so you can act quickly when a fund opens — TotalAssist applications are decided instantly, and closed funds reopen without a queue.',
      bullets: [
        'Medicare card and your Part D / Medicare Advantage drug-plan card (carrier, plan type, policy ID, group number).',
        'Your Ozempic prescription: strength and dose, plus your prescriber\'s name, phone and address.',
        'Type 2 diabetes diagnosis and the date of diagnosis if within the past 6 months.',
        'Household size and annual household income, with proof (tax return, Social Security or pension statements, pay stubs).',
        'Your copay or coinsurance amount for Ozempic.',
        'Social Security number (TotalAssist and HealthWell both ask for it).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
        'NovoCare Pharmacy: your prescriber sends the prescription to NovoCare Pharmacy; you complete the purchase online.',
        'Novo Nordisk PAP (uninsured patients): you submit the patient portion online, then your prescriber completes the provider portion.',
        'TotalAssist (when open): you apply online in about 15 minutes; Patient Advocate Foundation verifies your diagnosis with your provider and verifies income automatically.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
        'Novo Nordisk PAP: complete applications are processed within 2 business days, and approved medicine ships within about 5 business days.',
        'TotalAssist: an instant decision when you submit; proof of income due within 30 days.',
        'HealthWell: a decision after your provider verifies the diagnosis; assistance is issued as a pharmacy card.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed":',
      bullets: [
        'Sign up for TotalAssist and HealthWell fund alerts — there is no waitlist, so being notified first matters.',
        'Ask your doctor whether a covered alternative is appropriate, or request a formulary exception or tier reduction.',
        'Apply for Extra Help even if you think you earn too much — the limits are higher than many people expect.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Compare Part D plans in the fall — and note that the negotiated Ozempic price takes effect January 1, 2027.',
        'Call AltaMedicare — we\'ll check every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Copay or coinsurance amount for Ozempic', note: 'TotalAssist asks for it' },
    { item: 'Social Security number', note: 'TotalAssist and HealthWell' },
    { item: 'Medicaid denial letter', note: 'Novo Nordisk PAP, uninsured applicants' },
    { item: 'Bank, retirement and pension statements', note: 'Extra Help application (resources)' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your doctor whether a covered alternative is appropriate — GLP-1 tiering and prior-authorization rules differ by plan, and a formulary exception is possible when Ozempic is medically necessary.',
      href: '/medicare-formulary-lookup.html',
      label: 'Formulary lookup',
    },
    ...standardAlternatives('Ozempic'),
  ],
  faqs: [
    {
      question: 'Can Medicare help pay for Ozempic?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans cover Ozempic when it is prescribed for type 2 diabetes (not for weight loss), usually with prior authorization. Your copay depends on your plan\'s tier, and Part D out-of-pocket costs are capped at $2,100 in 2026. A Medicare-negotiated price of $274 for a 30-day supply takes effect January 1, 2027. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65 now. See <a href="/blog/does-medicare-cover-ozempic.html">Does Medicare cover Ozempic or Wegovy?</a>',
    },
    {
      question: 'Is there an Ozempic patient assistance program for people on Medicare?',
      answer:
        'Not in 2026. Novo Nordisk\'s Patient Assistance Program states that Medicare beneficiaries with prescription drug coverage are no longer eligible to receive Ozempic through the program; uninsured patients at or below 200% of the federal poverty level still can. Medicare Part D patients may apply for next year\'s enrollment after October 15, 2026, but Novo has not said whether Ozempic will be available to them in 2027. We will update this page when that is published.',
    },
    {
      question: 'Can I use the Ozempic savings offer with Medicare?',
      answer:
        'No. Novo\'s terms say government beneficiaries are excluded and treat anyone enrolled in Medicare, Medigap, Medicaid, VA, DoD or TRICARE as government-insured, even if they also have a commercial plan. Federal anti-kickback rules are the reason manufacturer copay offers exclude government insurance.',
    },
    {
      question: 'What is the NovoCare Pharmacy self-pay price, and can I use it with Medicare?',
      answer:
        'New patients pay $199 a month for the first two fills of 0.25 mg or 0.5 mg (through December 31, 2026), then $349 a month for 0.25–1 mg or $499 a month for 2 mg. Novo states government-insured patients may use it if they self-pay and process outside their insurance; you agree not to seek reimbursement or count the cost toward your plan\'s deductible or out-of-pocket limit. Compare it with your Part D copay before switching.',
    },
    {
      question: 'Does the $50-a-month Medicare GLP-1 program cover Ozempic?',
      answer:
        'No. The Medicare GLP-1 Bridge (July 1, 2026 – December 31, 2027) covers Foundayo, Wegovy and the Zepbound KwikPen for weight management and excludes people with type 2 diabetes. Ozempic is not an eligible Bridge drug; if you take Ozempic for diabetes, your route is regular Part D coverage.',
    },
    {
      question: 'Is there a charitable grant for Ozempic right now?',
      answer:
        'Not when we checked on August 26, 2026. Ozempic is on the type 2 diabetes fund lists at TotalAssist and HealthWell, but both funds were closed to new applicants, and Good Days has no diabetes program. Sign up for notifications at totalassist.org/notify and on the HealthWell fund page so you hear when one reopens.',
    },
    {
      question: 'Can my doctor\'s office apply for me?',
      answer:
        'For TotalAssist and HealthWell you (the patient) apply, and the foundation verifies the diagnosis with your provider; the Novo PAP has a patient portion and a prescriber portion. Your doctor\'s office also handles the prior-authorization request most Part D plans require for Ozempic and can request a formulary exception. AltaMedicare can help you work through the options, free.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications with no waitlist or queue, and HealthWell says closed funds reopen as funding is replenished. While you wait: apply for Extra Help, weigh the self-pay price against your plan copay, ask your doctor about a formulary exception, and compare Part D plans in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['mounjaro', 'trulicity', 'jardiance', 'farxiga'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/does-medicare-cover-ozempic.html', label: 'Does Medicare Cover Ozempic?', blurb: 'Coverage for diabetes vs. weight loss' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Ozempic' },
  ],
  sources: [
    ozempicSite,
    novoPap,
    novoPapList,
    ozempicSavings,
    novoPharmacy,
    novoPharmacyTerms,
    SRC.medicareWeightLossDrugs,
    SRC.medicareGlp1Bridge,
    SRC.cmsGlp1Bridge,
    cmsSecondCycle,
    SRC.cmsMfp2027,
    SRC.medicareDrugCosts,
    SRC.healthWellT2D,
    SRC.totalAssistFunds,
    SRC.totalAssistNotify,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup, 2026-08-26). Deliberately a
  // literal, not the shared CHECKED constant: re-verifying one medication
  // must move one date, not all sixteen. Bump this when you re-read this
  // record's sources; `checked` on each source records the research window.
  lastVerified: '2026-08-26',
  datePublished: '2026-06-30',
  video: {
    title: 'How to Apply for Ozempic Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of Part D coverage for diabetes, Extra Help, the self-pay option, and what to do when a diabetes fund reopens.',
  },
  description_meta:
    'How to find financial assistance for Ozempic (semaglutide) on Medicare: the 2026 change to Novo Nordisk\'s patient assistance program, NovoCare self-pay pricing, the GLP-1 Bridge rules, charity fund status, and Medicare Extra Help — verified August 2026.',
};

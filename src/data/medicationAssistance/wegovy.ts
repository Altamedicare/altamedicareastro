// ---------------------------------------------------------------------------
// Wegovy (semaglutide) injection and tablets — Novo Nordisk. Independently
// researched 2026-08-26. Every program below was read on the official source
// cited with it. Batch 5 (spec §24 Phase 4 list) — a NEW slug.
//
// Wegovy has three Medicare routes and CMS's own prior-authorization form says
// they are mutually exclusive: weight management with no Part D-eligible
// diagnosis → the Medicare GLP-1 Bridge ($50 a month, outside Part D);
// cardiovascular risk reduction → regular Part D; MASH (injection only) →
// regular Part D. The negotiated price that arrives in 2027 applies only where
// Part D covers the drug — and the headline $274 is a blended figure for the
// "Ozempic; Rybelsus; Wegovy" entry, not a Wegovy price (CMS's Wegovy example
// is $385.63 per 4-pen package). GLP-1 record: HIGHER MAINTENANCE RISK (§5C).
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
  title: 'Wegovy injection and tablets prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses for injection and tablets; GLP-1 receptor agonist; pens, syringes, FlexTouch and 1.5 / 4 / 9 / 25 mg tablets on one label (rev. 6/2026)',
};
const novoPap = {
  title: 'Novo Nordisk Patient Assistance Program (NovoCare)',
  url: 'https://www.novocare.com/diabetes/help-with-costs/pap.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: '2026 eligibility rules; Wegovy not named as a covered product; phone',
};
const novoPapList = {
  title: 'Novo Nordisk PAP product list — 2026 (PDF)',
  url: 'https://www.novocare.com/content/dam/novonordisk/novocare/forms/PAP_Product_List.pdf',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Wegovy absent from the available-products list',
};
const wegovySavings = {
  title: 'Wegovy Savings Offer — NovoCare',
  url: 'https://www.novocare.com/obesity/products/wegovy/savings-offer.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: '$25 / $100-a-month cap; "Government beneficiaries excluded"; government-insured may use the self-pay price',
};
const wegovySaveOn = {
  title: 'Wegovy — coverage and savings',
  url: 'https://www.wegovy.com/coverage-and-savings/save-on-wegovy.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'savings and self-pay terms; Bridge: all dose strengths of pen and pill for $50 a month',
};
const novoPharmacy = {
  title: 'NovoCare Pharmacy — Wegovy self-pay',
  url: 'https://www.novocare.com/pharmacy/wegovy.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'self-pay prices; government-insured patients may self-pay outside insurance; Medicare Part D TrOOP attestation; pharmacy phone',
};
const priceGuide = {
  title: 'Wegovy price guide (PDF, April 2026)',
  url: 'https://www.novocare.com/content/dam/novonordisk/novocare/redesign/pdf/Wegovy_Price_Guide.pdf',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'self-pay price table by strength; $199 first-two-fills offer through December 31, 2026; 4 mg tablet $149 offer through August 31, 2026',
};
const novoListPricePage = {
  title: 'NovoCare — explaining list price',
  url: 'https://www.novocare.com/mash/resources/explaining-list-price.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Wegovy list price $1,349.02 per package',
};
const novoMedicare = {
  title: 'NovoCare — navigating Medicare',
  url: 'https://www.novocare.com/patient/support/navigating-medicare.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Wegovy covered through normal Part D for other approved uses (cardiovascular risk); Bridge pricing is for weight loss only; Bridge support phone',
};
const wegovyMedicare = {
  title: 'Wegovy — Medicare patients',
  url: 'https://www.wegovy.com/medicare.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: '$50 a month under the Bridge; no patient enrollment needed',
};
const novoListPriceCut = {
  title: 'Novo Nordisk to lower U.S. list prices of Wegovy, Ozempic and Rybelsus effective January 1, 2027 (Feb 24, 2026)',
  url: 'https://www.prnewswire.com/news-releases/novo-nordisk-announces-significant-reduction-in-us-list-price-for-wegovy-ozempic-and-rybelsus-semaglutide-medicines-building-on-continued-efforts-to-expand-access-302695705.html',
  publisher: 'Novo Nordisk (via PR Newswire)',
  checked: CHECKED,
  supports: 'Wegovy list price to $675 from January 1, 2027; self-pay prices unaffected',
};
const cmsBridgePaForm = {
  title: 'Medicare GLP-1 Bridge — prior authorization request form (CMS)',
  url: 'https://www.cms.gov/files/document/glp-1-bridge.pdf',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'Part D-eligible diagnoses (T2D, OSA, MASH, CV risk) must go to the Part D plan; BMI bands; pharmacy claim before PA',
};
const cmsBalance = {
  title: 'CMS BALANCE Model',
  url: 'https://www.cms.gov/priorities/innovation/innovation-models/balance',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'model not launching in Medicare in 2027; Bridge extended through 2027',
};
const trumpRxPen = {
  title: 'TrumpRx — Wegovy pen',
  url: 'https://trumprx.gov/p/wegovy',
  publisher: 'TrumpRx.gov',
  checked: CHECKED,
  supports: 'same self-pay prices; $1,349.02 original price; Medicare buy-outside-plan terms verbatim',
};
const trumpRxPill = {
  title: 'TrumpRx — Wegovy pill',
  url: 'https://trumprx.gov/p/wegovy-pill',
  publisher: 'TrumpRx.gov',
  checked: CHECKED,
  supports: '$149 tablet price; 4 mg offer through August 31, 2026',
};
const totalAssistObesity = {
  title: 'TotalAssist — Obesity fund',
  url: 'https://totalassist.org/funds/obesity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; Wegovy listed; $1,000 / $2,000; any insurance; 300% FPL',
};
const totalAssistMash = {
  title: 'TotalAssist — Metabolic dysfunction-associated steatohepatitis (MASH) fund',
  url: 'https://totalassist.org/funds/metabolic-dysfunction-associated-steatohepatitis-mash/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'open; Wegovy listed; $2,100 / $4,200; government insurance; 500% FPL',
};
const healthWellMash = {
  title: 'HealthWell Metabolic Dysfunction-Associated Steatohepatitis fund',
  url: 'https://www.healthwellfoundation.org/fund/metabolic-dysfunction-associated-steatohepatitis/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'open; Wegovy and semaglutide listed; $8,000 maximum; 500% FPL; Medicare Part B for premium assistance',
};
const healthWellCHF = {
  title: 'HealthWell Chronic Heart Failure – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/chronic-heart-failure-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; Wegovy listed',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no obesity, MASH or cardiovascular program',
};

export const WEGOVY: MedicationAssistanceRecord = {
  slug: 'wegovy',
  brandName: 'Wegovy',
  genericName: 'semaglutide',
  manufacturer: 'Novo Nordisk',
  // Axis 1: obesity / overweight (the `weight` key added for this batch) and
  // cardiovascular disease (the CV-risk indication requires established CV
  // disease). The MASH indication has no condition key; it is one injection-only
  // indication and does not justify a liver key on its own — the same restraint
  // the taxonomy audit applied to Ofev's pending lung-disease view.
  conditions: ['weight', 'heart'],
  // "WEGOVY is a glucagon-like peptide-1 (GLP-1) receptor agonist" (label
  // Highlights, rev. 6/2026).
  drugClass: ['glp-1'],
  description:
    'Wegovy is the weight-management and cardiovascular brand of semaglutide — the same molecule as Ozempic — sold as a weekly injection and, since 2025, as a daily tablet. How Medicare treats it depends entirely on why it was prescribed: weight management goes through the $50-a-month Medicare GLP-1 Bridge, while heart-disease risk reduction and MASH go through regular Part D.',
  usedFor: [
    'Reducing the risk of major adverse cardiovascular events (cardiovascular death, non-fatal heart attack or non-fatal stroke) in adults with established cardiovascular disease and either obesity or overweight — injection and tablets',
    'Reducing excess body weight and maintaining weight reduction long term in adults with obesity, or adults with overweight and at least one weight-related condition, with a reduced-calorie diet and increased physical activity — injection and tablets (the injection also in children 12 and older with obesity)',
    'Treating noncirrhotic metabolic dysfunction-associated steatohepatitis (MASH) with moderate to advanced liver fibrosis in adults — injection only, under accelerated approval',
  ],
  whyCostly:
    'Novo Nordisk publishes a list price of $1,349.02 per package for Wegovy. When it is prescribed for weight management alone, Part D does not cover it, so without the Bridge or a cash price you face the full amount and nothing you pay counts toward the $2,100 Part D cap. When it is covered — for cardiovascular risk reduction or MASH — plans place it on a high tier with prior authorization. Novo\'s patient assistance program does not list Wegovy and the savings offer excludes government beneficiaries.',
  medicareContext:
    'CMS\'s own Bridge prior-authorization form draws the line: if Wegovy is prescribed to reduce cardiovascular risk in an adult with established heart disease, or for MASH, the request "must" go to the Part D plan — those are Part D-eligible uses, covered under your plan\'s rules and counting toward your deductible and cap. If it is prescribed to reduce weight with no Part D-eligible diagnosis, the route is the Medicare GLP-1 Bridge: all strengths of the Wegovy pen and pill for $50 a month, July 1, 2026 through December 31, 2027, outside Part D. Semaglutide ("Ozempic; Rybelsus; Wegovy") has a negotiated Medicare price effective January 1, 2027 — $274 for a blended 30-day supply, and $385.63 per package of four 2.4 mg Wegovy pens in CMS\'s example — which applies only when Part D covers the drug. Novo has separately said it will cut Wegovy\'s list price to $675 on the same date. CMS says its BALANCE Model is not launching in Medicare in 2027.',
  quickAnswer: {
    verdict:
      'Usually yes — but which door depends on the diagnosis. For weight management, Part D enrollees who meet the Bridge criteria get the Wegovy pen or pill for $50 a month through the Medicare GLP-1 Bridge, with no application. For heart-disease risk reduction or MASH, Wegovy is a regular Part D drug and Extra Help applies. The manufacturer patient assistance program does not cover Wegovy and the savings offer excludes Medicare; Novo\'s self-pay prices ($149–$399 a month) are open to Medicare enrollees who pay outside their plan. The obesity charity fund was closed; the MASH funds at TotalAssist and HealthWell were open.',
    points: [
      'Medicare GLP-1 Bridge: all strengths of the Wegovy pen and pill for $50 a month, July 1, 2026 – December 31, 2027, for Part D enrollees with BMI 35+, or BMI 30+ / 27+ with listed conditions, prescribed for weight management; no enrollment, the pharmacy starts the approval, and the $50 cannot be lowered by Extra Help or counted toward your cap.',
      'Regular Part D: Wegovy for cardiovascular risk reduction (established heart disease plus obesity or overweight) or MASH is a Part D benefit — Novo says it "is covered through normal Medicare Part D benefits" for those uses; a negotiated price applies from January 1, 2027.',
      'Manufacturer patient assistance: Wegovy is not on Novo Nordisk\'s 2026 PAP product list. Wegovy Savings Offer: "Government beneficiaries excluded."',
      'Self-pay: pen $199 a month for the first two fills (new patients, 0.25 / 0.5 mg, through December 31, 2026) then $349, Wegovy HD 7.2 mg $399; pill $149 (1.5 mg, and 4 mg through August 31, 2026, then $199) and $299 (9 mg, 25 mg). Novo: "Government-insured patients may use this program if they self pay and process outside of their insurance."',
      'Charitable grants: TotalAssist\'s Obesity fund lists Wegovy but was closed; the MASH funds at TotalAssist ($2,100 guaranteed) and HealthWell (up to $8,000) were open and list Wegovy; HealthWell has no obesity fund; Good Days has nothing.',
    ],
  },
  programs: [
    {
      id: 'glp1-bridge',
      kind: 'government',
      name: 'Medicare GLP-1 Bridge ($50 a month, CMS demonstration)',
      operator: 'Centers for Medicare & Medicaid Services',
      status: 'open',
      statusNote:
        'Live since July 1, 2026 and extended through December 31, 2027 (checked August 26, 2026). Medicare.gov lists "Wegovy (injection or tablet)"; Novo confirms "all dose strengths of both Wegovy pen and pill for just $50 per month."',
      medicare: 'eligible',
      medicareNote:
        'For Medicare Part D enrollees (stand-alone plans, Medicare Advantage drug plans, Special Needs Plans, employer group plans and LI NET) prescribed Wegovy for weight management. Medicare.gov: "You aren\'t eligible if you: Already get GLP-1 drugs covered through your Medicare Part D plan. Have type 2 diabetes, moderate-to-severe sleep apnea, or fatty liver disease (but your Part D plan might cover your GLP-1s)." CMS\'s form adds that a prescription to reduce cardiovascular risk in established heart disease "must" go to the Part D plan instead. CMS: "no part of the $50 copay counts towards the beneficiary\'s TrOOP costs, and there is no low-income subsidy (LIS) provided for LIS beneficiaries."',
      summary:
        'A CMS demonstration that stands in for Part D coverage of weight-management GLP-1s until the end of 2027. Your cost is a flat $50 for a one-month supply; the Part D deductible does not apply, and the payment does not count toward your deductible, out-of-pocket limit or Medicare Prescription Payment Plan. Once approved, the authorization lasts through December 31, 2027 including refills and dose changes, as long as you stay on Wegovy.',
      covers: 'The Wegovy pen (every strength, including Wegovy HD) and Wegovy tablets (every strength) at $50 per one-month supply.',
      eligibility: [
        'Enrolled in an eligible Medicare Part D plan and 18 or older',
        'At the start of GLP-1 therapy: BMI 35 or higher; or BMI 30 or higher with diastolic heart failure, uncontrolled high blood pressure, or chronic kidney disease stage 3a or higher; or BMI 27 or higher with prediabetes, a previous heart attack or stroke, or symptomatic peripheral artery disease',
        'Prescribed for weight reduction with no Part D-eligible diagnosis — not for type 2 diabetes, sleep apnea, MASH, or cardiovascular risk reduction in established heart disease, which go to your Part D plan',
        'Your prescriber certifies the medicine is part of a lifestyle program focused on diet and exercise',
      ],
      requirements: [
        'A Wegovy prescription sent to a pharmacy; the pharmacy may ask for your Medicare number or the last four digits of your Social Security number',
        'A prior-authorization form your prescriber submits after the pharmacy\'s claim to the Bridge is first rejected — Novo: "Patients do not need to enroll in the program to participate"',
      ],
      howToApply:
        'There is no patient application. Your prescriber sends the prescription; the pharmacy submits it to the Bridge, then your prescriber completes the prior authorization (online or by fax); Medicare mails you a letter and you pay $50 at pickup. Questions: 1-800-MEDICARE (1-800-633-4227), or NovoCare\'s Obesity & Bridge Support team at 1-888-809-3942, Monday–Friday 8am–8pm ET.',
      applyUrl: 'https://www.medicare.gov/coverage/weight-loss-drugs',
      applyLabel: 'Medicare.gov — GLP-1 drugs for $50 a month',
      phone: '1-800-633-4227',
      sources: [SRC.medicareWeightLossDrugs, SRC.cmsGlp1Bridge, cmsBridgePaForm, wegovyMedicare, novoMedicare, wegovySaveOn],
    },
    {
      id: 'novo-pap',
      kind: 'manufacturer-pap',
      name: 'Novo Nordisk Patient Assistance Program',
      operator: 'Novo Nordisk (NovoCare)',
      status: 'not-found',
      statusNote: 'Wegovy is not on the 2026 product list (checked August 26, 2026), which names the Ozempic injection (uninsured patients only), insulins, Xultophy and devices — no obesity product of any kind. The PAP page never names Wegovy as a covered product.',
      medicare: 'unknown',
      medicareNote: 'Not applicable — the program does not cover Wegovy, so its Medicare rules and income thresholds do not reach it.',
      summary: 'Novo Nordisk\'s PAP ships eligible medicines free to approved patients. Wegovy is not one of them, and has not been.',
      eligibility: ['Not applicable to Wegovy — the program\'s listed products only'],
      howToApply: 'Not applicable to Wegovy. Questions about the program: 1-866-310-7549.',
      applyUrl: 'https://www.novocare.com/content/dam/novonordisk/novocare/forms/PAP_Product_List.pdf',
      applyLabel: 'Novo Nordisk PAP product list (PDF)',
      phone: '1-866-310-7549',
      sources: [novoPapList, novoPap],
    },
    {
      id: 'wegovy-savings-offer',
      kind: 'manufacturer-savings',
      name: 'Wegovy Savings Offer',
      operator: 'Novo Nordisk',
      status: 'open',
      statusNote: 'Active for commercially insured patients on August 26, 2026; no expiry is published for the $25 tier — Novo "reserves the right to modify or cancel this program at any time."',
      medicare: 'excluded',
      medicareNote:
        'Novo\'s terms: "Government beneficiaries excluded." The screener treats anyone with both commercial and government coverage as government-insured. Novo adds that government-insured patients "are able to pay the self-pay price for their prescription" instead — see the self-pay program below.',
      summary: 'A commercial copay offer: pay as little as $25 for up to a three-month prescription when commercial insurance covers GLP-1 medicines, with a $100-a-month maximum savings. Not for Medicare.',
      eligibility: ['Commercial insurance that covers GLP-1 medicines', 'Not enrolled in any government, state or federally funded medical or prescription benefit program'],
      howToApply: 'Commercially insured patients enrol on novocare.com or by texting SAVE to 83757. Not applicable to Medicare beneficiaries. Questions: 1-888-793-1218.',
      applyUrl: 'https://www.novocare.com/obesity/products/wegovy/savings-offer.html',
      applyLabel: 'Wegovy Savings Offer',
      phone: '1-888-793-1218',
      sources: [wegovySavings, wegovySaveOn, SRC.oigCoupons],
    },
    {
      id: 'novocare-pharmacy',
      kind: 'manufacturer-direct',
      name: 'NovoCare Pharmacy self-pay (also listed on TrumpRx)',
      operator: 'Novo Nordisk',
      status: 'open',
      statusNote:
        'Self-pay prices on August 26, 2026 — pen: $199 a month for the first two fills of 0.25 mg or 0.5 mg for new patients (offer through December 31, 2026), then $349 for 0.25–2.4 mg and $399 for Wegovy HD 7.2 mg; pill: $149 for 1.5 mg and for 4 mg (4 mg offer through August 31, 2026, then $199), $299 for 9 mg and 25 mg. The federal TrumpRx site lists the same prices and terms.',
      medicare: 'conditional',
      medicareNote:
        'Novo: "Government-insured patients may use this program if they self pay and process outside of their insurance." Pharmacies are told to advise "each eligible Medicare Part D or other applicable government insured patient using the self-pay offer that they must not submit the purchase for inclusion in any insurance benefit out-of-pocket spending calculations, such as Medicare Part D True Out-of-Pocket Costs (TrOOP)." The purchase "will not count toward any deductibles, and cannot be applied to any insurance maximum out-of-pocket limits."',
      summary:
        'Novo\'s direct-to-patient channel — home delivery through NovoCare Pharmacy, or local pharmacy pickup with the savings offer. For a Medicare enrollee who does not qualify for the Bridge (for example, prescribed for weight management but already getting a GLP-1 through Part D, or with a plan type the Bridge does not cover) this is the price to compare. Cash purchases never count toward the $2,100 Part D cap, and Medicare.gov notes TrumpRx is not creditable coverage.',
      covers: 'A cash price of $149–$399 a month depending on product and strength, against a list price of $1,349.02 per package.',
      eligibility: ['A valid Wegovy prescription', 'Paying outside your insurance, with no reimbursement claim and nothing counted toward a deductible or TrOOP'],
      howToApply: 'Your prescriber e-prescribes to NovoCare Pharmacy (no card activation needed); you get a text to set up your account, pay and choose delivery or pickup. Or present the savings offer as a self-pay patient at a local pharmacy. NovoCare Pharmacy: 1-833-949-5527.',
      applyUrl: 'https://www.novocare.com/pharmacy/wegovy.html',
      applyLabel: 'NovoCare Pharmacy — Wegovy',
      phone: '1-833-949-5527',
      sources: [novoPharmacy, priceGuide, wegovySavings, trumpRxPen, trumpRxPill, novoListPricePage],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Obesity fund (and MASH fund)',
      operator: 'Patient Advocate Foundation',
      fund: 'Obesity · MASH',
      status: 'limited',
      statusNote:
        'The Obesity fund — the one that matches a weight-management prescription — was closed to new applicants on August 26, 2026 (when open: $1,000 guaranteed, $2,000 maximum, any insurance, income at or below 300% FPL). The MASH fund was OPEN and lists Wegovy: $2,100 guaranteed, $4,200 maximum, government insurance, income at or below 500% FPL — for a MASH diagnosis, which is an injection-only use. Wegovy is also listed under the closed Stroke, Lipodystrophy and Type 2 diabetes funds.',
      medicare: 'eligible',
      medicareNote:
        'The MASH, Stroke and diabetes funds require government-insured coverage (Medicare, Medicaid or TRICARE); the Obesity fund accepts any insurance. Every fund requires insurance "that covers your qualifying expenses." Whether a $50 Bridge copay — paid outside Part D — or a self-pay purchase counts is not addressed anywhere on TotalAssist\'s site; ask before counting on it.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (launched July 1, 2026, combining PAF Co-Pay Relief and the PAN Foundation) lists Wegovy under six funds. For weight management the relevant one is Obesity, and it is closed — sign up to be notified when it reopens; there is no waitlist. For MASH, the open fund can be applied to now.',
      covers: 'Obesity fund (when open): $1,000 guaranteed, $2,000 maximum. MASH fund (open): $2,100 guaranteed, $4,200 maximum. One grant per condition.',
      eligibility: [
        'A confirmed diagnosis matching the fund (obesity, or MASH), in treatment or starting within 60 days',
        'Obesity fund: any health insurance covering the expense; income at or below 300% of the federal poverty level, cost-of-living adjusted',
        'MASH fund: government-insured coverage; income at or below 500% of the federal poverty level, cost-of-living adjusted',
        ...TOTALASSIST_ELIGIBILITY.slice(3),
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: 'Obesity: sign up for fund notifications at totalassist.org/notify. MASH (open): ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/funds/obesity/',
      applyLabel: 'TotalAssist Obesity fund (get notified)',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistObesity, totalAssistMash, SRC.totalAssistMedIndex, SRC.totalAssistFunds, SRC.totalAssistNotify, SRC.totalAssistApply],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — MASH fund (no obesity fund)',
      operator: 'HealthWell Foundation',
      fund: 'Metabolic Dysfunction-Associated Steatohepatitis',
      status: 'limited',
      statusNote:
        'HealthWell runs no obesity or weight-management fund (checked August 26, 2026). Wegovy is on three fund lists: the MASH fund, which was OPEN (maximum award $8,000, income up to 500% FPL); the Type 2 Diabetes fund (closed); and the Chronic Heart Failure – Medicare Access fund (closed). Its Hypercholesterolemia and Cardiomyopathy Medicare Access funds do not list Wegovy.',
      medicare: 'eligible',
      medicareNote: 'HealthWell requires "some form of health insurance (private insurance, Medicare, Medicaid, TriCare, etc.) that covers part of the cost of your treatment." Premium assistance through the MASH fund requires Medicare Part B.',
      summary: 'For a MASH diagnosis, HealthWell\'s open fund covers prescription copays, physician visits and testing, and transportation, with an average grant HealthWell estimates at about $2,500. For weight management there is no HealthWell route at all.',
      covers: 'MASH fund: up to $8,000 as a pharmacy card, or Medicare Part B premium assistance; household income up to 500% of the federal poverty level.',
      eligibility: [
        'A MASH diagnosis, verified by your provider — Wegovy prescribed to treat it',
        'Insurance (including Medicare) that covers part of the cost of Wegovy',
        'Household income up to 500% of the federal poverty level (adjusted for household size and cost of living)',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/metabolic-dysfunction-associated-steatohepatitis/',
      applyLabel: 'HealthWell MASH fund',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellMash, healthWellCHF, SRC.healthWellT2D, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no obesity, weight-management, MASH or cardiovascular program among its 49 funds (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering any of Wegovy\'s diagnoses.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'For weight management, no charitable fund covering Wegovy was open on August 26, 2026: TotalAssist\'s Obesity fund lists Wegovy but was closed, HealthWell has no obesity fund, and Good Days has nothing. For a MASH diagnosis the picture is better — TotalAssist\'s MASH fund ($2,100 guaranteed, up to $4,200, government insurance) and HealthWell\'s MASH fund (up to $8,000) were both open and both list Wegovy. Sign up for Obesity-fund alerts, and remember that for weight management the Bridge, not a charity, is the route that does not depend on a fund balance.',
  extraHelpNote:
    'Extra Help does not touch the Bridge — Medicare.gov says the $50 copay "can\'t be lowered by programs like Extra Help." It does apply when Wegovy is a Part D benefit for cardiovascular risk reduction or MASH: if you qualify, a covered brand copay drops to about $12.65 a month, and every other covered drug gets cheaper too.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'Start from the reason Wegovy was prescribed — CMS treats the routes as mutually exclusive:',
      bullets: [
        'Prescribed for weight management, on a Part D plan, BMI 35+ (or 30+ / 27+ with listed conditions) at the start of therapy, no type 2 diabetes, sleep apnea or MASH → Medicare GLP-1 Bridge, $50 a month, pen or pill.',
        'Prescribed to reduce cardiovascular risk (established heart disease plus obesity or overweight), or for MASH → your Part D plan; check the formulary and prior-authorization rules; apply for Extra Help if income is limited; from January 1, 2027 a negotiated price applies.',
        'Not eligible for the Bridge and not covered by your plan → NovoCare Pharmacy self-pay ($149–$399 a month), outside your insurance.',
        'MASH diagnosis → TotalAssist and HealthWell MASH funds, both open when checked. Obesity diagnosis → TotalAssist Obesity fund alerts; it was closed.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The Bridge is open through December 31, 2027 and needs no fund balance. The charity picture changes without notice:',
      bullets: [
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for the Obesity and MASH funds.',
        'HealthWell: the Disease Funds page shows the MASH fund status; there is no obesity fund to open.',
        'Novo Nordisk PAP: check the current product list — Wegovy has never been on it; if that changes, this page will change.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'For the routes that were open:',
      bullets: [
        'Bridge: 18 or older; eligible Part D plan type; BMI 35+, or BMI 30+ with diastolic heart failure, uncontrolled hypertension or CKD stage 3a+, or BMI 27+ with prediabetes, prior heart attack or stroke, or symptomatic peripheral artery disease — measured when GLP-1 therapy started; no Part D-eligible diagnosis; not already getting a GLP-1 through Part D.',
        'Extra Help (Part D-covered uses): income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
        'Self-pay: a valid prescription and agreement to process outside your insurance with nothing counted toward TrOOP.',
        'TotalAssist MASH fund (open): government insurance covering the expense; income at or below 500% FPL, cost-of-living adjusted; MASH diagnosis in treatment. Obesity fund (when open): any insurance; income at or below 300% FPL.',
        'HealthWell MASH fund (open): insurance covering part of the cost; income up to 500% FPL; provider-verified MASH diagnosis.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready — the Bridge moves through the pharmacy quickly once eligibility is confirmed, and TotalAssist applications are decided instantly when a fund is open.',
      bullets: [
        'Medicare card and your Part D / Medicare Advantage drug-plan card; the pharmacy may ask for your Medicare number or the last four digits of your Social Security number.',
        'Your BMI and the date GLP-1 therapy began, plus documentation of any qualifying condition, for the Bridge prior authorization.',
        'Your Wegovy prescription (pen or pill, strength) and your prescriber\'s name, phone and address.',
        'Diagnosis (obesity, cardiovascular disease or MASH) and the date of diagnosis if within the past 6 months.',
        'Household size and annual household income, with proof, for TotalAssist, HealthWell or Extra Help.',
        'Social Security number (TotalAssist and HealthWell ask for it).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Bridge: there is no patient application. Your prescriber sends the prescription; the pharmacy submits the claim; your prescriber completes the prior authorization; Medicare sends you a letter.',
        'Part D coverage for cardiovascular risk or MASH: your prescriber submits the plan\'s prior authorization with the diagnosis.',
        'NovoCare Pharmacy: your prescriber e-prescribes; you set up your account and pay online.',
        'TotalAssist (when open): you apply online in about 15 minutes; Patient Advocate Foundation verifies your diagnosis with your provider and verifies income automatically.',
        'HealthWell: you apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Bridge: once approved, pay $50 at pickup; refills and dose changes need no new approval through December 31, 2027 as long as you stay on Wegovy.',
        'TotalAssist: an instant decision when you submit; proof of income due within 30 days.',
        'HealthWell: a decision after your provider verifies the diagnosis; assistance is issued as a pharmacy card.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays to covered drugs.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "not eligible":',
      bullets: [
        'Sign up for TotalAssist fund alerts — there is no waitlist, so being notified first matters.',
        'If you have established heart disease, ask your prescriber whether Wegovy\'s cardiovascular indication applies to you — that turns it into a Part D-covered drug with Extra Help and the 2027 negotiated price behind it.',
        'Compare the self-pay price against what you would otherwise pay; remember cash purchases do not count toward the $2,100 cap.',
        'Ask your prescriber about Zepbound, the other injectable in the Bridge, if Wegovy is not working for you.',
        'Compare Part D plans in the fall — plan rules on GLP-1s for covered uses differ.',
        'Call AltaMedicare — we\'ll check every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'BMI at the start of GLP-1 therapy and documentation of any qualifying condition', note: 'Medicare GLP-1 Bridge prior authorization (your prescriber submits it)' },
    { item: 'Copay or coinsurance amount for Wegovy', note: 'TotalAssist asks for it' },
    { item: 'Social Security number', note: 'TotalAssist and HealthWell' },
    { item: 'Bank, retirement and pension statements', note: 'Extra Help application (resources)' },
  ],
  ifUnavailable: [
    {
      text: 'Zepbound is the other injectable in the Medicare GLP-1 Bridge and has its own self-pay prices — compare the two with your prescriber.',
      href: '/zepbound-assistance-program.html',
      label: 'Zepbound assistance',
    },
    {
      text: 'If you also have type 2 diabetes, the same molecule is covered by Part D as Ozempic — see what assistance exists for it.',
      href: '/ozempic-assistance-program.html',
      label: 'Ozempic assistance',
    },
    ...standardAlternatives('Wegovy'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Wegovy?',
      answer:
        'It depends on why it is prescribed. For weight management, Part D does not cover it — instead the Medicare GLP-1 Bridge supplies the Wegovy pen or pill for $50 a month from July 1, 2026 to December 31, 2027 for Part D enrollees who meet its criteria. For reducing cardiovascular risk in adults with established heart disease and obesity or overweight, and for MASH, Novo says Wegovy "is covered through normal Medicare Part D benefits," so your plan\'s tier, prior authorization and the $2,100 cap apply. Read more in <a href="/blog/does-medicare-cover-wegovy.html">Does Medicare cover Ozempic or Wegovy?</a>',
    },
    {
      question: 'How do I get Wegovy for $50 a month on Medicare?',
      answer:
        'Through the Medicare GLP-1 Bridge. You need an eligible Part D plan and to have met the BMI criteria when you started GLP-1 therapy — BMI 35 or higher; BMI 30 or higher with diastolic heart failure, uncontrolled high blood pressure or chronic kidney disease stage 3a+; or BMI 27 or higher with prediabetes, a prior heart attack or stroke, or symptomatic peripheral artery disease — and to be taking it for weight management rather than a Part D-eligible diagnosis. There is no form for you: the pharmacy submits the claim, your prescriber completes the prior authorization, and Medicare mails you a letter. Both the pen and the pill qualify at every strength. Questions: 1-800-MEDICARE.',
    },
    {
      question: 'Does Extra Help lower the $50 Bridge copay?',
      answer:
        'No. Medicare.gov says the Bridge copayment "Can\'t be lowered by programs like Extra Help," and CMS says there is no low-income subsidy on it. It also does not count toward your Part D deductible or the $2,100 cap and cannot be spread out with the Medicare Prescription Payment Plan. <a href="/blog/extra-help-explained.html">Extra Help</a> does apply when Wegovy is covered by your plan for cardiovascular risk reduction or MASH.',
    },
    {
      question: 'Is there a Wegovy patient assistance program?',
      answer:
        'Not from the manufacturer. Wegovy is not on Novo Nordisk\'s 2026 Patient Assistance Program product list (checked August 26, 2026) and never has been. The charity fund that matches a weight-management prescription — TotalAssist\'s Obesity fund — was closed to new applicants.',
    },
    {
      question: 'Can I use the Wegovy savings offer with Medicare?',
      answer:
        'No — Novo\'s terms say "Government beneficiaries excluded," and anyone with both commercial and government coverage counts as government-insured. What Novo does allow is the self-pay price: "Government-insured patients may use this program if they self pay and process outside of their insurance," with nothing counted toward Part D TrOOP.',
    },
    {
      question: 'What does Wegovy cost self-pay on Medicare?',
      answer:
        'On August 26, 2026: the pen was $199 a month for the first two fills of 0.25 mg or 0.5 mg for new patients (through December 31, 2026), then $349 a month for 0.25–2.4 mg and $399 for Wegovy HD 7.2 mg; the pill was $149 a month for 1.5 mg and for 4 mg (through August 31, 2026, then $199) and $299 for 9 mg and 25 mg — through NovoCare Pharmacy or a local pharmacy, and listed identically on TrumpRx. A Medicare enrollee may buy at these prices outside their plan; the cost never counts toward the $2,100 cap.',
    },
    {
      question: 'What will Wegovy cost under the Medicare negotiated price in 2027?',
      answer:
        'CMS negotiated one price for the "Ozempic; Rybelsus; Wegovy" entry: $274 for a blended 30-day supply from January 1, 2027, against a $959 list price in 2024. CMS\'s Wegovy-specific example is $385.63 per package of four 2.4 mg pens. That price applies only where Part D covers the drug — cardiovascular risk reduction or MASH — and what you pay is your plan\'s cost-sharing on it, up to the cap. For weight management the Bridge\'s $50 is what you pay. Novo has separately said it will lower Wegovy\'s list price to $675 on the same date.',
    },
    {
      question: 'Is there a charitable grant for Wegovy right now?',
      answer:
        'For weight management, not when we checked on August 26, 2026 — TotalAssist\'s Obesity fund was closed, HealthWell has no obesity fund and Good Days has nothing. For a MASH diagnosis, yes: TotalAssist\'s MASH fund ($2,100 guaranteed, up to $4,200, government insurance, income at or below 500% FPL) and HealthWell\'s MASH fund (up to $8,000) were both open and both list Wegovy. Sign up for notifications at totalassist.org/notify for the Obesity fund. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['ozempic', 'zepbound', 'rybelsus', 'mounjaro'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/does-medicare-cover-wegovy.html', label: 'Does Medicare Cover Wegovy?', blurb: 'Coverage for diabetes vs. weight loss' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans and their GLP-1 rules' },
  ],
  sources: [
    label,
    novoPapList,
    novoPap,
    wegovySavings,
    wegovySaveOn,
    novoPharmacy,
    priceGuide,
    novoListPricePage,
    novoMedicare,
    wegovyMedicare,
    novoListPriceCut,
    SRC.medicareWeightLossDrugs,
    SRC.cmsGlp1Bridge,
    cmsBridgePaForm,
    cmsBalance,
    SRC.cmsMfp2027,
    SRC.cmsNegotiatedPrices,
    SRC.medicareDrugCosts,
    trumpRxPen,
    trumpRxPill,
    totalAssistObesity,
    totalAssistMash,
    SRC.totalAssistFunds,
    SRC.totalAssistNotify,
    healthWellMash,
    healthWellCHF,
    SRC.healthWellT2D,
    goodDays,
    SRC.oigCoupons,
  ],
  // Per-record verification date — a literal, never the shared CHECKED
  // constant: re-verifying one medication must move one date.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Get Wegovy Assistance on Medicare',
    status: 'coming-soon',
    description: 'A short walkthrough of the Medicare GLP-1 Bridge for the Wegovy pen and pill, when Wegovy is a regular Part D drug instead, the self-pay prices, and which charity funds were open.',
  },
  description_meta:
    'How to get help paying for Wegovy (semaglutide) on Medicare: the $50-a-month Medicare GLP-1 Bridge and who qualifies, when Part D covers it instead, Novo\'s self-pay prices for Medicare patients, charity fund status, and the 2027 negotiated price — verified August 2026.',
};

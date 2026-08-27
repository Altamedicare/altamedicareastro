// ---------------------------------------------------------------------------
// Rybelsus (semaglutide tablets) — Novo Nordisk. Independently researched
// 2026-08-26. Every program below was read on the official source cited with
// it. Batch 5 (spec §24 Phase 4 list) — a NEW slug.
//
// The finding that shapes this page: on May 4, 2026 Novo Nordisk began
// replacing Rybelsus in the United States with "Ozempic" tablets (1.5 / 4 /
// 9 mg) — a reformulated pill under one combined FDA label. Rybelsus is not on
// the 2026 Patient Assistance Program product list, has no self-pay price, and
// its savings-offer pages now redirect to the Ozempic offer. Most of the
// "programs" below are therefore honest negatives, and the page's job is to
// say so plainly and point to the routes that DO exist. GLP-1 record: HIGHER
// MAINTENANCE RISK (spec §5C).
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
  title: 'Rybelsus / Ozempic tablets prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses; GLP-1 receptor agonist; 3 / 7 / 14 mg tablets; one label for both brands (rev. 1/2026)',
};
const novoRename = {
  title: 'Novo Nordisk: Ozempic tablets available in the U.S. from May 4, 2026',
  url: 'https://www.novonordisk-us.com/media/news-archive/news-details.html?id=916540',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Rybelsus strengths reformulated and introduced as Ozempic tablets; Ozempic pill self-pay prices',
};
const novoCvApproval = {
  title: 'FDA approves Rybelsus to reduce the risk of major adverse cardiovascular events (Oct 17, 2025)',
  url: 'https://www.prnewswire.com/news-releases/fda-approves-novo-nordisks-oral-semaglutide-for-cardiovascular-cv-risk-reduction-in-adults-with-type-2-diabetes-who-are-at-high-risk-including-those-who-have-not-had-a-prior-cv-event-302588022.html',
  publisher: 'Novo Nordisk (via PR Newswire)',
  checked: CHECKED,
  supports: 'cardiovascular indication',
};
const novoListPrice = {
  title: 'Novo Nordisk to lower U.S. list prices of Wegovy, Ozempic and Rybelsus effective January 1, 2027 (Feb 24, 2026)',
  url: 'https://www.prnewswire.com/news-releases/novo-nordisk-announces-significant-reduction-in-us-list-price-for-wegovy-ozempic-and-rybelsus-semaglutide-medicines-building-on-continued-efforts-to-expand-access-302695705.html',
  publisher: 'Novo Nordisk (via PR Newswire)',
  checked: CHECKED,
  supports: 'list price of Rybelsus 7 mg / 14 mg to $675 from January 1, 2027',
};
const novoPap = {
  title: 'Novo Nordisk Patient Assistance Program (NovoCare)',
  url: 'https://www.novocare.com/diabetes/help-with-costs/pap.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: '2026 eligibility rules; Medicare language; no Rybelsus-specific statement; phone',
};
const novoPapList = {
  title: 'Novo Nordisk PAP product list — 2026 (PDF)',
  url: 'https://www.novocare.com/content/dam/novonordisk/novocare/forms/PAP_Product_List.pdf',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Rybelsus absent from the available-products list',
};
const savingsTerms = {
  title: 'NovoCare diabetes savings offer — terms and conditions (Rybelsus section)',
  url: 'https://www.novocare.com/eligibility/diabetes-savings-card.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Rybelsus savings terms; government-program exclusion; 48-month activation',
};
const rybelsusSavings = {
  title: 'Rybelsus — savings and support',
  url: 'https://www.rybelsus.com/savings-and-support.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'as little as $25 for commercially insured patients; maximum savings',
};
const novoPharmacy = {
  title: 'NovoCare Pharmacy — self-pay products and prices',
  url: 'https://www.novocare.com/pharmacy.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Rybelsus not offered; Ozempic pill and pen self-pay prices',
};
const novoRybelsusPage = {
  title: 'NovoCare — Rybelsus product page',
  url: 'https://www.novocare.com/diabetes/products/rybelsus.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: '"RYBELSUS is being replaced by Ozempic pill"; points to Ozempic pill self-pay',
};
const ozempicPharmacyTerms = {
  title: 'NovoCare Pharmacy — Ozempic self-pay eligibility and terms',
  url: 'https://www.novocare.com/eligibility/ozempic-pharmacy.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports: 'Medicare self-pay attestation; TrOOP language',
};
const totalAssistT2d = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; Rybelsus listed; award amounts',
};
const totalAssistMash = {
  title: 'TotalAssist — MASH fund',
  url: 'https://totalassist.org/funds/metabolic-dysfunction-associated-steatohepatitis-mash/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'open; lists Rybelsus (off-indication for this medication)',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no diabetes program',
};
const trumpRx = {
  title: 'TrumpRx — listed medicines and prices',
  url: 'https://trumprx.gov/',
  publisher: 'TrumpRx.gov',
  checked: CHECKED,
  supports: 'Rybelsus not listed',
};

export const RYBELSUS: MedicationAssistanceRecord = {
  slug: 'rybelsus',
  brandName: 'Rybelsus',
  genericName: 'semaglutide tablets',
  manufacturer: 'Novo Nordisk',
  conditions: ['diabetes', 'heart'],
  // semaglutide — "glucagon-like peptide-1 (GLP-1) receptor agonist" (combined
  // Rybelsus / Ozempic tablets label, Highlights, rev. 1/2026).
  drugClass: ['glp-1'],
  description:
    'Rybelsus is the once-daily semaglutide tablet for type 2 diabetes — the same molecule as the Ozempic injection. In May 2026 Novo Nordisk began replacing it in the United States with reformulated "Ozempic" tablets, which changes which assistance programs still name it.',
  usedFor: [
    'Improving blood sugar in adults with type 2 diabetes, along with diet and exercise',
    'Reducing the risk of major adverse cardiovascular events (cardiovascular death, non-fatal heart attack or non-fatal stroke) in adults with type 2 diabetes who are at high risk for these events',
  ],
  whyCostly:
    'CMS put the 2024 list price of the semaglutide products (Ozempic, Rybelsus, Wegovy) at $959 for a 30-day supply. Part D plans usually place Rybelsus on a high brand tier with prior authorization, so the copay or coinsurance can be large until you reach the $2,100 annual cap. For 2026, Novo Nordisk\'s patient assistance program does not list Rybelsus at all, and NovoCare Pharmacy sells the successor Ozempic pill self-pay but not Rybelsus.',
  medicareContext:
    'Medicare Part D covers GLP-1 medicines such as Rybelsus when prescribed for type 2 diabetes, not for weight loss. Semaglutide — listed by CMS as "Ozempic; Rybelsus; Wegovy" — was selected in the second cycle of the Medicare Drug Price Negotiation Program: the negotiated price is $274 for a 30-day supply (CMS\'s worked example for Rybelsus 7 mg, 30 tablets, is $276.78) and takes effect January 1, 2027. Separately, Novo Nordisk has said it will cut the list price of Rybelsus 7 mg and 14 mg to $675 on the same date. The Medicare GLP-1 Bridge ($50 a month) does not include Rybelsus and excludes people with type 2 diabetes. Novo says the Ozempic pill "will have the same coverage as RYBELSUS" — check your plan\'s formulary for both names.',
  quickAnswer: {
    verdict:
      'Very little assistance names Rybelsus in 2026. Novo Nordisk is replacing Rybelsus with the Ozempic pill in the United States, the patient assistance program does not list Rybelsus, there is no Rybelsus self-pay price, the savings offer is for commercial insurance only, and the type 2 diabetes charity funds at TotalAssist and HealthWell — both of which list Rybelsus — were closed to new applicants when we checked. What remains: Medicare Extra Help, a negotiated Part D price from January 2027, fund alerts, and a conversation with your prescriber about the Ozempic pill, which does have a self-pay price.',
    points: [
      'Manufacturer patient assistance: Rybelsus is not on Novo Nordisk\'s 2026 PAP product list (the only GLP-1 on it is the Ozempic injection, for uninsured patients only).',
      'Rybelsus Savings Offer: commercial insurance only — anyone "enrolled in any federal or state health care program with prescription drug coverage, such as Medicaid, Medicare" is not eligible. The Rybelsus offer pages now redirect to the Ozempic offer.',
      'Self-pay: NovoCare Pharmacy does not sell Rybelsus. The successor Ozempic pill is sold self-pay at $149 (1.5 mg), $199 (4 mg) and $299 (9 mg) a month; Rybelsus and Ozempic tablets are not interchangeable milligram for milligram, so this is a prescriber conversation.',
      'Charitable grants: Rybelsus is on the type 2 diabetes fund lists at TotalAssist and HealthWell, but both funds were closed to new applicants on August 26, 2026.',
      'Medicare: not a GLP-1 Bridge drug; a negotiated Part D price of $274 (30-day) starts January 1, 2027; Extra Help can cut a covered brand copay to about $12.65 now if you qualify.',
    ],
  },
  programs: [
    {
      id: 'novo-pap',
      kind: 'manufacturer-pap',
      name: 'Novo Nordisk Patient Assistance Program',
      operator: 'Novo Nordisk (NovoCare)',
      status: 'not-found',
      statusNote:
        'Rybelsus is not on the 2026 product list (checked August 26, 2026). Novo Nordisk\'s page says "Some medicines will no longer be a part of the Patient Assistance Program for 2026," and the list it links to names insulins, the Ozempic injection (uninsured patients only), Xultophy and devices — no semaglutide tablets under either brand name.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable — the program does not cover Rybelsus, so its Medicare rules do not reach it. For the medicines it does cover, Novo Nordisk requires that you "Have Medicare or no insurance," are not enrolled in or eligible for Medicaid, Extra Help or VA benefits, and — for Medicare patients on Novo insulins — have household income at or below 400% of the federal poverty level, with an Extra Help denial letter if income is below 150%.',
      summary:
        'Novo Nordisk\'s PAP ships eligible medicines free to approved patients. Rybelsus is not one of them for 2026. The program says nothing Rybelsus-specific; the exclusion is by omission from the list.',
      eligibility: ['Not applicable to Rybelsus — the program\'s listed products only'],
      howToApply:
        'Not applicable to Rybelsus. For a listed Novo Nordisk medicine, the patient submits the patient portion online and the prescriber completes the provider portion; Medicare Part D enrollees may apply after October 15 for the following year. Questions: 1-866-310-7549.',
      applyUrl: 'https://www.novocare.com/content/dam/novonordisk/novocare/forms/PAP_Product_List.pdf',
      applyLabel: 'Novo Nordisk PAP product list (PDF)',
      phone: '1-866-310-7549',
      sources: [novoPapList, novoPap],
    },
    {
      id: 'rybelsus-savings-offer',
      kind: 'manufacturer-savings',
      name: 'Rybelsus Savings Offer',
      operator: 'Novo Nordisk',
      status: 'limited',
      statusNote:
        'Terms for Rybelsus 3 mg, 7 mg and 14 mg were still published on August 26, 2026, but the Rybelsus offer pages on novocare.com now redirect to the Ozempic savings offer, and Novo says existing enrollees "can continue to use their offer to get a discount on Ozempic." Activations are valid for up to 48 months from enrollment.',
      medicare: 'excluded',
      medicareNote:
        'Novo Nordisk\'s terms: "Patient is not eligible if he/she is enrolled in any federal or state health care program with prescription drug coverage, such as Medicaid, Medicare, VA, DOD, TRICARE, or any similar federal or state health care program." The pharmacist section adds that such patients "may not use this program, even if they elect to be processed as an uninsured (self-paying) patient."',
      summary:
        'A commercial copay offer: eligible commercially insured patients with Rybelsus coverage may pay as little as $25, with maximum savings of $100 per 1-month, $200 per 2-month or $300 per 3-month prescription (3 mg is limited to one month per redemption). Not for Medicare.',
      eligibility: ['Commercial insurance that covers Rybelsus', 'Not enrolled in any federal or state health care program with prescription drug coverage'],
      howToApply: 'Commercially insured patients enrol through rybelsus.com. Not applicable to Medicare beneficiaries. Questions about the offer: 1-877-304-6855.',
      applyUrl: 'https://www.rybelsus.com/savings-and-support.html',
      applyLabel: 'Rybelsus savings and support',
      phone: '1-877-304-6855',
      sources: [savingsTerms, rybelsusSavings, SRC.oigCoupons],
    },
    {
      id: 'novocare-pharmacy',
      kind: 'manufacturer-direct',
      name: 'NovoCare Pharmacy — self-pay',
      operator: 'Novo Nordisk',
      status: 'not-found',
      statusNote:
        'Rybelsus is not sold through NovoCare Pharmacy (checked August 26, 2026; the Rybelsus pharmacy pages do not exist). NovoCare\'s Rybelsus page instead points to self-pay pricing for the Ozempic pill: $149 a month for the 1.5 mg starting dose, $199 for 4 mg and $299 for 9 mg.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable to Rybelsus. For the Ozempic pill, Novo\'s pharmacy terms let a person with Medicare, Medicare Part D or a Medicare Advantage drug plan buy self-pay if they agree not to seek reimbursement and not to count the cost toward any deductible or out-of-pocket limit, including Part D TrOOP — while the May 2026 launch announcement says "Government beneficiaries are excluded" from the Ozempic pill offer. Because Novo\'s own pages disagree, confirm by phone before relying on it.',
      summary:
        'Novo Nordisk\'s direct-to-patient channel sells the Wegovy and Ozempic pens and pills self-pay, not Rybelsus. If you and your prescriber decide to move to the Ozempic pill, that self-pay price becomes an option to compare against your Part D cost — remembering that cash purchases do not count toward the $2,100 cap.',
      eligibility: ['Not applicable to Rybelsus'],
      howToApply: 'Not applicable to Rybelsus. Ozempic pill self-pay is arranged through NovoCare Pharmacy or a participating telehealth provider with a valid prescription.',
      applyUrl: 'https://www.novocare.com/pharmacy.html',
      applyLabel: 'NovoCare Pharmacy — products and prices',
      sources: [novoPharmacy, novoRybelsusPage, novoRename, ozempicPharmacyTerms],
    },
    {
      id: 'glp1-bridge',
      kind: 'government',
      name: 'Medicare GLP-1 Bridge ($50 a month, CMS demonstration)',
      operator: 'Centers for Medicare & Medicaid Services',
      status: 'not-found',
      statusNote: 'Running July 1, 2026 – December 31, 2027 — but Rybelsus is not an eligible drug. The Bridge covers Foundayo, Wegovy (injection or tablet) and the Zepbound KwikPen for weight management only.',
      medicare: 'excluded',
      medicareNote: 'Medicare.gov: "You aren\'t eligible if you … Have type 2 diabetes, moderate-to-severe sleep apnea, or fatty liver disease (but your Part D plan might cover your GLP-1s)." CMS adds that no part of the $50 copay counts toward TrOOP and there is no Extra Help subsidy on it.',
      summary:
        'Included because people ask: the $50-a-month Medicare GLP-1 program does not apply to Rybelsus. If you take Rybelsus for type 2 diabetes, your route is regular Part D coverage.',
      eligibility: ['Not applicable to Rybelsus'],
      howToApply: 'Not applicable to Rybelsus.',
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
      statusNote:
        'Both type 2 diabetes funds were closed to new applicants on August 26, 2026. Rybelsus (semaglutide) is on their approved-medication lists — and also on the closed Stroke and Lipodystrophy funds and the OPEN MASH (liver disease) fund, which does not match a diabetes prescription.',
      medicare: 'eligible',
      medicareNote: 'These funds require government-insured coverage (Medicare, Medicaid or TRICARE) that covers your qualifying expenses.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (launched July 1, 2026, combining PAF Co-Pay Relief and the PAN Foundation) lists Rybelsus under its type 2 diabetes funds. A listing is not an open fund. Sign up to be notified the moment it reopens — there is no waitlist or queue.',
      covers: 'When open: $1,500 guaranteed award, $2,000 maximum, for eligible out-of-pocket costs. You cannot receive more than one grant for the same condition.',
      eligibility: ['Confirmed type 2 diabetes diagnosis', ...TOTALASSIST_ELIGIBILITY],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: 'Sign up for fund notifications at totalassist.org/notify. When the fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistT2d, totalAssistMash, SRC.totalAssistMedIndex, SRC.totalAssistFunds, SRC.totalAssistNotify, SRC.totalAssistApply],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Type 2 Diabetes fund',
      operator: 'HealthWell Foundation',
      fund: 'Type 2 Diabetes',
      status: 'closed',
      statusNote: '"Temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Rybelsus and semaglutide are on the fund\'s treatments-covered list. No other HealthWell fund lists Rybelsus.',
      medicare: 'eligible',
      medicareNote: 'HealthWell requires "some form of health insurance (private insurance, Medicare, Medicaid, TriCare, etc.) that covers part of the cost of your treatment."',
      summary: 'HealthWell\'s Type 2 Diabetes fund lists Rybelsus. HealthWell states that closed funds reopen as funding is replenished and offers real-time alerts for the fund.',
      covers: 'When open: up to $1,000 as a pharmacy card for prescription copays; household income up to 300% of the federal poverty level (adjusted for household size and high-cost areas).',
      eligibility: [
        'Insurance (including Medicare) that covers part of the cost of Rybelsus',
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
      statusNote: 'Good Days lists no diabetes program among its open, seeking-funding or closed funds (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program for type 2 diabetes.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'Rybelsus is on the type 2 diabetes fund lists at both TotalAssist and HealthWell, but on August 26, 2026 both funds were closed to new applicants, and Good Days has no diabetes program. The only open TotalAssist fund that names Rybelsus is the MASH liver-disease fund, which does not fit a diabetes prescription. No currently open charitable fund covering Rybelsus for diabetes was found. Sign up for fund alerts — and remember that Extra Help does not depend on a fund balance.',
  extraHelpNote:
    'With no manufacturer patient assistance for Rybelsus and the diabetes funds closed, Extra Help is the one route open year-round. It works inside your Part D plan, counts toward your cap, and — unlike everything else on this page — does not depend on which brand name is printed on the bottle.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Rybelsus on Medicare there is no manufacturer patient assistance program, no self-pay price and no open charity fund as of our check, so the realistic order is: confirm your Part D coverage, check Extra Help, then talk to your prescriber about the transition Novo Nordisk is making.',
      bullets: [
        'Confirm your Part D plan covers Rybelsus for type 2 diabetes and whether prior authorization is needed; ask the plan whether the Ozempic pill is on the same tier, since Novo says the two will be covered alike.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'Type 2 diabetes → sign up for TotalAssist and HealthWell diabetes-fund alerts; both were closed when checked.',
        'Considering the Ozempic pill with your prescriber → compare its $149–$299 self-pay price against your plan cost, knowing cash purchases do not count toward the $2,100 cap and Novo\'s own pages disagree about whether Medicare enrollees may use it.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Rybelsus is listed by TotalAssist and HealthWell, but a listing does not mean funding is available. On the day we checked, both type 2 diabetes funds were closed and the Novo Nordisk PAP did not list Rybelsus at all.',
      bullets: [
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for the Type 2 diabetes (T2DM) fund.',
        'HealthWell: the Disease Funds page shows the Type 2 Diabetes fund status; closed funds reopen as money is replenished.',
        'Novo Nordisk PAP: check the current product list — if semaglutide tablets under either brand are ever added, this page will change.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'For the routes that were open:',
      bullets: [
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026; automatic if you have Medicaid, SSI or a Medicare Savings Program.',
        'TotalAssist (when open): government insurance covering Rybelsus; income at or below 500% FPL, cost-of-living adjusted; type 2 diabetes in treatment.',
        'HealthWell (when open): insurance covering part of the drug; income up to 300% FPL; provider-verified diagnosis.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready so you can act quickly when a fund opens — TotalAssist applications are decided instantly, and closed funds reopen without a queue.',
      bullets: [
        'Medicare card and your Part D / Medicare Advantage drug-plan card (carrier, plan type, policy ID, group number).',
        'Your Rybelsus prescription: strength and dose, plus your prescriber\'s name, phone and address.',
        'Type 2 diabetes diagnosis and the date of diagnosis if within the past 6 months.',
        'Household size and annual household income, with proof (tax return, Social Security or pension statements, pay stubs).',
        'Your copay or coinsurance amount for Rybelsus.',
        'Social Security number (TotalAssist and HealthWell both ask for it).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
        'TotalAssist (when open): you apply online in about 15 minutes; Patient Advocate Foundation verifies your diagnosis with your provider and verifies income automatically.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
        'TotalAssist: an instant decision when you submit; proof of income due within 30 days.',
        'HealthWell: a decision after your provider verifies the diagnosis; assistance is issued as a pharmacy card.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed":',
      bullets: [
        'Sign up for TotalAssist and HealthWell fund alerts — there is no waitlist, so being notified first matters.',
        'Ask your prescriber about the Ozempic pill (the reformulated tablet replacing Rybelsus), the Ozempic injection, or another covered GLP-1 such as Trulicity, which Lilly Cares does cover for eligible Medicare patients.',
        'Apply for Extra Help even if you think you earn too much — the limits are higher than many people expect.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Compare Part D plans in the fall — GLP-1 tiers and prior-authorization rules differ a lot between plans, and the negotiated semaglutide price arrives January 1, 2027.',
        'Call AltaMedicare — we\'ll check every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Copay or coinsurance amount for Rybelsus', note: 'TotalAssist asks for it' },
    { item: 'Social Security number', note: 'TotalAssist and HealthWell' },
    { item: 'Bank, retirement and pension statements', note: 'Extra Help application (resources)' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber whether the Ozempic injection or the new Ozempic pill fits you — the injection has its own assistance picture, and Novo Nordisk is moving Rybelsus patients to the pill.',
      href: '/ozempic-assistance-program.html',
      label: 'Ozempic assistance',
    },
    {
      text: 'Trulicity is the one GLP-1 we have found that a manufacturer foundation still supplies free to eligible Medicare Part D patients — worth raising with your prescriber if a switch is medically reasonable.',
      href: '/trulicity-assistance-program.html',
      label: 'Trulicity assistance',
    },
    ...standardAlternatives('Rybelsus'),
  ],
  faqs: [
    {
      question: 'Can Medicare help pay for Rybelsus?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans cover Rybelsus when it is prescribed for type 2 diabetes (not for weight loss), usually with prior authorization. Your copay depends on your plan\'s tier, and Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65. From January 1, 2027 a negotiated Medicare price of $274 for a 30-day supply applies to semaglutide.',
      },
    {
      question: 'Is Rybelsus being discontinued?',
      answer:
        'Novo Nordisk has not published a discontinuation date. What it has said (May 1, 2026) is that the Rybelsus strengths "have been reformulated and are now being introduced as Ozempic (semaglutide) tablets 1.5 mg, 4 mg, and 9 mg," that Rybelsus patients "should continue their medication as directed and speak with their healthcare professionals about transitioning to the Ozempic pill," and that Rybelsus "will continue to be marketed outside the US." NovoCare\'s Rybelsus page now reads "RYBELSUS is being replaced by Ozempic pill." The two are not interchangeable milligram for milligram.',
    },
    {
      question: 'Is there a Rybelsus patient assistance program?',
      answer:
        'Not for 2026. Rybelsus is not on the Novo Nordisk Patient Assistance Program\'s product list (checked August 26, 2026); the only GLP-1 on that list is the Ozempic injection, and only for uninsured patients at or below 200% of the federal poverty level. The charity funds that list Rybelsus (TotalAssist and HealthWell type 2 diabetes funds) were both closed to new applicants.',
    },
    {
      question: 'Can I use the Rybelsus savings offer with Medicare?',
      answer:
        'No. Novo Nordisk\'s terms exclude anyone "enrolled in any federal or state health care program with prescription drug coverage, such as Medicaid, Medicare, VA, DOD, TRICARE" — even if you offer to pay as an uninsured patient. Federal anti-kickback rules are the reason manufacturer copay cards exclude government insurance.',
    },
    {
      question: 'Does the $50-a-month Medicare GLP-1 program cover Rybelsus?',
      answer:
        'No. The Medicare GLP-1 Bridge (July 1, 2026 – December 31, 2027) covers Foundayo, Wegovy and the Zepbound KwikPen for weight management, and excludes people with type 2 diabetes — Medicare\'s guidance says their drug plan might cover a GLP-1 for diabetes instead. Rybelsus is not an eligible Bridge drug.',
    },
    {
      question: 'Is there a cash price for Rybelsus?',
      answer:
        'Not from Novo Nordisk. NovoCare Pharmacy sells the Wegovy and Ozempic pens and pills self-pay but not Rybelsus, and Rybelsus is not on TrumpRx. The Ozempic pill is priced at $149 (1.5 mg), $199 (4 mg) and $299 (9 mg) a month self-pay. Novo\'s pharmacy terms describe how a Medicare enrollee may buy self-pay (no reimbursement, nothing counted toward TrOOP), while its launch announcement says government beneficiaries are excluded — call NovoCare before relying on it.',
    },
    {
      question: 'Is there a charitable grant for Rybelsus right now?',
      answer:
        'Not for diabetes when we checked on August 26, 2026. Rybelsus is on the type 2 diabetes fund lists at TotalAssist and HealthWell, but both funds were closed, and Good Days has no diabetes program. TotalAssist\'s open MASH fund also lists Rybelsus, but that fund is for a liver-disease diagnosis. Sign up for notifications at totalassist.org/notify and on the HealthWell fund page so you hear when a diabetes fund reopens.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications with no waitlist or queue, and HealthWell says closed funds reopen as funding is replenished. While you wait: apply for Extra Help, ask your prescriber about the Ozempic pill or a covered alternative, and compare Part D plans in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['ozempic', 'mounjaro', 'trulicity', 'jardiance'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Rybelsus' },
  ],
  sources: [
    label,
    novoRename,
    novoCvApproval,
    novoListPrice,
    novoPapList,
    novoPap,
    savingsTerms,
    rybelsusSavings,
    novoPharmacy,
    novoRybelsusPage,
    ozempicPharmacyTerms,
    SRC.cmsMfp2027,
    SRC.cmsNegotiatedPrices,
    SRC.medicareWeightLossDrugs,
    SRC.medicareGlp1Bridge,
    SRC.cmsGlp1Bridge,
    SRC.medicareDrugCosts,
    totalAssistT2d,
    totalAssistMash,
    SRC.totalAssistFunds,
    SRC.totalAssistNotify,
    SRC.healthWellT2D,
    goodDays,
    trumpRx,
    SRC.oigCoupons,
  ],
  // Per-record verification date — a literal, never the shared CHECKED
  // constant: re-verifying one medication must move one date.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Rybelsus Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of Part D coverage for diabetes, Extra Help, what the switch to the Ozempic pill means for cost, and what to do when a diabetes fund reopens.',
  },
  description_meta:
    'Financial assistance for Rybelsus (semaglutide tablets) on Medicare: why Novo Nordisk\'s PAP no longer lists it, the switch to the Ozempic pill, charity fund status, the 2027 negotiated price, and Medicare Extra Help — verified August 2026.',
};

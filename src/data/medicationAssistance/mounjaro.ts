// ---------------------------------------------------------------------------
// Mounjaro (tirzepatide) — Eli Lilly and Company. Researched 2026-08-26.
// GLP-1 record: HIGHER MAINTENANCE RISK (spec §5C) — Medicare GLP-1 policy is
// changing through 2027. Re-verify more often than the rest of the set.
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

const lillyCaresMeds = {
  title: 'Lilly Cares — available medications',
  url: 'https://www.lillycares.com/available-medications',
  publisher: 'Lilly Cares Foundation',
  checked: CHECKED,
  supports: 'Mounjaro not on the covered list',
};
const lillyCaresApply = {
  title: 'Lilly Cares — how to apply and eligibility',
  url: 'https://www.lillycares.com/how-to-apply',
  publisher: 'Lilly Cares Foundation',
  checked: CHECKED,
  supports: 'Medicare Part D rule, income limits, process, phone',
};
const mounjaroSavings = {
  title: 'Mounjaro savings and coverage',
  url: 'https://mounjaro.lilly.com/savings-coverage',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'savings card terms; government-insurance exclusion',
};
const lillyDirect = {
  title: 'LillyDirect — Mounjaro self-pay',
  url: 'https://www.lilly.com/lillydirect/mounjaro',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'self-pay price',
};
const lillyDirectTerms = {
  title: 'LillyDirect — Mounjaro purchase terms',
  url: 'https://www.lilly.com/lillydirect/medicines/mounjaro/mounjaro-purchase-terms',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'Medicare Part D self-pay attestation; TrOOP',
};
const mounjaroSite = {
  title: 'Mounjaro (tirzepatide) — official site',
  url: 'https://mounjaro.lilly.com/',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'approved use; not a weight-loss drug',
};
const mounjaroFaq = {
  title: 'Mounjaro FAQ (list price)',
  url: 'https://mounjaro.lilly.com/faq',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports: 'list price for a 28-day supply',
};
const cmsBalance = {
  title: 'CMS BALANCE Model',
  url: 'https://www.cms.gov/priorities/innovation/innovation-models/balance',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'Mounjaro listed; not launching in Medicare in 2027',
};
const cmsMfp2028List = {
  title: 'Selected drug list for initial price applicability year 2028',
  url: 'https://www.cms.gov/files/document/factsheet-medicare-negotiation-selected-drug-list-ipay-2028.pdf',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'tirzepatide not selected for negotiation',
};

export const MOUNJARO: MedicationAssistanceRecord = {
  slug: 'mounjaro',
  brandName: 'Mounjaro',
  genericName: 'tirzepatide',
  manufacturer: 'Eli Lilly and Company',
  conditions: ['diabetes'],
  // tirzepatide — dual GIP/GLP-1 receptor agonist; classed under 'glp-1', the
  // single vocabulary key for GLP-1 receptor agonists (Mounjaro US PI).
  drugClass: ['glp-1'],
  description:
    'Mounjaro is a once-weekly injectable GIP/GLP-1 receptor agonist for type 2 diabetes. Lilly states plainly that Mounjaro is not a weight-loss drug — the same molecule is sold for weight management as Zepbound, and the two are treated differently by Medicare.',
  usedFor: [
    'Improving blood sugar in adults and children 10 and older with type 2 diabetes, along with diet and exercise',
  ],
  whyCostly:
    'Lilly lists Mounjaro at $1,112.16 for a 28-day supply. Part D plans usually place it on a high brand tier with prior authorization confirming a type 2 diabetes diagnosis, so the monthly copay or coinsurance can be large until you reach the $2,100 annual cap. Mounjaro has not been selected for Medicare price negotiation, and the manufacturer\'s patient assistance program does not cover it.',
  medicareContext:
    'Medicare Part D covers GLP-1 medicines such as Mounjaro when prescribed for type 2 diabetes, not for weight loss alone. The Medicare GLP-1 Bridge ($50 a month, July 1, 2026 – December 31, 2027) does not include Mounjaro and excludes people with type 2 diabetes. CMS lists Mounjaro under its BALANCE Model, but says that model is not launching in Medicare in 2027. Tirzepatide has not been selected for Medicare drug price negotiation for 2026, 2027 or 2028.',
  quickAnswer: {
    verdict:
      'Assistance for Mounjaro on Medicare is limited right now. Lilly Cares does not cover Mounjaro, the savings card excludes Medicare, and the type 2 diabetes charity funds at TotalAssist and HealthWell were closed to new applicants when we checked. What remains: Lilly\'s $499-a-month self-pay price through LillyDirect (open to Medicare enrollees paying cash), Medicare Extra Help, and fund notifications for when a diabetes fund reopens.',
    points: [
      'Manufacturer patient assistance: Mounjaro is not on the Lilly Cares medication list (Trulicity is).',
      'Mounjaro Savings Card: excludes Medicare, Medicare Part D, Medicare Advantage and Medigap.',
      'LillyDirect self-pay: Mounjaro starting at $499 a month; Medicare enrollees may buy it self-pay, but the cost does not count toward Part D out-of-pocket costs.',
      'Charitable grants: Mounjaro is on the TotalAssist and HealthWell type 2 diabetes fund lists, but both funds were closed to new applicants.',
      'Medicare GLP-1 Bridge: not for Mounjaro and not for people with type 2 diabetes. Extra Help can cut a covered brand copay to about $12.65 if you qualify.',
    ],
  },
  programs: [
    {
      id: 'lillycares',
      kind: 'manufacturer-pap',
      name: 'Lilly Cares Foundation Patient Assistance Program',
      operator: 'Lilly Cares Foundation',
      status: 'not-found',
      statusNote: 'Mounjaro is not on the Lilly Cares available-medications list (checked August 26, 2026). Lilly Cares publishes no explicit exclusion statement — only the list, which omits Mounjaro and Zepbound.',
      medicare: 'conditional',
      medicareNote:
        'For the medicines Lilly Cares does cover, Medicare Part D enrollees may apply if household adjusted gross income is at or below 300% or 400% of the federal poverty level (by medication group) and they are not on Medicaid, full Extra Help or VA benefits. None of that applies to Mounjaro, because it is not covered.',
      summary:
        'Lilly\'s patient assistance foundation provides its listed medicines free to eligible patients. Mounjaro is not listed; Lilly points people whose medication is not listed to the Medicine Assistance Tool.',
      eligibility: ['Not applicable to Mounjaro — the program\'s listed medicines only'],
      howToApply: 'Not applicable to Mounjaro. For a listed Lilly medicine (for example Trulicity), the patient signs the patient section, the prescriber completes the prescriber section, and the application is submitted online, by fax or by mail.',
      applyUrl: 'https://www.lillycares.com/available-medications',
      applyLabel: 'Lilly Cares medication list',
      phone: '1-800-545-6962',
      sources: [lillyCaresMeds, lillyCaresApply],
    },
    {
      id: 'mounjaro-savings-card',
      kind: 'manufacturer-savings',
      name: 'Mounjaro Savings Card',
      operator: 'Eli Lilly and Company',
      status: 'open',
      statusNote: 'Active for commercially insured patients; card expires December 31, 2026.',
      medicare: 'excluded',
      medicareNote:
        'Lilly\'s terms require that you are not enrolled in any state, federal or government-funded healthcare program, including Medicaid, Medicare, Medicare Part D, Medicare Advantage, Medigap, DoD, VA and TRICARE.',
      summary: 'A commercial copay offer: as little as $25 per fill for commercially insured patients whose plan covers Mounjaro, or as low as $499 a month for commercially insured patients without coverage.',
      eligibility: ['Commercial prescription insurance', 'Not enrolled in any government-funded healthcare program'],
      howToApply: 'Commercially insured patients activate the card on mounjaro.lilly.com. Not applicable to Medicare beneficiaries.',
      applyUrl: 'https://mounjaro.lilly.com/savings-coverage',
      applyLabel: 'Mounjaro savings card terms',
      phone: '1-844-805-5807',
      sources: [mounjaroSavings, SRC.oigCoupons],
    },
    {
      id: 'lillydirect',
      kind: 'manufacturer-direct',
      name: 'LillyDirect — Mounjaro self-pay',
      operator: 'Eli Lilly and Company',
      status: 'open',
      statusNote: 'Self-pay price "starting at $499/month" for every strength of the single-dose pen on August 26, 2026 (taxes and fees may apply).',
      medicare: 'eligible',
      medicareNote:
        'The purchase terms allow people with Medicare Part D to buy self-pay, but you agree not to seek reimbursement from any insurer or government program and not to count the amount toward your Part D true out-of-pocket (TrOOP) costs.',
      summary:
        'Lilly\'s direct-to-patient pharmacy channel. It replaces insurance rather than working with it, so compare the $499 price against what your Part D plan would charge — especially once you are near the $2,100 cap.',
      covers: 'A cash price starting at $499 a month for Mounjaro single-dose pens (2.5 mg to 15 mg).',
      eligibility: ['A valid Mounjaro prescription', 'Willing to pay cash outside your insurance'],
      howToApply: 'Your prescriber sends the prescription to LillyDirect; you pay online and the medicine is delivered.',
      applyUrl: 'https://www.lilly.com/lillydirect/mounjaro',
      applyLabel: 'LillyDirect — Mounjaro',
      sources: [lillyDirect, lillyDirectTerms],
    },
    {
      id: 'glp1-bridge',
      kind: 'government',
      name: 'Medicare GLP-1 Bridge ($50 a month, CMS demonstration)',
      operator: 'Centers for Medicare & Medicaid Services',
      status: 'not-found',
      statusNote: 'Running July 1, 2026 – December 31, 2027 — but Mounjaro is not an eligible drug. The Bridge covers Foundayo, Wegovy and the Zepbound KwikPen for weight management only.',
      medicare: 'excluded',
      medicareNote: 'Part D enrollees with type 2 diabetes are excluded from the Bridge entirely — Medicare\'s guidance says their drug plan should already cover a GLP-1 for diabetes.',
      summary:
        'Included here because people ask about it: the $50-a-month Medicare GLP-1 program does not apply to Mounjaro. If you take Mounjaro for type 2 diabetes, your route is regular Part D coverage.',
      eligibility: ['Not applicable to Mounjaro'],
      howToApply: 'Not applicable to Mounjaro.',
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
      statusNote: 'Both type 2 diabetes funds were closed to new applicants on August 26, 2026. Mounjaro (tirzepatide) is on the approved-medication list.',
      medicare: 'eligible',
      medicareNote: 'These funds require government insurance (Medicare, Medicaid or TRICARE).',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (launched July 1, 2026, combining PAF Co-Pay Relief and the PAN Foundation) lists Mounjaro under its type 2 diabetes funds. A listing is not an open fund. Sign up to be notified the moment it reopens — there is no waitlist or queue.',
      covers: 'When open: $1,500 guaranteed award, $2,000 maximum, for eligible out-of-pocket costs.',
      eligibility: ['Confirmed type 2 diabetes diagnosis', ...TOTALASSIST_ELIGIBILITY],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: 'Sign up for fund notifications at totalassist.org/notify. When the fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [
        { title: 'TotalAssist — Type 2 diabetes (T2DM) fund', url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/', publisher: 'Patient Advocate Foundation', checked: CHECKED, supports: 'closed; Mounjaro listed' },
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
      statusNote: '"Temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Mounjaro and tirzepatide are on the fund\'s medication list. HealthWell has no obesity or weight-management fund.',
      medicare: 'eligible',
      medicareNote: 'HealthWell requires insurance that covers part of the drug; Medicare qualifies.',
      summary: 'HealthWell\'s Type 2 Diabetes fund lists Mounjaro. HealthWell states that closed funds reopen as funding is replenished and offers real-time alerts for the fund.',
      covers: 'When open: up to $1,000 as a pharmacy card; household income up to 300% of the federal poverty level.',
      eligibility: [
        'Insurance (including Medicare) that covers part of the cost of Mounjaro',
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
      statusNote: 'Good Days lists no diabetes or obesity program (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program for type 2 diabetes.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://www.mygooddays.org/for-patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [{ title: 'Good Days — diseases covered', url: 'https://www.mygooddays.org/for-patients/diseases-covered/', publisher: 'Good Days', checked: CHECKED, supports: 'no diabetes program' }],
    },
  ],
  charitableSummary:
    'Mounjaro is on the type 2 diabetes fund lists at both TotalAssist and HealthWell, but on August 26, 2026 both funds were closed to new applicants, and Good Days has no diabetes program. No currently open charitable fund covering Mounjaro was found. Sign up for fund alerts — and remember that Extra Help does not depend on a fund balance.',
  extraHelpNote:
    'With no manufacturer patient assistance for Mounjaro and the diabetes funds closed, Extra Help is the one route that is open year-round — and unlike the $499 self-pay price, it works inside your Part D plan and counts toward your cap.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Mounjaro on Medicare there is no manufacturer patient assistance program and no open charity fund as of our check, so the realistic order is: confirm your Part D coverage, check Extra Help, then weigh the LillyDirect self-pay price.',
      bullets: [
        'Confirm your Part D plan covers Mounjaro for type 2 diabetes and whether prior authorization is needed — the diagnosis is the key to coverage.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'High copay and not near the $2,100 cap → compare LillyDirect\'s $499 self-pay price against your plan cost (it will not count toward your cap).',
        'Type 2 diabetes → sign up for TotalAssist and HealthWell diabetes-fund alerts; both were closed when checked.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Mounjaro is listed by TotalAssist and HealthWell, but a listing does not mean funding is available. On the day we checked, both type 2 diabetes funds were closed and Lilly Cares did not list Mounjaro at all.',
      bullets: [
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for the Type 2 diabetes (T2DM) fund.',
        'HealthWell: the Disease Funds page shows the Type 2 Diabetes fund status; closed funds reopen as money is replenished.',
        'Lilly Cares: check the available-medications list — if Mounjaro is ever added, this page will change.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'For the routes that were open:',
      bullets: [
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026; automatic if you have Medicaid, SSI or a Medicare Savings Program.',
        'LillyDirect self-pay: a valid Mounjaro prescription; Medicare enrollees may buy self-pay but must not seek reimbursement or count the cost toward TrOOP.',
        'TotalAssist (when open): government insurance covering Mounjaro; income at or below 500% FPL, cost-of-living adjusted; type 2 diabetes in treatment.',
        'HealthWell (when open): insurance covering part of the drug; income up to 300% FPL; provider-verified diagnosis.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready so you can act quickly when a fund opens — TotalAssist applications are decided instantly, and closed funds reopen without a queue.',
      bullets: [
        'Medicare card and your Part D / Medicare Advantage drug-plan card (carrier, plan type, policy ID, group number).',
        'Your Mounjaro prescription: strength and dose, plus your prescriber\'s name, phone and address.',
        'Type 2 diabetes diagnosis and the date of diagnosis if within the past 6 months.',
        'Household size and annual household income, with proof (tax return, Social Security or pension statements, pay stubs).',
        'Your copay or coinsurance amount for Mounjaro.',
        'Social Security number (TotalAssist and HealthWell both ask for it).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
        'LillyDirect: your prescriber sends the prescription to LillyDirect; you complete the purchase online.',
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
        'Ask your doctor whether a covered alternative (for example Trulicity, which Lilly Cares does cover for eligible Medicare patients) is appropriate, or request a formulary exception or tier reduction.',
        'Apply for Extra Help even if you think you earn too much — the limits are higher than many people expect.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Compare Part D plans in the fall — GLP-1 tiers and prior-authorization rules differ a lot between plans.',
        'Call AltaMedicare — we\'ll check every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Copay or coinsurance amount for Mounjaro', note: 'TotalAssist asks for it' },
    { item: 'Social Security number', note: 'TotalAssist and HealthWell' },
    { item: 'Bank, retirement and pension statements', note: 'Extra Help application (resources)' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your doctor whether a covered alternative is appropriate for you — Lilly Cares does cover Trulicity for eligible Medicare Part D patients, and every plan\'s GLP-1 tiering differs.',
      href: '/trulicity-assistance-program.html',
      label: 'Trulicity assistance',
    },
    ...standardAlternatives('Mounjaro'),
  ],
  faqs: [
    {
      question: 'Can Medicare help pay for Mounjaro?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans cover Mounjaro when it is prescribed for type 2 diabetes (not for weight loss), usually with prior authorization. Your copay depends on your plan\'s tier, and Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65. Read more in <a href="/blog/does-medicare-cover-mounjaro.html">Does Medicare cover Mounjaro?</a>',
    },
    {
      question: 'Is there a Mounjaro patient assistance program?',
      answer:
        'Not from the manufacturer. Mounjaro is not on the Lilly Cares Foundation\'s available-medications list (checked August 26, 2026); Lilly Cares does list Trulicity and several insulins. Lilly points people whose medicine is not listed to the Medicine Assistance Tool. The charity funds that list Mounjaro (TotalAssist and HealthWell type 2 diabetes funds) were both closed to new applicants.',
    },
    {
      question: 'Can I use the Mounjaro savings card with Medicare?',
      answer:
        'No. Lilly\'s terms require that you are not enrolled in any government-funded program, including Medicare, Medicare Part D, Medicare Advantage and Medigap. Federal anti-kickback rules are the reason manufacturer copay cards exclude government insurance.',
    },
    {
      question: 'Does the $50-a-month Medicare GLP-1 program cover Mounjaro?',
      answer:
        'No. The Medicare GLP-1 Bridge (July 1, 2026 – December 31, 2027) covers Foundayo, Wegovy and the Zepbound KwikPen for weight management, and excludes people with type 2 diabetes — Medicare\'s guidance says their drug plan should already cover a GLP-1 for diabetes. Mounjaro is not an eligible Bridge drug.',
    },
    {
      question: 'What is the LillyDirect $499 price, and can I use it with Medicare?',
      answer:
        'LillyDirect lists Mounjaro self-pay starting at $499 a month for every strength of the single-dose pen. Medicare Part D enrollees may buy it self-pay, but the purchase terms require that you not seek reimbursement and not count the amount toward your Part D true out-of-pocket costs. It can make sense when your plan copay is higher than $499 and you are far from the $2,100 cap; compare carefully.',
    },
    {
      question: 'Is there a charitable grant for Mounjaro right now?',
      answer:
        'Not when we checked on August 26, 2026. Mounjaro is on the type 2 diabetes fund lists at TotalAssist and HealthWell, but both funds were closed to new applicants, and Good Days has no diabetes program. Sign up for notifications at totalassist.org/notify and on the HealthWell fund page so you hear when one reopens.',
    },
    {
      question: 'Can my doctor\'s office apply for me?',
      answer:
        'For TotalAssist and HealthWell you (the patient) apply, and the foundation verifies the diagnosis with your provider. Your doctor\'s office is essential in another way: it handles the prior-authorization request that Part D plans usually require for Mounjaro, and can request a formulary exception. AltaMedicare can help you work through the options, free.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications with no waitlist or queue, and HealthWell says closed funds reopen as funding is replenished. While you wait: apply for Extra Help, ask your doctor about a covered alternative or a formulary exception, and compare Part D plans in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['ozempic', 'trulicity', 'jardiance', 'farxiga'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/does-medicare-cover-mounjaro.html', label: 'Does Medicare Cover Mounjaro?', blurb: 'Coverage for diabetes vs. weight loss' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Mounjaro' },
  ],
  sources: [
    mounjaroSite,
    mounjaroFaq,
    lillyCaresMeds,
    lillyCaresApply,
    mounjaroSavings,
    lillyDirect,
    lillyDirectTerms,
    SRC.medicareWeightLossDrugs,
    SRC.medicareGlp1Bridge,
    SRC.cmsGlp1Bridge,
    cmsBalance,
    cmsMfp2028List,
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
    title: 'How to Apply for Mounjaro Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of Part D coverage for diabetes, Extra Help, the self-pay option, and what to do when a diabetes fund reopens.',
  },
  description_meta:
    'How to find financial assistance for Mounjaro (tirzepatide) on Medicare: why Lilly Cares does not cover it, the $499 LillyDirect self-pay option, the GLP-1 Bridge rules, charity fund status, and Medicare Extra Help — verified August 2026.',
};

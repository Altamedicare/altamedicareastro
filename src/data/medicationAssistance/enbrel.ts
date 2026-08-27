// ---------------------------------------------------------------------------
// Enbrel (etanercept) — Immunex Corporation, a subsidiary of Amgen.
// Independently researched 2026-08-26. Every program below was read on the
// official source cited with it. Batch 3 (spec §24 #13) — a NEW page.
//
// Enbrel is the only medication in the project so far whose Medicare price was
// set by negotiation rather than by a plan: it is one of the ten drugs in the
// first cycle of the Medicare Drug Price Negotiation Program, with a Maximum
// Fair Price in effect since January 1, 2026. That fact, not a program, is the
// main thing that changed for Part D beneficiaries this year.
//
// EVIDENCE NOTE on the Amgen Safety Net Foundation Medicare question: two
// official ASNF pages point in different directions. The FAQ says the
// foundation "supports financially needy uninsured patients" who "must not be
// eligible for Medicaid, Medicare, or any other financial support options";
// the eligibility page allows, "for certain products," a "qualifying Medicare
// patient with an affordability gap." The Enbrel-specific application (Jul
// 2026) lists only "You have no insurance coverage" and does not name Enbrel
// as one of those products. Rather than pick a side, this record carries
// `medicare: 'unknown'` and tells the reader to ask the program about Enbrel
// specifically — the honest reading of a contradictory source.
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
  title: 'Enbrel prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a002b40c-097d-47a5-957f-7a7b1807af7f',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'TNF blocker; adult and pediatric indications; weekly subcutaneous dosing',
};
const asnfEligibility = {
  title: 'Amgen Safety Net Foundation — check eligibility requirements',
  url: 'https://www.amgensafetynetfoundation.com/eligibility.html',
  publisher: 'Amgen Safety Net Foundation',
  checked: CHECKED,
  supports: 'residency and income requirements; "no insurance coverage"; the "certain products" Medicare clause; 2026 income table',
};
const asnfFaqs = {
  title: 'Amgen Safety Net Foundation — frequently asked questions',
  url: 'https://www.amgensafetynetfoundation.com/resources-faqs.html',
  publisher: 'Amgen Safety Net Foundation',
  checked: CHECKED,
  supports: 'uninsured focus; "must not be eligible for Medicaid, Medicare"; 12-month enrollment; re-enrollment; no fee',
};
const asnfEnbrelApp = {
  title: 'Amgen Safety Net Foundation — Enbrel patient application (PDF, Jul 2026)',
  url: 'https://www.amgensafetynetfoundation.com/assets/pdf/AMGEN-SNF-Application-Prescription-Enbrel-EN.pdf',
  publisher: 'Amgen Safety Net Foundation',
  checked: CHECKED,
  supports: 'Enbrel covered; 2026 income limits; required application items; pharmacy and phone details',
};
const enbrelCost = {
  title: 'ENBREL cost and coverage support',
  url: 'https://www.enbrel.com/en/enbrel-cost',
  publisher: 'Amgen',
  checked: CHECKED,
  supports: 'co-pay card is commercial-only; what Amgen SupportPlus offers Medicare patients; phone',
};
const amgenCopayTerms = {
  title: 'Amgen SupportPlus co-pay program terms and conditions',
  url: 'https://www.amgensupportplus.com/copay-terms',
  publisher: 'Amgen',
  checked: CHECKED,
  supports: 'exclusion where the product is paid in whole or part by Medicare, Medicaid or another federal or state program',
};
const cmsEnbrelMfp = {
  title: 'Negotiated prices for initial price applicability year 2026 (fact sheet)',
  url: 'https://www.cms.gov/files/document/fact-sheet-negotiated-prices-initial-price-applicability-year-2026.pdf',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'Enbrel negotiated price $2,355.00 per 30-day supply for CY 2026 vs $7,106.00 list price in CY 2023',
};
const totalAssistRa = {
  title: 'TotalAssist — Rheumatoid arthritis (RA) fund',
  url: 'https://totalassist.org/funds/rheumatoid-arthritis-ra/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $4,000 award; Enbrel listed',
};
const totalAssistPsa = {
  title: 'TotalAssist — Psoriatic arthritis (PsA) fund',
  url: 'https://totalassist.org/funds/psoriatic-arthritis-psa/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $3,500 award; Enbrel listed',
};
const totalAssistAs = {
  title: 'TotalAssist — Ankylosing spondylitis (AS) fund',
  url: 'https://totalassist.org/funds/ankylosing-spondylitis-as/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $4,400 award; Enbrel listed',
};
const healthWellAutoimmune = {
  title: 'HealthWell Foundation — AutoImmune – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/autoimmune-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $2,800 maximum; 500% FPL; Enbrel, Enbrel Mini Autoinjector, Enbrel Pfs and etanercept listed',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no rheumatoid arthritis, psoriasis, psoriatic arthritis or ankylosing spondylitis program',
};

export const ENBREL: MedicationAssistanceRecord = {
  slug: 'enbrel',
  brandName: 'Enbrel',
  genericName: 'etanercept',
  manufacturer: 'Immunex Corporation (Amgen)',
  conditions: ['autoimmune'],
  // "Enbrel is a tumor necrosis factor (TNF) blocker" (label) — a biologic.
  drugClass: ['biologic'],
  description:
    'Enbrel is a self-injected TNF blocker used for rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis and plaque psoriasis, and for several forms of juvenile arthritis. For people on Medicare it is unusual in one respect: Enbrel is one of the first ten drugs whose Part D price Medicare negotiated directly.',
  usedFor: [
    'Moderately to severely active rheumatoid arthritis in adults',
    'Active psoriatic arthritis in adults',
    'Active ankylosing spondylitis in adults',
    'Chronic moderate to severe plaque psoriasis in adults, and in children 4 and older',
    'Polyarticular juvenile idiopathic arthritis and juvenile psoriatic arthritis in patients 2 and older',
  ],
  whyCostly:
    'Enbrel is a specialty-tier biologic, so most Part D plans charge a percentage of the price rather than a flat copay — and the price is high enough that people commonly reach the annual out-of-pocket cap in the first months of the year. CMS put Enbrel\'s 2023 list price at $7,106 for a 30-day supply. There is no etanercept generic, and the manufacturer\'s own copay card is closed to anyone with Medicare.',
  medicareContext:
    'Enbrel is generally covered under Medicare Part D and Medicare Advantage drug plans, usually on a specialty tier and often with prior authorization or step therapy. It is also one of the ten drugs selected in the first cycle of the Medicare Drug Price Negotiation Program: CMS agreed a Maximum Fair Price of $2,355.00 for a 30-day supply, in effect since January 1, 2026 — a 67% discount from the $7,106.00 list price CMS recorded for 2023. That is the price your plan pays; what you pay still depends on your plan\'s tier and cost-sharing, which is why the $2,100 Part D out-of-pocket cap and the Medicare Prescription Payment Plan both matter here. Around 48,000 Part D enrollees used Enbrel in 2023, by CMS\'s count.',
  quickAnswer: {
    verdict:
      'Enbrel is the rare case where the biggest relief for a Medicare beneficiary came from Medicare itself, not from a program. The negotiated Part D price took effect in January 2026. The manufacturer\'s copay card excludes Medicare, Amgen\'s foundation is built for uninsured patients, and every autoimmune charity fund we checked was closed to new applicants.',
    points: [
      'Medicare negotiated price: $2,355.00 for a 30-day supply in 2026, down from a $7,106.00 list price in 2023. It applies to your Part D plan — your own copay still depends on your plan\'s tier and cost-sharing.',
      'ENBREL Co-Pay Card: commercially insured patients only, and available to them regardless of income. Amgen\'s terms rule it out where the product is paid for in whole or in part by Medicare, Medicaid or another federal or state program, and it is not valid for cash-paying patients either.',
      'Amgen Safety Net Foundation covers Enbrel and was accepting applications, but it is built for uninsured patients — its own FAQ says qualifying patients "must not be eligible for Medicaid, Medicare, or any other financial support options." Its eligibility page allows Medicare patients "for certain products" without naming Enbrel as one, so ask the program about Enbrel specifically before assuming either way.',
      'What Amgen does offer Medicare patients is navigation, not money: Amgen SupportPlus says it can help you understand your plan, identify other local plans, refer you for Extra Help, and point you to independent nonprofit foundations.',
      'Charitable grants: TotalAssist lists Enbrel under its rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis and psoriasis funds, and HealthWell lists it on the AutoImmune – Medicare Access fund. All were closed to new applicants when we checked.',
      'Extra Help is the route that does not depend on a fund balance, and on a specialty-tier drug it is worth more than usual.',
    ],
  },
  programs: [
    {
      id: 'amgen-safety-net',
      kind: 'manufacturer-pap',
      name: 'Amgen Safety Net Foundation',
      operator: 'Amgen Safety Net Foundation',
      status: 'limited',
      statusNote:
        'Accepting applications on August 26, 2026 — Enbrel has its own application form dated July 2026 — but this is an uninsured-patient program, which is the limit that matters if you have Medicare.',
      medicare: 'unknown',
      medicareNote:
        'Two official Amgen pages point in different directions, so we are not going to decide it for you. The foundation\'s FAQ says it "supports financially needy uninsured patients" and that "qualifying uninsured patients must not be eligible for Medicaid, Medicare, or any other financial support options." Its eligibility page separately allows that "for certain products, you are a qualifying Medicare patient with an affordability gap and do not have access to alternative financial support (e.g., Medicare Extra Help or Independent Copay Foundation funding)" — but does not say Enbrel is one of those products, and the Enbrel application lists only "You have no insurance coverage." Call and ask about Enbrel by name.',
      summary:
        'Amgen\'s charitable foundation provides Amgen medicines at no cost to patients with financial need. Enbrel is covered — it has a dedicated patient application — and approved patients are enrolled for up to 12 months, with the medicine shipped directly to them.',
      covers: 'Enbrel at no cost for an enrollment period of up to 12 months. Re-enrollment requires a new application.',
      eligibility: [
        'Lived in the United States, American Samoa, Guam, Puerto Rico or the U.S. Virgin Islands for six months or longer',
        'Household income at or below $47,880 for one person or $64,920 for two, adding $17,040 for each additional person. Amgen states these figures are based on current federal poverty guidelines; limits are roughly 25% higher in Alaska and 15% higher in Hawaii',
        'The Enbrel application states the insurance requirement as "You have no insurance coverage"',
        'The foundation\'s general eligibility page adds that, for certain products, a qualifying Medicare patient with an affordability gap and no access to alternative financial support may be eligible — ask whether Enbrel is one of those products',
      ],
      requirements: [
        'Completed and signed patient application (the Enbrel-specific form)',
        'Signed patient authorization',
        'Your prescriber submits the prescription electronically to the foundation\'s pharmacy partner',
        'You may be asked to provide proof of income',
      ],
      howToApply:
        'Complete the Enbrel patient application and authorization, have your prescriber send the prescription electronically to the pharmacy named on the form, and submit by fax or mail. To be screened first, contact Amgen SupportPlus. The foundation does not charge a fee, and warns that any third party billing you a monthly fee for this support is not the foundation.',
      applyUrl: 'https://www.amgensafetynetfoundation.com/eligibility.html',
      applyLabel: 'Amgen Safety Net Foundation — eligibility',
      phone: '1-866-264-2778',
      sources: [asnfEligibility, asnfFaqs, asnfEnbrelApp],
    },
    {
      id: 'copay-card',
      kind: 'manufacturer-savings',
      name: 'ENBREL Co-Pay Card',
      operator: 'Amgen SupportPlus',
      status: 'limited',
      statusNote: 'Running for commercially insured patients on August 26, 2026, and closed to anyone with government drug coverage.',
      medicare: 'excluded',
      medicareNote:
        'Amgen\'s co-pay terms exclude the offer where the product is paid for in whole or in part by Medicare, Medicaid or any other federal or state healthcare program, and state it is not valid for cash-paying patients. Enbrel.com is direct about the split: the card is "available to eligible patients with commercial insurance (usually self-purchased or through an employer) regardless of income level."',
      summary:
        'A commercial copay card that can bring an eligible commercially insured patient\'s cost down to as little as $0. It is listed here so you can see why it does not apply to you — and note the contrast: it ignores income entirely, while the assistance route for uninsured patients is entirely about income.',
      covers: 'For commercially insured patients: co-pay support up to a Maximum Program Benefit set by Amgen.',
      eligibility: [
        'Commercial insurance (self-purchased or through an employer) with coverage for Enbrel',
        'Not paid for in whole or in part by Medicare, Medicaid or any other federal or state healthcare program',
        'Not a cash-paying patient',
      ],
      howToApply: 'Not applicable if you have Medicare. Commercially insured patients enrol through Amgen SupportPlus and share the card details with their specialty pharmacy.',
      applyUrl: 'https://www.amgensupportplus.com/copay-terms',
      applyLabel: 'Amgen SupportPlus co-pay terms',
      phone: '1-888-436-2735',
      sources: [enbrelCost, amgenCopayTerms, SRC.oigCoupons],
    },
    {
      id: 'amgen-supportplus-medicare',
      kind: 'manufacturer-direct',
      name: 'Amgen SupportPlus — coverage navigation for Medicare patients',
      operator: 'Amgen',
      status: 'open',
      statusNote: 'Available on August 26, 2026. Included so the record is complete about what Amgen does and does not offer a Medicare beneficiary.',
      medicare: 'eligible',
      medicareNote:
        'This is the one Amgen service aimed squarely at Medicare patients — and it is help finding money, not money. Amgen says its representatives can explain your current plan and expected out-of-pocket costs for Enbrel, identify other local plan options if you want to switch, refer you for Extra Help if eligible, and put you in touch with independent nonprofit foundations.',
      summary:
        'A support line, not a payment program. Useful for two specific jobs: understanding what your plan will actually charge you for Enbrel, and comparing plans at open enrollment — which for a specialty drug can be worth more than any card.',
      covers: 'Nothing directly. Amgen notes it has no control over the independent nonprofit programs it refers patients to.',
      eligibility: ['A Medicare beneficiary prescribed Enbrel'],
      howToApply: 'Call Amgen SupportPlus at 1-888-4ENBREL (1-888-436-2735), Monday–Friday 8:00am–8:00pm ET.',
      applyUrl: 'https://www.enbrel.com/en/enbrel-cost',
      applyLabel: 'ENBREL cost support',
      phone: '1-888-436-2735',
      sources: [enbrelCost],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — autoimmune funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Rheumatoid arthritis · Psoriatic arthritis · Ankylosing spondylitis · Psoriasis',
      status: 'closed',
      statusNote:
        'Every TotalAssist fund matching an Enbrel indication was closed to new applicants on August 26, 2026 — rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis and psoriasis. Enbrel is on each of those funds\' approved-medication lists.',
      medicare: 'eligible',
      medicareNote: 'When open, these funds require government insurance (Medicare, Medicaid or TRICARE) that covers your Enbrel costs.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (which absorbed the PAN Foundation\'s funds on July 1, 2026) lists Enbrel under four funds covering its indications. A listing is not an open fund. Sign up to be notified the moment one reopens; TotalAssist has no waitlist or queue.',
      covers:
        'When open, the guaranteed award differs by fund: ankylosing spondylitis $4,400; rheumatoid arthritis $4,000; psoriatic arthritis $3,500; psoriasis $2,500. One grant per condition.',
      eligibility: TOTALASSIST_ELIGIBILITY,
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [SRC.totalAssistFunds, totalAssistRa, totalAssistPsa, totalAssistAs, SRC.totalAssistMedIndex, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — AutoImmune – Medicare Access fund',
      operator: 'HealthWell Foundation',
      fund: 'AutoImmune – Medicare Access',
      status: 'closed',
      statusNote:
        'The fund was "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Enbrel, Enbrel Mini Autoinjector, Enbrel Pfs and etanercept are all on its covered-treatments list.',
      medicare: 'eligible',
      medicareNote: 'A Medicare Access fund — for Medicare patients only. HealthWell requires insurance that pays part of the cost of the drug; a discount card does not count.',
      summary:
        'HealthWell lists Enbrel on its AutoImmune – Medicare Access fund. HealthWell states that closed funds reopen as funding is replenished, and offers real-time alerts for each fund.',
      covers: 'When open: up to $2,800, paid as a pharmacy card. Household income up to 500% of the federal poverty level.',
      eligibility: [
        'Medicare coverage that pays part of the cost of Enbrel',
        'Household income up to 500% of the federal poverty level, adjusted for household size and cost of living',
        'A qualifying autoimmune diagnosis, verified by your provider',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/autoimmune-medicare-access/',
      applyLabel: 'HealthWell AutoImmune fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellAutoimmune, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis or psoriasis program (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Enbrel\'s indications.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'Five charitable funds list Enbrel — four at TotalAssist (rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis and psoriasis) and HealthWell\'s AutoImmune – Medicare Access fund — and on August 26, 2026 all five were closed to new applicants. Good Days has no matching fund. Being listed is not the same as being open, so sign up for alerts at both foundations. For Enbrel specifically, the routes that do not depend on a fund balance are the negotiated Part D price already in effect, Extra Help, and a careful plan comparison at open enrollment.',
  extraHelpNote:
    'On a specialty-tier biologic, Extra Help changes the shape of the year, not just the monthly number. Instead of paying a percentage of a very high price until you reach the $2,100 cap, full Extra Help means about $12.65 for a covered brand-name drug. It stacks with the negotiated price rather than competing with it, and unlike a charity fund it does not run out of money.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Enbrel on Medicare, two of the routes people expect are closed to you, so start where the live ones are:',
      bullets: [
        'Limited income and resources → apply for Medicare Extra Help through Social Security. On a specialty drug this is the strongest single move.',
        'Uninsured, or unsure whether Enbrel is one of Amgen\'s "certain products" for Medicare patients → call Amgen SupportPlus at 1-866-264-2778 and ask about the Amgen Safety Net Foundation and Enbrel by name.',
        'Rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis or psoriasis → sign up for TotalAssist and HealthWell alerts; every fund was closed when we checked.',
        'Anyone on Part D → check what your plan charges for Enbrel now that the negotiated price is in effect, and compare plans in the fall.',
        'Commercial insurance rather than Medicare → the ENBREL Co-Pay Card, which Medicare rules out.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Enbrel appears in TotalAssist\'s medication index and on HealthWell\'s AutoImmune fund page, but a listing does not mean funding is available. On the day we checked, no charity fund was open and the Amgen foundation was — for uninsured patients. Status changes without notice.',
      bullets: [
        'Amgen Safety Net Foundation: the eligibility page carries the current income table and the product-specific screening tool.',
        'TotalAssist: the fund list at totalassist.org/funds shows "Open" or "Closed" for every fund.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program sets its own rules. For Enbrel on August 26, 2026, these are the ones that decide your application:',
      bullets: [
        'Amgen Safety Net Foundation: six months\' U.S. residency; household income at or below $47,880 for one person or $64,920 for two; and the insurance question — the Enbrel form says "no insurance coverage," while the general eligibility page allows some Medicare patients for certain products. Ask about Enbrel specifically.',
        'TotalAssist (when open): government insurance covering Enbrel; income at or below 500% FPL adjusted for local cost of living; a matching diagnosis in treatment.',
        'HealthWell (when open): Medicare that pays part of the cost; income up to 500% FPL; a provider-verified diagnosis.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready before you start any of the applications above:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card.',
        'Household size and annual household income — Amgen may ask you to provide proof.',
        'Your diagnosis and the date of diagnosis; TotalAssist needs the exact date if it was within the past 6 months.',
        'Your Enbrel prescription details and your prescriber\'s name, office phone and fax — the Amgen application needs the prescription sent electronically by your prescriber.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Amgen Safety Net Foundation: you complete and sign the Enbrel patient application and the patient authorization; your prescriber sends the prescription electronically to the pharmacy named on the form. Submit by fax or mail.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone; Patient Advocate Foundation verifies your diagnosis with your provider.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Amgen Safety Net Foundation: you and your provider are notified of the enrollment decision; missing information delays it. Approved patients are enrolled for up to 12 months and contacted to arrange shipment, and must submit a new application to re-enroll.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
        'TotalAssist (when open): you learn immediately whether you are approved; proof of income is due within 30 days.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'Sign up for TotalAssist and HealthWell alerts so you hear when an autoimmune fund reopens — there is no waitlist or queue.',
        'Ask your plan what you now pay for Enbrel under the negotiated price, and whether prior authorization is in the way rather than cost.',
        'Apply for Extra Help even if you think your income is too high; on a specialty-tier drug the difference is large.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments — worth doing when a specialty drug front-loads your spending into January and February.',
        'Compare Part D and Medicare Advantage drug plans in the fall; Amgen SupportPlus will also help you identify local options.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Proof of household income', note: 'Amgen Safety Net Foundation — you may be asked for it after applying' },
    { item: 'Prescriber name, office phone and fax', note: 'Amgen Safety Net Foundation — your prescriber sends the prescription electronically' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your Part D plan what Enbrel costs you now that Medicare\'s negotiated price is in effect — the number people quote is often last year\'s.',
      href: '/medicare-drug-cost-calculator.html',
      label: 'Estimate your drug costs',
    },
    ...standardAlternatives('Enbrel'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Enbrel?',
      answer:
        'Generally yes. Medicare Part D and Medicare Advantage drug plans cover Enbrel, usually on a specialty tier and often with prior authorization or step therapy. Enbrel is also one of the first ten drugs in the Medicare Drug Price Negotiation Program: CMS set a Maximum Fair Price of $2,355.00 for a 30-day supply, in effect since January 1, 2026. That is what your plan pays — your own share still depends on your plan\'s tier and cost-sharing, capped at $2,100 out of pocket in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is Enbrel part of Medicare drug price negotiation?',
      answer:
        'Yes. Enbrel is one of the ten Part D drugs selected in the first negotiation cycle. CMS published a negotiated price of $2,355.00 per 30-day supply for 2026 against a $7,106.00 list price in 2023 — a 67% discount. CMS counted about 48,000 Part D enrollees using Enbrel in 2023. Important nuance: the negotiated price lowers what your plan pays, so whether you feel it depends on how your plan sets your coinsurance.',
    },
    {
      question: 'Can people with Medicare use the Amgen Safety Net Foundation for Enbrel?',
      answer:
        'We could not settle this from Amgen\'s own pages, so we are telling you that rather than guessing. The foundation\'s FAQ describes it as a program for "financially needy uninsured patients" who "must not be eligible for Medicaid, Medicare, or any other financial support options," and the Enbrel application form lists the insurance requirement as "You have no insurance coverage." But the foundation\'s eligibility page also says that "for certain products" a qualifying Medicare patient with an affordability gap may be eligible — without saying whether Enbrel is one of them. Call Amgen SupportPlus at 1-866-264-2778 and ask about Enbrel by name.',
    },
    {
      question: 'Can I use the ENBREL Co-Pay Card with Medicare?',
      answer:
        'No. Amgen\'s terms exclude the co-pay program where the product is paid for in whole or in part by Medicare, Medicaid or any other federal or state healthcare program, and it is not valid for cash-paying patients either. Enbrel.com states the card is for patients with commercial insurance, regardless of income level. Federal anti-kickback rules are the reason — see the key terms lower on this page.',
    },
    {
      question: 'What does Amgen offer Medicare patients, then?',
      answer:
        'Help finding money rather than money. Amgen SupportPlus says its representatives can help you understand your current Medicare plan and the out-of-pocket costs you should expect for Enbrel, identify other local plan options if you want to switch, refer you for Medicare Extra Help if you are eligible, and put you in touch with independent nonprofit foundations. Amgen notes it has no control over those nonprofit programs. Call 1-888-4ENBREL (1-888-436-2735), Monday–Friday 8am–8pm ET.',
    },
    {
      question: 'Is there a charitable grant for Enbrel right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Enbrel under its rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis and psoriasis funds, and HealthWell lists it on the AutoImmune – Medicare Access fund. All five were closed to new applicants. Good Days has no matching fund. Sign up for alerts at both foundations and check back; funds reopen when money arrives.',
    },
    {
      question: 'Is there a generic for Enbrel?',
      answer:
        'There is no etanercept generic on the U.S. market. Because Enbrel is a biologic, the comparable products are biosimilars rather than generics; ask your plan or pharmacist what your formulary covers for etanercept and what tier it sits on before assuming a lower-cost version is available to you. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['humira', 'skyrizi', 'rinvoq', 'repatha'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Enbrel' },
  ],
  sources: [
    label,
    cmsEnbrelMfp,
    SRC.cmsNegotiatedPrices,
    asnfEligibility,
    asnfFaqs,
    asnfEnbrelApp,
    enbrelCost,
    amgenCopayTerms,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.totalAssistFunds,
    totalAssistRa,
    totalAssistPsa,
    totalAssistAs,
    SRC.totalAssistMedIndex,
    SRC.totalAssistNotify,
    healthWellAutoimmune,
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
    title: 'How to Apply for Enbrel Assistance',
    status: 'coming-soon',
    description: 'What Medicare\'s negotiated Enbrel price actually changes for you, why the co-pay card is closed to Medicare, and the question to ask Amgen about its foundation.',
  },
  description_meta:
    'How to find financial assistance for Enbrel (etanercept) on Medicare: the negotiated Part D price of $2,355 for 2026, why the co-pay card excludes Medicare, what the Amgen Safety Net Foundation does and does not cover, autoimmune fund status, and Extra Help — verified August 2026.',
};

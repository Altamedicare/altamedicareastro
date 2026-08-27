// ---------------------------------------------------------------------------
// Dupixent (dupilumab) — Sanofi and Regeneron. Independently researched
// 2026-08-26. Batch 4 — the LAST legacy page to migrate, so this record keeps
// the legacy page's datePublished (2026-06-30) rather than taking today's.
//
// Three findings here were checked rather than inherited, and each contradicts
// something a reasonable person would have assumed:
//
//  1. Sanofi Patient Connection does NOT cover Dupixent. Its own
//     medications-available list names 20 medicines — Admelog, Lantus,
//     Lovenox, Toujeo and so on — and Dupixent is not among them (zero
//     occurrences in the page source). The Dupixent route is the separate
//     DUPIXENT MyWay Patient Assistance Program run for the brand. Our own
//     data/drugs.ts assistance-program directory still says otherwise; that is
//     recorded in the project doc as a defect to fix outside this batch.
//
//  2. HealthWell's AutoImmune – Medicare Access fund does NOT list Dupixent,
//     even though it lists Humira, Enbrel, Skyrizi and Rinvoq. Dupixent's
//     HealthWell listings are the Asthma, COPD and Urticaria funds instead.
//     Exactly the sibling-drug inference spec §11 forbids.
//
//  3. The TotalAssist Eosinophilic Esophagitis fund was OPEN — the first open
//     charitable fund found anywhere in this project. Every other fund
//     matching a Dupixent indication was closed. "Charity funds are closed" had
//     started to look like a rule; it is not one, and the page says so.
//
// Dupixent is also the taxonomy stress test the project was waiting for: nine
// FDA-approved indications spanning skin, airway, gut and blood-vessel
// disease. See the taxonomy note on `conditions` below.
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

const MYWAY_PHONE = '1-844-387-4936';

const label = {
  title: 'Dupixent prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=595f437d-2729-40bb-9c62-c8ece1f82780',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'interleukin-4 receptor alpha antagonist; human IgG4 monoclonal antibody; nine approved indications',
};
const mywaySupport = {
  title: 'DUPIXENT MyWay — patient support program',
  url: 'https://www.dupixent.com/support-savings/dupixent-my-way',
  publisher: 'Sanofi and Regeneron',
  checked: CHECKED,
  supports: 'what MyWay is and is not; enrollment route; Case Manager phone and hours',
};
const mywayCost = {
  title: 'DUPIXENT cost and savings by insurance type (including Medicare)',
  url: 'https://www.dupixent.com/support-savings/copay-card-insurance',
  publisher: 'Sanofi and Regeneron',
  checked: CHECKED,
  supports: 'Patient Assistance Program covers Medicare Part D; copay card excludes government insurance; published list price',
};
const mywayEnroll = {
  title: 'DUPIXENT MyWay Copay Card — eligibility check',
  url: 'https://www.dupixent.com/support-savings/copay-card-insurance-enrollment',
  publisher: 'Sanofi and Regeneron',
  checked: CHECKED,
  supports: 'government-insurance answer disqualifies the card and refers to the Patient Assistance Program',
};
const sanofiMeds = {
  title: 'Sanofi Patient Connection — medications available',
  url: 'https://www.sanofipatientconnection.com/medications-available',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports: 'Dupixent is NOT among the medicines this program supplies',
};
const sanofiCash = {
  title: 'Sanofi Access Direct Savings Program — covered products',
  url: 'https://www.sanofipatientconnection.com/treatment-savings-support',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports: 'Dupixent is not one of the cash-pay products; Medicare users are excluded from the savings card',
};
const totalAssistEoe = {
  title: 'TotalAssist — Eosinophilic esophagitis fund',
  url: 'https://totalassist.org/funds/eosinophilic-esophagitis/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'OPEN; $1,500 guaranteed and $2,000 maximum award; Dupixent listed',
};
const totalAssistAd = {
  title: 'TotalAssist — Atopic dermatitis fund',
  url: 'https://totalassist.org/funds/atopic-dermatitis/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $2,100 guaranteed and $4,200 maximum award; Dupixent Pen and Syringe listed',
};
const totalAssistAsthma = {
  title: 'TotalAssist — Asthma fund',
  url: 'https://totalassist.org/funds/asthma/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $1,200 guaranteed and $3,500 maximum award; Dupixent Pen and Syringe listed',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $1,200 guaranteed and $3,500 maximum award; Dupixent Pen and Syringe listed',
};
const totalAssistCsu = {
  title: 'TotalAssist — Chronic spontaneous urticaria (CSU) fund',
  url: 'https://totalassist.org/funds/chronic-spontaneous-urticaria-csu/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $2,600 guaranteed and $5,200 maximum award; Dupixent Pen and Syringe listed',
};
const healthWellAsthma = {
  title: 'HealthWell Foundation — Asthma fund',
  url: 'https://www.healthwellfoundation.org/fund/asthma/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; 500% FPL; Dupixent Pen and Pfs listed; no award published while closed',
};
const healthWellCopd = {
  title: 'HealthWell Foundation — Chronic Obstructive Pulmonary Disease – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/chronic-obstructive-pulmonary-disease-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; Medicare patients only; 500% FPL; Dupixent Pen and dupilumab listed; forecast average grant $1,500',
};
const healthWellUrticaria = {
  title: 'HealthWell Foundation — Urticaria fund',
  url: 'https://www.healthwellfoundation.org/fund/urticaria/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; 500% FPL; Dupixent listed',
};
const healthWellAutoimmune = {
  title: 'HealthWell Foundation — AutoImmune – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/autoimmune-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'Dupixent is NOT on this fund\'s medication list (checked separately from Humira, Enbrel, Skyrizi and Rinvoq)',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no atopic dermatitis, asthma, COPD, eosinophilic esophagitis or urticaria program',
};

export const DUPIXENT: MedicationAssistanceRecord = {
  slug: 'dupixent',
  brandName: 'Dupixent',
  genericName: 'dupilumab',
  manufacturer: 'Sanofi and Regeneron',
  // TAXONOMY (spec §16 Rule 1, verified against the label 2026-08-26).
  //
  // Dupixent has nine approved indications across four body systems, and this
  // is the record that tests whether two axes are enough. They are — because
  // `conditions` records what the PATIENT has, and the two keys below are the
  // two that actually change which charitable funds match: 'autoimmune' pulls
  // the skin/immune funds (atopic dermatitis, urticaria, eosinophilic
  // esophagitis) and 'respiratory' pulls the airway funds (asthma, COPD).
  // Order matters: 'autoimmune' is first, so the derived browse view leads
  // with Autoimmune & Immune Conditions rather than COPD & Asthma — which is
  // the ordering decision (D7) Dupixent motivated in the first place.
  conditions: ['autoimmune', 'respiratory'],
  // "Dupilumab ... is a human monoclonal antibody of the IgG4 subclass"
  // (label §12.1) — a biologic. Not a JAK inhibitor: Rinvoq is the oral
  // small-molecule in this space, Dupixent is the injected antibody.
  drugClass: ['biologic'],
  description:
    'Dupixent is an injected interleukin-4 receptor alpha antagonist — a biologic — used for nine conditions driven by the same underlying type 2 inflammation, from moderate-to-severe eczema and asthma to COPD with an eosinophilic phenotype. Most adults inject it themselves every two weeks, which places it in the Part D pharmacy benefit rather than the Part B medical benefit.',
  usedFor: [
    'Moderate-to-severe atopic dermatitis (eczema) in adults and children 6 months and older whose disease is not adequately controlled by prescription creams',
    'Moderate-to-severe eosinophilic or oral-corticosteroid-dependent asthma in adults and children 6 years and older, as add-on maintenance treatment',
    'Inadequately controlled chronic rhinosinusitis with nasal polyps (CRSwNP) in adults and children 12 and older, as add-on maintenance treatment',
    'Eosinophilic esophagitis (EoE) in adults and children 1 year and older weighing at least 15 kg',
    'Prurigo nodularis (PN) in adults',
    'Inadequately controlled COPD with an eosinophilic phenotype in adults, as add-on maintenance treatment',
    'Chronic spontaneous urticaria (CSU) in adults and children 2 and older who remain symptomatic on antihistamines',
    'Bullous pemphigoid (BP) in adults',
    'Allergic fungal rhinosinusitis (AFRS) in adults and children 6 and older with a history of sino-nasal surgery',
  ],
  whyCostly:
    'Dupixent is a brand-only biologic with no generic and no biosimilar, and Sanofi and Regeneron publish a list price of $4,193.03 per carton. Part D plans place it on a specialty tier, where you pay a percentage of that price rather than a flat copay, and usually behind prior authorization. Because it treats nine different conditions, the prior-authorization criteria your plan applies depend on which diagnosis it was prescribed for — a detail that decides more Dupixent claims than the price does.',
  medicareContext:
    'Dupixent is self-injected, so for almost everyone it is covered under Medicare Part D or a Medicare Advantage drug plan rather than Part B — usually on a specialty tier and typically with prior authorization tied to your specific diagnosis. Part D out-of-pocket costs are capped at $2,100 in 2026, and the Medicare Prescription Payment Plan can spread that across the year. Dupixent is not one of the drugs with a Medicare-negotiated price: it is absent from CMS\'s selected-drug lists for 2026, 2027 and 2028, so its price is set by the manufacturer and your plan, not by negotiation.',
  quickAnswer: {
    verdict:
      'Yes — and Dupixent is the rare case on this site where a manufacturer program openly invites Medicare Part D beneficiaries and a charitable fund was actually open. The DUPIXENT MyWay Patient Assistance Program names Medicare Part D as a qualifying situation, and TotalAssist\'s eosinophilic esophagitis fund was accepting applications when we checked. The copay card, as always, excludes Medicare.',
    points: [
      'DUPIXENT MyWay Patient Assistance Program: the manufacturers state it "may be able to help" if you have no health insurance, are having difficulty paying, or have Medicare Part D. Eligibility, including household income, is assessed case by case — no income threshold is published — so the only way to know is to call.',
      'One program, two very different things: DUPIXENT MyWay is the free support program open to every patient (insurance help, nurse educators, refill reminders). The Patient Assistance Program is the separate, income-tested part inside it that helps with cost. Enrolling in MyWay does not mean you have applied for assistance.',
      'TotalAssist eosinophilic esophagitis fund: OPEN when we checked on August 26, 2026, with a $1,500 guaranteed and $2,000 maximum award. It lists Dupixent. This is the only open charitable fund we have found for any medication on this site — if EoE is your diagnosis, apply before the money runs out.',
      'The other four TotalAssist funds matching a Dupixent indication — atopic dermatitis, asthma, COPD and chronic spontaneous urticaria — were all closed to new applicants, as were HealthWell\'s asthma, COPD and urticaria funds.',
      'DUPIXENT MyWay Copay Card: commercially insured patients only. The terms state it is "not valid for prescriptions paid, in whole or in part, by Medicaid, Medicare, VA, DOD, TRICARE, or other federal or state programs."',
      'Two things people reasonably assume that are not true: Sanofi Patient Connection does not supply Dupixent (its medicine list does not include it), and HealthWell\'s AutoImmune – Medicare Access fund does not list Dupixent even though it lists other autoimmune biologics.',
    ],
  },
  programs: [
    {
      id: 'dupixent-myway-pap',
      kind: 'manufacturer-pap',
      name: 'DUPIXENT MyWay Patient Assistance Program',
      operator: 'Sanofi and Regeneron',
      status: 'open',
      statusNote:
        'Accepting enquiries on August 26, 2026. The program is described on Dupixent.com for every insurance situation the manufacturers list, including Medicare, and the copay-card eligibility checker refers people who answer "government insurance" straight to it.',
      medicare: 'eligible',
      medicareNote:
        'Medicare Part D beneficiaries are explicitly named. The manufacturers write: "If you do not have health insurance, are experiencing difficulty paying for your DUPIXENT treatment or have Medicare Part D, the DUPIXENT MyWay Patient Assistance Program may be able to help." That is a genuine invitation, not a technicality — but it is not a guarantee, because eligibility is decided case by case.',
      summary:
        'The income-tested part of DUPIXENT MyWay. The manufacturers state that patients must meet eligibility criteria including household income, and that the MyWay team researches each patient\'s situation and determines eligibility individually. Note that this is separate from Sanofi Patient Connection, which is Sanofi\'s general patient assistance program and does not supply Dupixent.',
      covers:
        'The manufacturers do not publish what the program provides or for how long. Ask the Case Manager to put the terms — what you receive, the enrollment period, and how it interacts with your Part D plan — in writing before you enrol.',
      eligibility: [
        'A prescription for Dupixent',
        'One of the situations the manufacturers name: no health insurance, difficulty paying for treatment, or Medicare Part D coverage',
        'Household income within the program\'s criteria. No dollar figure or percentage of the federal poverty level is published for this program — the manufacturers say only that patients "will need to meet the eligibility criteria, including household income." Ask the Case Manager where your household stands rather than assuming a threshold borrowed from another manufacturer\'s program.',
      ],
      requirements: [
        'Your Dupixent prescription details and your prescriber\'s contact information',
        'Your insurance information, including your Medicare Part D or Medicare Advantage plan',
        'Household size and income information — the program assesses it, so have your tax return, Social Security or pension statements, or recent pay stubs to hand',
      ],
      howToApply:
        'Call a DUPIXENT MyWay Case Manager at 1-844-DUPIXENT (1-844-387-4936), option 1, Monday–Friday 8am–9pm ET, and ask specifically about the Patient Assistance Program — not just about enrolling in MyWay. Your prescriber can also start MyWay enrollment for you, which you then sign. There is no fee for either.',
      applyUrl: 'https://www.dupixent.com/support-savings/copay-card-insurance',
      applyLabel: 'Dupixent cost and assistance options',
      phone: MYWAY_PHONE,
      sources: [mywayCost, mywayEnroll, mywaySupport, sanofiMeds],
    },
    {
      id: 'dupixent-myway-support',
      kind: 'manufacturer-direct',
      name: 'DUPIXENT MyWay (patient support program)',
      operator: 'Sanofi and Regeneron',
      status: 'open',
      statusNote: 'Open to every patient prescribed Dupixent, at no cost, on August 26, 2026.',
      medicare: 'eligible',
      medicareNote:
        'No insurance restriction — Medicare beneficiaries can use the support program. It does not lower your copay by itself; the cost help sits in the separate Patient Assistance Program above.',
      summary:
        'The free support wrapper around the medication: help understanding your coverage, a Case Manager who checks which assistance you may be eligible for, supplemental injection training from a nurse educator in person or by phone, refill and injection reminders, and help scheduling specialty-pharmacy deliveries. Listed here because it is the door through which the assistance conversation happens — not because it is financial assistance.',
      covers:
        'Support services only. The manufacturers confirm you do not need to enrol in MyWay to receive your prescription, and that MyWay is free for all patients and caregivers.',
      eligibility: [
        'A prescription for Dupixent — the manufacturers state that if you have been prescribed Dupixent you are eligible to enrol',
        'No income test and no insurance restriction',
      ],
      howToApply:
        'Talk to your doctor about enrolling, or call 1-844-DUPIXENT (1-844-387-4936), option 1, Monday–Friday 8am–9pm ET. After your prescriber submits the request and you sign the form, a Case Manager contacts you within a few days.',
      applyUrl: 'https://www.dupixent.com/support-savings/dupixent-my-way',
      applyLabel: 'About DUPIXENT MyWay',
      phone: MYWAY_PHONE,
      sources: [mywaySupport],
    },
    {
      id: 'myway-copay-card',
      kind: 'manufacturer-savings',
      name: 'DUPIXENT MyWay Copay Card',
      operator: 'Sanofi and Regeneron',
      status: 'open',
      statusNote: 'Open on August 26, 2026 — to commercially insured patients only.',
      medicare: 'excluded',
      medicareNote:
        'Not available with Medicare. The terms state the card is "not valid for prescriptions paid, in whole or in part, by Medicaid, Medicare, VA, DOD, TRICARE, or other federal or state programs, including any state pharmaceutical assistance programs." The online eligibility checker enforces it: answering that you have government-sponsored coverage returns "you are not eligible" and points you to the Patient Assistance Program instead. Federal anti-kickback rules are the reason — see the key terms lower on this page.',
      summary:
        'A commercial copay card, not a patient assistance program. Eligible patients with commercial insurance may pay as little as $0 per fill, subject to a program maximum per patient per calendar year that the manufacturers do not publish as a dollar figure. Approval is not guaranteed, and the manufacturers reserve the right to change the terms at any time.',
      covers:
        'Out-of-pocket copay costs for Dupixent for commercially insured patients, up to an unpublished annual program maximum. It is not insurance.',
      eligibility: [
        'Commercial insurance, including health insurance exchange plans, federal employee plans and state employee plans',
        'A prescription for Dupixent',
        'Not enrolled in Medicare, Medicaid, VA, DoD, TRICARE or any other federal or state program, including state pharmaceutical assistance programs',
      ],
      howToApply:
        'Commercially insured patients enrol online through the eligibility checker or by phone and receive the card by email. If you have Medicare, do not spend time here — the checker will decline you and refer you to the Patient Assistance Program.',
      applyUrl: 'https://www.dupixent.com/support-savings/copay-card-insurance-enrollment',
      applyLabel: 'Copay card eligibility (commercial insurance only)',
      phone: MYWAY_PHONE,
      sources: [mywayEnroll, mywayCost, SRC.oigCoupons],
    },
    {
      id: 'totalassist-eoe',
      kind: 'charitable',
      name: 'TotalAssist — Eosinophilic esophagitis fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Eosinophilic esophagitis (EoE)',
      status: 'open',
      statusNote:
        'OPEN to new applicants on August 26, 2026 — the only open charitable fund found for any Dupixent indication, and the first found anywhere in this project. Funds close without notice when the money is committed, so apply rather than bookmark.',
      medicare: 'eligible',
      medicareNote:
        'Built for people with government insurance. You need Medicare, Medicaid or TRICARE that covers your Dupixent costs — TotalAssist pays what your plan leaves you, so it is a copay grant, not a substitute for coverage.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (which absorbed the PAN Foundation\'s funds on July 1, 2026) lists Dupixent on its eosinophilic esophagitis fund, and that fund was accepting applications when we checked. Applications are decided immediately online.',
      covers:
        'A $1,500 guaranteed award, up to a $2,000 maximum, usable for medication copays, coinsurance and deductibles, health-insurance premiums and other covered out-of-pocket costs. One grant per condition.',
      eligibility: [
        ...TOTALASSIST_ELIGIBILITY,
        'A confirmed eosinophilic esophagitis diagnosis specifically — this fund does not cover Dupixent prescribed for eczema, asthma, COPD or urticaria',
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/funds/eosinophilic-esophagitis/',
      applyLabel: 'TotalAssist eosinophilic esophagitis fund',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistEoe, SRC.totalAssistFunds, SRC.totalAssistEligibility, SRC.totalAssistApply],
    },
    {
      id: 'totalassist-closed',
      kind: 'charitable',
      name: 'TotalAssist — skin and airway funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Atopic dermatitis · Asthma · COPD · Chronic spontaneous urticaria',
      status: 'closed',
      statusNote:
        'All four were closed to new applicants on August 26, 2026. Dupixent is on each fund\'s approved-medication list — being listed is not the same as being open.',
      medicare: 'eligible',
      medicareNote:
        'When open, these funds require government insurance (Medicare, Medicaid or TRICARE) that covers your Dupixent costs.',
      summary:
        'Four more TotalAssist funds match a Dupixent indication, and every one was closed when we checked. TotalAssist has no waitlist and no queue — grants go to whoever applies once a fund reopens — so the notification sign-up is the whole strategy here.',
      covers:
        'When open, the guaranteed award differs by fund: chronic spontaneous urticaria $2,600 (up to $5,200); atopic dermatitis $2,100 (up to $4,200); asthma and COPD $1,200 each (up to $3,500).',
      eligibility: TOTALASSIST_ELIGIBILITY,
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [
        totalAssistAd,
        totalAssistAsthma,
        totalAssistCopd,
        totalAssistCsu,
        SRC.totalAssistFunds,
        SRC.totalAssistNotify,
      ],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — asthma, COPD and urticaria funds',
      operator: 'HealthWell Foundation',
      fund: 'Asthma · Chronic Obstructive Pulmonary Disease – Medicare Access · Urticaria',
      status: 'closed',
      statusNote:
        'All three funds that list Dupixent were closed to new applicants on August 26, 2026. HealthWell describes closures as temporary and says replenished funds reopen as quickly as possible.',
      medicare: 'eligible',
      medicareNote:
        'HealthWell requires insurance that pays part of your Dupixent cost, and Medicare qualifies. The COPD fund is a Medicare Access fund — Medicare patients only — and for premium assistance through the asthma or urticaria funds you need Medicare Part B.',
      summary:
        'HealthWell lists Dupixent Pen and Dupixent Pfs on its Asthma fund, Dupixent Pen and dupilumab on its COPD – Medicare Access fund, and Dupixent on its Urticaria fund. Worth checking separately: Dupixent is NOT on HealthWell\'s AutoImmune – Medicare Access fund, which does list several other autoimmune biologics — so an eczema or prurigo nodularis diagnosis has no HealthWell route here at all.',
      covers:
        'When open, copayments, coinsurance and deductibles for the covered medication, plus insurance premiums (Medicare Part B only). HealthWell does not publish a maximum award while a fund is closed; for the COPD – Medicare Access fund it publishes a forecast average grant utilisation of $1,500.',
      eligibility: [
        'Income up to 500% of the federal poverty level',
        'Insurance that covers part of the cost of your treatment — Medicare qualifies; discount cards do not',
        'A diagnosis matching an open fund, verified by your prescriber\'s signature',
        'Treatment in the United States',
        'For the COPD fund: Medicare, and Medicare Part B for premium assistance',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds and alerts',
      phone: HEALTHWELL_PHONE,
      sources: [
        healthWellAsthma,
        healthWellCopd,
        healthWellUrticaria,
        healthWellAutoimmune,
        SRC.healthWellFunds,
        SRC.healthWellEligibility,
      ],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote:
        'No matching fund on August 26, 2026. Good Days\' diseases-covered list has no program for atopic dermatitis, asthma, COPD, eosinophilic esophagitis, chronic spontaneous urticaria or any other Dupixent indication.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable — with no fund for a Dupixent indication, the question of Medicare eligibility does not arise. Recorded here so you know it was checked rather than skipped.',
      summary:
        'Good Days operates diagnosis-based copay funds and is worth checking for other medications, but it has no program covering any condition Dupixent treats. An honest negative rather than a gap in the research.',
      eligibility: [],
      howToApply:
        'Nothing to apply for here today. If your diagnosis changes or Good Days adds a fund, its diseases-covered page is the place that will say so first.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
    {
      id: 'manufacturer-cash-pay',
      kind: 'manufacturer-direct',
      name: 'Manufacturer self-pay / cash price',
      operator: 'Sanofi and Regeneron',
      status: 'not-found',
      statusNote:
        'No manufacturer cash-pay pathway for Dupixent on August 26, 2026. Sanofi does run a direct cash-pay program — Sanofi Access Direct — but its covered-product list is insulins and older cardiovascular medicines (Admelog, Apidra, Avapro, Lantus, Lovenox, Merilog, Plavix, Priftin, Primaquine, Toujeo). Dupixent is not among them.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable — there is no program to be eligible for. Note that where Sanofi does offer cash-pay pricing, it warns that amounts paid outside insurance do not count toward your deductible or Part D true-out-of-pocket total. The same logic would apply to any cash purchase of Dupixent.',
      summary:
        'The manufacturers publish a list price of $4,193.03 per carton, but a list price is not a cash-pay program, and we will not quote a third-party pharmacy price as though it were an official one. For a Medicare beneficiary the Part D benefit — with the $2,100 annual cap and the Prescription Payment Plan — will almost always beat paying cash.',
      eligibility: [],
      howToApply:
        'Nothing to apply for. If cost is the problem, the Patient Assistance Program above and Extra Help below are the routes that exist for Dupixent.',
      applyUrl: 'https://www.dupixent.com/support-savings/copay-card-insurance',
      applyLabel: 'Dupixent cost information',
      sources: [sanofiCash, mywayCost, sanofiMeds],
    },
  ],
  charitableSummary:
    'Dupixent has more charitable funds listing it than any medication on this site — eight across two foundations — because it treats nine conditions. On August 26, 2026 exactly one was open: TotalAssist\'s eosinophilic esophagitis fund, with a $1,500 guaranteed award. The other seven (TotalAssist atopic dermatitis, asthma, COPD and chronic spontaneous urticaria; HealthWell asthma, COPD – Medicare Access and urticaria) were closed to new applicants, and Good Days has no matching fund at all. Which fund you can use depends on the diagnosis Dupixent was prescribed for, not on the drug — so the first question to answer is which of the nine indications is on your prescription. Note also that HealthWell\'s AutoImmune – Medicare Access fund does not list Dupixent, so an eczema or prurigo nodularis diagnosis has no HealthWell route.',
  extraHelpNote:
    'Extra Help matters more than usual for Dupixent, because the manufacturer program publishes no income threshold and the charitable funds mostly depend on a fund balance. Extra Help depends on neither — and it lowers the cost of every covered drug you take, not just this one.',
  applicationSteps: [
    {
      title: 'Confirm the prescription and — more importantly — the diagnosis',
      body: 'Dupixent is approved for nine conditions, and with Dupixent the diagnosis decides almost everything: which charitable fund you can apply to, and which prior-authorization criteria your Part D plan applies. Before you do anything else, get this in writing from your prescriber:',
      bullets: [
        'Which of the nine indications your Dupixent is prescribed for — eczema, asthma, nasal polyps, eosinophilic esophagitis, prurigo nodularis, COPD, chronic spontaneous urticaria, bullous pemphigoid or allergic fungal rhinosinusitis.',
        'The diagnosis date, and the diagnosis code if the office will give it to you — TotalAssist matches funds by diagnosis code.',
        'Your dose and dosing interval (most adults inject every two weeks), so you know how many fills a year you are budgeting for.',
      ],
    },
    {
      title: 'Determine what insurance you have',
      body: 'This single answer routes you to a completely different program, and getting it wrong wastes weeks:',
      bullets: [
        'Medicare Part D or a Medicare Advantage drug plan → the DUPIXENT MyWay Patient Assistance Program, plus any open charitable fund. The copay card is closed to you by law.',
        'Commercial or employer insurance, including exchange, federal-employee and state-employee plans → the DUPIXENT MyWay Copay Card, which can bring a fill to as little as $0.',
        'No insurance → the Patient Assistance Program, which names uninsured patients first.',
        'Do not try Sanofi Patient Connection for Dupixent. It is Sanofi\'s general assistance program and its medicine list does not include Dupixent — we checked it directly.',
      ],
    },
    {
      title: 'Check your Extra Help status before you call anyone',
      body: 'Extra Help changes what the other programs are worth, so establish where you stand first:',
      bullets: [
        'If you have Medicaid, Supplemental Security Income or a Medicare Savings Program, you already have Extra Help automatically.',
        'Otherwise, check your income and resources against the limits in the Extra Help section below and apply through Social Security — it is free, and it is worth applying even if you think you are slightly over.',
        'With full Extra Help, a covered brand-name drug like Dupixent costs no more than about $12.65 a fill in 2026 — which is often better than any program on this page can do.',
      ],
    },
    {
      title: 'Identify your pathway — and apply to the open one first',
      body: 'On August 26, 2026 the picture for a Medicare beneficiary looked like this:',
      bullets: [
        'Eosinophilic esophagitis → the TotalAssist EoE fund was OPEN. Apply now; open funds close without notice when the money is committed.',
        'Any Dupixent indication → the DUPIXENT MyWay Patient Assistance Program. Call and ask about it by name.',
        'Eczema, asthma, COPD or chronic spontaneous urticaria → sign up for TotalAssist and HealthWell alerts; every fund for those was closed.',
        'Eczema or prurigo nodularis → note that HealthWell has no route at all for you; its AutoImmune fund does not list Dupixent.',
      ],
    },
    {
      title: 'Gather your documentation',
      body: 'The Patient Assistance Program assesses your situation individually, so the more you have ready on the first call, the fewer callbacks you will field:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage plan card — plan name, member ID and group number.',
        'Household size and annual household income, with proof: your most recent federal tax return, Social Security or pension statements, or recent pay stubs.',
        'Your Dupixent prescription details and your prescriber\'s name, office phone and address.',
        'Your diagnosis and its date — TotalAssist needs the exact date if you were diagnosed within the past six months.',
        'What you are currently paying out of pocket per fill, which is what a charitable grant would be applied against.',
      ],
    },
    {
      title: 'Apply, then confirm approval, delivery and renewal',
      body: 'Who does what — and what to nail down once an answer comes back. Dupixent normally arrives through a specialty pharmacy, which adds a step most drugs do not have:',
      bullets: [
        'DUPIXENT MyWay Patient Assistance Program: call 1-844-DUPIXENT (1-844-387-4936), option 1, Monday–Friday 8am–9pm ET, and ask for the Patient Assistance Program specifically. Enrolling in MyWay support is not the same as applying for assistance — say which one you want.',
        'TotalAssist (EoE fund, or any fund that reopens): you apply online in about 15 minutes and learn immediately whether you are approved; proof of income is due within 30 days.',
        'HealthWell (when a fund reopens): apply online or by phone at (800) 675-8416; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply through Social Security online, by phone at 1-800-772-1213, or in person. It is always free.',
        'Once approved, ask a MyWay Case Manager which specialty pharmacy will deliver your Dupixent and save their number — missed calls are the most common reason a first fill is late.',
        'Get the terms in writing: what the approval covers, what period it runs for, and what renewing requires. A TotalAssist grant must be renewed, and a closed fund at renewal time is a real risk — set a reminder a month before it ends.',
        'If your insurance changes mid-treatment, call MyWay; the manufacturers state the program will explore other options if you lose or change coverage.',
      ],
    },
    {
      title: 'If the fund is closed or you don\'t qualify',
      body: 'Seven of the eight charitable funds listing Dupixent were closed when we checked, so this step is the likely one rather than the exception. Do not stop at "closed" or "denied":',
      bullets: [
        'Sign up for TotalAssist and HealthWell alerts so you hear when an eczema, asthma, COPD or urticaria fund reopens — there is no waitlist and no queue, so speed decides it.',
        'Call the DUPIXENT MyWay Patient Assistance Program even if a fund said no. It is assessed case by case, it publishes no income cut-off, and it names Medicare Part D explicitly — a closed charity fund tells you nothing about it.',
        'If your Part D plan denied Dupixent, ask your prescriber to request a formulary exception. With nine indications, denials often turn on which diagnosis was coded rather than on the drug.',
        'Apply for Extra Help if you have not — it does not depend on a fund balance and it lowers every covered drug you take.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments (it does not lower the total).',
        'Re-check fund status quarterly. Everything on this page was true on August 26, 2026, and fund balances move faster than that.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'Which of the nine approved indications your Dupixent is prescribed for',
      note: 'decides which charitable fund you can apply to and which prior-authorization criteria your plan uses',
    },
    { item: 'Household size and income documentation', note: 'DUPIXENT MyWay Patient Assistance Program — assessed case by case' },
    { item: 'Your current out-of-pocket cost per fill', note: 'TotalAssist and HealthWell apply grants against this' },
    { item: 'Specialty pharmacy name and contact details', note: 'once your prescription is routed — needed for delivery scheduling' },
  ],
  ifUnavailable: [
    {
      text: 'If your diagnosis is eosinophilic esophagitis, apply to the TotalAssist EoE fund today rather than waiting — it was open when we checked, and open funds close without notice.',
      href: 'https://totalassist.org/funds/eosinophilic-esophagitis/',
      label: 'TotalAssist EoE fund',
    },
    {
      text: 'Ask your prescriber whether a formulary exception is worth filing. With nine indications, Part D denials for Dupixent often turn on which diagnosis was coded rather than on the drug itself — a correctable problem.',
    },
    ...standardAlternatives('Dupixent'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Dupixent?',
      answer:
        'Generally yes, under Part D or a Medicare Advantage drug plan rather than Part B, because you inject it yourself at home. Expect a specialty tier and prior authorization tied to your specific diagnosis. Part D out-of-pocket costs are capped at $2,100 in 2026, and you can spread them across the year with the Medicare Prescription Payment Plan. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Dupixent patient assistance program for people on Medicare?',
      answer:
        'Yes, and Medicare is named explicitly, which is unusual. The manufacturers write that "if you do not have health insurance, are experiencing difficulty paying for your DUPIXENT treatment or have Medicare Part D, the DUPIXENT MyWay Patient Assistance Program may be able to help." Eligibility including household income is decided case by case and no income threshold is published, so the only way to find out is to call 1-844-DUPIXENT (1-844-387-4936), option 1, Monday–Friday 8am–9pm ET, and ask about the Patient Assistance Program by name.',
    },
    {
      question: 'What is the difference between DUPIXENT MyWay and the DUPIXENT MyWay Patient Assistance Program?',
      answer:
        'MyWay is the free support program available to every patient prescribed Dupixent — insurance guidance, a Case Manager, nurse-educator injection training, refill reminders and delivery scheduling. The Patient Assistance Program is a separate, income-tested program inside it that helps with the cost of the medication. Enrolling in MyWay does not enrol you in the Patient Assistance Program, so ask for it by name.',
    },
    {
      question: 'Can I use the DUPIXENT MyWay Copay Card with Medicare?',
      answer:
        'No. The terms state the card is "not valid for prescriptions paid, in whole or in part, by Medicaid, Medicare, VA, DOD, TRICARE, or other federal or state programs, including any state pharmaceutical assistance programs." The manufacturers\' own eligibility checker enforces this: answer that you have government insurance and it declines you and refers you to the Patient Assistance Program. Federal anti-kickback rules are the reason, and they apply to every manufacturer copay card, not just this one.',
    },
    {
      question: 'Is there a charitable grant for Dupixent right now?',
      answer:
        'One, when we checked on August 26, 2026: TotalAssist\'s eosinophilic esophagitis fund was open, with a $1,500 guaranteed and $2,000 maximum award, and it lists Dupixent. Every other fund matching a Dupixent indication was closed — TotalAssist\'s atopic dermatitis, asthma, COPD and chronic spontaneous urticaria funds, and HealthWell\'s asthma, COPD – Medicare Access and urticaria funds. Good Days has no matching fund. Which one applies to you depends on your diagnosis, not on the drug.',
    },
    {
      question: 'Does Sanofi Patient Connection provide Dupixent free?',
      answer:
        'No, and this is worth stating plainly because it is easy to assume otherwise. Sanofi Patient Connection is Sanofi\'s patient assistance program and it does supply a number of Sanofi medicines free to patients at or below 400% of the federal poverty level — but Dupixent is not on its medications-available list, which we read directly. For Dupixent the route is the DUPIXENT MyWay Patient Assistance Program instead.',
    },
    {
      question: 'Is Dupixent part of Medicare drug price negotiation?',
      answer:
        'No. Dupixent does not appear on CMS\'s selected-drug lists for 2026, 2027 or 2028. The 15 drugs selected for 2028 are Trulicity, Biktarvy, Orencia, Cosentyx, Erleada, Kisqali, Entyvio, Verzenio, Botox, Lenvima, Xolair, Rexulti, Xeljanz, Anoro Ellipta and Cimzia. Your Dupixent cost is therefore set by the manufacturers\' price and your plan\'s tier and cost-sharing, which is why the $2,100 Part D cap and Extra Help matter more here.',
    },
    {
      question: 'Is there a generic or biosimilar for Dupixent?',
      answer:
        'No. Dupilumab is a brand-only biologic with no generic and no biosimilar marketed in the United States, and the manufacturers publish a list price of $4,193.03 per carton. If cost is the problem, the routes on this page — the Patient Assistance Program, an open charitable fund matching your diagnosis, Extra Help, a formulary exception and a plan comparison in the fall — are where the movement is. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['skyrizi', 'rinvoq', 'humira', 'breztri'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: 'Does not depend on a fund balance — and lowers every covered drug' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Dupixent' },
  ],
  sources: [
    label,
    mywaySupport,
    mywayCost,
    mywayEnroll,
    sanofiMeds,
    sanofiCash,
    SRC.cmsNegotiatedPrices,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.totalAssistFunds,
    totalAssistEoe,
    totalAssistAd,
    totalAssistAsthma,
    totalAssistCopd,
    totalAssistCsu,
    SRC.totalAssistEligibility,
    SRC.totalAssistApply,
    SRC.totalAssistNotify,
    healthWellAsthma,
    healthWellCopd,
    healthWellUrticaria,
    healthWellAutoimmune,
    SRC.healthWellFunds,
    SRC.healthWellEligibility,
    goodDays,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup, 2026-08-26). Deliberately a
  // literal, not the shared CHECKED constant: re-verifying one medication
  // must move one date, not all sixteen. Bump this when you re-read this
  // record's sources; `checked` on each source records the research window.
  lastVerified: '2026-08-26',
  // Migrated from the legacy generic page, which published 2026-06-30.
  datePublished: '2026-06-30',
  video: {
    title: 'How to Apply for Dupixent Assistance',
    status: 'coming-soon',
    description:
      'A walkthrough of the DUPIXENT MyWay Patient Assistance Program call, why the diagnosis on your prescription decides which charitable fund you can use, and how to tell MyWay support apart from MyWay assistance.',
  },
  description_meta:
    'How to find financial assistance for Dupixent (dupilumab) on Medicare: the DUPIXENT MyWay Patient Assistance Program that accepts Medicare Part D, which charitable fund matches your diagnosis, why the copay card excludes Medicare, and Extra Help — verified August 2026.',
};

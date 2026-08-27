// ---------------------------------------------------------------------------
// Humira (adalimumab) — AbbVie. Independently researched 2026-08-26. Every
// program below was read on the official source cited with it. Batch 3
// (spec §24 #12) — a NEW page.
//
// THE FINDING THAT DEFINES THIS PAGE: AbbVie has closed myAbbVie Assist to new
// HUMIRA patients. The official program update reads, verbatim: "Effective
// July 1, 2026, myAbbVie Assist PAP will no longer accept new patients for
// HUMIRA into the program." This is exactly the trap the project's evidence
// rule exists to catch — AbbVie HAS a patient assistance program, and Skyrizi
// and Rinvoq are still in it, so "AbbVie has a PAP" would have produced a
// wrong page. The drug-specific source is what settles it.
//
// RESEARCH NOTE (access): www.abbvie.com serves a Cloudflare block page; the
// apex host abbvie.com serves the same pages. Every AbbVie fact here was read
// on the official page or on AbbVie's own application PDFs under
// abbvie.com/content/dam/, not on a search summary.
//
// A live trap for readers: AbbVie's "online application overview" page still
// links a HUMIRA application PDF (H-APP1-24L-1, December 2024). A downloadable
// form is not an open program — the program update governs.
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
  title: 'Humira prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=608d4f0d-b19f-46d3-749a-7159aa5f933d',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'TNF blocker; nine approved indications; subcutaneous dosing',
};
const abbvieHumiraUpdate = {
  title: 'Important Program Updates to myAbbVie Assist Patient Assistance program (PAP) for HUMIRA',
  url: 'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs/humira-program-update.html',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: 'July 1, 2026 close to new HUMIRA patients; current enrollees through end of term; no renewal; biosimilar guidance',
};
const abbviePrograms = {
  title: 'AbbVie Patient Assistance — available programs (myAbbVie Assist medicine list)',
  url: 'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: 'HUMIRA absent from the available-medicines list; RINVOQ and SKYRIZI present; Medicare accepted by the program',
};
const abbvieOnlineOverview = {
  title: 'AbbVie Patient Access Support — application overview',
  url: 'https://www.abbvie.com/patients/patient-support/patient-assistance/online-application-overview.html',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: 'program phone and hours; still links a December 2024 HUMIRA application form',
};
const humiraCost = {
  title: 'Ways to Save on HUMIRA — HUMIRA Complete',
  url: 'https://www.humira.com/humira-complete/cost-and-copay',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: 'savings card terms and government-insurance exclusion; $14,000 annual maximum; no patient-assistance route listed',
};
const totalAssistRa = {
  title: 'TotalAssist — Rheumatoid arthritis (RA) fund',
  url: 'https://totalassist.org/funds/rheumatoid-arthritis-ra/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $4,000 award; Humira listed',
};
const totalAssistIbd = {
  title: 'TotalAssist — Inflammatory bowel disease (IBD) fund',
  url: 'https://totalassist.org/funds/inflammatory-bowel-disease-ibd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $10,400 award; Humira listed',
};
const totalAssistPso = {
  title: 'TotalAssist — Psoriasis fund',
  url: 'https://totalassist.org/funds/psoriasis/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $2,500 award; Humira listed',
};
const healthWellAutoimmune = {
  title: 'HealthWell Foundation — AutoImmune – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/autoimmune-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $2,800 maximum; 500% FPL; Humira Pen and Pfs listed',
};
const healthWellIbd = {
  title: 'HealthWell Foundation — Inflammatory Bowel Disease – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/inflammatory-bowel-disease-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $2,100 maximum; 500% FPL; Humira Pen and Pfs listed',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no rheumatoid arthritis, psoriasis or IBD program; Chronic Noninfectious Uveitis fund marked closed',
};

export const HUMIRA: MedicationAssistanceRecord = {
  slug: 'humira',
  brandName: 'Humira',
  genericName: 'adalimumab',
  manufacturer: 'AbbVie',
  conditions: ['autoimmune'],
  // "HUMIRA is a tumor necrosis factor (TNF) blocker" (label) — a biologic.
  drugClass: ['biologic'],
  description:
    'Humira is an injected TNF blocker used for a long list of immune-driven conditions, from rheumatoid arthritis and psoriasis to Crohn\'s disease and ulcerative colitis. It has been on the U.S. market since 2002, and since 2023 a growing set of FDA-approved adalimumab biosimilars has been available alongside it — which is the single most important fact for anyone facing a Humira bill in 2026.',
  usedFor: [
    'Moderately to severely active rheumatoid arthritis in adults, and polyarticular juvenile idiopathic arthritis in patients 2 and older',
    'Active psoriatic arthritis and active ankylosing spondylitis in adults',
    'Moderately to severely active Crohn\'s disease (adults and patients 6 and older) and ulcerative colitis (adults and patients 5 and older)',
    'Moderate to severe chronic plaque psoriasis in adults who are candidates for systemic therapy or phototherapy',
    'Moderate to severe hidradenitis suppurativa in patients 12 and older',
    'Non-infectious intermediate, posterior and panuveitis in adults and patients 2 and older',
  ],
  whyCostly:
    'Humira sits on the specialty tier of most Part D formularies, where you pay a percentage of a very high price rather than a flat copay. Nothing about that has changed — but the market around it has: AbbVie itself now points patients toward FDA-approved adalimumab biosimilars, and has begun withdrawing brand Humira from its own patient assistance program because of them.',
  medicareContext:
    'Humira is generally covered under Medicare Part D and Medicare Advantage drug plans, usually on a specialty tier and often with prior authorization or step therapy. Part D out-of-pocket costs are capped at $2,100 in 2026, and the Medicare Prescription Payment Plan lets you spread that cap across monthly payments — for a specialty drug like this, that matters, because the cap is often reached in the first months of the year. Humira is not on the Medicare-negotiated drug lists for 2026 or 2027. Ask your plan how it covers adalimumab biosimilars: for many plans in 2026 a biosimilar sits on a lower tier than brand Humira.',
  quickAnswer: {
    verdict:
      'The manufacturer route has closed. AbbVie stopped accepting new HUMIRA patients into myAbbVie Assist on July 1, 2026 and is phasing the brand out of the program, pointing patients to adalimumab biosimilars instead. The savings card excludes Medicare. Every autoimmune and bowel-disease charity fund we checked was closed to new applicants. What is left for a Medicare beneficiary: a biosimilar conversation with your prescriber, Extra Help, and fund alerts.',
    points: [
      'myAbbVie Assist: closed to new Humira patients. AbbVie\'s program update says, in its own words, "Effective July 1, 2026, myAbbVie Assist PAP will no longer accept new patients for HUMIRA into the program." Patients already enrolled are supported through the end of their current eligibility term and cannot renew after that.',
      'AbbVie still runs myAbbVie Assist for other medicines — Skyrizi and Rinvoq among them. The program did not close; Humira left it.',
      'A trap to know about: AbbVie\'s application-overview page still offers a HUMIRA application form dated December 2024. A downloadable form is not an open program.',
      'HUMIRA Complete Savings Card: commercially insured patients only. AbbVie\'s terms exclude Medicare including Part D, Medicare Advantage, Medigap, Medicaid, TRICARE, DoD and VA.',
      'Charitable grants: TotalAssist lists Humira under its rheumatoid arthritis, psoriasis, psoriatic arthritis, ankylosing spondylitis, ulcerative colitis, IBD and uveitis funds, and HealthWell lists it on its AutoImmune and Inflammatory Bowel Disease Medicare Access funds. Every one of them was closed to new applicants when we checked.',
      'AbbVie\'s own advice is worth taking seriously: "If you are doing well on HUMIRA, an adalimumab biosimilar may be an option," and many biosimilars run their own assistance programs. That conversation belongs with your prescriber.',
    ],
  },
  programs: [
    {
      id: 'myabbvie-assist',
      kind: 'manufacturer-pap',
      name: 'myAbbVie Assist — closed to new Humira patients',
      operator: 'AbbVie Patient Access Support',
      status: 'closed',
      statusNote:
        'Closed to new Humira applicants since July 1, 2026, and being phased out for the brand entirely. AbbVie: "Effective July 1, 2026, myAbbVie Assist PAP will no longer accept new patients for HUMIRA into the program." Read on AbbVie\'s program-update page on August 26, 2026.',
      medicare: 'excluded',
      medicareNote:
        'Not a question of Medicare. The program still accepts Medicare beneficiaries for the medicines it covers — its own description reads "If you are uninsured, receiving coverage through Medicare, or your health insurance isn\'t enough to cover the cost of my medicine, you may be eligible to receive free medicine." Humira is simply no longer one of those medicines for a new applicant.',
      summary:
        'AbbVie\'s patient assistance program provides free medicine to qualifying patients, and it is still running — Humira has been removed from it. AbbVie says it decided to phase Humira out "after carefully reviewing the growing number of treatment options available to patients today, including FDA-approved adalimumab biosimilars that may be available through insurance or other support programs." Patients enrolled before the cut-off keep their medicine through the end of their current eligibility term but cannot renew.',
      covers: 'For patients enrolled before July 1, 2026: Humira at no cost through the end of the current eligibility term only.',
      eligibility: [
        'Enrolled in myAbbVie Assist for Humira before July 1, 2026 — new applications for Humira are not accepted',
        'AbbVie\'s advice to enrolled patients: talk to your prescriber now about next steps, because changing treatment takes time',
      ],
      requirements: [
        'If you are already enrolled: nothing new. Call the program before your term ends so a gap does not catch you by surprise.',
        'If you are not enrolled: ask your prescriber about an adalimumab biosimilar and whether that product has its own assistance program.',
      ],
      howToApply:
        'You cannot apply for Humira. Call AbbVie Patient Access Support at 1-800-222-6885, Monday–Friday 7am–7pm Central, to confirm where your own enrollment stands or to ask which AbbVie medicines are still in the program.',
      applyUrl: 'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs/humira-program-update.html',
      applyLabel: 'Read AbbVie\'s Humira program update',
      phone: '1-800-222-6885',
      sources: [abbvieHumiraUpdate, abbviePrograms, abbvieOnlineOverview],
    },
    {
      id: 'savings-card',
      kind: 'manufacturer-savings',
      name: 'HUMIRA Complete Savings Card',
      operator: 'AbbVie',
      status: 'limited',
      statusNote: 'Running for commercially insured patients on August 26, 2026, and closed to anyone with government drug coverage.',
      medicare: 'excluded',
      medicareNote:
        'AbbVie\'s terms say the co-pay assistance program "is not available to patients receiving reimbursement under any federal, state, or government-funded insurance programs (for example, Medicare [including Part D], Medicare Advantage, Medigap, Medicaid, TRICARE, Department of Defense, or Veterans Affairs programs)." If you start such coverage, AbbVie asks you to call 1-800-4HUMIRA to stop participation.',
      summary:
        'A commercial copay card, listed here so you can see why it does not apply to you. AbbVie also offers a Complete Rebate for commercially insured patients whose pharmacy cannot process the card — same exclusion.',
      covers: 'For commercially insured patients: a maximum annual benefit of $14,000 per calendar year, subject to AbbVie\'s terms.',
      eligibility: [
        'Commercial insurance coverage for Humira',
        'Not receiving reimbursement under Medicare, Medicare Advantage, Medigap, Medicaid, TRICARE, DoD or VA programs',
      ],
      howToApply: 'Not applicable if you have Medicare. Commercially insured patients request a card through HUMIRA Complete.',
      applyUrl: 'https://www.humira.com/humira-complete/cost-and-copay',
      applyLabel: 'HUMIRA Complete — cost and copay',
      sources: [humiraCost, SRC.oigCoupons],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — autoimmune and bowel-disease funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Rheumatoid arthritis · Psoriasis · Psoriatic arthritis · Ankylosing spondylitis · Ulcerative colitis · IBD · Uveitis',
      status: 'closed',
      statusNote:
        'Every TotalAssist fund matching a Humira indication was closed to new applicants on August 26, 2026 — rheumatoid arthritis, psoriasis, psoriatic arthritis, ankylosing spondylitis, ulcerative colitis, inflammatory bowel disease and uveitis. Humira is on each of those funds\' approved-medication lists.',
      medicare: 'eligible',
      medicareNote: 'When open, these funds require government insurance (Medicare, Medicaid or TRICARE) that covers your Humira costs.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (which absorbed the PAN Foundation\'s funds on July 1, 2026) lists Humira under seven funds covering its indications. A listing is not an open fund. Sign up to be notified the moment one reopens; TotalAssist has no waitlist or queue.',
      covers:
        'When open, the guaranteed award differs by fund: inflammatory bowel disease $10,400; ankylosing spondylitis $4,400; rheumatoid arthritis $4,000; psoriatic arthritis $3,500; ulcerative colitis $3,000; psoriasis $2,500; uveitis $1,400. One grant per condition.',
      eligibility: TOTALASSIST_ELIGIBILITY,
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [SRC.totalAssistFunds, totalAssistRa, totalAssistIbd, totalAssistPso, SRC.totalAssistMedIndex, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — AutoImmune and IBD Medicare Access funds',
      operator: 'HealthWell Foundation',
      fund: 'AutoImmune – Medicare Access · Inflammatory Bowel Disease – Medicare Access',
      status: 'closed',
      statusNote:
        'Both funds were "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Humira Pen and Humira Pfs are on both funds\' covered-treatments lists, as is adalimumab.',
      medicare: 'eligible',
      medicareNote: 'Both are Medicare Access funds — for Medicare patients only. HealthWell requires insurance that pays part of the cost of the drug; a discount card does not count.',
      summary:
        'HealthWell lists Humira on its AutoImmune and Inflammatory Bowel Disease Medicare Access funds. HealthWell states that closed funds reopen as funding is replenished, and offers real-time alerts for each fund.',
      covers: 'When open: AutoImmune – Medicare Access up to $2,800; Inflammatory Bowel Disease – Medicare Access up to $2,100. Both pay as a pharmacy card, with household income up to 500% of the federal poverty level.',
      eligibility: [
        'Medicare coverage that pays part of the cost of Humira',
        'Household income up to 500% of the federal poverty level, adjusted for household size and cost of living',
        'A qualifying autoimmune or inflammatory bowel disease diagnosis, verified by your provider',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/autoimmune-medicare-access/',
      applyLabel: 'HealthWell AutoImmune fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellAutoimmune, healthWellIbd, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote:
        'Good Days lists no rheumatoid arthritis, psoriasis, psoriatic arthritis, Crohn\'s disease or ulcerative colitis program. Its one fund touching a Humira indication — Chronic Noninfectious Uveitis — was marked closed to new enrollments (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no open matching program.',
      summary:
        'An honest negative with one qualifier: Good Days covers almost none of Humira\'s indications, and the single overlapping fund (chronic non-infectious uveitis) was not accepting new enrollments.',
      eligibility: [],
      howToApply: 'Not applicable. If you are treated for non-infectious uveitis, it is worth re-checking the Good Days list later — fund status changes through the year.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'Nine charitable funds list Humira across its indications — seven at TotalAssist (rheumatoid arthritis, psoriasis, psoriatic arthritis, ankylosing spondylitis, ulcerative colitis, inflammatory bowel disease and uveitis) and two at HealthWell (AutoImmune and Inflammatory Bowel Disease Medicare Access). On August 26, 2026 every single one was closed to new applicants. Good Days covers almost none of Humira\'s indications and its uveitis fund was closed too. Being listed is not the same as being open — sign up for alerts at both foundations so you hear when one reopens. With the manufacturer program now closed to new Humira patients as well, the routes that do not depend on a fund balance are Extra Help and a biosimilar conversation with your prescriber.',
  extraHelpNote:
    'For Humira, Extra Help matters more than usual. A specialty-tier drug can push you to the $2,100 Part D cap within the first months of the year; full Extra Help replaces that percentage coinsurance with a copay of about $12.65 for a covered brand-name drug. It also does not depend on a fund balance or a manufacturer\'s decision, which is exactly what has just changed for Humira.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'Humira is the case where the usual order does not apply, because the manufacturer route is gone for new patients. Start here instead:',
      bullets: [
        'Already enrolled in myAbbVie Assist for Humira → call 1-800-222-6885 and find out exactly when your current eligibility term ends, before it does.',
        'Not enrolled → ask your prescriber about an FDA-approved adalimumab biosimilar, and whether that product has its own patient assistance program. This is AbbVie\'s own recommendation.',
        'Limited income and resources → apply for Medicare Extra Help through Social Security. It does not depend on any fund or manufacturer.',
        'A diagnosis matching one of the funds → sign up for TotalAssist and HealthWell alerts; all of them were closed when we checked.',
        'Commercial insurance rather than Medicare → the HUMIRA Complete Savings Card, which Medicare rules out.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Humira appears in TotalAssist\'s medication index and on both HealthWell fund pages, and a HUMIRA application form is still downloadable from AbbVie\'s site. None of that means a program is accepting you. Check the status itself:',
      bullets: [
        'AbbVie: the Humira program update page states the July 1, 2026 close to new patients. The available-programs page lists the medicines still in myAbbVie Assist — Humira is not among them.',
        'TotalAssist: the fund list at totalassist.org/funds shows "Open" or "Closed" for every fund.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'For Humira on August 26, 2026 the eligibility questions that still have live answers are these:',
      bullets: [
        'myAbbVie Assist: only whether you were already enrolled before July 1, 2026. There is no income test to pass, because there is no new enrollment to pass it for.',
        'TotalAssist (when open): government insurance covering Humira; income at or below 500% FPL adjusted for local cost of living; a matching diagnosis in treatment.',
        'HealthWell (when open): Medicare that pays part of the cost; income up to 500% FPL; a provider-verified diagnosis.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
        'A biosimilar\'s own program: each manufacturer sets its own rules — ask which biosimilar your plan prefers before you research programs, so you research the right one.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, the same paperwork does most of the work:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card.',
        'Your diagnosis and the date of diagnosis — TotalAssist needs the exact date if it was within the past 6 months.',
        'Household size and annual household income, with proof.',
        'Your current Humira prescription and your prescriber\'s name, office phone and fax — a biosimilar switch needs a new prescription.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Biosimilar assistance program: the process mirrors this one — a patient section, a prescriber section, and proof of income. Get the program name from the manufacturer of the specific biosimilar your plan covers.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone; Patient Advocate Foundation verifies your diagnosis with your provider.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
        'TotalAssist (when open): you learn immediately whether you are approved; proof of income is due within 30 days.',
        'A biosimilar switch: allow time. AbbVie itself warns that changing treatment can take a while, and a new prior authorization may be needed.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'For Humira this is the most likely outcome right now, so plan for it:',
      bullets: [
        'Ask your prescriber directly: "Which adalimumab biosimilar does my plan prefer, and would it work for me?" That single question does more for a Humira bill in 2026 than any application.',
        'Sign up for TotalAssist and HealthWell alerts so you hear when an autoimmune or IBD fund reopens — there is no waitlist or queue.',
        'Apply for Extra Help even if you think your income is too high; its limits surprise people, and it is the one route that does not depend on a fund balance.',
        'Ask your plan about a formulary exception if brand Humira is genuinely the medicine you need.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments — useful when a specialty drug front-loads your spending.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your myAbbVie Assist enrollment details, if you have them', note: 'to find out when your current eligibility term ends' },
    { item: 'The name of the adalimumab biosimilar your plan covers', note: 'ask your plan or pharmacist — it decides which assistance program to research' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber about an FDA-approved adalimumab biosimilar and whether that product runs its own assistance program — this is AbbVie\'s own stated recommendation for Humira patients.',
      href: '/medicare-formulary-lookup.html',
      label: 'Check how your plan covers it',
    },
    ...standardAlternatives('Humira'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Humira?',
      answer:
        'Generally yes. Medicare Part D and Medicare Advantage drug plans cover Humira, usually on a specialty tier and often with prior authorization or step therapy. Because specialty tiers charge a percentage rather than a flat copay, many people reach the $2,100 Part D out-of-pocket cap early in the year. Ask your plan how it covers adalimumab biosimilars too — on many 2026 plans a biosimilar sits on a lower tier than brand Humira. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Can I still get Humira through AbbVie\'s patient assistance program?',
      answer:
        'Not as a new patient. AbbVie\'s official program update states: "Effective July 1, 2026, myAbbVie Assist PAP will no longer accept new patients for HUMIRA into the program." AbbVie says it will continue to support currently enrolled patients through the end of their current eligibility term, and that when that term ends those patients will not be able to renew for Humira. The program itself is still running for other AbbVie medicines, including Skyrizi and Rinvoq.',
    },
    {
      question: 'AbbVie\'s website still has a Humira patient assistance application. Can I send it in?',
      answer:
        'A form being downloadable is not the same as a program being open. AbbVie\'s application-overview page still links a HUMIRA application dated December 2024, while the program update page says new HUMIRA patients are not accepted as of July 1, 2026. Before spending time on paperwork, call AbbVie Patient Access Support at 1-800-222-6885, Monday–Friday 7am–7pm Central, and ask directly.',
    },
    {
      question: 'Why did AbbVie remove Humira from its assistance program?',
      answer:
        'AbbVie gives its reason on the program update page: "After carefully reviewing the growing number of treatment options available to patients today, including FDA-approved adalimumab biosimilars that may be available through insurance or other support programs, we have decided to begin phasing out HUMIRA from the myAbbVie Assist Patient Assistance Program." AbbVie adds that if you are doing well on Humira, a biosimilar may be an option, and that many biosimilars have their own patient assistance programs.',
    },
    {
      question: 'Can I use the HUMIRA Complete Savings Card with Medicare?',
      answer:
        'No. AbbVie\'s terms state the copay assistance program is not available to patients receiving reimbursement under any federal, state or government-funded insurance program, and name Medicare including Part D, Medicare Advantage, Medigap, Medicaid, TRICARE, DoD and VA. Federal anti-kickback rules are the reason — see the key terms lower on this page.',
    },
    {
      question: 'Is there a charitable grant for Humira right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Humira under seven funds — rheumatoid arthritis, psoriasis, psoriatic arthritis, ankylosing spondylitis, ulcerative colitis, inflammatory bowel disease and uveitis — and HealthWell lists it on its AutoImmune and Inflammatory Bowel Disease Medicare Access funds. All nine were closed to new applicants. Sign up for alerts at both foundations and check back; funds reopen when money arrives.',
    },
    {
      question: 'Is there a generic for Humira?',
      answer:
        'There is no generic, but there are FDA-approved adalimumab biosimilars — highly similar versions from other manufacturers, several of which are marketed in the United States. AbbVie now points Humira patients toward them directly. Ask your plan or pharmacist which adalimumab biosimilar your formulary prefers and what tier it sits on, then ask your prescriber whether switching is right for you. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['enbrel', 'skyrizi', 'rinvoq', 'dupixent'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/medicare-formulary-lookup.html', label: 'Check Typical Part D Coverage', blurb: 'See how plans tier Humira and its biosimilars' },
  ],
  sources: [
    label,
    abbvieHumiraUpdate,
    abbviePrograms,
    abbvieOnlineOverview,
    humiraCost,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.totalAssistFunds,
    totalAssistRa,
    totalAssistIbd,
    totalAssistPso,
    SRC.totalAssistMedIndex,
    SRC.totalAssistNotify,
    healthWellAutoimmune,
    healthWellIbd,
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
    title: 'How to Apply for Humira Assistance',
    status: 'coming-soon',
    description: 'What AbbVie\'s July 2026 program change means if you take Humira on Medicare, how to check where your own enrollment stands, and the biosimilar question to ask your prescriber.',
  },
  description_meta:
    'How to find financial assistance for Humira (adalimumab) on Medicare: why myAbbVie Assist stopped accepting new Humira patients on July 1, 2026, what enrolled patients should do, adalimumab biosimilars, autoimmune charity fund status, and Extra Help — verified August 2026.',
};

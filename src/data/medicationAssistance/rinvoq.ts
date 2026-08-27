// ---------------------------------------------------------------------------
// Rinvoq (upadacitinib) — AbbVie. Independently researched 2026-08-26. Every
// program below was read on the official source cited with it. Batch 3
// (spec §24 #15) — a NEW page.
//
// Rinvoq is the first record in the project to carry the 'jak-inhibitor'
// class. That is not a cosmetic distinction: it is a tablet, not an injected
// biologic, so it must not inherit the 'biologic' key from its shelf-mates
// Humira, Enbrel and Skyrizi. Confirmed against the label — "RINVOQ/RINVOQ LQ
// is a Janus kinase (JAK) inhibitor."
//
// It shares myAbbVie Assist with Skyrizi. The program facts were re-read on
// Rinvoq's own application (R-APP1-25D-2, April 2025) and on AbbVie's
// available-programs list rather than copied across, because AbbVie has
// demonstrated it removes individual medicines from that list — see the Humira
// record.
//
// RESEARCH NOTE (access): www.abbvie.com serves a Cloudflare block page; the
// apex host abbvie.com serves the same pages, and AbbVie's application PDFs
// are readable under abbvie.com/content/dam/.
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
  title: 'Rinvoq prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2966aec7-2ef0-923c-d8ff-fe1a957bf095',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'Janus kinase (JAK) inhibitor; approved indications and the TNF-blocker prerequisites',
};
const abbviePrograms = {
  title: 'AbbVie Patient Assistance — available programs (RINVOQ listed)',
  url: 'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: 'RINVOQ among the myAbbVie Assist medicines; Medicare accepted by the program',
};
const abbvieRinvoqApp = {
  title: 'myAbbVie Assist RINVOQ patient application (PDF, R-APP1-25D-2, April 2025)',
  url: 'https://www.abbvie.com/content/dam/abbvie-com2/pdfs/pap/rinvoq-patient-assistance-application.pdf',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: '150% FPL / Extra Help denial rule; savings-card government exclusion; program contacts',
};
const abbvieOnlineOverview = {
  title: 'AbbVie Patient Access Support — application overview',
  url: 'https://www.abbvie.com/patients/patient-support/patient-assistance/online-application-overview.html',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: 'how income is assessed; accepted income documents; program phone and hours',
};
const rinvoqCost = {
  title: 'RINVOQ Cost Support & Savings Card — RINVOQ Complete',
  url: 'https://www.rinvoq.com/resources/save-on-rinvoq-costs',
  publisher: 'AbbVie',
  checked: CHECKED,
  supports: 'savings card terms and government exclusion; $14,000 annual maximum; Medicare and uninsured guidance; phone',
};
const totalAssistRa = {
  title: 'TotalAssist — Rheumatoid arthritis (RA) fund',
  url: 'https://totalassist.org/funds/rheumatoid-arthritis-ra/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $4,000 award; Rinvoq listed',
};
const totalAssistIbd = {
  title: 'TotalAssist — Inflammatory bowel disease (IBD) fund',
  url: 'https://totalassist.org/funds/inflammatory-bowel-disease-ibd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $10,400 award; Rinvoq listed',
};
const totalAssistAd = {
  title: 'TotalAssist — Atopic dermatitis fund',
  url: 'https://totalassist.org/funds/atopic-dermatitis/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $4,200 award; Rinvoq listed',
};
const healthWellAutoimmune = {
  title: 'HealthWell Foundation — AutoImmune – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/autoimmune-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $2,800 maximum; 500% FPL; Rinvoq and upadacitinib listed',
};
const healthWellIbd = {
  title: 'HealthWell Foundation — Inflammatory Bowel Disease – Medicare Access fund',
  url: 'https://www.healthwellfoundation.org/fund/inflammatory-bowel-disease-medicare-access/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'closed; $2,100 maximum; 500% FPL; Rinvoq and upadacitinib listed',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no rheumatoid arthritis, psoriatic arthritis, atopic dermatitis or inflammatory bowel disease program',
};

export const RINVOQ: MedicationAssistanceRecord = {
  slug: 'rinvoq',
  brandName: 'Rinvoq',
  genericName: 'upadacitinib',
  manufacturer: 'AbbVie',
  conditions: ['autoimmune'],
  // "RINVOQ/RINVOQ LQ is a Janus kinase (JAK) inhibitor" (label). A tablet,
  // not a biologic — see the file header.
  drugClass: ['jak-inhibitor'],
  description:
    'Rinvoq is a once-daily tablet in the JAK inhibitor class, used across a wide set of immune-driven conditions — rheumatoid and psoriatic arthritis, eczema, ulcerative colitis, Crohn\'s disease, spondyloarthritis and giant cell arteritis. Most of its approvals are second-line: the label generally expects that a TNF blocker was tried first, or was not appropriate for you.',
  usedFor: [
    'Moderately to severely active rheumatoid arthritis in adults after an inadequate response to one or more TNF blockers',
    'Active psoriatic arthritis in adults and patients 2 and older after an inadequate response to one or more TNF blockers',
    'Refractory moderate to severe atopic dermatitis (eczema) in adults and patients 12 and older',
    'Moderately to severely active ulcerative colitis and Crohn\'s disease in adults after an inadequate response to one or more TNF blockers',
    'Active ankylosing spondylitis and non-radiographic axial spondyloarthritis in adults',
    'Giant cell arteritis, and polyarticular juvenile idiopathic arthritis and juvenile psoriatic arthritis in children',
  ],
  whyCostly:
    'Rinvoq is a brand-only specialty tablet with no generic, so Part D plans place it on a specialty tier where you pay a percentage of a high price rather than a flat copay. The second-line labelling adds a second cost: plans commonly require prior authorization and documentation that a TNF blocker was tried first, which can delay a fill even when the money is arranged.',
  medicareContext:
    'Rinvoq is generally covered under Medicare Part D and Medicare Advantage drug plans, usually on a specialty tier and almost always with prior authorization or step therapy, because the label itself expects a TNF blocker to have been tried first. Part D out-of-pocket costs are capped at $2,100 in 2026, and the Medicare Prescription Payment Plan can spread that across the year. Rinvoq is not on the Medicare-negotiated drug lists for 2026 or 2027. One practical note: because it is a tablet dispensed through a pharmacy, Rinvoq runs through your Part D drug benefit rather than Part B — simpler than the biologics it competes with.',
  quickAnswer: {
    verdict:
      'Yes, and the manufacturer route is open. AbbVie\'s myAbbVie Assist program lists Rinvoq and accepts people with Medicare, subject to an Extra Help rule for lower incomes. The savings card excludes Medicare. Every autoimmune and bowel-disease charity fund we checked was closed to new applicants.',
    points: [
      'myAbbVie Assist: Rinvoq is on AbbVie\'s current available-medicines list. AbbVie describes the program as being for people who are "uninsured, receiving coverage through Medicare, or your health insurance isn\'t enough to cover the cost."',
      'Rinvoq.com puts the Medicare path plainly: "If you\'re not eligible for Extra Help, RINVOQ may still be available at no additional cost" — call an Insurance Specialist at 1-800-2RINVOQ to start.',
      'The Medicare condition: with household income below 150% of the federal poverty level you are not eligible for myAbbVie Assist unless you applied for Extra Help and were denied, and the denial letter must come with your application.',
      'The consequence to weigh: AbbVie\'s terms say a Part D enrollee must not buy Rinvoq through their Medicare plan while enrolled, receives no true-out-of-pocket (TrOOP) credit for the free medicine, and that the program will notify the drug plan.',
      'RINVOQ Complete Savings Card: commercially insured patients only, with a $14,000 annual maximum. AbbVie\'s terms exclude Medicare including Part D, Medicare Advantage, Medigap, Medicaid, TRICARE, DoD and VA.',
      'Charitable grants: TotalAssist lists Rinvoq under its rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, atopic dermatitis, ulcerative colitis and IBD funds, and HealthWell lists it on the AutoImmune and Inflammatory Bowel Disease Medicare Access funds. All were closed to new applicants when we checked.',
    ],
  },
  programs: [
    {
      id: 'myabbvie-assist',
      kind: 'manufacturer-pap',
      name: 'myAbbVie Assist (AbbVie Patient Access Support)',
      operator: 'AbbVie',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. RINVOQ appears on AbbVie\'s available-programs list of myAbbVie Assist medicines. (Checked separately from Humira, which AbbVie removed from the same program on July 1, 2026 — the list is not a formality.)',
      medicare: 'conditional',
      medicareNote:
        'Medicare beneficiaries may apply. Rinvoq\'s own site says: "If you\'re not eligible for Extra Help, RINVOQ may still be available at no additional cost." The formal rule from AbbVie\'s application is that "patients with Medicare and income below 150% FPL will not be eligible for myAbbVie Assist unless you have applied and been denied for that Program" — Extra Help — and the denial letter must be included. Above 150% FPL no denial letter is needed. While enrolled you must not purchase Rinvoq under your Medicare plan, you may not seek TrOOP credit for it, and AbbVie will inform your Part D plan.',
      summary:
        'AbbVie\'s patient assistance program provides free medicine to qualifying patients who are uninsured, on Medicare, or underinsured. Income is assessed electronically under the Fair Credit Reporting Act; if the program cannot verify it that way, it asks for documents. Patients whose commercial plan requires them to apply here as a condition of coverage — an alternate funding program — are not eligible.',
      covers: 'Rinvoq at no cost to approved patients for a calendar-year term.',
      eligibility: [
        'Uninsured, covered by Medicare, or with insurance that is not enough to cover the cost of the medicine',
        'A prescription for Rinvoq from your healthcare provider',
        'Medicare beneficiaries with household income below 150% of the federal poverty level: proof that you applied for Extra Help and were denied',
        'Household income within the program\'s limits. AbbVie does not publish a percentage-of-poverty-level figure on these pages — it assesses income electronically and asks for documents if it cannot — so ask the program where your household stands rather than assuming a threshold from another manufacturer.',
        'Not enrolled through an alternate funding program required by a commercial plan',
      ],
      requirements: [
        'Completed and signed patient sections of the Rinvoq application, plus a separate signed HIPAA authorization',
        'Your healthcare provider completes and signs the provider page',
        'Copies of the front and back of all insurance cards',
        'Consent for an electronic income check under the Fair Credit Reporting Act; if income cannot be determined that way, your most recent federal tax return, or pay stubs for at least two pay periods, a Social Security or disability statement, a W-2 or a 1099-R',
        'Medicare beneficiaries below 150% FPL: the Extra Help denial letter',
      ],
      howToApply:
        'Apply online through AbbVie Patient Access Support, or print the Rinvoq application, complete your sections, have your prescriber complete theirs, and fax or mail it — you and your provider may send your parts separately. Call 1-800-222-6885, Monday–Friday 7:00am–7:00pm Central, for help with the application, or 1-800-2RINVOQ to speak with a RINVOQ Complete Insurance Specialist first. There is no fee.',
      applyUrl: 'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html',
      applyLabel: 'myAbbVie Assist — available programs and applications',
      phone: '1-800-222-6885',
      sources: [abbviePrograms, abbvieRinvoqApp, abbvieOnlineOverview, rinvoqCost],
    },
    {
      id: 'savings-card',
      kind: 'manufacturer-savings',
      name: 'RINVOQ Complete Savings Card',
      operator: 'AbbVie',
      status: 'limited',
      statusNote: 'Running for commercially insured patients on August 26, 2026, and closed to anyone with government drug coverage.',
      medicare: 'excluded',
      medicareNote:
        'AbbVie\'s terms say the co-pay assistance program "is not available to patients receiving reimbursement under any federal, state, or government-funded insurance programs (for example, Medicare [including Part D], Medicare Advantage, Medigap, Medicaid, TRICARE, Department of Defense, or Veterans Affairs programs)." If you begin such coverage, AbbVie asks you to call 1-800-2RINVOQ to stop participation.',
      summary:
        'A commercial copay card, listed here so you can see why it does not apply to you. For rheumatology patients it also covers Rinvoq taken with methotrexate, leflunomide or hydroxychloroquine, and a companion rebate covers certain monitoring lab tests — all still commercial-only.',
      covers: 'For commercially insured patients: a maximum annual benefit of $14,000 per calendar year, with a separate $1,000 annual limit for covered lab tests under the Complete Rebate.',
      eligibility: [
        'Commercial insurance coverage for Rinvoq',
        'Not receiving reimbursement under Medicare, Medicare Advantage, Medigap, Medicaid, TRICARE, DoD or VA programs',
      ],
      howToApply: 'Not applicable if you have Medicare. Commercially insured patients request a card through RINVOQ Complete.',
      applyUrl: 'https://www.rinvoq.com/resources/save-on-rinvoq-costs',
      applyLabel: 'RINVOQ Complete — cost and savings',
      sources: [rinvoqCost, SRC.oigCoupons],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — autoimmune, skin and bowel-disease funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Rheumatoid arthritis · Psoriatic arthritis · Ankylosing spondylitis · Atopic dermatitis · Ulcerative colitis · IBD',
      status: 'closed',
      statusNote:
        'Every TotalAssist fund matching a Rinvoq indication was closed to new applicants on August 26, 2026 — rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, atopic dermatitis, ulcerative colitis and inflammatory bowel disease. Rinvoq is on each of those funds\' approved-medication lists.',
      medicare: 'eligible',
      medicareNote: 'When open, these funds require government insurance (Medicare, Medicaid or TRICARE) that covers your Rinvoq costs.',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (which absorbed the PAN Foundation\'s funds on July 1, 2026) lists Rinvoq under six funds covering its indications — more than any other medication in this Batch. A listing is not an open fund. Sign up to be notified the moment one reopens; TotalAssist has no waitlist or queue.',
      covers:
        'When open, the guaranteed award differs by fund: inflammatory bowel disease $10,400; ankylosing spondylitis $4,400; atopic dermatitis $4,200; rheumatoid arthritis $4,000; psoriatic arthritis $3,500; ulcerative colitis $3,000. One grant per condition.',
      eligibility: TOTALASSIST_ELIGIBILITY,
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [SRC.totalAssistFunds, totalAssistRa, totalAssistIbd, totalAssistAd, SRC.totalAssistMedIndex, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — AutoImmune and IBD Medicare Access funds',
      operator: 'HealthWell Foundation',
      fund: 'AutoImmune – Medicare Access · Inflammatory Bowel Disease – Medicare Access',
      status: 'closed',
      statusNote:
        'Both funds were "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. Rinvoq and upadacitinib are on both funds\' covered-treatments lists. HealthWell also runs a Giant Cell Arteritis or Temporal Arteritis – Medicare Access fund, matching another Rinvoq indication; it was closed too, and we did not confirm Rinvoq on that fund\'s medication list — worth asking about if it reopens.',
      medicare: 'eligible',
      medicareNote: 'Both are Medicare Access funds — for Medicare patients only. HealthWell requires insurance that pays part of the cost of the drug; a discount card does not count.',
      summary:
        'HealthWell lists Rinvoq on its AutoImmune and Inflammatory Bowel Disease Medicare Access funds. HealthWell states that closed funds reopen as funding is replenished, and offers real-time alerts for each fund.',
      covers: 'When open: AutoImmune – Medicare Access up to $2,800; Inflammatory Bowel Disease – Medicare Access up to $2,100. Both pay as a pharmacy card, with household income up to 500% of the federal poverty level.',
      eligibility: [
        'Medicare coverage that pays part of the cost of Rinvoq',
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
      statusNote: 'Good Days lists no rheumatoid arthritis, psoriatic arthritis, atopic dermatitis, Crohn\'s disease or ulcerative colitis program (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Rinvoq\'s indications.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'Eight charitable funds list Rinvoq — six at TotalAssist (rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, atopic dermatitis, ulcerative colitis and inflammatory bowel disease) and two at HealthWell (AutoImmune and Inflammatory Bowel Disease Medicare Access). On August 26, 2026 every one was closed to new applicants, as was HealthWell\'s giant cell arteritis fund. Good Days has no matching fund. Rinvoq\'s wide label means more funds could apply to you than to most medications — which also means more alerts worth signing up for. Meanwhile the manufacturer route did not depend on any of it: myAbbVie Assist was open and accepts Medicare beneficiaries, subject to the Extra Help rule.',
  extraHelpNote:
    'For Rinvoq, Extra Help is a gate in front of myAbbVie Assist, not just an alternative to it. If your household income is below 150% of the federal poverty level, AbbVie will only consider you after Social Security has denied you Extra Help, and it wants the letter. Rinvoq\'s own site frames it the same way: if you are not eligible for Extra Help, the medicine may still be available at no additional cost. So apply for Extra Help first — approval gives you the stronger, broader benefit, and denial gives you the document AbbVie needs.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Rinvoq on Medicare there is a live manufacturer route, and the order is set by AbbVie\'s own rule:',
      bullets: [
        'Household income below 150% of the poverty level → apply for Medicare Extra Help first. AbbVie requires it, and approval is the better outcome anyway.',
        'On Medicare, denied Extra Help or income above 150% FPL → myAbbVie Assist for free Rinvoq, weighing the TrOOP consequence described on the card below.',
        'Not sure where you stand → call 1-800-2RINVOQ and ask for a RINVOQ Complete Insurance Specialist; that is the route AbbVie points Medicare patients to.',
        'A diagnosis matching one of the funds → sign up for TotalAssist and HealthWell alerts; every fund was closed when we checked.',
        'Commercial insurance rather than Medicare → the RINVOQ Complete Savings Card, which Medicare rules out.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Rinvoq appears in TotalAssist\'s medication index and on both HealthWell fund pages, and it is on AbbVie\'s available-medicines list. Only the last of those was actually open when we checked:',
      bullets: [
        'AbbVie: the available-programs page lists the medicines currently in myAbbVie Assist. AbbVie removed Humira from that list on July 1, 2026, so confirm Rinvoq is still on it before you apply.',
        'TotalAssist: the fund list at totalassist.org/funds shows "Open" or "Closed" for every fund.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program sets its own rules. For Rinvoq on August 26, 2026, these are the ones that decide your application:',
      bullets: [
        'myAbbVie Assist: uninsured, on Medicare, or underinsured; a Rinvoq prescription; and, if you are on Medicare with income below 150% FPL, an Extra Help denial letter. AbbVie assesses income electronically rather than publishing a threshold.',
        'TotalAssist (when open): government insurance covering Rinvoq; income at or below 500% FPL adjusted for local cost of living; a matching diagnosis in treatment.',
        'HealthWell (when open): Medicare that pays part of the cost; income up to 500% FPL; a provider-verified diagnosis.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
        'Your plan, separately: because Rinvoq\'s label expects a TNF blocker to have been tried first, prior authorization is likely — sort that out in parallel, or an approved application will still not get you the medicine.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'The AbbVie application asks for more paperwork than most. Have these ready:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card — AbbVie wants copies of the front and back of all insurance cards.',
        'Your most recent federal tax return, or pay stubs for at least two pay periods, a Social Security or disability statement, a W-2 or a 1099-R, in case the electronic income check cannot verify your income.',
        'If your income is below 150% FPL: your Extra Help denial letter from Social Security.',
        'Your Rinvoq prescription details and your prescriber\'s name, office phone and fax — and, if your plan is asking, the record of the TNF blocker you tried first.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'myAbbVie Assist: you complete the patient sections, sign the terms of participation and sign the HIPAA authorization separately; your prescriber completes and signs the provider page. Apply online, or fax or mail the form — you and your provider may send your parts separately.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone; Patient Advocate Foundation verifies your diagnosis with your provider.',
        'HealthWell (when open): you apply online or by phone; your provider verifies the diagnosis by signature.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'myAbbVie Assist: AbbVie begins assessing eligibility once both the patient and provider pages are in. Call 1-800-222-6885, Monday–Friday 7am–7pm Central, to check where an application stands. Approved enrollment runs for a calendar-year term.',
        'Extra Help: Social Security notifies you by mail. If you are denied, keep the letter — it is the document AbbVie needs.',
        'TotalAssist (when open): you learn immediately whether you are approved; proof of income is due within 30 days.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'Sign up for TotalAssist and HealthWell alerts so you hear when an autoimmune, skin or IBD fund reopens — there is no waitlist or queue, and Rinvoq matches more funds than most medications.',
        'If myAbbVie Assist turned you down because you qualify for Extra Help, that is the route it was pointing you to — and it lowers every covered drug, not only this one.',
        'If your Part D plan denied Rinvoq on step therapy, ask your prescriber\'s office to request a formulary exception and document the TNF blocker you already tried; that is often the real blocker rather than money.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Compare Part D and Medicare Advantage drug plans in the fall; specialty tiers and step-therapy rules differ sharply from plan to plan.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Copies of the front and back of all insurance cards', note: 'myAbbVie Assist' },
    { item: 'Extra Help denial letter from Social Security', note: 'myAbbVie Assist — required if you have Medicare and income below 150% FPL' },
    { item: 'Record of the TNF blocker you tried first', note: 'your Part D plan — Rinvoq is usually subject to step therapy' },
  ],
  ifUnavailable: [
    {
      text: 'If AbbVie asked for an Extra Help denial letter, start there — apply through Social Security, and keep whatever letter comes back either way.',
      href: 'https://www.ssa.gov/medicare/part-d-extra-help',
      label: 'Apply for Extra Help at SSA.gov',
    },
    ...standardAlternatives('Rinvoq'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Rinvoq?',
      answer:
        'Generally yes. Medicare Part D and Medicare Advantage drug plans cover Rinvoq, usually on a specialty tier and almost always with prior authorization or step therapy — the label itself expects that a TNF blocker was tried first for most indications. Because it is a tablet dispensed at a pharmacy, it runs through your Part D drug benefit rather than Part B. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Rinvoq patient assistance program for people on Medicare?',
      answer:
        'Yes. AbbVie\'s myAbbVie Assist program lists Rinvoq among its available medicines and accepts Medicare beneficiaries. Rinvoq.com states it directly: "If you\'re not eligible for Extra Help, RINVOQ may still be available at no additional cost." One rule applies specifically to Medicare — if your household income is below 150% of the federal poverty level you are not eligible unless you have applied for Extra Help and been denied, with the denial letter attached. Call 1-800-222-6885 for the application, or 1-800-2RINVOQ for an Insurance Specialist.',
    },
    {
      question: 'If AbbVie gives me Rinvoq free, does that count toward my Part D out-of-pocket cap?',
      answer:
        'No. AbbVie\'s terms of participation require that you not purchase Rinvoq under your Medicare plan while enrolled, that you not submit claims or seek true out-of-pocket (TrOOP) credit for the medicine provided, and they state that myAbbVie Assist will inform your Medicare drug plan that you are receiving the medication at no cost outside the Part D benefit. The medicine is genuinely free — it simply does not move you toward the $2,100 cap for your other drugs.',
    },
    {
      question: 'Can I use the RINVOQ Complete Savings Card with Medicare?',
      answer:
        'No. AbbVie\'s terms state the copay assistance program is not available to patients receiving reimbursement under any federal, state or government-funded insurance program, and name Medicare including Part D, Medicare Advantage, Medigap, Medicaid, TRICARE, DoD and VA. If you begin such coverage while holding a card, AbbVie asks you to call 1-800-2RINVOQ to stop participation. Federal anti-kickback rules are the reason — see the key terms lower on this page.',
    },
    {
      question: 'AbbVie stopped covering Humira. Does that affect Rinvoq?',
      answer:
        'No. AbbVie removed HUMIRA from myAbbVie Assist for new patients effective July 1, 2026, but the program continues and Rinvoq remains on AbbVie\'s available-medicines list — AbbVie in fact names Rinvoq as one of the treatments that may be available through the program to patients affected by the Humira change. Because AbbVie has shown it will remove a medicine from that list, check Rinvoq is still on it before you apply.',
    },
    {
      question: 'Is there a charitable grant for Rinvoq right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Rinvoq under six funds — rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, atopic dermatitis, ulcerative colitis and inflammatory bowel disease — and HealthWell lists it on the AutoImmune and Inflammatory Bowel Disease Medicare Access funds. All eight were closed to new applicants, as was HealthWell\'s giant cell arteritis fund. Good Days has no matching fund. Sign up for alerts at both foundations; with this many matching funds, one reopening is more likely than for most medications.',
    },
    {
      question: 'Is there a generic for Rinvoq?',
      answer:
        'No. Upadacitinib is brand-only in the United States, with no generic on the market. Rinvoq is a JAK inhibitor rather than a biologic, so biosimilars are not the relevant comparison either. If cost is the problem, ask whether another medicine for your condition sits on a lower tier of your plan, and see <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['skyrizi', 'humira', 'enbrel', 'dupixent'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: 'The program AbbVie asks you to apply to first' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Rinvoq' },
  ],
  sources: [
    label,
    abbviePrograms,
    abbvieRinvoqApp,
    abbvieOnlineOverview,
    rinvoqCost,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.totalAssistFunds,
    totalAssistRa,
    totalAssistIbd,
    totalAssistAd,
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
    title: 'How to Apply for Rinvoq Assistance',
    status: 'coming-soon',
    description: 'A walkthrough of the myAbbVie Assist application, the Extra Help denial letter Medicare patients below 150% FPL need first, and how to handle the step-therapy requirement in parallel.',
  },
  description_meta:
    'How to find financial assistance for Rinvoq (upadacitinib) on Medicare: the myAbbVie Assist program and its Extra Help rule, why free medicine earns no Part D out-of-pocket credit, why the savings card excludes Medicare, autoimmune fund status, and Extra Help — verified August 2026.',
};

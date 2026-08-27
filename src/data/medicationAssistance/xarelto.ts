// ---------------------------------------------------------------------------
// Xarelto (rivaroxaban) — Janssen / Johnson & Johnson. Independently
// researched 2026-08-26. Every program below was read on the official source
// cited with it. Batch 2 (spec §24 #7) — migrates the legacy generic page.
//
// NOTE: jjpaf.org (the Johnson & Johnson Patient Assistance Foundation site
// the legacy PROGRAMS entry points at) refused every connection on
// 2026-08-26. All manufacturer-PAP facts here come from J&J's own program
// guide and the Xarelto patient site, which name the program the "Johnson &
// Johnson Patient Assistance Program" with a different phone number.
// ---------------------------------------------------------------------------

import type { MedicationAssistanceRecord } from '../../types/MedicationAssistance';
import {
  CHECKED,
  SRC,
  TOTALASSIST_ELIGIBILITY,
  TOTALASSIST_REQUIREMENTS,
  TOTALASSIST_HOW_TO_APPLY,
  TOTALASSIST_PHONE,
  CHECKLIST_MEDICARE,
  standardAlternatives,
} from './shared';

const label = {
  title: 'Xarelto prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=10db92f9-2300-4a80-836b-673e1ae91610',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses; factor Xa inhibitor; strengths',
};
const jnjPapGuide = {
  title: 'Johnson & Johnson Patient Assistance Program — quick reference guide (PDF, 02/26)',
  url: 'https://asset.jnjwithme.com/document/JnJ_Patient_Assistance_Quick_Reference_Guide_Other_Medications.pdf',
  publisher: 'Johnson & Johnson',
  checked: CHECKED,
  supports: 'Xarelto eligible; Medicare accepted; 300% FPL income table; LIS rule at 150% FPL; documents; phone',
};
const xareltoCost = {
  title: 'Xarelto — savings and support (cost page)',
  url: 'https://www.xarelto-us.com/xarelto-cost/',
  publisher: 'Johnson & Johnson',
  checked: CHECKED,
  supports: 'PAP pointer (with a 4%-of-income line not in the program guide); trial offer open to government coverage; J&J Direct mention',
};
const xareltoRequirements = {
  title: 'XARELTO withMe Savings Card — program requirements',
  url: 'https://www.xarelto-us.com/xarelto-cost/program-requirements/',
  publisher: 'Johnson & Johnson',
  checked: CHECKED,
  supports: 'commercial-only; Medicare/Medicaid/TRICARE/DoD/VA exclusion; $10 for up to 90 days; annual expiry; phone',
};
const xareltoFaqs = {
  title: 'Xarelto cost support — FAQs',
  url: 'https://www.xarelto-us.com/xarelto-cost/faqs/',
  publisher: 'Johnson & Johnson',
  checked: CHECKED,
  supports: 'Coverage Gap Support ended with the Part D cap',
};
const xareltoTrial = {
  title: 'XARELTO withMe 30-day Trial Offer card (PDF)',
  url: 'https://sservices.trialcard.com/Coupon/xareltotrialoffer',
  publisher: 'Johnson & Johnson (TrialCard)',
  checked: CHECKED,
  supports: 'Medicare Part D eligible; no TrOOP credit; once per lifetime; not 10 mg or suspension; phone',
};
const xareltoChart = {
  title: 'Cost support options for Xarelto (PDF)',
  url: 'https://asset.jnjwithme.com/document/xarelto-patient-affordability-chart.pdf',
  publisher: 'Johnson & Johnson',
  checked: CHECKED,
  supports: 'which option applies by insurance type',
};
const fdaGenerics = {
  title: 'FDA Roundup: March 4, 2025 — first generics of Xarelto 2.5 mg approved',
  url: 'https://www.fda.gov/news-events/press-announcements/fda-roundup-march-4-2025',
  publisher: 'U.S. Food and Drug Administration',
  checked: CHECKED,
  supports: 'first rivaroxaban generics (2.5 mg) approved March 3, 2025',
};
const drugsAtFda = {
  title: 'Drugs@FDA — rivaroxaban approvals (openFDA)',
  url: 'https://api.fda.gov/drug/drugsfda.json?search=openfda.generic_name:rivaroxaban&limit=100',
  publisher: 'U.S. Food and Drug Administration',
  checked: CHECKED,
  supports: 'ANDA approvals for 10, 15 and 20 mg tablets from multiple firms',
};
const alembicLabel = {
  title: 'Rivaroxaban tablets 2.5/10/15/20 mg — Alembic Pharmaceuticals label (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e62f23c6-89f2-4179-95dc-5732401b3f93',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'a generic label covering the full-strength tablets',
};
const totalAssistStroke = {
  title: 'TotalAssist — Stroke fund',
  url: 'https://totalassist.org/funds/stroke/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $1,000 guaranteed / $1,500 maximum; Xarelto listed; stroke diagnosis only',
};
const totalAssistPad = {
  title: 'TotalAssist — Peripheral vascular and artery disease fund',
  url: 'https://totalassist.org/funds/peripheral-vascular-and-artery-disease/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; $1,125 guaranteed / $1,500 maximum',
};
const totalAssistCadHe = {
  title: 'TotalAssist — Coronary artery disease (CAD) health equity fund',
  url: 'https://totalassist.org/funds/coronary-artery-disease-cad-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'closed; zip-code rule',
};
const totalAssistIdentified = {
  title: 'TotalAssist — identified-need funds (atrial fibrillation, DVT, PE, CAD)',
  url: 'https://totalassist.org/identified-need-funds/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'AFib/DVT/PE/CAD funds await donations; not open',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'no AFib/clot/stroke/cardiovascular program',
};

export const XARELTO: MedicationAssistanceRecord = {
  slug: 'xarelto',
  brandName: 'Xarelto',
  genericName: 'rivaroxaban',
  manufacturer: 'Janssen Pharmaceuticals (Johnson & Johnson)',
  conditions: ['blood-clots', 'heart'],
  // rivaroxaban — factor Xa inhibitor, i.e. an anticoagulant (Xarelto US PI).
  drugClass: ['anticoagulant'],
  description:
    'Xarelto is a once- or twice-daily oral anticoagulant (a factor Xa inhibitor) used to prevent strokes in people with non-valvular atrial fibrillation, to treat and prevent blood clots, and to lower cardiovascular risk in coronary and peripheral artery disease.',
  usedFor: [
    'Reducing the risk of stroke and systemic embolism in adults with non-valvular atrial fibrillation',
    'Treating deep vein thrombosis (DVT) and pulmonary embolism (PE), and reducing the risk of them recurring',
    'Preventing DVT after hip or knee replacement surgery, and preventing blood clots in acutely ill hospitalized medical patients',
    'Reducing the risk of major cardiovascular events in coronary artery disease, and major thrombotic vascular events in peripheral artery disease (2.5 mg, with aspirin)',
    'Treating and preventing blood clots in children, including after the Fontan procedure',
  ],
  whyCostly:
    'Brand Xarelto is usually placed on a brand tier with a copay or coinsurance every month. Two things now cut against that cost: Medicare\'s negotiated price of $197 for a 30-day supply took effect in January 2026, and FDA-approved generic rivaroxaban exists — the 2.5 mg strength since March 2025, with 10, 15 and 20 mg generics approved and at least one full-strength generic label marketed. Whether your pharmacy stocks the full-strength generic is a question for the counter, not this page.',
  medicareContext:
    'Xarelto is generally covered under Medicare Part D and Medicare Advantage drug plans, sometimes with prior authorization or step therapy versus other anticoagulants. It is one of the first ten drugs with a Medicare-negotiated Maximum Fair Price: $197.00 for a 30-day supply in 2026 (versus a $517 list price in 2023, per CMS). That is the price to your plan — your copay still depends on your plan\'s tier and cost-sharing, and Part D out-of-pocket costs are capped at $2,100 in 2026.',
  quickAnswer: {
    verdict:
      'Yes, there are real routes — but not a charitable grant right now. Johnson & Johnson\'s patient assistance program accepts Medicare patients with income at or below 300% of the poverty level, the free 30-day trial is open to Part D enrollees, and Extra Help can lower the copay. The savings card excludes Medicare. Every charity fund we checked for atrial fibrillation, blood clots, stroke or artery disease was closed or does not exist yet.',
    points: [
      'Johnson & Johnson Patient Assistance Program: free Xarelto for eligible patients, including people with Medicare — income at or below 300% FPL ($46,950 single / $63,450 for two in 2026); Part D patients at or below 150% FPL must show they are not eligible for Extra Help.',
      'XARELTO withMe Savings Card: excludes Medicare, Medicaid, TRICARE, DoD and VA. The 30-day Trial Offer is open to Medicare Part D patients (once per lifetime; not for the 10 mg tablet or oral suspension).',
      'J&J Direct self-pay: J&J says it exists, but its price and Medicare rules could not be read on an official page — ask before assuming.',
      'Charitable grants: TotalAssist lists Xarelto only under its Stroke, artery-disease and cardiomyopathy funds (all closed); its AFib, DVT and PE funds are still awaiting donations. HealthWell and Good Days have no fund for these diagnoses.',
      'Medicare: negotiated Part D price of $197 (30-day) in 2026; generic rivaroxaban exists; Extra Help can cut a covered brand copay to about $12.65 if you qualify.',
    ],
  },
  programs: [
    {
      id: 'jnj-pap',
      kind: 'manufacturer-pap',
      name: 'Johnson & Johnson Patient Assistance Program',
      operator: 'Johnson & Johnson',
      status: 'open',
      statusNote:
        'Accepting applications under the February 2026 program guide on August 26, 2026; Xarelto tablets and oral suspension are on the eligible-medicines list. Program terms expire at the end of each calendar year and may change without notice. (The former jjpaf.org website was unreachable when we checked; use the contacts below.)',
      medicare: 'conditional',
      medicareNote:
        'J&J\'s guide accepts patients who "are uninsured or have a commercial or employer-sponsored insurance plan or government coverage, such as Medicare." For Medicare Part D patients only: if income is at or below 150% of the federal poverty level, you must demonstrate you are not eligible for the Low-Income Subsidy (Extra Help) — J&J tells you to run SSA.gov\'s "Find Out If You Qualify" check and submit the result. Xarelto\'s patient site also mentions spending more than 4% of gross household income on prescriptions; that line does not appear in the current program guide, so ask about it when you call.',
      summary:
        'Johnson & Johnson provides Xarelto at no cost for up to one year to eligible patients who cannot afford it. You are not eligible if your insurance would cover the medicine anyway once an application is denied.',
      covers: 'Xarelto at no cost for up to one year for approved patients (re-enrollment required).',
      eligibility: [
        'Live in the United States, Puerto Rico or the U.S. Virgin Islands and be treated as an outpatient by a U.S.-licensed prescriber',
        'Household income at or below 300% of the federal poverty level. The dollar limits in the February 2026 program guide are $46,950 for one person, $63,450 for two, $79,950 for three and $96,450 for four (add $16,500 per additional person; higher in Alaska and Hawaii). These are J&J\'s own figures — another program quoting "300% FPL" may publish different dollars, because each builds its table from a poverty-guideline year of its choosing.',
        'Medicare Part D patients with income at or below 150% FPL: proof that you are not eligible for Extra Help (LIS)',
        'Your insurance would not cover the medicine if this application were denied',
      ],
      requirements: [
        'Signed Patient Consent Form and Patient Authorization Form (completed online or by phone)',
        'Copies of the front and back of all insurance cards; insurance denial documentation if you were denied',
        'Proof of income: a copy of your most recent 1040 or 1040-SR federal tax return (J&J also runs a credit check that does not affect your score)',
        'Part D patients at or below 150% FPL: a printout or screenshot of the SSA.gov Extra Help eligibility result',
      ],
      howToApply:
        'You or a caregiver enroll online through the J&J patient assistance portal or by calling 833-742-0791 (Monday–Friday, 8am–8pm ET). Your prescriber can also enroll you through the provider portal. Documents are submitted through the document-upload site or by fax. There is no fee.',
      applyUrl: 'https://asset.jnjwithme.com/document/JnJ_Patient_Assistance_Quick_Reference_Guide_Other_Medications.pdf',
      applyLabel: 'J&J Patient Assistance Program guide (PDF)',
      phone: '833-742-0791',
      sources: [jnjPapGuide, xareltoCost, xareltoChart],
    },
    {
      id: 'xarelto-savings-card',
      kind: 'manufacturer-savings',
      name: 'XARELTO withMe Savings Card',
      operator: 'Johnson & Johnson',
      status: 'open',
      statusNote: 'Active for commercially insured patients; terms expire at the end of each calendar year and may change or end without notice. The former Coverage Gap Support for Part D patients ended when the Part D out-of-pocket cap arrived.',
      medicare: 'excluded',
      medicareNote:
        'J&J\'s terms: "The XARELTO withMe Savings Card is not for people who use any state or federal government-funded healthcare program. Examples of these programs are Medicare, Medicaid, TRICARE, Department of Defense, and Veterans Administration." Uninsured patients are also not eligible.',
      summary: 'A commercial copay offer: eligible commercially insured patients may pay as little as $10 for up to a 90-day supply, subject to a per-fill limit and an annual maximum benefit that J&J does not publish.',
      eligibility: ['Commercial or private prescription insurance (including Marketplace plans) with an out-of-pocket cost for Xarelto', 'Not enrolled in any state or federal government-funded healthcare program'],
      howToApply: 'Commercially insured patients activate the card at xarelto-us.com or by calling 888-927-3586. Not applicable to Medicare beneficiaries.',
      applyUrl: 'https://www.xarelto-us.com/xarelto-cost/program-requirements/',
      applyLabel: 'XARELTO withMe Savings Card requirements',
      phone: '888-927-3586',
      sources: [xareltoRequirements, xareltoFaqs, SRC.oigCoupons],
    },
    {
      id: 'xarelto-trial',
      kind: 'manufacturer-savings',
      name: 'XARELTO withMe 30-day Trial Offer',
      operator: 'Johnson & Johnson',
      status: 'open',
      statusNote: 'Available through the end of the calendar year (terms renew annually), one use per patient per lifetime, no refills.',
      medicare: 'eligible',
      medicareNote:
        'The trial card states: "Patients enrolled in a Medicare Part D plan are eligible for this free 30-day trial offer but may not submit a claim for the costs paid by this program to count toward true out-of-pocket (TrOOP) costs." Xarelto\'s site adds that the offer is open to patients with commercial insurance, government coverage or no insurance.',
      summary: 'A free 30-day supply for people prescribed Xarelto — except the 10 mg tablet and the 1 mg/mL oral suspension. It is a one-time bridge, not ongoing assistance.',
      eligibility: [
        'A Xarelto prescription other than the 10 mg tablet or the oral suspension',
        'One trial offer per patient per lifetime; no purchase required',
      ],
      howToApply: 'Download or request the Trial Offer card (888-927-3586, Monday–Friday 8am–8pm ET) and present it with your prescription at the pharmacy.',
      applyUrl: 'https://sservices.trialcard.com/Coupon/xareltotrialoffer',
      applyLabel: 'XARELTO withMe Trial Offer card',
      phone: '888-927-3586',
      sources: [xareltoTrial, xareltoCost],
    },
    {
      id: 'jnj-direct',
      kind: 'manufacturer-direct',
      name: 'J&J Direct (self-pay) — details not verifiable',
      operator: 'Johnson & Johnson',
      status: 'verify',
      statusNote:
        'Xarelto\'s patient site describes J&J Direct as "a direct-to-patient, self-pay program that delivers prescribed medicines to eligible patients who are uninsured, face coverage and affordability gaps through their health plan or choose to pay out of pocket." The J&J Direct page itself was blocked when we checked, so the price, whether Xarelto is included, and the rule for Part D enrollees are unconfirmed.',
      medicare: 'unknown',
      medicareNote: 'Not stated on any page we could read. Cash purchases made outside your plan generally do not count toward your Part D out-of-pocket cap — ask before using any self-pay channel.',
      summary: 'A manufacturer self-pay channel that J&J says exists. We could not read its terms, so treat it as something to ask J&J about, not as a confirmed price.',
      eligibility: ['Eligibility and price set by Johnson & Johnson — unverified'],
      howToApply: 'Ask about J&J Direct when you call 833-742-0791, or check jnj.com/innovativemedicine/jnj-direct directly.',
      applyUrl: 'https://www.jnj.com/innovativemedicine/jnj-direct',
      applyLabel: 'J&J Direct (page blocked when checked)',
      sources: [xareltoCost],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Stroke, artery-disease and cardiomyopathy funds (and identified-need AFib / DVT / PE funds)',
      operator: 'Patient Advocate Foundation',
      fund: 'Stroke · Peripheral vascular and artery disease · Coronary artery disease (CAD) health equity · Cardiomyopathy (all closed) · Atrial fibrillation, DVT, PE, CAD (awaiting donations)',
      status: 'closed',
      statusNote:
        'Every fund that lists Xarelto was closed to new applicants on August 26, 2026: Stroke ($1,000 guaranteed / $1,500 maximum), Peripheral vascular and artery disease ($1,125 / $1,500), CAD health equity ($1,000 / $1,500, zip-code limited) and Cardiomyopathy ($1,500 / $2,000). Atrial fibrillation, DVT, PE and CAD appear only as "identified need" funds — awaiting initial donations before they become TotalAssist funds.',
      medicare: 'eligible',
      medicareNote: 'These funds require government insurance (Medicare, Medicaid or TRICARE) and a diagnosis matching the fund — atrial fibrillation alone does not qualify for the Stroke fund.',
      summary:
        'Xarelto is on TotalAssist\'s approved-medication lists for several cardiovascular funds, but being listed is not the same as being open, and there is currently no funded TotalAssist program for AFib or blood clots. Sign up for notifications so you hear if any of these opens.',
      covers: 'When open: Stroke $1,000 guaranteed / $1,500 maximum; artery disease $1,125 / $1,500; CAD health equity $1,000 / $1,500; Cardiomyopathy $1,500 / $2,000.',
      eligibility: ['Confirmed diagnosis matching the fund (stroke, peripheral artery disease, coronary artery disease or cardiomyopathy) in treatment', ...TOTALASSIST_ELIGIBILITY],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: 'Sign up for fund notifications at totalassist.org/notify. If a matching fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistStroke, totalAssistPad, totalAssistCadHe, totalAssistIdentified, SRC.totalAssistMedIndex, SRC.totalAssistFunds, SRC.totalAssistNotify],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation',
      operator: 'HealthWell Foundation',
      status: 'not-found',
      statusNote: 'No HealthWell fund exists for atrial fibrillation, DVT/PE, stroke, anticoagulation, peripheral artery disease or coronary artery disease (checked August 26, 2026). Its Chronic Heart Failure and Cardiomyopathy Medicare Access funds are closed and do not list Xarelto.',
      medicare: 'eligible',
      medicareNote: 'HealthWell accepts Medicare beneficiaries for the funds it does run — none of them cover Xarelto\'s diagnoses.',
      summary: 'We searched HealthWell\'s full disease-fund list for Xarelto\'s conditions and found no matching fund. HealthWell adds and reopens funds as funding allows, so this can change.',
      eligibility: [],
      howToApply: 'Check the HealthWell Disease Funds page periodically for a new atrial-fibrillation or blood-clot fund.',
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds',
      phone: '(800) 675-8416',
      sources: [SRC.healthWellFunds, SRC.healthWellCHF],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days lists no program for atrial fibrillation, blood clots, stroke or cardiovascular disease (checked August 26, 2026).',
      medicare: 'unknown',
      medicareNote: 'Not applicable — no matching program.',
      summary: 'An honest negative: we looked, and there is no Good Days program covering Xarelto\'s diagnoses.',
      eligibility: [],
      howToApply: 'Not applicable.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days — diseases covered',
      sources: [goodDays],
    },
  ],
  charitableSummary:
    'We could not identify a currently open charitable fund covering Xarelto. TotalAssist lists it under its Stroke, artery-disease and cardiomyopathy funds, all of which were closed on August 26, 2026; its atrial fibrillation, DVT, PE and coronary artery disease funds exist only as "identified need" funds still awaiting donations. HealthWell and Good Days have no fund for AFib, blood clots or stroke. Other options remain: the Johnson & Johnson Patient Assistance Program, the free 30-day trial, generic rivaroxaban, and Medicare Extra Help.',
  extraHelpNote:
    'For Xarelto, Extra Help is the route with the widest door: the charity funds are closed, and the J&J program has an income cutoff — but Extra Help has no fund balance to run out and lowers every covered drug\'s copay. (Note that J&J asks low-income Part D applicants to prove they are not eligible for Extra Help — so check Extra Help first.)',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Xarelto in August 2026 the realistic order is Extra Help check → manufacturer program → free trial (if you are new to Xarelto), because no charity fund for AFib or blood clots is open.',
      bullets: [
        'Limited income and resources → Medicare Extra Help through Social Security (do this first — J&J asks low-income Part D applicants for the result).',
        'On Medicare and household income at or below 300% of the poverty level → Johnson & Johnson Patient Assistance Program (free Xarelto for up to a year).',
        'Starting Xarelto for the first time → XARELTO withMe 30-day Trial Offer (open to Medicare patients, once per lifetime).',
        'Any Part D enrollee → ask your pharmacist whether generic rivaroxaban is stocked in your strength and cheaper on your plan.',
        'Stroke, artery-disease or cardiomyopathy diagnosis → sign up for TotalAssist notifications (closed when checked).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'Xarelto appears in TotalAssist\'s medication index, but every fund that lists it was closed when we checked, and the AFib, DVT and PE funds do not have money yet. The J&J program and the trial offer were open. Funding can change without notice.',
      bullets: [
        'J&J PAP: call 833-742-0791 or use the online portal; program terms renew each calendar year.',
        'TotalAssist: totalassist.org/funds shows "Open" or "Closed" for every fund; AFib, DVT and PE sit on the identified-need list.',
        'HealthWell: no fund for these diagnoses at all.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The J&J rules are specific for Medicare patients — read them before you gather paperwork:',
      bullets: [
        'J&J PAP: household income at or below $46,950 (one person) or $63,450 (two people) on the February 2026 program guide table; if you have Part D and income at or below 150% FPL, you must show you are not eligible for Extra Help; your insurance must not cover the medicine if the application is denied. Ask about the 4%-of-income line on Xarelto\'s site — it is not in the current guide.',
        'Trial Offer: a Xarelto prescription other than 10 mg or the oral suspension; one per lifetime; Medicare Part D patients are eligible but the free supply does not count toward the Part D cap.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
        'Savings Card: commercial insurance only — not for Medicare.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'The J&J application is completed online or by phone with uploaded documents, so collect these first:',
      bullets: [
        'A copy of your most recent 1040 or 1040-SR federal tax return (proof of income).',
        'Copies of the front and back of your Medicare card and Part D / Medicare Advantage drug-plan card.',
        'If your income is at or below 150% FPL: the SSA.gov "Find Out If You Qualify" Extra Help result, printed or screenshotted.',
        'Any insurance denial letter for Xarelto, if you have one.',
        'Your Xarelto prescription and your prescriber\'s name, phone and fax.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'J&J PAP: you (or a caregiver) sign the consent and authorization forms online or by phone at 833-742-0791, then upload documents; your prescriber can also enroll you through the provider portal.',
        'Trial Offer: you download or request the card (888-927-3586) and present it at the pharmacy with your prescription.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or in person. It is free.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'J&J PAP: J&J does not publish a review time; approved patients receive Xarelto at no cost for up to one year and re-enroll after that.',
        'Trial Offer: the card is used at the pharmacy — no waiting period.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed" or "denied":',
      bullets: [
        'Sign up for TotalAssist notifications so you hear if an AFib, DVT/PE, Stroke or artery-disease fund opens — there is no waitlist or queue.',
        'Ask your pharmacist about generic rivaroxaban in your strength; if it is not stocked, ask your plan which pharmacies carry it.',
        'Apply for Extra Help even if you think you earn too much — the limits are higher than many people expect.',
        'Ask your doctor\'s office about a formulary exception or a lower tier on your plan, and compare Part D plans in the fall.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Call AltaMedicare — we\'ll go through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Copy of your most recent 1040 or 1040-SR federal tax return', note: 'J&J Patient Assistance Program' },
    { item: 'SSA.gov Extra Help eligibility result (printout or screenshot)', note: 'J&J PAP — Part D patients with income at or below 150% FPL' },
    { item: 'Insurance denial letter for Xarelto, if any', note: 'J&J PAP' },
  ],
  ifUnavailable: [
    {
      text: 'If J&J denied you on income, ask your pharmacist about generic rivaroxaban — FDA has approved 2.5, 10, 15 and 20 mg generics, though pharmacy stocking of the full-strength tablets varies.',
      href: 'https://www.fda.gov/news-events/press-announcements/fda-roundup-march-4-2025',
      label: 'FDA — first Xarelto generics',
    },
    ...standardAlternatives('Xarelto'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Xarelto?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans generally cover Xarelto, and since January 1, 2026 Medicare pays a negotiated Maximum Fair Price of $197 for a 30-day supply. Your copay depends on your plan\'s tier and cost-sharing, and Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Xarelto patient assistance program for people on Medicare?',
      answer:
        'Yes. The Johnson & Johnson Patient Assistance Program accepts people with Medicare and provides Xarelto at no cost for up to a year to eligible patients with household income at or below 300% of the federal poverty level — $46,950 for one person or $63,450 for two in 2026. Part D patients with income at or below 150% FPL must show they are not eligible for Extra Help. Call 833-742-0791, Monday–Friday 8am–8pm ET.',
    },
    {
      question: 'Can I use the Xarelto savings card with Medicare?',
      answer:
        'No. J&J states the XARELTO withMe Savings Card "is not for people who use any state or federal government-funded healthcare program," naming Medicare, Medicaid, TRICARE, Department of Defense and Veterans Administration. The 30-day Trial Offer is different: its card states Medicare Part D patients are eligible, once per lifetime, though the free supply cannot count toward your Part D out-of-pocket cap.',
    },
    {
      question: 'Is there a charitable grant for Xarelto right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Xarelto under its Stroke, peripheral artery disease, coronary artery disease health-equity and cardiomyopathy funds — all closed — and its atrial fibrillation, DVT and PE funds are "identified need" funds still waiting for donations. HealthWell and Good Days have no fund for these diagnoses. Sign up for TotalAssist notifications and check back.',
    },
    {
      question: 'Is there a generic for Xarelto?',
      answer:
        'Yes, with a caveat. FDA approved the first generic rivaroxaban 2.5 mg tablets in March 2025, and its Drugs@FDA database now shows approved generics for the 10, 15 and 20 mg tablets from several manufacturers, with at least one full-strength generic label on the market. Most generic labels we found still cover only the 2.5 mg strength, so ask your pharmacist whether your strength is stocked and what it costs on your plan.',
    },
    {
      question: 'What is the $197 Xarelto price?',
      answer:
        'It is Medicare\'s negotiated Maximum Fair Price for a 30-day supply of Xarelto in 2026, down from a $517 list price in 2023 according to CMS. It sets what Part D plans pay; your copay is set by your plan\'s tier and cost-sharing, so your out-of-pocket amount may differ depending on your deductible and the annual cap.',
    },
    {
      question: 'What happened to XARELTO withMe Coverage Gap Support?',
      answer:
        'J&J ended it. Its FAQ explains that with the Part D out-of-pocket cap (now $2,100 in 2026) "XARELTO withMe Coverage Gap Support will no longer be needed for most patients in the program." Medicare patients who still cannot afford Xarelto are pointed to the J&J Patient Assistance Program, Extra Help, state pharmaceutical assistance programs and Patient Advocate Foundation.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'TotalAssist offers text, email or phone notifications when a fund opens, with no waitlist or queue. While you wait, the routes that do not depend on a fund balance are the J&J program, the trial offer, generic rivaroxaban, Extra Help, a formulary exception through your doctor, and a Part D plan comparison in the fall. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['eliquis', 'entresto', 'repatha'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/does-medicare-cover-xarelto.html', label: 'Does Medicare Cover Xarelto?', blurb: 'Coverage, tiers and prior authorization' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Xarelto' },
  ],
  sources: [
    label,
    jnjPapGuide,
    xareltoCost,
    xareltoRequirements,
    xareltoFaqs,
    xareltoTrial,
    xareltoChart,
    fdaGenerics,
    drugsAtFda,
    alembicLabel,
    SRC.cmsMfp2026,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    totalAssistStroke,
    totalAssistPad,
    totalAssistCadHe,
    totalAssistIdentified,
    SRC.totalAssistMedIndex,
    SRC.totalAssistNotify,
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
    title: 'How to Apply for Xarelto Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of the Johnson & Johnson Patient Assistance Program application, the Extra Help check for low-income Part D patients, the free 30-day trial, and what to ask about generic rivaroxaban.',
  },
  description_meta:
    'How to find financial assistance for Xarelto (rivaroxaban) on Medicare: the Johnson & Johnson Patient Assistance Program and its 300% FPL limit, the free 30-day trial, why the savings card excludes Medicare, charitable fund status, generic rivaroxaban, and Extra Help — verified August 2026.',
};

// ---------------------------------------------------------------------------
// src/data/medicationAssistance/drugClasses.ts — AXIS 2 of the medication
// taxonomy: what the medication IS (docs/PRESCRIPTION-ASSISTANCE-TAXONOMY-AUDIT.md).
//
// Axis 1 is `conditions` (src/data/conditions.ts) — what the patient has. The
// two axes are independent and neither derives from the other: Eliquis is an
// anticoagulant (class) prescribed for AFib and clots (conditions); Ozempic is
// a GLP-1 (class) prescribed for type 2 diabetes (condition).
//
// Keep this vocabulary SMALL and factual. A new key is added when a researched
// medication needs it, and the class is confirmed against the medication's
// label during that research pass (spec §16 Rule 1) — never assigned from
// memory to a medication that has not been researched yet.
// ---------------------------------------------------------------------------

import type { DrugClass, DrugClassKey } from '../../types/MedicationAssistance';

export const DRUG_CLASSES: DrugClass[] = [
  {
    key: 'glp-1',
    label: 'GLP-1 receptor agonist',
    blurb:
      'Medicines that act on the GLP-1 receptor to lower blood sugar and slow digestion. Includes the dual GIP/GLP-1 agonist tirzepatide.',
  },
  {
    key: 'sglt2',
    label: 'SGLT2 inhibitor',
    blurb:
      'Tablets that lower blood sugar by making the kidneys remove glucose in urine; several also carry heart-failure and kidney indications.',
  },
  {
    key: 'insulin',
    label: 'Insulin',
    blurb: 'Injected insulin products, long-acting and rapid-acting.',
  },
  {
    key: 'anticoagulant',
    label: 'Anticoagulant',
    blurb:
      'Blood thinners that slow clot formation — used for atrial fibrillation, deep vein thrombosis and pulmonary embolism.',
  },
  {
    key: 'antiplatelet',
    label: 'Antiplatelet',
    blurb:
      'Blood thinners that stop platelets clumping — used after a heart attack or a stent.',
  },
  {
    key: 'biologic',
    label: 'Biologic',
    blurb:
      'Injected or infused proteins (often monoclonal antibodies) that target one part of the immune system.',
  },
  {
    // Blurb widened 2026-08-26 (Batch 5, Leqvio): the key covers PCSK9-directed
    // LDL-lowering injectables — the monoclonal antibodies (Repatha, Praluent)
    // and the siRNA inclisiran (Leqvio), which the label calls "a small
    // interfering RNA (siRNA) directed to PCSK9 mRNA", not an antibody.
    key: 'pcsk9',
    label: 'PCSK9 inhibitor',
    blurb: 'Injected medicines that lower LDL cholesterol by targeting PCSK9 — antibodies given every two to four weeks, or the twice-yearly siRNA inclisiran — when statins are not enough.',
  },
  {
    // Added 2026-08-26 for Batch 2 (Entresto); confirmed against the label —
    // sacubitril (neprilysin inhibitor) + valsartan (angiotensin II receptor blocker).
    key: 'arni',
    label: 'ARNI (angiotensin receptor–neprilysin inhibitor)',
    blurb: 'A heart-failure tablet that combines a neprilysin inhibitor with an angiotensin receptor blocker.',
  },
  {
    // Added 2026-08-26 for Batch 2 (Trelegy Ellipta, Breztri Aerosphere);
    // confirmed against each label (ICS + LAMA + LABA in one inhaler).
    key: 'triple-inhaler',
    label: 'Triple-therapy inhaler (ICS/LAMA/LABA)',
    blurb:
      'Maintenance inhalers that combine an inhaled steroid with two long-acting bronchodilators for COPD, and in some cases asthma.',
  },
  {
    // Added 2026-08-26 for Batch 3 (Rinvoq); confirmed against the label —
    // "RINVOQ/RINVOQ LQ is a Janus kinase (JAK) inhibitor" (DailyMed). It is a
    // tablet, not a biologic, so it must not carry the 'biologic' key.
    key: 'jak-inhibitor',
    label: 'JAK inhibitor',
    blurb:
      'Tablets that block Janus kinase signalling inside immune cells. Taken by mouth, unlike the injected biologics used for the same conditions.',
  },
  {
    // Added 2026-08-26 for Batch 6 (Nexletol); confirmed against the label
    // Highlights — "NEXLETOL is an adenosine triphosphate-citrate lyase (ACL)
    // inhibitor" (DailyMed, rev. 1/2026). It is an oral tablet acting upstream
    // of the statin target, so it is neither a statin nor a 'pcsk9' medicine.
    key: 'acl-inhibitor',
    label: 'ACL inhibitor',
    blurb:
      'A cholesterol tablet that blocks ATP-citrate lyase, an enzyme the liver uses to make cholesterol — a step above the enzyme statins block. Activated in the liver, not in muscle.',
  },
  {
    // Added 2026-08-26 for Batch 6 (Symbicort); confirmed against the label —
    // budesonide, a corticosteroid, with formoterol, a long-acting beta2
    // agonist (DailyMed, rev. 7/2019). Two ingredients, so it must NOT carry
    // 'triple-inhaler', which the taxonomy reserves for ICS/LAMA/LABA.
    key: 'ics-laba',
    label: 'Combination inhaler (ICS/LABA)',
    blurb:
      'Maintenance inhalers that pair an inhaled corticosteroid with one long-acting bronchodilator, for asthma and in some cases COPD.',
  },
  {
    // Added 2026-08-26 for Batch 6 (Spiriva HandiHaler and Spiriva Respimat);
    // the label Highlights call tiotropium "an anticholinergic" (DailyMed,
    // rev. 12/2024 and 1/2025). A single long-acting bronchodilator with no
    // steroid, which is what separates it from 'ics-laba' and 'triple-inhaler'.
    key: 'lama',
    label: 'LAMA inhaler (long-acting anticholinergic)',
    blurb:
      'Once-daily maintenance inhalers that relax the airway muscle by blocking acetylcholine. No steroid, and not a rescue inhaler.',
  },
  {
    // Added 2026-08-26 for Batch 8 (Anoro Ellipta, Stiolto Respimat). Confirmed
    // against both labels: "ANORO ELLIPTA is a combination of umeclidinium, an
    // anticholinergic, and vilanterol, a long-acting beta2-agonist (LABA)"
    // (DailyMed, rev. 6/2/2023) and "STIOLTO RESPIMAT is a combination of
    // tiotropium bromide, an anticholinergic and olodaterol, a long-acting
    // beta2-adrenergic agonist (LABA)" (DailyMed, rev. 1/2025). The existing
    // vocabulary genuinely cannot represent these: 'lama' means a single
    // bronchodilator with no LABA, 'ics-laba' means a steroid is present, and
    // 'triple-inhaler' is reserved for ICS/LAMA/LABA. Two bronchodilators and no
    // steroid is its own thing, and both labels state the inhaler is NOT
    // indicated for asthma — which is why these two medications appear on the
    // COPD charitable funds and not the asthma ones.
    key: 'lama-laba',
    label: 'Dual bronchodilator inhaler (LAMA/LABA)',
    blurb:
      'Maintenance inhalers that combine two different long-acting bronchodilators and no steroid. Licensed for COPD only — not for asthma.',
  },
  {
    // Added 2026-08-26 for Batch 8 (Daliresp); confirmed against the label
    // Highlights — "DALIRESP is a selective phosphodiesterase 4 inhibitor"
    // (DailyMed, rev. 3/12/2020). It is an oral tablet and the label states
    // plainly that it "is not a bronchodilator", so none of the inhaler classes
    // can carry it, and it acts on inflammation rather than on a signalling
    // kinase, so 'kinase-inhibitor' would be wrong too.
    key: 'pde4-inhibitor',
    label: 'PDE4 inhibitor',
    blurb:
      'A once-daily tablet that reduces inflammation in the lungs to cut the number of COPD flare-ups. It is not a bronchodilator and does nothing for sudden breathlessness.',
  },
  {
    // Added 2026-08-26 for Batch 8 (Ranexa). Unusually, the label states no
    // class: the Highlights call it only "Ranexa (ranolazine) extended-release
    // tablets", and the mechanism section says "The mechanism of action of
    // ranolazine's antianginal effects has not been determined" while
    // describing "anti-ischemic and antianginal effects" (DailyMed, rev.
    // 4/26/2010). The key is named for the effect the label does claim. No
    // existing key fits — it is not an anticoagulant, antiplatelet, ARNI or
    // lipid medicine — so the vocabulary demonstrably could not represent it.
    key: 'antianginal',
    label: 'Antianginal',
    blurb:
      'A tablet taken to reduce episodes of angina — the chest pain of reduced blood flow to the heart. It does not thin the blood or lower cholesterol.',
  },
  {
    // Added 2026-08-26 for Batch 8 (Vascepa); the label describes it as "a
    // lipid-regulating agent" containing "icosapent ethyl, an omega-3 fatty
    // acid ethyl ester" (DailyMed, rev. 3/23/2026). Distinct from the existing
    // lipid keys: it is neither a statin-adjacent oral ('acl-inhibitor') nor an
    // injectable LDL medicine ('pcsk9'), and its primary target is
    // triglycerides rather than LDL.
    key: 'omega-3',
    label: 'Omega-3 (EPA) lipid-regulating agent',
    blurb:
      'A purified omega-3 fatty acid capsule taken alongside a statin. It targets triglycerides and cardiovascular risk rather than LDL cholesterol, and it is not the same as an over-the-counter fish-oil supplement.',
  },
  {
    // Added 2026-08-26 for Batch 6 (Ofev); the label Highlights say "OFEV is a
    // kinase inhibitor" (DailyMed, rev. 5/2025) and the mechanism section calls
    // nintedanib "a small molecule that inhibits multiple receptor tyrosine
    // kinases (RTKs) and non-receptor tyrosine kinases (nRTKs)". Kept broader
    // than 'jak-inhibitor', which names one specific kinase family.
    key: 'kinase-inhibitor',
    label: 'Kinase inhibitor',
    blurb:
      'Capsules or tablets that block signalling enzymes inside cells. In lung fibrosis they slow the scarring process rather than open the airways.',
  },
  {
    // Added 2026-08-26 for Batch 7 (Januvia); confirmed against the label —
    // "JANUVIA is a dipeptidyl peptidase-4 (DPP-4) inhibitor" (DailyMed,
    // rev. 7/2023). The diabetes browse view has named DPP-4s in its blurb
    // since the taxonomy was built; this is the first record to carry one.
    key: 'dpp-4',
    label: 'DPP-4 inhibitor',
    blurb:
      'Tablets that help the body keep its own blood-sugar-lowering hormones working longer. Taken by mouth once a day, and not insulin.',
  },
  {
    // Added 2026-08-26 for Batch 7 (Vyndamax); the label calls tafamidis one of
    // the "transthyretin stabilizers" (DailyMed, rev. 10/2023). It treats a
    // cardiomyopathy but is neither a heart-failure tablet ('arni') nor a
    // blood thinner — it stabilises a misfolding protein.
    key: 'transthyretin-stabilizer',
    label: 'Transthyretin stabilizer',
    blurb:
      'Capsules that hold a blood protein called transthyretin in its correct shape so it stops depositing in the heart muscle.',
  },
];

const BY_KEY = new Map(DRUG_CLASSES.map((c) => [c.key, c]));

/** Human label for a drug-class key (falls back to the raw key). */
export const drugClassLabel = (key: DrugClassKey): string => BY_KEY.get(key)?.label ?? key;

export const isDrugClassKey = (key: string): key is DrugClassKey => BY_KEY.has(key as DrugClassKey);

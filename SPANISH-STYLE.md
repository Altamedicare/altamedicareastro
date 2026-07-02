# Spanish Editorial Style — AltaMedicare (es_US)

One page. These are the editorial decisions behind every Spanish string on
this site. The homepage, future pages, Phase 2 data modules, Vernal, and any
later project follow these instead of rediscovering them. Mechanical
enforcement lives in `src/i18n/glossary.json` + `scripts/translate.js`; this
file records the judgment calls.

## Voice

1. **Formal `usted`, always.** Never `tú`, never `vos`. The audience is
   Medicare beneficiaries 65+; the register is respectful and warm, not stiff.
2. **Plain language, no bureaucratic calque.** Judge the Spanish as if it were
   originally written in Spanish — localize idioms, don't translate
   word-for-word. ("Sin presión, nunca." not "No presión, alguna vez.")
3. **First person singular for Bret's voice** on About/Contact ("Me tomo el
   tiempo…"), first person plural for the practice elsewhere ("Le ayudamos…"),
   mirroring the English master's choice per page.

## Terminology

4. **Pinned terms come from `glossary.json` and nowhere else** — sourced from
   CMS's own Spanish (es.medicare.gov, mailed CMS notices). Never improvise a
   regulated term; if a new one appears, pin it BEFORE translating the page.
5. **Body copy uses the full pinned term** (e.g. *Seguro Suplementario de
   Medicare*, *Período de Inscripción Especial*). Chrome labels (nav, footer,
   buttons) MAY use a shorter form (e.g. *Suplemento de Medicare*) — chrome
   and content are separate translation sources by design, so this is not an
   inconsistency. Decide shorter chrome labels in `locales.ts`, never by
   weakening the glossary pin.
6. **Keep the English program parentheticals**: *Ayuda Adicional (Extra
   Help)*, *(SEP)*, *(IEP)*, *(AEP)*. Beneficiaries must recognize these on
   SSA/CMS paperwork; dropping them is the #1 documented drift failure.
7. **Acronym pattern**: first use = pinned Spanish + English acronym in
   parentheses; acronym alone afterwards ("Durante el AEP puede…").
8. **Brand/product names verbatim, never translated**: AltaMedicare, Bret
   Swope, Medicare, Medicare Advantage, Medigap, SilverSneakers, SunFire,
   IRMAA, CMS, COBRA, TTY, D-SNP, HMO, PPO, MOOP, HSA.

## Numbers, dates, money

9. **Never alter a number, dollar amount, or eligibility rule.** CMS annual
   figures ($2,000 cap, $35 insulin, premiums, year) are `{placeholder}`
   tokens from `src/data/figures.ts` — they must never appear literally in
   translated JSON. Phone is always `{phone}`.
10. **US money format in both languages**: $2,000 / $35 (es_US convention —
    do not switch to 2.000 $).
11. **Dates localize in prose**: "del 15 de octubre al 7 de diciembre" for
    "October 15 through December 7". "el 1 de enero", not "enero 1".

## Punctuation & capitalization

12. **Opening ¿ and ¡ are mandatory** ("¿Tiene preguntas? Hablemos.").
13. **Em dash usage mirrors the English master** (spaced " — " where the
    source uses it); HTML entities in extracted strings stay as entities.
14. **Headings may keep the master's title case** for pinned program terms
    ("Período de Inscripción Anual (AEP)"); ordinary headings read naturally
    in sentence-style Spanish ("Qué puede esperar").

## Interface wording (chrome — `locales.ts`)

15. **CTA verbs are formal imperatives or infinitive labels**, consistent
    site-wide: *Llame al {phone}* (call), *Programar consulta* (schedule),
    *Agendar una llamada* (footer), *Comparar planes* (compare). Don't mix
    "Llamar" and "Llame al" for the same action.
16. **Keep button text short** — Spanish runs 15–30% longer than English;
    prefer a tighter phrasing over a wrapped button.

## Compliance & boundaries

17. **Compliance text is NEVER machine-translated.** It lives in
    `src/i18n/compliance.ts` using CMS's published Spanish wording only.
18. **Deliberately English** (documented boundaries — do not "fix" in review):
    Cal.com booking widget, SunFire plan portal, Pagefind search-modal
    internals, the Medicare News ticker, email addresses, URLs.

## Process

19. **Never hand-edit a generated es file** except to correct a
    validator-flagged term — then the seeding mechanism makes the correction
    authoritative. Content fixes go to the English master; terminology fixes
    go to the glossary.
20. **Every new page**: pin new terms first → translate → `--check` →
    build → QA against this guide → commit. Native-speaker review before
    launch is required — machine rules are necessary, not sufficient (YMYL).

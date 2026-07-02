// src/i18n/compliance.ts — compliance / legal text per locale.
//
// Compliance copy is NEVER machine-translated (playbook §2): the Spanish here
// is the CMS-published wording of the required TPMO multi-plan disclaimer
// (42 CFR §422.2267(e)(41)) as used in CMS's own Spanish beneficiary
// materials, adapted only where Alta's English deviates from the model text
// ("Currently we represent organizations which offer plans in Utah").
// The English value must stay byte-identical to the footer text it replaced.
// Structure ported from vernalmedicareastro src/data/business.ts (M3).

import { DEFAULT_LOCALE } from './locales';

const DISCLAIMERS = {
  en: {
    /** TPMO multi-plan disclaimer — footer, every page, verbatim. */
    footer:
      'We do not offer every plan available in your area. Currently we represent organizations which offer plans in Utah. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Assistance Program (SHIP) to get information on all of your options.',
  },
  es: {
    footer:
      'No ofrecemos todos los planes disponibles en su área. Actualmente representamos organizaciones que ofrecen planes en Utah. Comuníquese con Medicare.gov, 1-800-MEDICARE o su Programa Estatal de Asistencia sobre Seguros de Salud (SHIP) local para obtener información sobre todas sus opciones.',
  },
} as const;

/** Locale-aware compliance text with English fallback. */
export function businessDisclaimers(locale: string): { footer: string } {
  const loc =
    locale !== DEFAULT_LOCALE
      ? DISCLAIMERS[locale as keyof typeof DISCLAIMERS]
      : undefined;
  return { footer: loc?.footer ?? DISCLAIMERS.en.footer };
}

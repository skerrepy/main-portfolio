import type { Locale } from './copy';

const roles = {
  fullStack: { en: 'Full-stack developer', fr: 'Développeur full stack', nl: 'Full-stack developer' },
  lead: { en: 'Lead developer & team manager', fr: 'Développeur principal et responsable d’équipe', nl: 'Lead developer en teamleider' },
  frontend: { en: 'Frontend developer', fr: 'Développeur frontend', nl: 'Frontend developer' },
  tutor: { en: 'Software development tutor', fr: 'Formateur en développement logiciel', nl: 'Docent softwareontwikkeling' },
} satisfies Record<string, Record<Locale, string>>;

export const experience = [
  {
    company: 'Mindosystem',
    role: roles.lead,
    period: { en: 'Feb–Jul 2025', fr: 'Févr.–juil. 2025', nl: 'Feb–jul 2025' },
    detail: {
      en: 'Led a team of designers and developers building a loyalty platform.',
      fr: 'Pilotage d’une équipe de designers et de développeurs chargée d’une plateforme de fidélisation.',
      nl: 'Leidde een team van ontwerpers en developers bij de bouw van een loyaliteitsplatform.',
    },
  },
  { company: 'Wastewize', role: roles.fullStack, period: { en: 'Q1 2025', fr: 'T1 2025', nl: 'K1 2025' } },
  { company: 'Formazone', role: roles.fullStack, period: { en: 'Mid 2024', fr: 'Mi-2024', nl: 'Midden 2024' } },
  { company: 'Bookclick', role: roles.fullStack, period: { en: '2023–mid 2024', fr: '2023–mi-2024', nl: '2023–midden 2024' } },
  { company: 'iSpeakTo', role: roles.frontend, period: { en: 'Summer 2023', fr: 'Été 2023', nl: 'Zomer 2023' } },
  {
    company: 'Preply',
    role: roles.tutor,
    period: { en: 'Apr–Sep 2023', fr: 'Avr.–sept. 2023', nl: 'Apr–sep 2023' },
    detail: {
      en: 'Taught practical coding and problem-solving in one-to-one lessons.',
      fr: 'Cours individuels axés sur la pratique du code et la résolution de problèmes.',
      nl: 'Gaf individuele lessen in praktisch programmeren en probleemoplossing.',
    },
  },
];

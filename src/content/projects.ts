import type { ImageMetadata } from 'astro';
import type { Locale } from './copy';
import ghinita from '../assets/ghinita.png';
import wastewize from '../assets/wastewize.png';
import vaymees from '../assets/vaymees.png';
import mindosystem from '../assets/mindosystem.png';
import formazone from '../assets/formazone.png';
import bookclick from '../assets/bookclick.png';
import ispeakto from '../assets/ispeakto.png';

export interface Project {
  slug: string;
  name: string;
  category: 'software' | 'data';
  description: Record<Locale, string>;
  details: Record<Locale, string>;
  stack: string[];
  image?: ImageMetadata;
  website?: string;
  source?: string;
  app?: string;
}

export const projects: Project[] = [
  {
    slug: 'ghinita-construction',
    name: 'Ghinita Construction',
    category: 'software',
    description: {
      en: 'Multilingual website for a construction company, with project case studies, optimized photography and a localized enquiry form.',
      fr: 'Site multilingue pour une entreprise de construction, avec études de cas, photos optimisées et formulaire de contact traduit.',
      nl: 'Meertalige website voor een bouwbedrijf, met projectbeschrijvingen, geoptimaliseerde foto’s en een vertaald contactformulier.',
    },
    details: {
      en: 'The site presents construction and renovation services and documents a villa project in France through a photo gallery. Visitors can browse in French, English, Romanian or Dutch and send an enquiry in their chosen language.',
      fr: 'Le site présente les services de construction et de rénovation ainsi qu’une villa en France, illustrée par une galerie de photos. Les visiteurs peuvent consulter le site et envoyer une demande en français, en anglais, en roumain ou en néerlandais.',
      nl: 'De site toont bouw- en renovatiediensten en documenteert een villa in Frankrijk met een fotogalerij. Bezoekers kunnen de site bekijken en een aanvraag sturen in het Frans, Engels, Roemeens of Nederlands.',
    },
    stack: ['Astro', 'TypeScript', 'Cloudflare'],
    image: ghinita,
  },
  {
    slug: 'open-cx-mvp',
    name: 'Open.cx MVP',
    category: 'data',
    description: {
      en: 'AI-assisted customer support prototype with an embeddable chat widget, a ticket dashboard and reporting on support activity.',
      fr: 'Prototype de support client assisté par IA, avec widget de chat intégrable, tableau de bord des tickets et suivi de l’activité.',
      nl: 'Prototype voor klantondersteuning met AI, een insluitbare chatwidget, een ticketdashboard en rapportage over supportactiviteiten.',
    },
    details: {
      en: 'The prototype connects three parts of the support workflow. Customers start a conversation in the embedded widget, agents work through tickets in a dashboard, and administrators review support activity. AI assists with drafting replies using the business context.',
      fr: 'Le prototype relie trois étapes du support. Les clients lancent une conversation dans le widget intégré, les agents traitent les tickets dans un tableau de bord et les administrateurs suivent l’activité. L’IA aide à rédiger les réponses en tenant compte du contexte de l’entreprise.',
      nl: 'Het prototype verbindt drie stappen van de ondersteuning. Klanten starten een gesprek in de ingebouwde widget, medewerkers behandelen tickets in een dashboard en beheerders volgen de activiteit. AI helpt antwoorden op te stellen met de bedrijfscontext.',
    },
    stack: ['TypeScript', 'Next.js', 'Supabase'],
    source: 'https://github.com/skerrepy/open.cx-mvp',
  },
  {
    slug: 'intotunis',
    name: 'IntoTunis',
    category: 'data',
    description: {
      en: 'A transit data pipeline that extracts and normalizes data from multiple sources and publishes it in real time.',
      fr: 'Un pipeline qui extrait et normalise des données de transport en commun issues de plusieurs sources, puis les diffuse en temps réel.',
      nl: 'Een datapijplijn die openbaarvervoergegevens uit meerdere bronnen haalt, normaliseert en in realtime publiceert.',
    },
    details: {
      en: 'IntoTunis extracts station records, suburban rail routes and bus timetables from multiple sources. Python scripts turn inputs such as CSV files into consistently structured JSON datasets. The pipeline delivers the normalized data through a real-time transit feed.',
      fr: 'IntoTunis extrait des données sur les stations, les lignes ferroviaires de banlieue et les horaires de bus à partir de plusieurs sources. Des scripts Python transforment notamment les fichiers CSV en jeux de données JSON de structure cohérente. Le pipeline diffuse ensuite les données normalisées dans un flux de transport en temps réel.',
      nl: 'IntoTunis haalt gegevens over haltes, voorstadsspoorlijnen en busdienstregelingen uit meerdere bronnen. Python-scripts zetten bronbestanden zoals CSV om in JSON-datasets met een consistente structuur. De datapijplijn levert de genormaliseerde gegevens via een realtime feed voor het openbaar vervoer.',
    },
    stack: ['Python', 'CSV', 'JSON'],
  },
  {
    slug: 'vaymees',
    name: 'Vaymees',
    category: 'data',
    description: {
      en: 'Restaurant platform with QR menus, analytics dashboards and tools for managing day-to-day operations.',
      fr: 'Plateforme pour les restaurants avec menus QR, tableaux de bord et outils de gestion quotidienne.',
      nl: 'Platform voor restaurants met QR-menu’s, dashboards en tools voor het dagelijkse beheer.',
    },
    details: {
      en: 'Diners open the menu on their phones by scanning a QR code. Restaurant teams manage the digital menu and use an analytics dashboard to review activity alongside their day-to-day management tools.',
      fr: 'Les clients consultent le menu sur leur téléphone en scannant un code QR. Les équipes gèrent le menu numérique et suivent l’activité dans un tableau de bord, aux côtés de leurs outils de gestion quotidienne.',
      nl: 'Gasten openen het menu op hun telefoon via een QR-code. Restaurantteams beheren het digitale menu en volgen de activiteit in een dashboard, naast hun tools voor het dagelijkse beheer.',
    },
    stack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL'],
    image: vaymees,
    website: 'https://www.vaymees.com/tunis/la-marsa/restaurant/Pregusta--3649',
  },
  {
    slug: 'wastewize',
    name: 'Wastewize',
    category: 'software',
    description: {
      en: 'Internal ERP for waste management, covering inventory, client records and automated reporting.',
      fr: 'ERP interne pour la gestion des déchets, avec suivi des stocks, dossiers clients et rapports automatisés.',
      nl: 'Intern ERP voor afvalbeheer, met voorraadbeheer, klantdossiers en geautomatiseerde rapportage.',
    },
    details: {
      en: 'The internal ERP brings inventory and client records into one system for a waste management business. Automated reporting gives staff a way to review operational information alongside the records they maintain.',
      fr: 'L’ERP interne centralise les stocks et les dossiers clients d’une entreprise de gestion des déchets. Les rapports automatisés permettent aux équipes de consulter les informations opérationnelles à côté des dossiers qu’elles tiennent à jour.',
      nl: 'Het interne ERP brengt voorraad en klantdossiers van een afvalbeheerbedrijf samen. Met automatische rapporten kunnen medewerkers operationele informatie bekijken naast de dossiers die ze bijhouden.',
    },
    stack: ['Next.js', 'PostgreSQL', 'AWS S3'],
    image: wastewize,
    website: 'https://wastewize.fr/',
  },
  {
    slug: 'mindosystem',
    name: 'Mindosystem',
    category: 'software',
    description: {
      en: 'Customer loyalty platform with web and mobile apps, backend services, subscriptions and rewards.',
      fr: 'Plateforme de fidélisation avec applications web et mobiles, services backend, abonnements et récompenses.',
      nl: 'Loyaliteitsplatform met web- en mobiele apps, backenddiensten, abonnementen en beloningen.',
    },
    details: {
      en: 'The work covered a web app, backend services and mobile apps for a customer loyalty platform. I led the team building the platform, which lets businesses offer subscriptions and rewards.',
      fr: 'Le projet couvre une application web, des services backend et des applications mobiles. J’ai dirigé l’équipe chargée de cette plateforme, qui permet aux entreprises de proposer des abonnements et des récompenses.',
      nl: 'Het project omvat een webapp, backenddiensten en mobiele apps. Ik leidde het team dat het platform bouwde waarmee bedrijven abonnementen en beloningen kunnen aanbieden.',
    },
    stack: ['Next.js', 'Flutter', 'Express', 'Stripe'],
    image: mindosystem,
    website: 'https://www.mindosystem.com/',
    app: 'https://play.google.com/store/apps/details?id=com.mindosystem&hl=en',
  },
  {
    slug: 'formazone',
    name: 'Formazone',
    category: 'software',
    description: {
      en: 'Education platform with course management, interactive quizzes and administration tools for bootcamps.',
      fr: 'Plateforme pédagogique avec gestion des cours, quiz interactifs et outils administratifs pour les formations intensives.',
      nl: 'Onderwijsplatform met cursusbeheer, interactieve quizzen en administratietools voor bootcamps.',
    },
    details: {
      en: 'Formazone combines the learner experience with the administrative side of running a bootcamp. Learners use interactive quizzes, while staff manage courses and training operations through a back office.',
      fr: 'Formazone réunit le parcours des apprenants et l’administration des formations intensives. Les apprenants utilisent des quiz interactifs, tandis que l’équipe gère les cours et les opérations depuis un espace d’administration.',
      nl: 'Formazone brengt de leeromgeving en het beheer van bootcamps samen. Cursisten maken interactieve quizzen, terwijl medewerkers cursussen en opleidingen beheren in een administratieve omgeving.',
    },
    stack: ['Next.js', 'AWS S3', 'Stripe'],
    image: formazone,
    website: 'https://www.formazone.fr/',
  },
  {
    slug: 'bookclick',
    name: 'Bookclick',
    category: 'software',
    description: {
      en: 'ERP that automates workflows and client management for moving, cleaning and construction companies.',
      fr: 'ERP qui automatise les processus et la gestion des clients pour les entreprises de déménagement, de nettoyage et de construction.',
      nl: 'ERP dat werkprocessen en klantenbeheer automatiseert voor verhuis-, schoonmaak- en bouwbedrijven.',
    },
    details: {
      en: 'The ERP supports service businesses that handle client records alongside operational tasks. The work focused on automating manual steps and bringing workflow and client management into the same application.',
      fr: 'L’ERP aide les entreprises de services à gérer les dossiers clients et les tâches opérationnelles. Le travail a porté sur l’automatisation des étapes manuelles et le regroupement de ces activités dans une même application.',
      nl: 'Het ERP helpt dienstverleners klantdossiers en operationele taken te beheren. De nadruk lag op het automatiseren van handmatige stappen en het samenbrengen van werkprocessen en klantenbeheer in één applicatie.',
    },
    stack: ['React', 'AWS', 'MongoDB'],
    image: bookclick,
  },
  {
    slug: 'ispeakto',
    name: 'iSpeakTo',
    category: 'software',
    description: {
      en: 'Language-learning platform with interactive games and a component library documented in Storybook.',
      fr: 'Plateforme d’apprentissage des langues avec jeux interactifs et bibliothèque de composants documentée dans Storybook.',
      nl: 'Taalplatform met interactieve spellen en een componentenbibliotheek die is gedocumenteerd in Storybook.',
    },
    details: {
      en: 'I worked on interactive language games and a shared component library. Storybook documents the interface components so they can be reviewed and reused across the learning experience.',
      fr: 'J’ai travaillé sur des jeux de langue interactifs et une bibliothèque de composants partagée. Storybook documente les composants de l’interface pour faciliter leur examen et leur réutilisation dans le parcours d’apprentissage.',
      nl: 'Ik werkte aan interactieve taalspellen en een gedeelde componentenbibliotheek. Storybook documenteert de interfacecomponenten zodat ze kunnen worden beoordeeld en hergebruikt in de leeromgeving.',
    },
    stack: ['Next.js', 'Material UI', 'Storybook'],
    image: ispeakto,
    website: 'https://www.ispeakto.com/',
  },
];

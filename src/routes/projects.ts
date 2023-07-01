import type { Project } from '../models/project';
import { Tag } from '../models/tag';

export const ProjectYabat: Project = {
  title: 'YABAT',
  description: `YABAT is een web applicatie die het makkelijk maakt een logboek van inkomsten
    en uitgaven bij te houden. Je kan ook maandelijkse uitgaven en inkomsten vergelijken
    opgedeeld per categorie.`,
  tags: [
    Tag.TS,
    Tag.Firebase,
    Tag.XState,
    Tag.Lit,
    Tag.ChartJS,
    Tag.Vite,
    Tag.Node,
    Tag.HTML,
    Tag.CSS,
  ],
  link: 'https://yabat.be',
  images: [
    './screenshots/yabat/logo.png',
    './screenshots/yabat/home.png',
    './screenshots/yabat/overview.png',
    './screenshots/yabat/distribution.png',
    './screenshots/yabat/compare.png',
  ],
  github: 'https://github.com/BelgianNoise/YABAT',
};

export const ProjectContentRequest: Project = {
  title: 'Plex Content Request',
  description: `Een website waarop gebruikers films en series kunnen aanvragen die ze graag
    zouden willen zien op mijn Plex server. De website ondersteunt routing, authenticatie,
    authorisatie, en i18n.`,
  tags: [
    Tag.React,
    Tag.Redux,
    Tag.TS,
    Tag.Firebase,
    Tag.Node,
    Tag.HTML,
    Tag.CSS,
  ],
  link: 'https://nasaj.be',
  images: [
    './screenshots/content-request/logo.png',
    './screenshots/content-request/home.png',
    './screenshots/content-request/overview.png',
    './screenshots/content-request/login.png',
  ],
  github: 'https://github.com/BelgianNoise/react-plex-content-request',
};

export const ProjectColruytProductScraper: Project = {
  title: 'Colruyt Product Scraper',
  description: `Een tool geschreven in Go om alle producten van Colruyt
  op te halen via hun API om daarna een overzicht te kunnen maken van alle
  prijsveranderingen. Optimaal komt hier later nog een website bij om de prijs
  geschiedenis van een product te kunnen bekijken, en worden er wekelijks mails
  verstuurd met de interessantste prijsveranderingen.`,
  tags: [
    Tag.GO,
    Tag.PostgreSQL,
    Tag.GCP,
    Tag.GithubActions,
  ],
  link: undefined,
  images: [
    './screenshots/colruyt-product-scraper/logo.png',
  ],
  github: 'https://github.com/BelgianNoise/colruyt-products-scraper',
};

export const ProjectWaarStreamen: Project = {
  title: 'Waar Streamen',
  description: `Een website waarop een gebruiker kan zoeken op welk streaming
  platform een bepaalde film of serie beschikbaar is. De website ondersteunt
  grote platformen van België en de grote wereldwijde platformen. De data wordt
  opgehaald via gebruik van APIs en web scraping.`,
  tags: [
    Tag.Svelte,
    Tag.TS,
    Tag.Node,
    Tag.Vercel,
    Tag.GCP,
    Tag.GithubActions,
    Tag.HTML,
    Tag.CSS,
  ],
  link: 'https://waar-streamen.nasaj.be',
  images: [
    './screenshots/waar-streamen/logo.png',
  ],
  github: 'https://github.com/BelgianNoise/waar-streamen',
};

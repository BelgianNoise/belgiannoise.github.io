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


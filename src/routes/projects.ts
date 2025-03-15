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
  prijsveranderingen.`,
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

export const ProjectColruytPriceHistory: Project = {
  title: 'Colruyt Price History',
  description: `Een website waarop een gebruiker de prijsgeschiedenis van
  alle producten van Colruyt kan bekijken. Op de startpagina is er ook
  een lijst te zien met de grootste prijsveranderingen van de dag.`,
  tags: [
    Tag.Svelte,
    Tag.SSR,
    Tag.PostgreSQL,
    Tag.ChartJS,
    Tag.TS,
    Tag.GCP,
    Tag.Node,
    Tag.Vercel,
    Tag.HTML,
    Tag.CSS,
  ],
  link: 'https://colruyt-prijzen.nasaj.be/',
  images: [
    './screenshots/colruyt-price-history/product.png',
    './screenshots/colruyt-price-history/home.png',
    './screenshots/colruyt-price-history/search.png',
  ],
  github: 'https://github.com/BelgianNoise/colruyt-price-history',
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
    './screenshots/waar-streamen/home.png',
    './screenshots/waar-streamen/gezoekt.png',
  ],
  github: 'https://github.com/BelgianNoise/waar-streamen',
};

export const ProjectMyPortfolio: Project = {
  title: 'My Portfolio',
  description: `Mijn portfolio, de huidige website :). Gebouwd via het Mobile First principe.`,
  tags: [
    Tag.Svelte,
    Tag.TS,
    Tag.Node,
    Tag.CSS,
    Tag.HTML,
  ],
  link: 'https://belgiannoise.github.io/',
  images: [],
  github: 'https://github.com/BelgianNoise/belgiannoise.github.io',
};

export const ProjectBingo: Project = {
  title: 'Bingo',
  description: 'Maak, beheer, speel en deel je eigen Bingo spellen.',
  tags: [
    Tag.VUE,
    Tag.TS,
    Tag.Firebase,
    Tag.GithubActions,
    Tag.Node,
    Tag.HTML,
    Tag.CSS,
  ],
  link: 'https://bingo.nasaj.be',
  images: [
    './screenshots/bingo/home.png',
    './screenshots/bingo/card.png',
    './screenshots/bingo/pricing.png',
    './screenshots/bingo/game.png',
    './screenshots/bingo/create.png',
  ],
  github: 'https://github.com/BelgianNoise/bingo-card-generator',
}

export const ProjectFietsApp: Project = {
  title: 'FietsApp [WIP]',
  description: `Een app voor fietsenmakers en hun klanten om makkelijk een logboek bij te houden
    van hun fietsen. Clerk.js wordt gebruikt voor authenticatie en authorisatie. Een klant kiest welke
    fietsenmakers gij toegang geeft tot welke fietsen. De fietsenmaker kan dan een onderhoud loggen.`,
  tags: [
    Tag.NEXTJS,
    Tag.CLERK,
    Tag.React,
    Tag.Vercel,
    Tag.DRIZZLE,
    Tag.SSR,
    Tag.TS,
    Tag.Node,
    Tag.HTML,
    Tag.CSS,
  ],
  link: 'https://fietsapp.vercel.app/',
  images: [
    './screenshots/fietsapp/auth.png',
    './screenshots/fietsapp/loader.png',
    './screenshots/fietsapp/clients.png',
    './screenshots/fietsapp/bike.png',
    './screenshots/fietsapp/timeline.png',
    './screenshots/fietsapp/details.png',
  ],
  github: 'https://github.com/BelgianNoise/fietsapp',
}

export const ProjectDLUtils: Project = {
  title: 'dl-utils',
  description: `Tools die me helpen bij het downloaden van media, bestaande uit 3 delen:
    een chrome extensie die download knoppen toevoegd op bepaalde paginas,
    een kleine REST API die de download requests opvangt en opslaat in een databank en
    een tool die de databank monitort en de downloads uitvoert.`,
  tags: [
    Tag.PYTHON,
    Tag.DRM,
    Tag.TS,
    Tag.CHROME,
    Tag.PostgreSQL,
    Tag.React,
    Tag.EXPRESS,
    Tag.GCP,
  ],
  link: undefined,
  images: [],
  github: 'https://github.com/BelgianNoise/dl-utils',
}

export const ProjectAikidoGithub: Project = {
  title: 'Aikido Github',
  description: `Een chrome extensie die op github een kort overzicht geeeft
    van aikido.dev vulnerabilities.`,
  tags: [
    Tag.TS,
    Tag.CHROME,
    Tag.React,
  ],
  link: 'https://chromewebstore.google.com/detail/aikido-github-integration/cgnllcabmaaodmnoddjohdaimhabbadg',
  images: [
    './screenshots/aikido-github/screen.png'
  ],
  github: 'https://github.com/BelgianNoise/aikido-github-chrome-extension',
}

export const ProjectGoChiSQLiteJWTStarter: Project = {
  title: 'Go Chi SQLite JWT Starter project',
  description: `Een robust starter project gebouwd met go-chi router, SQLite database en JWT authenticatie.`,
  tags: [
    Tag.GO,
    Tag.SQLITE,
    Tag.JWT_AUTHENTICATION,
  ],
  link: undefined,
  images: [],
  github: 'https://github.com/BelgianNoise/go-chi-sqlite-jwt-starter',
}

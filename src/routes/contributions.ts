import type { Project } from '../models/project';
import { Tag } from '../models/tag';

export const ContributionCSS: Project = {
  title: 'Community Solid Server',
  description: `Deze open source Solid server heb ik onder andere voorzien
  van een Redis based read-write locker en een robust data
  storage quota systeem.`,
  tags: [
    Tag.TS,
    Tag.Node,
    Tag.Redis,
  ],
  images: [
    './screenshots/css/logo.png',
  ],
  link: 'https://github.com/CommunitySolidServer/CommunitySolidServer',
  github: undefined,
};

export const ContributionHandlersjs: Project = {
  title: 'Handlers.js',
  description: `Handlers.js is een open source framework om modulaire HTTP
  servers te bouwen. Ik ben/was dicht betrokken bij het design, 
  de ontwikkeling en het onderhoud van dit project.`,
  tags: [
    Tag.TS,
    Tag.Node,
  ],
  images: [],
  link: 'https://github.com/digita-ai/handlersjs',
  github: undefined,
};

import type { Tag } from "./tag";

export interface Project {
  title: string;
  images: string[];
  tags: Tag[];
  description: string | undefined;
  link: string | undefined;
  github: string | undefined;
}

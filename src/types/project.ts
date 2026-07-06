import type { StaticImageData } from "next/image";

export type ProjectCategory = "web" | "mobile" | "games" | "others";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string | StaticImageData;
  technologies: React.ElementType[];
  github?: string;
  demo?: string;
};

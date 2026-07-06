export type ProjectCategory = "web" | "mobile" | "games" | "others";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  technologies: React.ElementType[];
  github?: string;
  demo?: string;
};

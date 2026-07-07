import { Project } from "@/types/project";

import { Locale } from "@/lib/getDictionary";

import { projectsEN } from "./projects.en";
import { projectsPT } from "./projects.pt";
import { projectConfig } from "./projects.config";

export const getProjects = (locale: Locale): Project[] => {
  const translations = locale === "en" ? projectsEN : projectsPT;

  return projectConfig.map((project) => {
    const translation = translations.find((item) => item.id === project.id);

    return {
      ...project,
      title: translation?.title ?? "",
      description: translation?.description ?? "",
    };
  });
};

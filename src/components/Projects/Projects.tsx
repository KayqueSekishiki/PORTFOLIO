"use client";

import { useMemo, useState } from "react";
import { FolderKanban } from "lucide-react";

import useLocale from "@/hooks/useLocale";
import { getDictionary } from "@/lib/getDictionary";

import { getProjects } from "@/data/projects/projects";

import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectTabs, { ProjectFilter } from "./ProjectTabs/ProjectTabs";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

import styles from "./Projects.module.scss";

const INITIAL_VISIBLE = 3;

const Projects = () => {
  const locale = useLocale();
  const dict = getDictionary(locale);

  const projects = getProjects(locale);

  const [selectedCategory, setSelectedCategory] =
    useState<ProjectFilter>("all");

  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory, projects]);

  const visibleProjects = useMemo(() => {
    if (filteredProjects.length <= INITIAL_VISIBLE) {
      return filteredProjects;
    }

    return showAll
      ? filteredProjects
      : filteredProjects.slice(0, INITIAL_VISIBLE);
  }, [filteredProjects, showAll]);

  const hasMore = filteredProjects.length > INITIAL_VISIBLE;

  const handleChangeCategory = (value: ProjectFilter) => {
    setSelectedCategory(value);
    setShowAll(false);
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>
              <FolderKanban size={40} />
              {dict.projects.title}
            </h2>

            <p className={styles.subtitle}>{dict.projects.subtitle}</p>
          </div>

          <ProjectTabs
            selectedCategory={selectedCategory}
            onSelectCategory={handleChangeCategory}
            labels={dict.projects.tabs}
          />
        </div>

        <div key={selectedCategory} className={styles.grid}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {hasMore && (
          <div className={styles.more}>
            <PrimaryButton
              variant="button"
              label={showAll ? dict.projects.showLess : dict.projects.showMore}
              onClick={() => setShowAll((prev) => !prev)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

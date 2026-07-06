"use client";

import { useMemo, useState } from "react";
import { FolderKanban } from "lucide-react";
import styles from "./Projects.module.scss";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectTabs, { ProjectFilter } from "./ProjectTabs/ProjectTabs";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

const INITIAL_VISIBLE = 3;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectFilter>("all");

  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const visibleProjects = useMemo(() => {
    const base = filteredProjects;

    if (base.length <= INITIAL_VISIBLE) return base;

    return showAll ? base : base.slice(0, INITIAL_VISIBLE);
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
              PROJETOS
            </h2>

            <p className={styles.subtitle}>
              Curadoria dos meus melhores trabalhos técnicos.
            </p>
          </div>

          <ProjectTabs
            selectedCategory={selectedCategory}
            onSelectCategory={handleChangeCategory}
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
              label={showAll ? "Mostrar menos" : "Mostrar mais"}
              onClick={() => setShowAll((prev) => !prev)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

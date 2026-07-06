"use client";

import type { CSSProperties } from "react";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import styles from "./ProjectCard.module.scss";

import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

const categoryColors = {
  web: "var(--neon-purple)",
  mobile: "var(--neon-amber)",
  games: "var(--neon-lime)",
  others: "var(--neon-orange)",
} as const;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, image, technologies, github, demo, category } =
    project;

  const cardStyle = {
    "--accent-color": categoryColors[category],
  } as CSSProperties;

  return (
    <article className={styles.card} style={cardStyle}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <div className={styles.technologies}>
            {technologies.map((Icon, index) => (
              <Icon key={index} className={styles.icon} size={18} />
            ))}
          </div>

          <div className={styles.links}>
            {demo && (
              <Link
                className={styles.link}
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </Link>
            )}

            {github && (
              <Link
                className={styles.link}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

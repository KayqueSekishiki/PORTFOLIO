"use client";

import { Career } from "@/types/career";
import styles from "./TimelineItem.module.scss";
import { CSSProperties } from "react";

type Props = {
  career: Career;
  reverse?: boolean;
};

const colorMap = {
  cyan: "var(--neon-cyan)",
  purple: "var(--neon-purple)",
  pink: "var(--neon-pink)",
  lime: "var(--neon-lime)",
  amber: "var(--neon-amber)",
} as const;

type AccentVar = {
  "--accent": string;
};

export default function TimelineItem({ career, reverse = false }: Props) {
  const color = colorMap[career.color] ?? colorMap.cyan;

  const style: CSSProperties & AccentVar = {
    "--accent": color,
  };

  return (
    <article
      className={`${styles.item} ${reverse ? styles.reverse : ""}`}
      style={style}
    >
      <div className={styles.empty} />

      <div className={styles.content}>
        <span className={styles.dot} />

        <div className={styles.card}>
          <span className={styles.period}>{career.period}</span>

          <h3 className={styles.title}>{career.title}</h3>

          <h4 className={styles.company}>{career.company}</h4>

          <p className={styles.description}>{career.description}</p>

          <div className={styles.tags}>
            {career.technologies.map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

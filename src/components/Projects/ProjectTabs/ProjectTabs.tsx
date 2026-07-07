"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { ProjectCategory } from "@/types/project";

import styles from "./ProjectTabs.module.scss";

export type ProjectFilter = ProjectCategory | "all";

type ProjectTabsProps = {
  selectedCategory: ProjectFilter;
  onSelectCategory: (category: ProjectFilter) => void;
  labels: {
    all: string;
    web: string;
    mobile: string;
    games: string;
    others: string;
  };
};

type Indicator = {
  left: number;
  width: number;
  color: string;
};

const getTabs = (
  labels: ProjectTabsProps["labels"],
): {
  label: string;
  value: ProjectFilter;
  color: string;
}[] => [
  {
    label: labels.all,
    value: "all",
    color: "var(--neon-cyan)",
  },
  {
    label: labels.web,
    value: "web",
    color: "var(--neon-purple)",
  },
  {
    label: labels.mobile,
    value: "mobile",
    color: "var(--neon-amber)",
  },
  {
    label: labels.games,
    value: "games",
    color: "var(--neon-lime)",
  },
  {
    label: labels.others,
    value: "others",
    color: "var(--neon-orange)",
  },
];

const ProjectTabs = ({
  selectedCategory,
  onSelectCategory,
  labels,
}: ProjectTabsProps) => {
  const tabs = useMemo(() => getTabs(labels), [labels]);

  const containerRef = useRef<HTMLDivElement>(null);

  const buttonRefs = useRef<Partial<Record<ProjectFilter, HTMLButtonElement>>>(
    {},
  );

  const [indicator, setIndicator] = useState<Indicator>({
    left: 0,
    width: 0,
    color: "var(--neon-cyan)",
  });

  const firstRender = useRef(true);

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    const button = buttonRefs.current[selectedCategory];

    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const color =
      tabs.find((tab) => tab.value === selectedCategory)?.color ??
      "var(--neon-cyan)";

    setIndicator({
      left: buttonRect.left - containerRect.left + container.scrollLeft,
      width: buttonRect.width,
      color,
    });

    container.scrollTo({
      left:
        button.offsetLeft - container.clientWidth / 2 + button.clientWidth / 2,
      behavior: firstRender.current ? "instant" : "smooth",
    });

    firstRender.current = false;
  }, [selectedCategory, tabs]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scroll}>
        <div className={styles.scrollLineLeft} />
        <span>SCROLL_SIDE</span>
        <div className={styles.scrollLineRight} />
      </div>

      <div ref={containerRef} className={styles.tabs}>
        <span
          className={styles.indicator}
          style={{
            left: indicator.left,
            width: indicator.width,
            background: indicator.color,
            boxShadow: `0 0 12px ${indicator.color}`,
          }}
        />

        {tabs.map(({ label, value }) => (
          <button
            key={value}
            ref={(element) => {
              if (element) {
                buttonRefs.current[value] = element;
              }
            }}
            type="button"
            className={`${styles.tab} ${styles[value]} ${
              selectedCategory === value ? styles.active : ""
            }`}
            onClick={() => onSelectCategory(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectTabs;

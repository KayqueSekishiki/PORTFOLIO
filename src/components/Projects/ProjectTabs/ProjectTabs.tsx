"use client";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "./ProjectTabs.module.scss";
import { ProjectCategory } from "@/types/project";
export type ProjectFilter = ProjectCategory | "all";

type ProjectTabsProps = {
  selectedCategory: ProjectFilter;
  onSelectCategory: (category: ProjectFilter) => void;
};

type Indicator = {
  left: number;
  width: number;
  color: string;
};

const tabs: {
  label: string;
  value: ProjectFilter;
  color: string;
}[] = [
  {
    label: "TODOS",
    value: "all",
    color: "var(--neon-cyan)",
  },
  {
    label: "WEB",
    value: "web",
    color: "var(--neon-purple)",
  },
  {
    label: "MOBILE",
    value: "mobile",
    color: "var(--neon-amber)",
  },
  {
    label: "GAMES",
    value: "games",
    color: "var(--neon-lime)",
  },
  {
    label: "OUTROS",
    value: "others",
    color: "var(--neon-orange)",
  },
];

const ProjectTabs = ({
  selectedCategory,
  onSelectCategory,
}: ProjectTabsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const buttonRefs = useRef<Partial<Record<ProjectFilter, HTMLButtonElement>>>(
    {},
  );

  const [indicator, setIndicator] = useState<Indicator>({
    left: 0,
    width: 0,
    color: "var(--neon-cyan)",
  });

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

    button.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selectedCategory]);

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

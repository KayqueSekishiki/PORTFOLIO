import { Career } from "@/types/career";
import styles from "./TimelineItem.module.scss";

type Props = {
  career: Career;
  reverse?: boolean;
};

const colorMap = {
  primary: {
    dot: styles.primaryDot,
    text: styles.primaryText,
    tag: styles.primaryTag,
    card: styles.primaryCard,
  },
  secondary: {
    dot: styles.secondaryDot,
    text: styles.secondaryText,
    tag: styles.secondaryTag,
    card: styles.secondaryCard,
  },
  tertiary: {
    dot: styles.tertiaryDot,
    text: styles.tertiaryText,
    tag: styles.tertiaryTag,
    card: styles.tertiaryCard,
  },
  quaternary: {
    dot: styles.quaternaryDot,
    text: styles.quaternaryText,
    tag: styles.quaternaryTag,
    card: styles.quaternaryCard,
  },
  quinary: {
    dot: styles.quinaryDot,
    text: styles.quinaryText,
    tag: styles.quinaryTag,
    card: styles.quinaryCard,
  },
} as const;

const TimelineItem = ({ career, reverse = false }: Props) => {
  const color = colorMap[career.color];

  return (
    <article className={`${styles.item} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.empty} />

      <div className={styles.content}>
        <span className={`${styles.dot} ${color.dot}`} />

        <div className={`${styles.card} ${color.card}`}>
          <span className={`${styles.period} ${color.text}`}>
            {career.period}
          </span>

          <h3>{career.title}</h3>

          <h4 className={color.text}>{career.company}</h4>
          <p>{career.description}</p>
          <div className={styles.tags}>
            {career.technologies.map((tech) => (
              <span key={tech} className={`${styles.tag} ${color.tag}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TimelineItem;

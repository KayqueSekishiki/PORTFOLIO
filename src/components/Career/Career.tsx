import { BriefcaseBusiness } from "lucide-react";
import styles from "./Career.module.scss";
import { careers } from "@/data/career";
import TimelineItem from "../TimelineItem/TimelineItem";

const Career = () => {
  return (
    <section className={styles.career} id="career">
      <div className={styles.container}>
        <h2 className={styles.title}>
          <BriefcaseBusiness size={40} />
          Carreira
        </h2>

        <div className={styles.timeline}>
          <div className={styles.line} />

          {careers.map((item, index) => (
            <TimelineItem
              key={item.period}
              career={item}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;

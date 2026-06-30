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
          CARREIRA
        </h2>

        <div className={styles.timeline}>
          <div className={styles.line} />

          {careers.map((career, index) => (
            <TimelineItem
              key={career.period}
              career={career}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;

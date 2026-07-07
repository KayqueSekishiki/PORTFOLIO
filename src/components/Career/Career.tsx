"use client";

import { BriefcaseBusiness } from "lucide-react";

import { getCareers } from "@/data/career/career";
import useLocale from "@/hooks/useLocale";
import { getDictionary } from "@/lib/getDictionary";

import TimelineItem from "../TimelineItem/TimelineItem";

import styles from "./Career.module.scss";

const Career = () => {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const careers = getCareers(locale);

  return (
    <section className={styles.career} id="career">
      <div className={styles.container}>
        <h2 className={styles.title}>
          <BriefcaseBusiness size={40} />
          {dict.career.title}
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

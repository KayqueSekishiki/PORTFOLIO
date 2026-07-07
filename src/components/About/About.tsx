"use client";

import { useState } from "react";
import Image from "next/image";
import { PersonStanding } from "lucide-react";

import { technologies } from "@/data/technologies";
import useLocale from "@/hooks/useLocale";
import { getDictionary } from "@/lib/getDictionary";

import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

import styles from "./About.module.scss";

const About = () => {
  const [showAll, setShowAll] = useState(false);

  const locale = useLocale();
  const dict = getDictionary(locale);

  const visibleTechnologies = showAll ? technologies : technologies.slice(0, 8);

  const profileSRC = "https://avatars.githubusercontent.com/u/104032451?v=4";

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageFrame}>
            <span className={styles.cornerTop} />
            <span className={styles.cornerBottom} />

            <Image
              src={profileSRC}
              alt="Foto de Kayque"
              width={400}
              height={500}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            <PersonStanding size={40} />
            {dict.about.title}
          </h2>

          <p className={styles.description}>
            {dict.about.description}

            <span className={styles.highlight}>{dict.about.skills}</span>
          </p>

          <div className={styles.skills}>
            {visibleTechnologies.map(({ icon, label, href }) => (
              <SecondaryButton
                key={label}
                href={href}
                label={label}
                icon={icon}
              />
            ))}
          </div>

          {technologies.length > 8 && (
            <div className={styles.buttonWrapper}>
              <PrimaryButton
                variant="button"
                label={showAll ? dict.about.showLess : dict.about.showMore}
                onClick={() => setShowAll((prev) => !prev)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

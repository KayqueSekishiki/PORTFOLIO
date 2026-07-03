"use client";
import { useState } from "react";
import Image from "next/image";
import { PersonStanding } from "lucide-react";
import styles from "./About.module.scss";
import { technologies } from "@/data/technologies";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const About = () => {
  const [showAll, setShowAll] = useState(false);
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
            SOBRE_MIM
          </h2>

          <p className={styles.description}>
            Engenheiro de software com experiência em aplicações web. trabalho
            principalmente com React, Typescript e seus frameworks construindo
            soluções modernas, escalaveis de alta qualidade. Tenho interresse em
            desenvolvimento web fullstack, jogos, aplicativos mobile e QA-
            quality Assurancy .
            <span className={styles.highlight}>
              Algumas das minhas habilidades:
            </span>
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
                label={showAll ? "Mostrar menos" : "Mostrar mais"}
                onClick={() => setShowAll(!showAll)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";
import { LucideTerminal } from "lucide-react";

import useLocale from "@/hooks/useLocale";
import { getDictionary } from "@/lib/getDictionary";

import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

import styles from "./Hero.module.scss";

export default function Hero() {
  const locale = useLocale();
  const dict = getDictionary(locale);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.subtitle}>npm install curriculum-vitae</span>

        <h2>
          {dict.hero.greeting}
          <span>Kayque Sekishiki</span>

          <small>
            {dict.hero.role} <strong>{dict.hero.profession}</strong>
          </small>
        </h2>

        <p>{dict.hero.description}</p>

        <div className={styles.buttons}>
          <PrimaryButton
            variant="link"
            href="#projects"
            label={dict.hero.projectsButton}
          />

          <SecondaryButton href="#contact" label={dict.hero.contactButton} />
        </div>
      </div>

      <div className={styles.animation}>
        <div className={styles.square1} />
        <div className={styles.square2} />
        <div className={styles.square3} />

        <div className={styles.icon}>
          <LucideTerminal size={120} strokeWidth={5} />
        </div>
      </div>

      <div className={styles.scroll}>
        <span>SCROLL_DOWN</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}

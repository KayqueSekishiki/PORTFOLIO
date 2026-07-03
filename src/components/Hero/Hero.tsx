import styles from "./Hero.module.scss";
import { LucideTerminal } from "lucide-react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.subtitle}>npm install curriculum-vitae</span>

        <h2>
          Olá, eu sou
          <span>Kayque Sekishiki</span>
          <small>
            Seu próximo <strong>Desenvolvedor Frontend</strong>
          </small>
        </h2>

        <p>
          Especialista em criar interfaces de alta performance, fundindo design
          com tecnologias modernas.
        </p>

        <div className={styles.buttons}>
          <PrimaryButton variant="link" href="#projects" text="Ver Projetos" />
          <SecondaryButton href="#contact" label="Contato" />
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

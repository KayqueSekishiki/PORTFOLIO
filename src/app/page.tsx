import Image from "next/image";
import RocketIcon from "../assets/rocket-icon.svg";
import styles from "./home.module.scss";

import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.top}>
          <div className={styles.lineLeft}></div>
          <Image
            className={styles.rocketIcon}
            src={RocketIcon}
            alt="Ícone de foguete"
          />
          <div className={styles.lineRight}></div>
        </div>
        <div className={styles.intro}>
          <p className={styles.title}>Portfolio</p>
          <h1>Kayque Sekishiki</h1>
          <p className={styles.tagline}>
            Engenheiro de Software - Desenvolvedor Web - Designer de jogos
          </p>
        </div>
        <ButtonPrimary href="/main" />
      </main>
    </div>
  );
}

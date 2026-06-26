"use client";
import Image from "next/image";
import styles from "./ArrowToTop.module.scss";
import ArrowUpIcon from "@/assets/arrow-up-icon.svg";
import { scrollToTop } from "@/utils/scrollToTop";

const ArrowToTop = () => {
  return (
    <a className={`${styles.cta}`} onClick={scrollToTop}>
      <Image
        className={styles.buttonIcon}
        src={ArrowUpIcon}
        alt="Retornar ao ínicio da página"
      />
    </a>
  );
};

export default ArrowToTop;

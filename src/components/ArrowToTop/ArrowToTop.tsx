"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

import styles from "./ArrowToTop.module.scss";
import ArrowUpIcon from "@/assets/arrow-up-icon.svg";
import useLocale from "@/hooks/useLocale";
import { getDictionary } from "@/lib/getDictionary";
import { scrollToTop } from "@/utils/scrollToTop";

type ArrowToTopProps = {
  variant: "image" | "lucide";
};

const ArrowToTop = ({ variant }: ArrowToTopProps) => {
  const locale = useLocale();
  const dict = getDictionary(locale);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setVisible(currentScrollY >= 300 && currentScrollY < lastScrollY);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const icon =
    variant === "image" ? (
      <Image
        className={styles.buttonIcon}
        src={ArrowUpIcon}
        alt={dict.arrowToTop.alt}
      />
    ) : (
      <ArrowUp className={styles.icon} />
    );

  return (
    <button
      className={`${styles.cta} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label={dict.arrowToTop.alt}
    >
      {icon}
    </button>
  );
};

export default ArrowToTop;

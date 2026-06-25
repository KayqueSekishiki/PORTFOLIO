import Image from "next/image";
import styles from "./ButtonPrimary.module.css";
import ArrowRightIcon from "@/assets/arrow-right-icon.svg";

type ButtonPrimaryProps = {
  href: string;
};

const ButtonPrimary = ({ href }: ButtonPrimaryProps) => {
  return (
    <a
      className={`${styles.cta}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      Acessar
      <Image
        className={styles.buttonIcon}
        src={ArrowRightIcon}
        alt="Acessar Portfolio"
      />
    </a>
  );
};

export default ButtonPrimary;

import Image from "next/image";
import styles from "./SpecialButton.module.scss";
import ArrowRightIcon from "@/assets/arrow-right-icon.svg";

type SpecialButtonProps = {
  href: string;
};

const SpecialButton = ({ href }: SpecialButtonProps) => {
  return (
    <a className={`${styles.cta}`} href={href} rel="noopener noreferrer">
      Acessar
      <Image
        className={styles.buttonIcon}
        src={ArrowRightIcon}
        alt="Acessar Portfolio"
      />
    </a>
  );
};

export default SpecialButton;

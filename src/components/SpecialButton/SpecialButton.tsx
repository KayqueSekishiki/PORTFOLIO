import Image from "next/image";
import Link from "next/link";
import styles from "./SpecialButton.module.scss";
import ArrowRightIcon from "@/assets/arrow-right-icon.svg";

type SpecialButtonProps = {
  href: string;
};

const SpecialButton = ({ href }: SpecialButtonProps) => {
  return (
    <Link className={styles.cta} href={href} rel="noopener noreferrer">
      Enter Portfolio
      <Image
        className={styles.buttonIcon}
        src={ArrowRightIcon}
        alt="Enter Portfolio"
      />
    </Link>
  );
};

export default SpecialButton;

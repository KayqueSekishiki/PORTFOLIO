import Link from "next/link";
import styles from "./SecondaryButton.module.scss";

type SecondaryButtonProps = {
  href: string;
  label: string;
  icon?: React.ElementType;
};

const SecondaryButton = ({ href, label, icon: Icon }: SecondaryButtonProps) => {
  return (
    <Link className={styles.cta} href={href}>
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </Link>
  );
};

export default SecondaryButton;

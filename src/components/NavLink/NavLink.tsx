"use client";
import styles from "./NavLink.module.scss";
import Link from "next/link";

type NavLinkProps = {
  type: "link" | "button";
  href: string;
  icon: React.ElementType;
  text: string;
  onClick?: () => void;
  active?: boolean;
};

const NavLink = ({
  type,
  href,
  icon: Icon,
  text,
  onClick,
  active,
}: NavLinkProps) => {
  return type === "link" ? (
    <Link
      href={href}
      className={`${styles.navLink} ${active ? styles.active : ""}`}
    >
      <Icon className={styles.icon} />
      {text}
    </Link>
  ) : (
    <button className={styles.navButton} onClick={onClick}>
      <Icon className={styles.icon} />
      {text}
    </button>
  );
};

export default NavLink;

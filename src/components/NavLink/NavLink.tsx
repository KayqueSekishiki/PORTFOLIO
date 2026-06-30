"use client";
import styles from "./NavLink.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type NavLinkProps = {
  type: "link" | "button";
  href: string;
  alt: string;
  src: StaticImageData;
  text: string;
  onClick?: () => void;
  active?: boolean;
};

const NavLink = ({
  type,
  href,
  alt,
  src,
  text,
  onClick,
  active,
}: NavLinkProps) => {
  return type === "link" ? (
    <Link
      href={href}
      className={`${styles.navLink} ${active ? styles.active : ""}`}
    >
      <Image className={styles.linkImage} src={src} alt={alt} />
      {text}
    </Link>
  ) : (
    <button className={styles.navButton} onClick={onClick}>
      <Image className={styles.linkImage} src={src} alt={alt} />
      {text}
    </button>
  );
};

export default NavLink;

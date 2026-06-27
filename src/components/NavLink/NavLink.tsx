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
};

const NavLink = ({ type, href, alt, src, text, onClick }: NavLinkProps) => {
  return type === "link" ? (
    <Link className={styles.navLink} href={href}>
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

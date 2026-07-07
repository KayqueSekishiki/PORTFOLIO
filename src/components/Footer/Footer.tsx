"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

import useLocale from "@/hooks/useLocale";
import { getDictionary } from "@/lib/getDictionary";

import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  const locale = useLocale();
  const dict = getDictionary(locale);

  const links = [
    {
      href: "#hero",
      label: dict.footer.home,
    },
    {
      href: "#about",
      label: dict.footer.about,
    },
    {
      href: "#career",
      label: dict.footer.career,
    },
    {
      href: "#projects",
      label: dict.footer.projects,
    },
    {
      href: "#contact",
      label: dict.footer.contact,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.social}>
          <Link
            href="https://github.com/kayquesekishiki"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </Link>

          <Link
            href="https://linkedin.com/in/kayque-sekishiki"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </Link>

          <Link
            href="https://wa.me/5511962515162"
            target="_blank"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={22} />
          </Link>
        </div>

        <nav className={`${styles.navigation} ${styles.active}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <span>
          © {year}{" "}
          <Link
            href="https://linkedin.com/in/kayque-sekishiki"
            target="_blank"
            aria-label="LinkedIn"
          >
            Kayque Sekishiki.
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

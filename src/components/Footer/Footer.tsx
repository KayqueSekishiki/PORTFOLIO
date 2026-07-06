"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Link href="#home">início</Link>
          <Link href="#about">sobre mim</Link>
          <Link href="#career">carreira</Link>
          <Link href="#projects">projetos</Link>
          <Link href="#contact">contato</Link>
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
          <Link href="#home">início</Link>
          <Link href="#about">sobre mim</Link>
          <Link href="#career">carreira</Link>
          <Link href="#projects">projetos</Link>
          <Link href="#contact">contato</Link>
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

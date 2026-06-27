"use client";
import styles from "./Header.module.scss";
import logo from "../../assets/ks.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavbarHomeIcon from "@/assets/navbar/navbar-home-icon.svg";
import NavbarAcademicIcon from "@/assets/navbar/navbar-academic-icon.svg";
import NavbarLanguageIcon from "@/assets/navbar/navbar-language-icon.svg";
import NavLink from "../NavLink/NavLink";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.linkIcon} href="/">
          <Image className={styles.linkLogo} src={logo} alt="Logotipo KS" />
        </Link>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          {/* <NavLink
            type="link"
            href="/"
            src={NavbarHomeIcon}
            alt="Ir para o início"
            text="Início"
          /> */}

          <NavLink
            type="link"
            href="/main#about"
            src={NavbarAcademicIcon}
            alt="Ir para a sessão sobre mim"
            text="Sobre Mim"
          />

          <NavLink
            type="link"
            href="/main#career"
            src={NavbarHomeIcon}
            alt="Ir par a sessão de carreira"
            text="Carreira"
          />

          <NavLink
            type="link"
            href="/main#projects"
            src={NavbarHomeIcon}
            alt="Ir para a sessão de projetos"
            text="Projetos"
          />

          <NavLink
            type="link"
            href="/main#contact"
            src={NavbarHomeIcon}
            alt="Ir para a sessão de contato"
            text="Contato"
          />
          <NavLink
            type="button"
            href="none"
            src={NavbarLanguageIcon}
            alt="Alternar idioma"
            text="Português"
          />
        </nav>
      </header>
      {open && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  );
};

export default Header;

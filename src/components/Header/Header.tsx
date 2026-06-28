"use client";
import styles from "./Header.module.scss";
import logo from "../../assets/ks.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavbarHomeIcon from "@/assets/navbar/navbar-home-icon.svg";
import NavbarAcademicIcon from "@/assets/navbar/navbar-academic-icon.svg";
import NavbarLanguageIcon from "@/assets/navbar/navbar-language-icon.svg";
import NavLink from "../NavLink/NavLink";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = open ? "hidden" : "";

    return () => {
      html.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      >
        <div className={styles.container}>
          <Link className={styles.linkIcon} href="/">
            <Image className={styles.linkLogo} src={logo} alt="Logotipo KS" />
          </Link>
          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`${styles.nav} ${open ? styles.openMobile : ""} `}>
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
            <div className={styles.languageSelector}>
              <button
                className={`${styles.buttonLanguageSelector} ${styles.active}`}
              >
                PT
              </button>

              <span className={styles.separator}>|</span>

              <button className={styles.buttonLanguageSelector}>EN</button>
            </div>
          </nav>
        </div>
      </header>
      {open && <div className={styles.overlayMobile} onClick={closeMenu} />}
    </>
  );
};

export default Header;

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
  const [activeSection, setActiveSection] = useState("hero");
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

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        let bestSection = "";
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            bestSection = entry.target.id;
          }
        });

        if (bestSection) {
          setActiveSection(bestSection);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75, 1],
        rootMargin: "-120px 0px 0px 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`
          ${styles.header}
          ${scrolled ? styles.headerScrolled : ""}
          ${open ? styles.headerOpen : ""}
       `}
      >
        <div className={styles.container}>
          {!open && (
            <>
              <Link className={styles.linkIcon} href="/">
                <Image
                  className={styles.linkLogo}
                  src={logo}
                  alt="Logotipo KS"
                />
              </Link>

              <button className={styles.hamburger} onClick={toggleMenu}>
                ☰
              </button>
            </>
          )}
          <nav className={`${styles.nav} ${open ? styles.openMobile : ""} `}>
            <NavLink
              type="link"
              href="/main#about"
              src={NavbarAcademicIcon}
              alt="Ir para a sessão sobre mim"
              text="Sobre Mim"
              active={activeSection === "about"}
            />

            <NavLink
              type="link"
              href="/main#career"
              src={NavbarHomeIcon}
              alt="Ir par a sessão de carreira"
              text="Carreira"
              active={activeSection === "career"}
            />

            <NavLink
              type="link"
              href="/main#projects"
              src={NavbarHomeIcon}
              alt="Ir para a sessão de projetos"
              text="Projetos"
              active={activeSection === "projects"}
            />

            <NavLink
              type="link"
              href="/main#contact"
              src={NavbarHomeIcon}
              alt="Ir para a sessão de contato"
              text="Contato"
              active={activeSection === "contact"}
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

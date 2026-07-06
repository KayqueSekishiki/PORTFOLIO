"use client";
import styles from "./Header.module.scss";
import logo from "../../assets/ks.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  PersonStanding,
  BriefcaseBusiness,
  FolderKanban,
  Mail,
  Languages,
} from "lucide-react";
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
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );

    const handleScroll = () => {
      const offset = 140;
      let current = sections[0]?.id;

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - offset) {
          current = section.id;
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
              href="#about"
              icon={PersonStanding}
              text="Sobre Mim"
              active={activeSection === "about"}
            />

            <NavLink
              type="link"
              href="#career"
              icon={BriefcaseBusiness}
              text="Carreira"
              active={activeSection === "career"}
            />

            <NavLink
              type="link"
              href="#projects"
              icon={FolderKanban}
              text="Projetos"
              active={activeSection === "projects"}
            />

            <NavLink
              type="link"
              href="#contact"
              icon={Mail}
              text="Contato"
              active={activeSection === "contact"}
            />
            <NavLink
              type="button"
              href="none"
              icon={Languages}
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

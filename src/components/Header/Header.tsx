"use client";

import useLocale from "@/hooks/useLocale";
import { getDictionary } from "@/lib/getDictionary";
import styles from "./Header.module.scss";
import { usePathname, useRouter } from "next/navigation";
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

  const locale = useLocale();
  const dict = getDictionary(locale);

  const router = useRouter();
  const pathname = usePathname();

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

  useEffect(() => {
    const scroll = sessionStorage.getItem("scroll-position");

    if (scroll) {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: Number(scroll),
          behavior: "instant",
        });

        sessionStorage.removeItem("scroll-position");
      });
    }
  }, [pathname]);

  const changeLanguage = (language: "pt" | "en") => {
    let path = pathname;

    if (language === "en") {
      if (!pathname.startsWith("/en")) {
        path = `/en${pathname}`;
      }
    } else {
      path = pathname.replace(/^\/en/, "") || "/";
    }

    sessionStorage.setItem("scroll-position", window.scrollY.toString());

    router.push(path);
  };

  const toggleLanguage = () => {
    changeLanguage(locale === "pt" ? "en" : "pt");
  };

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

          <nav className={`${styles.nav} ${open ? styles.openMobile : ""}`}>
            <NavLink
              type="link"
              href="#about"
              icon={PersonStanding}
              text={dict.header.about}
              active={activeSection === "about"}
            />

            <NavLink
              type="link"
              href="#career"
              icon={BriefcaseBusiness}
              text={dict.header.career}
              active={activeSection === "career"}
            />

            <NavLink
              type="link"
              href="#projects"
              icon={FolderKanban}
              text={dict.header.projects}
              active={activeSection === "projects"}
            />

            <NavLink
              type="link"
              href="#contact"
              icon={Mail}
              text={dict.header.contact}
              active={activeSection === "contact"}
            />

            <NavLink
              type="button"
              href="none"
              icon={Languages}
              text={dict.header.language}
              onClick={toggleLanguage}
            />

            <div className={styles.languageSelector}>
              <button
                className={`${styles.buttonLanguageSelector} ${
                  locale === "pt" ? styles.active : ""
                }`}
                onClick={() => changeLanguage("pt")}
              >
                PT
              </button>

              <span className={styles.separator}>|</span>

              <button
                className={`${styles.buttonLanguageSelector} ${
                  locale === "en" ? styles.active : ""
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      </header>

      {open && <div className={styles.overlayMobile} onClick={closeMenu} />}
    </>
  );
};

export default Header;

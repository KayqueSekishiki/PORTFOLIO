import ArrowToTop from "@/components/ArrowToTop/ArrowToTop";
import styles from "./main.module.scss";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Career from "@/components/Career/Career";
import Projects from "@/components/Projects/Projects";

export default function Main() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Career />
      <Projects />
      <ArrowToTop variant="lucide" />
      <main className={styles.main}></main>
    </div>
  );
}

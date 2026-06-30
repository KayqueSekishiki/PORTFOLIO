import ArrowToTop from "@/components/ArrowToTop/ArrowToTop";
import styles from "./main.module.scss";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

export default function Main() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ArrowToTop />
      <main className={styles.main}></main>
    </div>
  );
}

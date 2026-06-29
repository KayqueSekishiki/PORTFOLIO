import ArrowToTop from "@/components/ArrowToTop/ArrowToTop";
import styles from "./main.module.scss";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Main() {
  return (
    <div>
      <Header />
      <Hero />
      <ArrowToTop />
      <main className={styles.main}></main>
    </div>
  );
}

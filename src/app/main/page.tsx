import ArrowToTop from "@/components/ArrowToTop/ArrowToTop";
import styles from "./main.module.scss";
import Header from "@/components/Header/Header";

export default function Main() {
  return (
    <div>
      <Header />
      <ArrowToTop />
      <main className={styles.main}></main>
    </div>
  );
}

import ArrowToTop from "@/components/ArrowToTop/ArrowToTop";
import styles from "./main.module.scss";

export default function Main() {
  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
      <header>Header</header>
      <div>hero</div>
      <ArrowToTop />
    </div>
  );
}

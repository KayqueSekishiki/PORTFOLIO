import styles from "./main.module.css";

export default function Main() {
  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
      <header>Header</header>
      <div>hero</div>
    </div>
  );
}

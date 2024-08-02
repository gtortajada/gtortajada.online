import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection} id="heroSection">
        <h1>Section 1</h1>
        <h2>Home Section</h2>
      </section>

      <section className="text-center" id="abouthsection">
        <h1>Section 2</h1>
        <h2>About Pessoal</h2>
      </section>

      <section className="text-center" id="profsection">
        <h1>Section 3</h1>
        <h2>About Profissional</h2>
      </section>


    </main>
  );
}

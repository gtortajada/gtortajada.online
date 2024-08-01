import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <section className="text-center" id="homesection">
          <h1>Section 1</h1>
          <h2>Home Section</h2>
        </section>

        <section className="text-center" id="abouthsection">
          <h1>Section 2</h1>
          <h2>Abouth Pessoal</h2>
        </section>

        <section className="text-center" id="profsection">
          <h1>Section 3</h1>
          <h2>Abouth Profissional</h2>
        </section>

        
    </main>
  );
}

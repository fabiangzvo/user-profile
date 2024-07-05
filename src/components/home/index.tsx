import { JSX } from "react";
import Image from "next/image";

import HomeBackground from "@components/homeBackground";

import styles from "./styles.module.css";

function Home(): JSX.Element {
  return (
    <div id="home" className={styles.home}>
      <HomeBackground />
      <div className={styles.content}>
        ¡Transforma tu marca con diseños impactantes y creativos!
      </div>
      <div className={styles.image}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Hola</p>
          <span className={styles.title}>
            Soy&nbsp;<p className={styles.name}>Jenny</p>,
          </span>
          <p className={styles.title}>Diseñadora gráfica</p>
        </div>
        <Image src="/user.png" alt="user" width={900} height={700} />
      </div>
      <div className={styles.rightContent}>
        <Image src="/star.png" alt="user" width={200} height={40} />
        ¡Captura la atención de tu audiencia y destaca en el mercado!
      </div>
    </div>
  );
}

export default Home;

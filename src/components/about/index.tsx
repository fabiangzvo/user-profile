import { JSX } from "react";
import Image from "next/image";

import styles from "./styles.module.css";

function About(): JSX.Element {
  return (
    <div id="about" className="secondary-content">
      <Image
        className={styles.image}
        src="/about.png"
        alt="user"
        width={600}
        height={600}
      />
      <div className={styles.content}>
        <span className={styles.title}>
          Sobre&nbsp;<p className={styles.name}>mí</p>
        </span>
        <p className={styles.paragraph}>
          ¡Bienvenidos a mi mundo creativo! Soy Jenny, diseñadora gráfica
          apasionada por fusionar arte y funcionalidad para crear experiencias
          visuales impactantes.
        </p>
        <br />
        <p className={styles.paragraph}>
          Como mujer empoderada, encuentro inspiración en el conocimiento y la
          aventura, buscando siempre un equilibrio con un estilo de vida
          saludable. Mi misión es transformar ideas en diseños que cuenten
          historias, conecten emociones y hagan brillar a cada proyecto.
        </p>
        <br />
        <p className={styles.paragraph}>
          Acompáñame en este viaje donde la creatividad y la innovación se
          encuentran en cada pixel.
        </p>
      </div>
    </div>
  );
}

export default About;

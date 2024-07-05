import { JSX } from "react";
import Image from "next/image";

import styles from "./styles.module.css";

function Interest(): JSX.Element {
  return (
    <div id="interests" className={styles.container}>
      <span className={styles.title}>
        Mis&nbsp;<p className={styles.name}>intereses</p>
      </span>
      <div className={styles.content}>
        <div className={styles.section}>
          <section>
            <h3 className={styles.label}>Senderismo</h3>
            <p className={styles.paragraph}>
              Explorar la naturaleza es mi escape perfecto. Desde las alturas de
              las montañas hasta los senderos más serenos, encuentro paz y
              rejuvenecimiento en cada paso que doy.
            </p>
          </section>
          <section>
            <h3 className={styles.label}>Viajar</h3>
            <p className={styles.paragraph}>
              Descubrir nuevos horizontes alimenta mi alma aventurera. Cada
              destino es una oportunidad para aprender, crecer y encontrar
              inspiración en culturas diversas y paisajes impresionantes.
            </p>
          </section>
          <section>
            <h3 className={styles.label}>Running</h3>
            <p className={styles.paragraph}>
              Correr libera mi mente y fortalece mi espíritu. En cada zancada
              encuentro energía y determinación para superar retos, alcanzar
              metas y mantenerme en equilibrio físico y mental.
            </p>
          </section>
        </div>
        <Image src="/interest.png" alt="user" width={60} height={500} />
        <div className={styles.section}>
          <section>
            <h3 className={styles.label}>Training</h3>
            <p className={styles.paragraph}>
              El gimnasio es mi santuario de fuerza y bienestar. Aquí encuentro
              la motivación para desafiarme físicamente y mantener un estilo de
              vida activo que complementa mi pasión por el diseño gráfico y la
              creatividad.
            </p>
          </section>
          <section>
            <h3 className={styles.label}>Pintar</h3>
            <p className={styles.paragraph}>
              El arte es mi refugio creativo. A través del pincel y los colores,
              puedo expresar emociones y capturar momentos que inspiran mi
              diseño gráfico.
            </p>
          </section>
          <section>
            <h3 className={styles.label}>Natación</h3>
            <p className={styles.paragraph}>
              Sumergirme en el agua me brinda una sensación de libertad y
              serenidad, además de ser una excelente forma de mantenerme en
              forma y saludable.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Interest;

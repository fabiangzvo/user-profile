"use client";

import { JSX, useMemo } from "react";
import Image from "next/image";

import styles from "./styles.module.css";
import constants from "./constants";

function Interest(): JSX.Element {
  const { first, second } = useMemo(() => {
    const size = constants.interests.length;
    const items = constants.interests.map((interest, index) => (
      <section key={index} className={styles.item}>
        <h3 className={styles.label}>{interest.title}</h3>
        <p className={styles.paragraph}>{interest.description}</p>
      </section>
    ));

    return {
      first: items.slice(0, size / 2),
      second: items.slice(size / 2, size),
    };
  }, []);

  return (
    <div id="interests" className={styles.container}>
      <span className={styles.title}>
        Mis&nbsp;<p className={styles.name}>intereses</p>
      </span>
      <div className={styles.content}>
        <div className={styles.section}>{first}</div>
        <Image src="/interest.png" alt="user" width={60} height={500} />
        <div className={styles.section}>{second}</div>
      </div>
    </div>
  );
}

export default Interest;

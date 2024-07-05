"use client";

import { JSX, useCallback, SyntheticEvent } from "react";

import Input from "@components/input";

import styles from "./styles.module.css";

function Contact(): JSX.Element {
  const handleSubmit = useCallback((e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    console.log(form.elements);
  }, []);

  return (
    <div id="contact" className="secondary-content">
      <div className={styles.content}>
        <span className={styles.title}>
          Hable<p className={styles.name}>mos</p>
        </span>
        <p className={styles.paragraph}>
          ¿Listo para dar vida a tu proyecto? <br />
          ¡Contáctame y juntos haremos que tu visión se destaque!
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="Nombre" name="name" type="text" isRequired />
          <Input label="Correo" name="email" type="email" isRequired />
          <Input label="Mensaje" name="message" type="textarea" isRequired />
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

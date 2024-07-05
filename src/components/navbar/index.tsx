"use client";

import { JSX, useEffect } from "react";
import Link from "next/link";

import style from "./style.module.css";

function Navbar(): JSX.Element {
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <ul className={style.list}>
          <li>
            <Link href="#home">Inicio</Link>
          </li>
          <li>
            <Link href="#about">Sobre mí</Link>
          </li>
        </ul>
        <div className={style.name}>
          Jenny Design
          <div className={style.circle} />
        </div>
        <ul className={style.list}>
          <li>
            <Link href="#interests">Intereses</Link>
          </li>
          <li>
            <Link href="#contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

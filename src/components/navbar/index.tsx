"use client";

import { JSX, useMemo } from "react";
import Link from "next/link";

import style from "./style.module.css";

function Navbar(): JSX.Element {
  const currentPath = useMemo(() => {
    const { hash } = window.location;
    console.log(hash);
    return hash ?? "#home";
  }, [window.location.hash]);

  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <ul className={style.list}>
          <li className={currentPath === "#home" ? "current" : ""}>
            <Link href="#home">Inicio</Link>
          </li>
          <li className={currentPath === "#about" ? "current" : ""}>
            <Link href="#about">Sobre mí</Link>
          </li>
        </ul>
        <div className={style.name}>Dummy name</div>
        <ul className={style.list}>
          <li className={currentPath === "#interests" ? "current" : ""}>
            <Link href="#interests">Intereses</Link>
          </li>
          <li className={currentPath === "#contact" ? "current" : ""}>
            <Link href="#contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

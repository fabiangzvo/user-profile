import Image from "next/image";

import Navbar from "@components/navbar";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div id="home" className={styles.home}>
        <div className={styles.content}>
          Jenny’s Exceptional product design ensure our website’s
          success. Highly Recommended
        </div>
        <div className={styles.image}>
          <Image src="/user.png" alt="user" width={1000} height={800} />
        </div>
        <div className={styles.content}>lolo</div>
      </div>
      <div id="about"></div>
      <div id="interests"></div>
      <div id="contact"></div>
    </main>
  );
}

import { JSX, useMemo } from "react";
import Image from "next/image";

import styles from "./styles.module.css";

function HomeBackground(): JSX.Element {
  const { points, primaryRectangles, secondaryRectangles } = useMemo(() => {
    const points = new Array(5).fill(0).map((_, i) => {
      const imageClass = `point${i + 1}`;

      return (
        <Image
          key={i}
          src="/points.png"
          alt="points"
          className={styles[imageClass]}
          width={100}
          height={100}
        />
      );
    });

    const primaryRectangles = new Array(6).fill(0).map((_, i) => {
      const imageClass = `primaryRectangle${i + 1}`;

      return (
        <Image
          key={i}
          src="/rectangle_primary.png"
          alt="rectanglePrimary"
          className={styles[imageClass]}
          width={100}
          height={100}
        />
      );
    });

    const secondaryRectangles = new Array(5).fill(0).map((_, i) => {
      const imageClass = `secondaryRectangle${i + 1}`;

      return (
        <Image
          key={i}
          src="/rectangle_secondary.png"
          alt="rectangleSecondary"
          className={styles[imageClass]}
          width={100}
          height={100}
        />
      );
    });

    return { points, primaryRectangles, secondaryRectangles };
  }, []);

  return (
    <>
      {points}
      {primaryRectangles}
      {secondaryRectangles}
    </>
  );
}

export default HomeBackground;

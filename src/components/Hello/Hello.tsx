import React from "react";
import styles from "./_hello.module.scss";
import VectorGraphic1 from "../AnimatedSVGs/VectorGraphic1/VectorGraphic1";
import VectorGraphic2 from "../AnimatedSVGs/VectorGraphic2/VectorGraphic2";
import VectorGraphic3 from "../AnimatedSVGs/VectorGraphic3/VectorGraphic3";

/**
 * The landing page of the website that contains the site's greeting
 */
export default function Hello(): React.ReactElement {
  // to add bounce animation, so we have to add each separate letter to a span
  const hello = ["H", "e", "l", "l", "o", "!"];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bouncy}>
          {hello.map((letter, index) => (
            <span
              // allows for bounce animation
              style={{ "--i": index } as React.CSSProperties}
              key={letter + index}
            >
              {letter}
            </span>
          ))}
        </div>
        <span className={styles.focused}>I'm Luke Runyon</span>
        <span>Front-end</span>
        <span>Web Developer</span>
      </div>
      <VectorGraphic1 />
      {/* testing an animation bug for apple devices */}
      {/* <VectorGraphic2 />
      <VectorGraphic3 /> */}
    </section>
  );
}

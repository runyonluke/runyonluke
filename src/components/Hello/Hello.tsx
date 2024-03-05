import React from "react";
import styles from "./_hello.module.scss";
import Graphics from "./Graphics/Graphics";

/**
 * The landing page of the website that contains the site's greeting
 */
export default function Hello(): React.ReactElement {
  // to add bounce animation, so we have to add each separate letter to a span
  const hello = ["H", "e", "l", "l", "o", "!"];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
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
          <span>Software</span>
          <span>Developer</span>
        </div>
      </div>
      <Graphics />
    </section>
  );
}

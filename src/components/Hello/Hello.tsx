import React from "react";
import styles from "./_hello.module.scss";

/**
 * The landing page of the website that contains the site's greeting
 */
export default function Hello(): React.ReactElement {
  // to add bounce animation, so we have to add each separate letter to a span
  const hello = ["H", "e", "l", "l", "o", "!"];

  return (
    <div className={styles.container}>
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
  );
}

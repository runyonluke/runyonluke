import React from "react";
import styles from "./_hello.module.scss";

/**
 * The landing page of the website that contains the site's greeting
 */
export default function Hello(): React.ReactElement {
  return (
    <div className={styles.container}>
      <span>Hello!</span>
      <span className={styles.focused}>I'm Luke Runyon</span>
      <span>Front-end</span>
      <span>Web Developer</span>
    </div>
  );
}

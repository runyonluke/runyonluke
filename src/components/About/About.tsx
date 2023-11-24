import React from "react";
import styles from "./_about.module.scss";

export default function About(): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="grad-b&w-min.jpg" alt="Luke Runyon graduation" />
        <img src="wedding-b&w-min.jpg" alt="Luke Runyon wedding" />
      </div>
    </div>
  );
}

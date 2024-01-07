import React from "react";
import styles from "./_graphics.module.scss";

/* SVGs */
import GraphicOne from "./SVGs/GraphicOne";
import GraphicTwo from "./SVGs/GraphicTwo";
import GraphicThree from "./SVGs/GraphicThree";

/**
 * The animated graphics that appear on the hello page
 */
export default function Graphics(): React.ReactElement {
  return (
    <div className={styles.container}>
      <GraphicOne />
      <GraphicTwo />
      <GraphicThree />
    </div>
  );
}

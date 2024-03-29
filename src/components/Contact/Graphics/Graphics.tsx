import React from "react";
import styles from "./_graphics.module.scss";
import GraphicTwo from "./SVGs/GraphicTwo";
import GraphicOne from "./SVGs/GraphicOne";

/**
 * An animated graphic that plays on repeat
 */
export default function Graphics(): React.ReactElement {
  return (
    <div className={styles.container + " hiddenStatic"}>
      <GraphicOne />
      <GraphicTwo />
    </div>
  );
}

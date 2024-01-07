import React from "react";
import styles from "./_graphic.module.scss";
import GraphicTwo from "./SVGS/GraphicTwo";
import GraphicOne from "./SVGS/GraphicOne";

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

import React from "react";
import styles from "./_hello.module.scss";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

/**
 * The landing page of the website that contains the site's greeting
 */
export default function Hello(): React.ReactElement {
  return (
    <div className={styles.container}>
      <HamburgerMenuIcon />
    </div>
  );
}

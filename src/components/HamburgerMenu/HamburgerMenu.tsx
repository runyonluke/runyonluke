import React from "react";
import styles from "./_hamburgerMenu.module.scss";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

/**
 * The website controls for the mobile version, a collapsible hamburger menu
 */
export default function HamburgerMenu() {
  // controls whether the menu is open or closed
  const [collapsed, setCollapsed] = React.useState<boolean>(true);

  return (
    <div className={styles.container}>
      <HamburgerMenuIcon aria-label="Menu" />
    </div>
  );
}

import React from "react";
import styles from "./_headerTabs.module.scss";

/* radix */
import * as Tabs from "@radix-ui/react-tabs";

/* redux */
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { HEADING_TABS } from "../../util/constants/HEADING_TAB";

/**
 * Represents where the user is scrolled to, indicated by a tab
 */
export default function HeadingTabs(): React.ReactElement {
  //indicates which section of the landing page the user is scrolled to
  const selectedTab = useSelector((state: RootState) => state.root.selectedTab);

  return (
    <Tabs.Root className={styles.root} value={selectedTab}>
      <Tabs.List>
        {Object.values(HEADING_TABS).map((heading) => (
          <Tabs.Trigger
            className={
              heading === selectedTab ? styles.selectedTrigger : styles.trigger
            }
            value={heading}
            key={heading}
          >
            {heading}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}

import React from "react";
import styles from "./_headerTabs.module.scss";

/* radix */
import * as Tabs from "@radix-ui/react-tabs";

/* redux */
import { RootState } from "../../store/store";
import { HEADING_TABS } from "../../util/constants/HEADING_TAB";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSelectedTab } from "../../store/RENAMEME/rootSlice";

/**
 * Represents where the user is scrolled to, indicated by a tab
 */
export default function HeadingTabs(): React.ReactElement {
  const dispatch = useAppDispatch();
  //indicates which section of the landing page the user is scrolled to
  const selectedTab = useAppSelector(
    (state: RootState) => state.root.selectedTab
  );

  const tabChange = (value: string) => {
    dispatch(setSelectedTab(value));
    window.location.replace(`/#${value}`);
  };

  const [scroll, setScroll] = React.useState<number>(0);

  React.useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setScroll(window.scrollY);
      },
      { passive: true }
    );
  });

  return (
    <nav className={scroll > window.innerHeight ? styles.navFixed : styles.nav}>
      <Tabs.Root
        className={styles.root}
        value={selectedTab}
        onValueChange={tabChange}
      >
        <Tabs.List>
          {Object.values(HEADING_TABS).map((heading) => (
            <Tabs.Trigger
              className={
                heading === selectedTab
                  ? styles.selectedTrigger
                  : styles.trigger
              }
              value={heading}
              key={heading}
            >
              {heading}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </nav>
  );
}

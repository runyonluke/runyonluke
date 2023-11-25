import React from "react";
import styles from "./styles/_app.module.scss";

/* Components */
import Hello from "./components/Hello/Hello";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import MoreAboutMe from "./components/MoreAboutMe/MoreAboutMe";
import HeadingTabs from "./components/HeadingTabs/HeadingTabs";
import About from "./components/About/About";
import Repository from "./components/Repository/Repository";
import { useAppDispatch } from "./store/hooks";
import { getRepositoryData } from "./store/Root/rootSlice";

function App(): React.ReactElement {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getRepositoryData());
  });

  return (
    <div className={styles.app}>
      <div className={styles.landing}>
        <HamburgerMenu />
        <Hello />
      </div>
      <MoreAboutMe />
      <HeadingTabs />
      <About />
      <Repository />
    </div>
  );
}

export default App;

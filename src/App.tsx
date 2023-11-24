import React from "react";
import styles from "./styles/_app.module.scss";

/* Components */
import Hello from "./components/Hello/Hello";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import MoreAboutMe from "./components/MoreAboutMe/MoreAboutMe";
import HeadingTabs from "./components/HeadingTabs/HeadingTabs";
import About from "./components/About/About";

function App(): React.ReactElement {
  return (
    <div className={styles.app}>
      <div className={styles.landing}>
        <HamburgerMenu />
        <Hello />
      </div>
      <MoreAboutMe />
      <HeadingTabs />
      <About />
    </div>
  );
}

export default App;

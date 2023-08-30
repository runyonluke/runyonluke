import React from "react";
import styles from "./styles/_app.module.scss";
import Hello from "./components/Hello/Hello";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";

function App(): React.ReactElement {
  return (
    <div className={styles.app}>
      <HamburgerMenu />
      <Hello />
    </div>
  );
}

export default App;

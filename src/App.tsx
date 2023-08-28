import React from "react";
import styles from "./styles/_app.module.scss";
import Hello from "./components/Hello/Hello";

function App(): React.ReactElement {
  return (
    <div className={styles.app}>
      <Hello />
    </div>
  );
}

export default App;

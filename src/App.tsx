import React from "react";
import styles from "./styles/_app.module.scss";

/* Components */
import HeadingTabs from "./components/HeadingTabs/HeadingTabs";
import About from "./components/About/About";
import Repository from "./components/Repository/Repository";
import LinkedIn from "./components/LinkedIn/LinkedIn";
import Landing from "./components/Landing/Landing";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

/* Redux */
import { useAppDispatch } from "./store/hooks";
import { getRepositoryData } from "./store/root/rootSlice";

function App(): React.ReactElement {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getRepositoryData());
  });

  return (
    <div className={styles.app}>
      <Landing />
      <HeadingTabs />
      <About />
      <LinkedIn />
      <Experience />
      <Repository />
      <Contact />
    </div>
  );
}

export default App;

import React from "react";
import styles from "./styles/_app.module.scss";

/* Components */
import HeadingTabs from "./components/HeadingTabs/HeadingTabs";
import About from "./components/About/About";
import Repository from "./components/Repository/Repository";
import LinkedIn from "./components/LinkedIn/LinkedIn";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Hello from "./components/Hello/Hello";
import MoreAboutMe from "./components/MoreAboutMe/MoreAboutMe";

/* Redux */
import { useAppDispatch } from "./store/hooks";
import { getRepositoryData } from "./store/root/rootSlice";

function App(): React.ReactElement {
  const dispatch = useAppDispatch();

  // Calls any endpoints we may need and observes our elements to get the smooth
  // transitions when elements are scrolled to
  React.useEffect(() => {
    dispatch(getRepositoryData());

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => entry.isIntersecting && entry.target.classList.add("visible")
      );
    });

    // I chose to do vanilla javascript to avoid having to use
    // @scroll-timeline, which at the time of this code is not widely supported
    // and to avoid having to use a library
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer.observe(element));
  });

  return (
    <div className={styles.app} id="app">
      <Hello />
      <MoreAboutMe />
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

import React from "react";
import styles from "./_about.module.scss";

/* Redux */
import { useAppDispatch } from "../../store/hooks";
import { setSelectedTab } from "../../store/root/rootSlice";
import Graphic from "./Graphic/Graphic";

/**
 * Contains a short personal bio
 */
export default function About(): React.ReactElement {
  const dispatch = useAppDispatch();
  // reference to section element
  const ref = React.useRef<HTMLElement>(null);

  // when you scroll to this section the tab needs to change
  // only should run when component first renders
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // get the first element, which is our section
      const entry = entries.at(0);
      // if the element is on the screen, change tab
      entry?.isIntersecting && dispatch(setSelectedTab("About"));
    });
    ref.current !== null && observer.observe(ref.current);
  });

  return (
    <section id="About" ref={ref} className={styles.container}>
      <div className={styles.content + " hidden"}>
        <div className={styles.imageContainer}>
          <img src="grad-color-min.jpg" alt="Luke Runyon graduation" />
          <img src="wedding-color-min.jpg" alt="Luke Runyon wedding" />
        </div>
        <h1>About me</h1>
        <p>
          I love the outdoors, my wife of almost a year, and technology! I am a
          proud graduate of Louisiana State University and am employed at
          Applied Research Associates. Most importantly, I love software!
        </p>
        <p>
          My journey to software engineering began right before university. My
          father worked for a software company, though not as a programmer. My
          mother graduated in chemical engineering. I decided I wanted to try
          doing something similar to both of their careers, and chose Computer
          Science with a concentration in Software Engineering. I had no idea if
          I would enjoy it, but I did! The rest is history!
        </p>
      </div>
      <Graphic />
    </section>
  );
}

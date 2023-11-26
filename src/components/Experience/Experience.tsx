import React from "react";
import styles from "./_experience.module.scss";

/* Redux */
import { useAppDispatch } from "../../store/hooks";
import { setSelectedTab } from "../../store/root/rootSlice";

/* Components */
import Companies from "../Companies/Companies";
import Skills from "../Skills/Skills";

/**
 * The area describing work experience and frameworks that I have used
 */
export default function Experience(): React.ReactElement {
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
      entry?.isIntersecting && dispatch(setSelectedTab("Experience"));
    });
    ref.current !== null && observer.observe(ref.current);
  });

  return (
    <section id="Experience" ref={ref} className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Experience</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, ipsa
          sunt maxime cumque quod commodi quibusdam, eos sit odio culpa ut
          laborum perferendis hic sint accusantium, autem minus praesentium
          atque vel repudiandae porro eius facere.
        </p>
      </div>
      <Companies />
      <Skills />
    </section>
  );
}

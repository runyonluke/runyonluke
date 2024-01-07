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
      <div className={styles.content}>
        <div className={styles.textContainer + " hidden"}>
          <h1>Experience</h1>
          <p>
            I joined ARA in August of 2021 as a Technical Intern before my last
            semester of school at LSU. I am now a full-time Staff Software
            Engineer working on a variety of projects in the Defense industry.
          </p>
          <p>
            I have had the opportunity to be a supervisor, have had a hand in
            marketing and recruiting, have trained new hires, and have been able
            to get experience in a variety of important parts of industry. Much
            of my technical experience involves front-end development. You can
            see the specifics down in the skills section below!
          </p>
        </div>
      </div>
      <Companies />
      <Skills />
    </section>
  );
}

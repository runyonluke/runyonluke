import React from "react";
import styles from "./_contact.module.scss";

/* Redux */
import { useAppDispatch } from "../../store/hooks";
import { setSelectedTab } from "../../store/root/rootSlice";
import ContactForm from "./ContactForm/ContactForm";

/**
 * The area describing how to get in touch with me
 */
export default function Contact(): React.ReactElement {
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
      entry?.isIntersecting && dispatch(setSelectedTab("Contact"));
    });
    ref.current !== null && observer.observe(ref.current);
  });

  return (
    <section id="Contact" ref={ref} className={styles.container}>
      <h1>Contact Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At illo unde
        dolore inventore, odit maxime consequuntur aut commodi distinctio, culpa
        porro, maiores dicta velit? Rerum explicabo illo mollitia temporibus
        eos?
      </p>
      <ContactForm />
    </section>
  );
}

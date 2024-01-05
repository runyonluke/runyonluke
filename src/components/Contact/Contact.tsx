import React from "react";
import styles from "./_contact.module.scss";

/* Redux */
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSelectedTab } from "../../store/root/rootSlice";
import ContactForm from "./ContactForm/ContactForm";
import { CheckIcon } from "@radix-ui/react-icons";
import { RootState } from "../../store/store";

/**
 * The area describing how to get in touch with me
 */
export default function Contact(): React.ReactElement {
  const dispatch = useAppDispatch();

  // whether the contact form has already been submitted once
  const isContacted = useAppSelector(
    (state: RootState) => state.root.isContacted
  );

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
      {!isContacted ? (
        <div className={styles.content}>
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At illo
            unde dolore inventore, odit maxime consequuntur aut commodi
            distinctio, culpa porro, maiores dicta velit? Rerum explicabo illo
            mollitia temporibus eos?
          </p>
          <ContactForm />
        </div>
      ) : (
        <div className={styles.contentCentered}>
          <CheckIcon className={styles.icon} />
          <h1>Thanks for contacting me!</h1>
          <p>
            Your submission has been received! I will get back to you very soon!
          </p>
        </div>
      )}
    </section>
  );
}

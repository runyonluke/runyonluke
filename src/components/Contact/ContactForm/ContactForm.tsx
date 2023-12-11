import React from "react";
import styles from "./_contactForm.module.scss";

export default function ContactForm(): React.ReactElement {
  return (
    <form
      className={styles.form}
      //action
    >
      <input type="text" name="Name" placeholder="Your name*" required />
      <br />
      <br />
      <input type="email" name="Email" placeholder="Email*" required />
      <br />
      <br />
      <input type="email" name="Message" placeholder="Message*" required />
      <br />
      <br />
      <input type="submit" className={styles.submit} value="Submit" />
    </form>
  );
}

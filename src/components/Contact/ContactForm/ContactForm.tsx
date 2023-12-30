import React from "react";
import styles from "./_contactForm.module.scss";

export default function ContactForm(): React.ReactElement {
  return (
    <form
      className={styles.form}
      //TODO: hook up email service
      //action
    >
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="Name"
          className={styles.shortInput}
          placeholder="Your name*"
          required
        />
        <input
          type="email"
          name="Email"
          className={styles.shortInput}
          placeholder="Email*"
          required
        />
      </div>

      <input type="text" name="Message" placeholder="Message*" required />

      <input type="submit" className={styles.submit} value="Submit" />
    </form>
  );
}

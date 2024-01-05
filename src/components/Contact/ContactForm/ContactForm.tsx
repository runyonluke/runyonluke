import React from "react";
import styles from "./_contactForm.module.scss";
import { useAppDispatch } from "../../../store/hooks";
import { sendContactForm } from "../../../store/root/rootSlice";

export default function ContactForm(): React.ReactElement {
  const dispatch = useAppDispatch();

  return (
    <form
      className={styles.form}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        // prevents site from refreshing
        e.preventDefault();
        dispatch(sendContactForm(e.currentTarget));
      }}
    >
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="user_name"
          className={styles.shortInput}
          placeholder="Your name*"
          required
        />
        <input
          type="email"
          name="user_email"
          className={styles.shortInput}
          placeholder="Email*"
          required
        />
      </div>
      <input type="text" name="message" placeholder="Message*" required />
      <input type="submit" className={styles.submit} value="Submit" />
    </form>
  );
}

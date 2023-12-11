import React from "react";
import styles from "./_moreAboutMe.module.scss";
import { ArrowDownIcon } from "@radix-ui/react-icons";

/**
 * The area prompting the user to continue scrolling form the landing section
 */
export default function MoreAboutMe(): React.ReactElement {
  return (
    <section className={styles.container}>
      <ArrowDownIcon className={styles.icon} />
      <span>See more about me</span>
      <ArrowDownIcon className={styles.icon} />
    </section>
  );
}

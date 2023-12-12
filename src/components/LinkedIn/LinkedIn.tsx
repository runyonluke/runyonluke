import React from "react";
import styles from "./_linkedIn.module.scss";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

/**
 * Contains my personal LinkedIn account
 */
export default function LinkedIn(): React.ReactElement {
  const {
    name,
    avatarImageUrl,
    companies,
    description,
    heroImageUrl,
    location,
    url,
  } = useAppSelector((state: RootState) => state.root.linkedIn);

  return (
    <section className={styles.container}>
      <div className={styles.heroContainer}>
        <img className={styles.hero} src={heroImageUrl} aria-hidden />
      </div>
      <img
        className={styles.avatar}
        src={avatarImageUrl}
        alt="Luke Runyon's profile"
      />
      <div>
        <div className={styles.body}>
          <div className={styles.content}>
            <span className={styles.name}>{name}</span>
            <span className={styles.description}>{description}</span>
            <span className={styles.muted}>
              {companies.map(
                (company, index) =>
                  company + " " + (index !== companies.length - 1 ? "•" : "")
              )}
            </span>
            <span className={styles.muted}>{location}</span>
            <a className={styles.button} href={url}>
              <i className={styles.imgContainer}>
                <img src="linkedin.svg" alt="LinkedIn logo" />
              </i>
              <span>Connect on LInkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

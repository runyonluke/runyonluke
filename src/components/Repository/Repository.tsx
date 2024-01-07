import React from "react";
import styles from "./_repository.module.scss";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

/**
 * Contains the UI for Github section, where this website's source code can be found
 */
export default function Repository(): React.ReactElement {
  const repository = useAppSelector(
    (state: RootState) => state.root.repository
  );

  return (
    <section className={styles.container + " hidden"}>
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <img
            className={styles.profile}
            src={repository.owner.avatar_url}
            loading="lazy"
            alt="runyonluke GitHub profile"
          />
          <div>
            <div>
              <a
                className={styles.projectName}
                href={repository.owner.html_url}
              >
                {repository.owner.login}
              </a>
              /
              <a className={styles.projectName} href={repository.url}>
                {repository.name}
              </a>
            </div>
            <span>Updated {repository.updated_at}</span>
          </div>
        </div>
        <p>{repository.description}</p>
      </div>
    </section>
  );
}

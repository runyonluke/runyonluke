import React from "react";
import styles from "./_company.module.scss";

/* Radix */
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Company } from "../../../util/models/Company";

interface Props {
  company: Company;
}

/**
 * An individual place I have worked organized in a dropdown
 */
export default function Companies({ company }: Props): React.ReactElement {
  const { bullets, companyName, dates, jobTitle } = company;

  return (
    <Accordion.Item value={companyName}>
      <Accordion.Header className={styles.header}>
        <Accordion.Trigger className={styles.trigger}>
          <div className={styles.labels}>
            <span>{dates}</span>
            <span>{companyName}</span>
            <span>{jobTitle}</span>
          </div>
          <ChevronDownIcon aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.content}>
        <div className={styles.bullets}>
          {bullets.map((bullet) => (
            <p key={bullet.substring(0, 15)}>{bullet}</p>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

import React from "react";
import styles from "./_companies.module.scss";

/* Radix */
import { Root as AccordionRoot } from "@radix-ui/react-accordion";
import { COMPANIES } from "../../util/constants/COMPANIES";
import Company from "./Company/Company";

/**
 * The places I have worked, organized in accordions
 */
export default function Companies(): React.ReactElement {
  const [selectedCompany, setSelectedCompany] = React.useState<
    string | undefined
  >(undefined);

  return (
    <AccordionRoot
      value={selectedCompany}
      onValueChange={(value) => setSelectedCompany(value)}
      type="single"
      collapsible
      className={styles.accordion}
    >
      {COMPANIES.map((company) => (
        <Company key={company.companyName} company={company} />
      ))}
    </AccordionRoot>
  );
}

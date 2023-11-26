import React from "react";
import styles from "./_skills.module.scss";
import { SKILLS } from "../../util/constants/SKILLS";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

/**
 * The products and languages I know well
 */
export default function Skills(): React.ReactElement {
  // only one skill gets the "stage"
  const [selectedSkill, setSelectedSkill] = React.useState<number>(1);

  // the non selected skills need to be relative positioning so they don't affect the selected
  const getStyles = (index: number) => {
    if (index < selectedSkill)
      return {
        top: styles.headingHeight,
        left: `calc(-65% * ${selectedSkill - index})`,
      };
    return {
      top: styles.headingHeight,
      right: `calc(65% * ${selectedSkill - index})`,
    };
  };

  // go to previous card
  const last = () => {
    setSelectedSkill(selectedSkill - 1);
  };

  // go to next card
  const next = () => {
    setSelectedSkill(selectedSkill + 1);
  };

  // so we don't need to recalculate the length every render
  const SKILLS_LENGTH = SKILLS.length;

  return (
    <div className={styles.container}>
      <h2>Skills</h2>

      {SKILLS.map((skill, index) => (
        <article
          key={skill?.name}
          className={
            index === selectedSkill ? styles.selectedCard : styles.card
          }
          style={getStyles(index)}
        >
          <div className={styles.imgContainer}>
            <img className={styles.img} src={skill?.imageUrl} aria-hidden />
          </div>
          <div className={styles.body}>
            <h3>{skill?.name}</h3>
            <span>{skill?.category}</span>
          </div>
        </article>
      ))}
      <div className={styles.controls}>
        <button
          className={styles.icon}
          type="button"
          title="Last"
          disabled={selectedSkill === 0}
          onClick={last}
        >
          <ChevronLeftIcon />
        </button>
        <button
          className={styles.icon}
          type="button"
          title="Next"
          disabled={selectedSkill === SKILLS_LENGTH - 1}
          onClick={next}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./_skills.module.scss";

import { SKILLS } from "../../util/constants/SKILLS";
import useSwipe from "../../util/functions/useSwipe";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Graphics from "./Graphics/Graphics";

/**
 * The products and languages I know well
 */
export default function Skills(): React.ReactElement {
  // only one skill gets the "stage"
  const [selectedSkill, setSelectedSkill] = React.useState<number>(0);

  // handles all the swipe events for the cards
  const swipeHandlers = useSwipe({
    left: () => !disabledNext() && next(),
    right: () => !disabledLast() && last(),
  });

  const MOBILE_TO_TABLET = 744;
  const TABLET_TO_MOBILE = 1440;

  // the non selected skills need to be relative positioning so they don't affect the selected
  const getStyles = (index: number) => {
    if (window.innerWidth < MOBILE_TO_TABLET) {
      return {
        top: styles.headingHeight,
        right: `calc(15% + (80% * ${selectedSkill - index}))`,
      };
    } else if (window.innerWidth < TABLET_TO_MOBILE) {
      return {
        top: styles.headingHeight,
        right: `calc(52.5% + (40% * ${selectedSkill - index}))`,
      };
    }
    return {
      top: styles.headingHeight,
      right: `calc(66% + (28.5% * ${selectedSkill - index}))`,
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

  // if there is no card available to advance to
  const disabledNext = () => {
    return window.innerWidth < TABLET_TO_MOBILE
      ? window.innerWidth < MOBILE_TO_TABLET
        ? selectedSkill === SKILLS_LENGTH - 1
        : selectedSkill === SKILLS_LENGTH - 2
      : selectedSkill === SKILLS_LENGTH - 3;
  };

  // if there is no card available to return to
  const disabledLast = () => {
    return selectedSkill === 0;
  };
  // so we don't need to recalculate the length every render
  const SKILLS_LENGTH = SKILLS.length;

  return (
    <div {...swipeHandlers} className={styles.container + " hidden"}>
      <h2>Skills</h2>

      {SKILLS.map((skill, index) => (
        <a
          key={skill?.name}
          href={skill.url}
          target="_blank"
          className={styles.card}
          style={getStyles(index)}
        >
          <article>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={skill?.imageUrl} aria-hidden />
            </div>
            <div className={styles.body}>
              <h3>{skill?.name}</h3>
              <span>{skill?.category}</span>
            </div>
          </article>
        </a>
      ))}
      <div className={styles.controls}>
        <button
          className={styles.icon}
          type="button"
          title="Last"
          disabled={disabledLast()}
          onClick={last}
        >
          <ChevronLeftIcon />
        </button>
        <button
          className={styles.icon}
          type="button"
          title="Next"
          disabled={disabledNext()}
          onClick={next}
        >
          <ChevronRightIcon />
        </button>
      </div>
      <Graphics />
    </div>
  );
}

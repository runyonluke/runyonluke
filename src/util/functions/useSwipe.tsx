import React from "react";

interface SwipeProps {
  left: () => void;
  right: () => void;
}

interface SwipeReturn {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
}

// the minimum distance the user has to drag to register a swipe
const MIN_SWIPE_DISTANCE = 50;

/**
 * Re-usable custom hook for swiping
 */
export default (input: SwipeProps): SwipeReturn => {
  const [touchStart, setTouchStart] = React.useState<number>(0);
  const [touchEnd, setTouchEnd] = React.useState<number>(0);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    // if the user has swiped left far enough to quality
    if (distance > MIN_SWIPE_DISTANCE) {
      input.left();
    }
    // if the user has swiped right far enough to quality
    if (distance < -MIN_SWIPE_DISTANCE) {
      input.right();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

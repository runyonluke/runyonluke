import React from "react";
import styles from "./_vectorGraphic2.module.scss";

/**
 * An animated graphic that plays on repeat
 */
export default function VectorGraphic2(): React.ReactElement {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.container}
    >
      <g id="vectorGraphic2" clip-path="url(#clip0_83_168)">
        <g id="loopGroup3" style={{ "--order": 0 } as React.CSSProperties}>
          <path
            id="border6"
            d="M200 147.978L100.401 147.978C81.8406 148.647 54 133.932 54 101.158C54 68.3839 80.8463 54.0034 100.401 54.0034C106.716 53.8922 122.08 56.4709 133.015 67.6749C143.95 78.8789 195.11 129.848 202 136.628"
            stroke="white"
            stroke-width="2.25"
          />
          <path
            id="border5"
            d="M200.5 136.983L101.188 136.983C87.1127 137.496 66 126.225 66.0001 101.121C66.0001 76.0174 86.3587 65.0027 101.188 65.0027C105.976 64.9175 117.627 66.8927 125.92 75.4745C134.213 84.0563 199.275 149.264 204.5 154.458"
            stroke="white"
            stroke-width="2.25"
          />
          <path
            id="loop3"
            d="M199.808 142.18L100.499 142.18C84.1478 142.768 59.6207 129.841 59.6207 101.049C59.6207 72.2567 83.2719 59.6234 100.499 59.6234C106.062 59.5258 119.597 61.7911 129.231 71.6339C138.865 81.4766 199.107 141.544 205.177 147.5"
            stroke="#33677C"
            stroke-width="10"
          />
        </g>
        <g id="loopGroup2" style={{ "--order": 1 } as React.CSSProperties}>
          <path
            id="border3"
            d="M200 159.973L100.091 159.973C76.8546 160.812 41.9999 142.34 41.9999 101.198C41.9999 60.0564 75.6098 42.0043 100.091 42.0043C107.997 41.8647 127.231 45.1018 140.922 59.1664C154.612 73.231 194.874 113.363 203.5 121.874"
            stroke="white"
            stroke-width="2.25"
          />
          <path
            id="border4"
            d="M200.5 147.978L100.327 147.978C81.796 148.647 53.9999 133.932 53.9999 101.158C53.9999 68.3839 80.8033 54.0034 100.327 54.0034C106.631 53.8922 121.97 56.4709 132.888 67.6749C143.806 78.8789 195.892 130.72 202.771 137.5"
            stroke="white"
            stroke-width="2.25"
          />
          <path
            id="loop2"
            d="M200 153.818L100.357 153.818C79.385 154.572 47.9263 137.992 47.9264 101.063C47.9264 64.1337 78.2615 47.9302 100.357 47.9302C107.493 47.8049 124.853 50.7105 137.21 63.3349C149.566 75.9592 198.692 124.86 206.477 132.5"
            stroke="#618B9C"
            stroke-width="10"
          />
        </g>
        <g id="loopGroup1" style={{ "--order": 2 } as React.CSSProperties}>
          <path
            id="border1"
            d="M200 170.917L99.5883 170.917C71.753 171.92 30 149.856 30 100.712C30 51.5682 70.2618 30.0051 99.5883 30.0051C109.059 29.8385 132.1 33.7051 148.5 50.5051C164.9 67.3051 192.167 94.3385 202.5 104.505"
            stroke="white"
            stroke-width="2.25"
          />
          <path
            id="border2"
            d="M200 158.973L99.7173 158.973C76.6304 159.812 42 141.34 42 100.198C42 59.0564 75.3936 41.0043 99.7173 41.0043C107.572 40.8647 126.683 44.1018 140.285 58.1664C153.888 72.231 194.148 112.489 202.719 121"
            stroke="white"
            stroke-width="2.25"
          />
          <path
            id="loop1"
            d="M200.5 164.97L99.8575 164.97C74.3145 165.888 36 145.694 36 100.717C36 55.7396 72.9462 36.0047 99.8575 36.0047C108.548 35.8521 129.692 39.391 144.741 54.7667C159.791 70.1423 195.518 105.596 205 114.9"
            stroke="#ACD3FA"
            stroke-width="10"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_83_168">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

import React from "react";
import styles from "./_vectorGraphic1.module.scss";

/**
 * An animated graphic that plays on repeat
 * TODO: working, but refactor to make it cleaner
 */
export default function VectorGraphic1(): React.ReactElement {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.container}
    >
      <g id="vectorGraphic1" clip-path="url(#clip0_79_103)">
        <g id="loopGroup3" style={{ "--order": 0 } as React.CSSProperties}>
          <path
            id="border6"
            d="M51.5533 0V98.5717C51.5533 130.527 78.5861 146 98.2766 146C117.967 146 145 131.536 145 98.5717C145 65.6073 116.966 50.807 98.2766 51.4797H0"
            stroke="white"
            stroke-width="2"
          />
          <path
            id="border5"
            d="M62.1058 0V98.547C62.1058 123.108 82.9037 135 98.0529 135C113.202 135 134 123.883 134 98.547C134 73.2108 112.432 61.8354 98.0529 62.3525H0"
            stroke="white"
            stroke-width="2"
          />
          <path
            id="loop3"
            d="M56.9197 0V98.7467C56.9197 127.225 80.8939 141.015 98.3566 141.015C115.819 141.015 139.793 128.124 139.793 98.7467C139.793 69.369 114.931 56.1791 98.3566 56.7786H0"
            stroke="#33677C"
            stroke-width="10"
          />
        </g>
        <g id="loopGroup2" style={{ "--order": 1 } as React.CSSProperties}>
          <path
            id="border4"
            d="M40.7435 -1V99.0851C40.7435 138.78 74.3748 158 98.8717 158C123.369 158 157 140.033 157 99.0851C157 58.1372 122.123 39.7524 98.8717 40.5881H-1"
            stroke="white"
            stroke-width="2"
          />
          <path
            id="border3"
            d="M51.1126 0V98.7244C51.1126 131.25 78.5622 147 98.5563 147C118.55 147 146 132.278 146 98.7244C146 65.1711 117.534 50.1064 98.5563 50.7911H-0.5"
            stroke="white"
            stroke-width="2"
          />
          <path
            id="loop2"
            d="M46.1612 0V99.2319C46.1612 135.48 76.6764 153.032 98.9035 153.032C121.131 153.032 151.646 136.625 151.646 99.2319C151.646 61.8389 120 45.0502 98.9035 45.8133H0"
            stroke="#618B9C"
            stroke-width="10"
          />
        </g>
        <g id="loopGroup1" style={{ "--order": 2 } as React.CSSProperties}>
          <path
            id="border1"
            d="M30.3235 0V100.293C30.3235 147.933 70.5853 171 99.9118 171C129.238 171 169.5 149.437 169.5 100.293C169.5 51.1496 127.747 29.085 99.9118 30.088H-0.5"
            stroke="white"
            stroke-width="2"
          />
          <path
            id="border2"
            d="M41.7467 -0.5V99.871C41.7467 139.71 75.3771 159 99.8734 159C124.37 159 158 140.968 158 99.871C158 58.7742 123.124 40.3226 99.8734 41.1613H0"
            stroke="white"
            stroke-width="2"
          />
          <path
            id="loop1"
            d="M36.1012 -0.5V100.023C36.1012 143.802 72.9559 165 99.8006 165C126.645 165 163.5 145.184 163.5 100.023C163.5 54.8618 125.28 34.5853 99.8006 35.5069H0"
            stroke="#ACD3FA"
            stroke-width="10"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_79_103">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

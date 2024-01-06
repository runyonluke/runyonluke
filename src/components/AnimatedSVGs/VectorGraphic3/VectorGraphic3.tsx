import React from "react";
import styles from "./_vectorGraphic3.module.scss";

/**
 * An animated graphic that plays on repeat
 * TODO: working, but refactor to make it cleaner
 */
export default function VectorGraphic3(): React.ReactElement {
  return (
    <svg
      width="399"
      height="200"
      viewBox="0 0 399 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.container}
    >
      <g id="vectorGraphic3" clipPath="url(#clip0_83_182)">
        <g id="loopGroup3" style={{ "--order": 0 } as React.CSSProperties}>
          <path
            id="border6"
            d="M0 54H199.499C229.5 55 246.5 73.9511 246.5 97C246.5 120 235.5 144.5 203.5 147C195.544 147.622 194 144 193.5 141.5C193 139 192.5 135 199.499 133.373H399.5"
            stroke="white"
            strokeWidth="2"
          />
          <path
            id="border5"
            d="M0 42H200C226 42 258.5 61.9674 258.5 96.5C258.5 120 244.525 158.5 200 158.5C192 158.5 181.5 152 181.5 140.5C181.5 129 190 122.38 200 121.715H399"
            stroke="white"
            strokeWidth="2"
          />
          <path
            id="loop3"
            d="M-1 48H199.725C223.501 48 255.5 66.5 252.5 102.5C250.139 130.832 231.5 152.5 201.5 153C196.473 153.084 188.025 151 187.5 140.5C187.225 135.007 190 129 199.725 127.689H401"
            stroke="#33677C"
            strokeWidth="10"
          />
        </g>
        <g id="loopGroup2" style={{ "--order": 1 } as React.CSSProperties}>
          <path
            id="border4"
            d="M0 30H200C225 30 271.861 48.8338 270 100C269 127.5 252 168.5 200 170.5C190 169.667 170 162.4 170 140C170 117.6 190 110.667 200 110H399"
            stroke="white"
            strokeWidth="2"
          />
          <path
            id="border3"
            d="M0 42H200C226 42 258.5 61.9674 258.5 96.5C258.5 120 244.525 158.5 200 158.5C192 158.5 181.5 152 181.5 140.5C181.5 129 190 122.38 200 121.715H399"
            stroke="white"
            strokeWidth="2"
          />
          <path
            id="loop2"
            d="M-0.5 36H199.975C223.722 36 269.5 55.5 264 105C260.848 133.365 240 164.5 199 164.5C189.501 163.664 175.525 155.5 175.525 140.5C175.525 122.993 190.476 116.669 199.975 116H401"
            stroke="#618B9C"
            strokeWidth="10"
          />
        </g>
        <g id="loopGroup1" style={{ "--order": 2 } as React.CSSProperties}>
          <path
            id="border2"
            d="M0 30H200C225 30 271.861 48.8338 270 100C269 127.5 252 168.5 200 170.5C190 169.667 170 162.4 170 140C170 117.6 190 110.667 200 110H399"
            stroke="white"
            strokeWidth="2"
          />
          <path
            id="border1"
            d="M0 18H200C240 21 281.524 47 282 96C282.422 139.5 251 182 200 182C194.5 182 158 176.013 158 138.5C158 119.5 174.5 100 200 98.2847H399"
            stroke="white"
            strokeWidth="2"
          />
          <path
            id="loop1"
            d="M0 24H200.475C228 24 276 47 276 95.5C276 144 241.475 176 200.475 176C189.5 176 164 167.5 164 139.5C164 121.993 177 106.5 200.475 104H401.5"
            stroke="#ACD3FA"
            strokeWidth="10"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_83_182">
          <rect width="399" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

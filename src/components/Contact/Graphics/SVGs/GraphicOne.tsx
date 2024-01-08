import React from "react";

/**
 * An animated graphic that plays on repeat
 */
export default function GraphicOne(): React.ReactElement {
  return (
    <svg
      width="250"
      height="250"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_89_276)">
        <g style={{ "--order": 0 } as React.CSSProperties}>
          <path
            d="M281.5 140.373H81.4988C74.5 142 75 146 75.5 148.5C76 151 77.5443 154.622 85.5 154C117.5 151.5 128.5 127 128.5 104V-3.5"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M281 128.715H82C72 129.38 63.5 136 63.5 147.5C63.5 159 74 165.5 82 165.5C126.525 165.5 140.5 127 140.5 103.5V0"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M283 134.689H81.7246C72 136 69.2254 142.007 69.5 147.5C70.025 158 78.4727 160.084 83.5 160C113.5 159.5 132.139 137.832 134.5 109.5V-0.5"
            stroke="#618B9C"
            strokeWidth="10"
          />
        </g>
        <g style={{ "--order": 1 } as React.CSSProperties}>
          <path
            d="M281 117H82C72 117.667 52 124.6 52 147C52 169.4 72 176.667 82 177.5C134 175.5 151 134.5 152 107V0"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M281 128.715H82C72 129.38 63.5 136 63.5 147.5C63.5 159 74 165.5 82 165.5C126.525 165.5 140.5 127 140.5 103.5V-1"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M283 123H81.9749C72.4762 123.669 57.525 129.993 57.525 147.5C57.525 162.5 71.5012 170.664 81 171.5C122 171.5 142.848 140.365 146 112V0"
            stroke="#33677C"
            strokeWidth="10"
          />
        </g>
        <g style={{ "--order": 2 } as React.CSSProperties}>
          <path
            d="M281 117H82C72 117.667 52 124.6 52 147C52 169.4 72 176.667 82 177.5C134 175.5 151 134.5 152 107V-0.5"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M281 105.285H82C56.5 107 40 126.5 40 145.5C40 183.013 76.5 189 82 189C133 189 164.422 146.5 164 103V-1"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M283.5 111H82.4749C59 113.5 46 128.993 46 146.5C46 174.5 71.5 183 82.4749 183C123.475 183 158 151 158 102.5V0"
            strokeWidth="10"
            stroke="#1F2836"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_89_276">
          <rect width="250" height="250" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

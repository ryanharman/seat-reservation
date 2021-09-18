import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Logout = ({ width = 19, height = 19, colour = "" }: Props) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 140 140" height={height} width={width}>
      <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
        <path
          d="M7.5 12.004L23.25 12.004"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M19.5 15.754L23.25 12.004 19.5 8.254"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M15.75,16.5V21a1.437,1.437,0,0,1-1.364,1.5H2.113A1.437,1.437,0,0,1,.75,21V3A1.436,1.436,0,0,1,2.113,1.5H14.386A1.437,1.437,0,0,1,15.75,3V7.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
      </g>
    </svg>
  );
};

export default Logout;

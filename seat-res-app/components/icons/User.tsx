import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const User = ({ width = 19, height = 19, colour = "" }: Props) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 140 140" height={height} width={width}>
      <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
        <path
          d="M6.750 6.000 A5.250 5.250 0 1 0 17.250 6.000 A5.250 5.250 0 1 0 6.750 6.000 Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M2.25,23.25a9.75,9.75,0,0,1,19.5,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
      </g>
    </svg>
  );
};

export default User;

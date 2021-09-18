import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Pin = ({ width = 19, height = 19, colour = "" }: Props) => {
  return (
    <svg className={"stroke-current " + colour} width={width} height={height} viewBox="0 0 12.2 17.55">
      <g transform="translate(-117.438 -1285.372)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M38.7,12.35c0,4.458-5.35,10.7-5.35,10.7S28,16.809,28,12.35a5.35,5.35,0,1,1,10.7,0Z"
          transform="translate(90.188 1279.122)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M56,36.783A1.783,1.783,0,1,0,57.783,35,1.783,1.783,0,0,0,56,36.783Z"
          transform="translate(65.754 1254.689)"
        />
      </g>
    </svg>
  );
};

export default Pin;

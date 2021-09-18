import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Notepad = ({ width = 19, height = 19, colour = "" }: Props) => {
  return (
    <svg className={"stroke-current " + colour} width={width} height={height} viewBox="0 0 15.92 15.92">
      <g transform="translate(0.75 0.75)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M91,11.006,93.4,7l2.4,4.006v8.011a2.4,2.4,0,0,1-4.807,0Z"
          transform="translate(-81.387 -7)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M14.21,7H8.6A1.6,1.6,0,0,0,7,8.6V19.818a1.6,1.6,0,0,0,1.6,1.6h4.807"
          transform="translate(-7 -7)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M35,49h3.2"
          transform="translate(-31.796 -44.193)"
        />
      </g>
    </svg>
  );
};

export default Notepad;

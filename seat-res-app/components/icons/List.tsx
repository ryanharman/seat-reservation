import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const List = ({ width = 19, height = 19, colour = "" }: Props) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 140 140" height={height} width={width}>
      <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
        <path
          d="M0.750 2.998 A2.250 2.250 0 1 0 5.250 2.998 A2.250 2.250 0 1 0 0.750 2.998 Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M0.750 11.998 A2.250 2.250 0 1 0 5.250 11.998 A2.250 2.250 0 1 0 0.750 11.998 Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M0.750 20.998 A2.250 2.250 0 1 0 5.250 20.998 A2.250 2.250 0 1 0 0.750 20.998 Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M8.25 3.748L23.25 3.748"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M8.25 12.748L23.25 12.748"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M8.25 21.748L23.25 21.748"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
      </g>
    </svg>
  );
};

export default List;

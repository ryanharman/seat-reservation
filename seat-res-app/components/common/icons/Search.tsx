import React from "react";

interface IProps {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Search = ({ width = 19, height = 19, colour = "" }: IProps) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 14.547 14.547" height={height} width={width}>
      <g transform="translate(0.75 0.75)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M7,12.307A5.307,5.307,0,1,0,12.307,7,5.307,5.307,0,0,0,7,12.307Z"
          transform="translate(-7 -7)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M100.3,100.3l-3.677-3.677"
          transform="translate(-87.568 -87.568)"
        />
      </g>
    </svg>
  );
};

export default Search;

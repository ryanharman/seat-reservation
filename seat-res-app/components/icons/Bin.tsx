import React from "react";

interface IProps {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Bin = ({ width = 19, height = 19, colour = "" }: IProps) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 10.609 11.174" height={height} width={width}>
      <g transform="translate(0.5 0.5)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5,35.056h9.609"
          transform="translate(-10.5 -32.791)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M30.717,42.913H25.63a1.13,1.13,0,0,1-1.13-1.13V35h7.348v6.783A1.13,1.13,0,0,1,30.717,42.913Z"
          transform="translate(-23.37 -32.739)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M44.912,9.261V9a2,2,0,1,1,4,0v.259"
          transform="translate(-42.133 -7)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M55.846,63v3.391"
          transform="translate(-52.184 -58.478)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M84.21,63v3.391"
          transform="translate(-78.258 -58.478)"
        />
      </g>
    </svg>
  );
};

export default Bin;

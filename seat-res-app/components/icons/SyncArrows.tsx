import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const SyncArrows = ({ width = 19, height = 19, colour = "" }: Props) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 18.194 16.616" height={height} width={width}>
      <g transform="translate(-6.091 -11.094)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M108.766,85.163l2.52-.631.63,2.52"
          transform="translate(-88.54 -63.241)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M29.8,85.036a7.587,7.587,0,0,1-7.3,5.6h0a7.587,7.587,0,0,1-7.1-4.976"
          transform="translate(-7.308 -63.68)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M10.149,37.967,7.63,38.6,7,36.078"
          transform="translate(0 -21.085)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M13.832,17.448a7.587,7.587,0,0,1,7.3-5.6h0a7.587,7.587,0,0,1,7.1,4.976"
          transform="translate(-5.944)"
        />
      </g>
    </svg>
  );
};

export default SyncArrows;

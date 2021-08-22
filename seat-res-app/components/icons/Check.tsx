import React from "react";

interface IProps {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Check = ({ width = 19, height = 19, colour = "" }: IProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 19 19">
      <g transform="translate(2355 5626)">
        <circle className={"fill-current " + colour} cx="9.5" cy="9.5" r="9.5" transform="translate(-2355 -5626)" />
        <path
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7,22.626l1.789,2.2a1,1,0,0,0,1.538-.009l5.9-7.322"
          transform="translate(-2357 -5637.851)"
        />
      </g>
    </svg>
  );
};

export default Check;

import React from "react";

interface IProps {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Arrow = ({ width = 19, height = 19, colour = "text-link-hover" }: IProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 15.676 9.997">
      <g transform="translate(14.926 8.936) rotate(180)">
        <path
          className={"stroke-current " + colour}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0,0V14.176"
          transform="translate(0 3.938) rotate(-90)"
        />
        <path
          className={"stroke-current " + colour}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M0,3.938,3.938,0,7.876,3.938"
          transform="translate(0 7.876) rotate(-90)"
        />
      </g>
    </svg>
  );
};

export default Arrow;

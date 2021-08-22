import React from "react";

interface IProps {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const NotVisible = ({ width = 19, height = 19, colour = "" }: IProps) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 16.999 16.572" height={height} width={width}>
      <g transform="translate(-6.153 -9.439)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M75.95,52.4a15.233,15.233,0,0,1,1.387,1.321,1.139,1.139,0,0,1,0,1.567C76.1,56.63,73.278,59.214,70,59.214"
          transform="translate(-55.347 -36.814)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M8.7,38.26a16.679,16.679,0,0,1-1.387-1.333,1.139,1.139,0,0,1,0-1.567A11.025,11.025,0,0,1,14.653,31.5"
          transform="translate(0 -18.45)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M10.5,24.951,24.951,10.5"
          transform="translate(-3.073)"
        />
      </g>
    </svg>
  );
};

export default NotVisible;

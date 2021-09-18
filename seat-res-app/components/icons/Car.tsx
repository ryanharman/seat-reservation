import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Car = ({ width = 19, height = 19, colour = "" }: Props) => {
  return (
    <svg className={"stroke-current " + colour} width={width} height={height} viewBox="0 0 18.375 12.75">
      <g transform="translate(0.75 0.75)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M31,30.187l-1.275-2.843a1.687,1.687,0,0,0-1.582-1.1H20.357a1.687,1.687,0,0,0-1.582,1.1L17.5,30.187"
          transform="translate(-15.812 -26.25)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M8.75,96.063v1.149a1.125,1.125,0,0,0,2.25,0V96.087"
          transform="translate(-8.187 -87.087)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M116,96.063v1.149a1.125,1.125,0,0,1-2.25,0V96.087"
          transform="translate(-99.687 -87.087)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M115.937,74.375a.281.281,0,0,1,.281.281"
          transform="translate(-101.594 -68.187)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M113.75,74.656a.281.281,0,0,1,.281-.281"
          transform="translate(-99.687 -68.187)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M114.031,76.844a.281.281,0,0,1-.281-.281"
          transform="translate(-99.687 -70.094)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M116.219,76.562a.281.281,0,0,1-.281.281"
          transform="translate(-101.594 -70.094)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M22.156,74.375a.281.281,0,0,0-.281.281"
          transform="translate(-19.625 -68.187)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M24.344,74.656a.281.281,0,0,0-.281-.281"
          transform="translate(-21.531 -68.187)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M24.062,76.844a.281.281,0,0,0,.281-.281"
          transform="translate(-21.531 -70.094)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M21.875,76.562a.281.281,0,0,0,.281.281"
          transform="translate(-19.625 -70.094)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M5.875,56.875H19.75a1.5,1.5,0,0,1,1.5,1.5v2.813a.75.75,0,0,1-.75.75H5.125a.75.75,0,0,1-.75-.75V58.375A1.5,1.5,0,0,1,5.875,56.875Z"
          transform="translate(-4.375 -52.937)"
        />
      </g>
    </svg>
  );
};

export default Car;

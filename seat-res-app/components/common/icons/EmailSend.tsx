import React from "react";

interface IProps {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const EmailSend = ({ width = 19, height = 19, colour = "" }: IProps) => {
  return (
    <svg
      className={"stroke-current " + colour}
      viewBox="0 0 140 140"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
        <path
          d="M11.249 17.252 A6.000 6.000 0 1 0 23.249 17.252 A6.000 6.000 0 1 0 11.249 17.252 Z"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M14.249 17.252L20.249 17.252"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M20.249 17.252L17.999 19.502"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M20.249 17.252L17.999 15.002"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M8.249,15.752h-6a1.5,1.5,0,0,1-1.5-1.5v-12a1.5,1.5,0,0,1,1.5-1.5h18a1.5,1.5,0,0,1,1.5,1.5V9"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M21.409,1.3,13.265,7.566a3.307,3.307,0,0,1-4.033,0L1.088,1.3"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
      </g>
    </svg>
  );
};

export default EmailSend;

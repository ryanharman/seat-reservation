import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Calendar = ({ width = 19, height = 19, colour = "" }: Props) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 12.3 12.3" height={height} width={width}>
      <g transform="translate(0.6 0.6)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2px"
          d="M42,9.562V7"
          transform="translate(-38.917 -7)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2px"
          d="M98,9.562V7"
          transform="translate(-89.983 -7)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2px"
          d="M7,21H18.1v9.867H7Z"
          transform="translate(-7 -19.767)"
        />
      </g>
    </svg>
  );
};

export default Calendar;

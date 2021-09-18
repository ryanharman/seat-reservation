import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Chevron = ({ width = 19, height = 19, colour = "" }: Props) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 9.646 5.571" height={height} width={width}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2px"
        d="M7,38.5l3.467,3.637a.418.418,0,0,0,.592,0L14.526,38.5"
        transform="translate(-5.94 -37.44)"
      />{" "}
    </svg>
  );
};

export default Chevron;

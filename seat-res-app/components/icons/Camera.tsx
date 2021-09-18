import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Camera = ({ width = 19, height = 19, colour = "" }: Props) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 13.128 10.544" height={height} width={width}>
      <g transform="translate(0.75 0.75)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          d="M15.646,23.882v-1.59A1.292,1.292,0,0,0,14.354,21H8.292A1.292,1.292,0,0,0,7,22.292v6.46a1.292,1.292,0,0,0,1.292,1.292h6.062a1.292,1.292,0,0,0,1.292-1.292v-1.59l2.032,1.084a.646.646,0,0,0,.95-.57V23.368a.646.646,0,0,0-.95-.57Z"
          transform="translate(-7 -21)"
        />
      </g>
    </svg>
  );
};

export default Camera;

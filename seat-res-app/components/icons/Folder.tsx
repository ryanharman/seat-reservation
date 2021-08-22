import React from "react";

interface IProps {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Folder = ({ width = 19, height = 19, colour = "" }: IProps) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 17.246 17.216" height={height} width={width}>
      <g transform="translate(-2.317 -2.317)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2px"
          d="M95.159,91.966a1,1,0,1,0,1-1A1,1,0,0,0,95.159,91.966Z"
          transform="translate(-81.231 -77.538)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2px"
          d="M74.874,62.257l.3.969a.662.662,0,0,0,.783.455l.983-.228a.893.893,0,0,1,.85,1.48l-.688.742a.668.668,0,0,0,0,.905l.688.742a.893.893,0,0,1-.85,1.48l-.983-.228a.664.664,0,0,0-.779.458l-.3.969a.888.888,0,0,1-1.7,0l-.3-.969a.664.664,0,0,0-.783-.455l-.983.228a.893.893,0,0,1-.85-1.48l.688-.742a.668.668,0,0,0,0-.905l-.688-.742a.893.893,0,0,1,.85-1.48l.983.228a.662.662,0,0,0,.783-.455l.3-.969a.888.888,0,0,1,1.7,0Z"
          transform="translate(-59.095 -51.702)"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2px"
          d="M16.843,8.139V5.7a.7.7,0,0,0-.7-.7H9.266a.7.7,0,0,1-.623-.385L7.983,3.3a.7.7,0,0,0-.623-.385H3.613a.7.7,0,0,0-.7.7V14.058a.7.7,0,0,0,.7.7H8.836"
          transform="translate(0 0)"
        />
      </g>
    </svg>
  );
};

export default Folder;

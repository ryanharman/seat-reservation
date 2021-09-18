import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Add = ({ width = 19, height = 19, colour = "text-link-hover" }: Props) => {
  return (
    <svg className={"fill-current " + colour} viewBox="0 0 12.5 12.5" height={height} width={width}>
      <path d="M11.607,5.357H7.366a.223.223,0,0,1-.223-.223V.893a.893.893,0,1,0-1.786,0V5.134a.223.223,0,0,1-.223.223H.893a.893.893,0,1,0,0,1.786H5.134a.223.223,0,0,1,.223.223v4.241a.893.893,0,1,0,1.786,0V7.366a.223.223,0,0,1,.223-.223h4.241a.893.893,0,1,0,0-1.786Z" />
    </svg>
  );
};

export default Add;

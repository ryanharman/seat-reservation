import React from "react";

interface IProps {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Edit = ({ width = 19, height = 19, colour = "" }: IProps) => {
  return (
    <svg className={"stroke-current " + colour} width={width} height={height} viewBox="0 0 9.528 9.649">
      <g transform="translate(0.5 0.621)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22.15,16.625l-5.422,5.422-2.665.533.533-2.665,5.422-5.422a1.5,1.5,0,0,1,2.126,0l.006.006a1.5,1.5,0,0,1,0,2.126Z"
          transform="translate(-14.063 -14.053)"
        />
      </g>
    </svg>
  );
};

export default Edit;

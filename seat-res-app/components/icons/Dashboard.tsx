import React from "react";

interface IProps {
  width?: number | string;
  height?: number | string;
  colour?: string;
}

const Dashboard = ({ width = 19, height = 19, colour = "" }: IProps) => {
  return (
    <svg className={"stroke-current " + colour} viewBox="0 0 140 140" height={height} width={width}>
      <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
        <path
          d="M10.5,12.526a.978.978,0,0,1-.975.98h-7.8a.977.977,0,0,1-.975-.98V1.736a.978.978,0,0,1,.976-.98l7.8.013a.978.978,0,0,1,.974.98Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M23.246,6.544a.969.969,0,0,1-.975.962h-7.8a.968.968,0,0,1-.975-.962V1.731a.968.968,0,0,1,.973-.962l7.8-.013a.97.97,0,0,1,.977.962Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M10.5,22.291a.971.971,0,0,1-.977.965l-7.8-.013a.969.969,0,0,1-.973-.964V17.47a.969.969,0,0,1,.975-.964h7.8a.97.97,0,0,1,.975.964Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M14.472,23.256a.978.978,0,0,1-.976-.981V11.487a.978.978,0,0,1,.975-.981h7.8a.978.978,0,0,1,.975.981V22.262a.979.979,0,0,1-.974.981Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
      </g>
    </svg>
  );
};

export default Dashboard;

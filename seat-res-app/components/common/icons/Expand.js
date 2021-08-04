import React from "react";

const Expand = ({ width = 19, height = 19, colour = "" }) => {
    return (
        <svg className={"stroke-current " + colour} viewBox="0 0 140 140" height={height} width={width}>
            <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                <path
                    d="M9.75 14.248L0.75 23.248"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                ></path>
                <path
                    d="M23.25 7.498L23.25 0.748 16.5 0.748"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                ></path>
                <path
                    d="M0.75 16.498L0.75 23.248 7.5 23.248"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                ></path>
                <path
                    d="M23.25 0.748L14.25 9.748"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                ></path>
            </g>
        </svg>
    );
};

export default Expand;

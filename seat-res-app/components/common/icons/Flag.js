import React from "react";

const Flag = ({ width = 19, height = 19, colour = "" }) => {
    return (
        <svg className={"stroke-current " + colour} viewBox="0 0 10.244 12.742" height={height} width={width}>
            <g transform="translate(0.75 0.75)">
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5px"
                    d="M21,7V18.242"
                    transform="translate(-21 -7)"
                />
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5px"
                    d="M29.744,13.246H21V7h8.744l-3.123,3.123Z"
                    transform="translate(-21 -7)"
                />
            </g>
        </svg>
    );
};

export default Flag;

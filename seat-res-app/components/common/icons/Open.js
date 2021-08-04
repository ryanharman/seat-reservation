import React from "react";

const Open = ({ width = 19, height = 19, colour = "text-link-hover" }) => {
    return (
        <svg className={"stroke-current " + colour} viewBox="0 0 16.811 16.811" height={height} width={width}>
            <g transform="translate(0.75 1.061)">
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5px"
                    d="M12.833,7H8.667A1.667,1.667,0,0,0,7,8.667V20.333A1.667,1.667,0,0,0,8.667,22H20.333A1.667,1.667,0,0,0,22,20.333V16.167"
                    transform="translate(-7 -7)"
                />
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5px"
                    d="M98,7h4.167v4.167"
                    transform="translate(-87.167 -7)"
                />
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5px"
                    d="M77.5,7,70,14.5"
                    transform="translate(-62.5 -7)"
                />
            </g>
        </svg>
    );
};

export default Open;

import React from "react";

const Building = ({ width = 19, height = 19, colour = "" }) => {
    return (
        <svg className={"stroke-current " + colour} width={width} height={height} viewBox="0 0 12.756 12.756">
            <g transform="translate(-116.882 -1213.683)">
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.5,10.127,10.752,7,7,10.127v8.129h7.5Z"
                    transform="translate(110.632 1207.433)"
                />
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M91,63h3.752v6.253H91Z"
                    transform="translate(34.136 1156.436)"
                />
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M35,63h2.5"
                    transform="translate(85.133 1156.436)"
                />
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M35,91h2.5"
                    transform="translate(85.133 1130.937)"
                />
            </g>
        </svg>
    );
};

export default Building;

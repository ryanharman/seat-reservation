import React from "react";

const Exclamation = ({ width = 19, height = 19, colour = "" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 19 19">
            <g transform="translate(-377.361 -171)">
                <g transform="translate(2732.361 5797)">
                    <circle
                        className={"fill-current " + colour}
                        fill=""
                        cx="9.5"
                        cy="9.5"
                        r="9.5"
                        transform="translate(-2355 -5626)"
                    />
                </g>
                <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M70,35v5.524"
                    transform="translate(316.828 140.383)"
                />
                <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                    d="M65,90.409A.409.409,0,1,0,65.409,90,.409.409,0,0,0,65,90.409Z"
                    transform="translate(321.419 93.899)"
                />
            </g>
        </svg>
    );
};

export default Exclamation;

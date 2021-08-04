import React, { useState } from "react";

/*
Height and width have to follow the Tailwinds values
https://tailwindcss.com/docs/width
https://tailwindcss.com/docs/height
*/

const Checkbox = ({ height = "5", width = "5", onChange, initialValue = false }) => {
    const [value, setValue] = useState(initialValue);

    const onChangeHandler = (event) => {
        setValue(!value);
        onChange(event);
    };

    return (
        <label className={`h-${height} w-${width} flex flex-shrink-0 relative transition-all cursor-pointer`}>
            <input
                type="checkbox"
                className="h-full w-full appearance-none cursor-pointer transition-all rounded-md bg-checkbox-bg border border-checkbox-bg hover:border-checkbox-hover checked:bg-checkbox-active checkbox:border-checkbox-active"
                checked={value}
                onChange={(e) => onChangeHandler(e)}
            />
            {value && (
                <div className={"h-full w-full absolute flex justify-center items-center"}>
                    <TickSVG />
                </div>
            )}
        </label>
    );
};

const TickSVG = () => {
    return (
        <svg
            className="w-3/5 h-3/5 pointer-events-none transition-all"
            version="1.1"
            viewBox="0 0 17 12"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <g transform="translate(-9 -11)" fill="#FFFFFF" fillRule="nonzero">
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
            </g>
        </svg>
    );
};

export default Checkbox;

import React from "react";
import Select from "react-select";

// https://react-select.com/

const SelectChoice = ({ value, onChange, isMulti, disabled, isClearable, placeholder, options, alternateStyle }) => {
    return (
        <Select
            styles={alternateStyle ? alternateStyles : selectStyles}
            menuPlacement="auto"
            isClearable={isClearable}
            isDisabled={disabled}
            isMulti={isMulti}
            options={options}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

const selectStyles = {
    option: (styles) => ({
        ...styles,
        padding: 8,
        fontSize: 12,
        color: "#000000",
    }),
    menu: (styles) => ({
        ...styles,
        padding: 0,
        border: "1px solid var(--whisper-grey)",
        boxShadow: "0px 3px 6px #0000000D",
    }),
    control: (styles, state) => ({
        ...styles,
        border: state.selectProps.menuIsOpen ? "1px solid var(--royal-blue)" : "1px solid var(--whisper-grey)",
        boxShadow: "none",
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        display: "none",
    }),
    dropdownIndicator: (styles) => ({
        ...styles,
        color: "var(--black)",
    }),
    indicatorsContainer: (styles, state) => ({
        ...styles,
        transition: "all 0.2s ease",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
};

const alternateStyles = {
    ...selectStyles,
    control: (styles) => ({
        ...styles,
        borderTop: "none",
        borderRight: "none",
        borderLeft: "none",
        borderBottom: "1px solid var(--black)",
        boxShadow: "none",
        borderRadius: "0",
        backgroundColor: "transparent",
    }),
};

export default SelectChoice;

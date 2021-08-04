import React from "react";
import Select, { ActionMeta, GroupTypeBase, OptionsType, OptionTypeBase } from "react-select";

// https://react-select.com/

interface ISelectProps {
  value: OptionTypeBase;
  placeholder?: string;
  isMulti?: boolean;
  disabled: boolean;
  isClearable: boolean;
  alternateStyle: boolean;
  onChange: any; // fix later
  options: OptionsType<Options>;
}

type Options = {
  value: string;
  label: string;
};

const SelectChoice = ({
  value,
  onChange,
  isMulti = false,
  disabled,
  isClearable,
  placeholder,
  options,
  alternateStyle,
}: ISelectProps) => {
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
  option: (styles: any) => ({
    ...styles,
    padding: 8,
    fontSize: 12,
    color: "#000000",
  }),
  menu: (styles: any) => ({
    ...styles,
    padding: 0,
    border: "1px solid grey",
    boxShadow: "0px 3px 6px #0000000D",
  }),
  control: (styles: any, state: any) => ({
    ...styles,
    border: state.selectProps.menuIsOpen ? "1px solid blue" : "1px solid grey",
    boxShadow: "none",
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    display: "none",
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    color: "black",
  }),
  indicatorsContainer: (styles: any, state: any) => ({
    ...styles,
    transition: "all 0.2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
};

const alternateStyles = {
  ...selectStyles,
  control: (styles: any) => ({
    ...styles,
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    borderBottom: "1px solid black",
    boxShadow: "none",
    borderRadius: "0",
    backgroundColor: "transparent",
  }),
};

export default SelectChoice;

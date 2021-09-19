import React, { FormEvent } from "react";

interface InputProps {
  className?: string;
  type?: string;
  disabled?: boolean;
  name: string;
  value: string | number;
  placeholder: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  [x: string]: any; // ...rest type
}

const Input = ({
  className,
  type = "text",
  name,
  value,
  onChange,
  disabled = false,
  placeholder,
  ...rest
}: InputProps) => {
  return (
    <input
      name={name}
      autoComplete="false"
      className={`text-sm flex-grow transition-all outline-none border border-gray-500 rounded py-2 px-4 focus:border-blue-400 ${className}`}
      type={type}
      value={value}
      onChange={(e) => onChange(e)}
      disabled={disabled}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;

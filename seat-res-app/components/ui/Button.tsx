import React from "react";

interface IButtonProps {
  primary: boolean;
  disabled: boolean;
  submission: boolean;
  nextState: boolean;
  onClick: Function;
  icon: Function;
  children: React.ReactNode;
  className: string;
}

// Classes for styling taken from ../styles/globals.css
// TODO: disabled styling
const Button = ({
  primary,
  disabled,
  onClick,
  icon,
  submission,
  nextState,
  children,
  className = "",
}: IButtonProps) => {
  const buttonIconStyling = primary
    ? "btn-icon btn-primary"
    : submission
    ? "btn-icon btn-complete-submission"
    : nextState
    ? "btn-icon btn-next-state"
    : "btn-icon btn-secondary";

  return (
    <div>
      {icon ? (
        <button
          onClick={() => onClick()}
          type="button"
          disabled={disabled}
          className={`${buttonIconStyling} ${className}`}
        >
          {icon({ colour: "text-white" })}
          {children}
        </button>
      ) : (
        <button
          onClick={() => onClick()}
          type="button"
          disabled={disabled}
          className={`${primary ? "btn btn-primary" : "btn btn-secondary"} ${className}`}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;

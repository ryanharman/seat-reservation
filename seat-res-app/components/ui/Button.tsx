import React from "react";
import { Icon } from ".";

interface IButtonProps {
  primary: boolean;
  disabled?: boolean;
  submission?: boolean;
  nextState?: boolean;
  onClick: Function;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

// Classes for styling taken from ../styles/globals.css
// TODO: disabled styling
const Button = ({
  primary,
  disabled = false,
  onClick,
  icon,
  submission = false,
  nextState = false,
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
          <Icon icon={icon} width={14} height={14} />
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

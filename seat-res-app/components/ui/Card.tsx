import React from "react";
import IconComponent from "./Icon";

interface CardProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactChild[] | React.ReactChild;
}

export const Card = ({ onClick, children, className = "" }: CardProps) => {
  const cursorClass = onClick ? "cursor-pointer" : "";
  return (
    <div
      className={`${className} ${cursorClass} min-w-72 flex flex-col bg-white border border-gray-300 p-6 rounded-md`}
      onClick={() => onClick && onClick()}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: React.ReactChild[] | React.ReactChild;
}

export const CardHeader = ({ children, className = "" }: CardHeaderProps) => {
  return (
    <div className={`${className} font-bold text-lg flex flex-row justify-between items-center mb-4`}>{children}</div>
  );
};

interface CardBodyProps {
  className?: string;
  children: React.ReactChild[] | React.ReactChild;
}

export const CardBody = ({ children, className = "" }: CardBodyProps) => {
  return <div className={`${className} flex flex-col gap-2`}>{children}</div>;
};

interface CardBodyItemProps {
  className?: string;
  icon: string;
  text: string;
  toolTipText: string;
  arrow: boolean;
  children: React.ReactChild[] | React.ReactChild;
}

export const CardBodyItem = ({ icon, text, toolTipText, arrow, className = "" }: CardBodyItemProps) => {
  return (
    <div className={`${className} flex items-center gap-4 group relative`}>
      {icon && (
        <div className="w-min-4">
          <IconComponent icon={icon} width={14} height={14} />
        </div>
      )}
      <span className="truncate">{text}</span>
      {toolTipText && <CardTooltip text={toolTipText} />}
      {arrow && (
        <div className="absolute right-0 text-link">
          <IconComponent icon="arrow" width={14} height={14} />
        </div>
      )}
    </div>
  );
};

interface CardTooltipProps {
  text: string;
}

export const CardTooltip = ({ text }: CardTooltipProps) => {
  return (
    <div className="z-50 transition-all hidden w-64 absolute inset-x-1/3 bottom-8 group-hover:block">
      <span className="inline-block p-3 rounded-md bg-card-tooltip text-sm text-card-tooltip-text min-h-8 max-h-32 min-w-min max-w-64">
        {text}
      </span>
      <div className="arrow-down ml-3"></div>
    </div>
  );
};

interface CardDateProps {
  time: string;
  date: Date;
}

export const CardDate = ({ time, date }: CardDateProps) => {
  return (
    <div className="flex flex-row gap-2 justify-between items-center">
      <div className="text-bold text-3xl">{time}</div>
      {date && (
        <div className="flex items-center gap-1 text-sm whitespace-nowrap">
          <IconComponent icon="calendar" height={14} width={14} />
          {date}
        </div>
      )}
    </div>
  );
};

interface CardFooterProps {
  className?: string;
  children: React.ReactChild[] | React.ReactChild;
}

export const CardFooter = ({ children, className = "" }: CardFooterProps) => {
  return <div className={`${className} flex flex-col`}>{children}</div>;
};

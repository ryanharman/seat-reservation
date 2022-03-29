import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const IconWrapper = ({ children, onClick }: IconWrapperProps) => {
  return (
    <div
      className="flex items-center transition-all p-2 rounded-lg hover:bg-slate-300 cursor-pointer text-sm gap-2"
      onClick={() => onClick && onClick()}
    >
      {children}
    </div>
  );
};

import React from "react";

interface UserIconProps {
  children: React.ReactChild[] | React.ReactChild;
  bgColor: string;
}

const UserIcon = ({ children, bgColor }: UserIconProps) => {
  return (
    <div
      className={`${bgColor} w-12 h-12 overflow-hidden rounded-full font-semibold text-white text-base flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default UserIcon;

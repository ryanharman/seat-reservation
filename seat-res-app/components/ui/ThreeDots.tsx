import React from "react";

interface ThreeDotsProps {
  onClick: () => void;
}

const ThreeDots = ({ onClick }: ThreeDotsProps) => {
  return (
    <div className="flex flex-col gap-1" onClick={() => onClick()}>
      <div className="w-1 h-1 rounded-full bg-gray-700"></div>
      <div className="w-1 h-1 rounded-full bg-gray-700"></div>
      <div className="w-1 h-1 rounded-full bg-gray-700"></div>
    </div>
  );
};

export default ThreeDots;

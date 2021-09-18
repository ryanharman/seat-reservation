import React from "react";

interface PageTitleProps {
  children: React.ReactChild[] | React.ReactChild;
  margin?: string;
}

const PageTitle = ({ children, margin }: PageTitleProps) => {
  return <div className={`${margin ? margin : "mb-8"} text-gray-400 text-sm`}>{children}</div>;
};

export default PageTitle;

import React from "react";

interface PageTitleProps {
  children: React.ReactChild[] | React.ReactChild;
  margin?: string;
}

const PageTitle = ({ children, margin }: PageTitleProps) => {
  return (
    <div className={`${margin ? margin : "mb-8"} font-semibold text-2xl flex items-center justify-between`}>
      {children}
    </div>
  );
};

export default PageTitle;

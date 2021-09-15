import React from "react";

interface IPageTitleProps {
  children: React.ReactChild[] | React.ReactChild;
  margin?: string;
}

const PageTitle = ({ children, margin }: IPageTitleProps) => {
  return (
    <div className={`${margin && margin} font-semibold text-2xl flex items-center justify-between`}>{children}</div>
  );
};

export default PageTitle;

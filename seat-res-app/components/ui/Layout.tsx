import React from "react";
import { Header } from ".";
import NavBar from "./NavBar";

interface ILayoutProps {
  children: React.ReactChild[] | React.ReactChild;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex flex-col w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;

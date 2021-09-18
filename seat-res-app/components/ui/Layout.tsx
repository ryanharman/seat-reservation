import React from "react";
import { Header, Modal } from ".";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactChild[] | React.ReactChild;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Modal />
      <NavBar />
      <div className="flex flex-col w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;

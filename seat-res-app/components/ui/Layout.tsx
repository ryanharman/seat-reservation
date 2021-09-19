import React from "react";
import { Header, Modal, NavBar } from ".";
import { useModalStore } from "../../stores";

interface LayoutProps {
  children: React.ReactChild[] | React.ReactChild;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Modal useModalStore={useModalStore} />
      <NavBar />
      <div className="flex flex-col w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;

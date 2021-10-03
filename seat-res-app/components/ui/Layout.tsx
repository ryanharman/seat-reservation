import React from "react";
import client from "../../apollo-client";
import { ApolloProvider } from "@apollo/client";
import { Header, Modal, NavBar } from ".";
import { useModalStore } from "../../stores";

interface LayoutProps {
  children: React.ReactChild[] | React.ReactChild;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ApolloProvider client={client}>
      <div className="flex">
        <Modal useModalStore={useModalStore} />
        <NavBar />
        <div className="flex flex-col w-full">
          <Header />
          {children}
        </div>
      </div>
    </ApolloProvider>
  );
};

export default Layout;

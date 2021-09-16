import React from "react";
import { Breadcrumbs } from ".";

const PageHeader = () => {
  return (
    <>
      <header className="w-full p-6 flex gap-4 bg-white z-10">
        <Breadcrumbs />
      </header>
    </>
  );
};

export default PageHeader;

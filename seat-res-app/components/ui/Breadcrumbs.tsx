import React from "react";
import { useRouter } from "next/router";
import StyledLink from "./StyledLink";

const Breadcrumbs = () => {
  const router = useRouter();

  return (
    <div className="text-sm transition-all">
      <StyledLink href="/home" className="text-gray-900">
        Home
      </StyledLink>
      {/* Map over the pathname split idiot */}
      {router.pathname !== "/home" && (
        <>
          <span> / </span>
          <StyledLink href={router.pathname} className="text-gray-500 capitalize">
            {router.pathname.split("/")[1]}
          </StyledLink>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;

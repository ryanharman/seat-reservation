import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const Breadcrumbs = () => {
  const router = useRouter();

  console.log(router.pathname.split("/"));

  return (
    <div className="text-sm transition-all">
      <Link href="/home">
        <a className="text-gray-900 hover:text-blue-500 hover:underline cursor-pointer">Home</a>
      </Link>
      {router.pathname !== "/home" && (
        <>
          <span> / </span>
          <Link href={router.pathname}>
            <a className="text-gray-500 capitalize hover:text-blue-500 hover:underline cursor-pointer">
              {router.pathname.split("/")}
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;

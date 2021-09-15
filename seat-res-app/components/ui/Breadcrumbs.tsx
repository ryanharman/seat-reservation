import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const Breadcrumbs = () => {
  const router = useRouter();

  return (
    <div className="text-sm transition-all">
      <Link href="/home">
        <a className="text-gray-900 hover:text-blue-500 hover:underline cursor-pointer">Home</a>
      </Link>
      {/* Map over the pathname split idiot */}
      {router.pathname !== "/home" && (
        <>
          <span> / </span>
          <Link href={router.pathname}>
            <a className="text-gray-500 capitalize hover:text-blue-500 hover:underline cursor-pointer">
              {router.pathname.split("/")[1]}
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;

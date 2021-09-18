import Link from "next/link";
import React from "react";

interface StyledLinkProps {
  href: string;
  hideUnderline?: boolean;
  as?: string;
  className?: string;
  children?: React.ReactChild[] | React.ReactChild;
}

const StyledLink = ({ children, href, as, className, hideUnderline }: StyledLinkProps) => {
  return (
    <Link href={href} as={as}>
      <a className={`${className} ${!hideUnderline && "hover:text-blue-500 hover:underline"} cursor-pointer`}>
        {children}
      </a>
    </Link>
  );
};

export default StyledLink;

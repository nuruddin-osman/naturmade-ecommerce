import Link from "next/link";
import React from "react";

const LinkForNavProductABC = ({ className, href, title }) => {
  return (
    <Link
      href={href}
      className={`capitalize font-montserrat font-semibold tracking-wider text-lg text-[#4b4d4e] hover:text-[#000] transition-all duration-300 ease-in-out ${className}`}
    >
      {title}
    </Link>
  );
};

export default LinkForNavProductABC;

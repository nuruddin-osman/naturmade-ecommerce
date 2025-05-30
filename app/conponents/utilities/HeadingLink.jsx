import Link from "next/link";
import React from "react";

const HeadingLink = ({ href, className, title }) => {
  return (
    <Link
      href={href}
      className={`${className} text-xl text-[#343438] font-montserrat font-bold leading-8 border-b-2 border-[#FDCA21] border-opacity-100 hover:border-opacity-0 transition-all duration-500`}
    >
      {title}
    </Link>
  );
};

export default HeadingLink;

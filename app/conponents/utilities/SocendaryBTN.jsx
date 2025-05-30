import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SocendaryBTN = ({ title, className, href }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <Link
        className={`font-bold font-montserrat text-lg text-[#343438] ${className}`}
        href={href}
      >
        {title}
      </Link>
      <IoIosArrowForward />
    </div>
  );
};

export default SocendaryBTN;

import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const NavHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-7 px-4">
        <span className="text-3xl cursor-pointer">
          <IoCloseOutline />
        </span>
        <span className="text-right block">
          <Link href="#">Sign In</Link> or <Link href="#">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default NavHeader;

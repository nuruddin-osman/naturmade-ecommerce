import React from "react";
import NavFooterImage from "@/public/navFooter/navFooter.webp";
import Image from "next/image";

const NavFooter = () => {
  return (
    <div className="w-full h-[200px] rounded-md overflow-hidden relative">
      <Image
        src={NavFooterImage}
        alt="navFooter"
        className="object-cover"
        sizes="100%"
        fill
      />
    </div>
  );
};

export default NavFooter;

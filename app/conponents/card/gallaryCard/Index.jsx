"use client";

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";

const GallaryCard = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div
      key={item.id}
      className="bg-[#F5F5F7] border rounded-lg shadow-md p-2 font-montserrat relative flex flex-col"
    >
      <Link className="w-full h-32 md:h-48 lg:h-64 relative mx-auto" href="#">
        <Image
          src={item.images[0]}
          alt={item.title}
          fill
          sizes="100%"
          className="object-cover"
        />
      </Link>
      <Link
        href="#"
        className="bg-[#00000073] absolute top-0 left-0 z-10 w-full h-full opacity-0 hover:opacity-100 transform transition-all ease-in-out duration-500 flex items-center justify-center"
      >
        <span className="text-white flex gap-1 items-center">
          <FaRegHeart />
          <span>{item.stock}</span>
        </span>
      </Link>
    </div>
  );
};

export default GallaryCard;

//     <div key={item.id} className="relative h-[310px] !max-w-[290px]">
//       <Link
//         className="h-[290px] w-[95%] absolute top-full left-full p-1 -translate-x-[103%] -translate-y-[103%] border"
//         href="#"
//       >
//       </Link>
//     </div>

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { backedByScience } from "../../dummyData/DummyArray";

const BackedByScience = () => {
  return (
    <div className="py-14">
      <div className="container mx-auto px-3">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-center md:leading-[64px] text-[#343438]">
          Backed By Science, Made for You
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg font-lato font-normal text-center leading-normal text-[#343438] mb-2">
          Find the right solutions for your personal health needs
        </p>

        {/* Image Grid */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between w-full mt-10">
          {backedByScience.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="w-full md:w-1/4 flex flex-col items-center gap-2 group "
            >
              <div className="w-full h-[300px] overflow-hidden relative">
                <Image
                  src={item.image}
                  fill
                  className="object-cover absolute top-0 left-0"
                  alt={item.linkTitle}
                  sizes="100%"
                />
              </div>
              <span className="text-sm text-[#343438] font-montserrat font-bold border-b-2 border-[#FDCA21] group-hover:border-opacity-0 border-opacity-100 transition-all duration-500 uppercase">
                {item.linkTitle}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackedByScience;

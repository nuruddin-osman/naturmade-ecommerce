import Link from "next/link";
import React from "react";
import NatureBgImage from "@/public/image/NatureMadeBackground.webp";

const NatureMade = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${NatureBgImage})`,
      }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className="py-20 bg-[#f5f5f77c]">
        <div className="max-w-[500px] mx-auto px-3">
          <p className="text-base font-montserrat font-normal leading-normal text-center text-[#343438] mb-5">
            “I have used{" "}
            <span className="text-lg font-montserrat font-bold text-[#000]">
              Nature Made
            </span>{" "}
            products for several years because they are made of quality
            ingredients and great value for my money.”
          </p>
          <div className="flex flex-col items-center">
            <h5 className="text-base font-montserrat font-bold leading-normal text-[#343438]">
              Maryanne
            </h5>
            <h6 className="text-xs font-lato font-normal  leading-normal text-[#343438] mb-5">
              Female, 25-34
            </h6>
            <Link
              href="#"
              className="text-xs sm:text-sm text-[#343438] font-montserrat font-normal border-b border-[#FDCA21] hover:border-opacity-0 border-opacity-100 transition-all duration-500 "
            >
              MAXIMUM STRENGTH‡ MELATONIN 10 MG GUMMIES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureMade;

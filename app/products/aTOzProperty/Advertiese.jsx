"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Heading from "@/app/conponents/utilities/Heading";
import WrapperHeading from "@/app/conponents/utilities/WrapperHeading";
import Image from "next/image";

const Advertiese = ({ advertizeData, exploreLink }) => {
  const pathName = usePathname();
  const showBannerPages = ["/", "/blog", "/news", "/bundles"];

  const lastIndex = advertizeData[advertizeData.length - 1]; // First item for the main banner
  const allAdvertizeItem = advertizeData.slice(-4, -1); // Remaining items for the grid
  return (
    <div>
      <div className="pt-16 pb-5">
        <div className="container mx-auto flex justify-between items-center">
          <Heading title="Related Article" />
          <Link
            href={exploreLink}
            className="hidden md:block text-xl text-[#343438] font-montserrat font-bold leading-8 border-b-2 border-[#FDCA21] border-opacity-100 hover:border-opacity-0 transition-all duration-500"
          >
            Explore All Articles
          </Link>
        </div>
        {showBannerPages.includes(pathName) && lastIndex && (
          <div
            className="w-full bg-cover bg-center py-5 md:py-16"
            style={{
              backgroundImage:
                lastIndex && lastIndex.images
                  ? `url(${lastIndex.images})`
                  : "none",
            }}
          >
            <div className="container mx-auto">
              <h2 className="text-3xl lg:text-5xl text-[#343438] font-montserrat font-bold w-3/4 lg:max-w-[700px] my-5 lg:my-10">
                {lastIndex?.title}
              </h2>
              <p className="text-sm lg:text-lg font-lato font-normal leading-normal text-[#343438] mb-5 w-2/4">
                {lastIndex?.description}
              </p>
              <button className="text-lg lg:text-2xl font-montserrat font-bold rounded-bl-3xl rounded-tr-3xl px-5 lg:px-10 py-2 lg:py-5 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300">
                Continue Reading
              </button>
            </div>
          </div>
        )}
        <div className="container mx-auto w-full flex flex-col md:flex-row  gap-8 mt-8 mb-4 md:mb-16">
          {allAdvertizeItem.map((item) => (
            <div key={item.id} className="w-full md:w-1/3">
              <div className="w-full h-[25vh] md:h-[36vh] overflow-hidden rounded-bl-3xl rounded-tr-3xl relative">
                <Image
                  className="object-cover"
                  src={item.images?.[0] || ""}
                  alt={`${item.title} image`}
                  fill
                />
              </div>
              <WrapperHeading className="pt-5" title={item.title} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mb-4 md:hidden">
          <Link
            href={exploreLink}
            className="text-xl text-[#343438] font-montserrat font-bold leading-8 border-b-2 border-[#FDCA21] border-opacity-100 md:border-opacity-0 hover:border-opacity-100 transition-all duration-500"
          >
            Explore All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Advertiese;

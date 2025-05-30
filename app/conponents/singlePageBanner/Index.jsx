"use client";

import Link from "next/link";
import SubHeading from "../utilities/SubHeading";
import Heading from "../utilities/Heading";
import Paragraph from "../utilities/Paragraph";

const SinglePageBanner = ({ data }) => {
  return (
    <div
      style={data.bgImage ? { backgroundImage: `url(${data.bgImage})` } : {}}
      className="bg-cover bg-center bg-no-repeat py-20"
    >
      <div className="container mx-auto px-4">
        <div className="w-full md:w-3/5 px-4 py-10 bg-white">
          <SubHeading className="!text-left" title={data?.subHeading} />
          <Heading
            className="!text-left !leading-normal"
            title={data?.heading}
          />
          <Paragraph className="!text-left" title={data?.paragraph} />
          <div className="flex gap-5 items-center mt-4">
            <Link
              href={data?.shopLink || "#"}
              className="text-base sm:text-sm text-[#343438] font-montserrat font-bold border-b-2 border-[#FDCA21] hover:border-opacity-0 border-opacity-100 transition-all duration-500 uppercase"
            >
              shop
            </Link>
            <span className="h-6 w-[1px] bg-slate-500"></span>
            <Link
              href={data?.exploreLink || "#"}
              className="text-base sm:text-sm text-[#343438] font-montserrat font-bold border-b-2 border-[#FDCA21] hover:border-opacity-0 border-opacity-100 transition-all duration-500 uppercase"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageBanner;

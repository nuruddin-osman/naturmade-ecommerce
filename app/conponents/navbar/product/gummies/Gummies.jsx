import React from "react";
import LinkForNavProductABC from "@/app/conponents/utilities/LinkForNavProductABC";
import BenefitsBanner from "../../../../../public/image/benefitsBanner.avif";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import Image from "next/image";
import SocendaryBTN from "@/app/conponents/utilities/SocendaryBTN";

const Gummies = () => {
  return (
    <div className="ml-10 mt-10">
      <div className="grid grid-cols-[3fr,2fr]">
        <div className="flex flex-col gap-5">
          <LinkForNavProductABC href="#" title="Adults" />
          <LinkForNavProductABC href="#" title="Kids" />
          <LinkForNavProductABC href="#" title="Zero Sugar" />
        </div>
        <div className="mr-5">
          <div className="w-full h-auto rounded-md overflow-hidden">
            <Image
              src={BenefitsBanner}
              alt="Benefits Banner"
              className="w-full"
            />
          </div>
          <SubHeading
            className="!text-left py-4"
            title="Discover how you can get the benefits you want from the nutrients you need without the sugar normally found in gummies.†"
          />
          <SocendaryBTN href="#" title="New Zero Sugar Gummies‡" />
        </div>
      </div>
    </div>
  );
};

export default Gummies;

"use client";

import { BundlesBannerArray } from "@/app/conponents/dummyData/DummyArray";
import Heading from "@/app/conponents/utilities/Heading";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import Link from "next/link";
import ShopAllBannerImg from "@/public/assets/shop-all-page/DesktopShopAll.webp";

const ShopAllBanner = () => {
  const data = BundlesBannerArray[0];
  console.log();

  return (
    <div
      style={{ backgroundImage: `url(${ShopAllBannerImg.src})` }}
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
              href="#"
              className="text-base sm:text-sm text-[#343438] font-montserrat font-bold border-b-2 border-[#FDCA21] hover:border-opacity-0 border-opacity-100 transition-all duration-500 uppercase"
            >
              shop
            </Link>
            <span className="h-6 w-[1px] bg-slate-500"></span>
            <Link
              href="#"
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

export default ShopAllBanner;

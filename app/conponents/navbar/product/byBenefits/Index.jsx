"use client";

import Link from "next/link";
import Image from "next/image";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import SocendaryBTN from "@/app/conponents/utilities/SocendaryBTN";
import BenefitsBanner from "@/public/image/benefitsBanner.avif";
import { byBenefitArr } from "@/app/conponents/dummyData/DummyArray";
import { hideComponent } from "@/app/featurs/toggleMenu/menuSlice";
import { categories } from "@/app/byBenefits/benefitsContent/Categories";

const ByBenefits = () => {
  const handleNavigate = (item) => {
    dispatch(hideComponent());
  };
  return (
    <div className="ml-10 mt-10">
      <div className="grid grid-cols-[3fr,2fr] gap-8">
        <div className="grid grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              onClick={() => handleNavigate(category)}
              href={`/byBenefits/${encodeURIComponent(category.title)}`}
              className="flex items-center gap-4 py-5 cursor-pointer"
            >
              <div className="w-6 h-auto overflow-hidden">
                <Image
                  src={category.byBenifitIcon} // Add icon to your category data
                  alt={`${category.title} Icon`}
                />
              </div>
              <h4 className="text-[#353636] font-semibold font-lato text-lg">
                {category.pageCategory}
              </h4>
            </Link>
          ))}
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
            title="Discover which Nature Made vitamins and supplements can support your wellness goals†"
          />
          <SocendaryBTN href="#" title="Get started now." />
        </div>
      </div>
    </div>
  );
};

export default ByBenefits;

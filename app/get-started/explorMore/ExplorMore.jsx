"use client";
import {
  byBenefitArr,
  CardForGetStartedPageArray,
  GetStartedExploreArr,
} from "@/app/conponents/dummyData/DummyArray";
import CardForGetStartedPageSlider from "@/app/conponents/slider/CardForGetStartedPageSlider";
import Heading from "@/app/conponents/utilities/Heading";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const ExplorMore = () => {
  const [isActive, setIsActive] = useState(null);
  const [items, setItems] = useState(CardForGetStartedPageArray);
  const pathName = usePathname();

  const filterItem = (category) => {
    const newItems = CardForGetStartedPageArray.filter(
      (newVal) => newVal.cetagory === category
    );
    setItems(newItems);
    setIsActive(category);
  };

  const categories = [
    ...new Set(CardForGetStartedPageArray.map((item) => item.cetagory)),
  ];

  return (
    <div>
      <div className="container mx-auto my-20">
        <Heading className="md:text-left text-center" title="Explore More" />

        <ul className="flex items-center gap-2 md:gap-5 my-10 justify-center md:justify-start flex-wrap px-2">
          {categories.map((item) => (
            <li key={item}>
              <Link
                onClick={() => filterItem(item)}
                className={`text-[#4A4A4A] text-base md:text-xl  font-montserrat font-bold border rounded-full border-[#6B6B6E] px-5 py-2 inline-block capitalize ${
                  isActive === item && "bg-[#6B6B6E] text-white"
                }`}
                href="javascript:void(0)"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block mt-8">
          <CardForGetStartedPageSlider items={items} />
        </div>
        <div className="md:hidden block mt-8">{/* <CardForMobile /> */}</div>
      </div>
      <div className="bg-[#F5F5F7] my-3 py-20">
        <div className={`container mx-auto`}>
          <div className={` ${pathName === "/bundles" && "md:px-28"}`}>
            {GetStartedExploreArr.map((item) => (
              <div key={item.id} className="">
                <SubHeading
                  className="!text-left !font-montserrat !font-bold"
                  title={item.heading}
                />
                <Paragraph
                  className="!text-left !text-sm"
                  title={item.article}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorMore;

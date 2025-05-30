"use client";
import CardForMobile from "@/app/conponents/card/cardForMobie/CardForMobile";
import { productsArray } from "@/app/conponents/dummyData/DummyArray";
import ProductSlider from "@/app/conponents/slider/ProductSlider";
import Heading from "@/app/conponents/utilities/Heading";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const FindYourDailyRoutine = () => {
  const [items, setItems] = useState(productsArray);

  return (
    <div className="bg-gradient-to-r py-16 from-[#dfdc5c] to-[#efb402] px-3">
      <Heading title="Find Your Daily Routine" />
      <SubHeading title="Shop our best-selling products and start your new Subscribe & Save routine today" />
      <div className="container mx-auto bg-white py-12 px-2">
        <Paragraph
          className="!text-lg"
          title="Subscribe & Save to Nature Made’s best daily vitamins & supplements including the The Daily 4™ to start your wellness routine chosen by our nutrition science experts."
        />
        <div className="flex gap-10 items-center justify-center my-5">
          <div className="flex gap-3 items-center">
            <span className="w-7 h-7 rounded-full bg-[#343438] text-white text-2xl flex items-center justify-center">
              <IoCheckmark />
            </span>
            <SubHeading className="!font-montserrat !mb-0" title="Save 10%" />
          </div>
          <div className="flex gap-3 items-center">
            <span className="w-7 h-7 rounded-full bg-[#343438] text-white text-2xl flex items-center justify-center">
              <IoCheckmark />
            </span>
            <SubHeading
              className="!font-montserrat !mb-0"
              title="Free Shipping"
            />
          </div>
        </div>
        <div className="hidden md:block mt-8">
          <ProductSlider items={items} />
        </div>
        <div className="md:hidden block mt-8">
          <CardForMobile />
        </div>
      </div>
    </div>
  );
};

export default FindYourDailyRoutine;

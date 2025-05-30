"use client";

import CardForMobile from "@/app/conponents/card/cardForMobie/CardForMobile";
import { CardForGetStartedPageArray } from "@/app/conponents/dummyData/DummyArray";
import FilterFunction from "@/app/conponents/filterFuntion/FilterFunction";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const BundlesProducts = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll
    ? CardForGetStartedPageArray
    : CardForGetStartedPageArray.slice(0, 6);

  return (
    <div className="container mx-auto relative">
      <FilterFunction />
      <div className="">
        <div className="pb-5 pt-28 flex-wrap gap-8 justify-center items-center hidden md:flex">
          {displayedProducts?.map((item) => (
            <h1 key={item.id}>{item.cetagory}</h1>
            // <CardForGetStartedPage key={item.id} item={item} />
          ))}
        </div>
        <div className="hidden gap-5 items-center justify-center mt-5 md:flex pb-10">
          <span className="flex items-center justify-center rounded-full h-10 w-10 border">
            <FaPlus />
          </span>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-base font-montserrat font-bold  text-[#343438] border-b border-[#FDCA21]"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>
      <div className="md:hidden pb-10 pt-24">
        <CardForMobile />
      </div>
    </div>
  );
};

export default BundlesProducts;

"use client";

import CardForGetStartedPageSlider from "@/app/conponents/slider/CardForGetStartedPageSlider";
import Heading from "@/app/conponents/utilities/Heading";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import ProductCard from "@/app/draftFolder/everything/DraftCard";
import Link from "next/link";
import React, { useState } from "react";

const ExplorMoreProducts = ({
  exploreData, // Data for the "Explore More" section
  filterData, // Data for the filterable cards
  showFilterSection = true, // Whether to show the filter section
  showExploreSection = true, // Whether to show the explore section
  customContainerClass = "", // Custom class for the container
  customExploreSectionClass = "", // Custom class for the explore section
}) => {
  const [isActive, setIsActive] = useState(null);
  const [item, setItem] = useState(filterData);

  // Function to filter items by category
  const filterItem = (category) => {
    if (category === "all") {
      setItem(filterData); // Show all products
      setIsActive(null); // Reset active state
    } else {
      const newItems = filterData.filter(
        (newVal) => newVal.category === category
      );
      setItem(newItems); // Show products of the selected category
      setIsActive(category); // Set active state
    }
  };

  // Get unique categories from the filter data
  const categories = [
    "all",
    ...new Set(filterData.map((item) => item.category)),
  ];
  // Get unique categories from the filter data
  //   const categories = [...new Set(filterData.map((item) => item.category))];

  return (
    <div>
      {/* Filter Section */}
      {showFilterSection && (
        <div className={`container mx-auto my-20 ${customContainerClass}`}>
          <Heading className="md:text-left text-center" title="Explore More" />

          {/* Filter Buttons */}
          <ul className="flex items-center gap-2 md:gap-5 my-10 justify-center md:justify-start flex-wrap px-2">
            {categories.map((item) => (
              <li key={item}>
                <Link
                  onClick={() => filterItem(item)}
                  className={`text-[#4A4A4A] text-base md:text-xl font-montserrat font-bold border rounded-full border-[#6B6B6E] px-5 py-2 inline-block capitalize ${
                    isActive === item && "bg-[#6B6B6E] text-white"
                  }`}
                  href="javascript:void(0)"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Slider for Filtered Items */}
          <div className="md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 hidden mt-8">
            {item?.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
          <div className="md:hidden block mt-8">{/* <CardForMobile /> */}</div>
        </div>
      )}

      {/* Explore Section */}
      {showExploreSection && (
        <div className={`bg-[#F5F5F7] my-3 py-20 ${customExploreSectionClass}`}>
          <div className={`container mx-auto`}>
            <div className="">
              {filterData.map((item) => (
                <div key={item.id} className="">
                  <SubHeading
                    className="!text-left !font-montserrat !font-bold"
                    title={item.title}
                  />
                  <Paragraph
                    className="!text-left !text-sm"
                    title={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorMoreProducts;

"use client";
import { Vitamins101Array } from "@/app/conponents/dummyData/DummyArray";
import Heading from "@/app/conponents/utilities/Heading";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import WrapperHeading from "@/app/conponents/utilities/WrapperHeading";
import Image from "next/image";
import React, { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";

const QuickRecomendBlogPart = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle expansion of a specific item
  const toggleText = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className="container mx-auto p-5">
        <Heading className="!text-left" title="The Daily 4™ Deep Dive" />
        <SubHeading
          className="!text-left"
          title="Discover why we chose these 4 core supplements to build out your regimen."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
          {Vitamins101Array.map((item, index) => (
            <div key={index} className="">
              <div className="flex items-center gap-2">
                <div className="w-12 h-8 overflow-hidden">
                  <Image
                    src={item.logos}
                    className="w-full h-full object-contain"
                    alt="vitamins101"
                  />
                </div>
                <WrapperHeading title={item.heading} />
              </div>

              {/* Display truncated or full text */}
              <Paragraph
                className="!text-left mt-3"
                title={
                  expandedIndex === index
                    ? item.paragrap
                    : `${item.paragrap.slice(0, 100)}...`
                }
              />

              {/* Show More / Show Less Button */}
              <div className="flex gap-5 items-center mt-4">
                <span
                  className="flex items-center justify-center rounded-full h-8 w-8 border cursor-pointer"
                  onClick={() => toggleText(index)}
                >
                  {expandedIndex === index ? <FaMinus /> : <FaPlus />}
                </span>

                <button
                  onClick={() => toggleText(index)}
                  className="text-base sm:text-sm text-[#343438] font-montserrat font-medium border-b-2 border-[#FDCA21] hover:border-opacity-0 border-opacity-100 transition-all duration-500"
                >
                  {expandedIndex === index
                    ? item.buttonTextLess
                    : item.buttonTextMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickRecomendBlogPart;

"use client";
import { GetStartedQuestionArr } from "@/app/conponents/dummyData/DummyArray";
import Heading from "@/app/conponents/utilities/Heading";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const filterQuestionGetStarted = GetStartedQuestionArr.filter(
    (item) => item.category === "get-started"
  );
  const filterQuestionSubscription = GetStartedQuestionArr.filter(
    (item) => item.category === "subscriptions"
  );

  const pathName = usePathname();

  return (
    <div className="bg-[#F5F5F7]">
      <div className="container mx-auto px-4 py-28">
        <div className="flex justify-between items-center md:mb-3">
          <Heading title="Questions?" />
          <Link
            href="#"
            className="hidden md:block text-xl text-[#343438] font-montserrat font-bold leading-8 border-b-2 border-[#FDCA21] border-opacity-100 hover:border-opacity-0 transition-all duration-500"
          >
            Explore All Articles
          </Link>
        </div>
        <SubHeading
          className="!text-left mb-12"
          title="See our frequently asked questions below:"
        />
        <div>
          {pathName === "/get-started"
            ? filterQuestionGetStarted.map((item, index) => (
                <div
                  key={index}
                  className="my-4 border border-gray-200 rounded-lg shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 text-left text-lg font-medium text-gray-700 hover:bg-gray-200"
                  >
                    <SubHeading
                      className="!font-bold !font-montserrat !text-left"
                      title={item.heading}
                    />
                    <span className="text-gray-500">
                      {openIndex === index ? item.upArrow : item.downArrow}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <Paragraph className="!text-left" title={item.article} />
                    </div>
                  )}
                </div>
              ))
            : pathName === "/subscriptions"
            ? filterQuestionSubscription.map((item, index) => (
                <div
                  key={index}
                  className="my-4 border border-gray-200 rounded-lg shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 text-left text-lg font-medium text-gray-700 hover:bg-gray-200"
                  >
                    <SubHeading
                      className="!font-bold !font-montserrat !text-left"
                      title={item.heading}
                    />
                    <span className="text-gray-500">
                      {openIndex === index ? item.upArrow : item.downArrow}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <Paragraph className="!text-left" title={item.article} />
                    </div>
                  )}
                </div>
              ))
            : ""}
        </div>
        <Link
          href="#"
          className="md:hidden text-xl text-[#343438] font-montserrat font-bold leading-8 border-b-2 border-[#FDCA21] border-opacity-100 md:hover:border-opacity-0 transition-all duration-500 text-center"
        >
          Explore All Articles
        </Link>
      </div>
    </div>
  );
};

export default Questions;

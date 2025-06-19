"use client";
import CardForMobile from "@/app/conponents/card/cardForMobie/CardForMobile";
import { productsArray } from "@/app/conponents/dummyData/DummyArray";
import MobileDotedSlider from "@/app/conponents/slider/MobileDotedSlider";
import ProductSlider from "@/app/conponents/slider/ProductSlider";
import Heading from "@/app/conponents/utilities/Heading";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import Link from "next/link";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import QuickRecomendBlogPart from "./QuickRecomendBlogPart";

const QuickStartRecommendation = () => {
  const [isActive, setIsActive] = useState(null);
  const [blogOpen, setBlogOpen] = useState(false);
  const [items, setItems] = useState(productsArray);

  const filterItem = (category) => {
    const newItems = productsArray.filter(
      (newVal) => newVal.cetagory === category
    );
    setItems(newItems);
    setIsActive(category);
  };

  const categories = [...new Set(productsArray.map((item) => item.cetagory))];

  const handleBlogOpen = () => {
    setBlogOpen(!blogOpen);
  };

  return (
    <div className="bg-gradient-to-r from-[#ffc814] via-[#ffdc5e] to-[#ffc814]  py-10 w-full">
      <div className="container mx-auto">
        <Heading title="Quick Start Recommendations" />
        <Paragraph title="To jump start your journey, we rounded up some common nutrient needs and product recommendations." />
        <div className="">
          <ul className="flex items-center gap-2 md:gap-5 justify-center flex-wrap px-2 py-3">
            {categories.map((item) => (
              <li
                className="bg-white overflow-hidden rounded-full"
                key={item.id}
              >
                <Link
                  onClick={() => filterItem(item)}
                  className={`text-[#4A4A4A]  text-base md:text-xl  font-montserrat font-bold px-5 py-2 inline-block capitalize ${
                    isActive === item && "bg-[#6B6B6E] text-white"
                  }`}
                  href="javascript:void(0)"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="bg-white px-10 pb-12">
            <Paragraph
              className="pt-16 !text-left"
              title="Men have unique needs, too, that can vary depending on age and lifestyle. In addition to daily nutritional support, men’s wellness needs include supporting immune, muscle and heart health, and cellular energy metabolism. On top of a daily multivitamin, important nutrients for men include Vitamin D, Magnesium and Omega-3 fatty acids. We’ve got all that and more in a variety of supplements ready to be added to your daily regimen so that you don’t miss a beat.† These products are a great place to start."
            />
            <SubHeading
              className="!font-bold mt-4"
              title="These products are a great place to start."
            />
            <div className="hidden md:block mt-8">
              <ProductSlider items={items} />
            </div>

            <div className="md:hidden mt-8">
              <MobileDotedSlider items={items} />
            </div>

            {/* // blog moddal open  start*/}
            {!blogOpen && (
              <div className="gap-5 items-center justify-center mt-10 flex">
                <span
                  onClick={handleBlogOpen}
                  className="flex items-center justify-center rounded-full h-8 w-8 border cursor-pointer"
                >
                  {blogOpen ? <FaMinus /> : <FaPlus />}
                </span>
                <button
                  onClick={handleBlogOpen}
                  className="text-base sm:text-sm text-[#343438] font-montserrat font-medium border-b-2 border-[#FDCA21] hover:border-opacity-0 transition-all duration-500"
                >
                  {blogOpen ? "Read Less" : "Read More"}
                </button>
              </div>
            )}

            {blogOpen && (
              <div className="mt-4">
                <QuickRecomendBlogPart />
              </div>
            )}
            {blogOpen && (
              <div className="gap-5 items-center justify-center mt-10 flex">
                <span
                  onClick={handleBlogOpen}
                  className="flex items-center justify-center rounded-full h-8 w-8 border cursor-pointer"
                >
                  {blogOpen ? <FaMinus /> : <FaPlus />}
                </span>
                <button
                  onClick={handleBlogOpen}
                  className="text-base sm:text-sm text-[#343438] font-montserrat font-medium border-b-2 border-[#FDCA21] hover:border-opacity-0 transition-all duration-500"
                >
                  {blogOpen ? "Read Less" : "Read More"}
                </button>
              </div>
            )}

            {/* // blog moddal open  end*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStartRecommendation;

"use client";
import { FilterCartSortPriceRange } from "@/app/conponents/dummyData/DummyArray";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PriceRange = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [itemOpen, setItemOpen] = useState(false);

  const handleItemOpen = () => {
    setItemOpen(!itemOpen);
  };
  return (
    <>
      <div
        onClick={handleItemOpen}
        className="w-full flex items-center justify-between  p-3 text-left text-lg font-medium cursor-pointer"
      >
        <h3 className="text-[#343438] font-semibold text-xl font-montserrat capitalize">
          price range
        </h3>
        <span className="text-gray-500">
          {itemOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
      {itemOpen && (
        <div className="px-3">
          {FilterCartSortPriceRange.map((item) => (
            <div key={item.category} className="flex items-center gap-2 pb-3">
              <input
                id={item.category}
                type="checkbox"
                name="filter-category"
                value={item.category}
                checked={selectedCategory === item.category}
                onChange={() => setSelectedCategory(item.category)}
                className="cursor-pointer"
              />
              <label
                htmlFor={item.category}
                className="text-base font-normal font-montserrat capitalize cursor-pointer"
              >
                {item.heading}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PriceRange;

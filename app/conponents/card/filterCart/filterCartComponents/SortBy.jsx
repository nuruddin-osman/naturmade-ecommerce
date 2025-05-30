"use client";
import { FilterCartSortByArray } from "@/app/conponents/dummyData/DummyArray";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SortBy = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    FilterCartSortByArray[0]?.category || ""
  );
  const [itemOpen, setItemOpen] = useState(false);

  const handleItemOpen = () => {
    setItemOpen(!itemOpen);
  };

  const handleSelection = (category) => {
    setSelectedCategory(category);
    setItemOpen(false);
  };

  return (
    <>
      <div
        onClick={handleItemOpen}
        className="w-full flex items-center justify-between p-3 text-left text-lg font-medium cursor-pointer"
      >
        <h3 className="text-[#343438] font-semibold text-xl font-montserrat capitalize">
          Sort by:{" "}
          <span className="text-base font-normal font-montserrat">
            {selectedCategory}
          </span>
        </h3>
        <span className="text-gray-500">
          {itemOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>

      {itemOpen && (
        <div className="px-3">
          {FilterCartSortByArray.map((item) => (
            <div
              key={item.category}
              className="flex items-center gap-2 pb-3 cursor-pointer"
              onClick={() => handleSelection(item.category)}
            >
              <input
                id={item.category}
                type="radio"
                name="filter-category"
                value={item.category}
                checked={selectedCategory === item.category}
                onChange={() => handleSelection(item.category)}
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

export default SortBy;

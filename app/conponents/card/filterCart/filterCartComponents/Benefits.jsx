"use client";
import { byBenefitArr } from "@/app/conponents/dummyData/DummyArray";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoSearch } from "react-icons/go";

const Benefits = () => {
  const [selectedCategories, setSelectedCategories] = useState([]); // Allow multiple selections
  const [itemOpen, setItemOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Toggle dropdown open/close
  const handleItemOpen = () => {
    setItemOpen(!itemOpen);
  };
  const handleValueShow = (data) => {
    setInputValue(data.title);
  };

  // Toggle the selected state for each checkbox
  const handleCheckboxChange = (category) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((item) => item !== category) // Deselect if already selected
          : [category] // Add if not selected
    );
  };

  // Filter options based on the search input matching category
  const filteredBenefits = byBenefitArr.filter((item) =>
    item.category.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <div
        onClick={handleItemOpen}
        className="w-full flex items-center justify-between p-3 text-left text-lg font-medium cursor-pointer"
      >
        <h3 className="text-[#343438] font-semibold text-xl font-montserrat capitalize">
          Benefits
        </h3>
        <span className="text-gray-500">
          {itemOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>

      {itemOpen && (
        <div className="px-3">
          <div className="mb-2 relative">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="text"
              placeholder="Search by category:"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-900 shadow-sm transition-all"
            />
            <span className="absolute top-1/2 right-4 -translate-y-1/2 text-xl text-gray-400 cursor-pointer">
              <GoSearch />
            </span>
          </div>

          {filteredBenefits.length > 0 ? (
            filteredBenefits.map((item) => (
              <div
                onClick={() => handleValueShow(item)}
                key={item.category}
                className="flex items-center gap-2 pb-3"
              >
                <input
                  id={item.category}
                  type="checkbox"
                  name="filter-category"
                  value={item.category}
                  checked={selectedCategories.includes(item.category)}
                  onChange={() => handleCheckboxChange(item.category)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor={item.category}
                  className="text-base font-normal font-montserrat capitalize cursor-pointer"
                >
                  {item.title}
                </label>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No categories found.</p>
          )}
        </div>
      )}
    </>
  );
};

export default Benefits;

"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PillType = () => {
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
          pill type
        </h3>
        <span className="text-gray-500">
          {itemOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
      {itemOpen && (
        <div className="flex items-center gap-2 px-3 pb-3">
          <input
            id="online_only"
            type="checkbox"
            name="filter-category" // Group all radios with the same name
            className="cursor-pointer"
          />
          <label
            htmlFor="online_only"
            className="text-base font-normal font-montserrat capitalize cursor-pointer"
          >
            pack
          </label>
        </div>
      )}
    </>
  );
};

export default PillType;

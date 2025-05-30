"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FilterCart from "../card/filterCart/FilterCart";
import { FilterIcon } from "@/public/assets/svg/FilterIcon";

const FilterFunction = ({ filterOptions }) => {
  const [filterShow, setFilterShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative">
      <div
        onClick={() => setFilterShow(true)}
        className="bg-[#343438af] flex items-center gap-2 p-2 rounded-md max-w-[170px] absolute top-10 left-5"
      >
        <span className="text-[#FFF] cursor-pointer">
          <FilterIcon />
        </span>
        <button className="taxt-base font-bold font-montserrat text-[#FFF] uppercase">
          Filter & Sort
        </button>
      </div>

      {isMounted &&
        createPortal(
          filterShow && (
            <FilterCart
              setFilterShow={setFilterShow}
              filterOptions={filterOptions}
            />
          ),
          document.body
        )}
    </div>
  );
};

export default FilterFunction;

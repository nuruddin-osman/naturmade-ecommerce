import React from "react";
import Heading from "../../utilities/Heading";
import { TfiClose } from "react-icons/tfi";
import Link from "next/link";
import HorizontalLine from "../../utilities/HorizontalLine";

const FilterCart = ({ setFilterShow, filterOptions }) => {
  const handleOverlayClick = () => {
    setFilterShow(false);
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="bg-[#2d2d2d34] w-full h-screen fixed top-0 left-0 z-50"
    >
      {/* card start */}
      <div onClick={handleCardClick} className="w-1/3 bg-white h-full py-5">
        <div className="flex items-center justify-between px-3">
          <Heading className="!text-left !text-2xl" title="Filter" />
          <span className="cursor-pointer" onClick={() => setFilterShow(false)}>
            <TfiClose />
          </span>
        </div>
        <button
          type="reset"
          className="border-b-2 capitalize border-[#343438] font-lato text-lg font-semibold mt-3 mx-3 inline"
        >
          clear all
        </button>
        <HorizontalLine />
        <div className="overflow-y-auto h-full">
          {filterOptions.map((item, index) => (
            <div key={index} className="border-b border-[#3343]">
              {item.component}
            </div>
          ))}
        </div>
      </div>
      {/* card end */}
    </div>
  );
};

// FilterCart.propTypes = {
//   setFilterShow: PropTypes.func.isRequired,
//   filterOptions: PropTypes.arrayOf(
//     PropTypes.shape({
//       component: PropTypes.node.isRequired,
//     })
//   ).isRequired,
// };

export default FilterCart;

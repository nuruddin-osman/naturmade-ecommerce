import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const ProductBreadcrumbForNav = ({ title, setOpen }) => {
  return (
    <div>
      <div className="flex items-center gap-4 capitalize py-5 cursor-pointer">
        <span onClick={() => setOpen(true)} className="text-lg">
          <IoIosArrowBack />
        </span>
        <h3 className="text-xl font-bold font-lato">{title}</h3>
      </div>
    </div>
  );
};

export default ProductBreadcrumbForNav;

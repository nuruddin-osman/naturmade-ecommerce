import React from "react";

const PrimarySmallBtn = ({ onClick, title, className, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} text-xl lg:text-base font-montserrat font-bold rounded-bl-2xl rounded-tr-2xl px-2 lg:px-4 py-1 lg:py-2 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300`}
    >
      {title}
    </button>
  );
};

export default PrimarySmallBtn;

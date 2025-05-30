import React from "react";

const PrimaryBTN = ({ onClick, title, className, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} text-lg lg:text-xl font-montserrat font-bold rounded-bl-3xl rounded-tr-3xl px-4 lg:px-8 py-2 lg:py-4 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300`}
    >
      {title}
    </button>
  );
};

export default PrimaryBTN;

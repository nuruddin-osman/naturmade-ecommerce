import React from "react";

const Heading = ({ title, className }) => {
  return (
    <h1
      className={`text-3xl md:text-5xl font-montserrat font-bold text-center md:leading-[64px] text-[#343438] ${className}`}
    >
      {title}
    </h1>
  );
};

export default Heading;

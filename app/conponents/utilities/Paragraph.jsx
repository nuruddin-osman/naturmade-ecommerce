import React from "react";

const Paragraph = ({ className, title }) => {
  return (
    <p
      className={`text-base font-lato font-medium text-center leading-normal text-[#343438] mb-2 ${className}`}
    >
      {title}
    </p>
  );
};

export default Paragraph;

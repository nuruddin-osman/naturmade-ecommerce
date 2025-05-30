import React, { useState } from "react";
import AtoZCategory from "./alphabaticCategory/AtoZCategory";

const AtoZ = () => {
  const [abcd, setAbcd] = useState(""); // Initially empty for showing all
  const [isVisible, setIsVisible] = useState(true); // State to control visibility
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const handleLetterSearch = (data) => {
    setAbcd(data); // Set specific letter
  };

  const handleCategoryClick = () => {
    setIsVisible(false); // Hide the AtoZ component
  };

  return (
    <div className="lg:ml-10 lg:mt-10 px-2 mt-4">
      {isVisible && (
        <>
          <div className="flex gap-4 flex-wrap justify-between border-b-2 lg:border-none mb-3">
            {letters.map((letter) => (
              <span
                onClick={() => handleLetterSearch(letter)}
                key={letter}
                className={`text-base font-bold text-[#343438] font-montserrat cursor-pointer ${
                  abcd === letter ? "text-blue-600" : ""
                }`}
              >
                {letter}
              </span>
            ))}
          </div>
          <hr className="hidden lg:block h-[1px] bg-gray-300 border-0 w-full my-3" />
        </>
      )}
      <div className="">
        <AtoZCategory abcd={abcd} onCategoryClick={handleCategoryClick} />
      </div>
    </div>
  );
};

export default AtoZ;

import React from "react";
import FooterTextIcon from "../../assets/svg/FooterTextIcon";
import OneIcon from "../../assets/svg/OneIcon";
import HashIcon from "../../assets/svg/HashIcon";

const BlueBar = () => {
  return (
    <div className="bg-[#074390] py-2">
      <div className="relative">
        <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-[#ffe300] before:z-10 after:content-['']  after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#ffe300] after:z-10">
          <div className="flex items-center gap-10 container mx-auto pl-5 lg:pl-20">
            <div className="flex items-center gap-2">
              <span>
                <HashIcon />
              </span>

              <span className="bg-[#074390] relative z-20 text-[#ffe300]  font-extrabold">
                <OneIcon />
              </span>
              <span className="bg-gradient-to-r from-[#004da8] via-[#ffdc5e80] to-[#004da8]">
                <FooterTextIcon />
              </span>
            </div>
            <div className="flex flex-col uppercase text-[10px] leading-[10px] font-montserrat text-[#ffe300] absolute left-3/4 md:left-1/2 xl:left-[25%] z-20 bg-[#074390] text-center">
              Vitamin &
              <br />
              Supplement
              <br />
              Brand*
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueBar;

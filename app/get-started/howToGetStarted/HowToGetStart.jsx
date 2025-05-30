"use client";
import { HowToGetStartedArray } from "@/app/conponents/dummyData/DummyArray";
import Heading from "@/app/conponents/utilities/Heading";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import WrapperHeading from "@/app/conponents/utilities/WrapperHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const HowToGetStart = () => {
  return (
    <div>
      <div className="container mx-auto py-20">
        <Heading title="How Do I Get Started?" />
        <SubHeading
          className="max-w-[80%] mx-auto"
          title="Choose whether you want help taking that first step or want more information about key nutrients."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 mt-16 px-4">
          {HowToGetStartedArray.map((item) => (
            <div key={item.id} className="w-4/5">
              <div className="flex items-center gap-5 md:block my-4 md:my-0">
                <span className="w-10 h-10 md:w-20 md:h-20 overflow-hidden relative">
                  <Image
                    src={item.logos}
                    sizes="100%"
                    className="object-cover"
                    alt={item.heading}
                    fill
                  />
                </span>
                <WrapperHeading
                  className="text-3xl md:my-5"
                  title={item.heading}
                />
              </div>
              <Paragraph className="!text-left mb-4" title={item.subHeading} />
              <div className="flex items-center gap-2">
                <Link
                  className="text-base text-[#343438] font-montserrat font-bold"
                  href="#"
                >
                  {item.buttonText}
                </Link>
                <span className="hover:text-[#343438] text-[#3434387e]">
                  <IoIosArrowForward />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToGetStart;

import React from "react";
import { companiesLogoAndService } from "../../dummyData/DummyArray";
import Link from "next/link";
import Image from "next/image";
import bgImages from "@/public/image/yellow-bg-color.webp";

const WellnessExperts = () => {
  const first3items = companiesLogoAndService.slice(0, 3);
  return (
    <div
      style={{ backgroundImage: `url(${bgImages})` }}
      className="pt-16 bg-cover bg-center"
    >
      <div className="bg-[#ffffff80] py-10 mx-5">
        <div className="container mx-auto px-3">
          <h2 className="text-3xl lg:text-5xl text-[#343438] font-montserrat font-bold text-center md:leading-[64px] my-5">
            Your Trusted Wellness Experts
          </h2>
          <p className="text-base md:text-lg font-lato font-normal text-center leading-normal text-[#343438] mb-3">
            Grounded in decades of research, we deliver quality you can count
            on.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-between items-center mt-5 md:mt-14 mb-5">
            {first3items.map((item) => (
              <div key={item.id} className="w-full md:w-1/3">
                <div className="w-1/2 mx-auto h-auto overflow-hidden relative">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    fill
                    sizes="100%"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 md:mt-10 px-5">
        <div className="py-10 bg-white flex flex-col md:flex-row justify-between px-10 gap-14">
          <div className="">
            <h2 className="text-2xl text-[#343438] font-montserrat font-bold  md:hidden">
              Here for You Every Day
            </h2>
            <p className="text-bsae font-lato font-normal leading-normal text-[#343438] my-2  md:hidden">
              Nature Made is a partner on your health journey, making it easier
              for you to care for yourself daily.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-4 justify-between">
            {first3items.map((item) => (
              <Link
                key={item.id}
                href="#"
                className="flex flex-col items-center gap-2 group w-full"
              >
                <div className="w-full h-[150px] overflow-hidden rounded-bl-2xl rounded-tr-2xl relative">
                  <Image
                    src={item.servicesImg}
                    alt={item.title}
                    fill
                    sizes="100%"
                    className="object-cover"
                  />
                </div>
                <span className="text-sm text-[#343438] font-montserrat font-bold border-b-2 border-[#FDCA21] group-hover:border-opacity-0 border-opacity-100 transition-all duration-500 uppercase">
                  {item.serviceBtn}
                </span>
              </Link>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            <div className="">
              <h2 className="text-4xl text-[#343438] font-montserrat font-bold hidden md:block">
                Here for You Every Day
              </h2>
              <p className="text-lg font-lato font-normal leading-normal text-[#343438] my-4 hidden md:block">
                Nature Made is a partner on your health journey, making it
                easier for you to care for yourself daily.
              </p>
              <button className="text-base md:text-xl font-montserrat font-bold rounded-bl-3xl rounded-tr-3xl md:px-8 px-4 py-2 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300">
                Learn About Us
              </button>
            </div>
          </div>
        </div>
        <p className="text-sm font-lato font-normal text-center leading-normal text-[#343438] py-4">
          USP has tested and verified ingredients, potency and manufacturing
          process. USP sets official standards for dietary supplements.
          www.uspverified.org
        </p>
      </div>
    </div>
  );
};

export default WellnessExperts;

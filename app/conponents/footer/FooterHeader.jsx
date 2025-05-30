import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterLogo01 from "@/public/image/nm-logo-header.avif";
import FooterLogo02 from "@/public/image/footer-logo.webp";

const FooterHeader = () => {
  return (
    <>
      <div className="container mx-auto px-3">
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="w-4/5 md:w-2/5 flex gap-20 items-center py-5">
            <div className="w-2/5 h-16 relative">
              <Image
                src={FooterLogo01}
                alt="Footer logo header"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>

            <div className="w-1/5 h-32 relative">
              <Image
                src={FooterLogo02}
                alt="Footer logo"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 flex justify-between gap-5 mb-5">
            <p className="text-sm font-lato font-normal leading-6 text-[#FFF] w-2/5">
              *Based on a survey of pharmacists who recommend branded vitamins
              and supplements.
            </p>
            <p className="text-sm font-lato font-normal leading-6 text-[#FFF] w-3/5">
              Nature Made may make changes to products from time to time. Please
              consult the label on the product that you purchased for the most
              accurate product information.
            </p>
          </div>
        </div>

        <p className="text-sm text-center font-lato font-normal leading-5 text-[#FFF] border w-[90%] mx-auto p-2 mb-5">
          † These statements have not been evaluated by the Food and Drug
          Administration. These products are not intended to diagnose, treat,
          cure or prevent any disease.
        </p>
      </div>
      <hr />
      <div className="container mx-auto flex flex-col md:flex-row gap-3 justify-center items-center">
        <span className="text-sm text-[#FFF] font-lato font-normal leading-normal w-full md:w-1/3  text-center">
          &copy; 2002 - 2024 Pharmavite LLC. All Rights Reserved
        </span>

        <ul className="gap-8 flex justify-center w-full md:w-2/3 mx-auto">
          <li>
            <Link
              href="#"
              className="text-sm text-[#FFF] font-lato font-normal leading-normal"
            >
              Shop All
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm text-[#FFF] font-lato font-normal leading-normal"
            >
              Shop All
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm text-[#FFF] font-lato font-normal leading-normal"
            >
              Shop All
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm text-[#FFF] font-lato font-normal leading-normal"
            >
              Shop All
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterHeader;

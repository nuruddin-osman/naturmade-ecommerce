import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import BlueBar from "./BlueBar";
import FooterHeader from "./FooterHeader";

const Footer = () => {
  return (
    <div className="bg-[#343438]">
      <div className="container mx-auto">
        <div className=" p-6 flex flex-col md:grid md:grid-cols-[2fr,1fr] gap-6 text-[#FFF]">
          <div className="flex justify-between md:grid grid-cols-3 order-2 md:order-1">
            {/* Products Section */}
            <div className="">
              <h3 className="text-xl font-montserrat font-bold mb-8">
                Products
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-base font-lato font-normal leading-normal"
                  >
                    Shop All
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="">
              <h3 className="text-xl font-montserrat font-bold mb-8">
                Products
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-base font-lato font-normal leading-normal"
                  >
                    Shop All
                  </Link>
                </li>
              </ul>
            </div>

            {/* Brands and Privacy Section */}
            <div className=" hidden md:block">
              <h3 className="text-xl font-montserrat font-bold mb-8">
                Products
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-base font-lato font-normal leading-normal"
                  >
                    Shop All
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {/* Subscription Section */}
            <div className="">
              <div className="flex flex-col">
                <div className="">
                  <h3 className="text-xl font-montserrat font-bold mb-8">
                    Sign Up for the Newsletter
                  </h3>
                  <p className="text-base font-lato font-normal leading-normal">
                    Receive the Latest News and Special Offers!
                  </p>
                </div>
                <form className="flex w-full mt-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="text-[#343438] w-3/5 p-2 border rounded-l-md outline-none focus:ring-2 focus:ring-[#343438] hover:border-[#343438]"
                  />

                  <button
                    type="submit"
                    className="bg-[#FDCA21] text-[#343438] pl-4 pr-8 py-2 rounded-r-md font-montserrat font-bold relative"
                  >
                    SUBMIT
                    <span className="absolute right-2 top-1/2 -translate-y-1/2">
                      <FaArrowRightLong />
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="hidden md:block">
              <h3 className="text-xl font-montserrat font-bold mb-2 mt-10">
                Follow Us
              </h3>
              <div className="flex">
                <Link
                  href="#"
                  className="flex items-center justify-center text-2xl"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div className=" md:hidden block order-3">
            <h3 className="text-xl font-montserrat font-bold mb-2 mt-10">
              Follow Us
            </h3>
            <div className="flex">
              <Link
                href="#"
                className="flex items-center justify-center text-2xl"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BlueBar />
      <FooterHeader />
    </div>
  );
};

export default Footer;

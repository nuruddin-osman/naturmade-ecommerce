"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import NavbarLink from "../utilities/NavbarLink";
import { menuItems } from "../dummyData/DummyArray";
import Product from "./product/Product";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "@/app/featurs/toggleMenu/menuSlice";
import { FaChevronRight } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import MobileHeader from "../utilities/MobileHeader";

const Navbar = ({ setOpen, open }) => {
  const [showProduct, setShowProduct] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [visibleComponents, setVisibleComponents] = useState(null);
  const navbarRef = useRef(null);
  const dispatch = useDispatch();

  const { activeMenu, isMenuOpen, visibleComponent, isVisible } = useSelector(
    (state) => state.menuReducers
  );
  if (!isVisible) return null;

  const handleMenuClick = (menu) => {
    setShowProduct(!showProduct);
    dispatch(toggleMenu(menu));
    setOpen(false);
  };
  const handleMenuClickMobile = (menu) => {
    setVisibleComponents(menu);
    setShowClose(true);
    setOpen(false);
  };

  return (
    <nav ref={navbarRef}>
      <div className="bg-[#F5F5F7] relative">
        <div className="container mx-auto relative px-4 py-5 hidden lg:block">
          <ul className="flex gap-5">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleMenuClick(item.category)}
                className="flex gap-1 items-center cursor-pointer menu-item"
              >
                <NavbarLink href="#" label={item.label} />
                <div>
                  {activeMenu === item.category && isMenuOpen ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute z-20 w-full">
          {visibleComponent === "products" && (
            <div className=" bg-white">
              <Product />
            </div>
          )}
          {visibleComponent === "findVitamins" && <h1>Find vitamins for me</h1>}
          {visibleComponent === "tipsResources" && <h1>Tips & Resources</h1>}
          {visibleComponent === "about" && <h1>About</h1>}
        </div>
      </div>

      {/* Mobile menu */}
      {
        <>
          <div
            className={`fixed top-0 left-0 w-full sm:w-4/5 md:w-3/5 z-10 h-[100vh]  transform transition-transform duration-700 ease-in-out bg-white ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center py-5 border-b-2 px-4">
              <span
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <IoCloseOutline />
              </span>
              <span>
                <Link href="#">Sign In </Link> or{" "}
                <Link href="#"> Sign Up </Link>
              </span>
            </div>
            <ul className="flex flex-col gap-8 px-4 mt-8">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleMenuClickMobile(item.category)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <NavbarLink href="#" label={item.label} />
                  <span>
                    <FaChevronRight />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {visibleComponents && (
            <div
              className={`lg:hidden fixed inset-0 z-20 bg-white transition-all duration-300 ${
                showClose ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <MobileHeader
                setShowClose={() => {
                  setShowClose(false);
                  setTimeout(() => setVisibleComponents(null), 300);
                }}
              />

              {visibleComponents === "products" && <Product />}
              {/* ... অন্যান্য সাবমেনু কম্পোনেন্ট ... */}
            </div>
          )}
          {visibleComponents === "findVitamins" && showClose && (
            <div className="lg:hidden bg-white absolute top-0 left-0 z-30 h-[100vh] w-full">
              <MobileHeader setShowClose={setShowClose} />
              <h1>Find vitamins for me</h1>
            </div>
          )}
          {visibleComponents === "tipsResources" && showClose && (
            <div className="lg:hidden bg-white absolute top-0 left-0 z-30 h-[100vh] w-full">
              <MobileHeader setShowClose={setShowClose} />
              <h1>Tips & Resources</h1>
            </div>
          )}
          {visibleComponents === "about" && showClose && (
            <div className="lg:hidden bg-white absolute top-0 left-0 z-30 h-[100vh] w-full">
              <MobileHeader setShowClose={setShowClose} />
              <h1>About</h1>
            </div>
          )}
        </>
      }
    </nav>
  );
};

export default Navbar;

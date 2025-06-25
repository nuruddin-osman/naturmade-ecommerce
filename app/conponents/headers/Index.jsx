"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import SearchCard from "../utilities/SearchCard";
import { RxCross1 } from "react-icons/rx";
import YourCart from "./yourCart/YourCart";
import Logo from "@/public/image/nm-logo-header.avif";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Index";
import { showComponent } from "@/app/featurs/toggleMenu/menuSlice";

const Header = () => {
  const [searchCardShow, setSearchCardShow] = useState(false);
  const [yourCart, setYourCart] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const inputRef = useRef(null);
  const cardRef = useRef(null);
  const cartRef = useRef(null);
  const cartBodyRef = useRef(null);
  const dispatch = useDispatch();

  const handleSearchShow = () => {
    setSearchCardShow(!searchCardShow);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        cardRef.current &&
        !cardRef.current.contains(event.target)
      ) {
        setSearchCardShow(false);
      }
      if (
        cartBodyRef.current &&
        !cartBodyRef.current.contains(event.target) &&
        !cartRef.current.contains(event.target)
      ) {
        setYourCart(false); // Close the cart when clicked outside
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b border-[#4b4d4e] z-50">
      <div className="w-full lg:container relative mx-auto py-3">
        <div className="flex justify-between items-center px-4">
          <div className="lg:hidden">
            <span
              className="text-3xl cursor-pointer"
              onClick={() => {
                setOpen(true);
                dispatch(showComponent());
              }}
            >
              <HiOutlineBars3CenterLeft />
            </span>
            {/* <NavForMobile setOpen={setOpen} open={open} /> */}
          </div>
          <div className="flex gap-[190px] lg:gap-[200px] xl:gap-[300px] 2xl:gap-[500px] items-center">
            <div className="w-[150px]">
              <Link href="/" className="overflow-hidden w-full h-auto block">
                <Image src={Logo} alt="Logo" className="object-cover" />
              </Link>
            </div>
            <div className="gap-5 items-center text-[#4b4d4e] font-montserrat text-xl hidden lg:flex">
              <Link
                href="/whreToBuy"
                className="hover:text-[#000] transform transition-all ease-in-out duration-300"
              >
                WHERE TO BUY
              </Link>
              <Link
                href="/account/login"
                className="hover:text-[#000] transform transition-all ease-in-out duration-300"
              >
                SIGN IN
              </Link>
              <Link
                href="#"
                className="text-2xl cursor-pointer hidden lg:block"
              >
                <IoIosHeartEmpty />
              </Link>
            </div>
          </div>

          <div className="flex gap-5 items-center relative">
            <Link href="#" className="text-2xl cursor-pointer lg:hidden">
              <IoIosHeartEmpty />
            </Link>
            <Link
              href="#"
              ref={cartRef}
              onClick={() => setYourCart(!yourCart)}
              className="text-2xl text-[#4b4d4e] cursor-pointer"
            >
              <BsCart3 />
            </Link>
            {cartItems.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-red-600 absolute left-14 -top-3 lg:left-3 flex items-center justify-center text-white text-xs">
                {totalQuantity}
              </span>
            )}
          </div>
        </div>

        <div className="w-full relative lg:w-[30%] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[5%] mt-2 lg:mt-0 px-4">
          <input
            onClick={handleSearchShow}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
            value={inputValue}
            type="text"
            placeholder="Search:"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 shadow-sm transition-all"
          />
          <div className="absolute  right-7 lg:right-[6%]  top-1/2 -translate-y-1/2 flex gap-3 items-center">
            {inputValue && (
              <div
                onClick={() => setInputValue("")}
                className=" text-gray-500 cursor-pointer text-xl"
              >
                <RxCross1 />
              </div>
            )}
            <div className=" text-gray-500 cursor-pointer text-xl">
              <IoSearchOutline />
            </div>
          </div>
          {searchCardShow && (
            <div
              ref={cardRef}
              className="absolute top-full right-0 bg-white w-full"
            >
              <SearchCard
                setInputValue={setInputValue}
                inputValue={inputValue}
                setSearchCardShow={setSearchCardShow}
              />
            </div>
          )}
        </div>

        {yourCart && (
          <div
            ref={cartBodyRef}
            className="absolute top-[103%] right-0 z-30 w-full sm:w-4/5 md:w-2/4 xl:w-1/3 shadow-md"
          >
            <YourCart setYourCart={setYourCart} />
          </div>
        )}
      </div>

      <div className="absolute top-0 left-0 z-20 w-full lg:hidden">
        <Navbar open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;

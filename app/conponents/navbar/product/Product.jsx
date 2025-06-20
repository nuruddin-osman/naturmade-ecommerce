"use client";

import React, { useState } from "react";
import { productItemcetagory } from "../../dummyData/DummyArray";
import AtoZ from "./productItems/AtoZ";
import Gummies from "./gummies/Gummies";
import BestSellers from "./bestSellers/Index";
import NewProduct from "./newProduct/NewProduct";
import { useRouter } from "next/navigation";
import ByBenefits from "./byBenefits/Index";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "@/app/featurs/toggleMenu/menuSlice";
import MobileHeader from "../../utilities/MobileHeader";

const Product = ({ setOpen }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isProductVisible, setIsProductVisible] = useState(true); // Product component visibility
  const [visibleComponents, setVisibleComponents] = useState(null); // Track which component to show
  const [activeItemId, setActiveItemId] = useState(
    productItemcetagory[0]?.category || null
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleMenuClick = (category) => {
    setActiveItemId((prevId) => (prevId === category ? null : category));
    if (category === "bunlde & save") {
      router.push("/bundles");
      dispatch(closeMenu());
    } else if (category === "subscribe & save") {
      router.push("/subscriptions");
      dispatch(closeMenu());
    } else if (category === "view all") {
      router.push("/shop-all");
      dispatch(closeMenu());
    }
    setVisibleComponents(category); // Set the visible component based on category
    setIsProductVisible(false); // Hide the Product component
    console.log(category);
  };

  const handleMenuClickMobile = (category) => {
    setActiveItemId((prevId) => (prevId === category ? null : category));
    if (category === "bunlde & save") {
      router.push("/bundles");
      dispatch(closeMenu());
    } else if (category === "subscribe & save") {
      router.push("/subscriptions");
      dispatch(closeMenu());
    } else if (category === "view all") {
      router.push("/shop-all");
      dispatch(closeMenu());
    }
    setVisibleComponents(category); // Set the visible component based on category
    setIsProductVisible(false); // Hide the Product component
    setShowClose(true); // Show the close button (if needed)
  };

  return (
    <div className="">
      {/* Desktop View */}
      <div className="container mx-auto px-3 hidden lg:flex">
        <div className="pt-4 w-[18%] border-r h-[80vh]">
          {productItemcetagory.map((item) => (
            <div
              onClick={() => handleMenuClick(item.category)}
              key={item.id}
              className={`${
                activeItemId === item.category ? "bg-[#F5F5F7]" : ""
              }`}
            >
              <div className="flex items-center justify-between cursor-pointer p-2">
                <span className="text-lg capitalize font-lato font-medium">
                  {item.title}
                </span>
                <span className="text-base">{item.forwardAwwos}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-grow w-[82%] h-[80vh] overflow-y-auto">
          {activeItemId === "a - z" && <AtoZ />}
          {activeItemId === "by benefit" && <ByBenefits />}
          {activeItemId === "gummies" && <Gummies />}
          {activeItemId === "best seller" && <BestSellers />}
          {activeItemId === "new product" && <NewProduct />}
        </div>
      </div>

      {/* Mobile View */}
      {isProductVisible && (
        <div className="pt-4 w-full border-r h-full lg:hidden">
          {productItemcetagory.map((item) => (
            <div
              onClick={() => handleMenuClickMobile(item.category)}
              key={item.id}
              className={`${
                activeItemId === item.category ? "bg-[#F5F5F7]" : ""
              }`}
            >
              <div className="flex items-center justify-between cursor-pointer p-2">
                <span className="text-lg capitalize font-lato font-medium">
                  {item.title}
                </span>
                <span className="text-base">{item.forwardAwwos}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* সাবক্যাটেগরিগুলো - শুধু এনিমেশন ক্লাস যোগ */}
      {!isProductVisible && (
        <div
          className={`lg:hidden fixed top-0 left-0 z-40 h-full w-full bg-white transition-transform duration-300 ${
            isClosing ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <MobileHeader
            setShowClose={() => {
              setIsClosing(true);
              setTimeout(() => {
                setIsProductVisible(true);
                setVisibleComponents(null);
                setIsClosing(false);
              }, 300);
            }}
          />
          {visibleComponents === "a - z" && (
            <AtoZ setIsProductVisible={setIsProductVisible} />
          )}{" "}
          {visibleComponents === "by benefit" && <ByBenefits />}
          {visibleComponents === "gummies" && <Gummies />}
          {visibleComponents === "best seller" && <BestSellers />}
          {visibleComponents === "new product" && <NewProduct />}
        </div>
      )}
    </div>
  );
};

export default Product;

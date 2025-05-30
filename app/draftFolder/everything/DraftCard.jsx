"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/featurs/producatCardSlice/cartSlice";

const ProductCard = ({ item, showBuyNow }) => {
  const dispatch = useDispatch();
  if (!item) {
    return null;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  return (
    <div
      key={item.id}
      className="bg-[#F5F5F7] border rounded-lg shadow-md p-2 font-montserrat relative flex flex-col"
    >
      {/* Heart Icon */}
      <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-3xl">
        ♡
      </button>

      {/* Product Title */}
      <Link
        href={`/products/${encodeURIComponent(
          item.category
        )}/${encodeURIComponent(item.title)}`}
        className="flex flex-col items-center flex-grow h-20"
      >
        <h3 className="font-bold text-xs sm:text-sm md:text-base text-[#343438] sm:tracking-[2px] capitalize">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-[#343438] font-normal uppercase sm:leading-4">
          {item.brand}
        </p>

        {/* Star Rating */}
        <div className="flex items-center mb-1">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.floor(item.rating))}
            {"☆".repeat(5 - Math.floor(item.rating))}
          </div>
        </div>
      </Link>

      {/* Product Image */}
      <Link
        href={`/products/${encodeURIComponent(
          item.category
        )}/${encodeURIComponent(item.title)}`}
        className="w-4/5 h-32 md:h-48 lg:h-64 relative mx-auto block"
      >
        <Image
          src={item.images?.[0]}
          alt={item.title}
          fill
          sizes="100%"
          className="object-cover"
        />
      </Link>

      {/* "New" Badge */}
      {item.stock > 0 && (
        <div className="absolute top-20 left-2 bg-green-500 text-white text-[10px] md:text-xs font-normal md:px-2 px-1 py-1 rounded-full flex items-center justify-center">
          In Stock
        </div>
      )}

      {/* Product Details */}
      <div className="flex flex-col justify-end flex-grow">
        <Link
          href={`/products/${encodeURIComponent(
            item.category
          )}/${encodeURIComponent(item.title)}`}
          className="flex justify-between items-center my-3"
        >
          <div className="flex flex-col gap-1 items-center">
            <p className="text-[10px] md:text-xs text-[#343438] tracking-wider">
              {item.category}
            </p>
          </div>
          <span className="h-10 w-[1px] bg-slate-500"></span>
          <div className="flex flex-col items-center gap-1">
            <p className="font-medium md:font-bold text-[#343438] text-xs sm:text-sm md:text-base">
              {item.weight} oz
            </p>
          </div>
        </Link>
        <div className="flex gap-2 items-center justify-between">
          <p className="text-xs md:text-base font-normal text-[#343438]">
            {typeof item.price === "number"
              ? `$${item.price.toFixed(2)}`
              : "N/A"}
          </p>
          {showBuyNow ? (
            <button
              onClick={handleAddToCart}
              className="text-xs sm:text-sm md:text-base font-montserrat font-medium md:font-bold rounded-bl-xl rounded-tr-xl px-[6px] md:px-3  py-1 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-[1.02] transform transition-all ease-in-out duration-300 capitalize"
            >
              Add to Cart
            </button>
          ) : (
            <Link
              href={`/products/${encodeURIComponent(
                item.category
              )}/${encodeURIComponent(item.title)}`}
              className="text-xs sm:text-sm md:text-base font-montserrat font-medium md:font-bold rounded-bl-xl rounded-tr-xl px-[6px] md:px-3  py-1 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-[1.02] transform transition-all ease-in-out duration-300 capitalize"
            >
              Buy Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

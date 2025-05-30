import React from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    image,
    rating,
    reviews,
    type,
    brand,
    originalPrice,
    discountedPrice,
    badge,
  } = product;

  return (
    <div className="max-w-[240px] border rounded-2xl shadow-md p-3 bg-white flex flex-col items-center relative">
      {/* Badge */}
      {badge && (
        <div className="w-full flex justify-start">
          <span className="absolute top-12 left-1 bg-red-500 text-white text-xs font-normal px-2 py-1 h-14 w-14 rounded-full flex items-center text-center">
            {badge}
          </span>
        </div>
      )}

      {/* Product Title */}
      <h3 className="text-sm font-semibold text-center text-gray-800 leading-tight">
        {title}
      </h3>
      <p className="text-xs text-center text-gray-500">{description}</p>

      {/* Rating Section */}
      <div className="flex items-center">
        <span className="text-yellow-500 text-base">
          {"★".repeat(Math.floor(rating))}
          {"☆".repeat(5 - Math.floor(rating))}
        </span>
        <span className="text-xs text-gray-600 ml-1">({reviews})</span>
      </div>

      {/* Divider */}
      <div className="w-full border-t my-1"></div>

      {/* Product Image */}
      <div className="w-[80%]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex justify-between w-full text-xs text-gray-600">
        <span className="uppercase">{type}</span>
        <span className="font-bold">{brand}</span>
      </div>

      {/* Price Section */}
      <div className="w-full">
        <span className="text-base font-bold text-gray-900">
          <s>${originalPrice.toFixed(2)}</s>
        </span>
        <span className="text-lg font-bold text-gray-900 ml-2">
          ${discountedPrice.toFixed(2)}
        </span>
      </div>

      {/* Buy Now Button */}
      <button className="mt-1 w-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium py-2 rounded-lg">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { productsArray } from "../../dummyData/DummyArray";
import SubHeading from "../../utilities/SubHeading";
import SocendaryBTN from "../../utilities/SocendaryBTN";

const NewProductCard = ({ setActiveMenu }) => {
  // State to toggle the visibility of all items
  const [visibleCount, setVisibleCount] = useState(false);

  // Filter the products based on the category
  const newArr = productsArray.filter((item) => item.cetagory === "new");

  // If visibleCount is false, show only the first 4 products
  const displayedProducts = visibleCount ? newArr : newArr.slice(0, 4);

  console.log(displayedProducts);

  return (
    <div>
      <div className="grid grid-cols-4 gap-10">
        {displayedProducts.map((item) => (
          <div key={item.id} className="w-[250px] relative">
            <div className="bg-[#F5F5F7] border rounded-lg shadow-md p-4 font-montserrat">
              {/* Product Image */}
              <div className="flex justify-center py-5 w-full">
                <Image
                  src={item.image}
                  alt={item.productTitle || "EnergyMAX Product"} // Ensure alt text is meaningful
                  className="object-cover"
                />
              </div>

              {/* Badge: New, Best Seller, or Sold Out */}
              <div className="absolute top-2 left-1 text-white text-xs font-bold p-1 h-12 w-12 rounded-full flex items-center justify-center capitalize text-center bg-red-700">
                {item.stockType}
              </div>
            </div>

            <SubHeading
              className="!text-left pt-5 pb-10"
              title={item.description}
            />

            <div className="absolute bottom-0 left-0">
              <SocendaryBTN href="#" title="buy now" />
            </div>
          </div>
        ))}
      </div>

      {/* "View All Best Sellers" Button */}
      <div onClick={() => setActiveMenu(false)} className="mt-10">
        <SocendaryBTN
          href="/get-started"
          title="View All New Products" // Toggle button text
        />
      </div>
    </div>
  );
};

export default NewProductCard;

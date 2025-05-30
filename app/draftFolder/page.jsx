"use client";
import React, { useEffect, useState } from "react";
import { productsData } from "./everything/Array";
import ProductCard from "./everything/ProductCard";
// import HomeAdvertize from "../conponents/commonComponets/advertize/HomeAdvertize";
import VitaminsPage from "../conponents/commonComponets/singlePageDescription/VitaminsPage";
import Explore from "../conponents/commonComponets/exploreMore/Explore";
import SinglePageDescription from "../conponents/commonComponets/singlePageDescription/SinglePageDescription";
import { Vitamins101Array } from "../conponents/dummyData/DummyArray";
import { ThreeBottle } from "@/public/assets/svg/ThreeBotle";
import axios from "axios";
import SliderForSwiper from "../conponents/slider/SliderForSwiper";

const DynamicGroppingProduct = () => {
  // Group products by subcategory
  const groupedProducts = productsData.reduce((item, product) => {
    if (!item[product.subCategory]) {
      item[product.subCategory] = [];
    }
    item[product.subCategory].push(product);
    return item;
  }, {});

  return (
    <>
      <div className="container mx-auto pt-24">
        {Object.keys(groupedProducts).map((subcategory) => (
          <div key={subcategory} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{subcategory}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {groupedProducts[subcategory].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <HomeAdvertize /> */}

      <Explore />
      <SinglePageDescription
        data={Vitamins101Array}
        mainHeading="Understanding Discount Bundling for Vitamins"
        subHeading="Get the best deals on our curated vitamin bundles."
        icon={ThreeBottle} // Optional: Pass a custom icon
      />
      <SliderForSwiper />
    </>
  );
};

export default DynamicGroppingProduct;

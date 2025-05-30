"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ShopNow = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products[2]);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#F5F5F7]">
      <div className="container mx-auto py-20 flex flex-col md:flex-row justify-between px-3">
        <div className="w-full md:w-1/2 h-auto bg-gradient-to-r pt-16 from-[#dfdc5c] to-[#facd04] rounded-bl-[10%] rounded-tr-[10%] overflow-hidden relative">
          {data && data.images && data.images[0] ? (
            <Image
              src={data.images[0]}
              alt={data.title || "Product Image"}
              fill
              sizes="100%"
              className="object-cover"
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full md:w-2/3 mx-auto">
            <h2 className="text-2xl lg:text-5xl text-[#343438] font-montserrat font-bold lg:max-w-[900px] leading-[64px] lg:my-10">
              {data?.shippingInformation}
            </h2>
            <p className="text-base lg:text-lg font-lato font-normal leading-normal text-[#343438] mb-5">
              {data?.description}
            </p>
            <button className="text-lg lg:text-2xl font-montserrat font-bold rounded-bl-3xl rounded-tr-3xl px-5 lg:px-10 py-2 lg:py-5 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300">
              {data?.brand}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;

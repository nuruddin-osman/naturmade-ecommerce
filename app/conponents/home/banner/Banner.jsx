"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BannerImg from "@/public/assets/home/homeBanner.webp";

const Banner = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      setData(res.data.products[0]);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: BannerImg && `url(${BannerImg.src})`,
      }}
      className="bg-cover bg-center"
    >
      <div className="w-full lg:container mx-auto py-20 px-4">
        <h4 className="text-xl md:text-lg  font-lato font-medium text-[#121212bf]">
          {data?.title}
        </h4>
        <h2 className="text-3xl lg:text-6xl text-[#343438] font-montserrat font-bold w-1/3 lg:max-w-[900px] md:leading-[64px] my-10">
          Give your immune system a head start.†
        </h2>
        <button className="text-lg lg:text-2xl font-montserrat font-bold rounded-bl-3xl rounded-tr-3xl px-5 lg:px-10 py-2 lg:py-5 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300">
          {data?.shippingInformation}
        </button>
      </div>
    </div>
  );
};

export default Banner;

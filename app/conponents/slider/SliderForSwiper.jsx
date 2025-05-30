"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "@/app/draftFolder/everything/DraftCard";
import axios from "axios";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SliderForSwiper = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchArray = await axios.get(
          "https://dummyjson.com/products?limit=200&skip=100"
        );
        setData(fetchArray.data.products);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10 px-2 md:px-0 relative">
      {/* Swiper slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={2}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={false}
        autoplay={false} //{{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
      >
        {/* Product array map then use a slider */}
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation button */}
      <div className="custom-swiper-button-next absolute top-1/2 right-0 z-10 bg-[#00000054] py-4 px-1 md:py-5  text-white hover:bg-[#00000085] transition duration-300 transform -translate-y-1/2 cursor-pointer text-base md:text-2xl rounded-e-md mr-2 md:mr-0">
        <FaAngleRight />
      </div>
      <div className="custom-swiper-button-prev absolute top-1/2 left-0 z-10 bg-[#00000054] py-4 px-1 md:py-5  text-white hover:bg-[#00000085] transition duration-300 transform -translate-y-1/2 cursor-pointer text-base md:text-2xl rounded-s-md ml-2 md:ml-0">
        <FaAngleLeft />
      </div>
    </div>
  );
};

export default SliderForSwiper;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import GallaryCard from "../../card/gallaryCard/Index";
import SliderForSwiper from "../../slider/CommonSlider";
import axios from "axios";

const NatureMadeVitamins = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=200&skip=100"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-10 container mx-auto">
      <h2 className="text-2xl md:text-5xl font-montserrat font-bold text-center md:leading-[64px] text-[#343438]">
        Happy to be a Part of Your Day
      </h2>
      <p className="text-sm md:text-lg font-lato font-normal text-center leading-normal text-[#343438] mb-5">
        Follow us for new product news, healthy tips, & more.
      </p>
      <div className="text-center">
        <div className="flex justify-center gap-5">
          <Link
            href="#"
            className="flex items-center justify-center text-2xl bg-[#343438b4] text-white w-8 h-8 rounded-full"
          >
            <FaInstagram />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center text-2xl bg-[#343438b4] text-white w-8 h-8 rounded-full"
          >
            <FaInstagram />
          </Link>
        </div>
        <h3 className="text-xl font-montserrat font-bold my-5">Follow Us</h3>
      </div>
      <SliderForSwiper
        data={products}
        slidesPerView={3}
        spaceBetween={15}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        renderItem={(item) => <GallaryCard item={item} />}
      />
    </div>
  );
};

export default NatureMadeVitamins;

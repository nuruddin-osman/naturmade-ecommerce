"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SliderForSwiper from "../../slider/CommonSlider";
import ProductCard from "@/app/draftFolder/everything/DraftCard";
import axios from "axios";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isActive, setIsActive] = useState(null);
  const [showBuyNow, setShowBuyNow] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem("products");
      if (cachedData) {
        setProducts(JSON.parse(cachedData));
        setLoading(false);
      } else {
        try {
          const response = await axios.get(
            "https://dummyjson.com/products?limit=200&skip=100"
          );
          setProducts(response.data.products);
          localStorage.setItem(
            "products",
            JSON.stringify(response.data.products)
          );
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && products.length > 0) {
      setFilteredProducts(products);
    }
  }, [products, loading]);

  const filterItem = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const newItems = products.filter(
        (newVal) => newVal.category === category
      );
      setFilteredProducts(newItems);
    }
    setIsActive(category);
  };

  const categories =
    products.length > 0
      ? ["all", ...new Set(products.map((item) => item.category))]
      : ["all"];

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="container mx-auto my-20">
        <h2 className="text-2xl lg:text-5xl font-montserrat font-bold text-center leading-10 lg:leading-[64px] text-[#343438] px-2 my-4">
          Find Your Daily Routine
        </h2>
        <p className="hidden md:block text-lg font-lato font-normal text-center leading-normal text-[#343438] mb-5 px-2">
          Shop our best-selling products and start your new routine today
        </p>
        <ul className="flex items-center gap-2 md:gap-5 justify-center flex-wrap px-2">
          {categories.map((item) => (
            <li key={item}>
              <Link
                onClick={() => filterItem(item)}
                className={`text-[#4A4A4A] text-base md:text-xl font-montserrat font-bold border rounded-full border-[#6B6B6E] px-5 py-2 inline-block capitalize ${
                  isActive === item ? "bg-[#6B6B6E] text-white" : ""
                }`}
                href="javascript:void(0)"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <SliderForSwiper
            data={filteredProducts}
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            renderItem={(item) => (
              <ProductCard item={item} showBuyNow={showBuyNow} />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;

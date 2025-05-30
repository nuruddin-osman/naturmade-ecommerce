"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../draftFolder/everything/DraftCard";
import axios from "axios";

const DraftProduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem("products");
      if (cachedData) {
        setProducts(JSON.parse(cachedData));
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
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await axios.get(
  //       "https://dummyjson.com/products?limit=200&skip=100"
  //     );
  //     setProducts(data?.data?.products);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      {products?.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DraftProduct;

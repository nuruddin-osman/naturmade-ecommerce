"use client";
import { productsData } from "@/app/draftFolder/everything/Array";
import ProductCard from "@/app/draftFolder/everything/ProductCard";
import { useParams } from "next/navigation";
import React from "react";
const DynamicGroppingProduct = () => {
  // Get the category from the URL
  const params = useParams();
  const category = params.title; // Assuming the URL is /byBenefits/:category
  console.log(category);

  // Filter products by the category from the URL
  const filteredProducts = productsData.filter(
    (product) => product.category === category
  );
  // Group products by subcategory
  const groupedProducts = filteredProducts.reduce((item, product) => {
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
    </>
  );
};

export default DynamicGroppingProduct;

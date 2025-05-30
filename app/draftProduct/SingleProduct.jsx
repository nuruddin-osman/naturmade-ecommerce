import React from "react";

import { products } from "./ProductArr";
import { useParams } from "next/navigation";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const getCategoryContent = (category) => {
    switch (category) {
      case "electronics":
        return <p>This is an electronic product with special features.</p>;
      case "clothing":
        return <p>This is a clothing product with size and color options.</p>;
      default:
        return <p>No special content for this category.</p>;
    }
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>{product.details}</p>
      <p>Category: {product.category}</p>
      {getCategoryContent(product.category)}
    </div>
  );
};

export default SingleProduct;

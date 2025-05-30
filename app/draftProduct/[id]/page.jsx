"use client";
import { products } from "../ProductArr";

const ProductDetail = ({ params }) => {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>{product.details}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetail;

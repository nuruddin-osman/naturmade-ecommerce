import Link from "next/link";
import { products } from "./ProductArr";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/draftProduct/${product.id}`}>
            <div className="border p-4">
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <p>{product.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;

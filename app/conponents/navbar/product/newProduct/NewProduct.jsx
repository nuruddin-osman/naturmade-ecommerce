import NewProductCard from "@/app/conponents/card/newProductCard/NewProductCard";
import React from "react";

const NewProduct = ({ setActiveMenu }) => {
  return (
    <div className="ml-10 mt-10">
      <div>
        <NewProductCard setActiveMenu={setActiveMenu} />
      </div>
    </div>
  );
};

export default NewProduct;

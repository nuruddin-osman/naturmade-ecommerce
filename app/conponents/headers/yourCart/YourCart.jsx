import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoGiftSharp } from "react-icons/io5";
import Link from "next/link";
import AddToCartProduct from "../../addToCartProduct/AddToCartProduct";
import { useSelector } from "react-redux";
import HeadingLink from "../../utilities/HeadingLink";

const YourCart = ({ setYourCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="w-full bg-[#FFF] shadow-md p-4 overflow-y-auto h-screen ">
      <div className="flex justify-between items-center px-2 mb-10">
        <span className="capitalize text-base text-[#343438] font-montserrat font-bold">
          your cart
        </span>
        <span
          onClick={() => setYourCart(false)}
          className="text-xl cursor-pointer"
        >
          <RxCross1 />
        </span>
      </div>
      <div className="border border-gray-200">
        <AddToCartProduct setYourCart={setYourCart} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <span>$25</span>
          <h2 className="text-base italic  text-[#343438] font-montserrat ">
            away from Free Shipping
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <IoGiftSharp />
          </span>
          <span>$25</span>
          <h2 className="text-base text-[#343438] font-montserrat italic ">
            away from Free Shipping
          </h2>
        </div>
      </div>
      <Link
        href="/cart"
        onClick={() => setYourCart(false)}
        className="w-full text-base mt-3 font-montserrat font-bold tracking-[2px] rounded-bl-2xl rounded-tr-2xl px-5 py-2 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300 block text-center"
      >
        Checkout
        {cartItems.length > 0 && <span> ({totalQuantity})</span>}
      </Link>
      <span
        onClick={() => setYourCart(false)}
        className="flex items-center justify-center mt-5"
      >
        <HeadingLink
          href="/"
          className="!text-base"
          title="Continue shopping"
        />
      </span>
      {/* <hr className="pb-10" />
      <div className="">
        <h2 className="text-lg text-center font-bold  text-[#343438] font-montserrat ">
          You May Also Like
        </h2>
        <div className="mt-4">
          <CartSlider />
        </div>
      </div> */}
    </div>
  );
};

export default YourCart;

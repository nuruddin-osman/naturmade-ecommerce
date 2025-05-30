"use client";

import React, { useEffect } from "react";
import Heading from "../conponents/utilities/Heading";
import HeadingLink from "../conponents/utilities/HeadingLink";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMinus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { HiOutlinePlus } from "react-icons/hi2";
import {
  decrementQuantity,
  incrementQuantity,
  loadCartFromStorage,
  removeFromCart,
} from "../featurs/producatCardSlice/cartSlice";
import Image from "next/image";
import SubHeading from "../conponents/utilities/SubHeading";
import PrimaryBTN from "../conponents/utilities/PrimaryBTN";
import { useRouter } from "next/navigation";
import AddToCartProduct from "../conponents/addToCartProduct/AddToCartProduct";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  //  useEffect use kore LocalStorage from cart data Redux Store load
  useEffect(() => {
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  const handleCartRemove = (item) => {
    dispatch(removeFromCart(item));
    setYourCart(false);
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };
  const subtotal = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  const discountAmount = cartItems.reduce(
    (total, item) =>
      total +
      (item.discountPercentage
        ? (item.totalPrice * item.discountPercentage) / 100
        : 0),
    0
  );

  const total = subtotal - discountAmount;

  const handleNavigateToCheckout = () => {
    router.push("/Checkout");
  };

  return (
    <>
      <div className="bg-gray-100 py-8 md:block hidden">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-5">
              <Heading className="!text-left" title="Your Cart" />
              <HeadingLink
                href="/"
                className="!text-base"
                title="Continue shopping"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 border-b text-left px-2">Image</th>
                    <th className="py-2 border-b text-left px-2">
                      Product Name
                    </th>
                    <th className="py-2 border-b text-left px-2">Model</th>
                    <th className="py-2 border-b text-left px-2">Quantity</th>
                    <th className="py-2 border-b text-left px-2">Unit Price</th>
                    <th className="py-2 border-b text-left px-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <tr key={item.id} className="bg-[#f5f5f5]  border-b-2 ">
                      <td className="py-2 border-b">
                        <div className="w-24 h-24 relative overflow-hidden">
                          {item.images && (
                            <Image
                              src={item.images[0]}
                              alt={item.title}
                              fill
                              sizes="100%"
                              className="object-cover"
                            />
                          )}
                        </div>
                      </td>
                      <td className="py-2 border-b px-2">{item.title}</td>
                      <td className="py-2 border-b px-2">{item.sku}</td>
                      <td className="py-2 border-b px-2">
                        <div className="flex space-x-2 mt-2">
                          <div className="flex items-center border-2 rounded-md">
                            <button
                              onClick={() => handleDecrement(item)}
                              className="h-full text-gray-600 bg-white text-2xl px-1"
                            >
                              <AiOutlineMinus />
                            </button>
                            <span className="px-3 py-1 text-gray-800 text-2xl font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrement(item)}
                              className="h-full text-gray-600 bg-white text-2xl px-1"
                            >
                              <HiOutlinePlus />
                            </button>
                          </div>
                          <button
                            onClick={() => handleCartRemove(item)}
                            className="text-[#2d2d2d] hover:text-red-800 text-xl underline"
                          >
                            <RxCross1 />
                          </button>
                        </div>
                      </td>
                      <td className="py-2 border-b px-2">{item.price}</td>
                      <td className="py-2 border-b px-2">
                        {(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="border-b-2 border-black mt-2 pr-4">
                <SubHeading
                  className="!text-right !font-bold"
                  title={`Sub-Total: $ ${subtotal.toFixed(2)}`}
                />
                <SubHeading
                  className="!text-right !font-bold"
                  title={`Total: $ ${total.toFixed(2)}`}
                />
              </div>
            </div>

            {/* Order Confirmation */}
            <div className="mt-8 hidden md:block">
              <PrimaryBTN
                onClick={handleNavigateToCheckout}
                className="w-full"
                title="Confirm Order"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden px-5 mb-5">
        <Heading className="!text-left" title="Your Cart" />
        <HeadingLink
          href="/"
          className="!text-base"
          title="Continue shopping"
        />
      </div>
      <div className="md:hidden border-b-2 border-black px-2">
        <AddToCartProduct />
      </div>
      <div className="my-8 md:hidden px-4">
        <PrimaryBTN
          onClick={handleNavigateToCheckout}
          className="w-full"
          title="Confirm Order"
        />
      </div>
    </>
  );
};

export default CartPage;

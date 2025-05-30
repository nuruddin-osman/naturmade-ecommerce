"use client";

import {
  decrementQuantity,
  incrementQuantity,
  loadCartFromStorage,
  removeFromCart,
} from "@/app/featurs/producatCardSlice/cartSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddToCartProduct = ({ setYourCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

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

  return (
    <>
      <div className="">
        {cartItems?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2 border-b border-gray-200"
          >
            <div className="flex items-center space-x-4">
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
              <div className="">
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-gray-600">
                    ${item.totalPrice?.toFixed(2)}
                  </p>
                </div>
                <div className="flex  space-x-8 items-center mt-2">
                  <div className="flex items-center border bg-gray-300 rounded-md px-1">
                    <button
                      onClick={() => handleDecrement(item)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-full"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-full"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleCartRemove(item)}
                    className="text-[#2d2d2d] hover:text-red-800 underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-right font-bold text-base py-3 px-2">
          <h3>Subtotal = ${subtotal.toFixed(2)}</h3>
          <h3>total = ${total.toFixed(2)}</h3>
        </div>
      </div>
    </>
  );
};

export default AddToCartProduct;

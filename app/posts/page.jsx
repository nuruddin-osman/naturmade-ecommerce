"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../featurs/producatCardSlice/cartSlice";

const MyComponent = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleCartRemove = (item) => {
    dispatch(removeFromCart(item));
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
  console.log(total);

  return (
    <>
      <div className="">
        {cartItems?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-28 h-28 relative overflow-hidden">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
              <div className="">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <h3 className="text-lg font-semibold">
                    {item.discountPercentage}%
                  </h3>
                  <p className="text-gray-600">${item.totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleDecrement(item)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleCartRemove(item)}
                    className="text-red-500 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="">
          <h3>Subtotal = {subtotal.toFixed(2)}</h3>
          <h3>total ={total.toFixed(2)}</h3>
        </div>
      </div>
    </>
  );
};

export default MyComponent;

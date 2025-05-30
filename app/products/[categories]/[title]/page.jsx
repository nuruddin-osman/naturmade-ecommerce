"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import axios from "axios";
import Heading from "@/app/conponents/utilities/Heading";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import { Tickmark } from "@/public/assets/svg/tickmark";
import Link from "next/link";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  loadCartFromStorage,
} from "@/app/featurs/producatCardSlice/cartSlice";
import PrimaryBTN from "@/app/conponents/utilities/PrimaryBTN";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const { title } = useParams();
  const fetchData = useSelector((state) => state.menuReducers?.fetchData || []);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  useEffect(() => {
    if (fetchData.length > 0) {
      const foundProduct = fetchData.find(
        (item) =>
          item.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
      );
      if (foundProduct) {
        setProduct(foundProduct);
        // Check if product already exists in cart, if so, set quantity from cart
        const cartProduct = cartItems.find(
          (item) => item.id === foundProduct.id
        );
        if (cartProduct) {
          setQuantity(cartProduct.quantity);
        }
      }
    }
  }, [fetchData, title, cartItems]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=200&skip=100`
        );
        const allProducts = response.data.products;
        const foundProduct = allProducts.find(
          (item) =>
            item.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
        );
        if (foundProduct) {
          setProduct(foundProduct);
          const cartProduct = cartItems.find(
            (item) => item.id === foundProduct.id
          );
          if (cartProduct) {
            setQuantity(cartProduct.quantity);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (title) {
      fetchProduct();
    }
  }, [title, cartItems]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const findProduct = cartItems.find((item) => item.id === product.id);
    if (findProduct) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to local storage
    } else {
      // Otherwise, add the product to the cart
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  const subtotal = product.price * quantity;
  const discountPrice = product.price * (1 - product.discountPercentage / 100);
  const total = discountPrice * quantity;

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid md:grid-cols-[1fr,5fr]">
            <div className="w-full hidden md:flex gap-2 flex-col">
              {product.images?.map((item) => (
                <div
                  key={item}
                  className="w-full h-24 relative overflow-hidden border"
                >
                  <Image
                    src={item}
                    fill
                    sizes="100%"
                    className="object-cover"
                    alt="images product"
                  />
                </div>
              ))}
            </div>

            <div className="w-full h-96 relative ">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="flex items-center gap-5">
              <div className="flex text-yellow-400">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="">({product.rating})</span>
              <Link className="underline" href="#">
                Write a review
              </Link>
            </div>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="">
                  <SubHeading className="!m-0 !font-bold" title="Count" />
                  <button className="border rounded-md px-2 py-1">30</button>
                </div>
                <div className="">
                  <SubHeading
                    className="!m-0 !font-bold !text-left"
                    title="Quantity"
                  />
                  <div className="flex items-center border bg-gray-300 rounded-md px-1">
                    <button
                      onClick={handleDecrement}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-full"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-gray-800">{quantity}</span>
                    <button
                      onClick={handleIncrement}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <Paragraph
                  className="!text-left"
                  title="Serving size: 1 scoop"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-semibold">${product.price}</span>
              <span className="text-sm text-gray-500 line-through">
                $
                {Math.round(
                  product.price / (1 - product.discountPercentage / 100)
                )}
              </span>
              <span className="text-sm text-green-600">
                {product.discountPercentage}% off
              </span>
            </div>
            <div className="  bg-white shadow-lg rounded-lg border border-[#2d2d2d] overflow-hidden">
              <div className="flex justify-between border-2 border-[#2d2d2d] p-2">
                <SubHeading
                  className="!text-left !font-extrabold"
                  title="One-time purchase"
                />
                <SubHeading
                  className="!text-left !font-extrabold"
                  title={`$ ${subtotal.toFixed(2)}`}
                />
              </div>
              <div className="flex justify-between border-2 border-[#2d2d2d] p-2">
                <SubHeading
                  className="!text-left !font-extrabold"
                  title="Subscribe & save 10% + Free Shipping**"
                />
                <SubHeading
                  className="!text-left !font-extrabold"
                  title={`$ ${total.toFixed(2)}`}
                />
              </div>
            </div>
            <div className="flex items-center space-x-5 px-2">
              <PrimaryBTN
                onClick={handleAddToCart}
                className="!w-full"
                title="ADD TO CART"
              />
              <Link href="#" className="text-5xl cursor-pointer text-[#2d2d2d]">
                <IoIosHeartEmpty />
              </Link>
            </div>
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold">Product Details</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Brand: {product.brand}</li>
                <li>Category: {product.category}</li>
                <li>Stock: {product.stock} items available</li>
                <li>Rating: {product.rating}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f0f0f0] py-20">
        <div className="container mx-auto">
          <Heading className="!text-left" title="Benefits" />
          <Paragraph className="!text-left" title={product.description} />
          <ul className="ml-10 list-disc list-inside">
            {product.reviews?.map((item) => (
              <li key={item} className="">
                {item.comment}---{item.reviewerName}
              </li>
            ))}
          </ul>
          <SubHeading
            className="!font-bold !text-left mt-5"
            title="Product Facts"
          />
          <ul className="">
            {product.reviews?.map((item) => (
              <li key={item} className="ml-5 flex gap-3 items-center mb-1">
                <span className="w-7 h-7 rounded-full border-2 border-[#000] flex items-center justify-center">
                  <Tickmark />
                </span>
                <span>{item.comment}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Heading from "../conponents/utilities/Heading";
import SubHeading from "../conponents/utilities/SubHeading";
import Link from "next/link";
import { useFormik } from "formik";
import { CheckoutValidationSchema } from "../validations/CheckoutValidationSchema";
import { useRouter } from "next/navigation";
import PrimaryBTN from "../conponents/utilities/PrimaryBTN";
const CheckOutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const router = useRouter();

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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      mobile: "",
      email: "",
      city: "",
      comment: "",
      subTotalPrice: "",
      totalPrice: "",
      paymentMethod: "",
      deliveryMethod: "Home Delivery", // Default value
      termsAccepted: true,
    },
    validationSchema: CheckoutValidationSchema,
    onSubmit: (values) => {
      if (!values.termsAccepted) {
        alert("Please accept the terms and conditions");
        return;
      }
      const user = localStorage.getItem("users");
      if (user) {
        router.push("/");
      } else {
        router.push("/account/login");
      }
    },
  });

  useEffect(() => {
    formik.setValues((prevValues) => ({
      ...prevValues,
      subTotalPrice: subtotal,
      totalPrice: total,
    }));
  }, [subtotal, total]);

  return (
    <>
      <div className="container mx-auto p-4">
        <Heading className="!text-left" title="Checkout" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-5">
          {/* Customer Information */}
          <div className="mb-8 bg-[#f5f5f5] p-3 rounded-md w-full">
            <SubHeading
              className="!text-left !font-bold"
              title="1. Customer Information"
            />

            <form
              id="checkoutForm"
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-1 gap-4 w-full"
            >
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  className="w-full p-2 border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500">{formik.errors.firstName}</div>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  className="w-full p-2 border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500">{formik.errors.lastName}</div>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address*"
                  className="w-full p-2 border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-red-500">{formik.errors.address}</div>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile*"
                  className="w-full p-2 border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="text-red-500">{formik.errors.mobile}</div>
                ) : null}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full p-2 border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City*"
                  className="w-full p-2 border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-500">{formik.errors.city}</div>
                ) : null}
              </div>
              <div>
                <select
                  name="city"
                  className="p-2 border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                >
                  <option>Dhaka City</option>
                </select>
              </div>
              <div>
                <textarea
                  name="comment"
                  placeholder="Comment"
                  className="w-full p-2 border rounded md:col-span-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="w-full">
            <div className="flex justify-between gap-5 md:gap-10 flex-col md:flex-row">
              {/* Payment Method */}
              <div className="mb-8 bg-[#f5f5f5] p-3 rounded-md w-full">
                <SubHeading
                  className="!text-left !font-bold"
                  title="2. Payment Method"
                />
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cash on Delivery"
                      className="mr-2"
                      onChange={formik.handleChange}
                      checked={
                        formik.values.paymentMethod === "Cash on Delivery"
                      }
                    />
                    Cash on Delivery
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Online Payment"
                      className="mr-2"
                      onChange={formik.handleChange}
                      checked={formik.values.paymentMethod === "Online Payment"}
                    />
                    Online Payment
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="POS on Delivery"
                      className="mr-2"
                      onChange={formik.handleChange}
                      checked={
                        formik.values.paymentMethod === "POS on Delivery"
                      }
                    />
                    POS on Delivery
                  </label>
                </div>
                <div className="mt-4">
                  <p>We Accept:</p>
                  {/* Add payment method logos here */}
                </div>
              </div>
              {/* Delivery Method */}
              <div className="mb-8 bg-[#f5f5f5] p-3 rounded-md w-full">
                <SubHeading
                  className="!text-left !font-bold"
                  title="3. Delivery Method"
                />

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="delivery" className="mr-2" />
                    Home Delivery - 60%
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="delivery" className="mr-2" />
                    Store Pickup - 0%
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="delivery" className="mr-2" />
                    Request Express - Charge Applicable
                  </label>
                </div>
              </div>
            </div>
            {/*Apply cuppon */}
            <div className="flex flex-col md:flex-row gap-8 bg-[#f5f5f5] px-3 py-5 rounded-md w-full">
              <div className=" flex flex-col md:flex-row gap-2 w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Gift Voucher"
                  className="p-2 border rounded flex-grow"
                />
                <button className="bg-blue-500 text-white p-2 rounded">
                  Apply Voucher
                </button>
              </div>
              <div className=" flex flex-col md:flex-row gap-2 w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Promo / Coupon Code"
                  className="p-2 border rounded flex-grow"
                />
                <button className="bg-blue-500 text-white p-2 rounded">
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Order Overview */}
            <div className="bg-[#f5f5f5] p-3 rounded-md mt-8">
              <SubHeading
                className="!text-left !font-bold"
                title="4. Order Overview"
              />
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 border-b text-left px-2">
                      Product Name
                    </th>
                    <th className="py-2 border-b text-left px-2">Price</th>
                    <th className="py-2 border-b text-left px-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <tr key={item.id} className="bg-[#f5f5f5]  border-b-2 ">
                      <td className="py-2 border-b px-2 text-xs md:text-base">
                        {item.title}
                      </td>
                      <td className="py-2 border-b px-2 text-xs md:text-base">
                        {item.price.toFixed(0)} x {item.quantity}
                      </td>
                      <td className="py-2 border-b px-2 text-xs md:text-base">
                        {(item.price * item.quantity).toFixed(0)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-right font-bold text-base py-3 px-2 md:mr-10">
                <h3>Subtotal = ${subtotal.toFixed(0)}</h3>
                <h3>total = ${total.toFixed(0)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t-2 flex flex-col md:flex-row items-center py-4 md:py-8 justify-between px-1 md:px-4">
        <div className="flex items-center md:w-4/5 mb-3">
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted" // Connect checkbox to Formik field
            className="form-checkbox h-5 w-5 text-blue-600"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.termsAccepted}
          />
          <label
            htmlFor="terms"
            className="ml-2 text-gray-700 leading-3 md:leading-normal text-xs md:text-base"
          >
            I have read and agree to the{" "}
            <Link href="#" className="text-[#ff6347]">
              Terms and Conditions
            </Link>
            ,{" "}
            <Link href="#" className="text-[#ff6347]">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#ff6347]">
              Refund and Return Policy
            </Link>{" "}
          </label>
        </div>

        <button
          type="submit"
          form="checkoutForm"
          className="w-full md:w-1/5 text-lg lg:text-xl font-montserrat font-bold rounded-bl-3xl rounded-tr-3xl px-4 lg:px-8 py-2 lg:py-4 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300"
          onClick={() => {
            if (!formik.values.termsAccepted) {
              alert("Please accept the terms and conditions");
            }
          }}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
};

export default CheckOutPage;

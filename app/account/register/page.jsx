import Heading from "@/app/conponents/utilities/Heading";
import HeadingLink from "@/app/conponents/utilities/HeadingLink";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import PrimarySmallBtn from "@/app/conponents/utilities/PrimarySmallBtn";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="container mx-auto">
      <Heading className="py-4 !font-bold" title="Create account" />
      <Paragraph title="Create an account today!" />
      <div className="mb-8 bg-[#f5f5f5] p-3 rounded-md w-1/3 mx-auto">
        <form className="grid grid-cols-1 gap-4 w-full">
          <div>
            <label
              htmlFor="fName"
              className="text-base font-lato font-medium leading-normal text-[#343438] mb-1 block"
            >
              First name
            </label>
            <input
              type="text"
              name="fName"
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="lName"
              className="text-base font-lato font-medium leading-normal text-[#343438] mb-1 block"
            >
              Last name
            </label>
            <input
              type="text"
              name="lName"
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-base font-lato font-medium leading-normal text-[#343438] mb-1 block"
            >
              Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-base font-lato font-medium leading-normal text-[#343438] mb-1 block"
            >
              Password <span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="w-full p-2 border rounded"
            />
          </div>
          <PrimarySmallBtn title="Create" className="w-1/3" />
        </form>
      </div>
    </div>
  );
};

export default Register;

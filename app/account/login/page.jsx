import Heading from "@/app/conponents/utilities/Heading";
import HeadingLink from "@/app/conponents/utilities/HeadingLink";
import PrimarySmallBtn from "@/app/conponents/utilities/PrimarySmallBtn";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto">
      <Heading className="py-4 !font-bold" title="Login" />
      <div className="mb-8 bg-[#f5f5f5] p-3 rounded-md w-1/3 mx-auto">
        <form className="grid grid-cols-1 gap-4 w-full">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="w-full p-2 border rounded"
            />
          </div>
          <Link href="#" className="underline hover:no-underline">
            Forgot your password?
          </Link>
          <PrimarySmallBtn title="Sign in" className="w-1/3 mx-auto" />
        </form>
        <HeadingLink
          href="/account/register"
          title="Create account"
          className="w-1/3 mx-auto !text-center block !text-base mt-6"
        />
        <div className="mt-8">
          <SubHeading
            className="!font-bold "
            title="Need help accessing your subscriptions?"
          />
          <HeadingLink
            href="#"
            title="Click Here"
            className="w-1/4 mx-auto !text-center block !text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

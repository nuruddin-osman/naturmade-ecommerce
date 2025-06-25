"use client";
import React from "react";
import Heading from "@/app/conponents/utilities/Heading";
import HeadingLink from "@/app/conponents/utilities/HeadingLink";
import PrimarySmallBtn from "@/app/conponents/utilities/PrimarySmallBtn";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const registrationAuth = () => {
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then((user) => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (values) => {
      console.log(values);
      registrationAuth();
    },
  });

  return (
    <div className="container mx-auto">
      <Heading className="py-4 !font-bold" title="Login" />
      <div className="mb-8 bg-[#f5f5f5] p-3 rounded-md w-1/3 mx-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 gap-4 w-full"
        >
          <div>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              placeholder="password"
              className="w-full p-2 border rounded"
            />
          </div>
          <Link href="#" className="underline hover:no-underline">
            Forgot your password?
          </Link>
          <PrimarySmallBtn
            type="submit"
            title="Sign in"
            className="w-1/3 mx-auto"
          />
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

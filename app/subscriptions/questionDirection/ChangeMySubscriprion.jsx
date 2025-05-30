import SubHeading from "@/app/conponents/utilities/SubHeading";
import Link from "next/link";
import React from "react";

const ChangeMySubscriprion = () => {
  return (
    <div className="container mx-auto">
      <SubHeading
        className="!text-left !mb-0 pb-5"
        title="Follow the steps below:"
      />
      <ol className="list-decimal text-[#64646b] font-lato text-sm pl-2">
        {[
          "Log into your account",
          "Click &apos;Manage Subscriptions",
          "Click &apos;Subscriptions",
          "Click on the yellow box &apos;Manage Subscriptions",
          "Scroll down to 'Delivery Every' and click &apos;Edit",
          "Use the drop down to select your shipping frequency (30, 45, 60, 90 days)",
          <>
            Click &apos;Update. Of note, this update will affect future orders,
            not current orders that are being processed. If you would like to
            make an update to your current order, please email us at
            <Link
              href="mailto:info@naturemade.com"
              className="underline text-blue-800"
            >
              info@naturemade.com.
            </Link>
          </>,
        ].map((step, index) => (
          <li
            key={index}
            className={`border-b border-[#9f9fa1] py-1 ${
              index === 0 ? "border-t border-[#9f9fa1]" : ""
            }`}
          >
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ChangeMySubscriprion;

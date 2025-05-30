import Image from "next/image";
import React from "react";
import SubscribeEnjoyImg from "@/public/assets/Subscription-page/SubscribeEnjoy.webp";
import Heading from "@/app/conponents/utilities/Heading";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import Paragraph from "@/app/conponents/utilities/Paragraph";

const SubscribeEnjoy = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto flex md:flex-row flex-col gap-10 px-3">
        <div className="w-full md:w-1/2 h-auto">
          <Image src={SubscribeEnjoyImg} alt="Subscribe & Enjoy Img" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full md:w-3/4 mx-auto">
            <Heading
              className="!text-left"
              title="Subscribe & Enjoy These Benefits"
            />
            <div className="">
              <ol className="list-decimal text-2xl font-montserrat mt-8 pl-8">
                <li className="mb-5">
                  <SubHeading
                    className="!font-montserrat uppercase !text-left !text-2xl !font-bold !mb-0"
                    title="REGULAR SAVINGS"
                  />
                  <Paragraph
                    className="!text-left"
                    title="10% off each eligible product (those priced $11 or more per unit)"
                  />
                </li>
                <li className="mb-5">
                  <SubHeading
                    className="!font-montserrat uppercase !text-left !text-2xl !font-bold !mb-0"
                    title="FREE SHIPPING**"
                  />
                  <Paragraph
                    className="!text-left"
                    title="On every subscription delivery"
                  />
                </li>
                <li className="mb-5">
                  <SubHeading
                    className="!font-montserrat uppercase !text-left !text-2xl !font-bold !mb-0"
                    title="FLEXIBLE SCHEDULES"
                  />
                  <Paragraph
                    className="!text-left"
                    title="Choose either a 30, 45, 60 or 90-day delivery schedule and change or cancel anytime"
                  />
                </li>
                <li className="mb-5">
                  <SubHeading
                    className="!font-montserrat uppercase !text-left !text-2xl !font-bold !mb-0"
                    title="PEACE OF MIND"
                  />
                  <Paragraph
                    className="!text-left"
                    title="Knowing your supplements will be delivered to your door when you need them"
                  />
                </li>
              </ol>
              <Paragraph
                className="!text-left mt-5 !text-sm"
                title="**When you purchase one or more products on subscription, you will automatically get free shipping on this and all future deliveries. Offer excludes tax and is subject to change. Orders outside of the contiguous US, including Alaska, Hawaii & APO/DPO/FPO will be charged $8 for shipping."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeEnjoy;

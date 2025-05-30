"use client";

import React from "react";
import SubscriptionBanner from "./subscriptionBanner/SubscriptionBanner";
import SubscriptionCustomar from "./subscriptionCustomar/SubscriptionCustomar";
import SubscribeEnjoy from "./subscribe&Enjoy/Subscribe&Enjoy";
import FindYourDailyRoutine from "./findYourDailyRoutine/FindYourDailyRoutine";
import ContactUs from "../conponents/home/contactus/Index";
import Questions from "../get-started/questions/Questions";

const page = () => {
  return (
    <div>
      <div className="">
        <SubscriptionBanner />
      </div>
      <div className="">
        <SubscriptionCustomar />
      </div>
      <div className="">
        <SubscribeEnjoy />
      </div>
      <div className="">
        <FindYourDailyRoutine />
      </div>
      <div className="">
        <Questions />
      </div>
      <div className="">
        <ContactUs />
      </div>
    </div>
  );
};

export default page;

"use client";

import React from "react";
import GetStartedBanners from "./banner/GetStartedBanner";
import ExplorMore from "./explorMore/ExplorMore";
import HowToGetStart from "./howToGetStarted/HowToGetStart";
import Questions from "./questions/Questions";
import QuickStartRecommendation from "./quickStartRecommendation/QuickStartRecommendation";
import Vitamins101 from "./vitamins101/Vitamins101";

const GetStarted = () => {
  return (
    <div>
      <GetStartedBanners />
      <HowToGetStart />
      <QuickStartRecommendation />
      <Vitamins101 />
      <Questions />
      <ExplorMore />
    </div>
  );
};

export default GetStarted;

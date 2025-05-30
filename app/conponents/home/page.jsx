"use client";
import React from "react";
import Product from "./products/Product";
import ShopNow from "./shopNow/ShopNow";
import Advertize from "./advertize/Advertize";
import ValuePack from "./valuepack/Index";
import WellnessExperts from "./wellnessExperts/Index";
import BackedByScience from "./BackedByScience/Index";
import NatureMade from "./natureMade/Index";
import ContactUs from "./contactus/Index";
import NatureMadeVitamins from "./naturemadeVitamins/Index";
import Banner from "./banner/Banner";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Product />
      <ShopNow />
      <Advertize />
      <ValuePack />
      <WellnessExperts />
      <BackedByScience />
      <NatureMade />
      <NatureMadeVitamins />
      <ContactUs />
    </div>
  );
};

export default HomePage;

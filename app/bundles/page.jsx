import React from "react";
import BundlesProducts from "./BundlesProducts/BundlesProducts";
import Advertize from "../conponents/home/advertize/Advertize";
import BundlesDiscountBundling from "./bundlesDiscountBundling/BundlesDiscountBundling";
import ExplorMore from "../get-started/explorMore/ExplorMore";
import SinglePageBanner from "../conponents/singlePageBanner/Index";
import BundelsBenner from "@/public/bundlesBanner/bundlesBanner.webp";

const page = () => {
  const bannerData = {
    bgImage: BundelsBenner,
    heading: "Value Packs",
    subHeading: "Bundle And Save 20%",
    paragraph:
      "Nature Made® value packs bundle products into one convenient shipment at a discount.†",
    shopLink: "#",
    exploreLink: "#",
  };
  return (
    <div>
      <div className="">
        <SinglePageBanner data={bannerData} />
      </div>
      <div className="">
        <BundlesProducts />
      </div>
      <div className="">
        <Advertize />
      </div>
      <div className="">
        <BundlesDiscountBundling />
      </div>
      <div className="">
        <ExplorMore />
      </div>
    </div>
  );
};

export default page;

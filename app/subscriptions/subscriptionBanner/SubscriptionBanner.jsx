"use client";
import { BundlesBannerArray } from "@/app/conponents/dummyData/DummyArray";
import Heading from "@/app/conponents/utilities/Heading";
import Paragraph from "@/app/conponents/utilities/Paragraph";
import SubHeading from "@/app/conponents/utilities/SubHeading";

const SubscriptionBanner = () => {
  const data = BundlesBannerArray[0];

  return (
    <div
      style={
        data.bgImage?.src ? { backgroundImage: `url(${data.bgImage.src})` } : {}
      }
      className="bg-cover bg-center bg-no-repeat py-20"
    >
      <div className="container mx-auto px-4">
        <div className="w-full md:w-3/5 px-4 py-10 bg-white">
          <SubHeading className="!text-left" title={data?.subHeading} />
          <Heading
            className="!text-left !leading-normal"
            title="Make wellness your new routine"
          />
          <Paragraph className="!text-left" title={data?.paragraph} />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;

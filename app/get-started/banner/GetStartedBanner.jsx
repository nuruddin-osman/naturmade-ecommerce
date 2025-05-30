"use client";
import { GetStartedBanner } from "@/app/conponents/dummyData/DummyArray";
import GetStartedBannerImg from "@/public/get-started-page-img/get-sterted-banner.jpg";

const GetStartedBanners = () => {
  const data = GetStartedBanner?.[0] ?? {
    subHeading: "Default Subheading",
    heading: "Default Heading",
    paragraph: "Default paragraph text.",
  };

  return (
    <div
      style={{
        backgroundImage: `url(${GetStartedBannerImg})`,
      }}
      className="bg-cover bg-center bg-no-repeat py-32 bg-[url('/get-started-page-img/get-started-banner-mobile.webp')]"
    >
      <div className="container mx-auto px-4">
        <div className="w-full md:w-3/5 px-4 py-10 bg-white">
          <h4 className="text-xl md:text-2xl font-lato font-medium text-[#121212bf]">
            {data.subHeading}
          </h4>
          <h2 className="text-3xl lg:text-6xl text-[#343438] font-montserrat font-bold w-3/4 lg:max-w-[900px] md:leading-[64px] my-5">
            {data.heading}
          </h2>
          <p className="text-xl md:text-xl font-montserrat font-medium hidden md:block">
            {data.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedBanners;

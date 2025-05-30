import React from "react";
import Image from "next/image";
import Heading from "@/app/conponents/utilities/Heading";
import SubHeading from "@/app/conponents/utilities/SubHeading";
import { SubscriptionCustomarArr } from "@/app/conponents/dummyData/DummyArray";

const SubscriptionCustomar = () => {
  return (
    <div className="bg-[#f5f5f7] py-10">
      <div className="container mx-auto flex md:flex-row flex-col justify-center gap-8 px-3">
        {SubscriptionCustomarArr.map((item) => (
          <div key={item.id} className="w-full md:w-1/4 flex gap-5 md:block">
            <div className="w-2/5 h-auto mx-auto">
              <Image src={item.images} alt="Shop Icon" />
            </div>
            <div className="w-3/5 md:w-auto">
              <Heading className="!text-3xl my-5" title={item.heading} />
              <SubHeading title={item.subHeading} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCustomar;

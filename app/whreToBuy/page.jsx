import React from "react";
import Heading from "../conponents/utilities/Heading";
import Paragraph from "../conponents/utilities/Paragraph";
import Link from "next/link";
import Image from "next/image";
import Amazon from "@/public/companies-logo/amazon.webp";
import { companiesName } from "../conponents/dummyData/DummyArray";

const WhreToBuy = () => {
  return (
    <div className="container mx-auto">
      <Heading className="py-10" title="Where to Buy" />
      <Paragraph
        className="!leading-10"
        title={
          <>
            Find your every day products here on{" "}
            <Link href="/" className="underline hover:no-underline">
              naturemade.com
            </Link>
            . <br /> Or you can purchase our products from any of these
            participating retailers:
          </>
        }
      />
      <div className="flex py-8 gap-y-5 flex-wrap">
        {companiesName?.map((item) => (
          <div key={item.id} className="w-1/4 h-28 overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={item.companyLogo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhreToBuy;

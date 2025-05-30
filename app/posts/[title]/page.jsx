"use client";

import { byBenefitArr } from "@/app/conponents/dummyData/DummyArray";

const SinglePage = ({ params }) => {
  const { title } = params;
  const singleData = byBenefitArr.find(
    (item) => item.title === decodeURIComponent(title)
  );

  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-bold">{singleData.title}</h1>
      </div>
    </>
  );
};

export default SinglePage;

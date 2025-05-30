"use client";

import { useParams } from "next/navigation";
import SinglePageBanner from "@/app/conponents/singlePageBanner/Index";
import { useDispatch, useSelector } from "react-redux";
import { setFetchData } from "@/app/featurs/toggleMenu/menuSlice";
import { useEffect } from "react";
import ProductCard from "@/app/draftFolder/everything/DraftCard";
import Heading from "@/app/conponents/utilities/Heading";
import Advertiese from "../aTOzProperty/Advertiese";
import SinglePageDescription from "../aTOzProperty/SinglePageDescription";
import ExplorMoreProducts from "../aTOzProperty/ExplorMoreProducts";
const SingleCategory = () => {
  const { categories } = useParams();

  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.menuReducers?.fetchData || []);

  useEffect(() => {
    if (fetchData.length === 0) {
      const storedData = localStorage.getItem("aTOzCategory");
      if (storedData) {
        // LocalStorage theke data load kora
        const parsedData = JSON.parse(storedData);
        dispatch(setFetchData(parsedData)); // Redux store e data update kora
      }
    }
  }, [fetchData, dispatch]);

  // Find the category by title
  const category = fetchData.find(
    (cat) =>
      cat.category.toLowerCase() ===
      decodeURIComponent(categories).toLowerCase()
  );
  const findCategory = fetchData.filter((cat) => cat.category === categories);

  if (!category) {
    return <div>Category not found</div>;
  }

  const bannerData = {
    subHeading: category.brand,
    heading: category.category,
    paragraph: category.description,
    bgImage: category.images[0],
    shopLink: "/shop/default",
    exploreLink: "/explore/default",
  };

  const descriptionData = {
    mainHeading: "About " + category.category,
    subHeading: "Learn more about " + category.category,
    data: findCategory.map((item) => ({
      logos: item.thumbnail,
      heading: item.title,
      paragrap: item.description,
      buttonTextMore: "Show More",
      buttonTextLess: "Show Less",
    })),
  };

  return (
    <div>
      {/* Banner Section */}
      <SinglePageBanner data={bannerData} />

      {/* Dynamic Components */}
      <div className="container mx-auto py-10">
        <Heading className="!text-left" title={category.category} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-10">
          {findCategory?.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <div className="">
          <Advertiese advertizeData={findCategory} exploreLink="#" />
        </div>
        <div className="">
          <SinglePageDescription
            data={descriptionData}
            datas={descriptionData.data}
          />
        </div>
        <div className="">
          <ExplorMoreProducts
            customExploreSectionClass=""
            customContainerClass=""
            showExploreSection={false}
            showFilterSection={true}
            filterData={fetchData}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;

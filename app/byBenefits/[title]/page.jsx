"use client";

import { useParams } from "next/navigation";
import SinglePageBanner from "@/app/conponents/singlePageBanner/Index";
import BundlesDiscountBundling from "@/app/bundles/bundlesDiscountBundling/BundlesDiscountBundling";
import { categories } from "../benefitsContent/Categories";
import FilterFunction from "@/app/conponents/filterFuntion/FilterFunction";
import ExplorMore from "@/app/conponents/commonComponets/exploreMore/ExploreMore";
import AdvertizeBeauty from "@/app/conponents/commonComponets/advertize/Advertize";
import DynamicGroppingProduct from "@/app/conponents/commonComponets/groupedProduct/DynamicGroppingProduct";
import SinglePageDescription from "@/app/conponents/commonComponets/singlePageDescription/SinglePageDescription";
// import HomeAdvertize from "@/app/conponents/commonComponets/advertize/HomeAdvertize";

const SingleCategory = () => {
  const params = useParams();
  const { title } = params;

  // Find the category by title
  const category = categories.find(
    (cat) => cat.title === decodeURIComponent(title)
  );

  if (!category) {
    return <div>Category not found</div>;
  }

  // Map component types to actual components
  const componentMap = {
    FilterFunction: FilterFunction,
    // Advertize: HomeAdvertize,
    AdvertizeBeauty: AdvertizeBeauty,
    BundlesDiscountBundling: BundlesDiscountBundling,
    ExplorMore: ExplorMore,
    DynamicGroppingProduct: DynamicGroppingProduct,
    SinglePageDescription: SinglePageDescription,
  };

  return (
    <div>
      {/* Banner Section */}
      <SinglePageBanner data={category.banner} />

      {/* Dynamic Components */}
      <div className="">
        {category.components.map((comp, index) => {
          const Component = componentMap[comp.type];
          return <Component key={index} {...comp.props} />;
        })}
      </div>
    </div>
  );
};

export default SingleCategory;

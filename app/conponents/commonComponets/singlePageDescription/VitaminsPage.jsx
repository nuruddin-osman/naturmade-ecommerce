import SinglePageDescription from "./SinglePageDescription";
import { Vitamins101Array } from "../../dummyData/DummyArray";
import { ThreeBottle } from "@/public/assets/svg/ThreeBotle";

const VitaminsPage = () => {
  return (
    <SinglePageDescription
      data={Vitamins101Array}
      mainHeading="Understanding Discount Bundling for Vitamins"
      subHeading="Get the best deals on our curated vitamin bundles."
      icon={ThreeBottle} // Optional: Pass a custom icon
    />
  );
};

export default VitaminsPage;

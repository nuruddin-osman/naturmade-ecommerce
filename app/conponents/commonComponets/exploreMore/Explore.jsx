import {
  CardForGetStartedPageArray,
  GetStartedExploreArr,
} from "../../dummyData/DummyArray";

import ExplorMore from "./ExploreMore";

const Explore = () => {
  return (
    <ExplorMore
      exploreData={GetStartedExploreArr}
      filterData={CardForGetStartedPageArray}
      showFilterSection={true}
      showExploreSection={false}
      customContainerClass="px-4"
      customExploreSectionClass="px-4"
    />
  );
};

export default Explore;

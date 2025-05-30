// categories.js

import Beauty from "@/public/bybenefitIocn/beauty.svg";
import Bone from "@/public/bybenefitIocn/bone.svg";
import Brain from "@/public/bybenefitIocn/PHA-1853-Brain-(33px).svg";
import Digestion from "@/public/bybenefitIocn/digestion.svg";
import Energy from "@/public/bybenefitIocn/energy.svg";
import Eye from "@/public/bybenefitIocn/eye.svg";
import Sleep from "@/public/bybenefitIocn/sleep.svg";
import Joints from "@/public/bybenefitIocn/joint.svg";
import Kids from "@/public/bybenefitIocn/kids.svg";
import Mood from "@/public/bybenefitIocn/mood.svg";
import MensHealth from "@/public/bybenefitIocn/mens-health.svg";
import Stress from "@/public/bybenefitIocn/stress.svg";
import WomensHealth from "@/public/bybenefitIocn/womens-health.svg";
import Heart from "@/public/bybenefitIocn/heart.svg";
import General from "@/public/bybenefitIocn/general.svg";

import Desktop_BeautyBannerImg from "@/public/bybenefitIocn/PLP-Desktop_Beauty.jpg";
import DesktopHeartBannerImg from "@/public/bybenefitIocn/DesktopHeart.webp";
import DesktopImmuneBannerImg from "@/public/bybenefitIocn/DesktopImmune2024.webp";
import Desktop_BoneBannerImg from "@/public/bybenefitIocn/PLP-Desktop_Bone.jpg";
import Desktop_BrainBannerImg from "@/public/bybenefitIocn/PLP-Desktop_Brain.webp";
import Desktop_DigestionBannerImg from "@/public/bybenefitIocn/PLP-Desktop_Digestion.webp";
import Desktop_EnergyBannerImg from "@/public/bybenefitIocn/PLP-Desktop_Energy.webp";
import Desktop_EyeHealthBannerImg from "@/public/bybenefitIocn/PLP-Desktop_EyeHealth.webp";
import Desktop_GeneralBannerImg from "@/public/bybenefitIocn/PLP-Desktop_General.webp";
import Desktop_JointsBannerImg from "@/public/bybenefitIocn/PLP-Desktop_Joints.jpg";
import Desktop_MensHealthBannerImg from "@/public/bybenefitIocn/PLP-Desktop_MensHealth.jpg";
import Desktop_MoodBannerImg from "@/public/bybenefitIocn/PLP-Desktop_Mood.webp";
import Desktop_SleepBannerImg from "@/public/bybenefitIocn/PLP-Desktop_Sleep.webp";
import Desktop_StressBannerImg from "@/public/bybenefitIocn/PLP-Desktop_Stress.webp";
import Desktop_WomensBannerImg from "@/public/bybenefitIocn/PLP-Desktop_Womens.webp";
import KidsBannerImg from "@/public/bybenefitIocn/kids.png";
import PerentalBannerImg from "@/public/bybenefitIocn/perental.webp";
import SortBy from "@/app/conponents/card/filterCart/filterCartComponents/SortBy";
import PillType from "@/app/conponents/card/filterCart/filterCartComponents/PillType";
import PriceRange from "@/app/conponents/card/filterCart/filterCartComponents/PriceRange";
import Benefits from "@/app/conponents/card/filterCart/filterCartComponents/Benefits";
import {
  adverties,
  CardForGetStartedPageArray,
  GetStartedExploreArr,
  Vitamins101Array,
} from "@/app/conponents/dummyData/DummyArray";
import { ThreeBottle } from "@/public/assets/svg/ThreeBotle";

export const categories = [
  {
    id: 1,
    title: "Beauty",
    byBenifitIcon: Beauty,
    pageCategory: "Beauty",
    banner: {
      subHeading: "Nutrients that support your natural beauty†",
      heading: "Beauty Supplements",
      paragraph:
        "Shine bright from the inside out with nutrients that support healthy hair, skin and nails†",
      bgImage: Desktop_BeautyBannerImg, // Replace with your actual image path
      shopLink: "/shop/beauty",
      exploreLink: "/explore/beauty",
    },
    components: [
      {
        type: "FilterFunction",
        props: {
          filterOptions: [
            { component: <SortBy /> },
            { component: <PillType /> },
            { component: <PriceRange /> },
            { component: <Benefits /> },
          ],
        }, // Props for BundlesProducts component
      },
      {
        type: "DynamicGroppingProduct",
        props: {}, // Props for Advertize component
      },
      {
        type: "SinglePageDescription",
        props: {
          data: Vitamins101Array,
          mainHeading: "Understanding Discount Bundling for Vitamins",
          subHeading: "Get the best deals on our curated vitamin bundles.",
          threeBotlteIcon: false,
        }, // Props for Advertize component
      },
      {
        type: "AdvertizeBeauty",
        props: {
          advertizeData: adverties,
          title: "Related Articles",
          exploreLink: "#",
        }, // Props for Advertize component
      },

      {
        type: "ExplorMore",
        props: {
          exploreData: GetStartedExploreArr,
          filterData: CardForGetStartedPageArray,
          showFilterSection: true,
          showExploreSection: true,
          customContainerClass: "px-4",
          customExploreSectionClass: "px-4",
        }, // Props for ExplorMore component
      },
    ],
  },
  {
    id: 2,
    title: "Bone",
    byBenifitIcon: Bone,
    pageCategory: "Bone",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_BoneBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "FilterFunction",
        props: {
          filterOptions: [
            { component: <SortBy /> },
            { component: <PriceRange /> },
            { component: <Benefits /> },
          ],
        }, // Props for BundlesProducts component
      },
      {
        type: "DynamicGroppingProduct",
        props: {}, // Props for Advertize component
      },
      {
        type: "AdvertizeBeauty",
        props: {
          advertizeData: adverties,
          title: "Related Articles",
          exploreLink: "#",
        }, // Props for Advertize component
      },
      {
        type: "SinglePageDescription",
        props: {
          data: Vitamins101Array,
          mainHeading: "Understanding Discount Bundling for Vitamins",
          subHeading: "Get the best deals on our curated vitamin bundles.",
          threeBotlteIcon: false,
        }, // Props for Advertize component
      },
      {
        type: "ExplorMore",
        props: {
          exploreData: GetStartedExploreArr,
          filterData: CardForGetStartedPageArray,
          showFilterSection: true,
          showExploreSection: true,
          customContainerClass: "px-4",
          customExploreSectionClass: "px-4",
        }, // Props for ExplorMore component
      },
    ],
  },
  {
    id: 3,
    title: "Brain",
    byBenifitIcon: Brain,
    pageCategory: "Brain",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_BrainBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 4,
    title: "Digestion",
    byBenifitIcon: Digestion,
    pageCategory: "Digestion",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_DigestionBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 5,
    title: "Energy",
    byBenifitIcon: Energy,
    pageCategory: "Energy",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_EnergyBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 6,
    title: "Eye-Health",
    byBenifitIcon: Eye,
    pageCategory: "Eye Health",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_EyeHealthBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 7,
    title: "General-Wellness",
    byBenifitIcon: General,
    pageCategory: "General Wellness",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_GeneralBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 8,
    title: "Immune-Health",
    byBenifitIcon: Beauty,
    pageCategory: "Immune Health",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: DesktopImmuneBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 9,
    title: "Joints",
    byBenifitIcon: Joints,
    pageCategory: "Joints",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_JointsBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 10,
    title: "Kids",
    byBenifitIcon: Kids,
    pageCategory: "Kids",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: KidsBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 11,
    title: "Men's-Health",
    byBenifitIcon: MensHealth,
    pageCategory: "Men's Health",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_MensHealthBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 12,
    title: "Mood",
    byBenifitIcon: Mood,
    pageCategory: "Mood",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_MoodBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 13,
    title: "Prenatal-&-Postnatal",
    byBenifitIcon: Bone,
    pageCategory: "Prenatal & Postnatal",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: PerentalBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 14,
    title: "Sleep",
    byBenifitIcon: Sleep,
    pageCategory: "Sleep",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_SleepBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 15,
    title: "Stress",
    byBenifitIcon: Stress,
    pageCategory: "Stress",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_StressBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 16,
    title: "Women's-Health",
    byBenifitIcon: WomensHealth,
    pageCategory: "Women's Health",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: Desktop_WomensBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  {
    id: 17,
    title: "Heart",
    byBenifitIcon: Heart,
    pageCategory: "Heart",
    banner: {
      subHeading: "Health Subheading",
      heading: "Stay Healthy",
      paragraph: "Explore our health products for a better lifestyle.",
      bgImage: DesktopHeartBannerImg, // Replace with your actual image path
      shopLink: "/shop/health",
      exploreLink: "/explore/health",
    },
    components: [
      {
        type: "BundlesDiscountBundling",
        props: {}, // Props for BundlesDiscountBundling component
      },
      {
        type: "Advertize",
        props: {}, // Props for Advertize component
      },
    ],
  },
  // Add more categories as needed
];

import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosHeartEmpty,
} from "react-icons/io";
import { MdOutlineStarHalf } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { CgProductHunt } from "react-icons/cg";
import { IoBatteryDeadOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import Adverties01 from "@/public/image/adverties01.webp";
import Adverties02 from "@/public/image/adverties02.webp";
import Adverties03 from "@/public/image/adverties03.webp";
import Adverties04 from "@/public/image/adverties04.webp";
import Adverties05 from "@/public/image/Adverties05.avif";
import Adverties06 from "@/public/image/Adverties06.webp";
import Adverties07 from "@/public/image/Adverties07.webp";
import General from "@/public/bybenefitIocn/general.svg";
import MensHelth from "@/public/bybenefitIocn/mens-health.svg";
import CapsuleIicon01 from "@/public/get-started-page-img/capsule-icon-1.webp";
import GroupPage from "@/public/get-started-page-img/GroupPage.webp";
import BundlesBanner from "@/public/bundlesBanner/bundlesBanner.webp";
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
import EnergyMax from "@/public/image/energy-max.webp";
import ShopIcon from "@/public/assets/Subscription-page/Shop-Icon.svg";
import ScheduleIcon from "@/public/assets/Subscription-page/Schedule-Icon.svg";
import SaveIcon from "@/public/assets/Subscription-page/Save-Icon.svg";
import ChangeMySubscriprion from "@/app/subscriptions/questionDirection/ChangeMySubscriprion";
import ChangeOrderDate from "@/app/subscriptions/questionDirection/ChangeOrderDate";
import CancelMySubscription from "@/app/subscriptions/questionDirection/CancelMySubscription";
import UpdateMyShipping from "@/app/subscriptions/questionDirection/UpdateMyShipping";

export const productFilterMenu = [
  { id: "01", title: "The Daily 4" },
  { id: "02", title: "New" },
  { id: "03", title: "Best Sellers" },
  { id: "04", title: "Value Packs" },
  { id: "05", title: "Wellblends" },
];

export const menuItems = [
  { label: "Products", category: "products" },
  { label: "Find vitamins for me", category: "findVitamins" },
  { label: "Tips & Resources", category: "tipsResources" },
  { label: "About", category: "about" },
];

export const productsArray = [
  // wellblends wellblends wellblends wellblends
  {
    id: 1,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "wellblends",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
  },
  {
    id: 2,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "wellblends",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
  },
  {
    id: 3,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "wellblends",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "Online only",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
  },
  // new new new new new new
  {
    id: 4,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "new",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Wellblends™ Immune & Superfood™ Gummies",
  },
  {
    id: 5,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "new",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "High Absorption Magnesium Glycinate Capsules 200 mg",
  },
  {
    id: 6,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "new",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Choline Extra Strength Dosage 800 Mg Per 3 Capsules",
  },
  {
    id: 18,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "new",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Choline Extra Strength Dosage 800 Mg Per 3 Capsules",
  },
  {
    id: 19,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "new",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Wellblends™ Immune & Superfood™ Gummies",
  },
  {
    id: 20,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "new",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "High Absorption Magnesium Glycinate Capsules 200 mg",
  },
  {
    id: 21,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "new",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Choline Extra Strength Dosage 800 Mg Per 3 Capsules",
  },
  {
    id: 22,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "new",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "High Absorption Magnesium Glycinate Capsules 200 mg",
  },
  {
    id: 23,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "new",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Choline Extra Strength Dosage 800 Mg Per 3 Capsules",
  },
  // best_seller best_seller best_seller
  {
    id: 7,
    favorites: <IoIosHeartEmpty />,
    nameBase: "slip longer",
    nameSubtruc: "",
    productTitle: "WELLBLENDS™",
    cetagory: "best_seller",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "best seller",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "High Absorption Magnesium Glycinate Capsules 200 mg",
  },
  {
    id: 8,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "best_seller",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "best seller",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Men's Multivitamin 50+ Tablets",
  },
  {
    id: 9,
    favorites: <IoIosHeartEmpty />,
    nameBase: "slip longer",
    nameSubtruc: "",
    productTitle: "WELLBLENDS™",
    cetagory: "sold_out",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "sold out",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Women's Multivitamin 50+ Softgels",
  },
  {
    id: 10,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "best_seller",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "best seller",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Vitamin D3 2000 IU (50 mcg) Softgels",
  },
  {
    id: 11,
    favorites: <IoIosHeartEmpty />,
    nameBase: "slip longer",
    nameSubtruc: "",
    productTitle: "WELLBLENDS™",
    cetagory: "best_seller",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "best seller",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "High Absorption Magnesium Glycinate Capsules 200 mg",
  },
  {
    id: 12,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "sold_out",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "sold out",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Men's Multivitamin 50+ Tablets",
  },
  {
    id: 13,
    favorites: <IoIosHeartEmpty />,
    nameBase: "slip longer",
    nameSubtruc: "",
    productTitle: "WELLBLENDS™",
    cetagory: "best_seller",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "best seller",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "High Absorption Magnesium Glycinate Capsules 200 mg",
  },
  {
    id: 14,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "best_seller",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "best seller",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
    description: "Men's Multivitamin 50+ Tablets",
  },

  // value_pack value_pack value_pack
  {
    id: 15,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "value_pack",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "value_pack",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
  },
  {
    id: 16,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "value_pack",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "value_pack",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
  },

  // the_daily_4 the_daily_4 the_daily_4 the_daily_4
  {
    id: 17,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "the_daily_4",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    stockType: "the_daily_4",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: EnergyMax,
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
  },
];

export const adverties = [
  {
    id: 1,
    heading: "What Vitamins Should I Take?",
    description:
      "Our guide helps you understand the essential nutrients your body needs and find the right supplements to support your health goals. From multivitamins to targeted minerals, we've got you covered.",
    btnText: "contineu reading",
    image: Adverties01,
  },
  {
    id: 2,
    heading: "Your Daily Dose of Wellness: Introducing The Daily 4™",
    description: "products",
    btnText: "contineu reading",
    image: Adverties02,
  },
  {
    id: 3,
    heading: "5 Key Immune Support Vitamins and Minerals You May Be Missing",
    description: "products",
    btnText: "contineu reading",
    image: Adverties03,
  },
  {
    id: 4,
    heading: "Magnesium for Muscles: How It Supports Muscle Health",
    description: "products",
    btnText: "contineu reading",
    image: Adverties04,
  },
  {
    id: 5,
    heading: "Magnesium for Muscles: How It Supports Muscle Health",
    description: "products",
    btnText: "contineu reading",
    image: Adverties05,
  },
  {
    id: 6,
    heading: "Magnesium for Muscles: How It Supports Muscle Health",
    description: "products",
    btnText: "contineu reading",
    image: Adverties06,
  },
  {
    id: 7,
    heading: "Magnesium for Muscles: How It Supports Muscle Health",
    description: "products",
    btnText: "contineu reading",
    image: Adverties07,
  },
];

export const companiesLogoAndService = [
  {
    id: 1,
    logo: "/companies-logo/partnership-cplmpanies-logo01.webp",
    title: "products",
    servicesImg: "/companies-logo/services-image01.webp",
    serviceBtn: "our exparties",
  },
  {
    id: 2,
    logo: "/companies-logo/partnership-cplmpanies-logo02.webp",
    title: "products",
    servicesImg: "/companies-logo/services-image02.webp",
    serviceBtn: "Our brands",
  },
  {
    id: 3,
    logo: "/companies-logo/partnership-cplmpanies-logo03.webp",
    title: "products",
    servicesImg: "/companies-logo/services-image03.webp",
    serviceBtn: "our histoey",
  },
  {
    id: 4,
    logo: "/companies-logo/partnership-cplmpanies-logo02.webp",
    title: "products",
    servicesImg: "/companies-logo/services-image03.webp",
    serviceBtn: "our exparties",
  },
  {
    id: 5,
    logo: "/companies-logo/partnership-cplmpanies-logo03.webp",
    title: "products",
    servicesImg: "/companies-logo/services-image03.webp",
    serviceBtn: "our exparties",
  },
];
export const backedByScience = [
  {
    id: 1,
    image: "/BackedByScience/BackedByScience01.webp",
    linkTitle: "magnesium",
    cetagory: "magnesium",
  },
  {
    id: 2,
    image: "/BackedByScience/BackedByScience02.webp",
    linkTitle: "b vitamins",
    cetagory: "b vitamins",
  },
  {
    id: 3,
    image: "/BackedByScience/BackedByScience03.webp",
    linkTitle: "d vitamins",
    cetagory: "d vitamins",
  },
  {
    id: 4,
    image: "/BackedByScience/BackedByScience04.webp",
    linkTitle: "multivitamins",
    cetagory: "multivitamins",
  },
];
export const searchInputValue = [
  {
    id: 1,
    title: "Start a Regimen",
  },
  {
    id: 2,
    title: "Coupons",
  },
  {
    id: 3,
    title: "Where to Start",
  },
  {
    id: 4,
    title: "Men's Health",
  },
  {
    id: 5,
    title: "Women’s Health",
  },
  {
    id: 6,
    title: "What Should I Take?",
  },
  {
    id: 7,
    title: "Gummies",
  },
  {
    id: 8,
    title: "Multivitamins",
  },
  {
    id: 9,
    title: "Best Sellers",
  },
];
export const productItemcetagory = [
  {
    id: 1,
    title: "a - z",
    forwardAwwos: <IoIosArrowForward />,
    category: "a - z",
  },
  {
    id: 2,
    title: "by benefit",
    forwardAwwos: <IoIosArrowForward />,
    category: "by benefit",
  },
  {
    id: 3,
    title: "gummies",
    forwardAwwos: <IoIosArrowForward />,
    category: "gummies",
  },
  {
    id: 4,
    title: "best seller",
    forwardAwwos: false,
    category: "best seller",
  },
  {
    id: 5,
    title: "new product",
    forwardAwwos: false,
    category: "new product",
  },
  {
    id: 6,
    title: "bunlde & save",
    forwardAwwos: false,
    category: "bunlde & save",
  },
  {
    id: 7,
    title: "subscribe & save",
    forwardAwwos: false,
    category: "subscribe & save",
  },
  {
    id: 8,
    title: "view all",
    forwardAwwos: false,
    category: "view all",
  },
];
export const byBenefitArr = [
  {
    id: 1,
    title: "Beauty",
    byBenifitIcon: Beauty,
    category: "Beauty",
  },
  {
    id: 2,
    title: "Bone",
    byBenifitIcon: Bone,
    category: "Bone",
  },
  {
    id: 3,
    title: "Brain",
    byBenifitIcon: Brain,
    category: "Brain",
  },
  {
    id: 4,
    title: "Digestion",
    byBenifitIcon: Digestion,
    category: "Digestion",
  },
  {
    id: 5,
    title: "Energy",
    byBenifitIcon: Energy,
    category: "Energy",
  },
  {
    id: 6,
    title: "Eye Health",
    byBenifitIcon: Eye,
    category: "Eye Health",
  },
  {
    id: 7,
    title: "General Wellness",
    byBenifitIcon: General,
    category: "General Wellness",
  },
  {
    id: 8,
    title: "Immune Health",
    byBenifitIcon: Beauty,
    category: "Immune Health",
  },
  {
    id: 9,
    title: "Joints",
    byBenifitIcon: Joints,
    category: "Joints",
  },
  {
    id: 10,
    title: "Kids",
    byBenifitIcon: Kids,
    category: "Kids",
  },
  {
    id: 11,
    title: "Men's Health",
    byBenifitIcon: MensHealth,
    category: "Men's Health",
  },
  {
    id: 12,
    title: "Mood",
    byBenifitIcon: Mood,
    category: "Mood",
  },
  {
    id: 13,
    title: "Prenatal & Postnatal",
    byBenifitIcon: Beauty,
    category: "Prenatal & Postnatal",
  },
  {
    id: 14,
    title: "Sleep",
    byBenifitIcon: Sleep,
    category: "Sleep",
  },
  {
    id: 15,
    title: "Stress",
    byBenifitIcon: Stress,
    category: "Stress",
  },
  {
    id: 16,
    title: "Women's Health",
    byBenifitIcon: WomensHealth,
    category: "Women's Health",
  },
  {
    id: 16,
    title: "Heart",
    byBenifitIcon: Heart,
    category: "Heart",
  },
];
export const GetStartedBanner = [
  {
    id: 1,
    subHeading: "Your journey begins here",
    heading: "What Do I Need?",
    paragraph: "Not sure which supplements to take? We’re here to help.",
    bgImage: "/get-started-page-img/get-sterted-banner.jpg",
    bgImageMobile: "/get-started-page-img/get-started-banner-mobile.webp",
  },
];
export const BundlesBannerArray = [
  {
    id: 1,
    subHeading: "Bundle And Save 20%",
    heading: "Value Packs",
    paragraph:
      "Nature Made® value packs bundle products into one convenient shipment at a discount.†",
    bgImage: BundlesBanner,
    bgImageMobile: "/get-started-page-img/get-started-banner-mobile.webp",
  },
];
export const HowToGetStartedArray = [
  {
    id: 1,
    subHeading:
      "Browse some common health needs to see which ones may apply to you.",
    heading: "Quick Start Recommendations",
    buttonText: "Get Started",
    logos: "/get-started-page-img/bottolTablet01.webp",
  },
  {
    id: 2,
    subHeading: "Learn more about dietary supplements and their benefits.",
    heading: "Vitamins 101",
    buttonText: "Explore More",
    logos: "/get-started-page-img/ShapeFlag01.webp",
  },
  {
    id: 3,
    subHeading:
      "Take the guesswork out of wellness with a regimen chosen by our experts.",
    heading: "Your Daily 4",
    buttonText: "start today",
    logos: "/get-started-page-img/callenderLogo01.svg",
  },
];
export const Vitamins101Array = [
  {
    id: 1,
    heading: "Why should I take vitamins?",
    paragrap:
      "We get it, life gets busy. We might not always stop to think about our wellness. How can we ensure we’re getting enough of the essential nutrients we need from our food? What if sometimes our wellbeing needs a little extra support? Supplementing with vitamins, minerals and other nutrients can help support your nutritional needs so that you can focus on everything else.†",
    buttonTextLess: "SHOW LESS",
    buttonTextMore: "SHOW MORE",
    logos: General,
    // logos: "/bybenefitIocn/general.svg",
  },
  {
    id: 2,
    heading: "How do vitamins & supplements support my wellness?",
    paragrap:
      "Many vitamins and minerals are considered essential, meaning you need to consume them (from food) every day. Why? Every system in your body, from your immune system and nervous system to your heart, muscles, and bones, relies on essential nutrients to function properly. Yet many adults are not getting the recommended amounts of these essential nutrients from food alone.[1] This is where dietary supplements come in. They help provide these nutrients (like Vitamins C and D, B Vitamins, Magnesium, and Zinc) so that you can help close nutrient gaps that may exist in your diet.†",
    buttonTextLess: "SHOW LESS",
    buttonTextMore: "SHOW MORE",
    logos: CapsuleIicon01,
    // logos: "/get-started-page-img/capsule-icon-1.webp",
  },
  {
    id: 3,
    heading: "Where do I begin?",
    paragrap:
      "While many of us might benefit from dietary supplements, we all have different needs and at different times. Nature Made®️ has you covered with vitamins and supplements for everyone at every life stage. Whether it's multivitamins for daily nutritional support, nutrients that support your bone, muscle, heart and immune health, or ingredients that support your mood, stress and occasional sleep needs. And you can choose between tablets, softgels, capsules, tasty chewables and delicious gummies. No matter your choice, it's easy to switch up your routine as your needs change.†",
    buttonTextLess: "SHOW LESS",
    buttonTextMore: "SHOW MORE",
    logos: GroupPage,
    // logos: "/get-started-page-img/GroupPage.webp",
  },
];
export const GetStartedQuestionArr = [
  {
    id: 1,
    category: "get-started",
    heading: "What vitamins and supplements should I take?",
    article:
      "The best way to support your daily nutrition is to eat a well-balanced diet that consists of fruit, vegetables, whole grains, healthy fats and lean meats. This is your go-to for the vitamins, minerals and nutrients your body needs every day. However, we know that in today’s busy world, that’s not always possible. Dietary supplements, such as multivitamins, are designed to help support your daily nutrition and provide the nutrients your body needs to function at its best. You should first consult with your healthcare provider before adding any dietary supplement to your routine.†",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 2,
    category: "get-started",
    heading:
      "Are Nature Made Gummies gluten free? Do they use artificial colors and/or flavors? What about their sugar content?",
    article:
      "Most Nature Made Adult Gummies are gluten free and only use natural flavors and colors derived from natural sources (no synthetic dyes). Our gummies contain approximately 1–3 grams of sugar and 5–15 calories per gummy. When consumed as part of a healthy diet, this amount should not be a concern. Please refer to the label for your product's calorie and sugar content. If you are sensitive to sugar, please check with a healthcare professional about incorporating gummies into your daily plan.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 3,
    category: "get-started",
    heading: "What do multivitamins help with?",
    article:
      "Multivitamins help fill potential nutrient gaps from your diet by providing daily nutritional support.†",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 4,
    category: "get-started",
    heading: "How do I know if I need to supplement with vitamin D?",
    article:
      "Your personal healthcare professional can order a simple blood test to check your vitamin D levels. You may be at risk if you: • Experience less than 15-30 minutes of full body exposure sunlight between 10 a.m. and 3 p.m. • Wear sunscreen. • Have a darker hue of skin color. • Are over 65 years of age. • Spend most of your time indoors. • Live in a region with a long winter season. • Are overweight or obese.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 5,
    category: "get-started",
    heading: "What does fish oil do for the body?",
    article:
      "Fish Oil contains the Omega-3 Fatty Acids Eicosapentaenoic Acid (EPA) and Docosahexaenoic Acid (DHA) that help support heart health, brain health and eye health. However, the body does not make EPA and DHA on its own, so it is best to get these nutrients from food sources.[2] Since not everyone regularly consumes fatty fish, an Omega-3†† from fish oil supplement can provide the body with Omega-3s.[1]†",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 6,
    category: "get-started",
    heading: "Should I take a magnesium supplement?",
    article:
      "If your diet is lacking in magnesium-rich foods, a magnesium supplement may be a good choice to ensure your magnesium needs are met. Some people need magnesium supplements due to certain medications or health conditions. Talk to your healthcare professional to determine if a magnesium supplement fits into your supplement regimen.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 7,
    category: "get-started",
    heading: "Why should I start a subscription?",
    article:
      "It's Easy & Flexible Set it and forget it. You can change, pause, and cancel anytime. Membership Exclusive Get 10% discount on every order plus free shipping**. Learn More **When you purchase one or more products on subscription, you will automatically get free shipping on this and all future deliveries. Offer excludes tax and is subject to change. Orders outside of the contiguous US, including Alaska & Hawaii will be charged $8 for shipping.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 8,
    category: "subscriptions",
    heading: "How do I change my subscription order frequency?",
    article: <ChangeMySubscriprion />,
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 9,
    category: "subscriptions",
    heading: "How do I change my next order date?",
    article: <ChangeOrderDate />,
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 10,
    category: "subscriptions",
    heading: "How do I cancel my subscription?",
    article: <CancelMySubscription />,
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 11,
    category: "subscriptions",
    heading: "How do I update my shipping address?",
    article: <UpdateMyShipping />,
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 12,
    category: "subscriptions",
    heading: "What does fish oil do for the body?",
    article:
      "Fish Oil contains the Omega-3 Fatty Acids Eicosapentaenoic Acid (EPA) and Docosahexaenoic Acid (DHA) that help support heart health, brain health and eye health. However, the body does not make EPA and DHA on its own, so it is best to get these nutrients from food sources.[2] Since not everyone regularly consumes fatty fish, an Omega-3†† from fish oil supplement can provide the body with Omega-3s.[1]†",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 13,
    category: "subscriptions",
    heading: "Should I take a magnesium supplement?",
    article:
      "If your diet is lacking in magnesium-rich foods, a magnesium supplement may be a good choice to ensure your magnesium needs are met. Some people need magnesium supplements due to certain medications or health conditions. Talk to your healthcare professional to determine if a magnesium supplement fits into your supplement regimen.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 14,
    category: "subscriptions",
    heading: "Why should I start a subscription?",
    article:
      "It's Easy & Flexible Set it and forget it. You can change, pause, and cancel anytime. Membership Exclusive Get 10% discount on every order plus free shipping**. Learn More **When you purchase one or more products on subscription, you will automatically get free shipping on this and all future deliveries. Offer excludes tax and is subject to change. Orders outside of the contiguous US, including Alaska & Hawaii will be charged $8 for shipping.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 15,
    category: "subscriptions",
    heading: "What vitamins and supplements should I take?",
    article:
      "The best way to support your daily nutrition is to eat a well-balanced diet that consists of fruit, vegetables, whole grains, healthy fats and lean meats. This is your go-to for the vitamins, minerals and nutrients your body needs every day. However, we know that in today’s busy world, that’s not always possible. Dietary supplements, such as multivitamins, are designed to help support your daily nutrition and provide the nutrients your body needs to function at its best. You should first consult with your healthcare provider before adding any dietary supplement to your routine.†",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 16,
    category: "subscriptions",
    heading:
      "Are Nature Made Gummies gluten free? Do they use artificial colors and/or flavors? What about their sugar content?",
    article:
      "Most Nature Made Adult Gummies are gluten free and only use natural flavors and colors derived from natural sources (no synthetic dyes). Our gummies contain approximately 1–3 grams of sugar and 5–15 calories per gummy. When consumed as part of a healthy diet, this amount should not be a concern. Please refer to the label for your product's calorie and sugar content. If you are sensitive to sugar, please check with a healthcare professional about incorporating gummies into your daily plan.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 17,
    category: "subscriptions",
    heading: "What do multivitamins help with?",
    article:
      "Multivitamins help fill potential nutrient gaps from your diet by providing daily nutritional support.†",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 18,
    category: "subscriptions",
    heading: "How do I know if I need to supplement with vitamin D?",
    article:
      "Your personal healthcare professional can order a simple blood test to check your vitamin D levels. You may be at risk if you: • Experience less than 15-30 minutes of full body exposure sunlight between 10 a.m. and 3 p.m. • Wear sunscreen. • Have a darker hue of skin color. • Are over 65 years of age. • Spend most of your time indoors. • Live in a region with a long winter season. • Are overweight or obese.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 19,
    category: "subscriptions",
    heading: "What does fish oil do for the body?",
    article:
      "Fish Oil contains the Omega-3 Fatty Acids Eicosapentaenoic Acid (EPA) and Docosahexaenoic Acid (DHA) that help support heart health, brain health and eye health. However, the body does not make EPA and DHA on its own, so it is best to get these nutrients from food sources.[2] Since not everyone regularly consumes fatty fish, an Omega-3†† from fish oil supplement can provide the body with Omega-3s.[1]†",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 20,
    category: "subscriptions",
    heading: "Should I take a magnesium supplement?",
    article:
      "If your diet is lacking in magnesium-rich foods, a magnesium supplement may be a good choice to ensure your magnesium needs are met. Some people need magnesium supplements due to certain medications or health conditions. Talk to your healthcare professional to determine if a magnesium supplement fits into your supplement regimen.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 21,
    category: "subscriptions",
    heading: "Why should I start a subscription?",
    article:
      "It's Easy & Flexible Set it and forget it. You can change, pause, and cancel anytime. Membership Exclusive Get 10% discount on every order plus free shipping**. Learn More **When you purchase one or more products on subscription, you will automatically get free shipping on this and all future deliveries. Offer excludes tax and is subject to change. Orders outside of the contiguous US, including Alaska & Hawaii will be charged $8 for shipping.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
];
export const CardForGetStartedPageArray = [
  {
    id: 1,
    favorites: "",
    baseName: "Energy",
    nameSubtruc: "",
    productTitle: "",
    cetagory: "collections",
    review: "",
    reviewPerson: "",
    isNew: "",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: "/image/energy-max.webp",
    productType: "",
    productIconGen: General,
    productIconVit: MensHelth,
    doseType: "3-in-1 Blend",
    doseIcon: "",
    price: "",
    buyBtn: "Shop now",
  },
  {
    id: 2,
    favorites: "",
    baseName: "Energy",
    nameSubtruc: "",
    productTitle: "",
    cetagory: "collections",
    review: "",
    reviewPerson: "",
    isNew: "",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: "/image/energy-max.webp",
    productType: "",
    productIconGen: General,
    productIconVit: MensHelth,
    doseType: "3-in-1 Blend",
    doseIcon: "",
    price: "",
    buyBtn: "Shop now",
  },
  {
    id: 3,
    favorites: "",
    baseName: "Energy",
    nameSubtruc: "",
    productTitle: "",
    cetagory: "collections",
    review: "",
    reviewPerson: "",
    isNew: "",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: "/image/energy-max.webp",
    productType: "",
    productIconGen: General,
    productIconVit: MensHelth,
    doseType: "3-in-1 Blend",
    doseIcon: "",
    price: "",
    buyBtn: "Shop now",
    mensMultivitamins: "multivitamins",
  },

  {
    id: 4,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "You may also like",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: "/image/energy-max.webp",
    productType: "gummies",
    productIconGen: General,
    productIconVit: MensHelth,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
  },

  {
    id: 5,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "You may also like",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: "/image/energy-max.webp",
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
  },
  {
    id: 6,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "You may also like",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: "/image/energy-max.webp",
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
  },
  {
    id: 7,
    favorites: <IoIosHeartEmpty />,
    nameBase: "Energy",
    nameSubtruc: "MAX™",
    productTitle: "WELLBLENDS™",
    cetagory: "You may also like",
    review: "★★★★☆",
    reviewPerson: 59,
    isNew: "new",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: "/image/energy-max.webp",
    productType: "gummies",
    productIcon: <CgProductHunt />,
    doseType: "3-in-1 Blend",
    doseIcon: <IoBatteryDeadOutline />,
    price: "99",
    buyBtn: "buy now",
  },
  {
    id: 8,
    favorites: "",
    baseName: "Energy",
    nameSubtruc: "",
    productTitle: "",
    cetagory: "collections",
    review: "",
    reviewPerson: "",
    isNew: "",
    onlineAvilable: "Online Avilable",
    discount: "30%",
    bestSeller: "Best Seller",
    image: "/image/energy-max.webp",
    productType: "",
    productIconGen: General,
    productIconVit: MensHelth,
    doseType: "3-in-1 Blend",
    doseIcon: "",
    price: "",
    buyBtn: "Shop now",
  },
];
export const GetStartedExploreArr = [
  {
    id: 1,
    heading: "What Vitamins Should I Take?",
    article:
      "If you’re asking, what vitamins should I take daily? Don’t worry, Nature Made® is here to help! There are 13 essential vitamins that your body needs every day to function at its best: vitamins A, C, D, E, K and the eight B vitamins (including Folic Acid, Biotin, B6 and B12). What does a vitamin do? Along with other essential nutrients, vitamins play an important role in many bodily functions. Vitamins need to be consumed from food; however, it can be difficult to consume enough from your diet alone. That’s where supplements come in—they can help support your daily nutritional needs.†",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 2,
    heading: "What Supplements Should I Take?",
    article:
      "There is more to daily nutrition than just vitamins. There are many different minerals and nutrients that also help support your health and wellbeing. Essential minerals, such as Magnesium, Calcium and Iron, are needed by your body for a variety of functions. Nutrients like Choline and CoQ10 are important for your brain health and heart health, respectively. You can search here on our website by benefit to find the nutrients to help support your specific needs.†",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
  {
    id: 3,
    heading: "Nature Made Vitamins and Supplements",
    article:
      "Nature Made® has been a lead innovator of science-backed wellness solutions for over fifty years. That’s what makes us the #1 Pharmacist Recommended Vitamin and Supplement Brand.* As always, be sure to first check with your healthcare provider before adding any new vitamin or supplement to your daily routine.",
    upArrow: <IoIosArrowUp />,
    downArrow: <IoIosArrowDown />,
  },
];
export const FilterCartSortByArray = [
  {
    id: 1,
    heading: "featured",
    category: "featured",
  },
  {
    id: 2,
    heading: "a to z",
    category: "atoz",
  },
  {
    id: 3,
    heading: "z to a",
    category: "ztoa",
  },
  {
    id: 4,
    heading: "price (asc)",
    category: "price-asc",
  },
  {
    id: 5,
    heading: "price (desc)",
    category: "price-desc",
  },
];
export const FilterCartSortPriceRange = [
  {
    id: 1,
    heading: "10$-25$",
    category: "10to25",
  },
  {
    id: 2,
    heading: "26%-50$",
    category: "26to50",
  },
  {
    id: 3,
    heading: "51$-75$",
    category: "51to75",
  },
];
export const FilterCartSortRating = [
  {
    id: 1,
    ratingLavel: (
      <>
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <MdOutlineStarHalf />
      </>
    ),
    category: "4.5star",
  },
  {
    id: 2,
    rates: <IoStar />,
    ratingLavel: (
      <>
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
      </>
    ),
    category: "4star",
  },
  {
    id: 3,
    rates: (
      <>
        <IoStar />
        <IoStar />
      </>
    ),
    ratingLavel: (
      <>
        <IoStar />
        <IoStar />
        <IoStar />
      </>
    ),
    category: "3star",
  },
  {
    id: 4,
    rates: (
      <>
        <IoStar />
        <IoStar />
        <IoStar />
      </>
    ),
    ratingLavel: (
      <>
        <IoStar />
        <IoStar />
      </>
    ),
    category: "2star",
  },
  {
    id: 5,
    rates: (
      <>
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
      </>
    ),
    ratingLavel: <IoStar />,
    category: "1star",
  },
];
export const ABCwaysCategory = [
  {
    id: 1,
    title: "a",
    category: "a",
    details: [
      {
        subId: 101,
        subTitle: "Acidophilus",
      },
      {
        subId: 102,
        subTitle: "Adult Gummies",
      },
      {
        subId: 103,
        subTitle: "Advanced Multis",
      },
      {
        subId: 104,
        subTitle: "Ashwagandha",
      },
    ],
  },
  {
    id: 2,
    title: "b",
    category: "b",
    details: [
      {
        subId: 101,
        subTitle: "B Vitamins",
      },
      {
        subId: 102,
        subTitle: "B Complex",
      },
      {
        subId: 103,
        subTitle: "Berberine Phytosome",
      },
      {
        subId: 104,
        subTitle: "Biotin",
      },
      {
        subId: 104,
        subTitle: "Bundles",
      },
    ],
  },
  {
    id: 3,
    title: "c",
    category: "c",
    details: [
      {
        subId: 101,
        subTitle: "C Vitamins",
      },
      {
        subId: 102,
        subTitle: "Calcium",
      },
      {
        subId: 103,
        subTitle: "CholestOff",
      },
      {
        subId: 104,
        subTitle: "Choline",
      },
      {
        subId: 105,
        subTitle: "Collagen",
      },
      {
        subId: 106,
        subTitle: "CoQ10",
      },
      {
        subId: 107,
        subTitle: "Cranberry",
      },
    ],
  },
  {
    id: 4,
    title: "d",
    category: "d",
    details: [
      {
        subId: 101,
        subTitle: "D Vitamins",
      },
      {
        subId: 102,
        subTitle: "Diabetes Health Pack",
      },
    ],
  },
  {
    id: 5,
    title: "e",
    category: "e",
    details: [
      {
        subId: 101,
        subTitle: "E Vitamins",
      },
      {
        subId: 102,
        subTitle: "Elderberry",
      },
    ],
  },
  {
    id: 6,
    title: "f",
    category: "f",
    details: [
      {
        subId: 101,
        subTitle: "Fiber",
      },
      {
        subId: 102,
        subTitle: "Fish Oil & Omega 3",
      },
      {
        subId: 103,
        subTitle: "Flaxseed Oil",
      },
      {
        subId: 104,
        subTitle: "Folic Acid",
      },
    ],
  },
  {
    id: 7,
    title: "g",
    category: "g",
    details: [
      {
        subId: 101,
        subTitle: "Ginseng",
      },
      {
        subId: 102,
        subTitle: "Glucosamine",
      },
    ],
  },
  {
    id: 8,
    title: "h",
    category: "h",
    details: [
      {
        subId: 101,
        subTitle: "5-HTP",
      },
      {
        subId: 102,
        subTitle: "Hair, Skin & Nails",
      },
      {
        subId: 103,
        subTitle: "Herbs",
      },
    ],
  },
  {
    id: 9,
    title: "i",
    category: "i",
    details: [
      {
        subId: 101,
        subTitle: "Iron",
      },
    ],
  },
  // {
  //   id: 10,
  //   title: "",
  //   category: "j",
  //   details: [
  //     {
  //       subId: 101,
  //       subTitle: "",
  //     },
  //     {
  //       subId: 102,
  //       subTitle: "",
  //     },
  //     {
  //       subId: 103,
  //       subTitle: "",
  //     },
  //     {
  //       subId: 104,
  //       subTitle: "",
  //     },
  //   ],
  // },
  {
    id: 11,
    title: "k",
    category: "k",
    details: [
      {
        subId: 101,
        subTitle: "K Vitamins",
      },
      {
        subId: 102,
        subTitle: "Kids First Gummies",
      },
      {
        subId: 103,
        subTitle: "Kids' Multivitamins",
      },
    ],
  },
  {
    id: 12,
    title: "l",
    category: "l",
    details: [
      {
        subId: 101,
        subTitle: "L-Lysine",
      },
      {
        subId: 102,
        subTitle: "L-Theanine",
      },
      {
        subId: 103,
        subTitle: "Lutein",
      },
    ],
  },
  {
    id: 13,
    title: "m",
    category: "m",
    details: [
      {
        subId: 101,
        subTitle: "Magnesium",
      },
      {
        subId: 102,
        subTitle: "Melatonin",
      },
      {
        subId: 103,
        subTitle: "Men's Multivitamins",
      },
      {
        subId: 104,
        subTitle: "Minerals",
      },
      {
        subId: 105,
        subTitle: "Multi + Omega 3",
      },
      {
        subId: 106,
        subTitle: "Multivitamins",
      },
      {
        subId: 107,
        subTitle: "Multivitamins, Advanced",
      },
    ],
  },
  // {
  //   id: 14,
  //   title: "",
  //   category: "n",
  //   details: [
  //     {
  //       subId: 101,
  //       subTitle: "",
  //     },
  //   ],
  // },
  {
    id: 15,
    title: "o",
    category: "o",
    details: [
      {
        subId: 101,
        subTitle: "Omega-3 Supplements",
      },
      {
        subId: 102,
        subTitle: "Omega 3-6-9",
      },
    ],
  },
  {
    id: 16,
    title: "p",
    category: "p",
    details: [
      {
        subId: 101,
        subTitle: "Potassium",
      },
      {
        subId: 102,
        subTitle: "Prebiotics",
      },
      {
        subId: 103,
        subTitle: "Prenatal & Postnatal Multivitamins",
      },
      {
        subId: 104,
        subTitle: "Probiotics",
      },
    ],
  },
  {
    id: 17,
    title: "s",
    category: "s",
    details: [
      {
        subId: 101,
        subTitle: "SAM-e",
      },
      {
        subId: 102,
        subTitle: "Supplements",
      },
    ],
  },
  {
    id: 18,
    title: "t",
    category: "t",
    details: [
      {
        subId: 101,
        subTitle: "Triple Flex",
      },
      {
        subId: 102,
        subTitle: "Triple Omega",
      },
      {
        subId: 103,
        subTitle: "Turmeric Curcumin",
      },
    ],
  },
  {
    id: 19,
    title: "v",
    category: "v",
    details: [
      {
        subId: 101,
        subTitle: "Valerian Root",
      },
      {
        subId: 102,
        subTitle: "Vitamin B",
      },
      {
        subId: 103,
        subTitle: "Vitamin C",
      },
      {
        subId: 104,
        subTitle: "Vitamin D",
      },
      {
        subId: 105,
        subTitle: "Vitamin E",
      },
      {
        subId: 106,
        subTitle: "Vitamin K",
      },
    ],
  },
  {
    id: 20,
    title: "w",
    category: "w",
    details: [
      {
        subId: 101,
        subTitle: "Wellblends",
      },
      {
        subId: 102,
        subTitle: "Women's Multivitamins",
      },
    ],
  },
  {
    id: 21,
    title: "z",
    category: "z",
    details: [
      {
        subId: 101,
        subTitle: "Zero Sugar Gummies",
      },
      {
        subId: 102,
        subTitle: "Zinc",
      },
    ],
  },
];
export const SubscriptionCustomarArr = [
  {
    id: 1,
    heading: "Shop",
    images: ShopIcon,
    subHeading:
      "Choose the Nature Made® supplements that support your wellness goals",
  },
  {
    id: 2,
    heading: "Subscribe",
    images: ScheduleIcon,
    subHeading: "Select “Subscribe & Save” and set your preferred schedule",
  },
  {
    id: 3,
    heading: "Save",
    images: SaveIcon,
    subHeading: "Enjoy 10% off & FREE shipping!**",
  },
];

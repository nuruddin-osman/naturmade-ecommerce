"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import GallaryCard from "../card/gallaryCard/Index";

let slidesToShow = 4;

const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div
          className={`!left-0 !bg-[#00000054] !w-[32px] !h-[80px] !flex items-center justify-center z-[50] hover:!bg-[#00000085] transition-all ease-in-out duration-300 !rounded-s-md before:hidden ${className}`}
          onClick={onClick}
        >
          <FaAngleLeft style={{ color: "white", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;

  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div
          className={`!right-[1.1%] !bg-[#00000054] !w-[32px] !h-[80px] !flex items-center justify-center !z-[1] hover:!bg-[#00000085] transition-all ease-in-out duration-300 !rounded-e-md before:hidden ${className}`}
          onClick={onClick}
        >
          <FaAngleRight style={{ color: "white", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const SliderGallary = () => {
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (width <= 426) {
      slidesToShow = 1;
    } else if (width > 426 && width <= 769) {
      slidesToShow = 3;
    } else if (width > 769 && width <= 1025) {
      slidesToShow = 4;
    } else {
      slidesToShow = 5;
    }
  }, [width]);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const gallaryArr = await axios.get("https://dummyjson.com/products");
      setData(gallaryArr.data.products);
    };
    fetchData();
  }, []);

  return (
    <div style={{ margin: "30px" }}>
      <Slider className="" {...carouselProperties}>
        {data?.map((item) => (
          <GallaryCard key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderGallary;

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";
import GallaryCard from "../card/gallaryCard/Index";
let slidesToShow = 4;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div
          className={`!left-0 !bg-[#00000054] !w-[47px] !h-[104px] !flex items-center justify-center z-[50] hover:!bg-[#00000085] transition-all ease-in-out duration-300 !rounded-s-md before:hidden ${className}`}
          onClick={onClick}
        >
          <FaArrowLeft style={{ color: "white", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(slideCount);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div
          className={`!right-[1.1%] !bg-[#00000054] !w-[47px] !h-[104px] !flex items-center justify-center !z-[1] hover:!bg-[#00000085] transition-all ease-in-out duration-300 !rounded-e-md before:hidden ${className}`}
          onClick={onClick}
        >
          <FaArrowRight style={{ color: "white", fontSize: "30px" }} />
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

const MultiItemCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

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
      <h1>Basic carousel</h1>
      <Slider className="" {...carouselProperties}>
        {data?.map((item) => (
          <GallaryCard key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;

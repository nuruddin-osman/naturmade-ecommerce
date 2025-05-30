"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "@/app/draftFolder/everything/DraftCard";

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
          className={`!right-[0%]  !bg-[#00000054] !w-[32px] !h-[80px] !flex items-center justify-center !z-[1] hover:!bg-[#00000085] transition-all ease-in-out duration-300 !rounded-e-md before:hidden ${className}`}
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
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const ProductSlider = ({ items }) => {
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
    } else if (width > 426 && width <= 768) {
      slidesToShow = 2;
    } else if (width > 768 && width <= 1024) {
      slidesToShow = 3;
    } else {
      slidesToShow = 4;
    }
  }, [width]);

  return (
    <div style={{ margin: "0px" }}>
      <Slider className="" {...carouselProperties}>
        {items?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;

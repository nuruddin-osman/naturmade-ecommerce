"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardDotedMobile from "../card/cardDotedMobile/CardDotedMobile";

const MobileDotedSlider = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          bottom: "-40px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="rounded-full w-4 h-4 border border-[#343438]"></div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items?.map((item) => (
          <CardDotedMobile key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default MobileDotedSlider;

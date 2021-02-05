import React from "react";
import Slider from "react-slick";

const SimpleSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SimpleSlider;

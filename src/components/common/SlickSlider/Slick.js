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
    appendDots: (dots) => (
      <div style={{ bottom: "0px" }}>
        <ul style={{}}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div style={{ color: "white", fontWeight: 700 }}>{i + 1}</div>
    ),
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SimpleSlider;

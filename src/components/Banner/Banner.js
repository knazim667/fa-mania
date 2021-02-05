import React from "react";
import Button from "../common/elements/Button/Button";
import { ReactComponent as MainBanner } from "../../assets/images/banners/homePageBanner.svg";
import "./banner.scss";
import SimpleSlider from "../common/SlickSlider/Slick";

const Banner = () => {
  return (
    <div className="text-center">
      <SimpleSlider>
        <div className="container banner-container">
          <MainBanner />
          <div className="overlay-text">
            <h1>50% OFF</h1>
            <h3>Discount on Women's wear</h3>
            <Button classes="fa-primary text-uppercase" title="view product" />
          </div>
        </div>
        <div className="container banner-container">
          <MainBanner />
          <div className="overlay-text">
            <h1>50% OFF</h1>
            <h3>Discount on Women's wear</h3>
            <Button classes="fa-primary text-uppercase" title="view product" />
          </div>
        </div>
      </SimpleSlider>
    </div>
  );
};

export default Banner;

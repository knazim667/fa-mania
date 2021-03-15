import React from "react";
import Banner from "../../components/Banner/Banner";
import FashionProducts from "../../components/FashionProducts/FashionProducts";
import FeatureProduct from "../../components/FeatureProduct";
import PromotionalProduct from "../../components/PromotionalProduct/index";

const Homepage = () => {
  return (
    <React.Fragment>
      <Banner />
      <FashionProducts />
      <PromotionalProduct />
      <FeatureProduct />
    </React.Fragment>
  );
};

export default Homepage;

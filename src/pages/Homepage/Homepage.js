import React from "react";
import Banner from "../../components/Banner/Banner";
import FashionProducts from "../../components/FashionProducts/FashionProducts";
import PromotionalProduct from "../../components/PromotionalProduct/index";

const Homepage = ({ products }) => {
  return (
    <React.Fragment>
      <Banner />
      <FashionProducts />
      <PromotionalProduct />
    </React.Fragment>
  );
};

export default Homepage;

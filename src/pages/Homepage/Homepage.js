import React from "react";
import Banner from "../../components/Banner/Banner";
import FashionProducts from "../../components/FashionProducts/FashionProducts";

const Homepage = ({ products }) => {
  return (
    <React.Fragment>
      <Banner />

      <FashionProducts />
    </React.Fragment>
  );
};

export default Homepage;

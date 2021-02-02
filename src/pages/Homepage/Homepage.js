import React from "react";
import Banner from "../../components/Banner/Banner";
import FashionProducts from "../../components/FashionProducts/FashionProducts";
import { PRODUCTS } from "../../utils/data";

const Homepage = () => {
  return (
    <React.Fragment>
      <Banner />
      <FashionProducts items={PRODUCTS} />
    </React.Fragment>
  );
};

export default Homepage;

import React from "react";
import { connect } from "react-redux";
import Banner from "../../components/Banner/Banner";
import FashionProducts from "../../components/FashionProducts/FashionProducts";

const Homepage = ({ products }) => {
  const collections = Object.keys(products).map((key) => products[key]);
  return (
    <React.Fragment>
      <Banner />
      {collections.map((collection) => (
        <FashionProducts
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Homepage);

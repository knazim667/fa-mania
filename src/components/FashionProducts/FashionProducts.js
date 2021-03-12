import React from "react";
import "./fashionProducts.scss";
import Card from "../common/elements/Card/Card";
import { connect } from "react-redux";

const FashionProducts = ({ products }) => {
  let title = "fashion products";
  const featured = Object.keys(products).map((key) => products[key]);
  console.log(featured);
  const filtered = featured.filter((product) => {
    return product.tags;
  });
  const tagFilter = filtered.filter((item) => item.tags.indexOf(title) > -1);
  console.log(tagFilter);
  return (
    <div className="container fashion-products">
      <div className="row">
        <div className="col-lg-12 p-0">
          <h2 className="mb-3">{title}</h2>
        </div>
      </div>
      <div className="row">
        {tagFilter.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(FashionProducts);

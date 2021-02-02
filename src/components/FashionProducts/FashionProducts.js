import React from "react";
import "./fashionProducts.scss";
import Card from "../common/elements/Card/Card";

const FashionProducts = ({ items }) => {
  return (
    <div className="container fashion-products">
      <div className="row">
        <div className="col-lg-12 p-0">
          <h2 className="mb-3">Fashion Products</h2>
        </div>
      </div>
      <div className="row">
        {items.map(({ id, ...otherProps }) => (
          <Card key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default FashionProducts;

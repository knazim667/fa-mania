import React from "react";
import "./fashionProducts.scss";
import Card from "../common/elements/Card/Card";

const FashionProducts = ({ items, title }) => {
  return (
    <div className="container fashion-products">
      <div className="row">
        <div className="col-lg-12 p-0">
          <h2 className="mb-3">{title}</h2>
        </div>
      </div>
      <div className="row">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FashionProducts;

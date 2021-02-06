import React from "react";
import "./fashionProducts.scss";
import Card from "../common/elements/Card/Card";
import { connect } from "react-redux";

const FashionProducts = ({ products }) => {
  let title = "Fashion Products";

  const filtered = products.filter(
    (item) => item.tags.indexOf(title.toLowerCase()) >= 0
  );
  return (
    <div className="container fashion-products">
      <div className="row">
        <div className="col-lg-12 p-0">
          <h2 className="mb-3">{title}</h2>
        </div>
      </div>
      <div className="row">
        {filtered.map((item, index) => (
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

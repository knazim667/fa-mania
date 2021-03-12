import React from "react";
import Card from "../common/elements/Card/Card";
import { connect } from "react-redux";
import "./featureProduct.scss";

const FeatureProducts = ({ products }) => {
  const title = "feature product";
  const productsArray = Object.keys(products).map((key) => products[key]);
  const filtered = productsArray.filter((product) => {
    return product.tags;
  });
  const featureFiltered = filtered.filter(
    (item) => item.tags.indexOf(title) > -1
  );
  console.log(featureFiltered);
  return (
    <div className="container feature-ptoducts">
      <div className="row">
        <div className="col-lg-12 p-0">
          <h2 className="mb-3">{title}s</h2>
        </div>
      </div>
      <div className="row">
        {featureFiltered
          .filter((item, index) => index < 4)
          .map((item, index) => (
            <Card key={index} item={item} />
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps)(FeatureProducts);

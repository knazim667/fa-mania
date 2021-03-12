import React from "react";
import PromoCard from "../common/PromoCard";
import fashion from "../../assets/images/promo/fashion-marketing.jpg";
import menandwomen from "../../assets/images/promo/men-and-women.jpg";
import "./promotionalProduct.scss";

const PromotionalProduct = () => {
  return (
    <div className="container promotional-product">
      <div className="row">
        <PromoCard promo={fashion} content="Exclusive Offers" />
        <PromoCard promo={menandwomen} content="Men & women" />
      </div>
    </div>
  );
};

export default PromotionalProduct;

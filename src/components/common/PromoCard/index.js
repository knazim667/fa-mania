import React from "react";
import "./promoCard.scss";
import Button from "../elements/Button/Button";

const PromoCard = ({ promo, content, onClick, ...props }) => {
  return (
    <div className="promoCard" {...props}>
      <img src={promo} alt="promo" />
      <div className="overlay">
        <div className="content">
          <h3 className="title">{content}</h3>
          <Button
            classes="fa-outline-white"
            title="know more"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoCard;

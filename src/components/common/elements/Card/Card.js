import React from "react";
import "./Card.scss";

const Card = ({ imgUrl, name, price, background }) => {
  return (
    <div
      className={`card product-card`}
      style={{ backgroundColor: background }}
    >
      <img src={imgUrl} alt={name} />
      <div className="card-body">
        <h5>{name}</h5>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Card;

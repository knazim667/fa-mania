import React from "react";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div className={`card product-card`}>
      <div
        className="product-image"
        style={{ backgroundColor: item.background ? item.background : " " }}
      >
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className="card-body">
        <h5>{item.name}</h5>
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ product, title }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          {product && <Link to="/products">Products</Link>} {title}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;

import React, { useState } from "react";
import "./Navbar.scss";
import Icon from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import { NAV_ITEMS } from "../../utils/data";
import { ReactComponent as Famania } from "../../assets/images/logo/F.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);

  const toggler = () => {
    setCollapse(!collapse);
  };
  const classOne = collapse
    ? "collapse navbar-collapse show"
    : "collapse navbar-collapse";
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <Famania />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" onClick={toggler}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classOne}>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href={item.path}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-auto">
            <Icon className="shopping-cart" icon={shoppingCart} size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

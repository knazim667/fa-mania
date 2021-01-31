import React from "react";
import "./Navbar.scss";
import { NAV_ITEMS } from "../../utils/data";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-xxl">
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href={item.path}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

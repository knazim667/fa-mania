import React from "react";
import "./logo.scss";
import { ReactComponent as Famania } from "../../../../assets/images/logo/F.svg";

const Logo = () => {
  return (
    <div className="logo">
      <Famania className="logo-image" />
      <span className="dash"> - </span>
      <h2 className="mania">Mania</h2>
    </div>
  );
};

export default Logo;

import React from "react";
import Input from "../common/elements/Input/Input";
import Logo from "../common/elements/Logo/Logo";
import { search } from "react-icons-kit/feather/search";
import Button from "../common/elements/Button/Button";
import "./subHeader.scss";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="container sub-header">
      <div className="logo-box">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="search-box">
        <Input icon={search} type={"search"} classes="search-input" />
      </div>
      <div className="button-box">
        <Link to="/login">
          <Button classes="fa-primary" title="Login" />
        </Link>
        <Link to="/register">
          <Button classes="fa-black" title="Register" />
        </Link>
      </div>
    </div>
  );
};

export default SubHeader;

import React from "react";
import Input from "../common/elements/Input/Input";
import Logo from "../common/elements/Logo/Logo";
import { search } from "react-icons-kit/feather/search";
import Button from "../common/elements/Button/Button";
import "./subHeader.scss";

const SubHeader = () => {
  return (
    <div className="container sub-header">
      <div className="logo-box">
        <Logo />
      </div>
      <div className="search-box">
        <Input icon={search} type={"search"} />
      </div>
      <div className="button-box">
        <Button classes="fa-primary" title="Login" />
        <Button classes="fa-black" title="Register" />
      </div>
    </div>
  );
};

export default SubHeader;

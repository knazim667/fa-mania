import React from "react";
import "./Button.scss";

const Button = ({ classes, title, ...props }) => {
  let addClasses = [];
  if (classes) {
    addClasses.push(classes);
  }
  return (
    <button className={(`btn`, addClasses.join(""))} {...props}>
      {title}
    </button>
  );
};

export default Button;

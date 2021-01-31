import React from "react";
import Icon from "react-icons-kit";
import "./Button.scss";

const Button = ({ classes, title, icon, iconClass, ...props }) => {
  let addClasses = ["btn"];
  if (classes) {
    addClasses.push(classes);
  }

  return (
    <button className={addClasses.join(" ")} {...props}>
      {icon && <Icon icon={icon} className={iconClass} />}
      {title && <span className="btn-text">{title}</span>}
    </button>
  );
};

export default Button;

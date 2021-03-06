import React from "react";
import "./input.scss";
import Button from "../Button/Button";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  iconPosition,
  classes,
  icon,
  error,
  ...props
}) => {
  let buttonIcon = icon && (
    <Button type="submit" classes="input-icon-right" icon={icon} />
  );

  let addAllClasses = [];

  if (classes) {
    addAllClasses.push(classes);
  }

  const position = iconPosition || "right";

  return (
    <div className={`input-group ${addAllClasses.join(" ")}`}>
      {position === "left" && buttonIcon}
      <input
        type={type}
        className={"form-control"}
        placeholder={placeholder}
        value={value}
        icon={icon}
        icon-position={position}
        onChange={onChange}
        {...props}
      />
      {position === "right" && buttonIcon}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

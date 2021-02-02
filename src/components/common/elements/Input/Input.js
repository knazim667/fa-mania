import React from "react";
import "./input.scss";
import Button from "../Button/Button";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  iconPosition,
  icon,
}) => {
  let buttonIcon = icon && (
    <Button type="submit" classes="input-icon-right" icon={icon} />
  );

  const position = iconPosition || "right";

  return (
    <div className="input-group">
      {position === "left" && buttonIcon}
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        icon={icon}
        icon-position={position}
        onChange={onChange}
      />
      {position === "right" && buttonIcon}
    </div>
  );
};

export default Input;

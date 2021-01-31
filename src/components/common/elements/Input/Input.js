import React from "react";
import Button from "../Button/Button";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  iconPosition,
  icon,
}) => {
  let buttonIcon = <Button classes="btn-outline-secondary" icon={icon} />;

  const position = iconPosition || "right";

  return (
    <div className="input-group mb-3">
      {position === "left" && buttonIcon}
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        icon={icon}
        iconPosition={position}
        onChange={onChange}
      />
      {position === "right" && buttonIcon}
    </div>
  );
};

export default Input;

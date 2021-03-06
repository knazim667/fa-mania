import React from "react";
import "./checkbox.scss";

const Checkbox = ({ labelText, name, labelPosition, ...props }) => {
  let label = labelText && (
    <label className="form-check-label" htmlFor={name}>
      {labelText}
    </label>
  );
  let position = labelPosition || "right";
  return (
    <div className="form-check">
      {position === "left" && label}
      <input
        className={
          labelPosition === "left"
            ? "form-check-input left"
            : "form-check-input"
        }
        type="checkbox"
        name={name}
        {...props}
      />
      {position === "right" && label}
    </div>
  );
};

export default Checkbox;

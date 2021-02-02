import React from "react";
import "./image.scss";

const Image = ({ classes, src, alt, ...props }) => {
  const addAllClasses = [""];

  if (classes) {
    addAllClasses.push(classes);
  }

  return (
    <img
      className={("image-component", addAllClasses.join(" "))}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default Image;

import React from "react";
import "./Header.css";

const SVGButton = ({ href, onClick, className, children }) => {
  return (
    <a href={href} className={"svg-btn " + (className || "")}>
      <div>{children}</div>
      <svg className="btn">
        <rect width="100%" height="100%"></rect>
      </svg>
    </a>
  );
};

export default SVGButton;

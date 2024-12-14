import React from "react";
import SVGButton from "../Components/SVGButton";
import "./Midsection.css";
const MidSection = ({ items }) => {
  return (
    <div className="_midsection">
      {items?.map((i) => (
        <div className="slide">
          {i.image}
          <h1 className={"content " + (i.align || "center")}>
            {i.content}
            {i.button && (
              <SVGButton href={i.button.href}>{i.button.content}</SVGButton>
            )}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default MidSection;

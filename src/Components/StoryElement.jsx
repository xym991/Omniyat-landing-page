import React from "react";
import SVGButton from "./SVGButton";
import "./StoryElement.css";

const StoryElement = ({ items, button }) => {
  return (
    <div className="_story home">
      <div className="items">
        {items.map((i) => (
          <div className="item">
            <hr />
            <div>
              <h2>{i.heading}</h2>
              <p>{i.subtext}</p>
            </div>
          </div>
        ))}
      </div>
      {button && (
        <SVGButton href={"/our-story"} className={"white long"}>
          Discover Our Story
        </SVGButton>
      )}
    </div>
  );
};

export default StoryElement;

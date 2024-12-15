import React from "react";

const Slides = ({ num, slide, black }) => {
  return (
    <div className={"slides" + (black ? " black" : "")}>
      {Array(num)
        .fill(1)
        ?.map((item, index) => (
          <div
            key={index}
            className={"carousel-slide" + (slide == index ? " active" : "")}
          ></div>
        ))}
    </div>
  );
};

export default Slides;

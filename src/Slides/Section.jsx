import React from "react";
import "./Section.css";

const Section = ({ data }) => {
  return (
    <div className="_masterpieces">
      <h3>{data.name}</h3>
      <h1>{data.heading}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default Section;

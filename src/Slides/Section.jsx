import React, { useRef } from "react";
import "./Section.css";
import useInView from "../hooks/useInView";

const Section = ({ data, append, className = "" }) => {
  const ref = useRef();
  useInView(ref);
  return (
    <div className={"_masterpieces hide " + className} ref={ref}>
      <main>
        {" "}
        <h3>{data.name}</h3>
        <h1>{data.heading}</h1>
        <p>{data.content}</p>
      </main>
      {append}
    </div>
  );
};

export default Section;

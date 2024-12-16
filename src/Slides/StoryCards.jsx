import React, { useRef } from "react";
import "./StoryCards.css";
import useInView from "../hooks/useInView";

const StoryCards = ({ items, text }) => {
  const ref = useRef();
  useInView(ref);
  return (
    <div className="_story-cards hide" ref={ref}>
      <div className="cards">
        {items?.map((i) => (
          <div className="card">
            {i?.image}
            <div>
              <h2>{i?.heading}</h2>
              <p>{i?.content}</p>
            </div>
          </div>
        ))}
      </div>
      {text && <h4>{text}</h4>}
    </div>
  );
};

export default StoryCards;

import React, { useRef } from "react";
import useInView from "../hooks/useInView";
import SVGButton from "../Components/SVGButton";

const MidSectionSlide = ({ i }) => {
  const ref = useRef();
  useInView(ref);
  return (
    <div className="_midsection" ref={ref}>
      {i.image}
      <h1 className={"content hide " + (i.align || "center")}>
        {i.content}
        {i.button && (
          <SVGButton href={i.button.href}>{i.button.content}</SVGButton>
        )}
      </h1>
    </div>
  );
};

export default MidSectionSlide;

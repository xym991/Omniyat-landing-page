import React from "react";
import "./Midsection.css";
import MidSectionSlide from "../Components/MidSectionSlide";
const MidSection = ({ items }) => {
  return (
    <>
      {items?.map((i) => (
        <MidSectionSlide i={i} />
      ))}
    </>
  );
};

export default MidSection;

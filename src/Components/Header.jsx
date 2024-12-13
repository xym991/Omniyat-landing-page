import React from "react";
import "./Header.css";
import SVGButton from "./SVGButton";

const Header = ({ open, setOpen, scrolled }) => {
  return (
    <nav
      className={"_header" + (open ? " open" : "") + (scrolled ? " sc" : "")}
    >
      <div className="top">
        <button
          className={"menu" + (open ? " open" : "")}
          onClick={(_) => setOpen(!open)}
        >
          <div></div>
          <div></div>
        </button>
        <a href="" className="logo">
          <img
            src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/64d0f5a02c9c892bbd0bd804_omniyat-logo.svg"
            alt=""
            loading="lazy"
            className="full"
          />
          <img
            src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/64d36c24ac73440c5d71e180_omniyat-logo-icon.svg"
            loading="lazy"
            alt="Omniyat"
            className="mini"
          ></img>
        </a>
        <SVGButton href={""}>Contact Us</SVGButton>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Masterpieces</li>
        <li>Our Story</li>
        <li>Sales Gallery</li>
      </ul>
    </nav>
  );
};

export default Header;

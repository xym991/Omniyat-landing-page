import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={"_header" + (open ? " open" : "")}>
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
          />
        </a>
        <a href="" className="contact-us">
          <div>Contact Us</div>
          <svg class="btn">
            <rect width="100%" height="100%"></rect>
          </svg>
        </a>
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

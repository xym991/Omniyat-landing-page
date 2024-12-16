import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import SVGButton from "./SVGButton";
import { useLocation } from "react-router";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const path = useLocation().pathname;
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let fn = (e) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      if (e.deltaY > 0) {
        setScrolled(true);
      } else if (e.deltaY < 0) {
        setScrolled(false);
      }
    };
    document.querySelector("._App")?.addEventListener("wheel", fn);
    return () =>
      document.querySelector("._App")?.removeEventListener("wheel", fn);
  }, []);
  return (
    <nav
      className={
        "_header" +
        (open ? " open" : "") +
        (scrolled ? " sc" : "") +
        (path != "" ? " fast" : "")
      }
      ref={ref}
      s
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
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/masterpieces">
          <li>Masterpieces</li>
        </a>
        <a href="our-story">
          <li>Our Story</li>
        </a>
        <a href="sales">
          <li>Sales Gallery</li>
        </a>
      </ul>
    </nav>
  );
};

export default Header;

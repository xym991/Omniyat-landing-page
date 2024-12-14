import React, { useEffect, useRef, useState } from "react";
import SVGButton from "../Components/SVGButton";
import "./Carousel.css";
import throttle from "../utils/throttle";

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [slide, setSlide] = useState(0);
  const [lock, setLock] = useState(false);

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

    if (e.deltaX > 0) {
      setSlide((s) => {
        // if (lock) return;
        const nextSlide = Math.min(s + 1, items.length - 1);
        return nextSlide;
      });
    } else if (e.deltaX < 0) {
      setSlide((s) => {
        // if (lock) return;
        const prevSlide = Math.max(s - 1, 0);
        return prevSlide;
      });
    }
  };

  const throttleHanldeWheel = throttle(handleWheel, 900);

  useEffect(() => {
    const carouselElement = carouselRef.current;

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (Math.abs(e.deltaX) < 40) return;

      throttleHanldeWheel(e);
    };

    carouselElement.addEventListener("wheel", onWheel, { passive: false });
    return () => carouselElement.removeEventListener("wheel", onWheel);
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let rect = carouselRef.current.getBoundingClientRect();
      if (rect.top <= 90) carouselRef.current.classList.add("focus");
      else carouselRef.current.classList.remove("focus");
    });
  });

  return (
    <div className="_carousel" ref={carouselRef}>
      {items?.map((item, index) => (
        <div
          key={index}
          className="carousel-item"
          style={{ transform: `translateX(${(index - slide) * 100}%)` }}
        >
          {item.image}
          <div className="main">
            <h2>{item?.content}</h2>
            <SVGButton>Discover</SVGButton>
          </div>
        </div>
      ))}
      <div className="slides">
        {items?.map((item, index) => (
          <div
            key={index}
            className={"carousel-slide" + (slide == index ? " active" : "")}
          ></div>
        ))}
      </div>
      <div className="buttons">
        <button
          className="left"
          style={{ opacity: slide > 0 ? "100%" : "50%" }}
          onClick={(_) => slide > 0 && setSlide(slide - 1)}
        >
          <svg
            width="27"
            height="11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.667 4.74 2.53 4.76 6.592.891 5.658 0 .001 5.392l5.533 5.274.934-.89-3.94-3.755 24.14-.022-.001-1.26Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          className="right"
          onClick={(_) => slide < items.length - 1 && setSlide(slide + 1)}
          style={{ opacity: slide < items.length - 1 ? "100%" : "50%" }}
        >
          <span aria-label="Next" role="button">
            <svg
              width="28"
              height="11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m.67 4.74 24.135.021-4.061-3.87.933-.891 5.658 5.392-5.533 5.274-.934-.89 3.94-3.755-24.14-.022.001-1.26Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

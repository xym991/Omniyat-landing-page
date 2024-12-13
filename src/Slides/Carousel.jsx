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
          <div key={index} className="carousel-slide"></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

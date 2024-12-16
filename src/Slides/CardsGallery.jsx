import React, { useEffect, useRef, useState } from "react";
import "./CardsGallery.css";
import throttle from "../utils/throttle";
import Slides from "../Components/Slides";

const CardsGallery = ({ items }) => {
  const [current, setCurrent] = useState(0);
  const container = useRef();
  const [lock, setLock] = useState(false);
  function prev() {
    setLock(true);
    setCurrent((current) => (current + 1 == items.length ? 0 : current + 1));
    Array.from(container?.current?.childNodes).forEach((element, i) => {
      element.style.transform = `translateX(${element.number - 616}px)`;
      element.number = element.number - 616;
    });
    setTimeout(() => {
      let element = container.current?.childNodes[0];
      element.remove();
      element.style.transform = `translateX(${(items.length - 2) * 616}px)`;
      element.number = (items.length - 2) * 616;
      container.current.appendChild(element);
      setLock(false);
    }, 400);
  }
  function next() {
    setLock(true);
    setCurrent((current) =>
      current - 1 == -1 ? items.length - 1 : current - 1
    );
    Array.from(container?.current?.childNodes).forEach((element, i) => {
      element.style.transform = `translateX(${element.number + 616}px)`;
      element.number = element.number + 616;
    });
    setTimeout(() => {
      let element = container.current?.childNodes[items.length - 1];
      element.remove();
      element.style.transform = `translateX(${-616}px)`;
      element.number = -616;
      container.current.prepend(element);
      setLock(false);
    }, 400);
  }
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

    if (e.deltaX > 0) {
      prev();
    } else if (e.deltaX < 0) {
      next();
    }
  };
  const throttledFn = throttle(handleWheel, 500);
  useEffect(() => {
    const carouselElement = container.current;

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (Math.abs(e.deltaX) < 40) return;

      throttledFn(e);
    };

    carouselElement.addEventListener("wheel", onWheel, { passive: false });
    return () => carouselElement.removeEventListener("wheel", onWheel);
  }, []);

  function assignPositions() {
    Array.from(container?.current?.childNodes).forEach((element, i) => {
      let number = (i - 1) * 616;
      element.number = number;
      element.style.transform = `translateX(${(i - 1) * 616}px)`;
    });
  }
  useEffect(() => assignPositions(), []);

  return (
    <div className="_cards-gallery stop">
      <div className="cards" ref={container}>
        {items.map((item, i) => (
          <div
            className="card"
            id={"card" + i}
            key={i}
            // style={{ transform: `translateX(${i * 616}px)` }}
          >
            {item.image}
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      <Slides num={items.length} slide={current} black />
      <div className="buttons">
        <button
          className="left"
          onClick={() => !lock && throttledFn({ deltaX: -10 })}
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
          onClick={() => !lock && throttledFn({ deltaX: 10 })}
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

export default CardsGallery;

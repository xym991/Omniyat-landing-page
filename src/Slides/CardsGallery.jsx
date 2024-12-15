import React, { useEffect, useRef, useState } from "react";
import "./CardsGallery.css";
import throttle from "../utils/throttle";
import Slides from "../Components/Slides";

const CardsGallery = ({ items }) => {
  // const [cards, setCards] = useState([...items]);
  const [current, setCurrent] = useState(0);
  const container = useRef();

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

    if (e.deltaX > 0) {
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
      }, 400);
    } else if (e.deltaX < 0) {
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
      }, 400);
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
    <div className="_cards-gallery">
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
    </div>
  );
};

export default CardsGallery;

import React, { useEffect, useRef, useState } from "react";
import "./CardsGallery.css";
import throttle from "../utils/throttle";
const CardsGallery = ({ items }) => {
  const [cards, setCards] = useState(items);
  const containerRef = useRef(null);
  const nextRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const prevRef = useRef(null);

  //   const scrollToChild = (ref, fn) => {
  //     if (!ref.current) return;
  //     const parent = containerRef.current;
  //     const child = ref.current;

  //     const parentLeft = parent.getBoundingClientRect().left;
  //     const childLeft = child.getBoundingClientRect().left;
  //     const distanceFromParentLeft = childLeft - parentLeft;

  //     parent.scrollTo({
  //       left: distanceFromParentLeft + parent.scrollLeft,
  //       behavior: "smooth",
  //     });
  //     setTimeout(() => {
  //       //   let arr = [...cards.slice(1)];
  //       //   arr.push(cards[0]);
  //       //   setCards(arr);

  //       //   //   cards.push(item);
  //       fn();
  //     }, 1000);
  //   };
  //   const throttledScroll = throttle(scrollToChild, 1000);

  //   useEffect(() => {
  //     containerRef.current?.addEventListener(
  //       "wheel",
  //       (event) => {
  //         // Prevent default behavior
  //         event.preventDefault();
  //         // Make sure the wheel event is horizontal

  //         if (event.deltaX > 0) {
  //           throttledScroll(nextRef, () => {
  //             setCurrent(current + 1);
  //           });

  //           //   carouselRef.current.scrollLeft += 100;
  //         } else {
  //           throttledScroll(prevRef, () => {
  //             setCurrent(current + 1);
  //           });

  //           //   carouselRef.current.scrollLeft -= 100;
  //         }
  //       },
  //       { passive: false }
  //     );
  //     return () => {
  //       containerRef.current?.removeEventListener("wheel", () => {});
  //     };
  //   }, [containerRef]);
  return (
    <div className="_cards-gallery">
      <div className="cards" ref={containerRef}>
        {" "}
        {cards.map((item, i) => (
          <div
            className="card"
            id={"card" + i}
            ref={i == current - 1 ? prevRef : i == current + 1 ? nextRef : null}
          >
            {item.image}
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGallery;

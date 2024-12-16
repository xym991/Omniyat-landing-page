import React, { useRef } from "react";
import founder from "../Assets/images/founder.webp";
import "./Founder.css";
import useInView from "../hooks/useInView";

const Founder = () => {
  const ref = useRef();
  useInView(ref);
  return (
    <div className="_founder hide" ref={ref}>
      <div className="card">
        <img src={founder} alt="" />
        <div>
          <div>
            <h1 className="name">Mahdi Amjad</h1>
            <h3 className="title">Founder and Executive Chairman</h3>
          </div>
          <p>
            Mahdi Amjad, Founder and Executive Chairman of OMNIYAT, has
            dynamically transformed Dubai's architectural landscape.
            Establishing OMNIYAT in 2005, he prioritized design and art,
            resulting in large-scale collaborations with award-winning
            designers. Under his leadership, OMNIYAT has marked its presence
            with unique projects, consistently delivering quality and value
            across all. His vision continues to shape vantage locations within
            master communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;

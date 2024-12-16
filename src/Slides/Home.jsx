import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

const Home = () => {
  const [scrolled, setScrolled] = useState(0);
  const [init, setInit] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const videoRef = useRef();

  useEffect(() => {
    let app = document.querySelector("._App");
    let slide = document.querySelector("._home");
    let fn = (e) => {
      if (!init) return e.preventDefault();

      if (e.deltaY > 0 && scrolled < slide.getBoundingClientRect().height) {
        e.preventDefault();
        setScrolled((scrolled) =>
          Math.min(
            scrolled + Math.max(e.deltaY, 10),
            slide.getBoundingClientRect().height
          )
        );
      } else if (e.deltaY < 0 && slide.getBoundingClientRect().top == 0) {
        setScrolled((scrolled) =>
          Math.max(scrolled + Math.min(e.deltaY, -10), 0)
        );
      }
    };
    app?.addEventListener("wheel", fn);
    return () => app?.removeEventListener("wheel", fn);
  }, [scrolled, init]);

  useEffect(() => setTimeout(() => setInit(true), 6000), []);
  return (
    <>
      <div className="_home stop" ref={ref}>
        <div className="main">
          <img
            className="logo"
            src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/64d0f5a02c9c892bbd0bd804_omniyat-logo.svg"
            alt=""
          />
          <h2
            className="hero_intro_heading heading-style-h3"
            style={{
              color: scrolled > window.innerHeight / 2.1 ? "black" : "white",
            }}
          >
            THE ART OF ELEVATION
          </h2>
          <div
            className="hero_intro_text text-size-large"
            style={{
              color: scrolled > window.innerHeight / 2.1 ? "black" : "white",
            }}
          >
            A vision that transcends property and space, where unmatched
            craftsmanship inspires elegance and innovation to enrich lives.
            Imagining the extraordinary and building it into reality.
          </div>
        </div>
        <video
          ref={videoRef}
          className="home-bg-video"
          id="3d7331bf-ecd0-3da6-227c-a441f4885947-video"
          autoPlay
          loop
          style={{
            backgroundImage: `url("https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6527bf98ed08f0d56bffaa0f_homepage-film-d_3-poster-00001.jpg"`,
          }}
          muted
          playsInline
          data-wf-ignore
          data-object-fit
        >
          <source
            src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6527bf98ed08f0d56bffaa0f_homepage-film-d_3-transcode.mp4"
            data-wf-ignore="true"
          />
          <source
            src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6527bf98ed08f0d56bffaa0f_homepage-film-d_3-transcode.webm"
            data-wf-ignore="true"
          />
        </video>
        <div
          className="mask"
          style={{
            borderWidth: `${scrolled * 2.3}px`,
            opacity: `${(scrolled / window.innerHeight) * 110}%`,
            transform: `scaleY(${Math.max(
              window.innerHeight / Math.max(scrolled * 1.3, 500),
              1
            )})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;

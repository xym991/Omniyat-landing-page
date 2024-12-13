import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Header from "../Components/Header";
import throttle from "../utils/throttle";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const videoRef = useRef();
  const handleScroll = (dir) => {
    if (dir == "down") {
      setTimeout(() => {
        setScrolled(true);
        videoRef.current?.pause();
      }, 300);
      ref.current?.classList?.add("white");
    } else if (dir == "up" && window.scrollY < 100) {
      console.log(window.scrollY);
      setTimeout(() => {
        setScrolled(false);
        videoRef.current?.play();
      }, 300);
      ref.current?.classList?.remove("white");
    }
  };

  const throttledHandleScroll = throttle(handleScroll, 500);
  useEffect(() => {
    const scrollListener = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (e.deltaY > 0) {
        if (!scrolled) {
          e.preventDefault();
          throttledHandleScroll("down");
        }
      } else if (e.deltaY < 0) {
        if (scrolled) {
          throttledHandleScroll("up");
        }
      }
    };
    window.addEventListener("wheel", scrollListener, { passive: false });
    return () =>
      window.removeEventListener("wheel", scrollListener, { passive: false });
  }, [scrolled]);
  return (
    <>
      <Header open={open} setOpen={setOpen} scrolled={scrolled}></Header>{" "}
      <div className="_home" ref={ref}>
        <div className="main">
          <img
            className="logo"
            src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/64d0f5a02c9c892bbd0bd804_omniyat-logo.svg"
            alt=""
          />
          <h2 className="hero_intro_heading heading-style-h3">
            THE ART OF ELEVATION
          </h2>
          <div className="hero_intro_text text-size-large">
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
      </div>
    </>
  );
};

export default Home;

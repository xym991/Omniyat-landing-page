import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="_home">
      <div className="main">
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
        className="home-bg-video"
        id="3d7331bf-ecd0-3da6-227c-a441f4885947-video"
        autoPlay
        loop
        style={{
          backgroundImage: `url("https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6527bf98ed08f0d56bffaa0f_homepage-film-d_3-poster-00001.jpg"`,
        }}
        muted
        playsinline
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
  );
};

export default Home;

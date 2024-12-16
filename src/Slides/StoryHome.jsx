import React from "react";

const StoryHome = () => {
  return (
    <div className="_home stop">
      <div className="main">
        <h2 className="hero_intro_heading heading-style-h3 rush">
          The omniyat story
        </h2>
      </div>
      <video
        id="3d7331bf-ecd0-3da6-227c-a441f4885947-video"
        autoPlay
        loop=""
        style={{
          backgroundImage: `url("https://cdn.prod.website-files.com/64cd0df1806781d956403b26/65252b20828bf6a6f402c961_our-story-video-d-poster-00001.jpg")`,
        }}
        muted
        playsInline=""
        data-wf-ignore="true"
        data-object-fit="cover"
        className="home-bg-video"
      >
        <source
          src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/65252b20828bf6a6f402c961_our-story-video-d-transcode.mp4"
          data-wf-ignore="true"
        />
        <source
          src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/65252b20828bf6a6f402c961_our-story-video-d-transcode.webm"
          data-wf-ignore="true"
        />
      </video>
    </div>
  );
};

export default StoryHome;

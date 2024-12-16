import React, { useEffect, useRef } from "react";
import useInView from "../hooks/useInView";

const Bottom = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  //   useEffect(() => {
  //     ref.current.classList.add("force-show");
  //   }, [isInView]);
  return (
    <div className="_bottom _home" ref={ref}>
      <img
        src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6525ddc6bb7bcb93cc427ab7_bespoke-img-d.webp"
        loading="lazy"
        sizes="100vw"
        srcSet="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6525ddc6bb7bcb93cc427ab7_bespoke-img-d-p-500.webp 500w, https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6525ddc6bb7bcb93cc427ab7_bespoke-img-d-p-800.webp 800w, https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6525ddc6bb7bcb93cc427ab7_bespoke-img-d-p-1080.webp 1080w, https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6525ddc6bb7bcb93cc427ab7_bespoke-img-d-p-1600.webp 1600w, https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6525ddc6bb7bcb93cc427ab7_bespoke-img-d-p-2000.webp 2000w, https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6525ddc6bb7bcb93cc427ab7_bespoke-img-d-p-2600.webp 2600w, https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6525ddc6bb7bcb93cc427ab7_bespoke-img-d-p-3200.webp 3200w, https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6525ddc6bb7bcb93cc427ab7_bespoke-img-d.webp 3840w"
        alt=""
        class="hero_bg bespoke_hero_bg hide-mobile"
      />
      <div className="main hide">
        <img
          className="logo permanent"
          src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/64d0f5a02c9c892bbd0bd804_omniyat-logo.svg"
          alt=""
        />
        <h3>Atelier</h3>

        <div className="hero_intro_text text-size-large">
          Imagined by you and crafted for you, our Atelier service delivers
          architectural brilliance celebrating your unique individuality.
        </div>
      </div>
    </div>
  );
};

export default Bottom;

import React from "react";
import SVGButton from "../Components/SVGButton";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="_footer">
      <div className="top">
        <div className="mask"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous"
          src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6527e836ac2c2f78951610f7_Enquiry-background-d-transcode.webm"
        >
          <source
            src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6527e836ac2c2f78951610f7_Enquiry-background-d-transcode.webm"
            type="video/webm"
          />
          <source
            src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6527e836ac2c2f78951610f7_Enquiry-background-d-transcode.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="main">
          <h2>discover exclusivity</h2>
          <p>Enquire for more details</p>
          <SVGButton href={""} className={"long"}>
            Request a Callback
          </SVGButton>
        </div>
      </div>
      <div className="mid">
        <img
          src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/653166984911545913a0f28c_footer-logo.svg"
          alt=""
        />
      </div>
      <div className="bottom">
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
        <h3>Omniyat © 2024</h3>
        <ul className="socials">
          <li>
            <svg
              width="6"
              height="13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.36 13h2.617V6.445h1.828L6 4.249H3.98v-1.25c0-.517.103-.723.604-.723H6V0H4.188c-1.95 0-2.827.857-2.827 2.5v1.749H0v2.22h1.36V13Z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              width="13"
              height="12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.031 0 4.95 6.619L0 12h1.121l4.361-4.711L9.006 12h3.815L7.592 5.009 12.23 0h-1.121L7.092 4.34 3.846 0H.031ZM1.68.826h1.753l7.74 10.348H9.418L1.68.826Z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              width="13"
              height="13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.48 1.168c1.73 0 1.934.006 2.617.039.631.027.976.135 1.204.223.303.118.518.259.744.485.226.226.367.443.485.744.088.228.196.57.223 1.204.03.683.039.887.039 2.617s-.006 1.934-.039 2.617c-.027.631-.135.976-.223 1.204a2.016 2.016 0 0 1-.485.744 2.038 2.038 0 0 1-.744.485c-.228.088-.57.196-1.204.223-.683.03-.887.039-2.617.039s-1.934-.006-2.617-.039c-.631-.027-.976-.135-1.204-.223a2.014 2.014 0 0 1-.744-.485 2.037 2.037 0 0 1-.485-.744c-.088-.228-.196-.57-.223-1.204-.03-.683-.039-.887-.039-2.617s.006-1.934.039-2.617c.027-.631.135-.976.223-1.204.118-.303.259-.518.485-.744.226-.226.443-.367.744-.485.228-.088.57-.196 1.204-.223.683-.03.887-.039 2.617-.039ZM6.48 0C4.72 0 4.5.008 3.808.039c-.69.03-1.16.14-1.574.3a3.2 3.2 0 0 0-1.148.747c-.361.36-.582.721-.747 1.148-.16.414-.27.885-.3 1.574C.009 4.499 0 4.719 0 6.48c0 1.76.008 1.98.039 2.672.03.69.14 1.16.3 1.574a3.2 3.2 0 0 0 .747 1.148 3.14 3.14 0 0 0 1.148.747c.414.16.885.27 1.574.3.691.03.911.039 2.672.039 1.76 0 1.98-.008 2.672-.039.69-.03 1.16-.14 1.574-.3a3.2 3.2 0 0 0 1.148-.747c.361-.36.582-.721.747-1.148.16-.414.27-.885.3-1.574.03-.691.039-.912.039-2.672 0-1.76-.008-1.98-.039-2.672-.03-.69-.14-1.16-.3-1.574a3.2 3.2 0 0 0-.747-1.148 3.163 3.163 0 0 0-1.148-.747c-.414-.16-.885-.27-1.574-.3C8.461.009 8.24 0 6.48 0Zm4.24 3.138a.776.776 0 1 1-1.553 0 .776.776 0 1 1 1.553 0ZM3.156 6.48a3.329 3.329 0 1 1 6.658.002 3.329 3.329 0 0 1-6.658-.002Zm1.168 0a2.16 2.16 0 1 0 4.32 0 2.16 2.16 0 0 0-4.32 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              width="18"
              height="13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.823 2.803S17.64 1.526 17.101.97C16.42.24 15.65.23 15.306.182 12.79 0 9.015 0 9.015 0h-.022S5.227 0 2.71.182C2.349.229 1.589.24.907.97.369 1.528.185 2.803.185 2.803S0 4.303 0 5.783v1.413c0 1.499.185 2.98.185 2.98s.184 1.277.722 1.844c.682.74 1.58.711 1.99.788 1.434.145 6.118.192 6.118.192s3.774-.018 6.291-.192c.343-.048 1.113-.048 1.795-.788.538-.567.722-1.845.722-1.845S18 8.695 18 7.195V5.784c0-1.48-.177-2.98-.177-2.98Zm-5.815 3.5L7.14 8.886V3.7l2.204 1.183 2.664 1.423v-.003Z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

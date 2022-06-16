import React from "react";
import SocialContact from "../common/social-contact/index.js";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <div className="hello">Hello there 👋, I'm</div>
          <div className="info-name">Kaitlyn Nguyen</div>
          <div className="education"> CS + Math @ UGA </div>
          <div className="statement">
            {" "}
            I aspire to be a software/ML engineer 👩‍💻.
          </div>
        </div>
        <div className="about-photo">
          <img
            className="picture"
            src="https://cdn.discordapp.com/attachments/908905429302652928/986380526585782282/kissclipart-woman-computer-programmer-clipart-computer-program-462fb3955bf62bad.png"
            alt="girl coder"
          ></img>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;

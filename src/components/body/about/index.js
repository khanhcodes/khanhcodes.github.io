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
          <div className="statement"> I aspire to be a software/ML engineer 👩‍💻.</div>
        </div>
        <div className="about-photo">
          <img
            className="picture"
            src="https://thumbs.dreamstime.com/b/cat-programming-coding-hand-drawn-vector-illustration-cartoon-comic-style-cute-animal-domestic-profession-orange-glasses-178199065.jpg"
            alt="girl coder"
          ></img>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;

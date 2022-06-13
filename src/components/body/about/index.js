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
          <div> CS + Math @ UGA </div>
          <div className="statement"> I aspire to be a software/ML engineer 👩‍💻.</div>
        </div>
        <div className="about-photo">
          <img
            className="picture"
            src="https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=400x300&vertical=top"
            alt="Girl coder"
          ></img>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;

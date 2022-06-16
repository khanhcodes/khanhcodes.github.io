import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project" className="single-web-option">
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#experience" className="single-web-option">
          Experience
        </a>
      </div>
      <div className="web-option">
        <a href="#contact" className="single-web-option">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Web;

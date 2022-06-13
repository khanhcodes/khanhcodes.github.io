import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
            Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skill">
            Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#experience">
            Experience
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
            Contact
        </a>
      </div>
    </div>
  );
}

export default Web;

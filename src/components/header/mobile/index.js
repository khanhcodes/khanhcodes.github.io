import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-br-cross"></i>
      </div>
      <div className="mobile-options" onClick={() => setIsOpen(!isOpen)}>
        <div className="mobile-option">
          <a href="#project">Projects</a>
        </div>
        <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
          <a href="#about-detail">About me</a>
        </div>
        <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
          <a href="#experience">Experience</a>
        </div>
        <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
          <a
            href="https://drive.google.com/file/d/130Q85HsmCGcXMXQiw00mP5QQod_yGovi/view?usp=sharing"
          >
            Resume
          </a>
        </div>
        <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;

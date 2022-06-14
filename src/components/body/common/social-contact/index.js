import React from "react";
import "./social-contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function SocialContact() {
  return (
    <div className="social-contact">
      <a
        href="https://www.linkedin.com/in/nhukhanhng/"
        className="social-icon"
        aria-label="Linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/khanhcodes"
        className="social-icon"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="mailto:ngkhanh14.kn@gmail.com"
        className="social-icon"
        aria-label="Gmail"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a
        href="https://devpost.com/khanhcodes"
        className="social-icon"
        aria-label="Devpost"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faDev} size="2x" />
      </a>
      <i class="fa-regular fa-envelope"></i>
    </div>
  );
}

export default SocialContact;

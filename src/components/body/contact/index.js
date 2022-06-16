import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import SocialContact from "../common/social-contact";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <header className="section-title">Contact</header>
      <div className="contact-container">
        <div className="contact-left">
          <p className="quote">
            "A simple hello could lead to a million things." Contact me!
          </p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            href="https://drive.google.com/uc?export=download&id=130Q85HsmCGcXMXQiw00mP5QQod_yGovi"
            download className="download-link"
          >
            <i class="fi fi-rr-download" />
            <div>Download resume</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

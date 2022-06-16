import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import SocialContact from "../common/social-contact";
import './contact.css';

function Contact() {
  return <div className="contact">
    <header className="section-title">Contact</header>
    <div className="contact-container">
      <div className="contact-left">
        <p>"A simple hello could lead to a million things. Contact me!"</p>
        <SocialContact />
      </div>
      <div className="download">
        <a download href={require('../../../assets/resume.docx').default}>
          <i class="fi fi-rr-download"/>
          Download resume
        </a>

      </div>
    </div>
  </div>;
}

export default Contact;

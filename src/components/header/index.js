import React, { useState } from "react";
import "./header.css";
import Web from "./web/index.js";
import Mobile from "./mobile/index.js";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <a href="/">
        <div className="name">@nhukhanhng</div>
      </a>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-menu-burger menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;

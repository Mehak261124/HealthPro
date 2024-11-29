import logo from "../assests/logo.png";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="header-container">
        <div>
          <img src={logo} alt="IVF Pulse Logo" />
        </div>
        <div className="nav-links">
          <div>Donor Programme</div>
          <div>Fertility Preservation</div>
          <div>Advanced Treatments</div>
          <div>Infertility Treatments</div>
          <div>IVF Testing</div>
          <div>About Us</div>
          <button className="talk-button">
            Talk to Us <span className="arrow">→</span>
          </button>
        </div>
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen && (
        <div className="ham-nav-links">
          <div>Donor Programme</div>
          <div>Fertility Preservation</div>
          <div>Advanced Treatments</div>
          <div>Infertility Treatments</div>
          <div>IVF Testing</div>
          <div>About Us</div>
          <button className="talk-button">Talk to Us</button>
        </div>
      )}
    </>
  );
}

export default Header;
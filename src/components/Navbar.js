// components/Navbar.js
import React, { useState } from "react";
import logo from '../assests/logo.png';
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img id="logo" src={logo} alt="logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Unicode character for hamburger icon */}
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>Donor Programme</li>
        <li>Fertility Preservation</li>
        <li>Advanced Treatments</li>
        <li>Infertility Treatments</li>
        <li>IVF Testing</li>
        <li>About Us</li>
      </ul>

      <button className="talk-button">Talk to Us →</button>
    </header>
  );
}

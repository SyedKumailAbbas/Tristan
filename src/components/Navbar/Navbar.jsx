import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { NavLink } from "react-router-dom";


import Tk from "../../assets/TK logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        {/* Logo/Brand */}
        <div className="navbar__brand">
          <Link to="/">
            <img src={Tk} alt="TK Logo" className="navbar__logo" />
          </Link>
        </div>

        {/* Navigation Menu */}
       <div className="navbar__menu">
  <NavLink to="/about" className="navbar__link">
    About
  </NavLink>
  <NavLink to="/media" className="navbar__link">
    Media
  </NavLink>
  <NavLink to="/keynotes" className="navbar__link">
    Keynotes
  </NavLink>
  <NavLink to="/testimonial" className="navbar__link">
    Testimonials
  </NavLink>

  {/* CTA */}
  <NavLink to="/book-Tristan">
    <button className="navbar__cta">Book Tristan</button>
  </NavLink>
</div>

        {/* Mobile Menu Button */}
        <div className="navbar__mobileBtn">
          <button aria-label="Menu" className="navbar__hamburger">
            <svg
              className="navbar__hamburgerIcon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

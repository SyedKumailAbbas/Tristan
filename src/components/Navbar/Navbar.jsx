import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Tk from "../../assets/TK logo.png";

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference to the menu to check if the click is outside it
  const menuRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking on a menu item
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu if clicked outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div
          className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}
          ref={menuRef}
        >
          <NavLink to="/about" className="navbar__link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/media" className="navbar__link" onClick={closeMenu}>
            Media
          </NavLink>
          <NavLink to="/keynotes" className="navbar__link" onClick={closeMenu}>
            Keynotes
          </NavLink>
          <NavLink
            to="/testimonial"
            className="navbar__link"
            onClick={closeMenu}
          >
            Testimonials
          </NavLink>

          {/* CTA */}
          <NavLink to="/book-Tristan">
            <button className="navbar__cta" onClick={closeMenu}>
              Book Tristan
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar__mobileBtn">
          <button
            aria-label="Menu"
            className="navbar__hamburger"
            onClick={toggleMenu}
          >
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

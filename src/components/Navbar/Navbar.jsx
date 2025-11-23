import React, { useEffect, useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Tk from "../../assets/TK logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // 🔥 Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 10px threshold
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Utility: adds "active" class to current route
  const linkClass = ({ isActive }) =>
    `navbar__link${isActive ? " active" : ""}`;

  return (
    <div
      className={`navbar ${isScrolled ? "navbar--scrolled" : "navbar--top"}`}
    >
      <div className="navbar__inner">
        {/* Logo/Brand */}
        <div className="navbar__brand">
          <Link to="/" onClick={closeMenu}>
            <img src={Tk} alt="TK Logo" className="navbar__logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar__menu">
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/media" className={linkClass} onClick={closeMenu}>
            Media
          </NavLink>
          <NavLink to="/keynotes" className={linkClass} onClick={closeMenu}>
            Keynotes
          </NavLink>
          <NavLink to="/testimonial" className={linkClass} onClick={closeMenu}>
            Testimonials
          </NavLink>

          {/* CTA */}
          <NavLink to="/book-Tristan" onClick={closeMenu}>
            <button className="navbar__cta">Book Tristan</button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar__mobileBtn">
          <button
            aria-label="Menu"
            className="navbar__hamburger"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`navbar__mobileMenu ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <NavLink to="/about" className={linkClass} onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/media" className={linkClass} onClick={closeMenu}>
          Media
        </NavLink>
        <NavLink to="/keynotes" className={linkClass} onClick={closeMenu}>
          Keynotes
        </NavLink>
        <NavLink to="/testimonial" className={linkClass} onClick={closeMenu}>
          Testimonials
        </NavLink>
        <NavLink to="/book-Tristan" onClick={closeMenu}>
          <button className="navbar__cta navbar__cta--full">
            Book Tristan
          </button>
        </NavLink>
      </div>
    </div>
  );
}

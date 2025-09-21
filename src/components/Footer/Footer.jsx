import React from "react";
import "./footer.css";

import Tk from "../../assets/TK logo.png";
import TopBorder from "../Borders/TopBorder";
import navigate from "../../assets/Group 29.svg";
import contactInfo from "../../assets/Group 42.svg";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import spotify from "../../assets/spotify.png";
import youtube from "../../assets/youtube.png";
import medium from "../../assets/medium.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top irregular paint stroke effect */}
      <div className="footer__topstroke">
        <TopBorder />
      </div>

      <div className="footer__container">
        <div className="footer__grid">
          {/* Logo Section */}
          <div className="footer__logoWrap">
            <img src={Tk} alt="TK Logo" className="footer__logo" />
          </div>

          {/* Navigation Section */}
          <div className="footer__navWrap">
            <div className="footer__headingImgWrap">
              <img
                src={navigate}
                alt="Navigate"
                className="footer__headingImg footer__headingImg--navigate"
              />
            </div>

            <nav className="footer__nav">
              <a href="#about" className="footer__link">
                About
              </a>
              <a href="#keynotes" className="footer__link">
                Keynotes
              </a>
              <a href="#testimonials" className="footer__link">
                Testimonials
              </a>
            </nav>
          </div>

          {/* Media Section */}
          <div className="footer__mediaWrap">
            <div className="footer__headingImgSpacer" />
            <div className="footer__mediaLinks">
              <a href="#media" className="footer__link">
                Media
              </a>
              <a href="#book" className="footer__link">
                Book Tristan
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer__contactWrap">
            <div className="footer__headingImgWrap">
              <img
                src={contactInfo}
                alt="Contact Information"
                className="footer__headingImg footer__headingImg--contact"
              />
            </div>

            <div className="footer__contact">
              <div>
                <span className="footer__label">P:</span> (647) 324-8747
              </div>
              <div>
                <span className="footer__label">E:</span>{" "}
                tristanjoshuakim@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="footer__social">
          <div className="footer__socialRow">
            <a
              href="#youtube"
              className="footer__socialLink"
              aria-label="YouTube"
            >
              <img src={youtube} alt="" className="footer__socialIcon" />
            </a>
            <a
              href="#spotify"
              className="footer__socialLink"
              aria-label="Spotify"
            >
              <img src={spotify} alt="" className="footer__socialIcon" />
            </a>
            <a
              href="#linkedin"
              className="footer__socialLink"
              aria-label="LinkedIn"
            >
              <img src={linkedin} alt="" className="footer__socialIcon" />
            </a>
            <a
              href="#instagram"
              className="footer__socialLink"
              aria-label="Instagram"
            >
              <img src={insta} alt="" className="footer__socialIcon" />
            </a>
            <a
              href="#medium"
              className="footer__socialLink"
              aria-label="Medium"
            >
              <img src={medium} alt="" className="footer-medium" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

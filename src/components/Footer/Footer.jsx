import React from "react";
import { Youtube, Music, Linkedin, Instagram } from "lucide-react";
import Tk from "../../assets/TK logo.png";
import TopBorder from "../Borders/TopBorder";
import navigate from "../../assets/Group 29.svg";
import contactInfo from "../../assets/Group 42.svg";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#D4A017] to-[#6E530C] text-white overflow-hidden">
      {/* Top irregular paint stroke effect */}
      <div className="absolute top-0 left-0 w-full h-8">
        <TopBorder />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 items-start border-t border-black">
          {/* Logo Section */}
          <div className="mt-[-10px]">
            <img
              src={Tk}
              alt="TK Logo"
              className="h-[150px] w-auto object-contain filter brightness-0 invert"
            />
          </div>

          {/* Navigation Section */}
          <div className="text-center md:text-left">
            <div className="relative inline-block ">
              <img
                src={navigate}
                alt="Navigate"
                className="h-15 w-auto relative z-10 mb-5 ml-[-25px] "
              />
            </div>

            <nav className="space-y-3">
              <a
                href="#about"
                className="block hover:text-yellow-200 transition-colors duration-200 underline"
              >
                About
              </a>
              <a
                href="#keynotes"
                className="block hover:text-yellow-200 transition-colors duration-200 underline"
              >
                Keynotes
              </a>
              <a
                href="#testimonials"
                className="block hover:text-yellow-200 transition-colors duration-200 underline"
              >
                Testimonials
              </a>
            </nav>
          </div>

          {/* Media Section */}
          <div className="text-center mt-10 md:text-left">
            <div className="relative inline-block mb-6"></div>
            <div className="mt-4">
              <a
                href="#media"
                className="underline hover:text-yellow-200 transition-colors duration-200"
              >
                Media
              </a>
            </div>
            <div>
              <a
                href="#book"
                className="underline hover:text-yellow-200 transition-colors duration-200"
              >
                Book Tristan
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center flex flex-col md:text-left">
            <div className="relative inline-block">
              <img
                src={contactInfo}
                alt="Contact Information"
                className="h-15 w-auto relative z-10 mb-5 ml-[-20px] "
              />
            </div>

            <div className="space-y-3">
              <div>
                <span className="font-semibold">P:</span> (647) 324-8747
              </div>
              <div>
                <span className="font-semibold">E:</span>{" "}
                tristanjoshuakim@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-12 mt-12 pb-8 border-b border-black">
          <a
            href="#youtube"
            className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <Youtube size={24} className="text-black" />
          </a>
          <a
            href="#spotify"
            className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <Music size={24} className="text-black" />
          </a>
          <a
            href="#linkedin"
            className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <Linkedin size={24} className="text-black" />
          </a>
          <a
            href="#instagram"
            className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <Instagram size={24} className="text-black" />
          </a>
          <a
            href="#medium"
            className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <div className="text-black font-bold text-sm">M</div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

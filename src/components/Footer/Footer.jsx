import React from "react";
import { Youtube, Music, Linkedin, Instagram } from "lucide-react";
import Tk from "../../assets/TK logo.png";
import TopBorder from "../Borders/TopBorder";
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#D4A017] to-[#6E530C] text-white overflow-hidden">
      {/* Top irregular paint stroke effect */}
      <div className="absolute top-0 left-0 w-full h-8">
        {/* <svg
          viewBox="0 0 1200 32"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,18 C50,12 80,8 120,15 C180,25 220,10 280,12 C340,14 380,20 420,16 C480,10 520,18 580,14 C640,10 680,22 740,18 C800,14 840,8 900,12 C960,16 1000,24 1080,18 C1140,14 1180,10 1200,12 L1200,0 L0,0 Z"
            fill="#1f2937"
            className="opacity-90"
          />
          <path
            d="M0,22 C60,28 100,16 160,20 C220,24 260,12 320,18 C380,24 420,14 480,16 C540,18 580,26 640,22 C700,18 740,14 800,20 C860,26 900,18 960,16 C1020,14 1080,22 1140,18 C1170,16 1185,14 1200,16 L1200,0 L0,0 Z"
            fill="#374151"
            className="opacity-70"
          />
          <circle
            cx="150"
            cy="12"
            r="2"
            fill="#1f2937"
            className="opacity-60"
          />
          <circle
            cx="450"
            cy="18"
            r="1.5"
            fill="#374151"
            className="opacity-50"
          />
          <circle
            cx="750"
            cy="14"
            r="1"
            fill="#1f2937"
            className="opacity-40"
          />
          <circle
            cx="950"
            cy="20"
            r="1.5"
            fill="#374151"
            className="opacity-45"
          />
          <ellipse
            cx="300"
            cy="16"
            rx="8"
            ry="2"
            fill="#1f2937"
            className="opacity-30"
          />
          <ellipse
            cx="600"
            cy="12"
            rx="6"
            ry="1.5"
            fill="#374151"
            className="opacity-35"
          />
          <ellipse
            cx="1050"
            cy="18"
            rx="10"
            ry="2.5"
            fill="#1f2937"
            className="opacity-25"
          />
        </svg> */}
        <TopBorder />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 items-start border-t border-black">
          {/* Logo Section */}
          <div className="  mt-[-10px]">
            <div className="">
              <img
                src={Tk}
                alt="TK Logo"
                className="h-[150px] w-auto object-contain filter brightness-0 invert"
              />
            </div>
          </div>

          {/* Navigation Section */}
          <div className="text-center md:text-left">
            <div className="relative inline-block mb-6">
              <h3 className="text-xl font-semibold text-white relative z-10 px-4 py-2">
                Navigate
              </h3>
              <div className="absolute inset-0 bg-black opacity-70 transform -rotate-1 rounded"></div>
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
          <div className="text-center md:text-left">
            <div className="relative inline-block mb-6">
              <h3 className="text-xl font-semibold text-white relative z-10 px-4 py-2"></h3>
              <div className="absolute inset-0  opacity-70 transform -rotate-1 rounded"></div>
            </div>
            <div className="mt-4">
              <a
                href="#media"
                className="underline hover:text-yellow-200 transition-colors duration-200 "
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
          <div className="text-center md:text-left">
            <div className="relative inline-block mb-6">
              <h3 className="text-xl font-semibold text-white relative z-10 px-4 py-2">
                Contact Information
              </h3>
              <div className="absolute inset-0 bg-black opacity-70 transform rotate-1 rounded"></div>
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
            className="w-12 h-12 bg-yellow-500  rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 hover:scale-110 transform"
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

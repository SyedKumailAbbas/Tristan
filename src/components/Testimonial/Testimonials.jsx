import React from "react";
import { Play } from "lucide-react";
import RightBorder from "../Borders/RightBorder";
import TopBorder from "../Borders/TopBorder";
import BottomBorder from "../Borders/BottomBorders";
import Vid from "./Vid"; 

const Testimonials = () => {
  return (
    <section className="bg-black pt-20 pb-20 relative overflow-hidden">
      {/* Paint brush header */}
      <div className="relative w-full mb-12">
        <div className="relative">
          {/* Main paint stroke background */}
          <div className="relative bg-gradient-to-r from-[#FFAE00] to-[#FFFFFF] py-8 px-12">
            {/* Irregular top edge */}
            <div className="absolute top-0 left-0 w-full h-4">
              {/* <svg
                viewBox="0 0 1200 16"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 C120,2 210,12 310,6 C380,0 510,10 620,4 C680,8 820,2 880,6 C980,10 990,4 2200,8 L1200,0 L0,0 Z"
                  fill="black"
                />
                <circle cx="150" cy="4" r="1.5" fill="black" opacity="0.7" />
                <circle cx="190" cy="3" r="1.5" fill="black" opacity="0.7" />
                <circle cx="210" cy="2" r="1.5" fill="black" opacity="0.7" />
                <circle cx="250" cy="6" r="1.5" fill="black" opacity="0.7" />
                <circle cx="290" cy="4" r="1.5" fill="black" opacity="0.7" />
                <circle cx="400" cy="2" r="1" fill="black" opacity="0.5" />
                <circle cx="750" cy="6" r="2" fill="black" opacity="0.8" />
                <circle
                  cx="1000"
                  cy="3"
                  r="2"
                  fill="black"
                  opacity="0.6"
                />{" "}
                <circle cx="150" cy="4" r="2" fill="black" opacity="0.7" />
                <circle cx="390" cy="3" r="2" fill="black" opacity="0.7" />
                <circle cx="310" cy="2" r="2" fill="black" opacity="0.7" />
                <circle cx="350" cy="6" r="2" fill="black" opacity="0.7" />
                <circle cx="490" cy="4" r="2" fill="black" opacity="0.7" />
                <circle cx="500" cy="2" r="1" fill="black" opacity="0.5" />
                <circle cx="850" cy="6" r="2" fill="black" opacity="0.8" />
                <circle cx="9000" cy="3" r="1.5" fill="black" opacity="0.6" />
                <circle cx="40" cy="8" r="1.2" fill="black" opacity="0.7" />
                <circle cx="60" cy="9" r="0.8" fill="black" opacity="0.6" />
                <circle cx="75" cy="7.5" r="1.4" fill="black" opacity="0.8" />
                <circle cx="90" cy="8.2" r="1.1" fill="black" opacity="0.6" />
                <circle cx="120" cy="8.5" r="1.3" fill="black" opacity="0.5" />
                <circle cx="135" cy="7.9" r="1.6" fill="black" opacity="0.7" />
                <circle cx="155" cy="8.1" r="1.5" fill="black" opacity="0.6" />
                <circle cx="170" cy="9" r="1.2" fill="black" opacity="0.5" />
                <circle cx="195" cy="7.7" r="1.3" fill="black" opacity="0.6" />
                <circle cx="225" cy="8.4" r="1.4" fill="black" opacity="0.6" />
                <circle cx="250" cy="8.8" r="1.3" fill="black" opacity="0.7" />
                <circle cx="275" cy="7.6" r="1.2" fill="black" opacity="0.5" />
                <circle cx="290" cy="9" r="1.5" fill="black" opacity="0.6" />
                <circle cx="315" cy="7.3" r="1.4" fill="black" opacity="0.5" />
                <circle cx="340" cy="8.9" r="1.3" fill="black" opacity="0.7" />
                <circle cx="370" cy="7.8" r="1.6" fill="black" opacity="0.6" />
                <circle cx="390" cy="9.1" r="1.3" fill="black" opacity="0.7" />
                <circle cx="410" cy="7.5" r="1.2" fill="black" opacity="0.6" />
                <circle cx="430" cy="8.7" r="1.3" fill="black" opacity="0.6" />
                <circle cx="460" cy="7.9" r="1.4" fill="black" opacity="0.7" />
                <circle cx="490" cy="9" r="1.1" fill="black" opacity="0.5" />
                <ellipse
                  cx="520"
                  cy="8"
                  rx="5"
                  ry="1"
                  fill="black"
                  opacity="0.4"
                />
                <ellipse
                  cx="580"
                  cy="7.8"
                  rx="3"
                  ry="1.2"
                  fill="black"
                  opacity="0.4"
                />
                <ellipse
                  cx="630"
                  cy="8.5"
                  rx="4"
                  ry="1"
                  fill="black"
                  opacity="0.3"
                />
                <ellipse
                  cx="300"
                  cy="5"
                  rx="8"
                  ry="1.5"
                  fill="black"
                  opacity="0.4"
                />
                <ellipse
                  cx="600"
                  cy="7"
                  rx="6"
                  ry="2"
                  fill="black"
                  opacity="0.5"
                />
              </svg> */}
              <TopBorder />
            </div>

            {/* Irregular bottom edge */}
            <div className="absolute bottom-0 left-0 w-full h-4">
              {/* <svg
                viewBox="0 0 1200 16"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,16 L0,8 C100,14 200,4 300,10 C400,16 500,6 600,12 C700,8 800,14 900,10 C1000,6 1100,12 1200,8 L1200,16 Z"
                  fill="#1f2937"
                />
                <circle cx="200" cy="12" r="1.5" fill="#1f2937" opacity="0.6" />
                <circle cx="500" cy="10" r="2" fill="#1f2937" opacity="0.8" />
                <circle cx="800" cy="14" r="1" fill="#1f2937" opacity="0.5" />
                <ellipse
                  cx="350"
                  cy="11"
                  rx="5"
                  ry="1.5"
                  fill="#1f2937"
                  opacity="0.7"
                />
                <ellipse
                  cx="950"
                  cy="9"
                  rx="7"
                  ry="2"
                  fill="#1f2937"
                  opacity="0.4"
                />
              </svg> */}

              
              {/* <BottomBorder/>  this border need to be fix */}
            </div>

            {/* Irregular right edge */}
            <div className="absolute right-0 top-0 w-4 h-full">
              <RightBorder />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-black text-center relative z-10">
              TESTIMONIALS
            </h2>
          </div>
        </div>
      </div>

      {/* Video testimonials grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Video 1 - YouTube Embed */}
          <div className="relative group">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-Video">
<Vid videoId="s2qwHgwpnrA" />
            </div>
          </div>

          {/* Video 2 */}
         <div className="relative group">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-Video">
<Vid videoId="VUCJHNkDIhM" />
            </div>
          </div>
        </div>

        {/* See More button */}
        <div className="flex justify-start">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2">
            <span>SEE MORE</span>
            <Play size={16} className="ml-1" fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Decorative paint splatters */}
      <div className="absolute top-20 right-10 w-8 h-8 bg-yellow-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 bg-yellow-600 rounded-full opacity-15"></div>
      <div className="absolute top-1/2 right-20 w-4 h-4 bg-yellow-400 rounded-full opacity-25"></div>
    </section>
  );
};

export default Testimonials;

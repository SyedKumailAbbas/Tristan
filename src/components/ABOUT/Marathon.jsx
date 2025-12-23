import React from "react";
import { Play } from "lucide-react";
import img from "../../assets/Frame 17.png";
import heading from "../../assets/Group 173.svg";
import playIcon from "../../assets/noto_play-button.svg";
import Vid from "../Testimonial/Vid";
import border from "../../assets/Frame 16.svg";

export default function Marathon() {
  return (
    <div className="w-full bg-black to-black overflow-hidden px-4 sm:px-6 lg:p-5 py-6">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="w-full lg:flex-1 p-6 sm:p-8 lg:p-10">
          {/* Achievement Title */}
          <div className="mb-6 sm:mb-8 relative">
            <div className="relative inline-block">
              <img
                src={heading}
                alt="Achievement background"
                className="max-w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Achievement Details */}
          <div className="space-y-4 ml-0 sm:ml-4 lg:ml-6 w-full sm:max-w-xl lg:w-[450px] mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
              <p className="font-montserrat font-semibold text-white text-base sm:text-lg lg:text-[20px]">
                1st in age group at the 42 km Limberlost Challenge.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
              <p className="font-montserrat font-semibold text-white text-base sm:text-lg lg:text-[20px]">
                Overcame 1500m elevation in 35°C heat.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
              <p className="font-montserrat font-semibold text-white text-base sm:text-lg lg:text-[20px]">
                Powered through with relentless drive through mental and
                physical endurance.
              </p>
            </div>

            {/* Watch Video Button */}
            <a
              href="https://www.youtube.com/watch?v=syX9Sfv0aLQ&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3
                         w-full sm:w-auto
                         px-5 sm:px-6 py-3
                         rounded-full bg-[#6E530C] text-white
                         shadow-[0px_4px_4px_0px_#FFBD52]
                         hover:brightness-110 active:scale-[0.99]
                         focus:outline-none
                         mt-4 sm:mt-6
                         lg:relative lg:top-7 no-underline"
            >
              <span className="font-[Montserrat] font-bold uppercase tracking-[0.5%] text-sm sm:text-[15px]">
                WATCH FULL VIDEO HERE
              </span>
              <img
                src={playIcon}
                alt="Play Icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="w-full lg:w-[50%] m-0 sm:m-6 lg:m-10 flex items-center justify-center relative">
          {/* Responsive video frame */}
          <div className="relative w-full max-w-3xl lg:max-w-none aspect-video overflow-hidden rounded-lg">
            <Vid videoId="eHXo2rTlchM" vidpause={false} />
          </div>

          {/* Decorative border: hide on very small screens to prevent overlap */}
          <img
            src={border}
            alt="Video Border"
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}

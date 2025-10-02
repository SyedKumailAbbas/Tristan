import React from "react";
import { Play } from "lucide-react";
import img from "../../assets/Frame 17.png";
import heading from "../../assets/Group 173.svg";
import playIcon from "../../assets/noto_play-button.svg";
import Vid from "../Testimonial/Vid";
import border from "../../assets/Frame 16.svg";
export default function Marathon() {
  return (
    <div className="w-full p-5 bg-black to-black overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="flex-1 p-8 lg:p-10">
          {/* Achievement Title */}
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <img src={heading} alt="Achievement background" />
            </div>
          </div>

          {/* Achievement Details */}
          <div className="space-y-4 ml-6  w-[450px] mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-3 flex-shrink-0"></div>
              <p
                className="font-montserrat font-semibold  "
                style={{ fontSize: "20px" }}
              >
                1st in age group at the 42 km Limberlost Challenge.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-3 flex-shrink-0"></div>
              <p
                className="font-montserrat font-semibold  "
                style={{ fontSize: "20px" }}
              >
                Overcame 1500m elevation in 35°C heat.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-3 flex-shrink-0"></div>
              <p
                className="font-montserrat font-semibold  "
                style={{ fontSize: "20px" }}
              >
                Powered through with relentless drive through mental and
                physical endurance.
              </p>
            </div>

            {/* Watch Video Button */}
            <button className="inline-flex px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none relative top-7 ">
              <span className="font-[Montserrat] font-bold text-[10 px] uppercase tracking-[0.5%]">
                WATCH FULL VIDEO HERE
              </span>
              <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-[50%] m-10 flex items-center justify-center relative">
  <Vid videoId="eHXo2rTlchM" />

  <img
    src={border}
    alt="Video Border"
    className="absolute inset-0 w-full h-full z-20 pointer-events-none"
  />
</div>

      </div>
    </div>
  );
}

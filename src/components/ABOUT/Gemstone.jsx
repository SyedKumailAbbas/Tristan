import React from "react";
import { Play } from "lucide-react";
import img from "../../assets/Frame 18.png";
import heading from "../../assets/Group 120.png";
import playIcon from "../../assets/noto_play-button.svg";

export default function Marathon() {
  return (
    <div className="w-full p-5 bg-black  overflow-hidden">
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
          <div className="space-y-4 ml-20  w-[450px] mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-4 flex-shrink-0"></div>
              <p className="font-montserrat font-semibold text-white  " style={{ fontSize: '20px' }}>
                Built a handcrafted jewelry brand from passion to profit.{" "}
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-4 flex-shrink-0"></div>
              <p className="font-montserrat font-semibold  text-lg leading-relaxed text-white " style={{ fontSize: '20px' }}>
                Designed and sold 200+ gemstone bracelets at markets and
                university events..
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-3 flex-shrink-0"></div>
              <p className="font-montserrat font-semibold text-white " style={{ fontSize: '20px' }}>
                Earned customer loyalty through quality craftsmanship and
                authentic storytelling.{" "}
              </p>
            </div>

            {/* Watch Video Button */}
            <a
              href="https://medium.com/@tristanjoshuakim/how-i-turned-a-high-school-hobby-into-a-university-business-and-pulled-an-all-nighter-to-make-it-b4bfaaf7a40d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none relative top-7 -left-4"
            >
              <span className="font-[Montserrat] font-bold text-[15px] uppercase tracking-[0.5%]">
                Read Article HERE
              </span>
              <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
            </a>

          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-[50%] m-10 flex items-center justify-center">
          <img
            src={img}
            alt="Marathon achievement"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Play } from "lucide-react";
import img from "../../assets/Frame 17.png";
import heading from "../../assets/Group 117.png";
import playIcon from "../../assets/noto_play-button.svg";

export default function Marathon() {
  return (
    <div className="w-full p-5 bg-black  ">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="w-[47%] m-10 flex items-center justify-center">
          <img
            src={img}
            alt="Marathon achievement"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Image Section */}
        <div className="flex-1 p-8 lg:p-10">
          {/* Achievement Title */}
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <img src={heading} alt="Achievement background" />
            </div>
          </div>

          {/* Achievement Details */}
          <div className="space-y-4 ml-12  w-[450px] mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-3 flex-shrink-0"></div>
              <p className="font-montserrat font-semibold  " style={{ fontSize: '20px' }}>
                Leads weddings, corporate, and private events as MC,
                choreographer, and creative director.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-3 flex-shrink-0"></div>
              <p className="font-montserrat font-semibold  " style={{ fontSize: '20px' }}>
                Recently brought energy and coordination to an intimate wedding
                reception.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-3 flex-shrink-0"></div>
              <p className="font-montserrat font-semibold  " style={{ fontSize: '20px' }}>
                “Thank you for going above and beyond for our wedding 😊” –
                Happy Bride
              </p>
            </div>

            <a
              href="https://medium.com/@tristanjoshuakim/how-i-accidentally-launched-my-own-dance-entertainment-business-without-realizing-it-d114ac2fcb00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none relative top-7"
            >
              <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
              <span className="font-[Montserrat] font-bold text-[15px] uppercase tracking-[0.5%]">
                Read Article Here
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

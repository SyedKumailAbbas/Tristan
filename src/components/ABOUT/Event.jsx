import React from "react";
import { Play } from "lucide-react";
import img from "../../assets/Frame 17.png";
import heading from "../../assets/Group 117.png";

export default function Marathon() {
  return (
    <div className="w-full p-5 bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="w-[50%] m-10 flex items-center justify-center">
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
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="font-bold text-gray-300 text-lg leading-relaxed">
                Leads weddings, corporate, and private events as MC,
                choreographer, and creative director.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="font-bold text-gray-300 text-lg leading-relaxed">
                Recently brought energy and coordination to an intimate wedding
                reception.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="font-bold text-gray-300 text-lg leading-relaxed">
                “Thank you for going above and beyond for our wedding 😊” –
                Happy Bride
              </p>
            </div>

            {/* Watch Video Button */}
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>WATCH FULL VIDEO HERE</span>
              <Play size={18} className="fill-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

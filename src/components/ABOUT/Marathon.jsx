import React from 'react';
import { Play } from 'lucide-react';
import brushBg from "../../assets/Group 51 (1).svg";


export default function Marathon() {
  return (
    <div className="w-full w-full p-5 bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="flex-1 p-8 lg:p-10">
          {/* Achievement Title */}
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <img 
                src={brushBg} 
                alt="Achievement background" 
                className="w-auto h-16 lg:h-20"
              />
             
            </div>
          </div>

          {/* Achievement Details */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                1st in age group at the 42 km Limberlost Challenge.
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Overcame 1500m elevation in 35°C heat.
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Powered through with relentless drive through mental and physical endurance.
              </p>
            </div>
          </div>

          {/* Watch Video Button */}
          <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span>WATCH FULL VIDEO HERE</span>
            <Play size={18} className="fill-current" />
          </button>
        </div>

        {/* Right Video Section */}
        <div className="w-[50%] m-10 relative">
          <div className="h-64 lg:h-full bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-orange-400">
            {/* Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10"></div>
            
        
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-xl">
                <Play size={24} className="text-black fill-current ml-1" />
              </button>
            </div>

             </div>
        </div>
      </div>
    </div>
  );
}
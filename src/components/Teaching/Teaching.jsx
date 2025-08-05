import React from "react";
import { Play } from "lucide-react";

export default function Teaching() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-lg relative overflow-hidden">
      {/* Golden accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400"></div>

      <div className="flex flex-col lg:flex-row items-center ">
        {/* Left content */}
        <div className="flex-1 ml-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            HOW TEACHING
            <br />
            CHILDREN CHANGED
            <br />
            MY{" "}
            <span className="relative inline-block">
              <span
                className="text-yellow-400 relative z-10 font-serif italic text-5xl"
                style={{ fontFamily: "cursive" }}
              >
                Heart
              </span>
              {/* More authentic sketchy circle */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 110 50"
                style={{ transform: "scale(1.3)", transformOrigin: "center" }}
              >
                <path
                  d="M8,25 C6,15 12,8 22,10 C32,6 42,8 52,10 C62,6 72,8 82,12 C92,8 98,18 96,25 C98,32 92,38 82,36 C72,40 62,38 52,36 C42,40 32,38 22,36 C12,40 6,32 8,25"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </span>
          </h1>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
            "It's important to carry the knowledge and wisdom of someone older
            but to dream like a child who doesn't yet know what they can't do,
            because truly, your potential is limitless."
          </p>

          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Play className="w-5 h-5 fill-current" />
            READ FULL BROADCAST
          </button>
        </div>

        {/* Right video preview */}
        <div className="flex-1 relative">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            {/* Video frame with golden border */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-1 rounded-lg">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                {/* Simulated video content */}
                <div className="aspect-video bg-gradient-to-br from-blue-200 via-pink-200 to-purple-200 relative">
                  {/* Simulated people in the video */}
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="bg-red-400 rounded-full w-16 h-16 absolute left-1/4 top-1/3"></div>
                    <div className="bg-blue-300 rounded-full w-12 h-12 absolute right-1/4 top-1/2"></div>
                    <div className="bg-yellow-300 rounded-full w-10 h-10 absolute left-1/2 bottom-1/3"></div>
                    <div className="bg-green-300 rounded-full w-14 h-14 absolute left-1/3 bottom-1/4"></div>

                    {/* Simulated text overlay */}
                    <div className="absolute top-4 left-4 bg-white bg-opacity-80 px-2 py-1 rounded text-xs text-gray-800 font-medium">
                      LIVE
                    </div>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 transition-all cursor-pointer">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-400 rounded-full opacity-5 blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-5 blur-xl"></div>
    </div>
  );
}

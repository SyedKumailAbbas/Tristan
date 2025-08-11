import React from "react";
import { Play } from "lucide-react";
import teaching from "../../assets/teaching.mp4"; // Assuming you have a teaching SVG icon
import broadcast from "../../assets/simple-icons_readme.svg";
import border from "../../assets/Frame 16.svg";
export default function Teaching() {
  return (
    <div className="bg-black p-8 rounded-lg relative overflow-hidden">
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

          <button className="px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none">
                <img src={broadcast} alt="Broadcast" className="w-6 h-6" />
                <span className="font-[Montserrat] font-bold text-xs uppercase tracking-[0.5%]">Watch Full Podcast</span>
            </button>

        </div>

        {/* Right video preview */}
    {/* Right video preview */}
{/* Right video preview */}
{/* Right video preview */}
<div className="flex-1">
  {/* Frame box: fixed size via aspect ratio */}
  <div className="relative w-full aspect-[16/9] overflow-hidden shadow-2xl">
    {/* Border stays full-size */}
    <img
      src={border}
      alt=""
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
    />

    {/* Video fills the box, then we shrink it visually */}
    <video
      className="absolute top-1/2 left-1/2 w-[80%] h-[90%] -translate-x-1/2 -translate-y-1/2 object-contain"
      style={{ transformOrigin: "center" }}
      src={teaching}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  </div>
</div>

</div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-400 rounded-full opacity-5 blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-5 blur-xl"></div>
    </div>
  );
}

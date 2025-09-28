import React from "react";
import Vid from "../../components/Testimonial/Vid";
import playIcon from "../../assets/noto_play-button.svg";
import Bg from "../../assets/Rectangle 14.svg";

const PanelistSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-12 px-6 grid md:grid-cols-2 gap-8 items-center"
      style={{ backgroundImage: `url("${Bg}")` }}
    >
      {/* Left side: YouTube video */}
      <div className="flex justify-center">
        <div className="w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <Vid videoId="dQw4w9WgXcQ" />{" "}
          {/* Replace with your actual YouTube videoId */}
        </div>
      </div>

      {/* Right side: Text + Button */}
      <div className="flex flex-col justify-center items-center space-y-6 text-center">
        <p className="text-white font-[Poppins] font-semibold text-[18px] leading-relaxed max-w-lg">
          Tristan was invited to be a panelist at Toronto Metropolitan
          University to support first-year students with guidance on
          involvement, direction, and navigating the student experience. He took
          the initiative to document and expand the reach of this experience
          through a YouTube video, aimed at helping students across campuses.
        </p>

        <button className="self-center inline-flex px-8 py-3 rounded-full bg-[#6E530C] text-white items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none">
          <span className="font-[Montserrat] font-bold text-sm uppercase tracking-wide">
            Watch FULL VIDEO HERE
          </span>
          <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default PanelistSection;

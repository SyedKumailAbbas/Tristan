import React from "react";
import Cover from "../../assets/Frame 14.svg"; // The podcast cover image
import playIcon from "../../assets/noto_play-button.svg"; // The play button
import LimitlessLogo from "../../assets/Group 50.svg"; // Assuming LimitLess is an SVG
import { Link } from "react-router-dom";

export default function Podcast() {
  return (
    <div className="bg-gradient-to-r from-[#FFAE00] to-[#000000] text-white p-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Layout: stack on mobile, side-by-side on large screens */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left: text */}
          <div className="space-y-4 w-full max-w-md lg:max-w-none">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[690px] [word-spacing:0.1em] leading-snug lg:leading-normal font-bold tracking-[0.5%] uppercase"
              style={{ fontFamily: "Montserrat", fontWeight: 700 }}
            >
              Tristan’s Podcast That <br className="hidden sm:block" />
              Helps You Step Into <br className="hidden sm:block" />
              Your {/* Desktop: keep your original inline logo positioning */}
              <img
                src={LimitlessLogo}
                alt="LimitLess Logo"
                className="hidden lg:inline h-13 ml-[145px] mt-[-135px]"
              />
            </h1>

            {/* Mobile/tablet: show a neat logo under the title (no desktop change) */}
            <img
              src={LimitlessLogo}
              alt="LimitLess Logo"
              className="block lg:hidden h-10 mt-3"
            />

            {/* First normal line */}
            <p className="text-base sm:text-[18px] w-full lg:w-[650px] font-[Montserrat] font-semibold text-white leading-normal">
              Everyone has a story. This podcast gives those stories a voice.
            </p>

            {/* Bold + Normal */}
            <p className="text-sm sm:text-base w-full lg:w-[650px] text-white font-[Montserrat] font-medium leading-relaxed lg:leading-tight">
              <span className="font-extrabold">Enhancing Awareness:</span> The
              Power of Stories creates a safe space for honest, emotional
              conversations that bring out the resilience, wisdom, and strength
              in each guest. These episodes are more than interviews—they’re a
              reminder that we are never alone, and that every challenge holds
              the power to help us grow.
            </p>

            {/* Italic emphasis */}
            <p className="text-sm sm:text-base w-full lg:w-[650px] text-white font-[Montserrat]">
              <span className="font-extrabold italic">
                Tune in and see how this podcast drives the heart of the
                Limitless Potential Movement.
              </span>
            </p>

            {/* CTA */}
            <div className="pt-5">
              <button className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-[#6E530C] text-white shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none w-full sm:w-auto">
                <Link
                  to="/media#podcast-carousel-section"
                  style={{ transition: "background 0.4s, color 0.4s" }}
                >
                  <span className="font-[Montserrat] font-bold text-xs sm:text-sm uppercase tracking-[0.5%] relative -top-[2px]">
                    Listen to Full Podcast
                  </span>
                </Link>
                <img
                  src={playIcon}
                  alt="Play Icon"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
            </div>
          </div>

          {/* Right: cover image */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[520px]">
            <img src={Cover} alt="Podcast Cover" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

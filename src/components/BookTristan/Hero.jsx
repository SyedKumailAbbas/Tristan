import React from "react";
import heroimg from "../../assets/bookhero.png";
import heading from "../../assets/headingform.png";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#292104] via-[#292104] to-[#8F730E] px-4 py-8 md:px-8 md:pt-[180px] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        {/* Left: image */}
        <div className="w-fit mx-auto lg:mx-0">
          <img
            src="/imgs/bookhero.png"
            alt=""
            className="w-[min(92vw,680px)] h-auto lg:w-auto"
          />
        </div>

        {/* Right: heading image + paragraph */}
        <div className="flex-1 text-white mt-2 lg:mt-0 w-full">
          <img
            src={heading}
            alt=""
            className="w-[min(92vw,720px)] h-auto mx-auto lg:mx-0 lg:w-auto"
          />

          <p
            className="
              mt-8
              text-center
              text-base sm:text-lg md:text-xl lg:text-[20px]
              font-semibold leading-relaxed
              mx-auto lg:mx-0
              lg:mr-40
              max-w-[72ch]
              break-words
            "
          >
            Thank you for being here! If you're looking to book a speaker who
            moves with purpose (on stage and in life) you're in the right place.
            I speak, perform, and serve to help audiences realize their
            limitless potential regardless of age or background. If you're
            interested in something entirely new, I'd love to hear your vision.
          </p>
        </div>
      </div>
    </div>
  );
}

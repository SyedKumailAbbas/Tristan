import React from "react";
import playIcon from "../../assets/noto_play-button.svg";
import Vid from "./Vid";
import testimonial from "../../assets/Group 12.png";
import podcast from "../../assets/Group 126.png";
import keynotes from "../../assets/Group 237.png";
import { Heading } from "../Heading/heading";

const Testimonials = ({ title = "TESTIMONIALS", videoIds = [], seeMore }) => {
  const hasSeeMore = Boolean(seeMore && (seeMore.onClick || seeMore.href));
  const seeMoreLabel = seeMore?.label ?? "SEE MORE";

  let headingImage;
  if (title === "keynotes") {
    headingImage = keynotes;
  } else if (title === "podcast") {
    headingImage = podcast;
  } else {
    headingImage = testimonial;
  }

  const SeeMoreControl = () => {
    if (!hasSeeMore) return null;
    const baseClasses =
      "px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none";
    if (seeMore.href) {
      return (
        <a href={seeMore.href} className={baseClasses}>
          <span className="font-[Montserrat] font-bold text-xs uppercase tracking-[0.5%]">
            {seeMoreLabel}
          </span>
          <img src={playIcon} alt="Play ICON" className="w-6 h-6" />
        </a>
      );
    }
    return (
      <button className={baseClasses} onClick={seeMore.onClick} type="button">
        <span className="font-[Montserrat] font-bold text-xs uppercase tracking-[0.5%]">
          {seeMoreLabel}
        </span>
        <img src={playIcon} alt="Play ICON" className="w-6 h-6" />
      </button>
    );
  };

  return (
    <section className="bg-black w-full pt-0 pb-20 relative overflow-clip">
      {/* Paint brush header (clamped) */}
      <div
        className={`relative w-full mb-12 overflow-x-hidden ${
          title === "keynotes" ? "mt-40" : "mt-10"
        }`}
      >
        {" "}
        <div className="relative max-w-full">
          {/* Ensure Heading image is responsive inside Heading component */}
          <Heading
            imgSrc={headingImage}
            altText={title}
            className="block w-full max-w-full h-auto"
          />
        </div>
      </div>

      {/* Video testimonials grid area (content width limited, bg still full-bleed) */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 xl:gap-24 mb-12">
          {videoIds.slice(0, 4).map((id, idx) => (
            <div key={id || idx} className="relative group">
              <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-Video w-full">
                {/* Make sure Vid -> iframe uses width:100%, height:100% */}
                <Vid videoId={id} className="absolute inset-0 w-full h-full" />
              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        {hasSeeMore && (
          <div className="flex justify-start">
            <SeeMoreControl />
          </div>
        )}
      </div>

      {/* Decorative paint splatters (won’t cause overflow due to overflow-clip on section) */}
      <div className="absolute top-20 right-10 w-8 h-8 bg-yellow-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 bg-yellow-600 rounded-full opacity-15"></div>
      <div className="absolute top-1/2 right-20 w-4 h-4 bg-yellow-400 rounded-full opacity-25"></div>
    </section>
  );
};

export default Testimonials;

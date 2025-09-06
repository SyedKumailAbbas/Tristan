import React from "react";
import heroimg from "../../assets/bookhero.png";
import heading from "../../assets/headingform.png";
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#292104] via-[#292104] to-[#8F730E] p-8 md:pt-[180px] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center ">
        {/* Frame box: fixed size via aspect ratio */}
        <div className=" w-fit ">
          <img src={heroimg} alt="" className="" />
        </div>

        <div className="flex-1 text-white">
          <img src={heading} alt="" className="" />
          <p className="text-[25px] mr-40 font-semibold  text-center text-white leading-relaxed mt-8 break-words">
            Thank you for being here! If you're looking to book a speaker who
            moves with purpose (as stage soul in life) you're in the right
            place. I speak, perform, and serve to help audiences realize their
            limitless potential regardless of age or background. If you're
            interested in something entirely new, I'd love to hear your vision.
          </p>
        </div>
      </div>
    </div>
  );
}

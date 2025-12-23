import React from "react";
import img from "../../assets/Frame 17.png";
import heading from "../../assets/Group 117.png";
import playIcon from "../../assets/noto_play-button.svg";

export default function Marathon() {
  return (
    <div className="w-full bg-black px-4 sm:px-6 lg:px-5 py-6 lg:py-5">
      <div className="flex flex-col lg:flex-row">
        {/* Right Section (text) — show FIRST on mobile, SECOND on desktop */}
        <div className="order-1 lg:order-2 w-full lg:flex-1 p-6 sm:p-8 lg:p-10">
          {/* Achievement Title */}
          <div className="mb-6 sm:mb-8 relative">
            <div className="relative inline-block">
              <img
                src={heading}
                alt="Achievement background"
                className="max-w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Achievement Details */}
          <div className="space-y-4 ml-0 sm:ml-6 lg:ml-12 w-full sm:max-w-xl lg:w-[450px] mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-2 sm:mt-3 flex-shrink-0" />
              <p className="font-montserrat font-semibold text-white text-base sm:text-lg leading-relaxed">
                Leads weddings, corporate, and private events as MC,
                choreographer, and creative director.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-2 sm:mt-3 flex-shrink-0" />
              <p className="font-montserrat font-semibold text-white text-base sm:text-lg leading-relaxed">
                Recently brought energy and coordination to an intimate wedding
                reception.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-2 sm:mt-3 flex-shrink-0" />
              <p className="font-montserrat font-semibold text-white text-base sm:text-lg leading-relaxed">
                “Thank you for going above and beyond for our wedding 😊” –
                Happy Bride
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://medium.com/@tristanjoshuakim/how-i-accidentally-launched-my-own-dance-entertainment-business-without-realizing-it-d114ac2fcb00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-5 sm:px-6 py-3
                         rounded-full bg-[#6E530C] text-white shadow-[0px_4px_4px_0px_#FFBD52]
                         hover:brightness-110 active:scale-[0.99] focus:outline-none mt-4 sm:mt-6 lg:relative lg:top-7"
            >
              <img src={playIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-[Montserrat] font-bold uppercase tracking-[0.5%] text-sm sm:text-[15px]">
                Read Article Here
              </span>
            </a>
          </div>
        </div>

        {/* Left Content Section (image) — show SECOND on mobile, FIRST on desktop */}
        <div className="order-2 lg:order-1 w-full lg:w-[47%] m-0 sm:m-6 lg:m-10 flex items-center justify-center">
          <img
            src={img}
            alt="Marathon achievement"
            className="w-full h-auto rounded-lg shadow-lg max-w-3xl lg:max-w-none"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}

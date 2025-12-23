import React from "react";
import img from "../../assets/Frame 18.png";
import heading from "../../assets/Group 120.png";
import playIcon from "../../assets/noto_play-button.svg";

export default function Marathon() {
  return (
    <div className="w-full bg-black overflow-hidden px-4 sm:px-6 lg:px-5 py-6 lg:py-5">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="w-full lg:flex-1 p-6 sm:p-8 lg:p-10">
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
          <div
            className="
              space-y-4
              ml-0 sm:ml-8 lg:ml-20
              w-full sm:max-w-xl lg:w-[450px]
              mb-8
            "
          >
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-2 sm:mt-4 flex-shrink-0" />
              <p className="font-montserrat font-semibold text-white text-base sm:text-lg leading-relaxed">
                Built a handcrafted jewelry brand from passion to profit.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-2 sm:mt-4 flex-shrink-0" />
              <p className="font-montserrat font-semibold text-white text-base sm:text-lg leading-relaxed">
                Designed and sold 200+ gemstone bracelets at markets and
                university events.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mt-2 sm:mt-3 flex-shrink-0" />
              <p className="font-montserrat font-semibold text-white text-base sm:text-lg leading-relaxed">
                Earned customer loyalty through quality craftsmanship and
                authentic storytelling.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://medium.com/@tristanjoshuakim/how-i-turned-a-high-school-hobby-into-a-university-business-and-pulled-an-all-nighter-to-make-it-b4bfaaf7a40d"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-3
                w-full sm:w-auto
                px-5 sm:px-6 py-3
                rounded-full bg-[#6E530C] text-white
                shadow-[0px_4px_4px_0px_#FFBD52]
                hover:brightness-110 active:scale-[0.99]
                focus:outline-none
                mt-4 sm:mt-6
                lg:relative lg:top-7 lg:-left-4
              "
              aria-label="Read the article on Medium"
            >
              <span className="font-[Montserrat] font-bold uppercase tracking-[0.5%] text-sm sm:text-[15px]">
                Read Article Here
              </span>
              <img src={playIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-[50%] m-0 sm:m-6 lg:m-10 flex items-center justify-center">
          <img
            src={img}
            alt="Jewelry brand preview"
            className="w-full h-auto rounded-lg shadow-lg max-w-3xl lg:max-w-none"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}

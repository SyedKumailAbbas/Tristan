import image from "../../assets/Group 248.svg";
import playIcon from "../../assets/noto_play-button(2).svg";
import "./headimage.css";

export default function Headtristan() {
  return (
    <div className="relative">
      <img src="https://pub-94f7f5d00cd94150915de158d63cafdd.r2.dev/Group%20248.svg" alt="" className="w-full" />

      {/* Button 1 - Top Left */}
      <a href="#corp">
        <button
          className="
            absolute 
            btn-top-left
            top-[89%] left-[6%] 
            lg:top-[90%] lg:left-[7%]
            group inline-flex items-center gap-2 rounded-full  px-0.5 py-0.25
            lg:px-4 lg:py-2
            font-['Montserrat'] text-[5px] sm:text-[13px] lg:text-[18px] font-bold tracking-[0.5px]
            bg-[#ffae00] text-white shadow-lg
          "
        >
          Click to learn more
          <img src={playIcon} className="w-2 h-2 sm:w-4 sm:h-4 md:w-6 md:h-6" />
        </button>
      </a>

      {/* Button 2 - Center */}
      <a href="#highschool">
        <button
          className="
            absolute 
            btn-center 
            top-[89%] left-1/2 -translate-x-1/2
            lg:top-[90%]
            group inline-flex items-center gap-2 rounded-full  px-0.5 py-0.25
            lg:px-4 lg:py-2
            font-['Montserrat'] text-[5px] sm:text-[13px] lg:text-[18px] font-bold tracking-[0.5px]
            bg-[#ffae00] text-white shadow-lg
          "
        >
          Click to learn more
          <img src={playIcon} className="w-2 h-2  sm:w-4 sm:h-4 md:w-6 md:h-6" />
        </button>
      </a>

      {/* Button 3 - Bottom Right */}
      <a href="#university">
        <button
          className="
            absolute 
            btn-bottom-right
            bottom-[7%] right-[6%]
            lg:bottom-[5%] lg:right-[7%]
            group inline-flex items-center gap-2 rounded-full  px-0.5 py-0.25
            lg:px-4 lg:py-2
            font-['Montserrat'] text-[5px] sm:text-[13px] lg:text-[18px] font-bold tracking-[0.5px]
            bg-[#ffae00] text-white shadow-lg
          "
        >
          Click to learn more
          <img src={playIcon} className="w-2 h-2   sm:w-4 sm:h-4 md:w-6 md:h-6" />
        </button>
      </a>
    </div>
  );
}

// Hero.jsx
import heroBg from "../../assets/About.svg"; // ← change to your image file
import playIcon from "../../assets/noto_play-button.svg";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Buttons over image */}
      <div className="relative z-10 text-left pt-[15vh] px-[4vw] text-white">
        <div className="flex flex-row gap-4 justify-start items-center mt-[25rem] ml-[3rem]">
          <button className="rounded-full bg-[#ffae00] text-white py-3 px-7 text-base [font-family:'Montserrat',_sans-serif] font-medium cursor-pointer transition-transform duration-200 ease-linear shadow-[0_5px_10px_rgb(245,245,245)]">
            Unlock Your Purpose
          </button>

          <button className="group inline-flex items-center gap-[0.65rem] bg-transparent text-[#f5c518] [font-family:'Montserrat',_sans-serif] font-medium not-italic text-[19px] leading-[1] tracking-[0.4px] py-[0.55rem] px-[1.4rem] border-2 border-transparent rounded-full cursor-pointer transition-colors duration-200 mt-[2.1rem]">
            <img src={playIcon} alt="" className="w-6 h-6 flex-shrink-0" />
            <span className="group-hover:underline">
              <strong>Watch&nbsp;Tristan&nbsp;In&nbsp;Action</strong>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

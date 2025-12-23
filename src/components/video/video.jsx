import "./video.css";
import bgVideo from "../../assets/Main Video.mp4";
import playIcon from "../../assets/noto_play-button.svg";
import Border from "../../assets/Group 100.svg"
export default function Hero() {
  return (
    <div className="relative w-full aspect-video">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Frame overlay around video */}
      <img
        src={Border}
        alt="Video Frame"
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none transform scale-[1.01]"
      />

      <div className="absolute inset-0 flex items-end justify-start p-6 sm:p-9 md:p-12 z-20 z-20">
        <a
          href="https://vimeo.com/1099140601"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#6E530C] 
    text-white 
    flex items-center justify-center
    gap-2 sm:gap-3 md:gap-4
    rounded-full
    px-2 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-3
    shadow-[0px_4px_4px_0px_#FFBD52]
    hover:cursor-pointer
    focus:outline-none
    transition-all duration-300"
        >
          <span className="font-[Montserrat] font-bold uppercase tracking-wide
    text-[0.45rem] sm:text-xs md:text-sm lg:text-base">
            Watch Tristan in Action
          </span>
          <img src={playIcon} alt="Play Icon" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </a>

      </div>
    </div>
  );
}

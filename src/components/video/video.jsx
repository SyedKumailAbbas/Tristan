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
        <button className="px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none">
          <span className="font-[Montserrat] font-bold text-xs md:text-sm uppercase tracking-wide">
            Watch Tristan in Action
          </span>
          <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

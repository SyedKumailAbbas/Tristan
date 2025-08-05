import "./video.css";
import bgVideo from "../../assets/Main Video.mp4";
import playIcon from "../../assets/noto_play-button.svg";

export default function Hero() {
  return (
    <div className="relative video-container">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Button Over the Video */}
      <button className="absolute top-[553px] left-[101px] px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none " >
        <span className="font-[Montserrat] font-bold text-[10 px] uppercase tracking-[0.5%]">Watch Tristan in Action</span>
        <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
      </button>
    </div>
  );
}

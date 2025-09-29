import Tristan from "../../assets/Group 130 (1).svg";
import playIcon from "../../assets/noto_play-button.svg";
import FINDBOX from "../../assets/Find out what Tristan has done....svg";
import Camera from "../../assets/Vector (2).svg";
import music from "../../assets/music_bt.svg";
import news from "../../assets/newspaper.svg";
import mic from "../../assets/Vector (1).svg";
import video from "../../assets/Vector (3).svg";
import Film from "../../assets/Vector (4).svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* Left side with text and button */}
      <div className="header-left">
        <div className="header-content">
          <h1 className="main-headline">
            <img src={FINDBOX} alt="Find out what Tristan has done" className="find-text-image" />
          </h1>
          
          <h2 className="sub-headline relative top-[5rem]">
            <span className="sub-text">Explore all of Tristan's presence </span>
            <span className="sub-text">
              in <span className="highlight-help">helping others...</span>
            </span>
          </h2>
          
          <button className="inline-flex px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none relative top-[9.5rem]  " >
              <span className="font-[Montserrat] font-bold text-[10 px] uppercase tracking-[0.5%]">Watch his journey</span>
              <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
            </button>
        </div>
      </div>
      
      {/* Right side with Tristan's image and icons */}
      <div className="header-right">
        <div className="tristan-image-container">
          <img src={Tristan} alt="Tristan" className="tristan-image" />
          
          {/* Media icons scattered around */}
          <div className="media-icon camera-icon">
              <img src={Camera} alt="Camera" />
          </div>
          
          <div className="media-icon microphone-icon">
             <img src={mic} alt="mic" />
          </div>
          
          <div className="media-icon video-icon">
             <img src={video} alt="video" />
          </div>
          
          <div className="media-icon clapperboard-icon">
            <img src={news} alt="news" />
          </div>
          
          <div className="media-icon diploma-icon">
             <img src={music } alt="music " />
          </div>
          
          <div className="media-icon music-icon">
             <img src={Film} alt="Film" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
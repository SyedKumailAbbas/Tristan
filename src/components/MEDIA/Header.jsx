import Tristan from "../../assets/Group 130.svg";
import playIcon from "../../assets/noto_play-button.svg";
import FINDBOX from "../../assets/Find out what Tristan has done....svg";
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
          
          <div className="media-icon microphone-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          </div>
          
          <div className="media-icon video-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="23 7 16 12 23 17 23 7"/>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </svg>
          </div>
          
          <div className="media-icon clapperboard-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
              <line x1="4" y1="22" x2="4" y2="15"/>
            </svg>
          </div>
          
          <div className="media-icon diploma-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
          </div>
          
          <div className="media-icon music-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18V5l12-2v13"/>
              <circle cx="6" cy="18" r="3"/>
              <circle cx="18" cy="16" r="3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
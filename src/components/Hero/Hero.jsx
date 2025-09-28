//hero.jsx
import "./Hero.css";
import bgVideo from "../../assets/Main Video.mp4";
import brushBg from "../../assets/Group 51 (1).svg";
import playIcon from "../../assets/noto_play-button.svg";
import overlaySvg from "../../assets/Rectangle 13.svg"; 
export default function Hero() {
  return (
    <div className="video-container">
       {/* ✅ Background GIF instead of video */}
      <img
        src="https://pub-94f7f5d00cd94150915de158d63cafdd.r2.dev/Homepage%20(Background%20Black%20Opacity)%20Speaker%20Reel%20%20(1).gif"
        alt="Background animation"
        className="bg-video"
      />

      {/* ───── overlay text ───── */}
      <div className="video-overlay">
        <div className="hero-text">
          <h2 className="tag-top">YOU HAVE</h2>
          <div className="tag-bottom">
            <img src={brushBg} alt="" className="brush" />
          </div>
        </div>

        <div className="hero-buttons">
          <button className="hero-cta">Unlock Your Purpose</button>
          <button className="play-cta">
            <img src={playIcon} alt="" className=" w-8 h-8" />
            <span><strong>Watch&nbsp;Tristan&nbsp;In&nbsp;Action</strong></span>
          </button>
        </div>
      </div>

    </div>
  );
}

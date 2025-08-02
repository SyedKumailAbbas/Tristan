//hero.jsx
import "./Hero.css";
import bgVideo from "../../assets/C0660.mp4";
import brushBg from "../../assets/Group 51 (1).svg";
import playIcon from "../../assets/noto_play-button.svg";

export default function Hero() {
  return (
    <div className="video-container">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ───── overlay text ───── */}
      <div className="video-overlay">
        <div className="hero-text">
          <h2 className="tag-top">YOU HAVE</h2>
          <div className="tag-bottom">
            <img src={brushBg} alt="" className="brush" />
          </div>
        </div>

        <div className="hero-buttons">
          <button className="cta">Unlock Your Purpose</button>
          <button className="play-cta">
            <img src={playIcon} alt="" className="play-icon" />
            <span><strong>Watch&nbsp;Tristan&nbsp;In&nbsp;Action</strong></span>
          </button>
        </div>
      </div>


    </div>
  );
}

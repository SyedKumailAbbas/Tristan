import "./Hero.css";
import brushBg from "../../assets/Group 51 (1).svg";
import playIcon from "../../assets/noto_play-button.svg";

export default function Hero() {
  return (
    <div className="video-container">
      {/* ✅ Background GIF */}
      <img
        src="https://pub-94f7f5d00cd94150915de158d63cafdd.r2.dev/Runnning%20(1).gif"
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

        {/* ───── Buttons ───── */}
        <div className="hero-buttons">
          {/* 🔗 Button 1 — internal link */}
          <a href="/book-Tristan" className="hero-cta">
            Unlock Your Purpose
          </a>

          {/* 🔗 Button 2 — external video link */}
          <a
            href="https://vimeo.com/1099140601"
            target="_blank"
            rel="noopener noreferrer"
            className="play-cta"
          >
            <img src={playIcon} alt="" className="w-8 h-8" />
            <span>
              <strong>Watch&nbsp;Tristan&nbsp;In&nbsp;Action</strong>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

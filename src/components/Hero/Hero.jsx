import "./Hero.css";
import bgVideo from "../../assets/C0660.mp4";
import brushBg from "../../assets/Group 51 (1).svg";

export default function Hero() {
  return (
    <div className="video-container">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ───── overlay text ───── */}
      <div className="video-overlay">
        <h2 className="tag-top">YOU HAVE</h2>

        {/* stroke + text stacked together */}
        <div className="tag-bottom">
          <img src={brushBg} alt="" className="brush" />
        </div>
      </div>
    </div>
  );
}

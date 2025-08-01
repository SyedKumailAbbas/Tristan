import "../../App.css";
import speakerImg from "../../assets/speaker.svg"; // replace with your actual PNG/JPG
import polygonImg from "../../assets/Polygon 1.svg";
import rectBack from "../../assets/Rectangle 5.svg"; // ← adjust file name as needed
import rectFront from "../../assets/Rectangle 3.svg"; // ← adjust file name
export default function Banner() {
  return (
    <div className="banner">
      {/* LEFT half */}
      <div className="banner-left">
        <p>
          Many are just scratching the surface of what is possible for their
          life, but I believe everyone is called to something greater than
          themselves… My <span className="highlight">mission</span> is to
          inspire and help people discover their{" "}
          <span className="highlight">truth</span> and
          <span className="highlight"> purpose</span> from within.
        </p>

        <button className="cta">Book Tristan</button>
      </div>

      {/* RIGHT half */}
      <div className="banner-right">
        <div className="visual-wrapper">
          <img
            src={polygonImg}
            alt="Polygon background"
            className="polygon-bg"
          />
          <img
            src={speakerImg}
            alt="Tristan speaking"
            className="speaker-img"
          />
        </div>
        <img src={rectBack} alt="Back rectangle" className="rect-back " />
        <img src={rectFront} alt="Front rectangle" className="rect-front" />
      </div>
    </div>
  );
}

import React from "react";
import { Play, Building, School, GraduationCap } from "lucide-react";
import keynoteheader from "../../assets/Group 81.png";
import Vectorbg from "../../assets/Vector.png";
import uni from "../../assets/Group 60.svg";
import school from "../../assets/Vector.svg";
import corp from "../../assets/Group 36.svg";
import identity from "../../assets/Group 28 (1).svg";
import connection from "../../assets/Group 26 (1).svg";
import purpose from "../../assets/Group 28 (2).svg";
import possiblity from "../../assets/Group 26 (2).svg";
import presence from "../../assets/Group 26 (1).svg";
import resilence from "../../assets/Group 28.svg";
import mindset from "../../assets/Group 27.svg";
import momentum from "../../assets/Group 26.svg";
import courage from "../../assets/Group 27 (1).png";
const Card = ({ iconsrc: iconsrc, title, tags }) => (
  <div
    className="pt-5 relative shadow-2xl backdrop-blur-sm flex flex-col items-center "
    style={{
      backgroundColor: "#6E530C",
      boxShadow:
        "0 30px 60px rgba(0,0,0,.35), 0 0 0 2px rgba(247,126,0,.2) inset, 0 25px 80px rgba(247,126,0,.25)",
    }}
  >
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-3xl font-semibold text-yellow-200">{title}</h2>
      <img src={iconsrc} alt="" className="w-7 h-7" />
    </div>
    <ul className="items-center mb-8 p-0">
      <li className="relative w-fit text-2xl items-center align-middle mx-2 my-2 list-none">
        {title.toLowerCase() === "high schools" && (
          <>
            <img
              src={identity}
              alt="Polygon background"
              className="polygon-bg"
            />
            <img
              src={courage}
              alt="Polygon background"
              className="polygon-bg"
            />
            <img
              src={connection}
              alt="Polygon background"
              className="polygon-bg"
            />
          </>
        )}

        {title.toLowerCase() === "university" && (
          <>
            <img
              src={purpose}
              alt="Polygon background"
              className="polygon-bg"
            />
            <img
              src={presence}
              alt="Polygon background"
              className="polygon-bg"
            />
            <img
              src={possiblity}
              alt="Polygon background"
              className="polygon-bg"
            />
          </>
        )}

        {title.toLowerCase() === "corporations" && (
          <>
            <img
              src={resilence}
              alt="Polygon background"
              className="polygon-bg"
            />
            <img
              src={mindset}
              alt="Polygon background"
              className="polygon-bg"
            />
            <img
              src={momentum}
              alt="Polygon background"
              className="polygon-bg"
            />
          </>
        )}
      </li>
    </ul>
    <button
      className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
      style={{
        background: "#FF9800",
        color: "#1a1a1a",
        boxShadow: "0 6px 18px rgba(247,126,0,.35)",
      }}
    >
      <div className="grid place-items-center w-5 h-5 rounded-full bg-black/25">
        <Play className="w-3.5 h-3.5" />
      </div>
      Click to learn more
      <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
        ▸
      </span>
    </button>
  </div>
);

export default function Keynotes() {
  return (
    <div
      className="relative md:p-12 min-h-screen"
      style={{ background: "linear-gradient(to right, #000000, #FFAE00)" }}
    >
      {/* Keynotes heading with hand-drawn oval */}
      <div className="mb-10 relative flex justify-start">
        <div className="relative">
          {/* Hand-drawn oval background */}

          <img
            src={keynoteheader}
            alt="Keynotes"
            className="relative z-10 h-[150px] object-contain "
          />
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 w-full gap-20 mx-auto">
        <Card
          iconsrc={corp}
          title="Corporations"
          tags={["Resilience", "Mindset", "Momentum"]}
        />
        <Card
          iconsrc={school}
          title="High Schools"
          tags={["Identity", "Courage", "Connection"]}
        />
        <Card
          iconsrc={uni}
          title="University"
          tags={["Purpose", "Presence", "Possibilities"]}
        />
      </div>

      {/* subtle vignette like pic1 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 120px 160px rgba(0,0,0,.25)" }}
      />
    </div>
  );
}

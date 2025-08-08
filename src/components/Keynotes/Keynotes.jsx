import React from "react";
import { Play, Building, School, GraduationCap } from "lucide-react";
import keynoteheader from "../../assets/Group 81.png";
import Vectorbg from '../../assets/Vector.png';
import uni from '../../assets/Group 60.svg'
import school from '../../assets/Vector.svg'
import corp from '../../assets/Group 36.svg';
const Card = ({ iconsrc: iconsrc, title, tags }) => (
  <div
    className="rounded-lg p-6 h-[600px] relative border shadow-2xl backdrop-blur-sm"
    style={{
      backgroundColor: "#6E530C",
      borderColor: "#FFB800",
      boxShadow:
        "0 30px 60px rgba(0,0,0,.35), 0 0 0 2px rgba(255,184,0,.2) inset, 0 25px 80px rgba(255,174,0,.25)",
    }}
  >
   <div className="flex items-center gap-3 mb-6">
      <h2 className="text-3xl font-semibold text-yellow-200">{title}</h2>
      <img src={iconsrc} alt="" className="w-7 h-7" />
    </div>
    <ul className="items-center mb-8 p-0">
      {tags.map((t) => (
        <li key={t} className="relative w-fit items-center align-middle mx-2 my-2 list-none">
          {/* Vector background */}
          <span
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Vectorbg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              filter: "drop-shadow(0 3px 6px rgba(0,0,0,.25))",
              transform: "translateZ(0)",
            }}
          />
          {/* label */}
          <span className="relative text-2xl z-10 px-5 py-3 font-semibold tracking-wide text-black whitespace-nowrap text-base">
            {t}
          </span>
        </li>
      ))}
    </ul>
    <button
      className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
      style={{
        background: "#FFB800",
        color: "#1a1a1a",
        boxShadow: "0 6px 18px rgba(255,184,0,.35)",
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
      className="relative p-8 md:p-12 min-h-screen"
      style={{ background: "linear-gradient(to right, #00000040, #FFAE00)" }}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
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
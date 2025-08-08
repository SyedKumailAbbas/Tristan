import React from "react";
import { Play, Building, School, GraduationCap } from "lucide-react";
import bg from "../../assets/Vector.png";
import keynoteheader from "../../assets/Group 81.png";

const Tag = ({ label }) => (
  <span className="relative inline-flex items-center align-middle mx-1 my-1">
    {/* background image */}
    <span
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        // small lift and glow like the mock
        filter: "drop-shadow(0 2px 6px rgba(0,0,0,.25))",
        transform: "translateZ(0)",
      }}
    />
    {/* label */}
    <span className="relative z-10 px-3 py-1 font-semibold tracking-wide text-black whitespace-nowrap">
      {label}
    </span>
  </span>
);

const Card = ({ icon: Icon, title, tags }) => (
  <div
    className="rounded-lg p-6 relative border shadow-2xl backdrop-blur-sm"
    style={{
      backgroundColor: "#6E530C",
      borderColor: "#FFB800",
      boxShadow:
        "0 30px 60px rgba(0,0,0,.35), 0 0 0 2px rgba(255,184,0,.2) inset, 0 25px 80px rgba(255,174,0,.25)",
    }}
  >
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-7 h-7 text-yellow-300" strokeWidth={2.4} />
      <h2 className="text-2xl font-semibold text-yellow-200">{title}</h2>
    </div>

    <div className="flex flex-wrap items-center mb-8">
      {tags.map((t) => (
        <Tag key={t} label={t} />
      ))}
    </div>

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
      {/* top hand-drawn golden line */}
      <div className="w-full h-2 mb-6 md:mb-10">
        <svg viewBox="0 0 800 20" className="w-full h-full">
          <path
            d="M0,10 Q50,5 100,12 Q150,8 200,11 Q250,6 300,13 Q350,9 400,10 Q450,7 500,12 Q550,8 600,11 Q650,6 700,10 Q750,8 800,10"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Keynotes heading image */}
      <div className="mb-10 relative flex justify-center">
        <img
          src={keynoteheader}
          alt="Keynotes"
          className="max-h-16 md:max-h-20 object-contain"
        />
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card
          icon={Building}
          title="Corporations"
          tags={["Resilience", "Mindset", "Momentum"]}
        />
        <Card
          icon={School}
          title="High Schools"
          tags={["Identity", "Courage", "Connection"]}
        />
        <Card
          icon={GraduationCap}
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

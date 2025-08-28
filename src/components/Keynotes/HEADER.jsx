import React from "react";
import background from "../../assets/Group 227.svg";

// card icons
import uni from "../../assets/Group 60.svg";
import school from "../../assets/Vector.svg";
import corp from "../../assets/Group 36.svg";

// inside-card badge images
import identity from "../../assets/Group 28 (1).svg";
import connection from "../../assets/Group 26 (1).svg";
import purpose from "../../assets/Group 28 (2).svg";
import possiblity from "../../assets/Group 26 (2).svg";
import presence from "../../assets/Group 27 (2).svg";
import resilence from "../../assets/Group 28.svg";
import mindset from "../../assets/Group 27.svg";
import momentum from "../../assets/Group 26.svg";
import courage from "../../assets/Group 27 (1).png";
import keynote_experience_brush from "../../assets/Group 51 (3).svg";
// play icon
import playIcon from "../../assets/noto_play-button(2).svg";

const Card = ({ iconsrc, title }) => (
    <div
        className="pt-5 pb-5 relative shadow-2xl backdrop-blur-sm flex flex-col items-center rounded-2xl"
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
                        <img src={identity} alt="" />
                        <img src={courage} alt="" />
                        <img src={connection} alt="" />
                    </>
                )}

                {title.toLowerCase() === "university" && (
                    <>
                        <img src={purpose} alt="" />
                        <img src={presence} alt="" />
                        <img src={possiblity} alt="" className="w-[180px]" />
                    </>
                )}

                {title.toLowerCase() === "corporations" && (
                    <>
                        <img src={resilence} alt="" />
                        <img src={mindset} alt="" />
                        <img src={momentum} alt="" />
                    </>
                )}
            </li>
        </ul>

        <button
            className="group inline-flex items-center gap-2 rounded-full px-4 py-2 font-['Montserrat'] text-[18px] font-bold tracking-[0.5px]"
            style={{
                background: "#ffae00",
                color: "#ffffff",
                boxShadow: "0 6px 18px rgba(247,126,0,.35)",
            }}
        >
            <span>Click to learn more</span>
            <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
        </button>
    </div>
);

export default function JANU() {
    return (
        <div className="relative isolate min-h-screen w-full overflow-hidden">
            {/* Background */}
            <img
                src={background}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="hero-text">
                <h2 className="font-[Montserrat] font-bold text-[65px] leading-none tracking-[0.5%] not-italic">
                    THE LIMITLESS POTENTIAL
                </h2>

                <div className="relative inline-block">
                    <img
                        src={keynote_experience_brush}
                        alt=""
                        className="w-[clamp(16rem,40vw,40rem)] h-auto block -mt-[0.9rem]"
                    />
                </div>
            </div>

            {/* Cards only */}
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
                    <Card iconsrc={corp} title="Corporations" />
                    <Card iconsrc={school} title="High Schools" />
                    <Card iconsrc={uni} title="University" />
                </div>
            </div>

            {/* Optional subtle vignette */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{ boxShadow: "inset 0 120px 160px rgba(0,0,0,.25)" }}
            />
        </div>
    );
}

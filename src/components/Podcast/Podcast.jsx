import Cover from "../../assets/Frame 14.svg"; // The podcast cover image
import playIcon from "../../assets/noto_play-button.svg"; // The play button
import LimitlessLogo from "../../assets/Group 50.svg"; // Assuming LimitLess is an SVG
import { Link } from "react-router-dom";
export default function Podcast() {
  return (
    <div className="bg-gradient-to-r from-[#FFAE00] to-[#000000] text-white p-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="space-y-4 max-w-md">
          <h1
            className="text-3xl  [word-spacing:0.3em] leading-normal	 font-bold tracking-[0.5%] uppercase"
            style={{ fontFamily: "Montserrat", fontWeight: 700 }}
          >
            Tristan’s Podcast That Helps You Step Into Your{" "}
            <img
              src={LimitlessLogo}
              alt="LimitLess Logo"
              className="inline h-13 ml-[95px] mt-[-70px]"
            />
          </h1>
          {/* First normal line */}
          <p className="text-[14px] font-[Montserrat] font-semibold text-white leading-normal">
            Everyone has a story. This podcast gives those stories a voice.
          </p>

          {/* Bold + Normal */}
<<<<<<< Updated upstream
          <p className="text-sm w-[550px] text-white font-[Montserrat]">
            <span className="font-extrabold">Enhancing Awareness:</span> The Power of
=======
          <p className="text-md w-[550px] text-white font-[Montserrat]">
            <span className="font-bold">Enhancing Awareness:</span> The Power of
>>>>>>> Stashed changes
            Stories creates a safe space for honest, emotional conversations
            that bring out the resilience, wisdom, and strength in each guest.
            These episodes are more than interviews—they’re a reminder that we
            are never alone, and that every challenge holds the power to help us
            grow.
          </p>

          {/* Italic emphasis */}
          <p className="text-sm  text-white font-[Montserrat]">
            <span className="font-extrabold  italic
             ">
              Tune in and see how this podcast drives the heart of the Limitless
              Potential Movement.
            </span>
          </p>
<<<<<<< Updated upstream
          <div className="pt-5">
            <button className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#6E530C] text-white shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none">
              <Link
                to="/media#podcast-carousel-section"
                // className="transform -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none"
                style={{ transition: "background 0.4s, color 0.4s" }}
              >
                <span className="font-[Montserrat] font-bold text-xs uppercase tracking-[0.5%] relative -top-[2px] ">
=======
          <div className="flex justify-center pt-10">
            <Link
              to="/media#podcast-carousel-section"
              // className="transform -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none"
              style={{ transition: "background 0.4s, color 0.4s" }}
            >
              <button className="transform -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-[#6E530C] text-white flex items-center gap-3 shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none">
                <span className="font-[Montserrat] font-bold text-xs uppercase tracking-[0.5%]">
>>>>>>> Stashed changes
                  Listen to Full Podcast
                </span>
                <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src={Cover} alt="Podcast Cover" />
        </div>
      </div>
    </div>
  );
}

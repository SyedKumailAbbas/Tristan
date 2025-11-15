import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import teaching from "../../assets/Main Video.mp4";
import broadcast from "../../assets/simple-icons_readme.svg";
import border from "../../assets/Frame 16.svg";
import Heart from "../../assets/Group 243 (1).svg";
import "./Teaching.css";

export default function Teaching() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 👀 When section is visible, play with audio
          video.muted = false;
          video.play().catch(() => {});
        } else {
          // ⏸️ Pause when scrolled out of view
          video.pause();
        }
      },
      { threshold: 0.3 } // trigger when 30% of video is visible
    );

    if (video) observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black p-4 sm:p-6 lg:p-8 rounded-lg relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
        {/* Left content */}
        <div className="flex-1 w-full lg:ml-20 text-white px-4 sm:px-6 lg:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            HOW TEACHING
            <br />
            CHILDREN CHANGED
            <br />
            MY{" "}
            <span className="inline-block align-middle">
              <img src={Heart} alt="Heart" className="w-22 h-12 sm:w-22 sm:h-12 lg:w-auto lg:h-auto" />
            </span>
          </h1>

          <p className="mb-6 sm:mb-8 w-full max-w-[500px] text-base sm:text-lg md:text-xl lg:text-2xl !leading-relaxed italic-text">
            <span className="quote-color">"</span>
            It's important to carry the knowledge and wisdom of someone older
            but to dream like a child who doesn't yet know what they can't do,
            because truly, your potential is limitless.
            <span className="quote-color">"</span>
          </p>

          <a
            href="https://medium.com/@tristanjoshuakim/how-teaching-children-changed-my-heart-3bad081eba8f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-[#6E530C] text-white shadow-[0px_4px_4px_0px_#FFBD52] hover:cursor-pointer focus:outline-none text-[10px] sm:text-xs"
          >
            <img src={broadcast} alt="Broadcast" className="w-4 h-4 sm:w-6 sm:h-6" />
            <span className="font-[Montserrat] font-bold uppercase tracking-[0.5%]">
              Read Full Blog Post
            </span>
          </a>
        </div>

        {/* Right video preview */}
        <div className="flex-1 w-full px-4 sm:px-6 lg:px-0">
          <div className="relative w-full aspect-[16/9] overflow-hidden shadow-2xl">
            {/* Video (auto play only when visible) */}
            <video
              ref={videoRef}
              className="absolute top-1/2 left-1/2 w-full h-full max-w-[686px] max-h-[452px] -translate-x-1/2 -translate-y-1/2 object-contain"
              style={{ transformOrigin: "center" }}
              src="https://pub-94f7f5d00cd94150915de158d63cafdd.r2.dev/Limitless%20Potential.mp4"
              playsInline
              preload="metadata"
              controls={false}
            />

            {/* Border overlay */}
            <img
              src={border}
              alt="Video Border"
              className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-400 rounded-full opacity-5 blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-5 blur-xl"></div>
    </div>
  );
}

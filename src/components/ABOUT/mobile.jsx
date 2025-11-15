import { useEffect, useRef, useState } from "react";
import performance from "../../assets/Performance-Motivational.svg";
import video from "../../assets/Dance Video .MP4";
import border from "../../assets/mobile border.svg";

export default function Mobile() {
  const videoRef = useRef(null);
  const counterRef = useRef(null);
  const [displayCount, setDisplayCount] = useState(0);
  const [daysSinceStart, setDaysSinceStart] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // 🗓 Define Tristan’s journaling start date
    const startDate = new Date("2022-11-09");
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysSinceStart(diffDays);

    // ✨ Animate count from 0 to diffDays
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const stepTime = Math.max(Math.floor(duration / diffDays), 1);

    const counter = setInterval(() => {
      start += 1;
      setDisplayCount(start);
      if (start >= diffDays) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, []);
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => { });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 } // plays when at least 50% visible
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Background layer reversed: black to #FFAE00 */}
      <div
        className="fixed inset-0 bg-gradient-to-r from-black/80 to-[#FFAE00] -z-10"
        aria-hidden
      />

      {/* Foreground content */}
      <div className="relative z-10 w-full p-6 sm:p-8 flex flex-col items-start">
        {/* Top Heading */}
        <div className="flex flex-wrap items-baseline justify-center sm:justify-start mb-3 sm:mb-0">
          <h1 className="text-[clamp(1.8rem,6vw,3.5rem)] font-bold font-[Montserrat] leading-tight tracking-wide text-white">
            How
          </h1>
          <h1 className="-ml-2 sm:ml-3  -mt-1 sm:mt-0 text-[clamp(1.5rem,8vw,4.5rem)] font-bold font-[Caveat] leading-tight tracking-wide text-[#FFAE00]">
            Performance-Motivational
          </h1>
        </div>

        {/* Keynote Speaking + Came About */}
        <div className="relative -mt-3 sm:-mt-4 flex flex-wrap items-baseline justify-center sm:justify-start  gap-x-2">
          <span className="border-b-[0.15em] border-[#FFAE00] pb-[0.05em]   font-bold font-[Montserrat] leading-tight tracking-wide text-[clamp(1.8rem,5vw,3rem)] text-white mr-3">
            Keynote Speaking
          </span>


          <span className="text-[clamp(1.8rem,5vw,3rem)] font-bold font-[Montserrat] leading-tight tracking-wide text-white">
            Came About:
          </span>
        </div>

        {/* Paragraph + Video side by side */}
        <div className="mt-6 flex flex-col lg:flex-row gap-6 w-full">
          {/* Paragraph Text Section */}
          <div className="w-full lg:w-[75%] text-white font-[Montserrat] text-[clamp(1rem,2vw,1.1rem)] font-semibold leading-tight tracking-normal mt-5 lg:mt-10 text-center lg:text-left">
            <p className="mb-5">
              Tristan’s journey began in high school, during one of the darkest
              chapters of his life. The pandemic left him battling anxiety,
              depression, intense emotions, and constant overthinking. He hit
              rock bottom. But in that struggle, he discovered something
              unexpected: <span className="gold-word">hope</span> and a quiet
              refusal to let things stay the same.
            </p>

            <p className="mb-5">
              That moment sparked his personal development journey. Through journaling for{" "}
              <span className="text-[#FFAE00] ">
                {displayCount.toLocaleString()}
              </span>{" "}
              days (and counting), meditating daily for over 1,000 days, and consistently
              pushing beyond his comfort zone, Tristan began to rebuild not just his
              mindset, but his sense of <span className="gold-word">purpose</span>.
            </p>

            <p className="mb-5">
              One of the turning points came in Grade 11, when a teacher
              discovered he was a dancer and invited him to perform for the
              class. Tristan was terrified, but said yes. That performance
              changed everything. For the first time, he connected with what he
              was meant to do... not just perform, but truly connect. To move
              people through movement, and then through message.
            </p>

            <p className="mb-5">
              That spark is what he now carries into every stage he steps onto.
            </p>

            <p>
              Since then, Tristan has blended performance with motivational
              keynote speaking, delivering talks at schools, conferences, and
              events of all sizes. Dance became more than movement: it became a{" "}
              <span className="gold-word">bridge</span>. A way to open hearts
              before opening minds. It’s how he creates space for meaningful
              conversations around growth, resilience, and rediscovering what’s
              possible.
            </p>

            <style>{`
              .gold-word {
                color: #fff;
                background-image: linear-gradient(#FFAE00, #FFAE00);
                background-position: 0 100%;
                background-repeat: no-repeat;
                background-size: 100% 0.20em;
                padding-bottom: 0.08em;
              }
            `}</style>

            <a
              href="/book-Tristan"
              className="hidden sm:inline-block mt-10 inline-block bg-[#ffae00] text-white font-bold text-base sm:text-lg 
              px-6 sm:px-7 py-2.5 sm:py-3 rounded-full 
              shadow-[0_5px_10px_rgba(255,174,0,0.4)] 
              transition-transform duration-200 ease-in-out hover:-translate-y-1"
            >
              Book Tristan
            </a>
          </div>

          {/* Video Section */}
          <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <video
              ref={videoRef}
              src={video}
              loop
              playsInline
              className="w-full h-auto max-h-[500px] object-contain"
            />

            <p className="1.5xl:pl-10 1.5xl:pr-10 mt-3 text-center   font-[Poppins] font-semibold italic text-[clamp(1rem,2.5vw,1.125rem)] text-white max-w-md">
              “Live footage of the defining moment which changed everything.”
            </p>
            {/* Mobile button */}
            <a
              href="/book-Tristan"
              className="inline-block sm:hidden mt-6 bg-[#ffae00]  font-[Montserrat] text-white font-bold text-base px-6 py-2.5 rounded-full
      shadow-[0_5px_10px_rgba(255,174,0,0.4)]
      transition-transform duration-200 ease-in-out hover:-translate-y-1"
            >
              Book Tristan
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

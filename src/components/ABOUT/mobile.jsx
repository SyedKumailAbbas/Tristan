import performance from "../../assets/Performance-Motivational.svg";
import video from "../../assets/Dance Video .MP4";
import border from "../../assets/mobile border.svg";

export default function Mobile() {
  return (
    <>
      {/* Background layer reversed: black to #FFAE00 */}
      <div
        className="fixed inset-0 bg-gradient-to-r from-black/80 to-[#FFAE00] -z-10"
        aria-hidden
      />

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen w-full p-6 sm:p-8 flex flex-col items-start">
        {/* Top Heading */}
        <div className="flex flex-wrap items-baseline">
          <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold font-[Montserrat] leading-tight tracking-wide text-white">
            How
          </h1>
          <h1 className="ml-2 sm:ml-3 text-[clamp(2.5rem,8vw,4.5rem)] font-bold font-[Caveat] leading-tight tracking-wide text-[#FFAE00]">
            Performance-Motivational
          </h1>
        </div>

        {/* Keynote Speaking + Came About */}
        <div className="relative -mt-3 sm:-mt-4 inline-flex flex-wrap items-baseline">
          <span className="relative mr-3 text-[clamp(1.8rem,5vw,3rem)] font-bold font-[Montserrat] leading-tight tracking-wide text-white">
            Keynote Speaking
            <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[#FFAE00]" />
          </span>

          <span className="text-[clamp(1.8rem,5vw,3rem)] font-bold font-[Montserrat] leading-tight tracking-wide text-white">
            Came About:
          </span>
        </div>

        {/* Paragraph + Video side by side */}
        <div className="mt-6 flex flex-col lg:flex-row gap- w-full">
          {/* Paragraph Text Section */}
          <div className="max-w-3xl text-white font-[Montserrat] text-[clamp(1rem,2vw,1.1rem)] font-semibold leading-relaxed tracking-normal">
            <p className="mb-4">
              “Tristan’s journey began in high school, during one of the darkest
              chapters of his life. The pandemic left him battling anxiety,
              depression, intense emotions, and constant overthinking. He hit
              rock bottom. But in that struggle, he discovered something
              unexpected: <span className="gold-word">hope</span>—and a quiet
              refusal to let things stay the same.
            </p>

            <p className="mb-4">
              That moment sparked his personal development journey. Through
              journaling for 1,088 days (and counting), meditating daily for
              over 1,000 days, and consistently pushing beyond his comfort zone,
              Tristan began to rebuild—not just his mindset, but his sense of{" "}
              <span className="gold-word">purpose</span>.
            </p>

            <p className="mb-4">
              One of the turning points came in Grade 11, when a teacher
              discovered he was a dancer and invited him to perform for the
              class. Tristan was terrified, but said yes. That performance
              changed everything. For the first time, he connected with what he
              was meant to do—not just perform, but truly connect. To move
              people through movement, and then through message.
            </p>

            <p>
              Since then, Tristan has blended performance with motivational
              keynote speaking, delivering talks at schools, conferences, and
              events of all sizes. Dance became more than movement—it became a{" "}
              <span className="gold-word">bridge</span>. A way to open hearts
              before opening minds. It’s how he creates space for meaningful
              conversations around growth, resilience, and rediscovering what’s
              possible.”
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

            {/* Button below paragraphs */}
            <button className="mt-8 bg-[#ffae00] text-white font-bold text-base sm:text-lg px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-[0_5px_10px_rgba(255,174,0,0.4)] transition-transform duration-200 ease-in-out hover:-translate-y-1">
              Book Tristan
            </button>
          </div>

          {/* Video Section */}
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <video
              src={video}
              controls={false}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-auto max-h-[500px] object-contain"
            />

            {/* Caption below video */}
            <p className="mt-3 text-center font-[Poppins] font-semibold italic text-[clamp(1rem,2.5vw,1.125rem)] text-white max-w-md">
              “Live footage of the defining moment which changed everything.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

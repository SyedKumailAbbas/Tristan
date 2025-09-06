import background from "../../assets/Group 245 (1).svg";
import Tristan from "../../assets/Rectangle 17.svg";

export default function High() {
  return (
    <section className="relative min-h-screen">
      {/* Background image fills the section */}
      <img
        src={background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover -z-10 pointer-events-none select-none"
      />

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen items-center gap-10 px-6 md:px-16 py-20">
        {/* Left: Tristan image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Tristan}
            alt="Tristan"
            className="max-w-md w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 max-w-lg p-8 text-black space-y-6 bg-white/70 rounded-xl backdrop-blur-sm">
          <div>
            <h2 className="font-bold text-lg">
              1. Identity – Rewriting Your Inner Transcript
            </h2>
            <p className="mt-2">
              A transformational experience combining performance, reflection, and personal
              storytelling. Students will explore who they are beyond labels: rewriting negative
              self-talk, stepping into self-worth, and shaping the narrative of who they want to
              become.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg">
              2. Courage – Becoming Your Own Role Model
            </h2>
            <p className="mt-2">
              How do you lead when you're still finding yourself? Tristan shares the struggles of
              comparison, fear of failure, and anxiety; and how to rise above them with small acts
              of courage, consistency, and vision.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg">
              3. Connection – Friends, Fears, and Finding Your Path
            </h2>
            <p className="mt-2">
              Tristan dives into peer pressure, belonging, and building meaningful friendships.
              Through relatable stories and interactive moments, students will learn how to attract
              the right energy and community into their lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// corporation.jsx
import bg from "../../assets/BACKGORUND GREY.svg";
import header from "../../assets/CORPORATION keynotes.svg";
import photo from "../../assets/Group 167.svg"; // <-- your left image

export default function Corp() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Top header */}
      <div className="p-6 flex justify-center">
        <img src={header} alt="Corporation Header" className="h-40 w-auto" />
      </div>

      {/* Two-column section */}
      <section className="mx-auto max-w-7xl px-6 py-12 grid gap-10 lg:grid-cols-[520px,1fr] items-center">
        {/* Left: image stack */}
        <div className="relative flex justify-center lg:justify-start">

          <img
            src={photo}
            alt="Event"
            className="relative w-[520px] max-w-full"
          />
        </div>

        {/* Right: content card */}
        <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl text-gray-100">
          <p className="text-center text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            In today’s fast-paced world, teams need more than productivity tips.
            These keynotes help organizations elevate culture, reframe challenges,
            and perform with clarity and intention.
          </p>

          <ol className="mt-8 space-y-6">
            <li>
              <h3 className="font-semibold text-white">
                1. Resilience — Turning Setbacks into Setups for Growth
              </h3>
              <div className="mt-2 flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#f7a600] flex-none" />
                <p className="text-gray-200">
                  Every team faces pressure, change, and burnout—but how they
                  respond makes the  difference. This keynote teaches leaders and
                  employees how to reframe adversity, build  emotional stamina, and
                  use challenges as fuel for innovation and connection.

                </p>
              </div>
            </li>
            <li>
              <h3 className="font-semibold text-white">
                2. Mindset — Shaping Culture from the Inside Out
              </h3>
              <div className="mt-2 flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#f7a600] flex-none" />
                <p className="text-gray-200">
                  Culture starts with how people think. This session equips organizations
                  with the mental  frameworks and belief systems that drive better
                  collaboration, communication, and  confidence—creating aligned,
                  purpose-driven teams that thrive under pressure.
                </p>
              </div>
            </li>
            <li>
              <h3 className="font-semibold text-white">
                3. Momentum — Building High-Performance Teams That Last
              </h3>
              <div className="mt-2 flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#f7a600] flex-none" />
                <p className="text-gray-200">

                  Momentum isn’t just about speed—it’s about direction, energy, and
                  sustainability. This  talk helps companies spark long-term motivation
                  by focusing on clarity, community, and  small consistent wins that
                  compound into powerful results.

                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

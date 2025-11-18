import Hero from "./hero.jsx";
import CORPORATION from "./hero2.jsx";

export default function HeroWrapper() {
  return (
    <div className="w-full">

      {/* Show ONLY on LG and above */}
      <div className="hidden lg:block">
        <Hero />
      </div>

      {/* Show on SM, MD, and default */}
      <div className="block lg:hidden">
        <CORPORATION />
      </div>

    </div>
  );
}

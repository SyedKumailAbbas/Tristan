import React from "react";
import heroimg from "../../assets/bookhero.png";
const HeroSection = ({ personImage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600 relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left Side - Person Image */}
          <div className="flex-shrink-0">
            <img
              src={heroimg}
              alt="Speaker"
              className="w-80 h-96 object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-6 max-w-lg ml-12">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-6xl font-bold leading-tight tracking-wide">
                LET'S UNL
                <span className="relative">
                  <span className="text-yellow-300">Ö</span>
                </span>
                CK
              </h1>
              <h2 className="text-6xl font-bold leading-tight tracking-wide">
                LIMITLESS POTENTIAL
              </h2>
              <h3 className="text-4xl font-light italic text-yellow-200 mt-4">
                together
              </h3>
            </div>

            {/* Description */}
            <p className="text-base text-white leading-relaxed mt-8">
              Thank you for being here! If you're looking to book a speaker who
              moves with purpose (as stage soul in life) you're in the right
              place. I speak, perform, and serve to help audiences realize their
              limitless potential regardless of age or background. If you're
              interested in something entirely new, I'd love to hear your
              vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

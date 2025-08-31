import React, { useState } from "react";
import formimg from "../../assets/contactform.png";
const ContactForm = ({ personImage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDetails: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600 relative overflow-hidden">
      {/* Decorative arrow in top right */}
      <div className="absolute top-8 right-8 text-yellow-300 text-4xl font-light transform rotate-12">
        ↗
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex items-start justify-between gap-8">
          {/* Left Side - Person Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-80 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={formimg}
                alt="Speaker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 max-w-md">
            <div className="bg-gradient-to-b from-orange-400/30 to-yellow-500/30 backdrop-blur-sm rounded-lg p-6 border-2 border-cyan-400">
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-cyan-300 font-medium mb-1 text-sm">
                    Name (required)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-transparent border border-cyan-400 rounded text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-cyan-300 text-sm"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-cyan-300 font-medium mb-1 text-sm">
                    Email (required)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-transparent border border-cyan-400 rounded text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-cyan-300 text-sm"
                  />
                </div>

                {/* Event Details */}
                <div>
                  <label className="block text-cyan-300 font-medium mb-1 text-sm">
                    Event Details
                  </label>
                  <textarea
                    name="eventDetails"
                    value={formData.eventDetails}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 bg-transparent border border-cyan-400 rounded text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-cyan-300 resize-none text-sm"
                    placeholder="Tell us about your event and how we can best serve you."
                  />
                </div>

                {/* Additional Info */}
                <div>
                  <label className="block text-cyan-300 font-medium mb-1 text-sm">
                    What do you hope your audience feels empowered to do after
                    hearing from me?
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 bg-transparent border border-cyan-400 rounded text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-cyan-300 resize-none text-sm"
                    placeholder="Share what you envision..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-full transition-colors duration-200 shadow-lg mt-6"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Contact Info Below Form */}
            <div className="mt-6 space-y-2 text-white text-sm">
              <p>📞 (XXX) XXX-XXXX</p>
              <p>✉️ info@emailexample.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                <span className="text-white text-xs">📺</span>
              </div>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                <span className="text-white text-xs">📷</span>
              </div>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                <span className="text-white text-xs">🎵</span>
              </div>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                <span className="text-white text-xs">📧</span>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition-colors">
                <span className="text-black text-xs font-bold">M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

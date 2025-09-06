import React, { useState } from "react";
import formimg from "../../../assets/contactform.png";
import "./Form.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDetails: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    // Add top padding so the section keeps its normal height.
    // 'isolate' contains z-index stacking so the card can overlay previous section safely.
    <section className="bg-black relative isolate ">
      <div className="px-4  sm:px-6">
        {/* CARD — only this is visually pulled up */}
        <div
          className="
            relative z-10 
            mx-auto w-full max-w-7xl
            rounded-sm overflow-hidden shadow-2xl
            ring-1 ring-amber-400/20
            bg-[radial-gradient(circle_at_center,_#FFAE00,_#875D01)]
            -translate-y-[40px]
          "
        >
          {/* Inner content spacing */}
          <div className="relative z-10 pl-5 pt-20 pr-5  ">
            <div className="flex flex-col  lg:flex-row items-start justify-between gap-8">
              {/* Left - Person Image */}
              <div className="flex-shrink-0 ">
                <img
                  src={formimg}
                  alt="Speaker"
                  className="w-45  object-cover"
                />

                <div className="mt-6 space-y-2 text-white text-sm">
                  <p>📞 (XXX) XXX-XXXX</p>
                  <p>✉️ info@emailexample.com</p>
                </div>

                {/* Socials */}
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

              {/* Right - Form */}
              <div className="w-full">
                <div className="">
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="form-label">Name (required)</label>
                      <input
                        type="text"
                        name="fname"
                        placeholder="Firstname"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="name-input margin-right"
                      />
                      <input
                        type="text"
                        name="lname"
                        placeholder="Lastname"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="name-input"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="form-label">Email (required)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>

                    {/* Event Details */}
                    <div>
                      <label className="form-label">Event Details</label>
                      <textarea
                        name="eventDetails"
                        value={formData.eventDetails}
                        onChange={handleInputChange}
                        rows="4"
                        className="form-input"
                        placeholder=""
                      />
                    </div>

                    <div>
                      <label className="form-label">
                        Tell us about your event and how we can best serve you.
                      </label>
                      <textarea
                        name="eventDetails"
                        value={formData.eventDetails}
                        onChange={handleInputChange}
                        rows="4"
                        className="form-input"
                        placeholder=""
                      />
                    </div>
                    {/* Additional Info */}
                    <div>
                      <label className="form-label">
                        What do you hope your audience feels empowered to do
                        after hearing from me?
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows="3"
                        className="form-input"
                        placeholder="Share what you envision..."
                      />
                    </div>

                    {/* Submit */}
                    <button onClick={handleSubmit} className="sub-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              {/* /Right */}
            </div>
          </div>
          {/* /inner padding */}
        </div>
        {/* /card */}
      </div>
    </section>
  );
};

export default ContactForm;

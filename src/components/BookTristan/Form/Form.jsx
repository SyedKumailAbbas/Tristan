import React, { useState } from "react";
import formimg from "../../../assets/contactform.png";
import insta from "../../../assets/insta.png";
import linkedin from "../../../assets/linkedin.png";
import spotify from "../../../assets/spotify.png";
import youtube from "../../../assets/youtube.png";
import medium from "../../../assets/medium.png";
import arrow from "../../../assets/arrow.png";
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
        <div className="flex justify-end arrow">
          <img src={arrow} alt="Spotify" className="" />
        </div>
        <div
          className="
            relative z-10 
            mx-auto w-full max-w-7xl
            rounded-sm overflow-hidden shadow-2xl
            ring-1 ring-amber-400/20
            bg-[radial-gradient(circle_at_center,_#FFAE00,_#875D01)]
            -translate-y-[150px]
          "
        >
          {/* Inner content spacing */}
          <div className="relative z-10 pl-5 pt-[120px] pb-10 pr-5  ">
            <div className="flex flex-col  lg:flex-row items-start justify-between gap-8">
              {/* Left - Person Image */}
              <div className="flex-shrink-0 ">
                <img
                  src={formimg}
                  alt="Speaker"
                  className="w-45  object-cover"
                />

                <div className="mt-6 space-y-2 text-white text-sm">
                  <p className="detail">P: (647) 324-8747</p>
                  <p className="detail">E: tristanjoshuakim@gmail.com</p>
                </div>

                {/* Socials */}
                <div className="flex space-x-1 mt-4 ">
                  <a href="#youtube" className="w-12 h-12 ">
                    <img src={youtube} alt="YouTube" className="w-10 h-10" />
                  </a>
                  <a href="#spotify" className="w-12 h-12 ">
                    <img src={spotify} alt="Spotify" className="w-10 h-10" />
                  </a>
                  <a href="#linkedin" className="w-12 h-12 ">
                    <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
                  </a>
                  <a href="#instagram" className="w-12 h-12 ">
                    <img src={insta} alt="Instagram" className="w-10 h-10" />
                  </a>
                  <a href="#medium" className="w-15 h-10 ">
                    <img src={medium} alt="Medium" className="w-15 h-10" />
                  </a>
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
                        className="text-area"
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
                        className="text-area"
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
                        className="text-area"
                        placeholder="Share what you envision..."
                      />
                    </div>

                    {/* Submit */}
                    <div className=" flex justify-center">
                      <button onClick={handleSubmit} className="mb-5 sub-btn">
                        Submit
                      </button>
                    </div>
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

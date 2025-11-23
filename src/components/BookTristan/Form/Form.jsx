import React, { useState } from "react";
import formimg from "../../../assets/contactform.png";
import insta from "../../../assets/insta.png";
import linkedin from "../../../assets/linkedin.png";
import spotify from "../../../assets/spotify.png";
import youtube from "../../../assets/youtube.png";
import medium from "../../../assets/medium.png";
import arrow from "../../../assets/arrow.png";
import { submitContact } from "../../../services/form";
import "./Form.css";

const ContactForm = () => {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby5gYgN3Z18S_qz69-lEBzJnaEKI7iRUd8BzZB9C2UiGzjxEjZYuhFA6vZqU1GTUY65/exec";

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    eventDetails: "", // textarea #1
    serviceDetails: "", // textarea #2
    audienceGoal: "", // textarea #3
  });
  const [submitting, setSubmitting] = useState(false);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fname = formData.fname.trim();
    const lname = formData.lname.trim();
    const email = formData.email.trim().toLowerCase();

    if (!fname || !lname || !email) {
      alert("Please fill out first name, last name, and email.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      // // Send form data to your backend
      await submitContact({
        fname,
        lname,
        email,
        eventDetails: formData.eventDetails.trim(),
        serviceDetails: formData.serviceDetails.trim(),
        audienceGoal: formData.audienceGoal.trim(),
      });
      const fd = new FormData();
      fd.append("fname", fname);
      fd.append("lname", lname);
      fd.append("email", email);
      fd.append("eventDetails", formData.eventDetails.trim());
      fd.append("serviceDetails", formData.serviceDetails.trim());
      fd.append("audienceGoal", formData.audienceGoal.trim());
      fd.append(
        "_origin",
        typeof window !== "undefined" ? window.location.origin : ""
      );

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: fd,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      alert("✅ Thanks! We received your request.");
      setFormData({
        fname: "",
        lname: "",
        email: "",
        eventDetails: "",
        serviceDetails: "",
        audienceGoal: "",
      });
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-black relative isolate">
      <div className="px-4 sm:px-6">
        <div className="flex justify-end arrow">
          <img src={arrow} alt="Arrow" />
        </div>

        <div className="relative z-10 mx-auto w/full max-w-7xl rounded-sm overflow-hidden shadow-2xl ring-1 ring-amber-400/20 bg-[radial-gradient(circle_at_center,_#FFAE00,_#875D01)] -translate-y-[150px]">
          <div className="relative z-10 pl-5 pt-[120px] pb-10 pr-5">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              {/* Left - Person Image & Socials */}
              <div className="flex-shrink-0">
                <img
                  src={formimg}
                  alt="Speaker"
                  className="w-45 object-cover"
                />
                <div className="mt-6 space-y-2 text-white text-sm">
                  <p className="detail">P: (647) 324-8747</p>
                  <p className="detail">E: tristanjoshuakim@gmail.com</p>
                </div>
                <div className="flex space-x-1 mt-4">
                  <a
                    href="https://www.youtube.com/@tristanjoshuakim"
                    className="w-12 h-12"
                  >
                    <img src={youtube} alt="YouTube" className="w-10 h-10" />
                  </a>
                  <a
                    href="https://open.spotify.com/show/1vBg44ZWW4mstqVCJD2oio?si=95a112a26aae42ac"
                    className="w-12 h-12"
                  >
                    <img src={spotify} alt="Spotify" className="w-10 h-10" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tristanjoshuakim/"
                    className="w-12 h-12"
                  >
                    <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
                  </a>
                  <a
                    href="https://www.instagram.com/tdawgtalks/"
                    className="w-12 h-12"
                  >
                    <img src={insta} alt="Instagram" className="w-10 h-10" />
                  </a>
                  <a
                    href="https://medium.com/@tristanjoshuakim"
                    className="w-15 h-10"
                  >
                    <img src={medium} alt="Medium" className="w-15 h-10" />
                  </a>
                </div>
              </div>

              {/* Right - Form */}
              <div className="w-full">
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <label className="form-label">
                      Name <span className="label-note">(required)</span>
                    </label>
                    <div className="space-y-2 md:space-y-0 ">
                      <input
                        type="text"
                        name="fname"
                        placeholder="First Name*"
                        value={formData.fname}
                        onChange={handleInputChange}
                        className="name-input margin-right placeholder-black placeholder-opacity-40"
                        required
                        disabled={submitting}
                      />
                      <input
                        type="text"
                        name="lname"
                        placeholder="Last Name*"
                        value={formData.lname}
                        onChange={handleInputChange}
                        className="name-input placeholder-black placeholder-opacity-40"
                        required
                        disabled={submitting}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="form-label">
                      Email <span className="label-note">(required)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      disabled={submitting}
                    />
                  </div>

                  {/* Textarea #1 */}
                  <div>
                    <label className="form-label">Event Details</label>
                    <textarea
                      name="eventDetails"
                      value={formData.eventDetails}
                      onChange={handleInputChange}
                      rows="4"
                      className="text-area"
                      placeholder=""
                      disabled={submitting}
                    />
                  </div>

                  {/* Textarea #2 */}
                  <div>
                    <label className="form-label">
                      Tell us about your event and how we can best serve you.
                    </label>
                    <textarea
                      name="serviceDetails"
                      value={formData.serviceDetails}
                      onChange={handleInputChange}
                      rows="4"
                      className="text-area"
                      placeholder=""
                      disabled={submitting}
                    />
                  </div>

                  {/* Textarea #3 */}
                  <div>
                    <label className="form-label">
                      What do you hope your audience feels empowered to do after
                      hearing from me?
                      <span className="optional-text">
                        (Optional, but encouraged)
                      </span>
                    </label>

                    <textarea
                      name="audienceGoal"
                      value={formData.audienceGoal}
                      onChange={handleInputChange}
                      rows="3"
                      className="text-area placeholder-black placeholder-opacity-40"
                      placeholder="Share what you envision..."
                      disabled={submitting}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="mb-5 sub-btn"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
              {/* /Right */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

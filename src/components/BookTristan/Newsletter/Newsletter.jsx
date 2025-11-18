import React, { useState } from "react";
import yellowFormBg from "../../../assets/bgform.svg";
import styledText from "../../../assets/powerfull.png";
import "./Newsletter.css";
import { submitNewsletter } from "../../../services/form";

export default function Newsletter() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwn8mLg8tWID4XPFBa-CgJcXJ8vwyY3WoiqWdsgKO3X9ZKTkNrwsQbwKipuj4Twrrdk/exec";

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fname = formData.fname.trim();
    const lname = formData.lname.trim();
    const email = formData.email.trim().toLowerCase();

    if (!fname || !lname || !email) {
      alert("Please fill out all the required fields.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      await submitNewsletter({ fname, lname, email });
      const fd = new FormData();
      fd.append("fname", fname);
      fd.append("lname", lname);
      fd.append("email", email);

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
      alert("✅ Newsletter signup submitted!");
      setFormData({ fname: "", lname: "", email: "" });
    } catch (err) {
      console.error("Error submitting newsletter:", err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      {/* wrapper is full width on mobile/tablet, 70% only on large */}
      <div className="newsletter-wrapper w-full lg:w-[70%]">
        {/* Main heading */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed mb-6">
            I believe every person has something{" "}
            <span className="font-semibold underline-thick">extraordinary</span>{" "}
            within them, and every event is a chance to{" "}
            <span className="font-semibold">bring that to light</span> ✨
          </h1>
        </div>

        {/* Stylized tagline image */}
        <img
          src={styledText}
          alt="Let's make it powerful, real, and unforgettable"
          className="mx-auto mb-10 md:mb-16 max-w-xs md:max-w-sm lg:max-w-none"
        />

        {/* Form container */}
        <div
          className="gold-form rounded-lg p-6 md:p-8 shadow-2xl w-full lg:w-[929px] relative overflow-hidden lg:ml-20"
          style={{ backgroundImage: `url(${yellowFormBg})` }}
        >
          <i className="gold-form__vec gold-form__vec--8"></i>
          <i className="gold-form__vec gold-form__vec--9"></i>
          <i className="gold-form__vec gold-form__vec--7"></i>

          <div className="relative z-10 space-y-2 p-1 md:p-5">
            <div className="form-container">
              <form className="form-inner" onSubmit={handleSubmit} noValidate>
                <label className="form-label required">
                  Name <span aria-hidden="true">*</span>
                </label>
                <div className="name-row">
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleInputChange}
                    placeholder="First Name*"
                    required
                    aria-required="true"
                    className="news-input"
                    autoComplete="given-name"
                    disabled={submitting}
                  />
                  <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handleInputChange}
                    placeholder="Last Name*"
                    required
                    aria-required="true"
                    className="news-input"
                    autoComplete="family-name"
                    disabled={submitting}
                  />
                </div>

                <label className="form-label required">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email*"
                  required
                  aria-required="true"
                  className="news-email-input"
                  autoComplete="email"
                  disabled={submitting}
                />

                <button
                  type="submit"
                  className="custom-btn"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Join the Newsletter"}
                </button>
              </form>
            </div>
          </div>

          {/* Blue accent border effect */}
        </div>
      </div>
    </div>
  );
}

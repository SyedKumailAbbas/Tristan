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

  // Simple client-side validation
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
      <div className="w-[70%] ">
        {/* Main heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-semibold leading-relaxed mb-6">
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
          className="mx-auto w-50 mb-20"
        />

        {/* Form container */}
        <div
          className="gold-form lg:ml-20 rounded-lg p-8 shadow-2xl w-[929px] h-[348] relative overflow-hidden"
          style={{ backgroundImage: `url(${yellowFormBg})` }}
        >
          <i className="gold-form__vec gold-form__vec--8"></i>
          <i className="gold-form__vec gold-form__vec--9"></i>
          <i className="gold-form__vec gold-form__vec--7"></i>

          <div className="relative z-10 space-y-2 p-5">
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
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-20 blur-sm -z-10"></div>
        </div>
      </div>
    </div>
  );
}

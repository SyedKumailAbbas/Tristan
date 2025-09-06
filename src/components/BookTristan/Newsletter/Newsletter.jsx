import React, { useState } from "react";
import yellowFormBg from "../../../assets/image.png";
import styledText from "../../../assets/powerfull.png"; // or .png
import "./Newsletter.css";
export default function Newsletter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-[70%] ">
        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold leading-relaxed mb-6">
            I believe every person has something{" "}
            <span className="font-semibold underline-thick">extraordinary</span>{" "}
            within them, and every event is a chance to{" "}
            <span className="font-semibold">bring that to light</span> ✨
          </h1>
        </div>

        {/* Stylized tagline using your image */}
        {/* Replace this with your styled text image */}
        <img
          src={styledText}
          alt="Let's make it powerful, real, and unforgettable"
          className="mx-auto w-50"
        />
        {/* Fallback text in case image doesn't load */}
        {/* <div className="sr-only">
            Let's make it powerful, real, and unforgettable.
          </div> */}

        {/* Contact form with your yellow background image */}

        <div className="relative">
          {/* Form container with gradient + bg image */}
          <div
            className="gold-form rounded-lg p-8 shadow-2xl w-[929px] h-[348] "
            style={{ backgroundImage: `url(${yellowFormBg})` }}
          >
            {" "}
            {/* Overlay */}
            {/* Decorative vectors */}
            <i className="gold-form__vec gold-form__vec--8"></i>
            <i className="gold-form__vec gold-form__vec--9"></i>
            <i className="gold-form__vec gold-form__vec--7"></i>
            {/* Form content */}
            <div className="relative z-10 space-y-6">
              {/* Name field */}
              <div>
                <div className="block text-black font-medium mb-2">
                  Name (Required)
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-70 border-2 border-yellow-600 rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent focus:bg-opacity-90 transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              {/* Email field */}
              <div>
                <div className="block text-black font-medium mb-2">
                  Email (Required)
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-70 border-2 border-yellow-600 rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent focus:bg-opacity-90 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Transformation
              </button>
            </div>
          </div>

          {/* Blue accent border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-20 blur-sm -z-10"></div>
        </div>

        {/* Bottom decorative text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 italic">
            Ready to unlock your extraordinary potential?
          </p>
        </div>
      </div>
    </div>
  );
}

/* 
INSTRUCTIONS FOR USING YOUR IMAGES:

1. For the styled text image:
   - Replace '/path-to-your-styled-text.svg' with the actual path to your image
   - If it's a PNG, change the extension accordingly
   - The image will be centered and responsive

2. For the yellow form background:
   - Replace '/path-to-your-yellow-form-background.png' with the actual path to your image
   - The background will cover the entire form area
   - Adjust the bg-opacity-20 overlay if needed for text readability

3. If you're using a bundler like Webpack/Vite:
   - Import the images at the top of the file
   - Use the imported variables instead of string paths
   
   Example:
   import yellowFormBg from './assets/yellow-form-bg.png';
   import styledText from './assets/styled-text.svg';
   
   Then use:
   src={styledText}
   backgroundImage: `url(${yellowFormBg})`
*/

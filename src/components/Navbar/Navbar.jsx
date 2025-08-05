import React from 'react';
import Tk from "../../assets/TK logo.png"
export default function Navbar() {
  return (
    <div className="sticky backdrop-blur-sm z-50 top-0 w-full h-20">
            <div className="flex items-center justify-between h-full px-8 pt-10 max-w-7xl mx-auto">
        
        {/* Logo/Brand */}
        <div className="flex items-center">
           <div className="h-15">
                        <img
                          src={Tk}
                          alt="TK Logo"
                          className="h-[100px] w-[100px] object-contain filter brightness-0 invert"
                        />
            </div>
        </div>
        
        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className="text-white text-xl hover:text-gray-300 transition-colors duration-200 text-sm font-bold">
            About
          </a>
          <a href="#" className="text-white text-xl hover:text-gray-300 transition-colors duration-200 text-sm font-bold">
            Media
          </a>
          <a href="#" className="text-white text-xl hover:text-gray-300 transition-colors duration-200 text-sm font-bold">
            Keynotes
          </a>
          <a href="#" className="text-white text-xl hover:text-gray-300 transition-colors duration-200 text-sm font-bold">
            Testimonials
          </a>
          
          {/* CTA Button */}
          <button className="bg-gradient-to-r text-xl from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-bold text-sm hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Tristan
          </button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white hover:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
   
    </div>
  );
}
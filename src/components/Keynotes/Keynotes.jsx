import React from 'react';
import { Play, Building, School, GraduationCap } from 'lucide-react';

export default function Keynotes() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-yellow-600 p-8 min-h-screen">
      {/* Hand-drawn golden line at top */}
      <div className="w-full h-2 mb-8">
        <svg viewBox="0 0 800 20" className="w-full h-full">
          <path
            d="M0,10 Q50,5 100,12 Q150,8 200,11 Q250,6 300,13 Q350,9 400,10 Q450,7 500,12 Q550,8 600,11 Q650,6 700,10 Q750,8 800,10"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Keynotes Title */}
      <div className="mb-12 relative">
        <h1 className="text-5xl font-serif italic text-yellow-400 mb-4 relative inline-block">
          Keynotes
          {/* Hand-drawn circle around title */}
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 200 60" 
            style={{ transform: 'scale(1.3)', transformOrigin: 'center' }}
          >
            <ellipse
              cx="100"
              cy="30"
              rx="90"
              ry="25"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </h1>
        {/* Arrow pointing to keynotes */}
        <div className="absolute -top-8 right-0">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-yellow-400">
            <path
              d="M30,15 L25,5 L20,15 M25,5 L25,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Three Keynote Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Corporations Card */}
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg p-6 relative border-2 border-yellow-500 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Building className="w-8 h-8 text-black" />
            <h2 className="text-2xl font-bold text-black">Corporations</h2>
          </div>
          
          <div className="space-y-4 mb-8">
            {/* Hand-drawn style text badges */}
            <div className="relative inline-block">
              <span className="text-black font-semibold bg-yellow-300 px-3 py-1 rounded-full relative z-10">
                Resilience
              </span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30">
                <path
                  d="M5,15 Q15,8 25,12 Q35,6 45,10 Q55,8 65,12 Q75,6 85,10 Q90,8 95,15"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            
            <div className="relative inline-block">
              <span className="text-black font-semibold bg-yellow-300 px-3 py-1 rounded-full relative z-10">
                Mindset
              </span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30">
                <path
                  d="M5,15 Q15,22 25,18 Q35,24 45,20 Q55,22 65,18 Q75,24 85,20 Q90,22 95,15"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            
            <div className="relative inline-block">
              <span className="text-black font-semibold bg-yellow-300 px-3 py-1 rounded-full relative z-10">
                Momentum
              </span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30">
                <path
                  d="M5,15 Q15,10 25,14 Q35,8 45,12 Q55,10 65,14 Q75,8 85,12 Q90,10 95,15"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:from-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105 text-sm font-semibold">
            <Play className="w-4 h-4 fill-current" />
            Click to learn more
          </button>
        </div>

        {/* High Schools Card */}
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg p-6 relative border-2 border-yellow-500 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <School className="w-8 h-8 text-black" />
            <h2 className="text-2xl font-bold text-black">High Schools</h2>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="relative inline-block">
              <span className="text-black font-semibold bg-yellow-300 px-3 py-1 rounded-full relative z-10">
                Identity
              </span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30">
                <path
                  d="M5,15 Q15,8 25,12 Q35,6 45,10 Q55,8 65,12 Q75,6 85,10 Q90,8 95,15"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            
            <div className="relative inline-block">
              <span className="text-black font-semibold bg-yellow-300 px-3 py-1 rounded-full relative z-10">
                Courage
              </span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30">
                <path
                  d="M5,15 Q15,22 25,18 Q35,24 45,20 Q55,22 65,18 Q75,24 85,20 Q90,22 95,15"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            
            <div className="relative inline-block">
              <span className="text-black font-semibold bg-yellow-300 px-3 py-1 rounded-full relative z-10">
                Connection
              </span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30">
                <path
                  d="M5,15 Q15,10 25,14 Q35,8 45,12 Q55,10 65,14 Q75,8 85,12 Q90,10 95,15"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:from-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105 text-sm font-semibold">
            <Play className="w-4 h-4 fill-current" />
            Click to learn more
          </button>
        </div>

        {/* University Card */}
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg p-6 relative border-2 border-yellow-500 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-black" />
            <h2 className="text-2xl font-bold text-black">University</h2>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="relative inline-block">
              <span className="text-black font-semibold bg-yellow-300 px-3 py-1 rounded-full relative z-10">
                Purpose
              </span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30">
                <path
                  d="M5,15 Q15,8 25,12 Q35,6 45,10 Q55,8 65,12 Q75,6 85,10 Q90,8 95,15"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            
            <div className="relative inline-block">
              <span className="text-black font-semibold bg-yellow-300 px-3 py-1 rounded-full relative z-10">
                Presence
              </span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30">
                <path
                  d="M5,15 Q15,22 25,18 Q35,24 45,20 Q55,22 65,18 Q75,24 85,20 Q90,22 95,15"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            
            <div className="relative inline-block">
              <span className="text-black font-semibold bg-yellow-300 px-3 py-1 rounded-full relative z-10">
                Possibilities
              </span>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30">
                <path
                  d="M5,15 Q15,10 25,14 Q35,8 45,12 Q55,10 65,14 Q75,8 85,12 Q90,10 95,15"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:from-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105 text-sm font-semibold">
            <Play className="w-4 h-4 fill-current" />
            Click to learn more
          </button>
        </div>
      </div>
    </div>
  );
}
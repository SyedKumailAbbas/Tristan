import image1 from "../../assets/Frame 36.png";
import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import "./carousel.css";
const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "There's a joy in everything [Tristan] shares, and it's contagious. When he speaks, you don't just feel inspired... you walk away carrying hope you didn't even know you needed. I genuinely believe the world needs to hear him on more stages, in more rooms, touching more hearts",
      author: "",
      role: "Aditi Jain, 2nd Year Post-Secondary Student",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=150&h=150&fit=crop&crop=face",
      background: image1,
    },
    {
      id: 2,
      text: "An incredible speaker who transforms lives with every word. His passion and authenticity shine through in everything he does. The impact he makes is profound and lasting.",
      author: "Sarah Mitchell",
      role: "Aditi Jain, 2nd Year Post-Secondary Student",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      background: image1,
    },
    {
      id: 3,
      text: "Tristan has a unique gift for connecting with people on a deep level. His presentations are both inspiring and actionable. A truly remarkable individual.",
      author: "Michael Chen",
      role: "Aditi Jain, 2nd Year Post-Secondary Student",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      background: image1,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isPaused, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <>
      <div
        className="testimonial-slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slider-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`slide ${
                index === currentSlide
                  ? "active"
                  : index ===
                    (currentSlide - 1 + testimonials.length) %
                      testimonials.length
                  ? "prev"
                  : ""
              }`}
            >
              <div
                className="slide-background"
                style={{ backgroundImage: `url(${testimonial.background})` }}
              />
              <div className="slide-overlay" />

              <div className="slide-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="author-section">
                  <div className="author-info">
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            className="nav-button prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ArrowLeft />
          </button>
          <button
            className="nav-button next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ArrowRight />
          </button>

          {/* Progress bar */}
          <div
            className="progress-bar"
            style={{
              width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
            }}
          />
        </div>

        {/* Pagination */}
        <div className="pagination">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;

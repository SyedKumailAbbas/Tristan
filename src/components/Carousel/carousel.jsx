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
      text: `Hearing Tristan speak in person was honestly amazing. The way he spoke really hit me
and made me think about my own life. It inspired me to want to start my own journey of
growth and see how far I can go`,
      author: "",
      role: "(Yaseen El-Khadary, Grade 12 Student)",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=150&h=150&fit=crop&crop=face",
      background: image1,
    },
    {
      id: 2,
      text: `Tristan’s blog posts and podcast have been life-changing for me. Every time I listen or
read, I feel encouraged, motivated, and reminded never to give up on myself. The way
Tristan speaks feels so genuine, like he’s talking straight to my soul, and his writing is
just as real and inspiring. Both have pushed me to grow, believe in myself, and see
challenges as opportunities. I’m truly grateful for the impact they’ve had on my journey`,
      author: "Sarah Mitchell",
      role: "(Mariam Maswadeh, 3rd Year York University Student)",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
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

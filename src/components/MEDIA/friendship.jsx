import React, { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FINDBOX from "../../assets/Frame 24.svg";
import playIcon from "../../assets/noto_play-button(2).svg";
import "./friendship.css";

const slidesData = [
  {
    id: 1,
    title: (
      <>
        5 WAYS TO KNOW WHEN TO LET GO OF{" "}
        <span className="underline-gold">FRIENDSHIPS</span>
      </>
    ),
    quote:
      "\"If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away (Henry David Thoreau).\"",
    cta: "Read more",
    link: "#",
  },
  {
    id: 2,
    title: "HOW TO STAY CONSISTENT WHEN NO ONE IS WATCHING",
    quote:
      "Discipline is choosing what you want most over what you want now.",
    cta: "Read more",
    link: "#",
  },
  {
    id: 3,
    title: "BUILD CONFIDENCE WITHOUT THE HYPE",
    quote:
      "Confidence comes from keeping the promises you make to yourself.",
    cta: "Read more",
    link: "#",
  },
];

const FriendshipCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null); // 'next' | 'prev' | null

  const slides = useMemo(() => slidesData, []);
  // lalaoooo
  const [pendingIndex, setPendingIndex] = useState(null);


  const prev = () => {
    setDirection("prev");
    setPendingIndex((i) => (index - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection("next");
    setPendingIndex((i) => (index + 1) % slides.length);
  };


  const leftIdx = (index - 1 + slides.length) % slides.length;
  const rightIdx = (index + 1) % slides.length;

  return (
    <div className="friendship-carousel">
      <button className="nav left" onClick={prev} aria-label="Previous">
        <ArrowLeft />
      </button>

      <div className="deck">
        {/* Prev preview */}
        <article className={`card prev ${direction === 'prev' ? 'becoming-active' : ''}`}>
          <img src={FINDBOX} alt="frame preview" className="ghost-frame" />
        </article>

        {/* Active card with content */}
        <article
          className={`card active ${direction === "next" ? "to-right" : ""} ${direction === "prev" ? "to-left" : ""
            }`}
          onAnimationEnd={() => {
            if (pendingIndex !== null) {
              setIndex(pendingIndex);
              setPendingIndex(null);
            }
            setDirection(null);
          }}
        >

          <img src={FINDBOX} alt="frame" className="frame-bg" />
          <div className="content">
            <h3 className="title">
              {slides[index].title}
            </h3>
            <p className="quote">{slides[index].quote}</p>
            <a className="cta keynotes-btn" href={slides[index].link}>
              <span>Read more</span>
              <img src={playIcon} alt="Play Icon" className="w-9 h-9" />
            </a>

          </div>
        </article>

        {/* Next preview */}
        <article className={`card next ${direction === 'next' ? 'becoming-active' : ''}`}>
          <img src={FINDBOX} alt="frame preview" className="ghost-frame" />
        </article>
      </div>

      <button className="nav right" onClick={next} aria-label="Next">
        <ArrowRight />
      </button>
    </div>
  );
};

export default FriendshipCarousel;
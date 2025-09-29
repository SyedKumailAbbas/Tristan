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
        5 WAYS TO KNOW WHEN TO LET GO OF {" "}
        <span className="underline-gold">FRIENDSHIPS</span>
      </>
    ),
    quote:
      "\"If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away (Henry David Thoreau).\"",
    cta: "Read more",
    link: "https://medium.com/@tristanjoshuakim/5-ways-to-know-when-to-let-go-of-friendships-that-no-longer-serve-you-and-keep-walking-toward-your-0e5ff732d4c0",
  },
  {
    id: 2,
    title: (
      <>
        The Power of {" "}
        <span className="underline-gold">Smiling</span>
      </>
    ),
    quote:
      "“Let us always meet each other with a smile, for the smile is the beginning of love” (Mother Teresa).",
    cta: "Read more",
    link: "https://medium.com/@tristanjoshuakim/the-power-of-smiling-why-a-simple-smile-can-change-everything-0b622b2e07af",
  },
  {
    id: 3,
    title: "Believe in Their Belief in You",
    quote:
      "“Sometimes you need to believe in someone else’s belief in you until your own belief system kicks in” (Les Brown).",
    cta: "Read more",
    link: "https://medium.com/@tristanjoshuakim/believe-in-their-belief-in-you-0888b84c6399",
  },
  {
    id: 4,
    title: "The Path of Loneliness and Calling",
    quote:
      "“Along the way, you may encounter secret competitors, quiet critics, or people who smile in public but doubt you in private. Let them be. The way you live, the actions you take, and the love you give will speak louder than any words they can say” (Tristan J. Kim).",
    cta: "Read more",
    link: "https://medium.com/@tristanjoshuakim/the-path-of-loneliness-and-calling-a6043e81c288",
  },
  {
    id: 5,
    title: "What Are You Trying to Hide from Others?",
    quote:
      "“A person can say many things... But watch their actions, for they will speak for themselves. Look at the fruit they produce, for what they sow, so shall they reap. Listen to their speech, as it reveals what’s in their heart. And pay attention to who they surround themselves with because that will tell you who they truly are” (Tristan J. Kim).",
    cta: "Read more",
    link: "https://medium.com/@tristanjoshuakim/what-are-you-trying-to-hide-from-others-7b8259310bfb",
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
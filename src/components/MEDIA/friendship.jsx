import React, { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FINDBOX from "../../assets/Frame 24.svg";
import playIcon from "../../assets/noto_play-button(2).svg";
import styles from "./friendship.module.css";

const slidesData = [
  {
    id: 1,
    title: (
      <>
        5 WAYS TO KNOW WHEN TO LET GO OF{" "}
        <span className={styles.underlineGold}>FRIENDSHIPS</span>
      </>
    ),
    quote:
      "“If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away” (Henry David Thoreau).",
    cta: "Read more",
    link: "https://medium.com/@tristanjoshuakim/5-ways-to-know-when-to-let-go-of-friendships-that-no-longer-serve-you-and-keep-walking-toward-your-0e5ff732d4c0",
  },
  {
    id: 2,
    title: (
      <p style={{textTransform:"uppercase"}}>
        THE Power of <span className={styles.underlineGold}>Smiling</span>
      </p>
    ),
    quote:
      "“Let us always meet each other with a smile, for the smile is the beginning of love” (Mother Teresa).",
    cta: "Read more",
    link: "https://medium.com/@tristanjoshuakim/the-power-of-smiling-why-a-simple-smile-can-change-everything-0b622b2e07af",
  },
  {
    id: 3,
    title: (
      <p style={{textTransform:"uppercase"}}>
        Believe in Their Belief in <span className={styles.underlineGold}>You</span>
      </p>
    ),
    quote:
      "“Sometimes you need to believe in someone else’s belief in you until your own belief system kicks in” (Les Brown).",
    cta: "Read more",
    link: "https://medium.com/@tristanjoshuakim/believe-in-their-belief-in-you-0888b84c6399",
  },
  {
    id: 4,
    title: (
      <p style={{textTransform:"uppercase"}}>
        The Path of Loneliness and <span className={styles.underlineGold}>Calling</span>
      </p>
    ),
    quote:
      "“Along the way, you may encounter secret competitors, quiet critics, or people who smile in public but doubt you in private. Let them be. The way you live, the actions you take, and the love you give will speak louder than any words they can say” (Tristan J. Kim).",
    cta: "Read more",
    link: "https://medium.com/@tristanjoshuakim/the-path-of-loneliness-and-calling-a6043e81c288",
  },
  {
    id: 5,
    title: (
      <p style={{textTransform:"uppercase"}}>
        What Are You Trying to Hide from <span className={styles.underlineGold}>Others?</span>
      </p>
    ),
    quote:
      "“A person can say many things... But watch their actions, for they will speak for themselves. Look at the fruit they produce, for what they sow, so shall they reap. Listen to their speech, as it reveals what’s in their heart. And pay attention to who they surround themselves with because that will tell you who they truly are” (Tristan J. Kim).",
    cta: "Read more",
    link: "https://medium.com/@tristanjoshuakim/what-are-you-trying-to-hide-from-others-7b8259310bfb",
  },
];

const FriendshipCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [pendingIndex, setPendingIndex] = useState(null);

  const slides = useMemo(() => slidesData, []);

  const prev = () => {
    setDirection("prev");
    setPendingIndex((index - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection("next");
    setPendingIndex((index + 1) % slides.length);
  };

  return (
    <div className={styles.friendshipCarousel}>
      {/* Navigation - Left */}
      <button className={`${styles.nav} ${styles.left}`} onClick={prev} aria-label="Previous slide">
        <ArrowLeft />
      </button>

      {/* Carousel Deck */}
      <div className={styles.deck}>
        {/* Previous Preview */}
        <article className={`${styles.card} ${styles.prev} ${direction === "prev" ? styles.becomingActive : ""}`}>
          <img src={FINDBOX} alt="frame preview" className={styles.ghostFrame} />
        </article>

        {/* Active Slide */}
        <article
          className={`${styles.card} ${styles.active} 
            ${direction === "next" ? styles.toRight : ""} 
            ${direction === "prev" ? styles.toLeft : ""}`}
          onAnimationEnd={() => {
            if (pendingIndex !== null) {
              setIndex(pendingIndex);
              setPendingIndex(null);
            }
            setDirection(null);
          }}
        >
          <img src={FINDBOX} alt="frame" className={styles.frameBg} />
          <div className={styles.content}>
            <h3 className={styles.title}>{slides[index].title}</h3>
            <p className={styles.quote}>{slides[index].quote}</p>
            <a
              className={`${styles.cta} ${styles.keynotesBtn}`}
              href={slides[index].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{slides[index].cta}</span>
              <img src={playIcon} alt="Play Icon" className={styles.playIcon} />
            </a>
          </div>
        </article>

        {/* Next Preview */}
        <article className={`${styles.card} ${styles.next} ${direction === "next" ? styles.becomingActive : ""}`}>
          <img src={FINDBOX} alt="frame preview" className={styles.ghostFrame} />
        </article>
      </div>

      {/* Navigation - Right */}
      <button className={`${styles.nav} ${styles.right}`} onClick={next} aria-label="Next slide">
        <ArrowRight />
      </button>
    </div>
  );
};

export default FriendshipCarousel;

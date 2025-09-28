import React, { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import heading from "../../../assets/Group 196.png";
import "./podcastcarousel.css";
import playIcon from "../../../assets/noto_play-button(2).svg";

const slidesData = [
  {
    id: 1,
    season: "SEASON 1",
    episode: "EP 1. Seeking Parental Approval:",
    subtitle: "Unfiltered Conversation",
    duration: "15:44",
    currentTime: "00:00",
    progress: 0,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    hostImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&face",
    bgColor: "#2563eb",
  },
  {
    id: 2,
    season: "SEASON 2",
    episode: "EP 5. Inside the Mindset of",
    subtitle: "World Changers",
    duration: "25:07",
    currentTime: "00:00",
    progress: 0,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    hostImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&face",
    bgColor: "#1f2937",
  },
  {
    id: 3,
    season: "SEASON 3",
    episode: "EP 8. Building Authentic",
    subtitle: "Relationships That Last",
    duration: "18:32",
    currentTime: "00:00",
    progress: 0,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    hostImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&face",
    bgColor: "#7c3aed",
  },
];

const PodcastCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [pendingIndex, setPendingIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioRef, setAudioRef] = useState(null);

  const slides = useMemo(() => slidesData, []);

  const togglePlay = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef) {
      setCurrentTime(audioRef.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef) {
      setDuration(audioRef.duration);
    }
  };

  const prev = () => {
    setDirection("prev");
    setPendingIndex((index - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection("next");
    setPendingIndex((index + 1) % slides.length);
  };
  return (
    <section className="podcastSection">
      {/* Heading */}
      <div className="podcastHeading">
        <img
          src={heading}
          alt="Preview to other Podcast Episodes"
          className="podcastHeadingImg"
        />
      </div>

      {/* Carousel */}
      <div className="friendshipCarousel">
        <button
          className="carouselNav isLeft"
          onClick={prev}
          aria-label="Previous"
        >
          <ArrowLeft />
        </button>

        <div className="carouselDeck">
          {/* Prev preview */}
          <article
            className={`carouselCard isPrev ${
              direction === "prev" ? "becomingActive" : ""
            }`}
          >
            <div className="previewPodcastCard">
              <div className="previewBackdrop"></div>
            </div>
          </article>

          {/* Active card with content */}
          <article
            className={`carouselCard isActive ${
              direction === "next" ? "toRight" : ""
            } ${direction === "prev" ? "toLeft" : ""}`}
            onAnimationEnd={() => {
              if (pendingIndex !== null) {
                setIndex(pendingIndex);
                setPendingIndex(null);
              }
              setDirection(null);
            }}
          >
            <div className="activePodcastCard">
              <div className="podcastImageContainer">
                <img
                  src={slides[index].hostImage}
                  alt="Podcast host"
                  className="podcastHostImage"
                />
              </div>

              <div className="podcastDetails">
                <div className="seasonHeader">{slides[index].season}</div>
                <div className="episodeText">
                  {slides[index].episode}
                  <br />
                  {slides[index].subtitle}
                </div>

                <div className="audioPlayer">
                  <button className="audioPlayBtn" onClick={togglePlay}>
                    {isPlaying ? (
                      <Pause className="audioPlayIcon" />
                    ) : (
                      <Play
                        fill="black"
                        stroke="none"
                        className="audioPlayIcon"
                      />
                    )}
                  </button>

                  <div className="audioProgress">
                    <div className="progressTrack">
                      <div
                        className="progressBarFill"
                        style={{
                          width: `${
                            duration > 0 ? (currentTime / duration) * 100 : 0
                          }%`,
                        }}
                      />
                    </div>
                    <div className="timeDisplay">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>

                <audio
                  ref={setAudioRef}
                  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />
              </div>

              <button className="listenFullBtn">
                <span>LISTEN TO FULL PODCAST</span>

                <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
              </button>
            </div>
          </article>

          {/* Next preview */}
          <article
            className={`carouselCard isNext ${
              direction === "next" ? "becomingActive" : ""
            }`}
          >
            <div className="previewPodcastCard">
              <div className="previewBackdrop"></div>
            </div>
          </article>
        </div>

        <button
          className="carouselNav isRight"
          onClick={next}
          aria-label="Next"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default PodcastCarousel;

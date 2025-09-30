import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import heading from "../../../assets/Group 196.png";
import "./podcastcarousel.css";
import playIcon from "../../../assets/noto_play-button(2).svg";
/**
 * Treat each object as a single podcast episode.
 * The carousel shows TWO at a time (a "slide" = a pair).
 */
const episodes = [
  {
    id: "s1e1",
    season: "SEASON 1",
    title: "EP 1. Seeking Parental Approval:",
    subtitle: "Unfiltered Conversation",
    durationLabel: "15:44",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    hostImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&face",
    bgColor: "#2563eb",
  },
  {
    id: "s2e5",
    season: "SEASON 2",
    title: "EP 5. Inside the Mindset of",
    subtitle: "World Changers",
    durationLabel: "25:07",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    hostImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&face",
    bgColor: "#1f2937",
  },
  {
    id: "s3e8",
    season: "SEASON 3",
    title: "EP 8. Building Authentic",
    subtitle: "Relationships That Last",
    durationLabel: "18:32",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    hostImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop&face",
    bgColor: "#7c3aed",
  },
  // add as many as you like…
  {
    id: "s1e2",
    season: "SEASON 1",
    title: "EP 2. Finding Your Voice:",
    subtitle: "Owning the Room",
    durationLabel: "12:10",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    hostImage:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&h=800&fit=crop&face",
    bgColor: "#0ea5e9",
  },
  {
    id: "s2e6",
    season: "SEASON 2",
    title: "EP 6. The Craft of Listening:",
    subtitle: "Less Noise, More Signal",
    durationLabel: "21:03",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    hostImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop&face",
    bgColor: "#334155",
  },
];
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const PodcastCarousel = () => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // treat <=768px as mobile
  const VISIBLE = isMobile ? 1 : 2; // ✅ switch between 1 or 2 cards per slide

  const slides = useMemo(() => episodes, []);
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [pendingIndex, setPendingIndex] = useState(null);

  // audio management

  const formatTime = (time) => {
    if (!Number.isFinite(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  const audioRefs = useRef(new Map()); // id -> HTMLAudioElement
  const [playingId, setPlayingId] = useState(null);
  const [times, setTimes] = useState({}); // { [id]: { current: 0, duration: 0 } }

  const visibleIds = useMemo(() => {
    let ids = [];
    for (let i = 0; i < VISIBLE; i++) {
      ids.push(slides[(startIndex + i) % slides.length]?.id);
    }
    return ids.filter(Boolean);
  }, [slides, startIndex, VISIBLE]);

  const handleLoadedMetadata = useCallback((id) => {
    const audio = audioRefs.current.get(id);
    if (!audio) return;
    setTimes((t) => ({
      ...t,
      [id]: { current: 0, duration: audio.duration || 0 },
    }));
  }, []);

  const handleTimeUpdate = useCallback((id) => {
    const audio = audioRefs.current.get(id);
    if (!audio) return;
    setTimes((t) => ({
      ...t,
      [id]: { current: audio.currentTime || 0, duration: audio.duration || 0 },
    }));
  }, []);

  const togglePlay = useCallback(
    (id) => {
      const audio = audioRefs.current.get(id);
      if (!audio) return;

      // pause any other playing audio
      if (playingId && playingId !== id) {
        const prev = audioRefs.current.get(playingId);
        if (prev) prev.pause();
      }

      if (audio.paused) {
        audio
          .play()
          .then(() => setPlayingId(id))
          .catch(() => {});
      } else {
        audio.pause();
        setPlayingId(null);
      }
    },
    [playingId]
  );

  // Pause if the currently playing ID scrolls off the slide
  useEffect(() => {
    if (playingId && !visibleIds.includes(playingId)) {
      const prev = audioRefs.current.get(playingId);
      if (prev) prev.pause();
      setPlayingId(null);
    }
  }, [playingId, visibleIds]);

  const prev = () => {
    setDirection("prev");
    const nextIdx = (startIndex - VISIBLE + slides.length) % slides.length;
    setPendingIndex(nextIdx);
  };

  const next = () => {
    setDirection("next");
    const nextIdx = (startIndex + VISIBLE) % slides.length;
    setPendingIndex(nextIdx);
  };

  const onAnimEnd = () => {
    if (pendingIndex !== null) {
      setStartIndex(pendingIndex);
      setPendingIndex(null);
    }
    setDirection(null);
  };

  // Which episodes are visible?
  const visibleEpisodes = useMemo(() => {
    let list = [];
    for (let i = 0; i < VISIBLE; i++) {
      list.push(slides[(startIndex + i) % slides.length]);
    }
    return list;
  }, [slides, startIndex, VISIBLE]);
  const renderCard = (ep) => {
    const t = times[ep.id] || { current: 0, duration: 0 };
    const progressPct = t.duration ? (t.current / t.duration) * 100 : 0;

    return (
      <div
        key={ep.id}
        className="activePodcastCard"
        style={{ "--card-accent": ep.bgColor }}
      >
        <div className="podcastImageContainer">
          <img
            src={ep.hostImage}
            alt={`${ep.title} ${ep.subtitle}`}
            className="podcastHostImage"
          />
        </div>

        <div className="podcastDetails">
          <div className="seasonHeader">{ep.season}</div>
          <div className="episodeText">
            {ep.title}
            <br />
            {ep.subtitle}
          </div>

          {/* Audio Player */}
          <div className="audioPlayer">
            <button className="audioPlayBtn" onClick={() => togglePlay(ep.id)}>
              {playingId === ep.id ? (
                <Pause className="audioPlayIcon" />
              ) : (
                <Play fill="black" stroke="none" className="audioPlayIcon" />
              )}
            </button>

            <div className="audioProgress">
              <div className="progressTrack">
                <div
                  className="progressBarFill"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <div className="timeDisplay">
                <span>{formatTime(t.current)}</span>
                <span>{formatTime(t.duration)}</span>
              </div>
            </div>
          </div>

          <audio
            ref={(node) => {
              if (node) audioRefs.current.set(ep.id, node);
              else audioRefs.current.delete(ep.id);
            }}
            src={ep.audioUrl}
            onLoadedMetadata={() => handleLoadedMetadata(ep.id)}
            onTimeUpdate={() => handleTimeUpdate(ep.id)}
            onEnded={() => setPlayingId(null)}
          />
        </div>

        <button className="listenFullBtn">
          <span>LISTEN TO FULL PODCAST</span>
          <img src={playIcon} alt="Play Icon" className="listenBtnIcon" />
        </button>
      </div>
    );
  };

  return (
    <section className="podcastSection">
      <div className="podcastHeading">
        <img
          src={heading}
          alt="Podcast Episodes"
          className="podcastHeadingImg"
        />
      </div>

      <div className="friendshipCarousel">
        <button
          className="carouselNav isLeft"
          onClick={prev}
          aria-label="Previous"
        >
          <ArrowLeft />
        </button>

        <div className="carouselDeck">
          {/* Active */}
          <article
            className={`carouselCard isActive ${
              direction === "next" ? "toRight" : ""
            } ${direction === "prev" ? "toLeft" : ""}`}
            onAnimationEnd={onAnimEnd}
          >
            <div className="cardsRow">
              {visibleEpisodes.map((ep) => renderCard(ep))}
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

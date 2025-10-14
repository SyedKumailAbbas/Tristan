import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FINDBOX from "../../../assets/Rectangle 9.png";
import playIcon from "../../../assets/noto_play-button(2).svg";
import "./podcastcarousel.css";
import { Play, Pause } from "lucide-react";
import Heading from "../../../assets/Group 196.png";
import img1 from "../../../assets/Frame 25.png";
import img2 from "../../../assets/Frame 26.png";
const episodes = [
  {
    id: "s2e1",
    season: "SEASON 2",
    title: "EP 1. Rhythm of Resilience: How Dance Became a Lifeline",
    subtitle: "Unfiltered Conversation",
    durationLabel: "35:05",
    audioUrl: `/audios/Season 2, Episode 1.mp3`,
    hostImage: img2,
    bgColor: "#2563eb",
    fullDuration: 2105, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/6OLAOHumBR9PrJpaH08uUm?si=1cf4fbfd955247d0",
  },
  {
    id: "s2e2",
    season: "SEASON 2",
    title: "EP 2. Organized Living: Less Stress to More Success",
    subtitle: "World Changers",
    durationLabel: "22:03",
    audioUrl: `/audios/Season 2, Episode 2.mp3`,
    hostImage: img2,
    bgColor: "#1f2937",
    fullDuration: 1323, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/4gOnl4yMUgbjsFbcqk2GDy?si=8239f0594aeb4f66",
  },
  {
    id: "s2e3",
    season: "SEASON 2",
    title:
      "EP 3. Becoming Your Whole Self: Finding Balance Between Tradition and Freedom ",
    subtitle: "Relationships That Last",
    durationLabel: "21:44",
    audioUrl: `/audios/Season 2, Episode 3.mp3`,
    hostImage: img2,
    bgColor: "#7c3aed",
    fullDuration: 1304, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/1czRPzO5eQoBk0rfBgMn7i?si=b60c8caf8a4f4ba7",
  },
  {
    id: "s2e4",
    season: "SEASON 2",
    title: "EP 4. The Truth About Friendship Nobody Talks About",
    subtitle: "Owning the Room",
    durationLabel: "18:30",
    audioUrl: `/audios/Season 2, Episode 4.mp3`,
    hostImage: img2,
    bgColor: "#0ea5e9",
    fullDuration: 1110, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/11l2UOJvuexmsrLhxbvzxO?si=700cf568dd0f46dd",
  },
  {
    id: "s2e5",
    season: "SEASON 2",
    title: " EP 5: Inside the Mindset of World Changers",
    subtitle: "Owning the Room",
    durationLabel: "25:07",
    audioUrl: `/audios/Season 2, Episode 5.mp3`,
    hostImage: img2,
    bgColor: "#0ea5e9",
    fullDuration: 1110, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/5aciKx6KXenv9HRwSc751Q?si=J5d-NQslTxegFr3DNHHGQQ",
  },
  {
    id: "s1e1",
    season: "SEASON 1",
    title: "EP 1. Seeking Parental Approval: Unfiltered Conversation",
    subtitle: "Less Noise, More Signal",
    durationLabel: "15:44",
    audioUrl: `/audios/Season 1, Episode 1.mp3`,
    hostImage: img1,
    bgColor: "#334155",
    fullDuration: 1304, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/5KxwM8Njh7RegFzsgTXdmw?si=073a7a6b5221481b",
  },
  {
    id: "s1e2",
    season: "SEASON 1",
    title: "EP 2. Leaving Your Comfort Zone: Unfiltered Conversation",
    subtitle: "Less Noise, More Signal",
    durationLabel: "14:19",
    audioUrl: `/audios/Season 1, Episode 2.mp3`,
    hostImage: img1,
    bgColor: "#334155",
    fullDuration: 1304, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/2ZB03lcIdrIHGFpYlc1niM?si=cb0fe3972ad34214",
  },
  {
    id: "s1e3",
    season: "SEASON 1",
    title: `EP 3. How Adversity Shapes Leadership: Unfiltered Conversation`,
    subtitle: "Less Noise, More Signal",
    durationLabel: "27:38",
    audioUrl: `/audios/Season 1, Episode 3.mp3`,
    hostImage: img1,
    bgColor: "#334155",
    fullDuration: 1507, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/44txdsT3CwRh6UZXqDCExL?si=9db64947bfc944de",
  },
  {
    id: "s1e4",
    season: "SEASON 1",
    title: "EP 4. Overcoming Other’s Perceptions: Unfiltered Conversation",
    subtitle: "Unfiltered Conversation",
    durationLabel: "20:30",
    audioUrl: `/audios/Season 1, Episode 4.mp3`,
    hostImage: img1,
    bgColor: "#2563eb",
    fullDuration: 1507, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/1iWq67TD1WdMaTBtvdIBbi?si=4cc36f065fea42ba",
  },
  {
    id: "s1e5",
    season: "SEASON 1",
    title: "EP 5. Perseverance: Unfiltered Conversation",
    subtitle: "World Changers",
    durationLabel: "20:12",
    audioUrl: `/audios/Season 1, Episode 5.mp3`,
    hostImage: img1,
    bgColor: "#1f2937",
    fullDuration: 1507, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/74yWSrA17OL18V6mPUWFtC?si=8e6f1ac686024aac",
  },
  {
    id: "s1e6",
    season: "SEASON 1",
    title:
      "EP 6. Finding Happiness by Raising Awareness: Unfiltered Conversation",
    subtitle: "Relationships That Last",
    durationLabel: "24:12",
    audioUrl: `/audios/Season 1, Episode 6.mp3`,
    hostImage: img1,
    bgColor: "#7c3aed",
    fullDuration: 1507, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/5YGQgfxAlGpS5bUVTY6MxB?si=00e5e71cf21549de",
  },
  {
    id: "s1e7",
    season: "SEASON 1",
    title: "EP 7. Overcoming Self-Criticism: Unfiltered Conversation",
    subtitle: "Owning the Room",
    durationLabel: "17:13",
    audioUrl: `/audios/Season 1, Episode 7.mp3`,
    hostImage: img1,
    bgColor: "#0ea5e9",
    fullDuration: 1507, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/0zVcTPMRCet0ZEH16pjVa3?si=dc6fd0ef85414670",
  },
  {
    id: "s1e8",
    season: "SEASON 1",
    title: "EP 8. It’s Lonely at the Top: Unfiltered Conversation",
    subtitle: "Less Noise, More Signal",
    durationLabel: "38:26",
    audioUrl: `/audios/Season 1, Episode 8.mp3`,
    hostImage: img1,
    bgColor: "#334155",
    fullDuration: 1507, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/0cSp54A6SCH0vQNsbh6y9e?si=a9c9be721ab640fd",
  },
  {
    id: "s1e9",
    season: "SEASON 1",
    title: "EP 9. Being Your Authentic Self: Unfiltered Conversation",
    subtitle: "Less Noise, More Signal",
    durationLabel: "25:18",
    audioUrl: `/audios/Season 1, Episode 9.mp3`,
    hostImage: img1,
    bgColor: "#334155",
    fullDuration: 1507, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/4PtzVXYgdbEM7h3NG7Yl6b?si=1948831e87e248b6",
  },
  {
    id: "s1e10",
    season: "SEASON 1",
    title: "EP 10. Seeking Wisdom: Unfiltered Conversation",
    subtitle: "Less Noise, More Signal",
    durationLabel: "29:21",
    audioUrl: `/audios/Season 1, Episode 10.mp3`,
    hostImage: img1,
    bgColor: "#334155",
    fullDuration: 1507, // Full length of audio in seconds (25:07 = 1507 seconds)
    fullPodcastUrl:
      "https://open.spotify.com/episode/2OQTBXt90ITibLeydw6TCT?si=75e715136a7841a3",
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

const FriendshipCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const [pendingIndex, setPendingIndex] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const VISIBLE = isMobile ? 1 : 2;

  const slides = useMemo(() => episodes, []);
  const [startIndex, setStartIndex] = useState(0);

  const formatTime = (time) => {
    if (!Number.isFinite(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const audioRefs = useRef(new Map());
  const [playingId, setPlayingId] = useState(null);
  const [times, setTimes] = useState({});

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

  useEffect(() => {
    if (playingId && !visibleIds.includes(playingId)) {
      const prev = audioRefs.current.get(playingId);
      if (prev) prev.pause();
      setPlayingId(null);
    }
  }, [playingId, visibleIds]);
  const prev = () => {
    setDirection("prev");
    setPendingIndex((index - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection("next");
    setPendingIndex((index + 1) % slides.length);
  };
  const onAnimEnd = () => {
    if (pendingIndex !== null) {
      setStartIndex(pendingIndex);
      setIndex(pendingIndex); // ✅ keep index in sync
      setPendingIndex(null);
    }
    setDirection(null);
  };

  // Visible episodes
  const visibleEpisodes = useMemo(() => {
    let list = [];
    for (let i = 0; i < VISIBLE; i++) {
      list.push(slides[(startIndex + i) % slides.length]);
    }
    return list;
  }, [slides, startIndex, VISIBLE]);

  const renderCard = (ep) => {
    const t = times[ep.id] || { current: 0, duration: ep.fullDuration }; // Use fullDuration for preview
    const progressPct = t.duration ? (t.current / t.duration) * 100 : 0;

    return (
      <div key={ep.id} className="activePodcastCard">
        <img
          src={ep.hostImage}
          alt={`${ep.title} ${ep.subtitle}`}
          className="podcastHostImage"
        />

        <div className="podcastDetails">
          <div className="seasonHeader">{ep.season}</div>
          <div className="episodeText">{ep.title}</div>

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
                  className="progressBarDot"
                  style={{ left: `${progressPct}%` }} // Moves the dot based on the progress
                />
              </div>
              <div className="timeDisplay">
                <span>{formatTime(t.current)}</span>
                <span>{ep.durationLabel}</span> {/* Use fullDuration here */}
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

        {/* Listen to full podcast button with href */}
        <a href={ep.fullPodcastUrl} className="listenFullBtn">
          <span>LISTEN TO FULL PODCAST</span>
          <img src={playIcon} alt="Play Icon" className="listenBtnIcon" />
        </a>
      </div>
    );
  };

  const leftIdx = (index - 1 + slides.length) % slides.length;
  const rightIdx = (index + 1) % slides.length;

  return (
    <>
      <div className="maindiv-med">
        <img className="heading-med" src={Heading} />
        <div className="friendship-carousel">
          <button className="nav left" onClick={prev} aria-label="Previous">
            <ArrowLeft />
          </button>

          <div className="deck">
            {/* Prev preview */}
            <article
              className={`card prev ${
                direction === "prev" ? "becoming-active" : ""
              }`}
            >
              <img src={FINDBOX} alt="frame preview" className="ghost-frame" />
            </article>

            {/* Active card with content */}
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
            {/* Next preview */}
            <article
              className={`card next ${
                direction === "next" ? "becoming-active" : ""
              }`}
            >
              <img src={FINDBOX} alt="frame preview" className="ghost-frame" />
            </article>
          </div>

          <button className="nav right" onClick={next} aria-label="Next">
            <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default FriendshipCarousel;

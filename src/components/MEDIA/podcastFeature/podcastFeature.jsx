import React, { useState, useRef, useEffect } from "react";
import leftimg from "../../../assets/Rectangle 20.png";
import playIcon from "../../../assets/noto_play-button(2).svg";
import "./podcastFeature.css";

const PodcastFeature = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1391); // 23:11 in seconds as fallback
  const audioRef = useRef(null);

  // Using a dummy audio file from freesound.org
  const audioSrc = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 1391);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="podcast-container">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className="podcast-content">
        {/* Image Section */}
        {/* Yellow border frame */}
        <div className="image-content">
          <img src={leftimg} alt="Podcast guests" className="podcast-image" />
        </div>

        {/* Content Section */}
        <div className="content-section">
          <h1 className="main-title">
            Podcast Feature:
            <span className="subtitle">
              My Journey & Advice for First-Year Students
            </span>
          </h1>
          <p className="description">
            Tristan was invited by Fit for Business, an award-winning program
            for first-year Ted Rogers School students, to share his journey from
            winning Frosh Leader of the Year in 2024 to becoming a professional
            dance instructor, multi-business owner, and podcast host.
          </p>

          {/* Player Section */}
          <div className="player-section">
            <div className="player-controls">
              <button className="listen-btn">
                LISTEN TO FULL PODCAST
                <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
              </button>

              <div className="audio-player">
                <span onClick={togglePlay} className="play-icon">
                  {isPlaying ? "⏸" : "▶"}
                </span>

                <div className="player-info">
                  <div className="episode-title">
                    80. Transforming Anxiety into Confidence with Tristan Kim.
                  </div>

                  <div className="progress-section">
                    <span className="time-current">
                      {formatTime(currentTime)}
                    </span>

                    <div className="progress-bar" onClick={handleProgressClick}>
                      <div
                        className="progress-fill"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      ></div>
                      <div
                        className="progress-handle"
                        style={{ left: `${(currentTime / duration) * 100}%` }}
                      ></div>
                    </div>

                    <span className="time-total">{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastFeature;

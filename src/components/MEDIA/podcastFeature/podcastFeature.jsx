import React, { useState, useRef, useEffect } from "react";
import leftimg from "../../../assets/Top Section Sketch.      .png";
import playIcon from "../../../assets/noto_play-button(2).svg";
import { Play, Pause } from "lucide-react";

import "./podcastFeature.css";

const PodcastFeature = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1391);
  const [isMobile, setIsMobile] = useState(false);
  const audioRef = useRef(null);

  const audioSrc = "/podcast.mp3";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

      {isMobile ? (
        // MOBILE LAYOUT: Text Left, Image Right, Player Full Width Below
        <div className="podcast-content">
          {/* Content Section - LEFT */}
          <div className="content-section">
            <h1 className="main-title">
              Podcast Feature:
              <span className="subtitle">
                My Journey & Advice for First-Year Students
              </span>
            </h1>
            <p className="description">
              Tristan was invited by Fit for Business, an award-winning program
              for first-year Ted Rogers School students, to share his journey
              from winning Frosh Leader of the Year in 2024 to becoming a
              professional dance instructor, multi-business owner, and podcast
              host.
            </p>
          </div>

          {/* Image Section - RIGHT */}
          <div className="image-content">
            <img src={leftimg} alt="Podcast guests" className="podcast-image" />
          </div>

          {/* Player Section - FULL WIDTH BELOW */}
          <div className="player-section">
            <div className="player-controls">
              <a
                href="https://open.spotify.com/episode/2sblTWkIcoPz6S9P0uQe8s?si=ec2bfeff0c364c71"
                target="_blank"
                rel="noopener noreferrer"
                className="listen-btn inline-flex items-center gap-3"
              >
                LISTEN TO FULL PODCAST
                <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
              </a>

              <div className="audio-player">
                <div className="player-info">
                  <div className="episode-title">
                    <span>80.</span>{" "}
                    <span className="ml-4">
                      Transforming Anxiety into Confidence with Tristan Kim.
                    </span>
                  </div>

                  <div className="progress-section">
                    <button onClick={togglePlay} className="play-icon">
                      {isPlaying ? (
                        <Pause fill="black" stroke="none" size={30} />
                      ) : (
                        <Play fill="black" stroke="none" size={30} />
                      )}
                    </button>

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
      ) : (
        // DESKTOP LAYOUT: Original Structure
        <div className="podcast-content">
          {/* Image Section */}
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
              for first-year Ted Rogers School students, to share his journey
              from winning Frosh Leader of the Year in 2024 to becoming a
              professional dance instructor, multi-business owner, and podcast
              host.
            </p>

            {/* Player Section */}
            <div className="player-section">
              <div className="player-controls">
                <a
                  href="https://open.spotify.com/episode/2sblTWkIcoPz6S9P0uQe8s?si=ec2bfeff0c364c71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="listen-btn inline-flex items-center gap-3"
                >
                  LISTEN TO FULL PODCAST
                  <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
                </a>

                <div className="audio-player">
                  <div className="player-info">
                    <div className="episode-title">
                      <span className="-ml-14 ">80.</span>{" "}
                      <span className="ml-4">
                        Transforming Anxiety into Confidence with Tristan Kim.
                      </span>
                    </div>

                    <div className="progress-section">
                      <button onClick={togglePlay} className="play-icon">
                        {isPlaying ? (
                          <Pause fill="black" stroke="none" size={30} />
                        ) : (
                          <Play fill="black" stroke="none" size={30} />
                        )}
                      </button>

                      <span className="time-current">
                        {formatTime(currentTime)}
                      </span>

                      <div
                        className="progress-bar"
                        onClick={handleProgressClick}
                      >
                        <div
                          className="progress-fill"
                          style={{
                            width: `${(currentTime / duration) * 100}%`,
                          }}
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
      )}
    </div>
  );
};

export default PodcastFeature;

import React, { useEffect, useRef, useState } from "react";

// Utility to load YouTube API only once
let youtubeAPIReady = false;
let youtubeAPILoadCallbacks = [];

function loadYouTubeAPI(callback) {
  if (youtubeAPIReady) {
    callback();
  } else {
    youtubeAPILoadCallbacks.push(callback);

    if (!window.onYouTubeIframeAPIReady) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => {
        youtubeAPIReady = true;
        youtubeAPILoadCallbacks.forEach(cb => cb());
        youtubeAPILoadCallbacks = [];
      };
    }
  }
}

const Vid = ({ videoId }) => {
  const playerRef = useRef(null);
  const uniqueId = useRef(`yt-player-${Math.random().toString(36).substr(2, 9)}`);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    loadYouTubeAPI(() => {
      playerRef.current = new window.YT.Player(uniqueId.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          loop: 1,
          playlist: videoId,
          iv_load_policy: 3, // hide annotations
          fs: 0,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
        },
      });
    });
  }, [videoId]);

  const handleToggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      onClick={handleToggleMute}
      className="relative aspect-video w-full h-full cursor-pointer"
    >
      <div
        id={uniqueId.current}
        className="w-full h-full rounded-lg overflow-hidden"
        style={{ pointerEvents: "none" }} // disables title hover
      />
      <div className="absolute inset-0 z-10" />
    </div>
  );
};

export default Vid;

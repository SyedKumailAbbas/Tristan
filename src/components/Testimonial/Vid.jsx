"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Vid({ videoId, className = "", vidpause = true }) {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [showIframe, setShowIframe] = useState(!vidpause ? true : false);

  // Load YouTube API dynamically (client-only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.YT && window.YT.Player) return;

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
  }, []);

  // Create YouTube Player after click or auto
  // ...existing code...
  useEffect(() => {
    if (!showIframe) return;
    if (typeof window === "undefined") return;

    const checkReady = setInterval(() => {
      if (window.YT && window.YT.Player) {
        clearInterval(checkReady);

        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId,
          playerVars: {
            autoplay: 1,
            controls: vidpause ? 1 : 1, // Hide controls if autoplay
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
            fs: 1,
            mute: vidpause ? 1 : 1, // Mute if autoplay
          },
        });
      }
    }, 200);

    return () => clearInterval(checkReady);
  }, [showIframe, videoId, vidpause]);
  // ...existing code...
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg ${className}`}
      style={{ aspectRatio: "16 / 9" }}
    >
      {/* Thumbnail + Play Button (only if vidpause is true) */}
      {vidpause === true && !showIframe && (
        <button
          type="button"
          onClick={() => setShowIframe(true)}
          className="absolute inset-0 grid place-items-center focus:outline-none"
          aria-label="Play video"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <span className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-black/60 transition hover:bg-black/40">
            <svg
              viewBox="0 0 24 24"
              width="64"
              height="64"
              style={{ padding: 16 }}
            >
              <path fill="#fff" d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {/* YouTube iframe container */}
      {showIframe && (
        <div
          ref={containerRef}
          className="absolute inset-0 w-full h-full rounded-lg overflow-hidden"
        />
      )}
    </div>
  );
}

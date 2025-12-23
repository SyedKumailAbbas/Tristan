import React, { Suspense, lazy, useEffect } from "react";

import High from "../components/Keynotes/HighImage";
import Headtristan from "../components/Keynotes/headimage";
const Secondary = lazy(() => import("../components/Keynotes/secondaryimage"));
const CORPORATION = lazy(() => import("../components/Keynotes/CorpImage"));

export default function Keynote() {
  useEffect(() => {
    const hash = window.location.hash; // e.g. #highschool
    if (!hash) return;

    // Give components time to lazy-load & mount
    const timeout = setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        const images = target.querySelectorAll("img");
        const imagePromises = Array.from(images).map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete) resolve();
              else img.onload = resolve;
            })
        );

        Promise.all(imagePromises).then(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }, 800); // ⏳ give it some time after render (adjust as needed)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
      <Headtristan />
      <div id="highschool">
        <High />
      </div>
      <div id="university">
        <Secondary />
      </div>
      <div id="corp">
        <CORPORATION />
      </div>
    </Suspense>
  );
}

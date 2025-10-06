import React, { Suspense, lazy } from "react";

const High = lazy(() => import("../components/Keynotes/HighImage"));
const Secondary = lazy(() => import("../components/Keynotes/secondaryimage"));
const CORPORATION = lazy(() => import("../components/Keynotes/CorpImage"));
const Headtristan = lazy(() => import("../components/Keynotes/headimage"));

export default function Keynote() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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

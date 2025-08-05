import React from "react";

const RightBorder = ({ width = 500, height = 200, steps = 25 }) => {
  const segmentHeight = height / steps;
  const pathCommands = [`M${width},0`, `L${width - 8},0`];
  const shapes = [];

  let y = 0;
  for (let i = 0; i < steps; i++) {
    // Make curve go deeper into content (increase range)
    const cp1x = Math.random() * 15 + 10; // 10–25
    const cp2x = Math.random() * 15 + 10; // 10–25
    const endX = Math.random() * 20 + 5; // 5–25, i.e., deep toward left
    const cp1y = y + segmentHeight / 3;
    const cp2y = y + (2 * segmentHeight) / 3;
    const endY = y + segmentHeight;

    pathCommands.push(`C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`);

    // More blobs per segment
    const blobCount = Math.floor(Math.random() * 3) + 2; // 2–4 blobs
    for (let j = 0; j < blobCount; j++) {
      const cx = endX + Math.random() * 8 - 2; // Spread out more
      const cy = endY + Math.random() * 16 - 8;
      const r = Math.random() * 3 + 1; // Bigger blobs (1–4)

      shapes.push(
        <circle
          key={`blob-${i}-${j}`}
          cx={cx}
          cy={cy}
          r={r}
          fill="black"
          opacity={Math.random() * 0.5 + 0.4} // More visible
        />
      );
    }

    y = endY;
  }

  pathCommands.push(`L${width},${height}`, "Z");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      preserveAspectRatio="none"
    >
      <path d={pathCommands.join(" ")} fill="black" />
      {shapes}
    </svg>
  );
};

export default RightBorder;

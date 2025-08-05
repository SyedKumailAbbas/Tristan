import React from "react";

const TopBorder = ({ width = 9000, height = 30, steps = 700 }) => {
  const segmentWidth = width / steps;
  const pathCommands = [`M0,0`]; // Start from top-left
  const shapes = [];

  let x = 0;
  for (let i = 0; i < steps; i++) {
    // Inverted curve going downward
    const cp1y = Math.random() * 10 + 10; // 10–20
    const cp2y = Math.random() * 10 + 10; // 10–20
    const endY = Math.random() * 12 + 12; // 12–24

    const cp1x = x + segmentWidth / 3;
    const cp2x = x + (2 * segmentWidth) / 3;
    const endX = x + segmentWidth;

    pathCommands.push(`C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`);

    // More visible blobs
    const blobCount = Math.floor(Math.random() * 3) + 2;
    for (let j = 0; j < blobCount; j++) {
      const cx = endX + Math.random() * 16 - 8;
      const cy = endY - Math.random() * 8; // Pull them upward so they "hang"
      const r = Math.random() * 3 + 1.5;

      shapes.push(
        <circle
          key={`blob-${i}-${j}`}
          cx={cx}
          cy={cy}
          r={r}
          fill="black"
          opacity={Math.random() * 0.5 + 0.4}
        />
      );
    }

    x = endX;
  }

  // Close path back to top-right corner and across
  pathCommands.push(`L${width},0`, "Z");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      preserveAspectRatio="none"
      style={{ display: "block" }}
    >
      <path d={pathCommands.join(" ")} fill="black" />
      {shapes}
    </svg>
  );
};

export default TopBorder;

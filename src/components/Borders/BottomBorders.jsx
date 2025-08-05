import React from "react";

const BottomBorder = ({ width = 500, height = 200, steps = 25 }) => {
  const segmentWidth = width / steps;
  const pathCommands = [`M0,${height}`, `L0,${height - 8}`];
  const shapes = [];

  let x = 0;
  for (let i = 0; i < steps; i++) {
    // Create natural random curve
    const cp1y = Math.random() * 15 + 10; // 10–25
    const cp2y = Math.random() * 15 + 10;
    const endY = Math.random() * 20 + 5; // 5–25 upward into content
    const cp1x = x + segmentWidth / 3;
    const cp2x = x + (2 * segmentWidth) / 3;
    const endX = x + segmentWidth;

    pathCommands.push(`C${cp1x},${height - cp1y} ${cp2x},${height - cp2y} ${endX},${height - endY}`);

    // Add blob decorations (same idea)
    const blobCount = Math.floor(Math.random() * 3) + 2;
    for (let j = 0; j < blobCount; j++) {
      const cx = endX + Math.random() * 16 - 8;
      const cy = height - endY + Math.random() * 8 - 2;
      const r = Math.random() * 3 + 1;

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

export default BottomBorder;

"use client";

import React from "react";

interface GridOfDotsProps {
  rows: number; // Number of rows
  cols: number; // Number of columns
  dotSize?: string; // Size of each dot (e.g., "4px", "8px")
  gap?: string; // Gap between dots (e.g., "10px", "20px")
  color?: string; // Color of the dots
}

const GridOfDots: React.FC<GridOfDotsProps> = ({
  rows,
  cols,
  dotSize = "8px",
  gap = "16px",
  color = "black",
}) => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${rows}, ${dotSize})`,
        gridTemplateColumns: `repeat(${cols}, ${dotSize})`,
        gap: gap,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => (
        <div
          key={index}
          className="rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default GridOfDots;

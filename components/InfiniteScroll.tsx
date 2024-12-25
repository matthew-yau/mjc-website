"use client";
import React from "react";

export default function InfiniteScroll() {
  return (
    <div className="relative overflow-hidden bg-[#FAFAFA] h-16">
      {/* Infinite Scroll Content */}
      <div className="cassette-scroll flex items-center gap-8 whitespace-nowrap">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {/* Japanese Text */}
              <div className="text-[#1f1f1f] text-2xl font-semibold">
                モナシュ日本クラブ
              </div>

              {/* First Logo */}
              <img
                src="/images/noback.png" // Replace with your actual logo path
                alt="MJC Logo"
                className="w-16 h-16 object-contain"
              />

              {/* English Text */}
              <div className="text-[#1f1f1f] text-2xl font-semibold">
                Monash Japanese Club
              </div>

              {/* Second Logo */}
              <img
                src="/images/3logo.png" // Replace with your actual second logo path
                alt="MJC Logo"
                className="w-16 h-16 object-contain"
              />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

"use client";

import React from "react";

const OverlappingCircles: React.FC = () => {
  return (
    <div className="relative mt-16">
      {/* Large Circle */}
      <div
        className="absolute"
        style={{
          top: "-300px",
          left: "80%",
          transform: "translateX(-50%)",
          width: "9rem",
          height: "9rem",
          backgroundColor: "#f6787a",
          borderRadius: "50%",
          zIndex: 10,
        }}
      ></div>
      {/* Small Circle */}
      <div
        className="absolute"
        style={{
          top: "-130px",
          left: "83%",
          width: "7rem",
          height: "7rem",
          backgroundColor: "#ff9dd5",
          borderRadius: "50%",
          zIndex: 0,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      {/* Image on Top */}
      <img
        src="/images/chat.png"
        alt="Chat Bubbles"
        className="absolute"
        style={{
          top: "-170px",
          left: "75%",
          transform: "translate(-50%, -50%)",
          width: "20rem", // Adjust image size as needed
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default OverlappingCircles;

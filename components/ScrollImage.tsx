"use client";

import React, { useEffect, useRef, useState } from "react";

const ScrollImage: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Cleanup observer
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div
        ref={imageRef}
        className={`transition-transform duration-1000 ease-out opacity-0 translate-x-[-100%]
          ${isVisible ? "translate-x-0 opacity-100" : ""}`}
      >
        <img
          src="/images/yakuza.png/" // Path relative to the 'public' folder
          alt="Scroll Animation"
          className="w-[300px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ScrollImage;

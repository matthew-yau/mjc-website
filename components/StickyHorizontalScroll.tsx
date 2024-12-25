"use client";
import React, { useRef, useEffect, useState } from "react";

export default function StickyHorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const horizontal = horizontalRef.current;

      if (section && horizontal) {
        const scrollTop = window.scrollY; // Vertical scroll position
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Calculate scroll progress based on section's height
        const progress = Math.min(
          Math.max(
            (scrollTop - sectionOffsetTop) /
              (sectionHeight - window.innerHeight),
            0
          ),
          1
        );

        setScrollProgress(progress);

        // Apply horizontal transform based on progress
        horizontal.style.transform = `translateX(-${progress * 200}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[300vh] bg-gray-100">
      {/* Sticky Section */}
      <div ref={sectionRef} className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/yakuza.png')",
          }}
        ></div>

        {/* Horizontal Content */}
        <div
          ref={horizontalRef}
          className="absolute top-0 left-0 h-full flex gap-0"
          style={{ transition: "transform 0.1s linear" }}
        >
          {/* Membership Reason 1 */}
          <div className="min-w-screen flex items-center justify-center bg-white">
            <div className="p-8 text-center">
              <h2 className="text-4xl font-bold">🎉 Reason 1: Community</h2>
              <p className="text-lg text-gray-600">
                Join a friendly and active community passionate about Japanese
                culture and language.
              </p>
            </div>
          </div>

          {/* Membership Reason 2 */}
          <div className="min-w-screen flex items-center justify-center bg-blue-100">
            <div className="p-8 text-center">
              <h2 className="text-4xl font-bold">🎊 Reason 2: Events</h2>
              <p className="text-lg text-gray-600">
                Access exclusive events, workshops, and cultural activities.
              </p>
            </div>
          </div>

          {/* Membership Reason 3 */}
          <div className="min-w-screen flex items-center justify-center bg-yellow-100">
            <div className="p-8 text-center">
              <h2 className="text-4xl font-bold">🚀 Reason 3: Resources</h2>
              <p className="text-lg text-gray-600">
                Get access to language resources, study groups, and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

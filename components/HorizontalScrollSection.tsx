"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const activities = [
  {
    title: "Kaiwa",
    description: "Improve your Japanese conversational skills with peers.",
    image: "/images/kaiwa.jpg",
  },
  {
    title: "Nihongo Workshop",
    description:
      "Join workshops to improve grammar, vocabulary, and writing skills.",
    image: "/images/nihongo.jpg",
  },
  {
    title: "Social Events",
    description: "Meet new friends and enjoy fun social activities together.",
    image: "/images/social.jpg",
  },
  {
    title: "Cultural Events",
    description:
      "Experience traditional and modern Japanese culture through events.",
    image: "/images/cultural.jpg",
  },
];

const HorizontalScrollSection = () => {
  const racesRef = useRef<HTMLDivElement>(null);
  const racesWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const races = racesRef.current;
    const racesWrapper = racesWrapperRef.current;
    if (!races || !racesWrapper) return;

    function getScrollAmount() {
      const racesWidth = races.scrollWidth;
      return racesWidth - window.innerWidth; // Positive scroll distance
    }

    // Create the horizontal tween
    const tween = gsap.to(races, {
      x: () => -getScrollAmount(),
      ease: "none",
      duration: 1,
    });

    // Create a ScrollTrigger instance
    const trigger = ScrollTrigger.create({
      trigger: racesWrapper,
      start: "top top",
      end: () => `+=${getScrollAmount()}`,
      pin: true,
      scrub: 0.5,
      animation: tween,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    // Ensure all images are loaded before calculating measurements
    const images = races.querySelectorAll("img");
    let loadedCount = 0;
    const totalImages = images.length;

    const checkAllImagesLoaded = () => {
      if (loadedCount === totalImages) {
        ScrollTrigger.refresh();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
        checkAllImagesLoaded();
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          checkAllImagesLoaded();
        });
        img.addEventListener("error", () => {
          loadedCount++;
          checkAllImagesLoaded();
        });
      }
    });

    // If no images or all already loaded
    if (totalImages === 0 || loadedCount === totalImages) {
      ScrollTrigger.refresh();
    }

    // Cleanup
    return () => {
      tween.kill();
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={racesWrapperRef}
      className="relative h-screen overflow-hidden bg-gray-900"
    >
      <div ref={racesRef} className="races flex w-max gap-8 py-12 px-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="min-w-[300px] h-[70vh] flex-shrink-0 bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {activity.title}
            </h3>
            <p className="text-gray-600">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScrollSection;

"use client";

import React, { useRef } from "react";
import useIsVisible from "@/hooks/useIsVisible";
import OverlappingCircles from "./OverlappingCircles";

interface ActivityBoxProps {
  icon: string;
  title: string;
  description: string;
}

const ActivityBox = ({ icon, title, description }: ActivityBoxProps) => (
  <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 sm:max-w-[350px] md:max-w-[300px]">
    {/* Image Section */}
    <div className="w-full h-[220px] sm:h-[300px] md:h-[180px] overflow-hidden">
      <img
        src={icon}
        alt={`${title} Icon`}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Title Section */}
    <div className="px-4 py-2">
      <h3 className="text-lg sm:text-2xl md:text-xl font-bold text-gray-800 text-center">
        {title}
      </h3>
    </div>

    {/* Text Content */}
    <div className="px-4 pb-4">
      <p className="text-sm sm:text-lg md:text-base text-gray-600 text-center">
        {description}
      </p>
    </div>
  </div>
);

export default function SecondSection() {
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  return (
    <div
      ref={ref2}
      className={`transition-opacity duration-700 ${
        isVisible2 ? "opacity-100" : "opacity-0"
      } h-auto md:h-[900px] bg-[#96d0ff] px-4 md:px-8 pb-20 md:pb-0`}
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col justify-center h-full">
        <div className="container">
          {/* Title Section */}
          <p className="text-[#FA5050] text-xl md:text-2xl font-semibold text-center md:text-left leading-tight max-w-lg mx-auto md:ml-64">
            活動報告
          </p>
          <h2 className="text-black text-2xl md:text-4xl font-bold text-center md:text-left leading-tight max-w-lg mx-auto md:ml-64 mt-4">
            Dive into Japanese Language and Culture with us!
          </h2>
          <p className="text-black text-base md:text-lg leading-relaxed text-center md:text-left max-w-2xl mx-auto md:ml-64 mt-4">
            Make new friendships and immerse yourself in Japanese language and
            culture at our weekly, fortnightly, and annual events!
          </p>
          {/* Overlapping Circles */}
          <div className="hidden md:block">
            <OverlappingCircles />
          </div>

          {/* Centered Activity Boxes */}
          <div className="flex justify-center items-center w-full mt-10 md:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <ActivityBox
                icon="/images/kaiwa.png"
                title="🗣️ Weekly Kaiwa"
                description="Engage in fun and interactive Japanese conversations, designed to help you practice and improve your language skills in a casual, friendly environment."
              />
              <ActivityBox
                icon="/images/kendo.jpg"
                title="📚 Language Workshops"
                description="Improve your Japanese language skills through activities led by experienced speakers and tailored to all proficiency levels."
              />
              <ActivityBox
                icon="/images/ball2.jpg"
                title="🎉 Social Events"
                description="Build lasting friendships and connect with like-minded individuals through vibrant gatherings, games, and cultural celebrations."
              />
              <ActivityBox
                icon="/images/matcha.png"
                title="🌸 Cultural Events"
                description="Immerse yourself in our Japanese cultural events such as tea ceremonies, calligraphy, and movie screenings."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

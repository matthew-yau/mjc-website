"use client";

import React, { useRef } from "react";
import useIsVisible from "@/hooks/useIsVisible";
import OverlappingCircles from "./OverlappingCircles";
import GridOfDots from "./GridOfDots";

interface ActivityBoxProps {
  icon: string;
  title: string;
  description: string;
}

const ActivityBox = ({ icon, title, description }: ActivityBoxProps) => (
  <div
    className="flex flex-col items-center p-8 bg-[#f8fafc] rounded-lg transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_rgb(239,37,60)]"
    style={{
      maxWidth: "300px",
      minHeight: "350px",
      boxShadow: "0 0 20px rgb(0, 0, 0)", // Red shadow effect
      border: "2px solid rgb(0, 0, 0)", // Optional red border
    }}
  >
    <div className="w-[300px] h-[180px] mb-6">
      <img
        src={icon}
        alt={`${title} Icon`}
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <p className="text-base text-gray-600 text-center">{description}</p>
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
      } h-[900px] bg-[#f8fafc] px-8`}
    >
      <div className="container mx-auto px-8 flex flex-col justify-center h-full">
        <div className="container">
          {/* Title Section */}
          <p className="text-[#FA5050] text-2xl font-semibold text-left leading-tight max-w-lg ml-64">
            活動報告
          </p>
          <h2 className="text-black text-4xl font-bold text-left leading-tight max-w-lg ml-64 mt-4">
            Dive into Japanese Language and Culture with us!
          </h2>
          <p className="text-black text-lg leading-relaxed text-left max-w-2xl ml-64 mt-4">
            Make new friendships and immerse yourself in Japanese language and
            culture at our weekly, fortnightly, and annual events!
          </p>
          {/* Overlapping Circles */}
          <OverlappingCircles />

          {/* Activity Boxes */}
          <div className="grid grid-cols-4 gap-1 w-full px-0 max-w-[1280px] mx-auto mt-20">
            <ActivityBox
              icon="/images/yakuza.png"
              title="🗣️ Weekly Kaiwa"
              description="Engage in fun and interactive Japanese conversations, designed to help you practice and improve your language skills in a casual, friendly environment."
            />
            <ActivityBox
              icon="/images/meirl.png"
              title="📚 Language Workshops"
              description="Improve your Japanese language skills through activities led by experienced speakers and tailored to all proficiency levels."
            />
            <ActivityBox
              icon="/images/ball2.jpg"
              title="🎉 Social Events"
              description="Build lasting friendships and connect with like-minded individuals through vibrant gatherings, games, and cultural celebrations."
            />
            <ActivityBox
              icon="/images/mahjong2.jpg"
              title="🌸 Cultural Events"
              description="Immerse yourself in our Japanese cultural events such as tea ceremonies, calligraphy, and movie screenings."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

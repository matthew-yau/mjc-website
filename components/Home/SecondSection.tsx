"use client";

import React, { useRef } from "react";
import useIsVisible from "@/hooks/useIsVisible";
import OverlappingCircles from "./OverlappingCircles";

interface ActivityBoxProps {
  icon: string;
  title: { en: string; jp: string };
  description: { en: string; jp: string };
  language: "en" | "jp";
}

const ActivityBox = ({
  icon,
  title,
  description,
  language,
}: ActivityBoxProps) => (
  <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 sm:max-w-[350px] md:max-w-[300px]">
    {/* Image Section */}
    <div className="w-full h-[220px] sm:h-[300px] md:h-[180px] overflow-hidden">
      <img
        src={icon}
        alt={`${language === "en" ? title.en : title.jp} Icon`}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Title Section */}
    <div className="px-4 py-2">
      <h3 className="text-lg sm:text-2xl md:text-xl font-bold text-gray-800 text-center">
        {language === "en" ? title.en : title.jp}
      </h3>
    </div>

    {/* Text Content */}
    <div className="px-4 pb-4">
      <p className="text-sm sm:text-lg md:text-base text-gray-600 text-center">
        {language === "en" ? description.en : description.jp}
      </p>
    </div>
  </div>
);

export default function SecondSection({ language }: { language: "en" | "jp" }) {
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  return (
    <div className="relative pt-20 md:pt-20 bg-[#000f46]">
      {/* Section Content with Fade-in Effect */}
      <div
        ref={ref2}
        className={`transition-opacity duration-700 ${
          isVisible2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="px-4 md:px-8 pb-20 pt-10 sm:pt-20">
          <div className="container mx-auto px-4 md:px-8 flex flex-col justify-center h-full">
            <div className="container">
              <h2 className="text-gray-200 text-2xl md:text-4xl font-bold text-center md:text-left leading-tight max-w-lg mx-auto md:ml-64 mt-4">
                {language === "en" ? (
                  <>
                    Dive into Japanese <br /> Language and Culture!
                  </>
                ) : (
                  <>日本語と文化に飛び込もう！</>
                )}
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center md:text-left max-w-2xl mx-auto md:ml-64 mt-4">
                {language === "en" ? (
                  <>
                    Make new friendships, immerse yourself in <br />
                    Japanese language and culture, and join our <br />
                    weekly, fortnightly, and annual events!
                  </>
                ) : (
                  <>
                    新しい友達を作り、日本語と文化に浸り、
                    <br />
                    毎週、隔週、年間イベントに 参加しましょう！
                  </>
                )}
              </p>

              {/* Overlapping Circles */}
              <div className="hidden md:block">
                <OverlappingCircles />
              </div>

              {/* Centered Activity Boxes */}
              <div className="flex justify-center items-center w-full mt-10 md:mt-20 mb-16 md:mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <ActivityBox
                    icon="/images/kaiwa.png"
                    title={{
                      en: "🗣️ Weekly Kaiwa",
                      jp: "🗣️ 週刊会話",
                    }}
                    description={{
                      en: "Engage in fun and interactive Japanese conversations, designed to help you practice and improve your language skills in a casual, friendly environment.",
                      jp: "楽しいインタラクティブな日本語会話に参加して、気軽で親しみやすい環境で言語スキルを練習して向上させましょう。",
                    }}
                    language={language}
                  />
                  <ActivityBox
                    icon="/images/kendo.jpg"
                    title={{
                      en: "📚 Language Workshops",
                      jp: "📚 言語ワークショップ",
                    }}
                    description={{
                      en: "Improve your Japanese language skills through activities led by experienced speakers and tailored to all proficiency levels.",
                      jp: "経験豊富な話者が主催し、すべてのレベルに合わせたアクティビティを通じて日本語スキルを向上させましょう。",
                    }}
                    language={language}
                  />
                  <ActivityBox
                    icon="/images/ball2.jpg"
                    title={{
                      en: "🎉 Social Events",
                      jp: "🎉 ソーシャルイベント",
                    }}
                    description={{
                      en: "Build lasting friendships and connect with like-minded individuals through vibrant gatherings, games, and cultural celebrations.",
                      jp: "活気ある集まり、ゲーム、文化的な祝典を通じて、永続的な友情を築き、共通の興味を持つ人々とつながりましょう。",
                    }}
                    language={language}
                  />
                  <ActivityBox
                    icon="/images/matcha.png"
                    title={{
                      en: "🌸 Cultural Events",
                      jp: "🌸 文化イベント",
                    }}
                    description={{
                      en: "Immerse yourself in our Japanese cultural events such as tea ceremonies, calligraphy, and movie screenings.",
                      jp: "茶道、書道、映画上映などの日本文化イベントに浸りましょう。",
                    }}
                    language={language}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

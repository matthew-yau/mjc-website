"use client";
import React, { useRef } from "react";
import useIsVisible from "@/hooks/useIsVisible";
import Link from "next/link";

export default function FirstSection({ language }: { language: "en" | "jp" }) {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const translations = {
    heading: {
      en: "Welcome to the Monash Japanese Club!",
      jp: "モナッシュ日本クラブへようこそ！",
    },
    paragraph1: {
      en: "At MJC, we aim to cultivate and enrich people's understanding and passion towards all things Japanese.",
      jp: "MJCでは、日本のすべてに対する人々の理解と情熱を育み、豊かにすることを目指しています。",
    },
    paragraph2: {
      en: "We pride ourselves on maintaining a fun, friendly environment for everyone interested in Japanese culture and building a bridge between Australia-Japan relations.",
      jp: "日本文化に興味のあるすべての人々にとって楽しくフレンドリーな環境を維持し、日豪関係の架け橋を築くことを誇りに思っています。",
    },
    learnMore: {
      en: "Learn more",
      jp: "もっと詳しく",
    },
  };

  return (
    <div
      ref={ref1}
      className={`transition-opacity duration-700 overflow-hidden ${
        isVisible1 ? "opacity-100" : "opacity-0"
      } relative h-[calc(100vh-88px)] bg-[#FAFAFA] px-4 sm:px-8`}
    >
      {/* Torii Image at Bottom-Right */}
      <div className="absolute top-[calc(100%-200px)] sm:top-[calc(100%-493px)] right-0">
        <img
          src="/images/tori.png"
          alt="Torii Gate"
          className="w-[300px] sm:w-[600px] md:w-[800px]"
        />
      </div>
      {/* Centered Content */}
      <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
        {/* Two-Column Layout */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="relative flex flex-col justify-center sm:ml-64">
            {/* Japanese Text */}
            <div className="ml-8 sm:ml-6 overflow-visible w-full sm:w-[600px] z-20">
              <h2 className="text-[#1f1f1f] font-mplus font-semibold tracking-wide text-2xl sm:text-4xl leading-tight z-20 sm:ml-32 animate-slideUpFade">
                {language === "jp"
                  ? "モナッシュ日本クラブへ"
                  : "モナッシュ日本クラブへ"}
              </h2>
            </div>
            <h1 className="whitespace-nowrap text-[#1f1f1f] font-bold text-6xl sm:text-8xl mb-4 sm:mb-8 leading-tight z-20 -translate-x-0 sm:-translate-x-16 translate-y-8 sm:translate-y-16 animate-slideUpFade">
              {language === "jp" ? "ようこそ" : "ようこそ"}
            </h1>

            {/* Overlapping Circles */}
            <div className="absolute top-0 left-0 translate-x-2 -translate-y-2 w-16 h-16 bg-[#75C9FE] rounded-full z-0 sm:left-0 sm:-translate-x-56 sm:-translate-y-10 sm:w-36 sm:h-36 z-10"></div>
            <div className="absolute top-4 -left-12 translate-x-2 translate-y-2 w-24 h-24 bg-[#f6787a] rounded-full z-0 sm:left-0 sm:-translate-x-36 sm:-translate-y-2 sm:w-44 sm:h-44"></div>

            {/* Welcome Text */}
            <div className="w-full max-w-full sm:max-w-screen-lg text-[#727986] text-base sm:text-lg leading-relaxed mt-6 mx-auto">
              <h3 className="text-black font-bold text-2xl sm:text-3xl mb-2 sm:mb-4">
                {translations.heading[language]}
              </h3>
              <p>{translations.paragraph1[language]}</p>
              <p className="mt-2 sm:mt-4">
                {translations.paragraph2[language]}
              </p>
              <Link href="/about">
                <button className="btn btn-layered-3d btn-layered-3d--red mt-4 sm:mt-8 px-2 sm:px-3 py-1 text-xs sm:text-sm whitespace-nowrap">
                  {translations.learnMore[language]}
                </button>
              </Link>
            </div>
          </div>
          {/* Right Column */}
          <div className="hidden sm:flex flex-col items-center sm:items-start justify-center relative">
            <div className="relative w-full h-auto z-10">
              {/* First Image */}
              <div className="absolute top-12 sm:top-8 left-6 sm:left-12 transform -translate-x-3 sm:-translate-x-6 -translate-y-10 sm:-translate-y-20 rotate-6">
                <img
                  src="/images/wind.jpg"
                  alt="Japan Scene"
                  className="photo"
                />
              </div>
              {/* Second Image */}
              <div className="absolute top-20 sm:top-20 left-12 sm:left-24 transform -translate-x-5 sm:-translate-x-10 -translate-y-6 sm:-translate-y-12 -rotate-6 w-[350px]">
                <img
                  src="/images/yakuza.png"
                  alt="Subway Scene"
                  className="photo"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

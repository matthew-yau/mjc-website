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
    subheading: {
      en: "Welcome to the Monash Japanese Club!",
      jp: "モナッシュ日本クラブへ！",
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
      } relative h-[calc(100vh-88px)] bg-[#FAFAFA] px-8`}
    >
      {/* Torii Image at Bottom-Right */}
      <div className="absolute top-[calc(100%-493px)] right-0">
        <img
          src="/images/tori.png"
          alt="Torii Gate"
          className="w-[600px] md:w-[800px]"
        />
      </div>
      {/* Centered Content */}
      <div className="container mx-auto px-8 py-16">
        {/* Two-Column Layout */}
        <section className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="relative flex flex-col justify-center ml-64">
            {/* Japanese Text */}
            <div className="ml-6 overflow-visible w-[600px]">
              <h2 className="text-[#1f1f1f] font-mplus font-medium tracking-wide text-4xl leading-tight z-20 ml-32 animate-slideUpFade">
                {language === "jp"
                  ? "モナッシュ日本クラブへ"
                  : "モナッシュ日本クラブへ"}
              </h2>
            </div>
            <h1 className="whitespace-nowrap text-[#1f1f1f] font-bold text-8xl mb-8 leading-tight z-20 -translate-x-16 translate-y-16 animate-slideUpFade">
              {language === "jp" ? "ようこそ" : "ようこそ"}
            </h1>

            {/* Overlapping Circles */}
            <div className="absolute top-0 left-0 -translate-x-56 -translate-y-8 w-36 h-36 bg-[#75C9FE] rounded-full z-10"></div>
            <div className="absolute top-0 left-0 -translate-x-36 translate-y-4 w-44 h-44 bg-[#f6787a] rounded-full z-0"></div>
            {/* Welcome Text */}
            <div className="w-full max-w-screen-lg text-[#727986] text-lg leading-relaxed mt-6 mx-auto">
              <h3 className="text-black font-bold text-3xl mb-4">
                {translations.heading[language]}
              </h3>
              <p>{translations.paragraph1[language]}</p>
              <p className="mt-4">{translations.paragraph2[language]}</p>
              <Link href="/about">
                <button className="btn btn-layered-3d btn-layered-3d--red mt-8 ml-80 px-3 py-1 text-sm whitespace-nowrap">
                  {translations.learnMore[language]}
                </button>
              </Link>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col items-start justify-center relative">
            <div className="relative w-full h-auto z-10">
              {/* First Image */}
              <div className="absolute top-8 left-12 transform -translate-x-6 -translate-y-20 rotate-6">
                <img
                  src="/images/wind.jpg"
                  alt="Japan Scene"
                  className="photo"
                />
              </div>
              {/* Second Image */}
              <div className="absolute top-20 left-24 transform -translate-x-10 -translate-y-12 -rotate-6">
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

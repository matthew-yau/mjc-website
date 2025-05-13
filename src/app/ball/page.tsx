"use client";

import React, { useEffect, useRef, useState } from "react";
import { Fireworks } from "@fireworks-js/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const BallPage: React.FC = () => {
  const fireworksRef = useRef<any>(null);
  const [language, setLanguage] = useState<"en" | "jp">("en");

  useEffect(() => {
    fireworksRef.current?.start();
    return () => {
      fireworksRef.current?.stop();
    };
  }, []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "en" | "jp";
    if (storedLanguage) setLanguage(storedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "jp" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden font-sans">
      {/* Background image container */}
      <div
        className="fixed inset-0 z-[-1] scale-[1.05]"
        style={{
          backgroundImage: "url('/images/ballpaper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
        }}
      />

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start relative z-10 mt-20 gap-y-6 px-4">
        {" "}
        {/* Home button */}
        <Link href="/">
          <Button
            variant="outline"
            size="icon"
            className="bg-white w-12 h-12 rounded-full shadow hover:scale-105 transition-all z-50 fixed top-6 left-6"
          >
            <Home className="w-6 h-6" />
          </Button>
        </Link>
        {/* Language toggle */}
        <div className="fixed top-6 right-6 z-50">
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="bg-white text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <span className="text-lg">{language === "en" ? "🇯🇵" : "🌐"}</span>
            <span>
              {language === "en" ? "日本語に切り替え" : "Switch to English"}
            </span>
          </Button>
        </div>
        <img
          src="/images/ball.png"
          alt="Ball"
          className="w-[500px] h-auto drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]"
        />
        {/* Description box */}
        <div className="bg-white/20 text-neutral-800 p-6 rounded-lg max-w-2xl shadow-md backdrop-blur-md text-center mb-12">
          {/* Logos */}
          <div className="flex flex-row items-center gap-x-6 justify-center p-4">
            <img src="/images/mujc.png" alt="MUJC" className="w-[80px]" />
            <span className="text-5xl font-bold text-white">×</span>
            <img
              src="/images/noback2.png"
              alt="Partner Logo"
              className="w-[80px]"
            />
          </div>

          {language === "en" ? (
            <>
              <h2 className="text-xl font-bold mb-2">
                The Thousand Lanterns: MJC x MUJC Ball
              </h2>
              <p className="mb-4">
                <strong>About</strong>
                <br />
                Monash Japanese Club and Melbourne University Japanese Club
                present…
              </p>
              <p className="mb-4">
                ✨🏮 <strong>The Thousand Lanterns 千灯祭</strong> 🏮✨
                <br />
                <br />
                Step into a night of wonder as lanterns glow and festival magic
                fills the air. 🌸🎐
                <br />
                <br />
                Inspired by Japan’s vibrant matsuri festivals, this is your
                chance to dress up, dance the night away, and celebrate the year
                in true festival style. 🍡👘🎆
                <br />
                <br />
                Think glowing lanterns, laughter echoing through the night, and
                the scent of summer in the air. Invite your friends, we can’t
                wait to see you glow under The Thousand Lanterns 🏮✨
              </p>
              <p className="mb-4">
                👘<strong>DETAILS</strong>🎇
                <br />
                📅 <strong>Date:</strong> 7th August
                <br />
                🕑 <strong>Time:</strong> 6:30-11:30PM
                <br />
                📍 <strong>Location:</strong> San Remo Ballroom - 365 Nicholson
                St, Carlton North VIC 3054
                <br />
                This is an 18+ event. Entry will not be granted without a valid
                ID.
              </p>
              <p>
                <strong>Date:</strong> Thursday 7 August 2025 6:30 PM - 11:30 PM
                (UTC+10)
                <br />
                <strong>Location:</strong> San Remo Ballroom, 365 Nicholson St,
                Carlton North VIC 3054
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-2">
                千灯祭：MJC × MUJC ボール
              </h2>
              <p className="mb-4">
                <strong>概要</strong>
                <br />
                Monash Japanese ClubとMelbourne University Japanese Clubが贈る…
              </p>
              <p className="mb-4">
                ✨🏮 <strong>千灯祭 The Thousand Lanterns</strong> 🏮✨
                <br />
                <br />
                夜空に灯る無数の提灯、祭りの魔法に包まれる幻想的な一夜へようこそ🌸🎐
                <br />
                <br />
                日本の活気ある祭り文化にインスパイアされたこのイベントでは、
                思いきりおしゃれして踊って、1年の締めくくりを盛大にお祝いしましょう。🍡👘🎆
                <br />
                <br />
                輝く提灯、夜に響く笑い声、夏の香りが漂う空間で、あなたの輝きを見せてください🏮✨
              </p>
              <p className="mb-4">
                👘<strong>詳細</strong>🎇
                <br />
                📅 <strong>日付：</strong>8月7日（木）
                <br />
                🕑 <strong>時間：</strong>18:30〜23:30
                <br />
                📍 <strong>場所：</strong>San Remo Ballroom - 365 Nicholson St,
                Carlton North VIC 3054
                <br />
                ※このイベントは18歳以上限定です。有効なIDが必要です。
              </p>
              <p>
                <strong>日付：</strong>2025年8月7日（木）18:30〜23:30（UTC+10）
                <br />
                <strong>場所：</strong>San Remo Ballroom, 365 Nicholson St,
                Carlton North VIC 3054
              </p>
            </>
          )}

          {/* Get Tickets button */}
          <div className="mt-6">
            <a
              href="https://www.trybooking.com/events/landing/1401090"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-neutral-800 font-semibold px-6 py-2 rounded-md border border-gray-200 shadow-sm hover:bg-neutral-100 hover:shadow-md transition-all duration-200"
            >
              {language === "en" ? "Get Tickets" : "チケットを購入"}
            </a>
          </div>
        </div>
      </main>

      {/* Fireworks Overlay */}
      <Fireworks
        ref={fireworksRef}
        options={{
          autoresize: true,
          opacity: 0.5,
          acceleration: 1.05,
          friction: 0.98,
          gravity: 1.5,
          particles: 50,
          traceLength: 3,
          traceSpeed: 5,
          explosion: 5,
          intensity: 10,
          flickering: 50,
          lineStyle: "round",
          hue: { min: 0, max: 60 },
          delay: { min: 60, max: 90 },
          rocketsPoint: { min: 50, max: 50 },
          lineWidth: {
            explosion: { min: 2, max: 4 },
            trace: { min: 1, max: 3 },
          },
          brightness: { min: 60, max: 90 },
          decay: { min: 0.01, max: 0.025 },
          mouse: {
            click: false,
            move: false,
            max: 1,
          },
        }}
        style={{
          pointerEvents: "none",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default BallPage;

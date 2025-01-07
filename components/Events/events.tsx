"use client";

import React from "react";

const events = [
  {
    title: {
      en: "O-Week",
      jp: "オリエンテーション週間",
    },
    date: "Week 0",
    description: {
      en: "Join us for an exciting start to the year during Orientation Week! Discover Japanese culture, meet new friends, and enjoy fun activities and delicious snacks.",
      jp: "オリエンテーション週間でエキサイティングな1年の始まりを迎えましょう！日本文化を発見し、新しい友達と出会い、楽しいアクティビティや美味しい軽食を楽しみましょう。",
    },
    imageUrl: "/images/meirl.png",
  },
  {
    title: {
      en: "Yakisoba Night",
      jp: "焼きそばナイト",
    },
    date: "Week 2",
    description: {
      en: "Indulge in a delightful evening filled with freshly made Yakisoba and experience the flavors of Japan with fellow club members.",
      jp: "出来立ての焼きそばを楽しみながら、クラブの仲間たちと一緒に日本の味を体験しましょう。",
    },
    imageUrl: "/images/place-holder.png",
  },
  {
    title: {
      en: "Kendo Event",
      jp: "剣道イベント",
    },
    date: "Week 4",
    description: {
      en: "Learn the basics of Kendo, the traditional Japanese martial art. Watch live demonstrations and even try it out yourself!",
      jp: "日本の伝統的な武道である剣道の基本を学びましょう。実演を見学し、自分でも体験してみましょう！",
    },
    imageUrl: "/images/place-holder.png",
  },
  {
    title: {
      en: "Ice Skating Event",
      jp: "アイススケートイベント",
    },
    date: "Week 6",
    description: {
      en: "Enjoy a fun-filled evening of ice skating with your friends. Take a break from studies and glide into an unforgettable experience.",
      jp: "友達と楽しいアイススケートの夕べを過ごしましょう。勉強の合間に滑り、忘れられない体験を楽しみましょう。",
    },
    imageUrl: "/images/place-holder.png",
  },
  {
    title: {
      en: "Careers Night",
      jp: "キャリアナイト",
    },
    date: "Week 8",
    description: {
      en: "Explore career opportunities and hear from professionals who have bridged Japanese and international industries. Perfect for networking and career advice.",
      jp: "日本と国際的な業界をつなぐプロフェッショナルから話を聞き、キャリアの可能性を探りましょう。ネットワーキングやキャリアアドバイスに最適です。",
    },
    imageUrl: "/images/place-holder.png",
  },
  {
    title: {
      en: "Tea Ceremony Event",
      jp: "茶道イベント",
    },
    date: "Week 10",
    description: {
      en: "Immerse yourself in the elegance of a traditional Japanese tea ceremony. Learn about its rich history and cultural significance.",
      jp: "伝統的な日本の茶道の優雅さに浸りましょう。その豊かな歴史と文化的意義について学びましょう。",
    },
    imageUrl: "/images/place-holder.png",
  },
  {
    title: {
      en: "Study Session",
      jp: "勉強会",
    },
    date: "Week 12",
    description: {
      en: "Join us for a productive study session to prepare for finals. Share tips, stay motivated, and enjoy light refreshments with club members.",
      jp: "期末試験に向けた効率的な勉強会に参加しましょう。コツを共有し、モチベーションを維持しながら、クラブメンバーと軽食を楽しみましょう。",
    },
    imageUrl: "/images/place-holder.png",
  },
];

const Events: React.FC<{ language: "en" | "jp" }> = ({ language }) => {
  return (
    <div className="flex flex-col items-center bg-[#f8fafc] py-8 sm:py-16 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
        {language === "en"
          ? "2025 Semester 1 Events"
          : "2025年の１学期目のイベント"}
      </h1>
      <div className="space-y-6 sm:space-y-8 max-w-3xl w-full">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg flex flex-col overflow-hidden"
          >
            <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {language === "en" ? event.title.en : event.title.jp}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  {event.date}
                </p>
                <p className="text-gray-700 text-sm sm:text-base mt-4">
                  {language === "en"
                    ? event.description.en
                    : event.description.jp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

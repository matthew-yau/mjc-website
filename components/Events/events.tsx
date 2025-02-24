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
      jp: "オリエンテーション週間で、会員としてエキサイティングな1年の始まりを迎え、日本文化を発見し、新しい友達と出会い、楽しいアクティビティや美味しい軽食を楽しめます。",
    },
    imageUrl: "/images/oweek.png",
  },
  {
    title: {
      en: "Yakisoba Night",
      jp: "焼きそばナイト",
    },
    date: "Week 2",
    description: {
      en: "Indulge in a delightful evening filled with freshly made Yakisoba and experience the flavors of Japan with fellow club members.",
      jp: "会員として、出来立ての焼きそばを楽しみながら、クラブの仲間たちと一緒に日本の味を体験できます。",
    },
    imageUrl: "/images/yakisoba.jpeg",
  },
  {
    title: {
      en: "Dodgeball Event",
      jp: "ドッジボールイベント",
    },
    date: "Week 4",
    description: {
      en: "Get ready for some fast-paced action with a friendly game of dodgeball! Team up and have fun!",
      jp: "会員は、ドッジボールのゲームでチームを組み、楽しい時間を過ごせます！",
    },
    imageUrl: "/images/dodgeball.jpeg",
  },
  {
    title: {
      en: "Crafts Event",
      jp: "クラフトイベント",
    },
    date: "Week 6",
    description: {
      en: "Unleash your creativity and try your hand at Japanese crafts! A fun and relaxing experience awaits.",
      jp: "会員は、日本のクラフトに挑戦し、楽しくリラックスした時間を過ごせます。",
    },
    imageUrl: "/images/craft.png",
  },
  {
    title: {
      en: "Wagashi Making",
      jp: "和菓子作り",
    },
    date: "Week 8",
    description: {
      en: "Learn the art of making traditional Japanese sweets and enjoy the delicious treats you create!",
      jp: "会員は、伝統的な日本の和菓子作りを学び、自分で作った美味しいお菓子を楽しめます。",
    },
    imageUrl: "/images/wagashi.jpg",
  },
  {
    title: {
      en: "Kendo Event",
      jp: "剣道イベント",
    },
    date: "Week 10",
    description: {
      en: "Learn the basics of Kendo, the traditional Japanese martial art. Watch live demonstrations and even try it out yourself!",
      jp: "会員は、日本の伝統的な武道である剣道の基本を学び、実演を見学したり、自分でも体験したりできます。",
    },
    imageUrl: "/images/kendo.jpeg",
  },
  {
    title: {
      en: "Games Night",
      jp: "ゲームナイト",
    },
    date: "Week 12",
    description: {
      en: "Join us for a night of fun and games! Play a variety of Japanese and international board games.",
      jp: "会員は、日本や国際的なボードゲームを楽しめるゲームナイトに参加できます。",
    },
    imageUrl: "/images/games.jpg",
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
            className="bg-white shadow-lg rounded-lg flex flex-row overflow-hidden"
          >
            <img
              src={event.imageUrl}
              alt={event.title.en}
              className="w-1/3 object-cover"
            />
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

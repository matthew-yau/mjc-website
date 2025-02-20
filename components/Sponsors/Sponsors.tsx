"use client";

import React from "react";

const sponsors = [
  {
    image: "/images/sponsors/japaneasy.png",
    name: "Japaneasy",
    link: "https://japaneasy.com.au/",
  },
  {
    image: "/images/sponsors/chahaus.png",
    name: "Cha Haus",
    link: "https://chahaus.com/",
    caption: "10% discount",
  },
  {
    image: "/images/sponsors/freedatenight.png",
    name: "Another Date Night",
    link: "https://anotherdatenight.com/",
    caption: "20% discount",
  },
  {
    image: "/images/sponsors/kbox.png",
    name: "KBox Karaoke",
    link: "https://kbox.com.au/",
    caption: "5% discount",
  },
  {
    image: "/images/sponsors/hareruya.png",
    name: "Hareruya Pantry",
    link: "https://hareruya.com.au/",
  },
  {
    image: "/images/sponsors/madeinjapan.png",
    name: "Made in Japan",
    link: "https://mij.com.au/",
    caption: "20% discount",
  },
  {
    image: "/images/sponsors/koori.png",
    name: "Koori",
    link: "https://www.kori-icecream.com.au/",
    caption: "2 for 1 vouchers",
  },
  {
    image: "/images/sponsors/itoen.png",
    name: "Ito En",
    link: "https://itoen.com.au/",
  },
  {
    image: "/images/sponsors/ediblecutlery.png",
    name: "Edible Cutlery",
    link: "https://ediblecutlery.au/",
  },
  {
    image: "/images/sponsors/sulbing.png",
    name: "Sulbing",
    link: "https://sulbingcafe.com.au/",
    caption: "10% discount",
  },
];

const Sponsors: React.FC<{ language: "en" | "jp" }> = ({ language }) => {
  return (
    <main className="w-full bg-[#f8fafc] flex flex-col items-center py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {sponsors.slice(0, -1).map((sponsor, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center h-80 justify-between"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-40 h-40 object-contain rounded-xl"
            />
            <div>
              <h2 className="text-2xl font-bold">{sponsor.name}</h2>
              <p className="text-gray-600 mt-2">
                {sponsor.caption
                  ? sponsor.caption
                  : language === "en"
                  ? `Supports club operations`
                  : `クラブの運営をサポートします`}
              </p>
            </div>
            <a
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              {language === "en" ? "Visit Website" : "ウェブサイトを見る"}
            </a>
          </div>
        ))}
      </div>

      {/* Centered last sponsor */}
      <div className="flex justify-center w-full mt-6">
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center h-80 justify-between w-full sm:w-72">
          <img
            src={sponsors[sponsors.length - 1].image}
            alt={sponsors[sponsors.length - 1].name}
            className="w-40 h-40 object-contain rounded-xl"
          />
          <div>
            <h2 className="text-2xl font-bold">
              {sponsors[sponsors.length - 1].name}
            </h2>
            <p className="text-gray-600 mt-2">
              {sponsors[sponsors.length - 1].caption
                ? sponsors[sponsors.length - 1].caption
                : language === "en"
                ? `Supports club operations`
                : `クラブの運営をサポートします`}
            </p>
          </div>
          <a
            href={sponsors[sponsors.length - 1].link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {language === "en" ? "Visit Website" : "ウェブサイトを見る"}
          </a>
        </div>
      </div>

      {/* Terms and Conditions Button */}
      <div className="mt-8">
        <a
          href="/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
        >
          {language === "en" ? "Terms and Conditions" : "利用規約"}
        </a>
      </div>
    </main>
  );
};

export default Sponsors;

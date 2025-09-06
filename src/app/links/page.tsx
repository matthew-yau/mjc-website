"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
import {
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaFacebook,
  FaLinkedin,
  FaSpotify,
  FaStar,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Home } from "lucide-react";
import Link from "next/link";
import { BsTicketDetailed } from "react-icons/bs";

const LinksPage: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "jp">("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "en" | "jp";
    if (storedLanguage) setLanguage(storedLanguage);
  }, []);

  const links = [
    {
      title_en: "Careers Nights",
      title_jp: "Careers Nights",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSd3vv1oW6YKS1W9jNe1Ql_absGFvDyeNxU6HLWFE242JVaOcQ/viewform?usp=sharing&ouid=100375236315837821768",
      icon: <BsTicketDetailed className="text-2xl" />,
    },
    {
      title_en: "Club Sign-up",
      title_jp: "クラブ登録",
      url: "https://clubs.msa.monash.edu/organisation/7786/",
      icon: <FaStar className="text-2xl" />,
    },
    {
      title_en: "MJC Website",
      title_jp: "MJCウェブサイト",
      url: "https://www.monashjapaneseclub.com/",
      icon: <CgWebsite className="text-2xl" />,
    },
    {
      title_en: "Instagram",
      title_jp: "インスタグラム",
      url: "https://www.instagram.com/monashjapaneseclub",
      icon: <FaInstagram className="text-2xl" />,
    },
    {
      title_en: "Discord",
      title_jp: "ディスコード",
      url: "https://discord.gg/BYjHKHwrRr",
      icon: <FaDiscord className="text-2xl" />,
    },
    {
      title_en: "TikTok",
      title_jp: "ティックトック",
      url: "https://www.tiktok.com/@monashjapaneseclub",
      icon: <FaTiktok className="text-2xl" />,
    },
    {
      title_en: "Facebook",
      title_jp: "フェイスブック",
      url: "https://www.facebook.com/MonashJapanese",
      icon: <FaFacebook className="text-2xl" />,
    },
    {
      title_en: "LinkedIn",
      title_jp: "リンクトイン",
      url: "https://www.linkedin.com/company/monash-japanese-club/",
      icon: <FaLinkedin className="text-2xl" />,
    },
    {
      title_en: "Spotify",
      title_jp: "スポティファイ",
      url: "https://open.spotify.com/playlist/4cJ5eGBrddeAu74lkKuQqp?si=ce37f5e71d36401e&nd=1#login",
      icon: <FaSpotify className="text-2xl" />,
    },
  ];

  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-b from-pink-200 via-pink-100 to-white flex flex-col items-center px-4 pt-2 pb-16">
      <div className="absolute top-0 left-0 w-full h-full min-h-full -z-10 overflow-hidden">
        <img
          src="/images/banner.png"
          alt="Background"
          className="w-full h-full object-cover blur-3xl scale-105"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Background Branch Image */}
      <img
        src="/images/links2.png"
        alt="Sakura Birds"
        className="absolute -top-20 -right-10 w-[80vw] max-w-[360px] sm:w-[45vw] pointer-events-none object-contain z-0 block lg:hidden"
        style={{ transform: "rotate(-10deg)" }}
      />

      {/* Top Bubble Buttons */}
      <div className="w-full max-w-lg flex justify-between px-2 absolute top-4 left-1/2 -translate-x-1/2 z-10">
        {/* Home Button */}
        <Link href="/">
          <Button
            variant="outline"
            size="icon"
            className="bg-white w-12 h-12 rounded-full shadow hover:scale-105 transition-all"
          >
            <Home className="w-6 h-6" />
          </Button>
        </Link>

        {/* Share Button */}
        {/* <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-white w-12 h-12 rounded-full shadow hover:scale-105 transition-all"
            >
              <MoreHorizontal className="w-6 h-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-52">
            <div className="text-sm">
              <p className="mb-2 font-semibold">Share this page:</p>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  onClick={() =>
                    navigator.clipboard.writeText(window.location.href)
                  }
                >
                  📋 Copy Link
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        window.location.href
                      )}&text=Check%20out%20the%20Monash%20Japanese%20Club%20links!`,
                      "_blank"
                    )
                  }
                >
                  🐦 Share on Twitter
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover> */}
      </div>

      {/* Logo */}
      <img
        src="/images/mjc_old.png"
        alt="MJC Logo"
        className="rounded-full w-auto h-48 mt-20"
      />

      {/* Title */}
      <h1
        className={`text-2xl text-gray-700 font-bold text-center mb-2 ${
          language === "en" ? "font-enCute" : "font-jpCute"
        }`}
      >
        {language === "en" ? "Monash Japanese Club" : "モナッシュ日本クラブ"}
      </h1>
      <div
        className={`text-base text-gray-600 text-muted-foreground text-center max-w-lg px-2 ${
          language === "en" ? "font-enCute" : "font-jpCute"
        }`}
      >
        <p className="font-jpCute">♡こんにちは♡ ~</p>
        {language === "en"
          ? "Follow our channels and keep up to date on all our events!!"
          : "チャンネルをフォローして最新情報をチェックしてね！"}{" "}
        <p className="font-jpCute">よろしくねー</p>
      </div>

      {/* Link Cards */}
      <div className="mt-10 w-full max-w-lg flex flex-col gap-5 px-2">
        {links.map((link) => (
          <Card
            key={link.title_en}
            className="hover:shadow-xl hover:scale-[1.03] transition-all px-6 py-4 bg-white relative"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full"
            >
              <div className="absolute left-6 text-red-300">{link.icon}</div>
              <span
                className={`font-normal text-base text-gray-500 text-center ${
                  language === "en" ? "font-enCute" : "font-jpCute"
                }`}
              >
                {language === "en" ? link.title_en : link.title_jp}
              </span>
            </a>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Button
          variant="outline"
          onClick={() => setLanguage((prev) => (prev === "en" ? "jp" : "en"))}
          className="bg-white text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
          <span className="text-lg">{language === "en" ? "🇯🇵" : "🌐"}</span>
          <span>
            {language === "en" ? "日本語に切り替え" : "Switch to English"}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default LinksPage;

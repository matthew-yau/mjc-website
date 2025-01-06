"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FirstSection from "../../components/Home/FirstSection";
import SecondSection from "../../components/Home/SecondSection";
import IGWidget from "../../components/Home/IGWidget";
import SponsorsSection from "../../components/Home/SponsorsSection";
import InfiniteScroll from "../../components/InfiniteScroll";
import BuyMembershipSection from "../../components/Home/BuyMembershipSection";

export default function Home() {
  // Manage the language state
  const [language, setLanguage] = useState<"en" | "jp">("en");

  // Synchronize language state with localStorage on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "en" | "jp";
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Toggle the language and save to localStorage
  const toggleLanguage = (newLang?: "en" | "jp") => {
    const nextLanguage = newLang || (language === "en" ? "jp" : "en");
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  };

  const translations = {
    sponsorsHeading: {
      en: "2025 Sponsors",
      jp: "2025年のスポンサー",
    },
    followUsOnInstagram: {
      en: "Follow us on Instagram",
      jp: "Instagramでフォローしてください",
    },
  };

  return (
    <main className="relative bg-[#f8fafc]">
      {/* Header with language props */}
      <Header language={language} onToggleLanguage={toggleLanguage} />

      {/* First Page - White Section */}
      <FirstSection language={language} />

      {/* Second Page - Blue Section */}
      <SecondSection />

      <InfiniteScroll />
      <BuyMembershipSection backgroundImage="/images/banner.png" year="2025" />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {translations.sponsorsHeading[language]}
          </h1>
          {/* Sponsors Carousel */}
          <SponsorsSection />
        </div>
      </div>

      {/* Embed IG Widget */}
      {process.env.NEXT_PUBLIC_IG_WIDGET_REF && (
        <div className="py-8 bg-gradient-to-br from-orange-500 via-pink-500 to-pink-600 min-h-screen">
          <h2 className="text-4xl font-bold text-center text-white mt-8">
            {translations.followUsOnInstagram[language]}
          </h2>
          <div className="mt-8">
            <IGWidget dataRef={process.env.NEXT_PUBLIC_IG_WIDGET_REF} />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FirstSection from "../../components/Home/FirstSection";
import SecondSection from "../../components/Home/SecondSection";
import IGWidget from "../../components/Home/IGWidget";
import SponsorsSection from "../../components/Home/SponsorsSection";
import useIsVisible from "@/hooks/useIsVisible";
import InfiniteScroll from "../../components/InfiniteScroll";
import BuyMembershipSection from "../../components/Home/BuyMembershipSection";

export default function Home() {
  // Manage the language state
  const [language, setLanguage] = useState<"en" | "jp">(() => {
    // Initialize language from localStorage or default to "en"
    return (localStorage.getItem("language") as "en" | "jp") || "en";
  });

  // Toggle the language and save to localStorage
  const toggleLanguage = (newLang?: "en" | "jp") => {
    const nextLanguage = newLang || (language === "en" ? "jp" : "en");
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  };

  // Ensure language is synchronized with localStorage on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "en" | "jp";
    if (storedLanguage && storedLanguage !== language) {
      setLanguage(storedLanguage);
    }
  }, []);

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

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
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our Sponsors
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            We are grateful for the support of our amazing sponsors!
          </p>

          {/* Sponsors Carousel */}
          <SponsorsSection />
        </div>
      </div>

      {/* Embed IG Widget */}
      <IGWidget dataRef={process.env.NEXT_PUBLIC_IG_WIDGET_REF} />
      <Footer />
    </main>
  );
}

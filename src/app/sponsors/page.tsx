"use client";

import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Sponsors from "../../../components/Sponsors/Sponsors";

const SponsorsPage: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "jp">("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "en" | "jp";
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const handleToggleLanguage = (lang: "en" | "jp") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header language={language} onToggleLanguage={handleToggleLanguage} />
      <div className="flex flex-col items-center bg-[#f8fafc] py-4 sm:py-8 px-4">
        <h1 className="text-3xl font-bold">
          {language === "en" ? "2025 Sponsors" : "２０２５年のスポンサー"}
        </h1>
      </div>
      <Sponsors language={language} />
      <Footer language={language} />
    </div>
  );
};

export default SponsorsPage;

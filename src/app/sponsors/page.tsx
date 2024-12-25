"use client";

import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Sponsors: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "jp">("en");

  // Synchronize language with local storage
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
      {/* Header Component */}
      <Header language={language} onToggleLanguage={handleToggleLanguage} />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            {language === "en" ? "Coming Soon" : "近日公開"}
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            {language === "en"
              ? "This page is under construction. Stay tuned!"
              : "このページは現在作成中です。しばらくお待ちください！"}
          </p>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Sponsors;

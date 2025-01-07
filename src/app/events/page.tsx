"use client";

import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EventsList from "../../../components/Events/events"; // Adjust the import if the path is different

const EventsPage: React.FC = () => {
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
      <main className="flex-grow bg-[#f8fafc] py-4">
        <EventsList language={language} />
      </main>

      {/* Footer Component */}
      <Footer language={language} />
    </div>
  );
};

export default EventsPage;

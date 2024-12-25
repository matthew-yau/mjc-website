"use client";

import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Timeline from "../../../components/About/Timeline";
import FAQ from "../../../components/About/FAQ";
import VerticalTimelineComponent from "../../../components/About/VerticalTimelineComponent";

const AboutPage: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "jp">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "jp" : "en"));
  };

  return (
    <div className="flex flex-col bg-[#f8fafc] min-h-screen">
      {/* Header Component */}
      <Header language={language} onToggleLanguage={toggleLanguage} />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-5xl mt-8 p-4 text-left">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">
            {language === "en" ? "About Us" : "私たちについて"}
          </h1>

          {/* Introduction */}
          <div className="text-lg text-gray-700 mb-12">
            {language === "en" ? (
              <>
                <p>
                  The Monash Japanese Club (MJC) aims to foster cultural
                  exchange and enrich our members' understanding of Japanese
                  traditions, language, and lifestyle.
                </p>
                <p className="mt-4">
                  Since our establishment, we have been a vibrant hub for those
                  passionate about Japanese culture, organizing events,
                  workshops, and community engagement activities. Take a look at
                  the history of MJC below!
                </p>
              </>
            ) : (
              <>
                <p>
                  モナッシュ日本クラブ（MJC）は文化交流を促進し、会員の皆様に日本の伝統、言語、生活様式についての理解を深めていただくことを目指しています。
                </p>
                <p className="mt-4">
                  設立以来、日本文化に情熱を持つ人々のための活気あふれる場として、イベント、ワークショップ、地域活動を開催してきました。MJCの歴史をご覧ください！
                </p>
              </>
            )}
          </div>

          {/* Timeline Section */}
          <Timeline language={language} />
        </div>
        <div className="relative overflow-hidden bg-[#f8fafc] py-16">
          {/* FAQ Section */}
          <FAQ language={language} />
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutPage;

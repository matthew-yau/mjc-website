// Import necessary dependencies
"use client";
import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EnquiryForm from "../../../components/Enquiry/EnquiryForm";

const PlaceholderPage: React.FC = () => {
  // Manage language state
  const [language, setLanguage] = useState<"en" | "jp">("en");

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "jp" : "en"));
  };

  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("Form submitted:", formData);
    alert(
      language === "en"
        ? "Thank you for your enquiry!"
        : "お問い合わせありがとうございます！"
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Component */}
      <Header language={language} onToggleLanguage={toggleLanguage} />

      {/* Main Content */}
      <main className="flex-grow flex flex-col bg-[#f8fafc] items-center justify-center p-4">
        <div className="text-center mb-12">
          {/* Title */}
          <h1 className="text-3xl font-bold mt-12 text-left">
            {language === "en" ? "Contact Us" : "お問い合わせ"}
          </h1>
          <p className="text-lg text-gray-600 text-left mt-4">
            {language === "en" ? (
              <>
                Got a question? Fill out the enquiry form below and we'll get
                back to you as soon as possible.
                <br />
                Optionally, send us an email at{" "}
              </>
            ) : (
              <>
                質問がありますか？以下のお問い合わせフォームにご記入いただければ、できるだけ早くご連絡いたします。
                <br />
                また、以下のメールアドレスに送信することもできます。
                <br />
              </>
            )}
            <a
              href="mailto:japanese@monashclubs.org"
              className="text-blue-500 underline"
            >
              japanese@monashclubs.org
            </a>
            {language === "en" ? (
              " or send us a DM on one of our socials."
            ) : (
              <>
                <br />
                または、ソーシャルメディアのDMでご連絡ください。
              </>
            )}
          </p>
        </div>
        <div className="w-full max-w-md mb-24">
          <EnquiryForm language={language} />
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default PlaceholderPage;

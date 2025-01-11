"use client";
import React, { useRef, useState, useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";

export default function FirstSection({ language }: { language: "en" | "jp" }) {
  const ref1 = useRef<HTMLDivElement>(null);
  const [petals, setPetals] = useState<React.ReactNode[]>([]);

  const translations = {
    heading: {
      en: "Welcome to the Monash Japanese Club!",
      jp: "モナッシュ日本クラブへようこそ！",
    },
    paragraph2: {
      en: "We pride ourselves on maintaining a fun, friendly environment for everyone interested in Japanese culture.",
      jp: "日本文化に興味のあるすべての人々にとって楽しくフレンドリーな環境を維持し、日豪関係の架け橋を築くことを誇りに思っています。",
    },
    learnMore: {
      en: "Learn more",
      jp: "もっと詳しく",
    },
  };

  // Generate petals on the client side
  useEffect(() => {
    const generatedPetals = [...Array(50)].map((_, index) => {
      const randomPetal = `/images/petal${
        Math.floor(Math.random() * 13) + 1
      }.png`;
      const size = Math.random() * 20 + 10; // Random size between 10px and 30px
      const leftPosition = Math.random() * 100; // Random position across the screen width
      const duration = Math.random() * 5 + 5; // Random fall duration between 5s and 10s
      const delay = Math.random() * 5; // Random animation delay

      return (
        <div
          key={index}
          className="petal"
          style={{
            backgroundImage: `url(${randomPetal})`,
            left: `${leftPosition}vw`,
            width: `${size}px`,
            height: `${size}px`,
            animationName: "fall",
            animationDuration: `${duration}s`,
            animationDelay: `${-delay}s`,
            animationTimingFunction: "linear",
            zIndex: 1,
            position: "absolute",
            willChange: "transform",
          }}
        ></div>
      );
    });
    setPetals(generatedPetals);
  }, []);

  return (
    <div
      ref={ref1}
      className="relative h-[calc(100vh-88px)] bg-[#eceae8] px-4 sm:px-8 overflow-hidden"
    >
      {/* Sakura Branch Images */}
      <div className="absolute top-[-70px] -left-10 z-30 sm:block hidden">
        <Image
          src="/images/sakuraleft2.png"
          alt="Sakura Branch Left"
          width={400}
          height={300}
          className="animate-sakuraLeft"
          priority
        />
      </div>
      <div className="absolute top-0 right-0 z-0 sm:block hidden">
        <Image
          src="/images/sakuraright2.png"
          alt="Sakura Branch Right"
          width={400}
          height={300}
          className="animate-sakuraRight sm:opacity-100"
          priority
        />
      </div>

      {/* Petals */}
      <div className="falling-petals">{petals}</div>

      {/* Pagoda Image for Desktop */}
      <div className="absolute w-[1000px] h-[1000px] top-[calc(100%-300px)] sm:top-[calc(100%-400px)] right-10 sm:right-24 md:block hidden">
        <Image
          src="/images/divider5.png"
          alt="Torii Gate"
          width={1000}
          height={1000}
          style={{ opacity: 0.75 }}
          priority
        />
      </div>
      {/* Pagoda Image for Mobile */}
      <div className="absolute w-[500px] h-[500px] top-40 left-1/3 transform -translate-x-1/2 translate-y-48 block md:hidden">
        <Image
          src="/images/divider5.png"
          alt="Torii Gate"
          width={500}
          height={500}
          layout="intrinsic"
          className="object-contain"
        />
      </div>

      {/* Centered Content */}
      <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="relative flex flex-col justify-center sm:ml-64">
            <div className="ml-8 sm:ml-6 overflow-visible w-full sm:w-[600px] z-20">
              <h2 className="text-[#1f1f1f] font-mplus font-semibold tracking-wide text-2xl sm:text-4xl leading-tight z-20 sm:ml-32 animate-slideUpFade">
                {language === "jp"
                  ? "モナッシュ日本クラブへ"
                  : "モナッシュ日本クラブへ"}
              </h2>
            </div>
            <h1 className="whitespace-nowrap text-[#1f1f1f] font-bold text-6xl sm:text-8xl mb-4 sm:mb-8 leading-tight z-20 -translate-x-0 sm:-translate-x-16 translate-y-8 sm:translate-y-16 animate-slideUpFade">
              {language === "jp" ? "ようこそ" : "ようこそ"}
            </h1>

            {/* Welcome Text */}
            <div className="w-full max-w-full sm:max-w-screen-lg text-[#727986] text-base sm:text-lg leading-relaxed mt-6 mx-auto">
              <h3 className="text-black font-bold text-2xl sm:text-3xl mb-2 sm:mb-4">
                {translations.heading[language]}
              </h3>
              <p className="mt-2 sm:mt-4">
                {translations.paragraph2[language]}
              </p>

              <div className="w-full h-px bg-gray-300 my-6"></div>

              <div className="flex items-center justify-end space-x-4 sm:mr-8 mr-4 z-40">
                <div className="flex space-x-4">
                  <a
                    href="mailto:japanese@monashclubs.org"
                    className="hover:text-red-500 transition-colors"
                  >
                    <MdOutlineEmail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/MonashJapanese"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                  >
                    <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/monashjapaneseclub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/monash-japanese-club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://discord.gg/7t6jyMgz3c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                  >
                    <FaDiscord className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/matthew-yau/mjc-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:space-x-8 top-16">
            <div className="relative w-full max-w-4xl mx-auto hidden sm:block">
              <Image
                src="/images/frontpage.png"
                alt="Monash Japanese Club Activities"
                width={800}
                height={600}
                layout="responsive"
                className="transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Divider */}
      <div className="custom-shape-divider-bottom-1736080053 z-20">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 160"
          preserveAspectRatio="none"
          className="w-full h-32 sm:h-48 z-20"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#000f46"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#000f46"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#000f46"
          />
        </svg>
      </div>
    </div>
  );
}

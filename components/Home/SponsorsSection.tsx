"use client";

import React from "react";
import EmblaCarousel from "../Carousel/EmblaCarousel";

const SponsorsCarousel: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: "/images/yakuza.png",
      title: "🌟 Sponsor 1",
      description: "Providing exceptional support for our community events.",
    },
    {
      id: 2,
      image: "/images/ball2.jpg",
      title: "🌟 Sponsor 2",
      description: "A proud supporter of cultural engagement.",
    },
    {
      id: 3,
      image: "/images/meirl.png",
      title: "🌟 Sponsor 3",
      description: "Helping us bring people together.",
    },
    {
      id: 4,
      image: "/images/daruma.png",
      title: "🌟 Sponsor 4",
      description: "Helping us bring people together.",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Sponsors</h2>
      <EmblaCarousel slides={slides} />
    </div>
  );
};

export default SponsorsCarousel;

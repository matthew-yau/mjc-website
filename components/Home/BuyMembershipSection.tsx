"use client";

import React, { useRef } from "react";
import ScrollSection from "../ScrollSection";

interface BuyMembershipSectionProps {
  backgroundImage?: string;
  year: string;
}

const BuyMembershipSection: React.FC<BuyMembershipSectionProps> = ({
  backgroundImage = "/images/banner.png",
  year = "2025",
}) => {
  const ref3 = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref3} className="relative min-h-[60vh]">
      {/* Fixed Background Section */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Membership Benefits Section */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          {/* Header Section */}
          <div className="bg-white shadow-lg rounded-md px-8 py-4 translate-y-[250px]">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Become a{" "}
              <span
                className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 
                 bg-clip-text text-transparent inline-block"
              >
                {year} member
              </span>{" "}
              today!
            </h2>
          </div>

          <ScrollSection />
        </div>
      </div>
    </div>
  );
};

export default BuyMembershipSection;

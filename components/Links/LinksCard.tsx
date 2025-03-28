import React from "react";
import Image from "next/image";

interface LinkCardProps {
  title: string;
  url: string;
  icon: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center px-5 py-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:scale-[1.02] border"
    >
      {/* Left-aligned icon */}
      <div className="absolute left-5">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      </div>

      {/* Centered title */}
      <span className="text-gray-900 font-medium text-base">{title}</span>
    </a>
  );
};

export default LinkCard;

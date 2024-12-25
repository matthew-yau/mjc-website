"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CakeIcon from "@mui/icons-material/Cake";
import ComputerIcon from "@mui/icons-material/Computer";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PeopleIcon from "@mui/icons-material/People";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import React from "react";

interface TimelineEvent {
  year: string;
  title: { en: string; jp: string };
  description: { en: string; jp: string };
  image: string;
  icon: React.ReactElement;
}

const events: TimelineEvent[] = [
  {
    year: "1981",
    title: {
      en: "📚 The Japanese Studies Centre Opens",
      jp: "📚 日本研究センター設立",
    },
    description: {
      en: "The Japanese Studies Centre was officially established by academics from four universities in Melbourne: La Trobe University, Monash University, the University of Melbourne, and Swinburne Institute of Technology. The center focuses on teaching and researching Japan-related topics.",
      jp: "日本研究センターは、メルボルンの4つの大学（ラ・トローブ大学、モナシュ大学、メルボルン大学、スウィンバーン工科大学）の学者によって正式に設立され、日本に関する教育と研究を行っています。",
    },
    image: "/images/jsc.png",
    icon: <LibraryBooksIcon />,
  },
  {
    year: "1992",
    title: {
      en: "🎉 Club Founded",
      jp: "🎉 クラブ設立",
    },
    description: {
      en: "The Monash Japanese Club was officially established in 1992 to promote cultural exchange and understanding between Japanese and non-Japanese students. Since then, the club has served as a platform for activities like language exchanges, cultural workshops, and social events celebrating both traditional and modern Japanese culture.",
      jp: "モナシュ日本クラブは、1992年に日本人学生と非日本人学生の文化交流と理解を促進する目的で正式に設立されました。設立以来、言語交換、文化ワークショップ、日本の伝統や現代文化を祝う交流イベントなどを提供しています。",
    },
    image: "/images/2008.jpg",
    icon: <CakeIcon />,
  },
  {
    year: "2006",
    title: {
      en: "💻 MJC Website Launched",
      jp: "💻 MJCウェブサイト開設",
    },
    description: {
      en: "Ryuichi, the IT Director in 2006, launched the first Monash Japanese Club website. It became a vital platform for sharing club news, events, and resources, greatly improving communication and member engagement.",
      jp: "2006年、ITディレクターのリュウイチがモナシュ日本クラブの初めてのウェブサイトを立ち上げました。このウェブサイトは、クラブのニュース、イベント、リソースを共有する重要なプラットフォームとなり、会員とのコミュニケーションとエンゲージメントを大幅に向上させました。",
    },
    image: "/images/website.png",
    icon: <ComputerIcon />,
  },
  {
    year: "2020",
    title: {
      en: "🌐 Events Move Online",
      jp: "🌐 オンラインイベントへ移行",
    },
    description: {
      en: "All events transitioned online due to the COVID-19 pandemic, maintaining the club's activities and fostering community despite physical distancing.",
      jp: "COVID-19パンデミックの影響で、すべてのイベントがオンラインに移行しましたが、それでもクラブ活動を継続し、コミュニティの絆を保ちました。",
    },
    image: "/images/online.jpg",
    icon: <WifiCalling3Icon />,
  },
  {
    year: "2022",
    title: {
      en: "🎊 In-person Events Return!",
      jp: "🎊 対面イベントの復活！",
    },
    description: {
      en: "After the challenges of operating solely online, in-person events returned in 2022. The MJC community reunited with renewed enthusiasm, leading to record participation and a surge in memberships through activities like cultural festivals, workshops, and social gatherings.",
      jp: "オンライン運営のみの課題を乗り越え、2022年には対面イベントが復活しました。MJCのコミュニティは新たな熱意とともに再結集し、文化祭、ワークショップ、交流会などを通じて参加者数と会員数が大幅に増加しました。",
    },
    image: "/images/yakisoba2.jpg",
    icon: <PeopleIcon />,
  },
  {
    year: "2024",
    title: {
      en: "🏆 Membership Milestone",
      jp: "🏆 会員数の記録更新",
    },
    description: {
      en: "The Monash Japanese Club reached 500 active members for the first time, strengthening its role as a close-knit community for everyone interested in Japanese language and culture.",
      jp: "モナシュ日本クラブの会員数が初めて500人に達し、日本語や日本文化に興味のあるすべての人々のための親密なコミュニティとしての役割を強化しました。",
    },
    image: "/images/ball.jpg",
    icon: <ShowChartIcon />,
  },
  {
    year: "2025",
    title: {
      en: "🔧 New Committee, New Website",
      jp: "🔧 新体制と新ウェブサイト",
    },
    description: {
      en: "The Monash Japanese Club launches a new website in 2025 built by IT Director Matthew Yau, providing up-to-date information and bridging the gap between the executive committee and the MJC community.",
      jp: "モナシュ日本クラブは2025年にITディレクターのマシュー・ヤウによって作成された新しいウェブサイトを立ち上げ、最新情報を提供するとともに、幹部委員会と一般会員コミュニティの距離を縮めました。",
    },
    image: "/images/comm.jpg",
    icon: <Diversity1Icon />,
  },
];

const Timeline: React.FC<{ language: "en" | "jp" }> = ({ language }) => {
  return (
    <VerticalTimeline>
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          date={event.year}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={event.icon}
        >
          <h2 className="vertical-timeline-element-title font-bold text-lg">
            {event.title[language]}
          </h2>
          <h4 className="vertical-timeline-element-subtitle font-bold text-md">
            {event.year}
          </h4>
          <p className="text-sm" style={{ fontWeight: "normal" }}>
            {event.description[language]}
          </p>
          <img
            src={event.image}
            alt={event.title[language]}
            className="w-full h-auto mt-4 rounded-lg shadow"
          />
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        iconStyle={{ background: "#f6787a", color: "#fff" }}
        icon={<FavoriteBorderIcon />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;

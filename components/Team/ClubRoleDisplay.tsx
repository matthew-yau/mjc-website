"use client";
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons

type RoleDetails = {
  role: { en: string; jp: string };
  name: { en: string; jp: string };
  degree: { en: string; jp: string };
  imageUrl: string;
  description: { en: string; jp: string };
  linkedin?: string;
};

const roles: RoleDetails[] = [
  {
    role: { en: "President", jp: "会長" },
    name: { en: "Eugene Wang", jp: "ユージン・ワン" },
    degree: {
      en: "Majors: Laws (Honours), Commerce, and Diploma of Languages (Japanese)",
      jp: "専攻: 法学（優等）、商学、言語学ディプロマ（日本語）",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Oversees the club's operations and ensures its success by providing leadership and vision.",
      jp: "クラブの運営を監督し、リーダーシップとビジョンを提供して成功を確実にします。",
    },
    linkedin: "https://www.linkedin.com/in/eugene-wang-7aaa69138/",
  },
  {
    role: { en: "Vice President", jp: "副会長" },
    name: { en: "Ain Mohiddin", jp: "アイン・モヒディン" },
    degree: {
      en: "Majors: Laws (Honours) and Commerce",
      jp: "専攻: 法学（優等）および商学",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Assists the president and takes over their duties when necessary. Coordinates with all departments.",
      jp: "会長を補佐し、必要に応じてその職務を引き継ぎます。全ての部署と調整します。",
    },
    linkedin: "https://www.linkedin.com/in/ain-mohiddin-1a3462216/",
  },
  {
    role: { en: "Treasurer", jp: "会計担当" },
    name: { en: "Yanling Chen", jp: "ヤンリン・チェン" },
    degree: {
      en: "Majors: Commerce and Biomedical Science",
      jp: "専攻: 商学および生物医学科学",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Handles all financial matters, including budgets, expenses, and financial reporting.",
      jp: "予算、費用、財務報告など、全ての財務問題を処理します。",
    },
    linkedin: "https://www.linkedin.com/in/yanling-chen-5723a6262/",
  },
  {
    role: { en: "Assistant Treasurer", jp: "会計補佐" },
    name: { en: "Ethan Wong", jp: "イーサン・ウォン" },
    degree: {
      en: "Major: Accounting",
      jp: "専攻: 会計",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Assists the treasurer with financial tasks and ensures records are accurate.",
      jp: "会計担当を補佐し、財務タスクをサポートし、記録の正確性を確保します。",
    },
    linkedin: "https://www.linkedin.com/in/ethan-wong",
  },
  {
    role: { en: "Secretary", jp: "書記" },
    name: { en: "Lin Nakayama", jp: "リン・中山" },
    degree: {
      en: "Major: Science",
      jp: "専攻: 理学",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Takes minutes during meetings, manages correspondence, and maintains club records.",
      jp: "会議中の議事録を取り、通信を管理し、クラブの記録を維持します。",
    },
    linkedin: "https://www.linkedin.com/in/lin-nakayama-51525829a/",
  },
  {
    role: { en: "Marketing Director", jp: "マーケティング担当" },
    name: { en: "Chinatsu Kanasaka", jp: "金坂千夏" },
    degree: {
      en: "Majors: Secondary Education and Arts",
      jp: "専攻: 中等教育および文学",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Develops marketing strategies to increase club visibility and engagement.",
      jp: "クラブの認知度と参加を高めるためのマーケティング戦略を策定します。",
    },
    linkedin: "https://www.linkedin.com/in/chinatsu-kanasaka/",
  },
  {
    role: { en: "Events Director", jp: "イベント担当" },
    name: { en: "Teruki Yamashita", jp: "山下輝" },
    degree: {
      en: "Majors: Radiography and Medical Imaging",
      jp: "専攻: 放射線撮影および医療画像学",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Organizes and coordinates events, ensuring they run smoothly.",
      jp: "イベントを企画し、調整してスムーズに進行するようにします。",
    },
    linkedin: "https://www.linkedin.com/in/teruki-yamashita-4284a0278/",
  },
  {
    role: { en: "Sponsorship Director", jp: "スポンサーシップ担当" },
    name: { en: "Konon Kuboi", jp: "窪井湖音" },
    degree: {
      en: "Majors: Arts and Global Studies",
      jp: "専攻: 文学および国際学",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Establishes partnerships and secures resources for club activities.",
      jp: "パートナーシップを築き、クラブ活動のための資源を確保します。",
    },
    linkedin: "https://www.linkedin.com/in/konon-kuboi-5a40a7295/",
  },
  {
    role: { en: "Education Director", jp: "教育担当" },
    name: { en: "Sara Ando", jp: "安藤サラ" },
    degree: {
      en: "Majors: Secondary and Primary Education (Special and Inclusive Education)",
      jp: "専攻: 中等および初等教育（特別支援教育およびインクルーシブ教育）",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Organizes workshops, training, and educational resources for members.",
      jp: "メンバー向けにワークショップ、トレーニング、および教育リソースを企画します。",
    },
  },
  {
    role: { en: "IT Director", jp: "IT担当" },
    name: { en: "Matthew Yau", jp: "マシュー・ヤウ" },
    degree: {
      en: "Majors: Commerce, Computer Science, and Diploma of Languages (Japanese)",
      jp: "専攻: 商学、コンピュータ科学、言語学ディプロマ（日本語）",
    },
    imageUrl: "/images/place-holder.png",
    description: {
      en: "Oversees the club's technology infrastructure and leads the development and maintenance of the club's website.",
      jp: "クラブの技術基盤を監督し、ウェブサイトの開発と維持を主導します。",
    },
    linkedin: "https://www.linkedin.com/in/matthewwyau",
  },
];

const ClubRoleDisplay = ({ language }: { language: "en" | "jp" }) => {
  const [selectedRole, setSelectedRole] = useState<RoleDetails>(roles[0]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="flex flex-col md:flex-row w-full p-4">
      <div className="hidden md:block w-1/4 p-4 border-r pr-8 mr-16">
        {roles.map((role) => (
          <div
            key={role.role.en}
            className={`cursor-pointer p-2 ${
              selectedRole.role.en === role.role.en
                ? "text-black font-bold"
                : "text-gray-500"
            } hover:bg-gray-200`}
            onClick={() => setSelectedRole(role)}
          >
            {language === "en" ? role.role.en : role.role.jp}
          </div>
        ))}
      </div>
      <div className="block md:hidden mb-4">
        <select
          className="w-full p-2 border rounded-md"
          value={selectedRole.role.en}
          onChange={(e) => {
            const selected = roles.find(
              (role) => role.role.en === e.target.value
            );
            if (selected) setSelectedRole(selected);
          }}
        >
          {roles.map((role) => (
            <option key={role.role.en} value={role.role.en}>
              {language === "en" ? role.role.en : role.role.jp}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row flex-1 gap-8 p-4">
        <div className="flex-shrink-0 md:w-72 md:h-72">
          <img
            src={selectedRole.imageUrl}
            alt={`${selectedRole.role.en} portrait`}
            className="w-full h-auto md:w-72 md:h-72 object-cover rounded-sm bg-white p-4 shadow-lg border border-gray-300"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">
            {language === "en" ? selectedRole.role.en : selectedRole.role.jp}
          </h3>
          <h2 className="text-2xl font-bold mt-2 flex items-center">
            {language === "en" ? selectedRole.name.en : selectedRole.name.jp}
            {selectedRole.linkedin && (
              <a
                href={selectedRole.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 hover:text-red-500"
              >
                <FaLinkedin size={20} />
              </a>
            )}
          </h2>
          <p className="text-sm text-gray-700 italic mt-2">
            {language === "en"
              ? selectedRole.degree.en
              : selectedRole.degree.jp}
          </p>
          <p className="mt-4 text-gray-600">
            {language === "en"
              ? selectedRole.description.en
              : selectedRole.description.jp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubRoleDisplay;

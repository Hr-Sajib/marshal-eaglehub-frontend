import React from "react";

import Image from "next/image";
import { LeftBorder } from "../shared/LeftBorder";

export type FeatureType = {
  id: number;
  title: string;
  description: string[]; // ✅ Now it's an array
  image: string;
};

export const featureData: FeatureType[] = [
  {
    id: 1,
    title: "Smart Contract Logic",
    description: [
      "Founder & influencers agree to Revenue share (e.g. 70/30/10)",
      "Contract duration (e.g. month)",
      "Auto-Payout rules",
    ],
    image: "/coinImage.png",
  },
  {
    id: 2,
    title: "Gamified Points System",
    description: [
      "Users earn XP: +5 points",
      "Make a sale: +20 points",
      "Win giveaway: +50 point",
      "Leaderboard resets monthly",
    ],
    image: "/coinImage.png",
  },
  {
    id: 3,
    title: "AI Recommendation Engine (Future)",
    description: [
      "Optimized for mobile, tablet, and desktop",
      "Flexible layout components",
    ],
    image: "/coinImage.png",
  },
  {
    id: 4,
    title: "Multi Language Support",
    description: [
      "Add Swedish, Arabic, Spanish",
      "Based on Location or Button",
    ],
    image: "/coinImage.png",
  },
  {
    id: 5,
    title: "2FA / Verification (Optional)",
    description: [
      "Optional Two-Factor Authentication",
      "Secure login and account protection",
    ],
    image: "/coinImage.png",
  },
];

export default function FeatureCard() {
  return (
    <LeftBorder>
      <div className="  lg:py-10 lg:px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 p-4 ">
          {featureData.map((item) => (
            <div
              key={item.id}
              className="p-6 md:p-10 sm:min-h-[312px] rounded-[10px] border-[0.7px]"
              style={{ borderColor: "#D10800" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={92}
                height={92}
                className="  mx-auto mb-4"
              />

              <div className=" text-white  ">
                <h2 className="text-[23px] leading-[1.21] font-semibold mb-2 ">
                  {item.title}
                </h2>

                <ul className=" text-start text-[16px] mt-2 text-[#FFFFFF]  space-y-1">
                  {item.description.map((point, index) => (
                    <li className="leading-[25px]" key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
    </LeftBorder>
  );
}

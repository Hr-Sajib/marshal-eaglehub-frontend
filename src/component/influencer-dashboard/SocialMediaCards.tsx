"use client";

import React from "react";
import { Instagram } from "lucide-react";
import { FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa";
import SocialMediaCard from "../shared/SocialMediaCard";
import { IAffiliate } from "@/types/Influencer.type";

// Platform meta config
const platforms = [
  {
    platform: "facebook",
    icon: <FaFacebook className="w-8 h-8 text-white" />,
    followers: "90K",
  },
  {
    platform: "instagram",
    icon: <Instagram className="w-8 h-8 text-white" />,
    followers: "75K",
  },
  {
    platform: "youtube",
    icon: <FaYoutube className="w-8 h-8 text-white" />,
    followers: "120K",
  },
  {
    platform: "discord",
    icon: <FaDiscord className="w-8 h-8 text-white" />,
    followers: "20K",
  },
];

interface Props {
  affiliates: IAffiliate[];
}

const SocialMediaCards = ({ affiliates }: Props) => {
  const cards = platforms.map((p) => {
    // Aggregate values from affiliates for this platform
    let clicks = 0;

    affiliates.forEach((a) => {
      if (a.sourceClicks && a.sourceClicks[p.platform]) {
        clicks += a.sourceClicks[p.platform];
      }
    });

    // Only use dynamic clicks if found, else fallback
    const hasClicksData = clicks > 0;

    return {
      id: p.platform,
      icon: p.icon,
      followers: p.followers,
      clicks: hasClicksData ? clicks : 0,
      shares: hasClicksData ? 120 : 0,
      comments: hasClicksData ? 60 : 0,
      earnings: hasClicksData ? 40 : 0,
    };
  });

  return (
    <div className="flex items-center justify-center">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 ">
          {cards.map((card) => (
            <SocialMediaCard
              key={card.id}
              id={card.id}
              icon={card.icon}
              followers={card.followers}
              clicks={card.clicks}
              shares={card.shares}
              comments={card.comments}
              earnings={card.earnings}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCards;

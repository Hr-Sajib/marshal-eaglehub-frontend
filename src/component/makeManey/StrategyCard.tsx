// components/StrategyGrid.tsx
"use client";

import React from "react";

interface StrategyItem {
  title: string;
  description: string;
  details: string[];
}

interface StrategyGridProps {
  title?: string;
  items?: StrategyItem[];
}

const StrategyCard: React.FC<StrategyGridProps> = ({
  items = [
    {
      title: "How to find viral tools before they go mainstream",

      details: [
        "Most people wait for the world to clap. You? You strike before they know what's coming.",
        "EGEAL scans the underground — Discords, dev logs, whispers in private groups — tools that haven't even launched yet.",
        "You don't follow trends. You front-run them.",
        "Every week, we drop the top 3 tools into your war room — before the hype hits.",
        "That's how you print power early. Before the sheep show up.",
      ],
    },
    {
      title: "How to get paid just by sharing your link",

      details: [
        "Inside EGEAL, every tool comes with a pre-loaded affiliate weapon. You copy your link. You post it in content, comments, DMs, memes, whatever.",
        "The moment someone clicks and joins, boom — you vault updates.",
        "And if you want lockdown-level trust? Enable Escrow Mode.",
        'You`ll never ask "Did I get paid?" again.',
        "You'll know. Instantly.",
      ],
    },
    {
      title: "How to automate DMs to close affiliate sales",

      details: [
        "EGEAL's DM sniper ain't no bulk blaster. It finds real people, in your niche, at scale — and sends messages that actually convert.",
        "You choose your weapon: Curiosity. Pain. Value.",
        "The system fires, follows up, and tracks link clicks + sales.",
        "And it does it on platforms where most bots get banned.",
      ],
    },
    {
      title: "How to reinvest your AI earnings and scale up",

      details: [
        "Stop the money hits your wallet, don't flex — reinvest.",
        "✅ Buy better content",
        "✅ Run smart ads",
        "✅ Hire creators under your link",
        "✅ Build your own tool and plug it into the empire",
        "Every payout should push your empire forward.",
        "Don't collect commissions — command distribution.",
        "That's how you go from earner to empire builder.",
      ],
    },
  ],
}) => {
  return (
    <div className="   p-4 ">
      <div className="">
        {/* Strategy Items */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {items.map((item, index) => (
            <div key={index} className="  ">
              {/* Item Title */}
              <div className="flex items-center  md:justify-start mb-2 sm:mb-3 mt-14 sm:pl-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full mr-2 sm:mr-3 lg:mr-4"></div>
                <h2 className="lg:text-[20px] text-base font-medium leading-[26.25px] text-white">
                  {item.title}
                </h2>
              </div>

              {/* Item Description — hidden on small */}

              {/* Item Details — hidden on small */}
              <div className="hidden md:block ml-4 sm:ml-6 lg:ml-10 mt-1">
                {item.details.map((detail, detailIndex) => (
                  <p
                    key={detailIndex}
                    className="text-[16px] font-medium leading-[26.25px] text-white sm:mb-2 lg:ml-4"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategyCard;

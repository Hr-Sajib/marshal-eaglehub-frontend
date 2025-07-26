import React from "react";

// app/data/cardInfoData.ts
import { FaImage } from "react-icons/fa";
import { IconType } from "react-icons";
export type InfoCardType = {
  id: number;
  image: string;
  intro: string;
  badge: string;
  icon: IconType;
  title: string;
  description: string;
};

export const trendingData: InfoCardType[] = [
  {
    id: 1,
    image: "",
    intro: "AI Tool 1",
    badge: "Trending",
    icon: FaImage,
    title: "Details About Tool 1",
    description: "Link ",
  },
  {
    id: 2,
    image: "/example2.png",
    intro: "AI Tool 1",
    badge: "Trending",
    icon: FaImage,
    title: "Details About Tool 1",
    description: "Link ",
  },
  {
    id: 3,
    image: "/example3.png",
    intro: "AI Tool 1",
    badge: "Trending",
    icon: FaImage,
    title: "Details About Tool 1",
    description: "Link ",
  },
];

export default function DiscoverCard() {
  return (
    <div>
      <div className=" text-white mt-10 mb-22 px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ">
          {trendingData.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="border border-primary rounded-md  overflow-hidden relative  "
              >
                <div className="relative h-[200px]  sm:h-[255px] flex justify-center items-center ">
                  <span className="absolute w-[77px] h-[26px] top-2 left-2 bg-primary text-center text-white text-xs font-medium px-2 py-1 rounded-md">
                    {card.badge}
                  </span>

                  <div className="flex justify-center">
                    <Icon size={96} className="w-[50px] h-[50px] " />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary" />
                </div>

                <div className="px-4 pt-5 text-start space-y-2 h-[104px]">
                  <p className="text-sm leading-4 text-[#CCCCCC]">
                    {card.intro}
                  </p>
                  <h3 className="md:text-xl  text-lg leading-3.5 font-normal md:font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-4 text-[#AAAAAA]">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

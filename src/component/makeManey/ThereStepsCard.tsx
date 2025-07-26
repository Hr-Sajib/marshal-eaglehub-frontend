import React from "react";

import Image from "next/image";

export type AiToolType = {
  id: number;
  image: string;

  title: string;
  description: string; // ✅ now it's just one paragraph
};

export const aiToolData: AiToolType[] = [
  {
    id: 1,
    image: "/coinImage2.png",

    title: "Pick a Tool That Pays",
    description:
      " Browse our Tool Vault and choose ahigh-commission AI tttvvvool that fits niche.",
  },
  {
    id: 2,
    image: "/chain.png",

    title: "Copy Your Link & Share",
    description:
      "  Use our build-in DM bot or TikTok templates to spread your link across social platforms.",
  },
  {
    id: 3,
    image: "/multiCoin.png",

    title: "Earn $1.77 + Every Time",
    description:
      " You get paid whenever someone signs up through your link. it’s that simple.",
  },
];

export default function ThereStepsCard() {
  return (
    <div className="lg:p-16 p-4">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-10 ">
        {aiToolData.map((item) => (
          <div
            key={item.id}
            className="  border-[0.7px] rounded-lg mx-auto p-6  border-white md:border-[#D10800]"
          >
            <div className="mb-5">
              <Image
                src={item.image}
                alt={item.title}
                width={147}
                height={147}
                className=" mx-auto mt-4"
              />
            </div>
            <div className="  text-white flex flex-col justify-between items-center text-center">
              <div className="  ">
                <h2 className="text-lg md:text-[23px] md:font-semibold mb-2 leading-6">
                  {item.title}
                </h2>
                <p className="text-base mt-3 text-[#FFFFFF]  leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

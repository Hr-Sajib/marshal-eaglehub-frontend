import { FaGift, FaClipboardList, FaRobot } from "react-icons/fa";
import giftImage from '@/../public/gift.png'
import textImage from '@/../public/file.png'
import robotImage from '@/../public/robot.png'
import Image from "next/image";
const WhatYouCanDo = () => {
  const features = [
    {
      image: giftImage,
      title: "Run Viral Giveaways",
      description: "Launch explosive campaigns with top influencers",
    },
    {
      image: textImage,
      title: "Post Influencer Jobs",
      description: "Hire creators to promote your product or tool",
    },
    {
      image: robotImage,
      title: "Explore the 99 AI Vault",
      description: "Discover tools to write faster, grow faster, and sell faster",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          What You Can Do on <span className="text-red-500">EGEAL</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#121212] flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 text-white border border-red-700/30 hover:border-red-500"
            >
              <Image className="h-18 w-18 p-3 bg-red-500/10 rounded-full mb-3" src={feature.image} alt={feature.title} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo;

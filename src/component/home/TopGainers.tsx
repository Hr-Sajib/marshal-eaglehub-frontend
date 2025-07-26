import Image from 'next/image'
import React from 'react'
import SubHeader from '../shared/SubHeader';


export type GainerType = {
  id: number;
  name: string;
  image: string;
  icon: string; // image path (e.g., from public/)
  stats: string;
};


export default function TopGainers() {

  const topGainersData: GainerType[] = [
    {
      id: 1,
      name: "Claude 6",
      image: '/medal1.png',
      icon: "/claudeImage.png",
      stats: "191K+ · 20K Users",
    },
    {
      id: 2,
      name: "Deep Seek",
      image: '/medal2.png',
      icon: "/deepSeekImage.png",
      stats: "191K+ · 20K Users",
    },
    {
      id: 3,
      name: "Gemini",
      image: "/medal3.png",
      icon: "/geminiImage.png",
      stats: "191K+ · 20K Users",
    },
  ];

  return (
    <div className=' max-w-[1140px] mx-auto pb-[52px]'>
      <SubHeader title="Top Gainers" subtitle="Tools with the highest recent growth this week" />

      <div className="space-y-4 max-w-7xl mx-auto px-10 md:px-20 ">
        {topGainersData.map((item) => (
          <div
            key={item.id}
            className="border md:border-[#D10800] rounded-[10px] px-4 py-3 flex items-center gap-4 bg-transparent"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain rounded-xl"
            />
            <div className='flex-col justify-between flex-1'>
              <div className='flex items-center gap-2'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={16}
                  height={16}
                  className="-mt-3 object-contain" ></Image>
                <h2 className="text-white text-base font-medium">{item.name}</h2>
              </div>

              <div>

                <p className="text-sm text-[#BBBBBB]">{item.stats}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
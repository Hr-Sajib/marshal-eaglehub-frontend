"use client"
import { useGetGiveawayStatsQuery } from "@/redux/api/Giveaway/giveawayApi";
import { RightBorder } from "../shared/RightBorder";

type GiveawayMetric = {
  label: string;
  value:  number;
};

export default function GiveawayStatus() {
  // Fetch stats using Redux query
  const { data: stats } = useGetGiveawayStatsQuery();

  const { totalWinners, totalPrizeMoney, totalParticipants, totalGiveaways } = stats?.data || {};

  // Format metrics dynamically
  const metrics: GiveawayMetric[] = [
    { label: "Total Winners", value: totalWinners || 0 },
    { 
      label: "Total Prize Money", 
      value: totalPrizeMoney || "$0"
    },
    { 
      label: "People Joined", 
      value: totalParticipants || 0
    },
    { 
      label: "Total Giveaways", 
      value: totalGiveaways || 0
    },
  ];



  return (
    <div className="my-12 lg:mx-32">
      <RightBorder>
        <div className="text-white p-8 rounded-lg py-32">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-[35px] font-semibold mb-2">
              Giveaway Status
            </h2>
            <p>Real-time metrics on ongoing giveaways!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-2xl mx-auto gap-2 place-items-center">
            {metrics?.map((metric, idx) => (
              <div
                key={idx}
                className="bg-transparent min-w-[206px] border border-red-600 rounded-lg p-6 flex flex-col justify-center items-center hover:scale-105 hover:bg-primary transition-all duration-300"
              >
                <h3 className="text-sm mb-2">{metric?.label}</h3>
                <p className="text-xl font-bold text-white">{metric?.value}</p>
              </div>
            ))}
          </div>
        </div>
      </RightBorder>
    </div>
  );
}
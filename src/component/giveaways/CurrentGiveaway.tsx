"use client";

import { useGetCurrentGiveawayQuery } from "@/redux/api/Giveaway/giveawayApi";
import { IGiveaway } from "@/types/giveaway/giveaway";


export default function CurrentGiveaways() {


  const { data: giveaways = [] } = useGetCurrentGiveawayQuery();


  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-[28px] font-semibold mb-2">
          View Current Giveaways
        </h1>
        <p className="text-[18px] text-gray-300">
          Browse active giveaways and participate for a chance to win fabulous
          prizes
        </p>
      </div>

      {/* Giveaway List */}
      <div className="max-w-xl mx-auto space-y-5">
        {giveaways?.data?.map((giveaway: IGiveaway) => (
          <div
            key={giveaway._id}
            className="bg-[#000000] border border-[#551212] rounded-xl px-4 py-5 space-y-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">{giveaway.title}</h2>
                <p className="text-md text-white">{giveaway.priceMoney}</p>
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-red-700">{giveaway.participantsCount}</span> people Joined
              </p>
            </div>

            <div>
              <h2 className="mb-2">Rules : </h2>

              <div className="flex flex-wrap gap-2">
                {giveaway.rules.map((rule, index) => (
                  <button
                    key={index}
                    className="text-sm text-white border border-red-500 rounded-md px-3 py-1 hover:bg-red-700/20 transition"
                  >
                    {rule}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

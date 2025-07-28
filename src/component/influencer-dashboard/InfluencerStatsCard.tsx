import { ITotals } from "@/types/Influencer.type";

const InfluencerDashboardStatCard = ({ totals }: { totals: ITotals }) => {
  return (
    <div className=" text-white shadow-lg p-6 w-full mx-auto bg-[#3E1017] border border-red-500 rounded-[10.62px] pt-5 pr-5 pb-5 pl-[25px] flex flex-col gap-[10px] hover:bg-primary/70 transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Overview Summary
      </h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-300">Clicks</p>
          <p className="text-xl font-bold">{totals.totalClicks}</p>
        </div>
        <div>
          <p className="text-gray-300">Conversions</p>
          <p className="text-xl font-bold">{totals.totalConversions}</p>
        </div>
        <div>
          <p className="text-gray-300">Earnings</p>
          <p className="text-xl font-bold">${totals.totalEarnings}</p>
        </div>
        <div>
          <p className="text-gray-300">Conversion Rate</p>
          <p className="text-xl font-bold">
            {totals.totalClicks > 0
              ? `${Math.round(
                  (totals.totalConversions / totals.totalClicks) * 100
                )}%`
              : "0%"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboardStatCard;

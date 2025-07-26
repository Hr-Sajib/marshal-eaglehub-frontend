import { FaGoogle, FaTiktok, FaInstagram } from "react-icons/fa"
import CampaignRow, { CampaignData } from "./CampaignRow"
import MobileCampaignCard from "./MobileCampaignCard"

export default function CampaignPerformance() {

    const campaigns: CampaignData[] = [
        {
            id: "1",
            name: "Google Ads",
            icon: (
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <FaGoogle className="w-4 h-4" />
                </div>
            ),
            impressions: "189k",
            clicks: "9k",
            cpc: "$8.12",
            spend: "$56,123.12",
            isActive: false,
        },
        {
            id: "2",
            name: "Tik Tok",
            icon: (
                <div className="bg-black border border-white w-8 h-8 rounded-full flex items-center justify-center">
                    <FaTiktok className="w-4 h-4 text-white" />
                </div>
            ),
            impressions: "287k",
            clicks: "15k",
            cpc: "$12.12",
            spend: "$40,123.12",
            isActive: true,
        },
        {
            id: "3",
            name: "Instagram",
            icon: (
                <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <FaInstagram className="w-4 h-4 text-white" />
                </div>
            ),
            impressions: "156k",
            clicks: "12k",
            cpc: "$5.12",
            spend: "$39,123.12",
            isActive: false,
        },
    ]



    return (
        <div className=" text-white p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Campaign Performance</h2>
            <p className="border-b  pb-3 border-gray-400 text-gray-200 ">Campaign</p>

            {/* Desktop Table View */}
            <div className="hidden md:block">
                
                <div className="space-y-4">
                    {/* Table Header */}
                    <div className="grid grid-cols-6 gap-4 text-gray-400 text-sm font-medium pb-2 border-b border-gray-700">
                        <div>Campaign</div>
                        <div className="text-center">Impressions</div>
                        <div className="text-center">Clicks</div>
                        <div className="text-center">CPC</div>
                        <div className="text-center">Spend</div>
                        <div></div>
                    </div>

                    {/* Campaign Rows */}
                    {campaigns.map((campaign) => (
                        <CampaignRow key={campaign.id} {...campaign} />
                    ))}
                </div>
            </div>



            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
                {campaigns.map((campaign) => (
                    <MobileCampaignCard key={campaign.id} {...campaign} />
                ))}
            </div>
        </div>
    )
}

import React from "react"

export interface CampaignData {
  id: string
  name: string
  icon: React.ReactNode
  impressions: string
  clicks: string
  cpc: string
  spend: string
  isActive: boolean
}

const MobileCampaignCard: React.FC<CampaignData> = ({
  name,
  icon,
  impressions,
  clicks,
  cpc,
  spend,
  isActive,
}) => {
  return (
    <div className="rounded-lg p-4 md:border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            {icon}
          </div>
          <span className="font-medium text-lg">{name}</span>
        </div>
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive
              ? "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              : "bg-red-600 hover:bg-red-700 text-white"
          }`}
        >
          {isActive ? "Stop" : "Start"}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-400">Impressions</span>
          <div className="font-medium">{impressions}</div>
        </div>
        <div>
          <span className="text-gray-400">Clicks</span>
          <div className="font-medium">{clicks}</div>
        </div>
        <div>
          <span className="text-gray-400">CPC</span>
          <div className="font-medium">{cpc}</div>
        </div>
        <div>
          <span className="text-gray-400">Spend</span>
          <div className="font-medium">{spend}</div>
        </div>
      </div>
    </div>
  )
}

export default MobileCampaignCard

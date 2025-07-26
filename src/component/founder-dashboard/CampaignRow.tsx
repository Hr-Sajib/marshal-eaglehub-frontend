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

const CampaignRow: React.FC<CampaignData> = ({
  name,
  icon,
  impressions,
  clicks,
  cpc,
  spend,
  isActive,
}) => {
  return (
    <div className="grid grid-cols-6 gap-4 items-center py-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <span className="font-medium">{name}</span>
      </div>
      <div className="text-center">{impressions}</div>
      <div className="text-center">{clicks}</div>
      <div className="text-center">{cpc}</div>
      <div className="text-center">{spend}</div>
      <div className="flex justify-end">
        <button
          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive
              ? "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              : "bg-red-600 hover:bg-red-700 text-white"
          }`}
        >
          {isActive ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  )
}

export default CampaignRow

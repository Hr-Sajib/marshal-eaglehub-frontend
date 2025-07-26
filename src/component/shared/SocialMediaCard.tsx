import type React from "react"

interface SocialMediaCardProps {
  id: string
  icon: React.ReactNode
  followers: string
  clicks: number
  shares: number
  comments: number
  earnings: number
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  icon,
  followers,
  clicks,
  shares,
  comments,
  earnings,
}) => {
  return (
    <div
      className="max-w-[305px] bg-[#3E1017] border border-red-500 rounded-[10.62px] pt-5 pr-5 pb-5 pl-[25px] flex flex-col gap-[10px] hover:bg-primary/70 transition-colors duration-300"
      
    >
      {/* Icon */}
      <div className="flex items-center gap-3 mb-2">
        {icon}
      </div>

      {/* Followers */}
      <div className="mb-4">
        <div className="text-white text-[31px]">{followers}</div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 lg:gap-8 xl:gap-3 text-[16px]">
        <div className="text-gray-300 flex">
          <div>Clicks:</div>
          <div className="text-white ml-0.5">{clicks}</div>
        </div>
        <div className="text-gray-300 flex">
          <div>Shares:</div>
          <div className="text-white ml-0.5">{shares}</div>
        </div>
        {/* <div className="flex gap-1 justify-between"> */}
     <div className="text-gray-300 flex ">
          <div>Comments:</div>
          <div className="text-white ">{comments}</div>
        </div>
        <div className="text-gray-300 flex ">
          <div>Earnings:</div>
          <div className="text-white ">{earnings}</div>
        </div>
        {/* </div> */}
       
      </div>
    </div>
  )
}

export default SocialMediaCard

import type React from "react"
import { Instagram } from "lucide-react"
import { FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa"
import SocialMediaCard from "../shared/SocialMediaCard"


interface SocialMediaData {
  id: string
  platform: string
  icon: React.ReactNode
  followers: string
  clicks: number
  shares: number
  comments: number
  earnings: number
}

interface SocialMediaCardsProps {
  data?: SocialMediaData[]
}

 export const  data = [
    {
      id: "1",
      platform: "Facebook",
      icon: <FaFacebook className="w-8 h-8 text-white" />,
      followers: "90K",
      clicks: 567,
      shares: 567,
      comments: 567,
      earnings: 567,
    },
    {
      id: "2",
      platform: "Instagram",
      icon: <Instagram className="w-8 h-8 text-white" />,
      followers: "90K",
      clicks: 567,
      shares: 567,
      comments: 567,
      earnings: 567,
    },
    {
      id: "3",
      platform: "YouTube",
      icon: <FaYoutube className="w-8 h-8 text-white" />,
      followers: "90K",
      clicks: 567,
      shares: 567,
      comments: 567,
      earnings: 567,
    },
    {
      id: "4",
      platform: "Discord",
      icon: <FaDiscord className="w-8 h-8 text-white" />,
      followers: "90K",
      clicks: 567,
      shares: 567,
      comments: 567,
      earnings: 567,
    },
  ]

const SocialMediaCards: React.FC<SocialMediaCardsProps> = ({

}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-ful mx-auto">
       

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 ">
          {data.map((item) => (
            <SocialMediaCard
              key={item.id}
              id={item.id}
              icon={item.icon}
              followers={item.followers}
              clicks={item.clicks}
              shares={item.shares}
              comments={item.comments}
              earnings={item.earnings}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialMediaCards

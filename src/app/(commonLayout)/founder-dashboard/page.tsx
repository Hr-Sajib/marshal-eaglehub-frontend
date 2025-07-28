import AddNewToolsForm from "@/component/allForms/AddNewTools";
import CampaignPerformance from "@/component/founder-dashboard/CampaignPerformance";
import TopGiveaways from "@/component/influencer-dashboard/TopGiveaways";
import Container from "@/component/shared/Container";
import MainHeader from "@/component/shared/MainHeader";
import RedShadow from "@/component/shared/RedShadow";
import SocialMediaCard from "@/component/shared/SocialMediaCard";
import SubHeader from "@/component/shared/SubHeader";
import { Instagram } from "lucide-react";
import React from "react";
import { FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa";



const data = [
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
];

export default function page() {
  return (
    <div>
      <Container>
        <RedShadow className="top-60 right-0" />
        <MainHeader title="Founder Dashboard" header="Welcome John," />
        <AddNewToolsForm />

        <div className="py-[77px]">
          <h1 className="text-center text-2xl md:text-[35px] pb-[67px] text-white">
            See Views, Click and Conversion
          </h1>
          <div className="flex flex-wrap  gap-5  justify-center">
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
        <SubHeader title="Top Giveaways" />
        <TopGiveaways />
        <CampaignPerformance />
      </Container>
    </div>
  );
}

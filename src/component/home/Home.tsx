'use client'
import InfluencerCount from "@/component/home/influencer/InfluencerCount";
import AISearchInterface from "@/component/home/SearchInterface";
import TrendingAITools from "@/component/home/TrendingAiTools";
import MainButton from "@/component/shared/MainButton";
import MainHeader from "@/component/shared/MainHeader";
import SubButton from "@/component/shared/SubButtton";
import TrendAnalysis from "./TrendAnalysis";
import TopGainers from "./TopGainers";
import BrowseTools from "./BrowseAiTools";
import AiStartUp from "./AiStartUp";
import Container from "../shared/Container";
import Testimonial from "./Testimonials";
import WhatYouCanDo from "./WhatYouCanDo";
import WhoIsEgealFor from "./WhoIsEgealFor";

const Home = () => {


  const handleJoin = () => {
    console.log("Joined")
  }

  return <div>
    <Container>
      <MainHeader title={<>The Fastest Way to Grow Any Business — Without 
 <br /> Ads, Agencies, or Algorithms.
      </>} subtitle={<>EGEAL connects you with top influencers, viral campaigns, powerful giveaway bots, and AI tools — so you <br/> can grow faster, spend less, and finally break through the noise.

      </>} className="rounded-lg">
        <div className="space-x-4 space-y-2">
          <SubButton title="Watch Demo" />
          <MainButton onClick={() => handleJoin()} title="Join the AI Strategy Grid($1)" />
        </div>
      </MainHeader>
      <WhatYouCanDo></WhatYouCanDo>
      <InfluencerCount />
      <AISearchInterface />
      <TrendAnalysis />
      <TrendingAITools />
      <TopGainers />
      <WhoIsEgealFor></WhoIsEgealFor>
      <BrowseTools />
      <AiStartUp />
    </Container>
    <Testimonial/>

  </div>;

};

export default Home;

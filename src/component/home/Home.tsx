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

const Home = () => {


  const handleJoin = () => {
    console.log("Joined")
  }

  return <div>
    <Container>
      <MainHeader title={<>Discover the Next Viral Al Tools — or Get Paid <br /> to Help Launch Them
      </>} subtitle={<>Trusted by 100,000+ creators, founders, and early adopters building the future of Al. <br />
        Find the next big thing — or become the one who makes it go viral.
      </>} className="rounded-lg">
        <div className="space-x-4 space-y-2">
          <SubButton title="Watch Demo" />
          <MainButton onClick={() => handleJoin()} title="Join the AI Strategy Grid($1)" />
        </div>
      </MainHeader>
      <InfluencerCount />
      <AISearchInterface />
      <TrendAnalysis />
      <TrendingAITools />
      <TopGainers />
      <BrowseTools />
      <AiStartUp />
    </Container>
    <Testimonial/>

  </div>;

};

export default Home;

"use client";

import Popups from "@/component/ai-bots/Popups";
import ProjectForm from "@/component/allForms/ProjectForm";
import DiscoverCard from "@/component/discover/DiscoverCard";
import MultiPic from "@/component/home/influencer/UserPic";
import Container from "@/component/shared/Container";
import MainButton from "@/component/shared/MainButton";
import MainHeader from "@/component/shared/MainHeader";
import RedShadow from "@/component/shared/RedShadow";

import { RightBorder } from "@/component/shared/RightBorder";
import SubButton from "@/component/shared/SubButtton";
import React, { useState } from "react";

const page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div>
      <Container>
        <RedShadow className="right-0 top-20" />
        <MainHeader
          title={
            <>
              Discover the Next Viral AI Tools — or Get Paid to <br />
              Help Launch Them
            </>
          }
          subtitle={
            <>
              Trusted by 100,000+ creators, founders, and early adopters
              building the future of AI.
              <br />
              Find the next big thing — or become the one who makes it go viral.
            </>
          }
        >
          <div className="sm:space-x-5 space-y-5 sm:space-y-0 my-4">
            <MainButton title="Explore AI Tools" onClick={() => setIsPopupOpen(true)} />
            <SubButton title="Promote & Earn" />
          </div>
          <div>
            <MultiPic />
          </div>
        </MainHeader>

        {/* discover trending card  */}
        <DiscoverCard />
        {/* Submit Your Project  */}

        <div>
          <h2 className="lg:text-4xl font-semibold text-center text-2xl text-white">
            Submit Your Project
          </h2>

          <div className="my-16 max-w-6xl mx-auto">
            <RightBorder>
              <div className="lg:p-14 py-4 sm:p-6 md:p-8">
                <ProjectForm />
              </div>
            </RightBorder>
          </div>
        </div>

        {isPopupOpen && (
          <Popups
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            title="We’re setting up your AI tools…"

            description="Loading......."
            button="Let me Try"
          />
        )}
      </Container>
    </div>
  );
};

export default page;

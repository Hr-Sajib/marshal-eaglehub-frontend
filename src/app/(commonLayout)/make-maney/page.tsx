"use client"; 

import Popups from "@/component/ai-bots/Popups";
import ReviewsCard from "@/component/makeManey/ReviewsCard";
import StrategyCard from "@/component/makeManey/StrategyCard";
import ThereStepsCard from "@/component/makeManey/ThereStepsCard";
import Container from "@/component/shared/Container";
import { LeftBorder } from "@/component/shared/LeftBorder";

import MainButton from "@/component/shared/MainButton";
import MainHeader from "@/component/shared/MainHeader";

import SubHeader from "@/component/shared/SubHeader";

import React, { useState } from "react";

const page = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <Container>
        <MainHeader
          title={
            <>
              Money from AI Without <br /> Building Anything?
            </>
          }
          subtitle={
            "This $1 Strategy Grid shows you how to earn daily from the hottest using nothing but your phone."
          }
        >
          <div className="mt-10">
            <MainButton title="GET IN FOR $1" onClick={() => setIsPopupOpen(true)} />
          </div>
        </MainHeader>

        {/* 3 steps section and card  */}
        <div className="lg:mt-30 mt-18 mb-16">
          <h2 className="lg:text-4xl font-semibold text-center text-2xl text-white my-11">
            3 Steps to Monetize Any AI Tool
          </h2>
          <LeftBorder>
            <ThereStepsCard />
          </LeftBorder>
        </div>

        {/* ready  to start sectoin  */}

        <div className="my-10 text-center md:text-left md:ml-40">
          <h2 className="lg:text-4xl font-semibold text-2xl text-white my-11 leading-[54px]">
            Ready to start earning today? Join the <br />
            strategy grid for just $1.
          </h2>

          <MainButton title="Join FOR $1" />
        </div>

        {/* What’s Inside the Strategy Grid setion  */}

        <div>
          <SubHeader title="What’s Inside the Strategy Grid" />
          <div>
            <LeftBorder>
              <StrategyCard />
            </LeftBorder>
          </div>
        </div>

        {/* offer seiton   */}
        <div className="max-w-6xl mx-auto p-12 md:p-24 bg-black text-white text-center border border-primary/20   rounded-xl mt-10">
          <p className="text-base md:text-lg leading-relaxed">
            This is a 1-time <span>$1 offer</span>. Once you leave this page,
            the strategy grid may not be available again.
          </p>
        </div>

        {/* latest reviews card show sectoin  */}

        <div className="my-10">
          <h2 className="lg:text-4xl font-semibold text-2xl text-white my-11 text-center leading-[54px]">
            Latest reviews
          </h2>

          <ReviewsCard />
        </div>

        {isPopupOpen && (
          <Popups
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            title="Want to earn $100 for trying an AI tool?"

            description="If you cancel now, your progress will be deleted, and you will have to start over."
            button="Let me Try"
          />
        )}
      </Container>
    </div>
  );
};

export default page;

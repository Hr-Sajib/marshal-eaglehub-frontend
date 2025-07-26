"use client"; 

import React, { useState } from "react";
import PricingCard from "@/component/pricePayment/PriceCard";
import Container from "@/component/shared/Container";
import MainButton from "@/component/shared/MainButton";
import MainHeader from "@/component/shared/MainHeader";
import Popups from "@/component/ai-bots/Popups";

const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Container>
      <div>
        <MainHeader
          title="Subscriptions & Payments"
          subtitle={
            <>
              Choose your plan & get instant access to premium content, bots and <br />
              courses
            </>
          }
        >
          <div className="text-center mt-8">
            <MainButton title="Explore Plan" onClick={() => setIsPopupOpen(true)} />
          </div>
        </MainHeader>

        <div className="mb-20">
          <h2 className="text-4xl font-semibold text-white mt-28 mb-10 text-center">
            Pricing Options
          </h2>

          <PricingCard />
        </div>
      </div>

      {/* ✅ Popup */}
      {/* {isPopupOpen && (
        <Popups
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          title="Want to earn $100 for trying an AI tool?"
          description="If you cancel now, your progress will be deleted, and you will have to start over."
          button="Let me Try"
        /> */}


      {isPopupOpen && (
        <Popups
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          title={`To enter, you must follow the giveaway host and Eagle AI Hub on social media. \n
Anyway, you probably won’t get picked `}

          description=""
          button="Let me Try"
        />
      )}
    </Container>
  );
};

export default Page;

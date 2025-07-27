"use client";
import AddParticipant from "@/component/participants/AddParticipants";
import Container from "@/component/shared/Container";
import MainHeader from "@/component/shared/MainHeader";
import RedShadow from "@/component/shared/RedShadow";
import Image from "next/image";
import React from "react";

export default function Page() {


  return (
    <div>
      <RedShadow />
      <Container>
        <MainHeader
          title={
            <>
             Explore and join as a participant <br /> & Win Big
              <div className="text-center">
                <Image
                  src={"/line.svg"}
                  alt="Line"
                  width={533}
                  height={1}
                  className="line-svg mx-auto"
                />
              </div>
            </>
          }
          subtitle={
            <>
              Explore exciting giveaways and get a chance to win fantastic prizes
            </>
          }
          className="rounded-lg"
        >
          <div className="space-x-4 space-y-2 "></div>
        </MainHeader>

        <AddParticipant/>
      </Container>
    </div>
  );
}
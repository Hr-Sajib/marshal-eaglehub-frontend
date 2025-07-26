// pages/index.tsx
import React from "react";
import Image from "next/image";
import loginBanner from "../../../../assets/loginBanner.png";
import Container from "@/component/shared/Container";

export default function FounderAndInfluencer() {
  return (
    <Container>
      <div className="px-4">
        <div className=" my-28  w-full lg:flex items-center justify-center  text-white">
          {/* Image Display */}
          <div className="lg:w-1/2">
            <Image
              src={loginBanner}
              alt="Founder or Influencer"
              width={800}
              height={800}
              className="object-contain w-full"
            />
          </div>
          <div className=" lg:w-1/2 flex items-center justify-center  text-white">
            {/* Progress Bar */}
            <div className="relative z-10 w-full  lg:p-6 my-6 ">
              <div className="hidden lg:block">
                <div className="lg:flex  items-center justify-center ">
                  <div className="relative w-full  p-6">
                    <div className="flex items-center justify-between my-12 relative">
                      <div className="flex-1 h-[5px] bg-gray-700">
                        <div
                          className="h-[5px] bg-red-600"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div className="flex space-x-12 absolute inset-0 items-center justify-between ">
                        <span className="flex items-center justify-center w-16 h-16 bg-[#D9D9D9] text-black font-bold rounded-full border-4 border-primary">
                          1
                        </span>

                        <span className="flex items-center justify-center w-16 h-16 bg-[#D9D9D9] text-black font-bold rounded-full border-4 border-primary">
                          2
                        </span>
                        <span className="flex items-center justify-center w-16 h-16 bg-red-600 text-white font-bold  rounded-full border-4 border-primary">
                          3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* succuss full heading */}

              <div className="lg:my-20">
                <h2 className=" text-2xl sm:text-4xl leading-[61px] font-semibold max-w-xl text-center mx-auto">
                  Welcome aboard! You’ve successfully joined our community.
                  Let’s get started on something great together!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

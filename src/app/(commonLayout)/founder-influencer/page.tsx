// pages/index.tsx
import React from "react";
import Image from "next/image";
import fonderImage from "../../../assets/founderImage.png";
import Container from "@/component/shared/Container";
import Link from "next/link";
import RedShadow from "@/component/shared/RedShadow";

export default function FounderAndInfluencer() {
  return (
    <Container>
      <RedShadow className="right-0 top-20 hidden lg:block" />
      <div className="">
        <div className=" my-16 lg:my-28  w-full lg:flex items-center justify-center  text-white">
          {/* Image Display */}
          <div className="lg:w-[55%]">
            <Image
              src={fonderImage}
              alt="Founder or Influencer"
              width={600}
              height={600}
              className="object-contain sm:max-w-2xl mx-auto lg:w-full"
            />
          </div>
          <div className=" flex items-center justify-center  text-white">
            {/* Progress Bar */}
            <div className="relative z-10 w-full  p-6  ">
              <div className="hidden lg:block">
                <div className="lg:flex  items-center justify-center ">
                  <div className="relative w-full  p-6">
                    <div className="flex items-center justify-between my-12 relative">
                      <div className="flex-1 h-[5px] bg-gray-700">
                        <div
                          className="h-[5px] bg-red-600"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <div className="flex space-x-12 absolute inset-0 items-center justify-between ">
                        <span className="flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full border-4 border-primary">
                          1
                        </span>
                        <span className="flex items-center justify-center w-16 h-16 bg-[#D9D9D9] text-white rounded-full border-4 border-primary">
                          2
                        </span>
                        <span className="flex items-center justify-center w-16 h-16 bg-[#D9D9D9] text-white rounded-full border-4 border-primary">
                          3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quiz Content */}
              <div className="text-center px-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-16 mt-5">
                  Are you a Founder or Influencer?
                </h1>
                <div className="flex w-full flex-row space-y-4 md:space-y-0 sm:space-x-10 space-x-2 justify-center">
                  <Link
                    href={"/login"}
                    className="px-8 py-4 bg-transparent w-[150] h-[150] sm:w-[212px] sm:h-[212] flex justify-center items-center  border-4  border-red-600 hover:bg-red-600 rounded-2xl text-3xl text-white transition"
                  >
                    Founder
                  </Link>
                  <Link
                    href={"/login"}
                    className="px-8 py-4 bg-transparent w-[150] h-[150] sm:w-[212px] sm:h-[212] flex justify-center items-center  border-4 border-red-600 hover:bg-red-600 rounded-2xl text-3xl text-white transition"
                  >
                    Influencer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

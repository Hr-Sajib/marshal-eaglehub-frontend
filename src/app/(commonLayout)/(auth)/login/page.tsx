// pages/index.tsx
import React from "react";
import Image from "next/image";
import loginBanner from "../../../../assets/loginBanner.png";
import Container from "@/component/shared/Container";
import LoginForm from "@/component/login/Login";
import RedShadow from "@/component/shared/RedShadow";

export default function FounderAndInfluencer() {
  return (
    <Container>
      <RedShadow className="right-0 top-20 hidden lg:block" />
      <div className="">
        <div className=" my-16 lg:my-28  w-full lg:flex items-center justify-center  text-white">
          {/* Image Display */}
          <div className="lg:w-1/2">
            <h2 className="  text-2xl lg:hidden  text-white my-5 ">
              Log in to EGEAL AI HUB
            </h2>

            <Image
              src={loginBanner}
              alt="Founder or Influencer"
              width={600}
              height={600}
              className="object-contain sm:max-w-2xl mx-auto lg:w-full"
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
                        <span className="flex items-center justify-center w-16 h-16 bg-red-600 text-white font-bold  rounded-full border-4 border-primary">
                          2
                        </span>
                        <span className="flex items-center justify-center w-16 h-16 bg-[#D9D9D9] text-black font-bold rounded-full border-4 border-primary">
                          3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* login */}
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

"use client";


import { Search } from "lucide-react"
import { LeftBorder } from "../shared/LeftBorder"
import MainButton from "../shared/MainButton"
import Container from "../shared/Container"
import { FaYoutube } from "react-icons/fa"


const filterButtons = ["Today", "Most Used"];

export default function AISearchInterface() {
  return (
    <Container>
      <div className=" text-white py-[71px]  ">
        {/* Search Bar */}
        <div className="flex items-center gap-0 mb-8 max-w-[935px] mx-auto">
          <input
            type="text"
            placeholder="Search by AI, e.g. Video Translation AI Tool"
            className="flex-1 px-6 py-4 bg-white text-black text-base rounded-l-[15px] border-none outline-none placeholder-gray-500"
          />
          <button className="bg-red-600 hover:bg-red-700 px-6 py-[18px] rounded-r-[15px] transition-colors">
            <Search size={20} className="text-white" />
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-start items-center gap-3 mb-8  mx-auto">
          {filterButtons.map((filter, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 || index === 2
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white border border-gray-600 hover:border-gray-500"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  mx-auto">
          {/* Left Card - Blue Border */}
          <LeftBorder>
            <div className="rounded-lg  bg-gray-900/20 md:pt-[72px] md:pl-[52px] md:pb-[91px] p-7">
          
              <MainButton title="Free Secret" />
              <div className="pt-[18px]">
                <h2 className=" md:text-2xl font-bold text-white leading-tight">
                  Make Money With Egeal AI Right Now (10-Min Video)
                </h2>
              </div>
            </div>
          </LeftBorder>

          {/* Right Card - Red Border with Video */}
          <div className="border border-red-500 rounded-lg bg-gray-900/20 relative overflow-hidden min-h-[200px] flex items-center justify-center">
            {/* Play Button */}
            <button className=" w-10 h-10 bg-white  flex items-center justify-center transition-colors group">
              {/* <Play size={24} className="text-white ml-1 group-hover:scale-110 transition-transform" /> */}
              <div>

                <FaYoutube
                  size={74}
                  className="text-primary rounded-full group-hover:scale-110 transition-transform"
                />

              </div>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

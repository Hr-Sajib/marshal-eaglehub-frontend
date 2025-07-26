

import React from "react";
import { useGetToolsQuery } from "@/redux/api/Tools/toolsApi";

export default function DiscoverCard() {
  const { data } = useGetToolsQuery();
  console.log("ToolsData", data);

  // Extract tools array and limit to first 3 items, default to empty array if undefined
  const tools = (data?.data || []).slice(0, 3);

  return (
    <div>
      <div className="text-white mt-10 mb-22 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool._id}
              className="border border-primary rounded-md overflow-hidden relative"
            >
              <div className="relative h-[200px] sm:h-[255px] flex justify-center items-center">
                <span className="absolute w-[77px] h-[26px] top-2 left-2 bg-primary text-center text-white text-xs font-medium px-2 py-1 rounded-md">
                  Tool
                </span>

                <div className="flex justify-center">
                  <img
                    src={tool.imageUrl}
                    alt={tool.name}
                    className="w-[50px] h-[50px] object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary" />
              </div>

              <div className="px-4 pt-5 text-start space-y-2 h-[104px]">
                <p className="text-sm leading-4 text-[#CCCCCC]">
                  Price: ${tool.price}
                </p>
                <h3 className="md:text-xl text-lg leading-3.5 font-normal md:font-semibold">
                  {tool.name}
                </h3>
                <p className="text-sm leading-4 text-[#AAAAAA]">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
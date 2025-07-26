import React from 'react'
import Image from 'next/image'
import SubHeader from '../shared/SubHeader';


// app/data/launchedToolsData.ts

export type ToolType = {
    id: number;
    name: string;
    image: string;
    badge: string;
    subheading: string;
    imageWidth: number;
    imageHeight: number;
};

const browseToolsData: ToolType[] = [
    {
        id: 1,
        name: "ChatGPT 4",
        image: "/chatGpt4.png",
        badge: "Trending · Launched 1 month ago",
        subheading: "A free-to-use AI system for conversations, insights, and task automation.",
        imageWidth: 175,
        imageHeight: 151,
    },
    {
        id: 2,
        name: "SeaArt.ai",
        image: "/explorer.png",
        badge: "Trending · Launched 1 month ago",
        subheading: "A free-to-use AI system for conversations, insights, and task automation.",
        imageWidth: 120,
        imageHeight: 120,
    },
    {
        id: 3,
        name: "Pixel Cut",
        image: "/pixelCut.png",
        badge: "Trending · Launched 1 month ago",
        subheading: "A free-to-use AI system for conversations, insights, and task automation.",
        imageWidth: 161,
        imageHeight: 139,
    },
    {
        id: 4,
        name: "Pix Verse.ai",
        image: "/videoImage.png",
        badge: "Trending · Launched 1 month ago",
        subheading: "A free-to-use AI system for conversations, insights, and task automation.",
        imageWidth: 81,
        imageHeight: 66,
    },
];

export default function BrowseTools() {
    return (
        <div className=' text-white mt-12'>

            <SubHeader title="Browse Tools That Are Exploring Right Now" subtitle="" />

            <div className=" px-4 ">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {browseToolsData.map((tool) => (
                        <div key={tool.id} className="flex flex-col space-y-3">

                            <div className="border border-[#D10800] rounded-md p-4 bg-[#0A0A0A] h-[170px] flex items-center justify-center relative">

                                <div className="absolute top-2 left-2 bg-[#D10800] text-white text-xs px-2 py-1 rounded font-medium">
                                    {tool.badge}
                                </div>

                                <div className=''>

                                    <Image
                                        src={tool.image}
                                        alt={tool.name}
                                        width={tool.imageWidth}
                                        height={tool.imageHeight}
                                        className="object-contain"
                                    />

                                </div>
                            </div>


                            <h3 className="text-lg font-semibold">{tool.name}</h3>

                            <p className="text-sm text-gray-300">{tool.subheading}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
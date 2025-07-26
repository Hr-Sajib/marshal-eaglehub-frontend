"use client"

import { Menu, MoreHorizontal } from "lucide-react"
import { LeftBorder } from "../shared/LeftBorder"
import Container from "../shared/Container"

interface AITool {
    id: string
    name: string
    description: string
    icon: string
    category: "chatgpt" | "deepseek"
}

const aiTools: AITool[] = [
    {
        id: "1",
        name: "ChatGPT",
        description: "A free-to-use AI system for conversations, insights, and task automation.",
        icon: "🌀",
        category: "chatgpt",
    },
    {
        id: "2",
        name: "Deep Seek",
        description: "DeepSeek is an AI company providing foundation models and APIs for AI applications.",
        icon: "🔷",
        category: "deepseek",
    },
    {
        id: "3",
        name: "ChatGPT",
        description: "A free-to-use AI system for conversations, insights, and task automation.",
        icon: "🌀",
        category: "chatgpt",
    },
    {
        id: "4",
        name: "Deep Seek",
        description: "DeepSeek is an AI company providing foundation models and APIs for AI applications.",
        icon: "🔷",
        category: "deepseek",
    },
    {
        id: "5",
        name: "ChatGPT",
        description: "A free-to-use AI system for conversations, insights, and task automation.",
        icon: "🌀",
        category: "chatgpt",
    },
    {
        id: "6",
        name: "Deep Seek",
        description: "DeepSeek is an AI company providing foundation models and APIs for AI applications.",
        icon: "🔷",
        category: "deepseek",
    },
]

export default function TrendingAITools() {
    return (
        <div className="  text-white my-14">
            {/* Header */}
            <div className="flex items-center justify-center mb-12">
                <h1 className="text-2xl md:text-4xl md:font-semibold flex items-center md:gap-2">
                    <span className="text-2xl ">🔥</span>
                    Trending AI Tools - June 2025
                </h1>
            </div>
            <Container>
                <LeftBorder>
                    {/* Navigation */}
                    <div className="flex items-center justify-between md:p-8 border-t border-b border-primary md:border-none py-2">
                        <div className="flex items-center gap-3">
                            <button className="p-2 border border-gray-600 rounded-md hover:border-gray-500 transition-colors">
                                <Menu size={18} />
                            </button>
                            <button className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
                                Top
                            </button>
                            <button className="px-4 py-2 border border-gray-600 rounded-md text-sm font-medium hover:border-gray-500 transition-colors">
                                Trending
                            </button>
                        </div>
                        <button className="p-2 border border-gray-600 rounded-md hover:border-gray-500 transition-colors">
                            <MoreHorizontal size={18} />
                        </button>
                    </div>

                    {/* AI Tools Grid */}

                    <div className=" rounded-lg md:p-6 bg-gray-900/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-7 md:mt-0 md:gap-6">
                            {aiTools.map((tool) => (
                                <div
                                    key={tool.id}
                                    className="flex items-start gap-4 py-2 md:p-4 rounded-lg hover:bg-gray-800/30 transition-colors cursor-pointer"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        {tool.category === "chatgpt" ? (
                                            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                                                {/* <div className="w-6 h-6 border-2 border-white rounded-full border-dashed animate-spin"></div> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                                    <g fill="#fcf9f9" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M45.403,25.562c-0.506,-1.89 -1.518,-3.553 -2.906,-4.862c1.134,-2.665 0.963,-5.724 -0.487,-8.237c-1.391,-2.408 -3.636,-4.131 -6.322,-4.851c-1.891,-0.506 -3.839,-0.462 -5.669,0.088c-1.743,-2.318 -4.457,-3.7 -7.372,-3.7c-4.906,0 -9.021,3.416 -10.116,7.991c-0.01,0.001 -0.019,-0.003 -0.029,-0.002c-2.902,0.36 -5.404,2.019 -6.865,4.549c-1.391,2.408 -1.76,5.214 -1.04,7.9c0.507,1.891 1.519,3.556 2.909,4.865c-1.134,2.666 -0.97,5.714 0.484,8.234c1.391,2.408 3.636,4.131 6.322,4.851c0.896,0.24 1.807,0.359 2.711,0.359c1.003,0 1.995,-0.161 2.957,-0.45c1.742,2.322 4.445,3.703 7.373,3.703c4.911,0 9.028,-3.422 10.12,-8.003c2.88,-0.35 5.431,-2.006 6.891,-4.535c1.39,-2.408 1.759,-5.214 1.039,-7.9zM35.17,9.543c2.171,0.581 3.984,1.974 5.107,3.919c1.049,1.817 1.243,4 0.569,5.967c-0.099,-0.062 -0.193,-0.131 -0.294,-0.19l-9.169,-5.294c-0.312,-0.179 -0.698,-0.177 -1.01,0.006l-10.198,6.041l-0.052,-4.607l8.663,-5.001c1.947,-1.124 4.214,-1.421 6.384,-0.841zM29.737,22.195l0.062,5.504l-4.736,2.805l-4.799,-2.699l-0.062,-5.504l4.736,-2.805zM14.235,14.412c0,-4.639 3.774,-8.412 8.412,-8.412c2.109,0 4.092,0.916 5.458,2.488c-0.105,0.056 -0.214,0.103 -0.318,0.163l-9.17,5.294c-0.312,0.181 -0.504,0.517 -0.5,0.877l0.133,11.851l-4.015,-2.258zM6.528,23.921c-0.581,-2.17 -0.282,-4.438 0.841,-6.383c1.06,-1.836 2.823,-3.074 4.884,-3.474c-0.004,0.116 -0.018,0.23 -0.018,0.348v10.588c0,0.361 0.195,0.694 0.51,0.872l10.329,5.81l-3.964,2.348l-8.662,-5.002c-1.946,-1.123 -3.338,-2.936 -3.92,-5.107zM14.83,40.457c-2.171,-0.581 -3.984,-1.974 -5.107,-3.919c-1.053,-1.824 -1.249,-4.001 -0.573,-5.97c0.101,0.063 0.196,0.133 0.299,0.193l9.169,5.294c0.154,0.089 0.327,0.134 0.5,0.134c0.177,0 0.353,-0.047 0.51,-0.14l10.198,-6.041l0.052,4.607l-8.663,5.001c-1.946,1.125 -4.214,1.424 -6.385,0.841zM35.765,35.588c0,4.639 -3.773,8.412 -8.412,8.412c-2.119,0 -4.094,-0.919 -5.459,-2.494c0.105,-0.056 0.216,-0.098 0.32,-0.158l9.17,-5.294c0.312,-0.181 0.504,-0.517 0.5,-0.877l-0.134,-11.85l4.015,2.258zM42.631,32.462c-1.056,1.83 -2.84,3.086 -4.884,3.483c0.004,-0.12 0.018,-0.237 0.018,-0.357v-10.588c0,-0.361 -0.195,-0.694 -0.51,-0.872l-10.329,-5.81l3.964,-2.348l8.662,5.002c1.946,1.123 3.338,2.937 3.92,5.107c0.581,2.17 0.282,4.438 -0.841,6.383z"></path></g></g>
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                                    <path fill="#536dfe" d="M47.496,10.074c-0.508-0.249-0.727,0.226-1.025,0.467c-0.102,0.078-0.188,0.179-0.274,0.272	c-0.743,0.794-1.611,1.315-2.746,1.253c-1.658-0.093-3.074,0.428-4.326,1.696c-0.266-1.564-1.15-2.498-2.495-3.097	c-0.704-0.311-1.416-0.623-1.909-1.3c-0.344-0.482-0.438-1.019-0.61-1.548c-0.11-0.319-0.219-0.646-0.587-0.7	c-0.399-0.062-0.555,0.272-0.712,0.553c-0.626,1.144-0.868,2.405-0.845,3.681c0.055,2.871,1.267,5.159,3.676,6.785	c0.274,0.187,0.344,0.373,0.258,0.646c-0.164,0.56-0.36,1.105-0.532,1.665c-0.11,0.358-0.274,0.436-0.657,0.28	c-1.322-0.552-2.464-1.369-3.473-2.358c-1.713-1.657-3.262-3.486-5.194-4.918c-0.454-0.335-0.907-0.646-1.377-0.942	c-1.971-1.914,0.258-3.486,0.774-3.673c0.54-0.195,0.188-0.864-1.557-0.856c-1.744,0.008-3.34,0.591-5.374,1.369	c-0.297,0.117-0.61,0.202-0.931,0.272c-1.846-0.35-3.763-0.428-5.765-0.202c-3.77,0.42-6.782,2.202-8.996,5.245	c-2.66,3.657-3.285,7.812-2.519,12.147c0.806,4.568,3.137,8.349,6.719,11.306c3.716,3.066,7.994,4.568,12.876,4.28	c2.965-0.171,6.266-0.568,9.989-3.719c0.939,0.467,1.924,0.654,3.559,0.794c1.259,0.117,2.472-0.062,3.411-0.257	c1.471-0.311,1.369-1.673,0.837-1.922C34,36,33.471,35.441,33.471,35.441c2.19-2.591,5.491-5.284,6.782-14.007	c0.102-0.692,0.016-1.128,0-1.689c-0.008-0.342,0.07-0.475,0.462-0.514c1.079-0.125,2.128-0.42,3.09-0.949	c2.793-1.525,3.919-4.031,4.185-7.034C48.028,10.79,47.981,10.315,47.496,10.074z M23.161,37.107	c-4.177-3.284-6.203-4.365-7.04-4.319c-0.782,0.047-0.641,0.942-0.469,1.525c0.18,0.576,0.415,0.973,0.743,1.478	c0.227,0.335,0.383,0.833-0.227,1.206c-1.345,0.833-3.684-0.28-3.794-0.335c-2.722-1.603-4.998-3.72-6.602-6.614	c-1.549-2.786-2.448-5.774-2.597-8.964c-0.039-0.77,0.188-1.043,0.954-1.183c1.009-0.187,2.049-0.226,3.059-0.078	c4.263,0.623,7.893,2.529,10.936,5.548c1.737,1.72,3.051,3.774,4.404,5.782c1.439,2.132,2.988,4.163,4.959,5.828	c0.696,0.584,1.252,1.027,1.783,1.354C27.667,38.515,24.991,38.554,23.161,37.107L23.161,37.107z M25.164,24.228	c0-0.342,0.274-0.615,0.618-0.615c0.078,0,0.149,0.015,0.211,0.039c0.086,0.031,0.164,0.078,0.227,0.148	c0.11,0.109,0.172,0.265,0.172,0.428c0,0.342-0.274,0.615-0.618,0.615S25.164,24.571,25.164,24.228L25.164,24.228z M31.382,27.419	c-0.399,0.163-0.798,0.303-1.181,0.319c-0.595,0.031-1.244-0.21-1.596-0.506c-0.548-0.459-0.939-0.716-1.103-1.517	c-0.07-0.342-0.031-0.872,0.031-1.175c0.141-0.654-0.016-1.074-0.477-1.455c-0.376-0.311-0.853-0.397-1.377-0.397	c-0.196,0-0.375-0.086-0.508-0.156c-0.219-0.109-0.399-0.381-0.227-0.716c0.055-0.109,0.321-0.373,0.383-0.42	c0.712-0.405,1.533-0.272,2.292,0.031c0.704,0.288,1.236,0.817,2.003,1.564c0.782,0.903,0.923,1.152,1.369,1.829	c0.352,0.529,0.673,1.074,0.892,1.696C32.016,26.905,31.844,27.224,31.382,27.419L31.382,27.419z"></path>
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className= "text-md md:text-lg md:font-semibold text-white mb-1">{tool.name}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{tool.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </LeftBorder>
            </Container>



        </div>
    )
}

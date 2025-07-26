import Image from "next/image";

import { LeftBorder } from "../shared/LeftBorder";

export default function VerifiedByAiBot() {
    return (
        <div className="md:mx-32">
            <LeftBorder>
                <div className="bg-black text-white p-8 rounded-lg ">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold">Verified by AI Bot</h2>
                        <div className="flex justify-center">
                            <Image
                                src={"/line.svg"}
                                alt="Line"
                                width={533}
                                height={1}
                            />
                        </div>


                        <p className="text-gray-400">Bot Verification Task</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4  rounded-full border border-primary flex items-center justify-center">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-xs  mb-2">Posted on Social Media</p>
                            <p className="text-white font-semibold">Verified</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4  rounded-full border border-primary flex items-center justify-center">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-xs  mb-2">Followed Required Account</p>
                            <p className="text-white font-semibold">Verified</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4  rounded-full border border-primary flex items-center justify-center">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-xs  mb-2">Complete form or shared link</p>
                            <p className="text-white font-semibold">Verified</p>
                        </div>
                    </div>
                </div>
            </LeftBorder>
        </div>

    )
}

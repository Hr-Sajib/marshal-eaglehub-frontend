import { FaRegImage } from "react-icons/fa";
import { LeftBorder } from "../shared/LeftBorder";
import Image from "next/image";


export default function JoinInstructions() {
    return (
        <div className="lg:mx-32">
            <LeftBorder>
                <div className=" text-white p-8 rounded-lg ">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-[35px] font-semibold ">Join Instructions</h2>
                        <div className="text-center">
                            <Image
                                src={"/line.svg"}
                                alt="Line"
                                width={533}
                                height={1}
                                className='line-svg mx-auto '
                            />
                        </div>
                        <p >Follow these steps to qualify for giveaways!</p>
                    </div>

                    <div className="space-y-6 ">
                        <div className="flex items-start  gap-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FaRegImage className='text-gray-600 bg-white p-1 size-11 rounded-md' />

                            </div>
                            <div>
                                <p className="text-white">
                                    To enter, you must follow the giveaway host and Eagle AI Hub on social media. Anyway, you probably won`&apos;`t
                                    get picked
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FaRegImage className='text-gray-600 bg-white p-1 size-11 rounded-md' />

                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Step 1</h3>
                                <p className="text-gray-400">Follow the giveaway host on social media</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FaRegImage className='text-gray-600 bg-white p-1 size-11 rounded-md' />

                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Step 2</h3>
                                <p className="text-gray-400">Share giveaway post with your friends</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FaRegImage className='text-gray-600 bg-white p-1 size-11 rounded-md' />

                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Step 3</h3>
                                <p className="text-gray-400">Tag your friends in your giveaways</p>
                            </div>
                        </div>
                    </div>
                </div>
            </LeftBorder>
        </div>


    )
}

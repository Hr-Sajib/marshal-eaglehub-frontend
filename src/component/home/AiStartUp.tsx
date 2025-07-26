import React from 'react'
import MainButton from '../shared/MainButton'
import LeftShadow from '../shared/LeftShadow'
import { LeftBorder } from '../shared/LeftBorder'
import { RightBorder } from '../shared/RightBorder'
import { RedRightBorder } from '../shared/RedRightBorder'
import { useRouter } from "next/navigation";

export default function AiStartUp() {
    const router = useRouter();

    return (
        <div className='relative pt-20'>
            
            <RedRightBorder>
               
                <div className="  text-white flex flex-col items-center justify-center py-24 md:py-44 ">
                     <LeftShadow className='top-0 -right-10 '/>
                    <div className="text-center space-y-6 md:space-y-11 relative z-10">
                        <h1 className="font-semibold text-2xl md:text-[35px] max-w-2xl mx-auto">
                            AI Start Up Of The Week
                        </h1>
                        <p className="text-base sm:text-[22px] text-white">
                            Tools with the highest recent growth this week
                        </p>
                        <MainButton title='Discover Now' onClick={() => router.push("/discover-trending")} />
                    </div>
                </div>
            </RedRightBorder>
        </div>



    )
}
//all
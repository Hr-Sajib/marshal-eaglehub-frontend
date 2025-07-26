import React from 'react'
import MultiPic from './UserPic'
import Image from 'next/image'
import SliderButtons from './SliderButtons'


export default function InfluencerCount() {

    const numbers = [
        {
            amount: "689",
            title: "influencers earned this week"
        },
        {
            amount: "$800,000",
            title: "paid out this month"
        },

        {
            amount: "Only 101",
            title: "spots available!"
        }
    ]

    return (
        <div>
            <MultiPic />
            <SliderButtons></SliderButtons>
            <div className="text-center">
                <Image
                    src={"/line.svg"}
                    alt="Line"
                    width={533}
                    height={1}
                    className='line-svg mx-auto mb-4'
                />
            </div>

            <div className='flex flex-col items-center justify-center gap-4 '>


                {
                    numbers.map((item) =>
                        <>
                            <div className='mx-auto'>
                                <p className='text-primary text-xl md:text-[25px] text-center font-semibold'>{item.amount}</p>
                                <p className='text-xl md:text-[25px] text-center text-white'>{item.title}</p>
                                <div className='text-center'>
                                    {
                                        item.title !== "spots available!" && <Image src={"/line.svg"} alt='Line' height={9} width={210}  className='line-svg mx-auto mb-4'/>
                                    }

                                </div>

                            </div>
                        </>
                    )
                }

            </div>
        </div>

    )
}

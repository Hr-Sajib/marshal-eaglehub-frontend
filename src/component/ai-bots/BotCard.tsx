import React from 'react'
import { IBots } from './AITools'
import { FaRegImage } from 'react-icons/fa'
import MainButton from '../shared/MainButton'



export default function BotCard({ tool }: { tool: IBots }) {
    return (
        <div

            className={` space-y-3 max-w-[528px]  transition relative group bg-neutral-950 px-5 rounded-lg py-2`}
        >

            <FaRegImage className='text-gray-600 bg-white p-1 size-11 rounded-md' />

            {/* Title */}
            <h3 className="text-base md:text-[20px] font-semibold ">{tool.title}</h3>

            {/* Description */}
            <p className="text-[0.94rem] font-normal mb-4">{tool.description}</p>

        
            <MainButton title="Explore" />
        </div>
    )
}

import React from 'react';


const AffiliantLink = () => {
    return (
        <div className='bg-black'>
            <div className='bg-black text-white max-w-3xl mx-auto px-10 py-10'>
            <h1 className='text-2xl md:text-[2.2rem] font-semibold text-center'>Your Affiliate Link</h1>
            <p className='text-sm md:text-[0.95rem] text-[#888888] font-regular text-center'>Share link to earn commission</p>
            <p className='text-[1rem] font-normal py-10'>https://www.toolify.ai/</p>
            <div className='flex flex-col md:flex-row gap-2 justify-center items-center '>
                <button className='text-[0.88rem] font-semibold border border-[#D10800] rounded-md  py-2 max-w-xs w-full mx-auto'>Preview Link</button>
                <button className='text-[0.88rem] font-semibold bg-[#D10800] rounded-md  py-2 max-w-xs w-full mx-auto'>Preview Link</button>
                {/* <SubButton title='Preview Link'/>
                <MainButton title='Create Custom Link'/> */}
            </div>
        </div>
        </div>
    );
};

export default AffiliantLink;
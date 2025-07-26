'use client';


// import PopupModal from '@/components/PopupModal'; // ✅ update path if needed
import Image from 'next/image';

const tools = [
    {
        title: 'Giveaway 1',
        description: 'Details lorem ipsum lorem ipsum lorem ipsum',
    },
    {
        title: 'Giveaway 2',
        description: 'Details lorem ipsum lorem ipsum lorem ipsum',
    },
    {
        title: 'Giveaway 3',
        description: 'Details lorem ipsum lorem ipsum lorem ipsum',
    },
    {
        title: 'Giveaway 4',
        description: 'Details lorem ipsum lorem ipsum lorem ipsum',
    },
];

export default function TopGiveaways() {


    return (
        <section className="min-h-screen bg-black text-white py-16 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {tools.map((tool, idx) => (
                    <div
                        key={idx}
                        className={` p-6  transition relative group ${idx === 1 || idx === 3
                            ? ' '
                            : ''
                            }`}
                    >
                        {/* shadow-[0_0_20px_2px_rgba(0,153,255,0.4)] */}

                        <Image
                            src="/images/ai-tool.png"
                            alt="Description of image"
                            width={50}
                            height={50}
                            className='rounded-[10px] mb-3'
                        />

                        {/* Title */}
                        <h3 className="text-[1.3rem] font-semibold mb-2">{tool.title}</h3>

                        {/* Description */}
                        <p className="text-[0.94rem] font-normal mb-4">{tool.description}</p>


                    </div>

                ))}
            </div>
            <div className='flex flex-col md:flex-row gap-2 justify-center items-center mt-10'>
                <button className='text-[0.88rem] font-semibold bg-[#D10800] rounded-md  py-2 max-w-xs w-full mx-auto'>Create Custom Link</button>
            </div>


        </section>
    );
}
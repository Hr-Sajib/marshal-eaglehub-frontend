'use client';

import React from 'react';
import { LeftBorder } from '../shared/LeftBorder';
import { RightBorder } from '../shared/RightBorder';
import BotCard from './BotCard';
import Container from '../shared/Container';


export interface IBots {
    title: string;
    description: string,
}

const tools = [
    {
        title: 'DM Automation Bot',
        description: 'Auto-reply and follow up in DMs While you sleep',
    },
    {
        title: 'Social Video Splitter Bot',
        description: 'Chop long video into Tik-Tok ready reels',
    },
    {
        title: 'Bio Link Page Builder',
        description: 'Auto-reply and follow up in DMs while you sleep',
    },
    {
        title: 'Social Video Splitter Bot',
        description: 'Chop long video into Tik-Tok ready reels',
    },
    {
        title: 'Outreach Blast Bot',
        description: 'Auto-reply and follow up in DMs while you sleep',
    },
    {
        title: 'Affiliate Earnings Tracker',
        description: 'Chop long video into Tik-Tok ready reels',
    },
];

export default function AiToolsPage() {
    // const [isOpen, setIsOpen] = useState(false);
    // const [selectedTool, setSelectedTool] = useState<{ title: string; description: string } | null>(null);

    // const handleOpenModal = (tool: { title: string; description: string }) => {
    //     setSelectedTool(tool);
    //     setIsOpen(true);
    // };

    return (
        <Container>
            <section className="  text-white py-16 px-6">

                <div className='flex flex-col md:flex-row justify-center'>
                    {/* Leftside */}
                    <div >
                        <div className=" mx-auto  gap-6 md:px-9 py-9">

                            {tools.slice(0, 1).map((tool) => <BotCard tool={tool} key={tool.title} />)}
                        </div>

                        <LeftBorder>
                            <div className=" mx-auto grid gap-12 md:gap-24 md:px-9 py-7 md:pl-4">

                                {tools.slice(1, 3).map((tool) => <BotCard tool={tool} key={tool.title} />)}
                            </div>
                        </LeftBorder>
                    </div>


                    {/* Rightside */}
                    <div >

                        <RightBorder>
                            <div className=" grid  gap-12 md:gap-24 md:px-9 py-7">


                                {tools.slice(1, 3).map((tool) => <BotCard tool={tool} key={tool.title} />)}

                            </div>
                        </RightBorder>
                        <div className=" mx-auto  gap-6 md:px-9 py-9">

                            {tools.slice(0, 1).map((tool) =><div key={tool.title} ><BotCard tool={tool}  /></div> )}
                        </div>
                    </div>

                </div>




                {/* Popup Modal */}
                {/* {selectedTool && (
                    <PopupModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                    />
                )} */}
            </section>
        </Container>

    );
}
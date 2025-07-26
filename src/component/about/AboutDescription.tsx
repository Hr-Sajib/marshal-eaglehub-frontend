'use client';

import Image from 'next/image';
import React from 'react';
import AboutPreview from './AboutPreview';
import { LeftBorder } from '../shared/LeftBorder';
import { RightBorder } from '../shared/RightBorder';

const AboutDescription = () => {
    return (
        <main className="relative  text-white min-h-screen flex flex-col items-center justify-center md:px-6 "
        >
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '600px',
                height: '600px',
                backgroundImage: "url('/images/red.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'top right',
                opacity: 1,
                pointerEvents: 'none',
                zIndex: 0,
            }} />
            {/* Hero Section */}
            <header >
                <LeftBorder>
                    <div
                        className="relative  mx-auto p-3  md:p-7 shadow-xl overflow-hidden">
                        {/* Left Border */}

                        <p className="text-xs md:text-[15px] font-light text-left">
                            Back in 2022, when most people didn’t even know what AI was — before the whole thing blew up — we built this project for the real ones who see the future coming. Since then, over 16,000 new millionaires have been made — not by chance, but by grinding AI early, when the game was still ours to win. Our community  got in before the hype, invested in projects no one else even knew about, and turned moves into serious stacks. We didn’t wait. We led. We built the empire — and we keep expanding it every damn day. Now, it’s your shot. You got nothing to lose and everything to claim
                        </p>

                        <p className="text-xs md:text-[15px] font-light text-left my-2 md:my-3">
                            Here, we give you real value first — tools, tactics, straight-up power — then we ask for your trust and your payment.
                        </p>

                        <p className="text-xs md:text-[15px] font-light text-left">
                            What you get inside EGEAL AI Hub:
                        </p>

                        <ul className="text-left list-disc list-inside mb-6 space-y-2 text-xs md:text-[15px] font-light ps-4">
                            <li>Access to cutting-edge AI tools that actually work, tested and battle proven</li>
                            <li>Step-by-step strategies to monetize AI and build real income streams</li>
                            <li>Exclusive early access to AI projects before they blow up</li>
                            <li>A community of grinders and winners pushing each other forward</li>
                            <li>Regular updates and insights to keep you ahead of the AI curve</li>
                            <li>Support that doesn’t ghost you — real people, real help</li>
                        </ul>

                        <p className="text-xs md:text-[15px] font-light text-left">
                            The tools we give you and the problems we solve? They’re real. They cut through the noise, separate the real from the fakes.
                        </p>


                    </div>
                </LeftBorder>


                <p className="text-sm md:text-lg text-gray-300 font-normal mx-auto text-center my-14">
                    All we ask is $1 to start your 7-day trial — just one dollar to prove you’re serious. <br />
                    If you don’t want to invest $1 to become a future millionaire, then this ain’t your place. <br />
                    Keep scrolling. Forget the idea of getting rich. This place is only for the serious. <br />
                    Fly high. Die rare.
                </p>

            </header>

            {/* Trusted By Section */}
            <RightBorder>
                 <div className='relative flex flex-col items-center justify-center mx-auto p-8 md:p-16 overflow-hidden'>
                   
                    <h2 className="text-xl md:text-3xl font-bold mb-4">Trusted By</h2>
                    <p className='text-sm md:text-lg text-gray-300 font-normal text-center'>The AI Elite. No Fluff. Just Fire.
               

                        We’re proud to feature these top AI projects inside the EGEAL AI Hub — <br />
                        tools built by the sharpest minds pushing the future forward.
                    </p>
                </div>
            </RightBorder>
            <section className="text-center my-20 w-full">
               
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <Image src="/chatgpt.png" alt="ChatGPT" width={175} height={100} />
                    <Image src="/deepseek.png" alt="DeepSeek" width={175} height={100} />
                    <Image src="/gemini.png" alt="Gemini" width={175} height={100} />
                    <Image src="/runw.png" alt="Runway" width={175} height={100} />
                    <Image src="/m.png" alt="Runway" width={80} height={120} />
                    <Image src="/perplexity.png" alt="Porphlexity" width={175} height={100} />
                </div>
            </section>
            <AboutPreview></AboutPreview>

        </main>
    );
};

export default AboutDescription;
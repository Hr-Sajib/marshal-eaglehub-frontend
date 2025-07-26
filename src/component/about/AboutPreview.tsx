import Image from 'next/image';
import React from 'react';
import MainButton from '../shared/MainButton';

const AboutPreview = () => {
    return (
        <div>
            {/* Previews Section */}
            <section className="text-center mb-20 w-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Previews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  mx-auto">
                    {[
                        { src: '/chatgpt.png', alt: 'ChatGPT 4' },
                        { src: '/deepseek.png', alt: 'Whale' },
                        { src: '/grmini.png', alt: 'Gemini' },
                        { src: '/pixelcut.png', alt: 'Pixelcut' },
                        { src: '/cam.png', alt: 'Film' },
                        { src: '/perplexity.png', alt: 'Porphlexity' },
                    ].map(({ src, alt }) => (
                        <div
                            key={alt}
                            className=" rounded-lg flex flex-col items-center text-center relative overflow-hidden min-h-[360px] max-h-[500px]"
                        >
                            {/* Image Wrapper */}
                            <div className="relative border border-[#D10800] rounded-xl w-full h-[300px] flex items-center justify-center">
                                <Image src={src} alt={alt} width={150} height={150} className="object-contain" />

                                {/* Overlay Button */}
                                <button className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full shadow-lg">
                                    Paid
                                </button>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mt-4 text-sm">
                                Multimodal AI with reasoning, inside audio and reasoning
                            </p>
                        </div>
                    ))}
                </div>

                {/* Unlock Button */}
                {/* <button className="mt-12 bg-[#D10800] transition px-6 py-3 rounded-[6px] text-white font-semibold">
                    Unlock at $99
                </button> */}
                <MainButton className='mt-12' title='Unlock at $99'/>
            </section>
        </div>
    );
};

export default AboutPreview;
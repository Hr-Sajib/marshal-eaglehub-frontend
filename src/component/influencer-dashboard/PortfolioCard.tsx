'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import {
    FaLaptopCode,
    FaPenFancy,
    FaPodcast,
    FaShoppingBag,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa';


const PortfolioCard = () => {
    type LinkItem = {
        text: string;
        icon: IconType;
        href: string;
        highlight?: boolean;
    };

    const links: LinkItem[] = [
        {
            text: 'Visit my portfolio',
            icon: FaLaptopCode,
            href: '#',
        },
        {
            text: 'Read my articles',
            icon: FaPenFancy,
            href: '#',
        },
        {
            text: 'Listen my podcast',
            icon: FaPodcast,
            href: '#',
        },
        {
            text: 'Visit my store',
            icon: FaShoppingBag,
            href: '#',
        },
        {
            text: 'Subscribe to my channel',
            icon: FaYoutube,
            href: '#',
        },
    ];

    return (
        <div className="">
           
                

                {/* right */}
                <div className=" bg-black flex flex-col items-center justify-center text-white border border-[#D10800] rounded-[30px] px-[1px] ">
                    <div className="relative h-[120px] w-full rounded-t-[30px] overflow-hidden">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center z-0"
                            style={{
                                backgroundImage: "url('/images/proile-bg.jpg')",
                            }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                        {/* Foreground */}
                        <div className="relative z-20 bg-[#0c2014] h-full w-full rounded-t-[30px]"></div>
                    </div>

                    <div className="py-10 text-center z-20">
                        <div className="bg-white p-2 rounded-full -mt-30 w-fit mx-auto">
                            <Image
                                src="/images/profile.jpg"
                                alt="profile"
                                width={160}
                                height={160}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <h1 className="text-[1.8rem] font-bold my-2">John Carter</h1>
                        <p className="text-[1rem] font-normal px-6 lg:px-0">
                            Aliquam ut vitae vitae enim viverra luctus sollicitudin <br /> aliquam
                            itae pulvinar vestibulum dict at ipsum.
                        </p>

                        {/* Social Icons */}
                        <div className="flex justify-center items-center gap-4 mt-10 text-2xl">
                            <a href="#" aria-label="Facebook">
                                <FaFacebookF className="text-blue-500 transition" />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <FaTwitter className="text-sky-400 transition" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FaInstagram className="text-pink-500 transition" />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedinIn className="text-blue-700 transition" />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <FaYoutube className="text-red-600 transition" />
                            </a>
                        </div>


                        {/* Link Buttons */}
                        <div className="flex flex-col gap-3 w-full  pt-20 pb-10 px-6 lg:px-0">
                            {links.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={`group flex items-center justify-between rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${link.highlight
                                            ? 'bg-[#0c1120] text-white'
                                            : 'bg-white text-[#030B1A] hover:bg-[#030B1A] hover:text-white'
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <Icon className="text-[1rem]" />
                                            {link.text}
                                        </span>
                                        <span
                                            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${link.highlight
                                                ? 'bg-[#EFF2F6] text-[#030B1A]'
                                                : 'bg-gray-100 group-hover:bg-white group-hover:text-[#030B1A]'
                                                }`}
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default PortfolioCard;
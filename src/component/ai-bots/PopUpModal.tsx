'use client';

import Image from 'next/image';
import React from 'react';

type PopupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PopupModal({
  isOpen,
  onClose,
}: PopupModalProps) {
  if (!isOpen) return null;

  const tools = [
    {
      title: 'DM Automation Bot',
      description: 'Auto-reply and follow up in DMs while you sleep',
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

  const tool = tools[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-60">
      <div className="bg-gray-900 text-white p-10 rounded-xl w-full max-w-md shadow-lg relative flex flex-col items-center text-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>
        <div>
          <Image
            src="/images/icons_question.png"
            alt="Description of image"
            width={64}
            height={64}
            className="rounded-full mb-3 bg-[#D10800] p-3"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">{tool.title}</h2>
        <p className="text-[#888888]">{tool.description}</p>

        <div className="flex mt-6 gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-[#4B4B4B] rounded"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#D10800] text-white rounded"
          >
            Let me Try
          </button>
        </div>
      </div>
    </div>
  );
}
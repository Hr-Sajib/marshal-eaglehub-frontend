'use client';

import Image from 'next/image';
import React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';

type PopupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  button: string;
};

export default function Popups({
  isOpen,
  onClose,
  title,
  description,
  button,
}: PopupModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60">
      <div className="bg-gray-900 text-white px-8 py-10 rounded-xl shadow-lg relative flex flex-col items-center text-center
        
        max-w-full
      ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>

        <div className='bg-[#D10800] p-3 rounded-full mb-3'>
          {/* <Image
            src="/images/icons_question.png"
            alt="Description of image"
            width={64}
            height={64}
            className="rounded-full mb-3 bg-[#D10800] p-3"
          /> */}
          <BsQuestionCircle className='w-10 h-10 text-white' />
        </div>

        <h2 className="text-2xl font-semibold my-4 whitespace-pre-line">{title}</h2>
        <p className="text-[#888888]">{description}</p>

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
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Popups from './Popups';


export default function AllPopupButtons() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const tools = [
    {
      title: 'Want to earn $100 for trying an AI tool?',
      description: 'If you cancel now, your progress will be deleted, and you will have to start over.',
      button: 'Let me Try',
      click : 'Want to earn?'
    },
    {
      title: 'You haven’t claimed a tool yet. Start here.',
      description: 'If you cancel now, your progress will be deleted, and you will have to start over.',
      button: 'Let me Try',
      click : 'Start here'
      
    },
    {
      title: 'We’re setting up your AI tools…',
      description: 'Loading.......',
      button: 'Ok',
      click : 'Setting up'
    },
    {
      title: 'Continue from where you stopped last time?”',
      description: '',
      button: 'Ok',
      click: 'Continue',
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
      {tools.map((tool, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className="px-6 py-3 bg-[#D10800] text-white rounded-[10px]"
        >
         {tool.click}
        </button>
      ))}

      {activeIndex !== null && (
        <Popups
          isOpen={activeIndex !== null}
          onClose={() => setActiveIndex(null)}
          title={tools[activeIndex].title}
          description={tools[activeIndex].description}
          button={tools[activeIndex].button}
        />
      )}
    </div>
  );
}

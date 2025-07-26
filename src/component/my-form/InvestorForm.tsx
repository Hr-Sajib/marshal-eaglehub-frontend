'use client';
import React, { useState } from 'react';
import MainButton from '../shared/MainButton';

export default function InvestorForm() {
  const [userType, setUserType] = useState('single');

  return (
    <section className="min-h-screen   text-white py-16 ">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 z-10 relative">
          Find the Right Project or Investor to Build Your AI Empire
        </h2>

        {/* User Type Selection */}
        <p className="mb-2">I am</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 border border-[#D10800] rounded-[10px] p-4">
          {[
            { value: 'single', label: 'Single' },
            { value: 'investor', label: 'An Investor looking for a project to invest in' },
            { value: 'founder', label: 'A founder looking for an investor for my project' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center gap-2  rounded-[2px] ${
                userType === option.value
                  ? ' bg-red-600/10'
                  : ''
              } cursor-pointer transition`}
            >
              <input
                type="radio"
                name="userType"
                value={option.value}
                checked={userType === option.value}
                onChange={() => setUserType(option.value)}
                className="accent-[#D10800]"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {[
            { label: 'Project or Brand Name', type: 'text' },
            { label: 'Full Name', type: 'text' },
            { label: 'What does your project do?', type: 'text' },
            { label: 'Email Address', type: 'email' },
            { label: 'Do you already have a live product?', type: 'text' },
            { label: 'Phone or WhatsApp Number (Optional)', type: 'text' },
            { label: 'What type of investment are you seeking?', type: 'text' },
            { label: 'How much funding are you looking to raise', type: 'text' },
          ].map((field, idx) => (
            <div key={idx}>
              <p className="mb-2">{field.label}</p>
              <input
                type={field.type}
                placeholder=""
                className="  border border-[#D10800] rounded-[10px] px-4 py-[14px] w-full focus:outline-none"
              />
            </div>
          ))}

          {/* Submit Button (centered on mobile, right on desktop) */}
          <div className="md:col-span-2 flex justify-center mt-4">
            {/* <button
              type="submit"
              className="bg-[#D10800] px-6 py-2 rounded-[10px] text-white font-medium"
            >
              Submit
            </button> */}
            <MainButton title='Submit' type='submit' />
          </div>
        </form>
      </div>
    </section>
  );
}
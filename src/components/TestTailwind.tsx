// src/components/TestTailwind.tsx
import React from 'react';

export const TestTailwind = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100 ">
      <div className="tw-p-6 tw-bg-white tw-rounded-lg tw-shadow-lg">
        <h1 className="tw-text-3xl tw-font-bold tw-text-blue-600">
          Testing Tailwind
        </h1>
        <p className="tw-mt-4 tw-text-gray-600">
          If you see this styled, Tailwind is working!
        </p>
        <button className="tw-mt-4 tw-px-4 tw-py-2 tw-bg-blue-500 tw-text-white tw-rounded hover:tw-bg-blue-600">
          Test Button
        </button>
      </div>
    </div>
  );
};
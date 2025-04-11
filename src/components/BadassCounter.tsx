import React from 'react';

interface BadassCounterProps {
  count: number;
}

function BadassCounter({ count }: BadassCounterProps) {
  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-semibold text-[#FF4D00] mb-2">Badass Points</h3>
      <div className="flex justify-center items-center space-x-2">
        <span className="text-3xl font-bold text-white">{count}</span>
      </div>
    </div>
  );
}

export default BadassCounter;
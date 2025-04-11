import React from 'react';

export default function Hero() {
  return (
    <div 
      className="h-[60vh] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C0D0D]/90 to-transparent">
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-2xl text-[#E8D0B3]">
            <h1 className="text-5xl font-bold mb-4">DOMINATE THE COURT</h1>
            <p className="text-xl">Where passion meets power. ATP Volleyball - unleashing the beast in every play.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
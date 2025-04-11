import React from 'react';

interface StatCardProps {
  title: string;
  name: string;
  stat: string;
}

function StatCard({ title, name, stat }: StatCardProps) {
  return (
    <div className="bg-[#1A0707] p-6 rounded-lg">
      <h3 className="text-[#FF4D00] font-bold mb-2">{title}</h3>
      <div className="text-2xl font-bold text-[#E8D0B3]">{name}</div>
      <div className="text-xl text-[#FF4D00]">{stat}</div>
    </div>
  );
}

export default function PlayerStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="TOP SCORER" name="Harrison" stat="215 KILLS" />
      <StatCard title="TOP BLOCKER" name="Nguyen" stat="48 BLOCKS" />
      <StatCard title="TOP ACER" name="Lopez" stat="37 ACES" />
    </div>
  );
}
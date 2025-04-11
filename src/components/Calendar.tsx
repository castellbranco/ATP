import React from 'react';

interface Match {
  date: string;
  opponent: string;
  result: string;
}

const matches: Match[] = [
  { date: "Oct. 10", opponent: "Bears", result: "-" },
  { date: "Oct. 17", opponent: "Eagles", result: "-" },
  { date: "Oct. 24", opponent: "Cougars", result: "-" },
  { date: "Nov. 3", opponent: "Wildcats", result: "-" },
];

export default function Calendar() {
  return (
    <div className="bg-[#1A0707] rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-[#E8D0B3] p-4">SEASON CALENDAR</h2>
      <table className="w-full">
        <thead className="bg-[#2C0D0D]">
          <tr>
            <th className="text-[#E8D0B3] p-4 text-left">DATE</th>
            <th className="text-[#E8D0B3] p-4 text-left">OPPONENT</th>
            <th className="text-[#E8D0B3] p-4 text-left">RESULT</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index} className="border-b border-[#2C0D0D]">
              <td className="text-[#E8D0B3] p-4">{match.date}</td>
              <td className="text-[#E8D0B3] p-4">{match.opponent}</td>
              <td className="text-[#E8D0B3] p-4">{match.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
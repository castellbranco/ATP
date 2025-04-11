import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#1E1E1E] p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#FF4D00]">ATP Volleyball</span>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-[#FF4D00]">Home</Link>
          <Link to="/team" className="hover:text-[#FF4D00]">Team</Link>
        </div>
      </div>
    </nav>
  );
}
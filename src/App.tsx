import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Calendar from './components/Calendar';
import PlayerStats from './components/PlayerStats';
import BadassCounter from './components/BadassCounter';
import YoutubePage from './pages/YoutubePage';
import TeamPage from './pages/TeamPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#2C0D0D]">
      <Hero />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Calendar />
          </div>
          <div>
            <BadassCounter count={4} />
          </div>
        </div>
        <PlayerStats />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#2C0D0D]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/youtube" element={<YoutubePage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

interface Player {
  id: number;
  name: string;
  number: string;
  position: string;
  image: string;
  stats: {
    age: number;
    height: string;
    team: string;
    followers: string;
  };
  bio: string;
}

const players: Player[] = [
  {
    id: 1,
    name: "Alex Thompson",
    number: "12",
    position: "Outside Hitter",
    image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&q=80",
    stats: {
      age: 24,
      height: "1.92M",
      team: "ATP",
      followers: "3.2K"
    },
    bio: "Leading scorer for ATP Volleyball with exceptional attacking skills and powerful serves. Known for clutch performances in critical matches."
  },
  {
    id: 2,
    name: "Mike Johnson",
    number: "07",
    position: "Setter",
    image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&q=80",
    stats: {
      age: 22,
      height: "1.85M",
      team: "ATP",
      followers: "2.8K"
    },
    bio: "Team's primary setter with incredible court vision and tactical understanding. Specializes in quick sets and defensive plays."
  },
  {
    id: 3,
    name: "Chris Davis",
    number: "18",
    position: "Middle Blocker",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80",
    stats: {
      age: 26,
      height: "2.01M",
      team: "ATP",
      followers: "4.1K"
    },
    bio: "Dominant middle blocker with the highest blocking efficiency in the league. Known for quick attacks and read blocking ability."
  }
];

export default function TeamPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">TALENT MANAGEMENT</h1>
          <button className="bg-[#FF4D00] text-white px-6 py-2 rounded-full hover:bg-[#FF6B33] transition-colors">
            GET IN TOUCH
          </button>
        </div>

        <div className="relative">
          {/* Red diagonal overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-[#FF4D00]/90 -skew-x-12 transform origin-top-right" />
          
          <div className="relative z-10">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Navigation]}
              className="w-full py-12"
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {players.map((player, index) => (
                <SwiperSlide key={player.id}>
                  <div 
                    className={`relative transition-all duration-500 ${
                      activeIndex === index 
                        ? 'scale-110 z-10 filter-none' 
                        : 'scale-90 opacity-70 grayscale'
                    }`}
                  >
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                      <img 
                        src={player.image} 
                        alt={player.name}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Player Stats */}
            <div className="text-white mt-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#FF4D00]">●</span>
                <span className="text-sm uppercase">{players[activeIndex].position}</span>
                <h2 className="text-3xl font-bold ml-4">{players[activeIndex].name}</h2>
              </div>

              <div className="grid grid-cols-4 gap-8 mb-6">
                <div>
                  <div className="text-4xl font-bold text-[#FF4D00]">{players[activeIndex].stats.age}</div>
                  <div className="text-sm text-gray-400">Years old</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF4D00]">{players[activeIndex].stats.height}</div>
                  <div className="text-sm text-gray-400">Height</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF4D00]">{players[activeIndex].stats.team}</div>
                  <div className="text-sm text-gray-400">Team</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF4D00]">{players[activeIndex].stats.followers}</div>
                  <div className="text-sm text-gray-400">Followers</div>
                </div>
              </div>

              <p className="text-gray-400 max-w-2xl">
                {players[activeIndex].bio}
              </p>

              <div className="flex gap-4 mt-6">
                <div className="text-2xl font-bold">{players[activeIndex].number}</div>
                <div className="text-2xl font-bold">{String(activeIndex + 1).padStart(2, '0')}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#FF4D00] rounded-full w-12 h-12 flex items-center justify-center">
            ←
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#FF4D00] rounded-full w-12 h-12 flex items-center justify-center">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
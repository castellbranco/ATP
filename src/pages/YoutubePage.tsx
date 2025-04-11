import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const videos = [
  {
    id: 1,
    title: "Season Highlights 2024",
    thumbnail: "https://images.unsplash.com/photo-1552673304-23f6ad21aada?auto=format&fit=crop&q=80",
    description: "Best plays from our incredible 2024 season"
  },
  {
    id: 2,
    title: "Team Practice Session",
    thumbnail: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&q=80",
    description: "Behind the scenes look at our training"
  },
  {
    id: 3,
    title: "Championship Match",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80",
    description: "Full game highlights from the finals"
  },
  // Add more videos as needed
];

export default function YoutubePage() {
  return (
    <div className="min-h-screen bg-[#2C0D0D] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#E8D0B3] text-center mb-16">LATEST VIDEOS</h1>
        
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="w-full"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="bg-[#1A0707] rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#FF4D00] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#FF6B33] transition-colors">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#E8D0B3] mb-2">{video.title}</h3>
                  <p className="text-[#FF4D00]">{video.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
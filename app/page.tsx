"use client";

import { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, Play, Info, Star, Plus } from 'lucide-react';
import Image from 'next/image';
import { Navigation, ContentRow } from './components';
import type { CategoryName } from './components';
import { useRouter } from 'next/navigation';

// Mock data for content
const heroContent = {
  title: "Stranger Things",
  description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
  rating: "4.8",
  year: "2024",
  genre: "Sci-Fi • Drama • Horror",
  image: "/assests/Stranger.jpg"
};

const contentRows = [
  {
    title: "Trending Now",
    items: [
      { id: 17, title: "The Gray Man", image: "/assests/The Gray Man.jpg", rating: 4.0, description: "A CIA operative on the run from assassins." },
      { id: 4, title: "Ozark", image: "/assests/Ozark.jpg", rating: 4.6, description: "A financial advisor drags his family from Chicago to the Missouri Ozarks." },
      { id: 5, title: "The Witcher", image: "/assests/The Witcher.jpg", rating: 4.5, description: "A mutated monster-hunter for hire journeys toward his destiny." },
      { id: 6, title: "Stranger Things", image: "/assests/Stranger.jpg", rating: 4.8, description: "A group of kids uncover supernatural mysteries in their town." }
    ]
  },
  {
    title: "Netflix Originals",
    items: [
      { id: 7, title: "House of Cards", image: "/assests/House of Cards.jpg", rating: 4.4, description: "A ruthless politician will stop at nothing to conquer Washington, D.C." },
      { id: 9, title: "Narcos", image: "/assests/Narcos.jpg", rating: 4.7, description: "The rise and fall of Colombian drug kingpin Pablo Escobar." }
    ]
  },
  {
    title: "Action & Adventure",
    items: [
      { id: 13, title: "Extraction", image: "/assests/extraction.jpg", rating: 4.2, description: "A black ops mercenary embarks on a mission to rescue an Indian crime lord's kidnapped son." },
      { id: 15, title: "6 Underground", image: "/assests/Underground.jpg", rating: 4.1, description: "Six individuals fake their deaths and form a vigilante squad." },
      { id: 17, title: "The Gray Man", image: "/assests/The Gray Man.jpg", rating: 4.0, description: "A CIA operative on the run from assassins." }
    ]
  }
];

const categories: CategoryName[] = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

export default function NetflixRedesign() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showHeroInfo, setShowHeroInfo] = useState(false);
  const router = useRouter();

  const handleHeroPlay = () => {
    router.push(`/play?title=${encodeURIComponent(heroContent.title)}&video=${encodeURIComponent('/assests/ROOM_5.exe - CORTAR FF (1080p, h264).mp4')}`);
  };

  // Filter contentRows based on searchQuery
  const filteredRows = contentRows
    .map(row => ({
      ...row,
      items: row.items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }))
    .filter(row => row.items.length > 0 || searchQuery === "");

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation
        categories={categories}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {/* Hero Section */}
      <main>
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/assests/Stranger.jpg"
              alt="Stranger Things Hero"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#e50914] text-white px-3 py-1 rounded text-sm font-medium">
                  Netflix Original
                </span>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{heroContent.rating}</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">{heroContent.year}</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">{heroContent.genre}</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {heroContent.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                {heroContent.description}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  className="flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
                  onClick={handleHeroPlay}
                  type="button"
                >
                  <Play className="h-6 w-6 fill-current" />
                  <span>Play</span>
                </button>
                <button
                  className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30"
                  onClick={() => setShowHeroInfo(true)}
                  type="button"
                >
                  <Info className="h-6 w-6" />
                  <span>More Info</span>
                </button>
              </div>
              {/* Hero Info Popup */}
              {showHeroInfo && (
                <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 mx-auto bg-black/90 p-6 rounded-lg shadow-lg z-50 max-w-md text-center border border-white/20">
                  <div className="text-white text-base mb-4">{heroContent.description}</div>
                  <button
                    className="mt-2 px-4 py-2 text-sm bg-white/20 text-white rounded hover:bg-white/30"
                    onClick={() => setShowHeroInfo(false)}
                    type="button"
                  >
                    Close
                  </button>
                </div>
              )}
              {/* Hero Video Popup */}
              {/* Hero Video Popup */}
            </div>
          </div>
        </section>
        {/* Content Rows */}
        <section className="relative z-10 -mt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {filteredRows.map((row, rowIndex) => (
              <ContentRow key={rowIndex} title={row.title} items={row.items} />
            ))}
            {searchQuery && filteredRows.length === 0 && (
              <div className="text-center text-gray-400 py-12 text-lg">No results found.</div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
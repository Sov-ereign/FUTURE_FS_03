"use client";

import { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, Play, Info, Star, Plus } from 'lucide-react';
import Image from 'next/image';

// Mock data for content
const heroContent = {
  title: "Stranger Things",
  description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
  rating: "4.8",
  year: "2024",
  genre: "Sci-Fi • Drama • Horror"
};

const contentRows = [
  {
    title: "Trending Now",
    items: [
      { id: 1, title: "The Crown", image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.9 },
      { id: 2, title: "Bridgerton", image: "https://images.pexels.com/photos/7234252/pexels-photo-7234252.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.7 },
      { id: 3, title: "Money Heist", image: "https://images.pexels.com/photos/8111681/pexels-photo-8111681.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.8 },
      { id: 4, title: "Ozark", image: "https://images.pexels.com/photos/6899505/pexels-photo-6899505.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.6 },
      { id: 5, title: "The Witcher", image: "https://images.pexels.com/photos/8111688/pexels-photo-8111688.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.5 },
      { id: 6, title: "Dark", image: "https://images.pexels.com/photos/7991612/pexels-photo-7991612.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.9 }
    ]
  },
  {
    title: "Netflix Originals",
    items: [
      { id: 7, title: "House of Cards", image: "https://images.pexels.com/photos/8111687/pexels-photo-8111687.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.4 },
      { id: 8, title: "Orange is the New Black", image: "https://images.pexels.com/photos/7234254/pexels-photo-7234254.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.3 },
      { id: 9, title: "Narcos", image: "https://images.pexels.com/photos/6899499/pexels-photo-6899499.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.7 },
      { id: 10, title: "The Umbrella Academy", image: "https://images.pexels.com/photos/7991625/pexels-photo-7991625.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.6 },
      { id: 11, title: "Mindhunter", image: "https://images.pexels.com/photos/8111682/pexels-photo-8111682.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.8 },
      { id: 12, title: "Black Mirror", image: "https://images.pexels.com/photos/7234261/pexels-photo-7234261.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.9 }
    ]
  },
  {
    title: "Action & Adventure",
    items: [
      { id: 13, title: "Extraction", image: "https://images.pexels.com/photos/6899506/pexels-photo-6899506.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.2 },
      { id: 14, title: "The Old Guard", image: "https://images.pexels.com/photos/7991618/pexels-photo-7991618.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.3 },
      { id: 15, title: "6 Underground", image: "https://images.pexels.com/photos/8111690/pexels-photo-8111690.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.1 },
      { id: 16, title: "Red Notice", image: "https://images.pexels.com/photos/7234255/pexels-photo-7234255.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.4 },
      { id: 17, title: "The Gray Man", image: "https://images.pexels.com/photos/6899507/pexels-photo-6899507.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.0 },
      { id: 18, title: "Triple Frontier", image: "https://images.pexels.com/photos/7991620/pexels-photo-7991620.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.2 }
    ]
  }
];

const categories = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

export default function NetflixRedesign() {
  const [activeCategory, setActiveCategory] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <header>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`} aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-[#e50914] tracking-tight">
                NETFLIX
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-[#00d4ff] ${
                      activeCategory === category ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200">
                <Bell className="h-5 w-5" />
              </button>
              <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-white/10 transition-colors duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8b5cf6] to-[#00d4ff] rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">JD</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <input
                type="text"
                placeholder="Search for movies, TV shows, documentaries and more..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>
      </header>

      {/* Hero Section */}
      <main>
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        >
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
              <button className="flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 transform hover:scale-105">
                <Play className="h-6 w-6 fill-current" />
                <span>Play</span>
              </button>
              <button className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30">
                <Info className="h-6 w-6" />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Rows */}
      <section className="relative z-10 -mt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {contentRows.map((row, rowIndex) => (
            <ContentRow key={rowIndex} title={row.title} items={row.items} />
          ))}
        </div>
      </section>
      </main>
    </div>
  );
}

function ContentRow({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
        {items.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function ContentCard({ item }: { item: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex-shrink-0 w-64 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-36 object-cover transition-all duration-300 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Content */}
        {isHovered && (
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-white">{item.rating}</span>
              </div>
              <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200">
                <Plus className="h-4 w-4 text-white" />
              </button>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-200">
                  <Play className="h-4 w-4 fill-current" />
                </button>
                <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200">
                  <Info className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
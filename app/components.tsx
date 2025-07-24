import { useState } from 'react';
import { Search, Bell, ChevronDown, Star, Plus, Play, Info } from 'lucide-react';
import Image from 'next/image';

export function Navigation({ categories, activeCategory, setActiveCategory, searchOpen, setSearchOpen }) {
  return (
    <header>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-black/95 backdrop-blur-md`} aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <div style={{ width: 84, height: 84, position: 'relative' }}>
                <Image
                  src="/assests/N--logo.png"
                  alt="Netflix AI Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded"
                  priority
                />
              </div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-[#00d4ff] ${activeCategory === category ? 'text-white' : 'text-gray-300'}`}
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
  );
}

export function ContentRow({ title, items }) {
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

export function ContentCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="group relative flex-shrink-0 w-40 h-60 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg w-40 h-60">
        <img
          src={item.image}
          alt={item.title}
          className="w-40 h-60 object-cover transition-all duration-300 group-hover:brightness-110"
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
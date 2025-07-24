import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ChevronDown, Star, Plus, Play, Info, Check } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMyList } from '../my-list-context';

const categoryRoutes = {
  'Home': '/',
  'TV Shows': '/tv-shows',
  'Movies': '/movies',
  'New & Popular': '/new-popular',
  'My List': '/my-list',
  'Browse by Languages': '/browse-by-languages',
};

// Add types for navigation categories
const categoryNames = [
  'Home',
  'TV Shows',
  'Movies',
  'New & Popular',
  'My List',
  'Browse by Languages',
] as const;
export type CategoryName = typeof categoryNames[number];

interface NavigationProps {
  categories: CategoryName[];
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
}

interface ContentItem {
  id: number;
  title: string;
  image: string;
  rating: number;
  description?: string;
}

export function Navigation({ categories, searchOpen, setSearchOpen, searchQuery, setSearchQuery }: NavigationProps) {
  const pathname = usePathname();
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
                  <Link
                    key={category}
                    href={categoryRoutes[category]}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-[#00d4ff] ${pathname === categoryRoutes[category] ? 'text-white' : 'text-gray-300'}`}
                  >
                    {category}
                  </Link>
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
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export function ContentRow({ title, items }: ContentRowProps) {
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

export function ContentCard({ item }: { item: ContentItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const router = useRouter();
  const { addToList, removeFromList, isInList } = useMyList();
  const inList = isInList(item.id);
  const handlePlay = () => {
    router.push(`/play?title=${encodeURIComponent(item.title)}&video=${encodeURIComponent('/assests/ROOM_5.exe - CORTAR FF (1080p, h264).mp4')}`);
  };
  const handlePlus = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inList) {
      removeFromList(item.id);
    } else {
      addToList(item);
    }
  };
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
              <button
                className={`p-2 rounded-full transition-colors duration-200 ${inList ? 'bg-[#00d4ff]/80' : 'bg-white/20'} backdrop-blur-sm hover:bg-white/30`}
                onClick={handlePlus}
                title={inList ? 'Remove from My List' : 'Add to My List'}
                aria-label={inList ? 'Remove from My List' : 'Add to My List'}
                type="button"
              >
                {inList ? (
                  <Check className="h-4 w-4 text-white" />
                ) : (
                  <Plus className="h-4 w-4 text-white" />
                )}
              </button>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <div className="flex space-x-2">
                <button
                  className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-200"
                  onClick={handlePlay}
                  type="button"
                >
                  <Play className="h-4 w-4 fill-current" />
                </button>
                <button
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200"
                  onClick={() => setShowInfo(true)}
                  type="button"
                >
                  <Info className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Info Popup */}
        {showInfo && (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/90 bg-opacity-90 p-4 z-30 rounded-lg">
            <div className="text-white text-xs mb-2 text-center">
              {item.description || "No description available."}
            </div>
            <button
              className="mt-2 px-2 py-1 text-xs bg-white/20 text-white rounded hover:bg-white/30"
              onClick={() => setShowInfo(false)}
              type="button"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 
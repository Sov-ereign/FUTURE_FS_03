import { useState } from 'react';
import { Navigation, ContentRow } from './components';

const categories = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

const tvShows = [
  { id: 6, title: "Stranger Things", image: "/assests/Stranger.jpg", rating: 4.8 },
  { id: 4, title: "Ozark", image: "/assests/Ozark.jpg", rating: 4.6 },
  { id: 5, title: "The Witcher", image: "/assests/The Witcher.jpg", rating: 4.5 }
];

export default function TVShowsPage() {
  const [activeCategory, setActiveCategory] = useState("TV Shows");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContentRow title="TV Shows" items={tvShows} />
      </main>
    </div>
  );
} 
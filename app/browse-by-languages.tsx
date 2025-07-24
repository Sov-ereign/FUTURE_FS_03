import { useState } from 'react';
import { Navigation, ContentRow } from './components';

const categories = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

const browseByLanguages = [
  { id: 6, title: "Stranger Things", image: "/assests/Stranger.jpg", rating: 4.8 },
  { id: 9, title: "Narcos", image: "/assests/Narcos.jpg", rating: 4.7 }
];

export default function BrowseByLanguagesPage() {
  const [activeCategory, setActiveCategory] = useState("Browse by Languages");
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
        <ContentRow title="Browse by Languages" items={browseByLanguages} />
      </main>
    </div>
  );
} 
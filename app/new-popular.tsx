import { useState } from 'react';
import { Navigation, ContentRow } from './components';

const categories = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

const newPopular = [
  { id: 17, title: "The Gray Man", image: "/assests/The Gray Man.jpg", rating: 4.0 },
  { id: 6, title: "Stranger Things", image: "/assests/Stranger.jpg", rating: 4.8 },
  { id: 13, title: "Extraction", image: "/assests/extraction.jpg", rating: 4.2 }
];

export default function NewPopularPage() {
  const [activeCategory, setActiveCategory] = useState("New & Popular");
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
        <ContentRow title="New & Popular" items={newPopular} />
      </main>
    </div>
  );
} 
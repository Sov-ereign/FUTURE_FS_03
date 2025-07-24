import { useState } from 'react';
import { Navigation, ContentRow } from './components';

const categories = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

const movies = [
  { id: 13, title: "Extraction", image: "/assests/extraction.jpg", rating: 4.2 },
  { id: 15, title: "6 Underground", image: "/assests/Underground.jpg", rating: 4.1 },
  { id: 17, title: "The Gray Man", image: "/assests/The Gray Man.jpg", rating: 4.0 }
];

export default function MoviesPage() {
  const [activeCategory, setActiveCategory] = useState("Movies");
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
        <ContentRow title="Movies" items={movies} />
      </main>
    </div>
  );
} 
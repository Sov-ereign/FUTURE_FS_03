'use client';
import { useState } from 'react';
import { Navigation, ContentRow } from '../components';
import type { CategoryName } from '../components';

const categories: CategoryName[] = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

const tvShows = [
  { id: 6, title: "Stranger Things", image: "/assests/Stranger.jpg", rating: 4.8, description: "A group of kids uncover supernatural mysteries in their small town." },
  { id: 4, title: "Ozark", image: "/assests/Ozark.jpg", rating: 4.6, description: "A financial advisor is forced to launder money for a drug cartel in the Ozarks." },
  { id: 5, title: "The Witcher", image: "/assests/The Witcher.jpg", rating: 4.5, description: "A mutated monster-hunter for hire journeys toward his destiny in a turbulent world." }
];

export default function TVShowsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShows = tvShows.filter(show =>
    show.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (show.description && show.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation
        categories={categories}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredShows.length > 0 ? (
          <ContentRow title="TV Shows" items={filteredShows} />
        ) : (
          <div className="text-center text-gray-400 py-12 text-lg">No results found.</div>
        )}
      </main>
    </div>
  );
} 
"use client";
import { useState } from "react";
import { Navigation, ContentRow } from "../components";
import type { CategoryName } from "../components";

const categories: CategoryName[] = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

// Sample movies data (replace with API call later)
const movies = [
  { id: 1, title: "Extraction", image: "/assests/extraction.jpg", rating: 4.2, description: "A black ops mercenary embarks on a dangerous rescue mission in Bangladesh." },
  { id: 2, title: "The Gray Man", image: "/assests/The Gray Man.jpg", rating: 4.0, description: "A CIA operative becomes a target after uncovering agency secrets." },
  { id: 3, title: "6 Underground", image: "/assests/Underground.jpg", rating: 4.1, description: "Six individuals fake their deaths to form a vigilante squad." },
  { id: 4, title: "The Witcher", image: "/assests/The Witcher.jpg", rating: 4.5, description: "A monster hunter struggles to find his place in a world where people are often more wicked than beasts." }
];

export default function MoviesPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (movie.description && movie.description.toLowerCase().includes(searchQuery.toLowerCase()))
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
        {filteredMovies.length > 0 ? (
          <ContentRow title="Movies" items={filteredMovies} />
        ) : (
          <div className="text-center text-gray-400 py-12 text-lg">No results found.</div>
        )}
      </main>
    </div>
  );
} 
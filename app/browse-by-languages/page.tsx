"use client";
import { useState } from "react";
import { Navigation, ContentRow } from "../components";
import type { CategoryName } from "../components";

const categories: CategoryName[] = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

// Sample data grouped by language (replace with API call later)
const languageRows = [
  {
    title: "English",
    items: [
      { id: 1, title: "Stranger Things", image: "/assests/Stranger.jpg", rating: 4.8, description: "A group of kids uncover supernatural mysteries in their small town." },
      { id: 2, title: "The Gray Man", image: "/assests/The Gray Man.jpg", rating: 4.0, description: "A CIA operative becomes a target after uncovering agency secrets." }
    ]
  },
  {
    title: "Spanish",
    items: [
      { id: 3, title: "Narcos", image: "/assests/Narcos.jpg", rating: 4.7, description: "The rise and fall of Colombian drug kingpin Pablo Escobar." }
    ]
  }
];

export default function BrowseByLanguagesPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRows = languageRows
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
      <Navigation
        categories={categories}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-bold text-white mb-4">Browse by Languages</h2>
        {filteredRows.length > 0 ? (
          filteredRows.map((row, idx) => (
            <ContentRow key={idx} title={row.title} items={row.items} />
          ))
        ) : (
          <div className="text-center text-gray-400 py-12 text-lg">No results found.</div>
        )}
      </main>
    </div>
  );
} 
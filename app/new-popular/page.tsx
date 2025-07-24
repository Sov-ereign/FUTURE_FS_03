"use client";
import { useState } from "react";
import { Navigation, ContentRow } from "../components";
import type { CategoryName } from "../components";

const categories: CategoryName[] = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

// Sample new & popular data (replace with API call later)
const newPopular = [
  { id: 1, title: "The Gray Man", image: "/assests/The Gray Man.jpg", rating: 4.0, description: "A CIA operative becomes a target after uncovering agency secrets." },
  { id: 2, title: "Stranger Things", image: "/assests/Stranger.jpg", rating: 4.8, description: "A group of kids uncover supernatural mysteries in their small town." },
  { id: 3, title: "House of Cards", image: "/assests/House of Cards.jpg", rating: 4.4, description: "A ruthless politician will stop at nothing to conquer Washington, D.C." },
  { id: 4, title: "Narcos", image: "/assests/Narcos.jpg", rating: 4.7, description: "The rise and fall of Colombian drug kingpin Pablo Escobar." }
];

export default function NewPopularPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation categories={categories} searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContentRow title="New & Popular" items={newPopular} />
      </main>
    </div>
  );
} 
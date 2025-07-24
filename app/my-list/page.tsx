"use client";
import { useState } from "react";
import { Navigation } from "../components";
import { useMyList } from '../../my-list-context';
import { ContentRow } from '../components';

const categories = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

export default function MyListPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { myList } = useMyList();

  const filteredList = myList.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
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
        <h2 className="text-2xl font-bold text-white mb-4">My List</h2>
        {filteredList.length === 0 ? (
          <div className="text-gray-400 text-center py-12 text-lg">No results found.</div>
        ) : (
          <ContentRow title="My List" items={filteredList} />
        )}
      </main>
    </div>
  );
} 
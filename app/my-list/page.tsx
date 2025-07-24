"use client";
import { useState } from "react";
import { Navigation } from "../components";
import { useMyList } from '../my-list-context';
import { ContentRow } from '../components';

const categories = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

export default function MyListPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { myList } = useMyList();
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation categories={categories} searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-4">My List</h2>
        {myList.length === 0 ? (
          <div className="text-gray-400">Your list is empty. Add movies or TV shows to see them here!</div>
        ) : (
          <ContentRow title="My List" items={myList} />
        )}
      </main>
    </div>
  );
} 
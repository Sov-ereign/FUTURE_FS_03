"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface MyListItem {
  id: number;
  title: string;
  image: string;
  rating: number;
  description?: string;
}

interface MyListContextType {
  myList: MyListItem[];
  addToList: (item: MyListItem) => void;
  removeFromList: (id: number) => void;
  isInList: (id: number) => boolean;
}

const MyListContext = createContext<MyListContextType | undefined>(undefined);

export function MyListProvider({ children }: { children: React.ReactNode }) {
  const [myList, setMyList] = useState<MyListItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("myList");
    if (stored) setMyList(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const addToList = (item: MyListItem) => {
    setMyList((prev) => (prev.find((i) => i.id === item.id) ? prev : [...prev, item]));
  };
  const removeFromList = (id: number) => {
    setMyList((prev) => prev.filter((i) => i.id !== id));
  };
  const isInList = (id: number) => myList.some((i) => i.id === id);

  return (
    <MyListContext.Provider value={{ myList, addToList, removeFromList, isInList }}>
      {children}
    </MyListContext.Provider>
  );
}

export function useMyList() {
  const ctx = useContext(MyListContext);
  if (!ctx) throw new Error("useMyList must be used within a MyListProvider");
  return ctx;
} 
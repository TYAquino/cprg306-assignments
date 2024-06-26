"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  const sortedItems = () => {
    if (sortBy === "name") {
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      return [...items].sort((a, b) => a.category.localeCompare(b.category));
    }
    return items;
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <p className="mt-2">Sort by:</p>
        <button
          onClick={handleSortByName}
          className={`px-4 py-2 text-lg font-bold ${
            sortBy === "name" ? "bg-orange-500" : "bg-red-500"
          } text-black hover:scale-110 transition duration-300 ease-in-out border rounded`}
        >
          Name
        </button>
        <button
          onClick={handleSortByCategory}
          className={`px-4 py-2 text-lg font-bold ${
            sortBy === "category" ? "bg-orange-500" : "bg-red-500"
          } text-black hover:scale-110 transition duration-300 ease-in-out border rounded`}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems().map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

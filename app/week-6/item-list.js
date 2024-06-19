"use client";
import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  const handleGroupByCategory = () => {
    setSortBy("grouped category");
  };

  const sortedItems = () => {
    if (sortBy === "name") {
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      return [...items].sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === "grouped category") {
      const grouped = items.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});

      const sortedGrouped = Object.keys(grouped)
        .sort()
        .map((category) => {
          return {
            category,
            items: grouped[category].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
          };
        });

      return sortedGrouped;
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
        <button
          onClick={handleGroupByCategory}
          className={`px-4 py-2 text-lg font-bold ${
            sortBy === "grouped category" ? "bg-orange-500" : "bg-red-500"
          } text-black hover:scale-110 transition duration-300 ease-in-out border rounded`}
        >
          Grouped Category
        </button>
      </div>
      <ul>
        {sortBy === "grouped category"
          ? sortedItems().map((group) => (
              <li
                key={group.category}
                className="capitalize text-black-600 text-center"
              >
                <h2>{group.category}</h2>
                <ul>
                  {group.items.map((item) => (
                    <Item key={item.id} {...item} />
                  ))}
                </ul>
              </li>
            ))
          : sortedItems().map((item) => <Item key={item.id} {...item} />)}
      </ul>
    </div>
  );
}

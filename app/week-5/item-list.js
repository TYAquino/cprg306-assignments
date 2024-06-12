"use client";
import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "grouped category") {
      return a.category.localeCompare(b.groupedCategory);
    }
    return 0;
  });

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  return (
    <div>
      <div>
        <button
          onClick={handleSortByName}
          style={{
            backgroundColor: sortBy === "name" ? "orange" : "red",
            fontSize: "18px",
            fontColor: "black",
            padding: "10px 20px",
            margin: "5px",
          }}
        >
          Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{
            backgroundColor: sortBy === "category" ? "orange" : "red",
            fontSize: "18px",
            padding: "10px 20px",
            margin: "5px",
          }}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
